import React from 'react';
import styled from 'styled-components';

interface IProps {
  tempo: number;
}

export default React.memo(
  (props: IProps) => {
    return (
      <OutputTempo>
        <OutputTempoValue>{props.tempo}</OutputTempoValue>
      </OutputTempo>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.tempo === nextProps.tempo;
  },
);

const OutputTempo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  position: relative;
  text-align: right;
  line-height: 1;
`;

const OutputTempoValue = styled.output`
  width: 60px;

  &::after {
    content: 'BPM';
    font-size: 0.9rem;
    position: absolute;
    left: 50%;
    margin-left: 35px;
    bottom: 3px;
  }
`;
