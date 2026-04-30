import { NumberPadOptions } from "@/constants/icon.const";
import type React from "react";
import { useState } from "react";
import { Wrapper } from "./NumberPadSection/Wrapper";
import {
  generateOutput,
  type TButton,
} from "./NumberPadSection/generateOutput";

const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState("0");
  const setOutput = (value: string) => {
    if (value.length > 16) {
      value = value.slice(0, 16);
    } else if (value.length === 0) {
      value = "0";
    }
    _setOutput(value);
  };
  const onClickNumber = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent as TButton;
    if (text === "OK") {
      // TODO: handle OK button click
    }
    setOutput(generateOutput(text, output));
  };

  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={(e) => onClickNumber(e)}>
        {NumberPadOptions.map((option) => (
          <button className={option === "OK" ? "ok" : ""} key={option}>
            {option}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
