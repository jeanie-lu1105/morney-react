import Icon from "@/components/Icon";
import Layout from "@/components/Layout";
import { ICONS_MAP } from "@/icons";
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

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Spaces = styled.div`
  height: 16px;
`;

function Tags() {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>
            <Link to={`/tags/${tag}`}>
              <span className="oneLine">{tag}</span>
              <Icon icon={ICONS_MAP.right} displayName="right" />
            </Link>
          </li>
        ))}
      </TagList>

      <Center>
        <Spaces />
        <Button onClick={() => setTags(["new tag"])}>Add tag</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
