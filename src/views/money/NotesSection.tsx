/* eslint-disable react-hooks/rules-of-hooks */
import { Input } from "@/components/FormItem";
import { type ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 14px 16px;
  background-color: #f5f5f5;
  font-size: 14px;
`;
type Props = { value: string; onChange: (value: string) => void };
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input
        type="text"
        value={note}
        onChange={onChange}
        placeholder="Please Add Comments"
        label="备注"
      />
    </Wrapper>
  );
};

export { NotesSection };
