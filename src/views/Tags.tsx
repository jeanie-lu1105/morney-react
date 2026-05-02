import Layout from "@/components/Layout";
import { useTags } from "@/useTags";

function Tags() {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <div>Tags</div>
    </Layout>
  );
}

export default Tags;
