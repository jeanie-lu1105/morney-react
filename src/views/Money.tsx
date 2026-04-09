import Layout from "@/components/Layout";
import { NumberPadOptions } from "@/constants/icon.const";
import TagsSection from "@/views/money/TagsSection";
import { NotesSection } from "@/views/money/NotesSection";
import { CategorySection } from "@/views/money/CategorySection";
import { NumberPadSection } from "@/views/money/NumberPad";

function Money() {
  return (
    <Layout>
      <TagsSection></TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          {NumberPadOptions.map((option) => (
            <button className={option === "OK" ? "ok" : ""} key={option}>
              {option}
            </button>
          ))}
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
