import React, { useState } from "react";
import { NextPage } from "next";

type Props = {};

const Boil: NextPage<Props, any> = () => {
  const BoilingVerdict = (props) => {
    console.log('props', props)
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    };
    return <p>The water would not boil.</p>;
  };
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
  };
  const TemperatureInput = (props) => {
    console.log('props', props);
    const [state, setstate] = useState("0");
    const handleChange = (e) => {
      console.log('e', e)
      setstate(e.target.value);
    };

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[props.scale]} :</legend>
        <input
          value={state}
          onChange={(e) => handleChange(e)} />
        <BoilingVerdict
          celsius={parseFloat(state)} />
      </fieldset>
    );
  };

  const Ca = () => {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }

  return (
    <>
      <Ca />
      <div>this is a Boil component.</div>
    </>
  );
};

Boil.getInitialProps = async () => {
  return {};
};

export default Boil;