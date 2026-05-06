import React from "react";
import { useParams } from "react-router-dom";
import { useTags } from "@/useTags";
import Layout from "@/components/Layout";
import styled from "styled-components";
import Icon from "@/components/Icon";
import { ICONS_MAP } from "@/icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  > input {
    border: none;
    margin-left: 20px;
  }
`;

type Params = {
  id: string;
};

const Tag: React.FC = () => {
  const { findTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id || "-1"));
  if (!tag) {
    return (
      <Layout>
        <div>Tag not found</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <Wrapper>
        <div>
          <Icon icon={ICONS_MAP.left} displayName="left"></Icon>
          <div>编辑标签</div>
        </div>
        <div>
          <label htmlFor="name">标签名</label>
          <input type="text" id="name" value={tag.name} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export { Tag };
