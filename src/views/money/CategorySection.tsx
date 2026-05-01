import type React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 55%;
      padding: 16px 0;
      text-align: center;
      position: relative;

      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
`;

const categoryMap = { "-": "支出", "+": "收入" };
type TCategory = keyof typeof categoryMap;
type Props = { value: TCategory; onChange: (category: TCategory) => void };
const CategorySection: React.FC<Props> = (props) => {
  const category = props.value;
  const [categoryList] = useState<TCategory[]>(["-", "+"]);
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c: TCategory) => (
          <li
            key={c}
            className={category === c ? "selected" : ""}
            onClick={() => {
              props.onChange(c);
            }}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
export type { TCategory };
