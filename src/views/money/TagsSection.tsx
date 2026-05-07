/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTags } from "@/hooks/useTags";
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
type Props = { value: number[]; onChange: (tags: number[]) => void };

const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags();
  const selectedTagIds = props.value || [];
  const onToggleTag = (tagId: number) => {
    const tag = tags.find((t) => t.id === tagId);
    if (!tag) return;
    const index = selectedTagIds.indexOf(tagId);
    if (index > -1) {
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) > -1 ? "selected" : "";

  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            className={getClass(tag.id)}
            key={tag.id}
            onClick={() => onToggleTag(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagsSection;
