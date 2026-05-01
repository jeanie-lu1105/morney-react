/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TagList } from "@/constants/icon.const";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

      &.selected {
        background: #f60;
      }
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
type Props = { value: string[]; onChange: (tags: string[]) => void };

const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(TagList);
  const selectedTags = props.value || [];
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index > -1) {
      props.onChange(selectedTags.filter((t) => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) =>
    selectedTags.indexOf(tag) > -1 ? "selected" : "";
  const onAddTag = () => {
    const tagName = window.prompt("Please enter the New Tag Name");
    if (!!tagName) {
      setTags([...tags, tagName]);
    }
  };

  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            className={getClass(tag)}
            key={tag}
            onClick={() => onToggleTag(tag)}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagsSection;
