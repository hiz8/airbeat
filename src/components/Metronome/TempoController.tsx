import { useEffect, useRef, useContext } from 'react';

import { merge, fromEvent, of, interval } from 'rxjs';
import { map, mapTo, scan, switchMap, delay, takeUntil } from 'rxjs/operators';

import { TempoContext, TempoDispatchContext } from '../../hooks/useMetoronome';

import { TempoSlider } from './TempoSlider';
import * as styles from './TempoController.css';

const MAXIMUM_TEMPO = 208;
const MINIMUM_TEMPO = 40;

export function TempoController(): JSX.Element {
  const plusButton = useRef<HTMLButtonElement>(null);
  const minusButton = useRef<HTMLButtonElement>(null);

  const tempo = useContext(TempoContext);
  const updateTempo = useContext(TempoDispatchContext);

  useEffect(() => {
    if (!plusButton.current || !minusButton.current) {
      return;
    }

    /**
     * プラス・マイナスボタンのクリックイベントからストリームを生成
     */
    const plusButtonDown$ = fromEvent(plusButton.current, 'pointerdown');
    const minusButtonDown$ = fromEvent(minusButton.current, 'pointerdown');
    const plusButtonUp$ = fromEvent(plusButton.current!, 'pointerup').pipe(
      mapTo(1),
    );
    const minusButtonUp$ = fromEvent(minusButton.current!, 'pointerup').pipe(
      mapTo(-1),
    );

    const documentUp$ = fromEvent(document, 'pointerup');
    const buttonsUp$ = merge(plusButtonUp$, minusButtonUp$);
    const buttonsDown$ = merge(plusButtonDown$, minusButtonDown$).pipe(
      switchMap((e) => {
        const value = (e.target as HTMLElement).id === 'plus' ? 1 : -1;
        return of(e).pipe(
          delay(300),
          switchMap(() => {
            return interval(50).pipe(mapTo(value));
          }),
          takeUntil(documentUp$),
        );
      }),
    );

    /**
     * Range input の操作からストリームを生成
     */
    const rangeInput = document.getElementById('range');

    if (!(rangeInput instanceof HTMLInputElement)) {
      return;
    }

    const rangeInputStream$ = fromEvent(rangeInput, 'input').pipe(
      map((val: any) => {
        return val.target.value;
      }),
    );

    /**
     * ストリームをマージし、stateの更新へ
     */
    const subscription = merge(buttonsUp$, buttonsDown$, rangeInputStream$)
      .pipe(
        scan((acc, curr) => {
          if (curr >= 2) {
            return parseInt(curr.toString(), 10);
          } else {
            const math = acc + curr;

            if (MINIMUM_TEMPO > math || math > MAXIMUM_TEMPO) {
              return acc;
            } else {
              return math;
            }
          }
        }, tempo),
      )
      .subscribe((value) => {
        if (updateTempo) {
          updateTempo(value);
        }
      });

    return () => subscription.unsubscribe();
  }, []);

  function _handleChangeEvent2(value: number[]): void {
    if (updateTempo) {
      updateTempo(value[0]);
    }
  }

  return (
    <div className={styles.controller}>
      <button
        type="button"
        id="minus"
        ref={minusButton}
        title="Subtract tempo"
        aria-label="Subtract tempo"
        className={styles.minusButton}
      />

      <TempoSlider
        aria-label="Opacity"
        maxValue={MAXIMUM_TEMPO}
        minValue={MINIMUM_TEMPO}
        defaultValue={[120]}
        step={1}
        value={[tempo]}
        onChange={_handleChangeEvent2}
      />

      <button
        type="button"
        id="plus"
        ref={plusButton}
        title="Add tempo"
        aria-label="Add tempo"
        className={styles.plusButton}
      />
    </div>
  );
}
