import styled from 'styled-components';

export const SCanvas = styled.div`
  display: inline-block;
  position: absolute;
  animation: fadeInCanvas 1s ease-in-out 1 forwards;
  width: 100%;
  height: 100%;
  top: 50px;
  left: 0;
  z-index: 1;
  transform: scaleX(-1);
  background-color: #fff;
`