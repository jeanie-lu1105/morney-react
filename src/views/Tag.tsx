import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTags } from "@/hooks/useTags";
import Layout from "@/components/Layout";
import styled from "styled-components";
import Icon from "@/components/Icon";
import { ICONS_MAP } from "@/icons";
import { Button } from "@/components/Button";
import { Input } from "@/components/FormItem";
import { Center } from "@/components/Center";
import { Spaces } from "@/components/Space";

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

const InputWrapper = styled.div`
  background-color: #fff;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id || "-1"));
  const onChange = (e: any) => {
    updateTag(tag.id, { name: e.target.value });
  };
  const history = useNavigate();
  const deleteTagToggle = () => {
    deleteTag(tag.id);
    history(-1);
  };

  const tagContent = (tag: { id: number; name: string }) => (
    <>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          value={tag.name}
          placeholder="标签名"
          onChange={onChange}
        />
      </InputWrapper>
      <Center>
        <Spaces />
        <Spaces />
        <Spaces />
        <Button onClick={deleteTagToggle}>删除标签</Button>
      </Center>
    </>
  );

  return (
    <Layout>
      <Wrapper>
        <TopBar>
          <Icon icon={ICONS_MAP.left} name="left" to="/tags"></Icon>
          <span>编辑标签</span>
          <Icon />
        </TopBar>

        {tag ? (
          tagContent(tag)
        ) : (
          <Center>
            <div>Tag not found</div>
          </Center>
        )}
      </Wrapper>
    </Layout>
  );
};

export { Tag };
