import styled from "styled-components";

export const SContainer = styled.div`
  width: 414px;
  background-color: #feffff;
  margin: 0 auto;
  border: 1px solid #e7e8e8;
  border-bottom: 0;
`;

export const SContainer2 = styled.div`
  width: 414px;
  background-color: #feffff;
  margin: 0 auto;
  border: 1px solid #e7e8e8;
  border-top: 0;
`;

export const STop = styled.div`
  color: #0a0a0a;
  padding: 10px 20px 20px;
  display: flex;
  background-color: #f7f7f7;
  background-image: url("http://pic.51yuansu.com/backgd/cover/00/56/86/5daeab57abb98.jpg!/fw/780/quality/90/unsharp/true/compress/true");
  object-fit: contain;

  p {
    margin: 0;
  }

  .logo {
    width: 20%;
    margin: 0 auto;
    text-align: center;
    border: none;
    border: 1px solid #f3f3f3;
    background-color: #f4f4f4;
    border-radius: 20px;
    align-items: center;
    margin-top: -5px;
    display: table;

    img {
      width: 48px;
      color: #ffffff;
    }
  }

  svg {
    margin-right: 7px;
  }
`;

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
      color: #74c7dc;
      font-size: 30px;
      margin-right: 27px;
    }
  }
`;

export const SSection = styled.div`
  padding: 0 20px;
  background-color: #fdfdfd;

  h1 {
    margin: 10px 0 0;
    font-size: 32px;
    font-weight: 500;
  }

  p {
    color: #a2a2a4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  input[name="toggle"]:checked {
    & + p {
      -webkit-line-clamp: unset;
    }
  }

  .box {
    display: flex;
  }

  .left {
    width: 70%;
    font-size: 16px;
  }

  .right {
    width: 30%;
    align-items: center;
    display: flex;

    img {
      margin-left: 30px;
      min-width: 80px;
      min-height: 80px;
      border: 1px solid #78b9cd;
      background-color: #78b9cd;
    }
  }
`;

export const SSection2 = styled.div`
  padding: 20px;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #fbfbfc;

  p {
    margin: 0;
    font-size: 20px;
    margin-right: 5px;
  }

  div {
    width: 50%;
    display: flex;
  }

  span {
    font-size: 12px;
    line-height: 2.5;
    font-weight: 400;
    color: #a2a2a4;
  }

  button {
    width: 42%;
    text-align: center;
    color: #fdfdfd;
    background-color: #6cc4da;
    border: none;
    border-radius: 4px;
  }
`;

export const SSection3 = styled.div`
  padding: 10px 20px;
  min-height: 415px;
  background-image: linear-gradient(#ffffff, #f5f5f5);

  button {
    width: 65px;
    min-height: 40px;
    font-size: 16px;
    text-align: left;
    padding: 0;
    margin-right: 25px;
    border: none;
    border-bottom: 2px solid #ffffff;
    background-color: #ffffff;
    outline: none;

    :focus {
      color: #6cc4da;
      border-bottom: 2px solid #6cc4da;
    }
  }

  p {
    margin: 10px 0 0;
    color: #3c3b3d;
    line-height: 2;
  }
`;

export const SFooter = styled.div`
  padding: 15px 20px;
  width: 412px;
  display: block;
  font-size: 20px;
  background-color: #fcfeff;
  opacity: 1;
  align-items: center;
  border-top: 1px solid #f5f5f5;

  div {
    align-items: center;
    display: flex;
  }

  .videoTitle {
    display: block;

    p {
      color: #d4d4d5;
      margin: 5px 35px 0 15px;
      font-size: 12px;
    }
  }

  span {
    font-size: 14px;
    margin-left: 15px;
    margin-right: 35px;
  }

  img {
    margin-left: 10px;
    width: 36px;
    height: 36px;
  }

  svg {
    text-align: right;
    margin-left: 15px;
  }
`;
