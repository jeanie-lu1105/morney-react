import { useState } from "react";
import { createId } from "../lib/createId";
import { TagList } from "@/constants/icon.const.ts";
import { useUpdate } from "./useUpdate";

type TTag = {
  id: number;
  name: string;
};
const localTags = JSON.parse(localStorage.getItem("tags") || "[]");
const tagList = localTags.length ? localTags : TagList;
const useTags = () => {
  const [tags, setTags] = useState<TTag[]>(tagList);
  useUpdate(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);
  const addTag = () => {
    const name = window.prompt("请输入标签名") || "";
    if (!name) {
      alert("标签名不能为空");
      return;
    }
    setTags([...tags, { id: createId(), name }]);
  };
  const findTag = (id: number) => tags?.filter((t) => t.id === id)[0];
  const updateTag = (id: number, { name }: { name: string }) =>
    setTags(tags?.map((t) => (t.id === id ? { ...t, name } : t)));
  const deleteTag = (id: number) => setTags(tags?.filter((t) => t.id !== id));
  return { tags, setTags, addTag, findTag, updateTag, deleteTag };
};

export { useTags };
