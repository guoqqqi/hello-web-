import styled from "styled-components";

export const SContainer = styled.div`
  width: 414px;
  background-color: black;
  margin: 0 auto;
`

export const STop = styled.div`
  color: #FFFFFF;
  padding: 20px;
  display: flex;

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

export const SSection = styled.div`
  color: #9C5AF2;
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;

  p {
    margin: 0;
    align-items: center;
    margin-left: 5px;
  }

  svg {
    margin-left: -12px;
  }

  .left {
    width: 35%;
    img {
      width: 130px;
      min-width: 100%;
      min-height: 140px;
      border: 1px solid #FFFFFF;
      background-color: #FFFFFF;
    }
  }

  .right {
    width: 65%;

    h1 {
      margin: 0;
      padding: 0 10px;
      color: #FFFFFF;
      font-weight: 400;
    }

    p {
      margin-left: 10px;
    }

    div {
      margin: 0 10px;
      display: flex;
      padding-top: 54px;
      justify-content: space-between;
    }

    .button1 {
      width: 128px;
      height: 31px;
      color: #FFFFFF;
      background-color: #9C5AF2;
      border-radius: 20px;
      font-size: 16px;
      border: none;
    }

    .button2 {
      width: 31px;
      height: 31px;
      color: #FFFFFF;
      background-color: #9C5AF2;
      border-radius: 50%;
      font-size: 16px;
      border: none;
      font-weight: 800;
    }
  }
`

export const SSection2 = styled.div`
  color: #8D8F93;
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  p {
    margin: 0 0 5px 0;
    font-size: 22px;
  }

  span {
    font-size: 14px;
  }
`

export const SSection3 = styled.div`
  color: #DADBDB;
  padding: 0 20px;
  margin-bottom: 20px;
  display: block;
  font-size: 16px;
  height: 85px;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  input[name="toggle"]:checked {
    & + p {
      -webkit-line-clamp: unset;
    }
  }

  label {
    &::after {
      content: "more";
      color: #9C5AF2;
      display: block;
      text-align: right;
      margin-top: -15px;
      z-index: 10;
      opacity: 1;
    }
  }

  input[name="toggle"]:checked {
    & ~ label {
      &::after {
        content: "收起";
      }
    }
  }
`

export const SSection4 = styled.div`
  color: #DADBDB;
  padding: 0 20px;
  margin-bottom: 20px;
  display: block;
  font-size: 16px;

  h1 {
    color: #FCFDFD;
    margin: 20px 0; 
  }

  .card {
    padding: 10px 0;
    display: flex;
    border-bottom: 1px solid #222222;

    h2 {
      margin: 0;
      font-weight: 300;
      font-size: 20px;
    }
    span {
      color: #717175;
      font-size: 14px;
    }
    p {
      margin: 0;
      color: #717175;
      font-size: 16px;
      width: 90%;
    }
  }

  .cardInner {
    display: flex;
  }

  .cardBottom {
    display: flex;
    margin-top: 10px;

    p {
      color: #9C5AF2;
      width: auto;
      margin-right: 10px;
    }
  }
`

export const SFooter = styled.div`
  color: #E7E8E8;
  padding:  15px 20px;
  margin-top: -75px;
  width: 414px;
  display: block;
  font-size: 20px;
  background-color: #171617;
  opacity: 1;
  position: absolute;
  align-items: center;
  border-bottom: 1px solid #222222;

  div {
    align-items: center;
    display: flex;
  }

  span {
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
`

export const SFooterIcon = styled.div`
  max-width: 414px;
  min-height: 68px;
  color: #828282;
  background-color: #1D1D1D;
  text-align: center;
  font-size: 12px;
  position: relative;
  margin-top: -10px;
  padding-top: 10px;
  display: flex;

  div {
    width: 25%;
  }

  p {
    margin: 0;
  }

  .active {
    color: #7C48BE;
  }
`
