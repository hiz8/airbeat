/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { updateTempo } from '../actions';

import { merge, fromEvent, of, interval } from 'rxjs';
import { map, mapTo, scan, switchMap, delay, takeUntil } from 'rxjs/operators';

const MAXIMUM_TEMPO = 208;
const MINIMUM_TEMPO = 40;

interface IProps {
  updateTempo: (value: number) => void;
  tempo: number;
}

const TempoController = (props: IProps) => {
  const plusButton = useRef<HTMLButtonElement>(null);
  const minusButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    /**
     * プラス・マイナスボタンのクリックイベントからストリームを生成
     */

    const plusButtonDown$ = fromEvent(plusButton.current, 'pointerdown');
    const minusButtonDown$ = fromEvent(minusButton.current, 'pointerdown');
    const plusButtonUp$ = fromEvent(plusButton.current, 'pointerup').pipe(
      mapTo(1),
    );
    const minusButtonUp$ = fromEvent(minusButton.current, 'pointerup').pipe(
      mapTo(-1),
    );

    const documentUp$ = fromEvent(document, 'pointerup');
    const buttonsUp$ = merge(plusButtonUp$, minusButtonUp$);
    const buttonsDown$ = merge(plusButtonDown$, minusButtonDown$).pipe(
      switchMap((e: MouseEvent) => {
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
        }, props.tempo),
      )
      .subscribe(value => {
        props.updateTempo(value);
      });

    return () => subscription.unsubscribe();
  }, []);

  function _handleChangeEvent(): void {}

  return (
    <Controller>
      <MinusButton
        type="button"
        id="minus"
        ref={minusButton}
        title="Subtract tempo"
        aria-label="Subtract tempo"
      />

      <Slider>
        <SliderInput
          id="range"
          type="range"
          min={MINIMUM_TEMPO}
          max={MAXIMUM_TEMPO}
          step="1"
          value={props.tempo}
          onChange={_handleChangeEvent}
          aria-label="Set the tempo"
        />
      </Slider>

      <PlusButton
        type="button"
        id="plus"
        ref={plusButton}
        title="Add tempo"
        aria-label="Add tempo"
      />
    </Controller>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateTempo: bindActionCreators(updateTempo, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(React.memo(TempoController));

const Controller = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0.5em 0;
`;

const Button = styled.button`
  background-color: #1baab1;
  box-shadow: none;
  border: 2px solid #fff;
  border-radius: 50%;
  height: 44px;
  width: 44px;
  cursor: pointer;
  font-size: 1.2rem;
  box-sizing: border-box;
  color: #fff;
  font-family: inherit;
  transition: box-shadow 0 linear;
  position: relative;
  outline: none;
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.4);
    outline: none;
  }
  &::before,
  &::after {
    background-color: #fff;
    width: 22px;
    height: 2px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -11px;
    margin-top: -1px;
  }
`;

const PlusButton = styled(Button)`
  &::before {
    content: '';
  }
  &::after {
    content: '';
    transform: rotate(0.25turn);
  }
`;

const MinusButton = styled(Button)`
  &::before {
    content: '';
  }
`;

const Slider = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 0.25em;
`;

const SliderInput = styled.input`
  width: 100%;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0;
  }
  &::-moz-focus-outer {
    border: 0;
  }
  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    margin-top: -0.4rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }
  @media (prefers-reduced-motion: reduce) {
    &::-webkit-slider-thumb {
      transition: none;
    }
  }
  &::-webkit-slider-thumb:active {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.6);
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.2rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
  @media (prefers-reduced-motion: reduce) {
    &::-moz-range-thumb {
      transition: none;
    }
  }
  &::-moz-range-thumb:active {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.6);
  }
  &::-moz-range-track {
    width: 100%;
    height: 0.2rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  &::-ms-thumb {
    width: 16px;
    height: 16px;
    margin-top: 0;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
    cursor: pointer;
  }
  @media (prefers-reduced-motion: reduce) {
    &::-ms-thumb {
      transition: none;
    }
  }
  &::-ms-thumb:active {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.6);
  }
  &::-ms-track {
    width: 100%;
    height: 0.2rem;
    color: transparent;
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;
  }
  &::-ms-fill-lower {
    background-color: #dee2e6;
    border-radius: 1rem;
  }
  &::-ms-fill-upper {
    margin-right: 15px;
    background-color: #dee2e6;
    border-radius: 1rem;
  }
`;
