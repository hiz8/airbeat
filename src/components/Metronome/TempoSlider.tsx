import {
  Slider,
  SliderThumb,
  SliderTrack,
  type SliderProps,
} from 'react-aria-components';

import * as styles from './TempoSlider.css';

type TempoSliderProps = Omit<SliderProps<number[]>, 'numberFormatter'>;

export function TempoSlider(props: TempoSliderProps) {
  return (
    <div className={styles.group}>
      <Slider {...props} className={styles.track}>
        <SliderTrack className={styles.trackBar}>
          <SliderThumb className={styles.thumb} />
        </SliderTrack>
      </Slider>
    </div>
  );
}
