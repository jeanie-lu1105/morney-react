import { useState } from "react";
import { TagList } from "./constants/icon.const";

const useTags = () => {
  const [tags, setTags] = useState(TagList);
  return { tags, setTags };
};

export { useTags };
