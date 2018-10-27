import styled from 'styled-components';

export default ({ lastUpdate, light }) => {
  return <Clock light={light}>{format(new Date(lastUpdate))}</Clock>;
};

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const pad = n => (n < 10 ? `0${n}` : n);

const Clock = styled.div`
  padding: 15px;
  display: inline-block;
  color: #82fa58;
  font: 50px menlo, monaco, monospace;
  background-color: ${props => (props.light ? '#999' : '#000')};
`;
