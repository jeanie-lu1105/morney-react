import Layout from "@/components/Layout";
import { NumberPadOptions, TagList } from "@/constants/icon.const";
import styled from "styled-components";

const TagsSection = styled.section`
  flex-grow: 1;
  background-color: #fff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  > ol {
    margin: 0 -12px;

    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    border: none;
    background: none;
    padding: 2px 4px;
    color: #666;
    border-bottom: 1px solid #333;
    margin-top: 10px;
  }
`;
const NotesSection = styled.section`
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
const CategorySection = styled.section`
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
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    font-size: 36px;
    line-height: 72px;
    background: white;
    text-align: right;
    padding: 0 16px;
    box-shadow:
      inset 0 -5px 5px -5px rgba(0, 0, 0, 0.2),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.2);
  }

  > .pad {
    float: left;

    > button {
      width: 20%;
      height: 64px;
      font-size: 18px;
      border: none;

      &.ok {
        height: 128px;
        float: right;
      }

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2),
      &:nth-child(6) {
        background: #e0e0e0;
      }

      &:nth-child(3),
      &:nth-child(7),
      &:nth-child(11) {
        background: #d3d3d3;
      }

      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12),
      &:nth-child(16) {
        background: #c1c1c1;
      }

      &:nth-child(5),
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17) {
        background: #b8b8b8;
      }

      &:nth-child(10),
      &:nth-child(14),
      &:nth-child(18) {
        background: #a9a9a9;
      }

      &:nth-child(15) {
        background: #8b8b8b;
      }
      &:nth-child(19) {
        background: #9a9a9a;
      }
    }
  }
`;

function Money() {
  return (
    <Layout>
      <TagsSection className="tags">
        <ol>
          {TagList.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          {NumberPadOptions.map((option) => (
            <button className={option === "OK" ? "ok" : ""} key={option}>
              {option}
            </button>
          ))}
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
