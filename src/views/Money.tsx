import Layout from "@/components/Layout";
import TagsSection from "@/views/money/TagsSection";
import { NotesSection } from "@/views/money/NotesSection";
import { CategorySection } from "@/views/money/CategorySection";
import { NumberPadSection } from "@/views/money/NumberPadSection";

function Money() {
  return (
    <Layout>
      <TagsSection></TagsSection>
      <NotesSection></NotesSection>
      <CategorySection></CategorySection>
      <NumberPadSection></NumberPadSection>
    </Layout>
  );
}

export default Money;
