import styled from "styled-components";

export const NotesSection = styled.section`
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
