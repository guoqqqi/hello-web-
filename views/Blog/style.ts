import styled from "styled-components";

export const SSection = styled.section`
  width: 100%;
  padding: 125px 0;
  display: block;
  overflow: hidden;
  background: 0 0;
`;

export const SDetail = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 10% 20% 20% 20%;
  background-color: #fff;
  font-size: 1.2em;
  font-weight: 150;
  text-align: center;
  z-index: 8;
  display: inline-block;

  .canvasWrap {
    display: inline-block;
    animation: fadeInCanvas 1s ease-in-out 1 forwards;
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 1;
    transform: scale(-1);
    transform: translate3d(0, -50%, 0);
    opacity: .75;
  }
`;