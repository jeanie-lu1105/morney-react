import { useState } from "react";
import { TagList } from "./constants/icon.const";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(TagList);
  return { tags, setTags };
};

export { useTags };
