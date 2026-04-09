import Layout from "@/components/Layout";
import { NumberPadOptions, TagList } from "@/constants/icon.const";
import styled from "styled-components";

const TagsSection = styled.section`
  background-color: #fff;
  border: 1px solid red;
  padding: 12px 16px;
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
  > label {
    width: 100%;
    background-color: #f6f6f6;
    margin: 12px;
    > span {
      display: inline-block;
      font-size: 14px;
      color: #333;
      margin-right: 12px;
    }
  }
`;
const CategorySection = styled.section``;
const NumberPadSection = styled.section``;

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
          <input type="text" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
          {NumberPadOptions.map((option) => (
            <button key={option}>{option}</button>
          ))}
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
