/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 10px 16px;
  background-color: #f5f5f5;
  font-size: 14px;

  > label {
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
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NotesSection: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="Please Add Comments"
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        />
        {/* <input
          type="text"
          placeholder="在这里添加备注"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        /> */}
      </label>
    </Wrapper>
  );
};

export { NotesSection };
