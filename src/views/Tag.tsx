import React from "react";
import { useParams } from "react-router-dom";
import { useTags } from "@/useTags";
import Layout from "@/components/Layout";
import styled from "styled-components";
import Icon from "@/components/Icon";
import { ICONS_MAP } from "@/icons";
import { Button } from "@/components/Button";

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

const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  line-height: 20px;
  background-color: #fff;
`;

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
        <TopBar>
          <Icon icon={ICONS_MAP.left} displayName="left"></Icon>
          <span>编辑标签</span>
          <Icon />
        </TopBar>
        <div>
          <label>
            <span>标签名</span>
            <input type="text" value={tag.name} />
          </label>
        </div>
        <div>
          <Button>删除标签</Button>
        </div>
      </Wrapper>
    </Layout>
  );
};

export { Tag };
