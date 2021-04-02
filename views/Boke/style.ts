import styled from "styled-components";

export const SSection = styled.section`
  display: flex;
  max-width: 1200px;
  padding: 20px 40px;
  margin: 20px auto;
  background-color: #fff;
`;

export const SBox = styled.div`
  width: 50%;
  display: block;

  input {
    width: 400px;
    height: 40px;
    margin: 10px 0 20px 0;
    border: 1px solid #AAAAAA;
  }

  .chooseBox {
    width: 200px;
    height: 29px;
    margin: 0 auto;
    button {
      width: 100px;
      color: #0076FF;
      background-color: #FFFFFF;
      border: 1px solid #0076FF;
      border-radius: 2px;
    }
    button:focus {
      color: #FFFFFF;
      background-color: #0076FF;
    }
  }
`

export const SInner = styled.div`
  margin-top: 10px;
  font-size: 22px;

  img {
    min-width: 200px;
    min-height: 200px;
    border: 1px solid #AAAAAA;
    background-color: #F3F4F5;
    margin-bottom: 20px;
  }

  textarea {
    width: 400px;
    height: 200px;
    margin-bottom: 20px;
  }
`
