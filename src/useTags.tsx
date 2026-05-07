import { useState } from "react";
import { TagList } from "./constants/icon.const";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(TagList);
  const findTag = (id: number) => tags.filter((t) => t.id === id)[0];
  const updateTag = (id: number, { name }: { name: string }) =>
    setTags(tags.map((t) => (t.id === id ? { ...t, name } : t)));
  const deleteTag = (id: number) => setTags(tags.filter((t) => t.id !== id));
  return { tags, setTags, findTag, updateTag, deleteTag };
};

export { useTags };
