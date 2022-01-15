import { useRef, MutableRefObject } from 'react';
import { useSlider, useSliderThumb } from '@react-aria/slider';
import {
  useSliderState,
  SliderStateOptions,
  SliderState,
} from '@react-stately/slider';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { mergeProps } from '@react-aria/utils';
import { useNumberFormatter } from '@react-aria/i18n';

import * as styles from './TempoSlider.css';

type TempoSliderProps = Omit<SliderStateOptions, 'numberFormatter'>;

export function TempoSlider(props: TempoSliderProps) {
  const trackRef = useRef(null);
  const numberFormatter = useNumberFormatter();
  const state = useSliderState({ ...props, numberFormatter });
  const { groupProps, trackProps } = useSlider(props, state, trackRef);

  return (
    <div {...groupProps} className={styles.group}>
      <div {...trackProps} ref={trackRef} className={styles.track}>
        <div className={styles.trackBar} />
        <Thumb index={0} state={state} trackRef={trackRef} />
      </div>
    </div>
  );
}

type ThumbProps = {
  index: number;
  state: SliderState;
  trackRef: MutableRefObject<null>;
};
function Thumb(props: ThumbProps) {
  const { state, trackRef, index } = props;
  const inputRef = useRef(null);
  const { thumbProps, inputProps } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state,
  );

  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <div
      className={styles.thumbWrapper}
      style={{
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      <div
        {...thumbProps}
        className={
          styles.thumb[
            isFocusVisible
              ? 'focus'
              : state.isThumbDragging(index)
              ? 'dragging'
              : 'normal'
          ]
        }
      >
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
      </div>
    </div>
  );
}
