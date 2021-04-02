import styled from "styled-components";

export const STop = styled.div`
  color: #0A0A0A;
  padding: 10px 20px 20px;
  display: flex;
  background-color: #F7F7F7;
  background-image: url("http://pic.51yuansu.com/backgd/cover/00/56/86/5daeab57abb98.jpg!/fw/780/quality/90/unsharp/true/compress/true");
  object-fit: contain;

  p {
    margin: 0;
  }

  img {
    width: 14px;
    height: 14px;
    color: #FFFFFF;
  }

  svg {
    margin-right: 7px;
  }
`

export const STop2 = styled.div`
  background-image: url("http://pic.51yuansu.com/backgd/cover/00/56/86/5daeab57abb98.jpg!/fw/780/quality/90/unsharp/true/compress/true");
  object-fit: contain;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  svg {
    margin: 0 23px 0 7px;
  }

  .topRight {
    text-align: right;
    width: 50%;

    a {
      color: #74C7DC;
      font-size: 30px;
      margin-right: 27px;
    }
  }
`
