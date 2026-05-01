/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
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
type Props = { value: string; onChange: (value: string) => void };
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
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
