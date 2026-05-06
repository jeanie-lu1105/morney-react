import Layout from "@/components/Layout";
import TagsSection from "@/views/money/TagsSection";
import { NotesSection } from "@/views/money/NotesSection";
import { CategorySection, type TCategory } from "@/views/money/CategorySection";
import { NumberPadSection } from "@/views/money/NumberPadSection";
import { useState } from "react";

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as TCategory,
    amount: 0,
  });
  const updateSelected = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  return (
    <Layout>
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => updateSelected({ tagIds })}
      ></TagsSection>
      <NotesSection
        value={selected.note}
        onChange={(note) => updateSelected({ note })}
      ></NotesSection>
      <CategorySection
        value={selected.category}
        onChange={(category) => updateSelected({ category })}
      ></CategorySection>
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => updateSelected({ amount })}
      ></NumberPadSection>
    </Layout>
  );
}

export default Money;
