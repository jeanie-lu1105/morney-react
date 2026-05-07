import type React from "react";
import styled from "styled-components";

const LabeledInput = styled.label`
  width: 100%;
  align-items: center;
  display: flex;

  > span {
    color: #333;
    white-space: nowrap;
    margin-right: 16px;
  }

  > input {
    width: 100%;
    display: block;
    height: 44px;
    background: none;
    border: none;
  }
`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <LabeledInput>
      <span>{label || "Label"}</span>
      <input {...rest} />
    </LabeledInput>
  );
};

export { Input };
