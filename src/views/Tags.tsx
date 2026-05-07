/* eslint-disable no-extra-boolean-cast */
import { Center } from "@/components/Center";
import Icon from "@/components/Icon";
import Layout from "@/components/Layout";
import { Spaces } from "@/components/Space";
import { ICONS_MAP } from "@/icons";
import { createId } from "@/lib/createId";
import { useTags } from "@/useTags";
import { Link } from "react-router";
import styled from "styled-components";

const TagList = styled.ol`
  font-size: 16px;
  background-color: white;

  > li {
    //5e5e7
    border-bottom: 1px solid #d5d5d9;
    margin-left: 16px;
    line-height: 20px;

    > a {
      align-items: center;
      justify-content: space-between;
      display: flex;
      padding: 12px 16px 12px 0;
    }
  }
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px 12px;
  background-color: #767676;
  border-radius: 4px;
  border: none;
  color: white;
  width: 100px;
  cursor: pointer;
`;

function Tags() {
  const { tags, setTags } = useTags();
  const onAddTag = () => {
    const tagName = window.prompt("Please enter the New Tag Name") || "";
    if (!!tagName) {
      setTags([...tags, { id: createId(), name: tagName }]);
    } else {
      console.log("Tag name cannot be empty");
    }
  };
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={`/tags/${tag.id}`}>
              <span className="oneLine">{tag.name}</span>
              <Icon icon={ICONS_MAP.right} name="right" />
            </Link>
          </li>
        ))}
      </TagList>

      <Center>
        <Spaces />
        <Button onClick={onAddTag}>Add tag</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
