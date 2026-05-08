import Layout from "@/components/Layout";
import { useState } from "react";
import { CategorySection } from "./money/CategorySection";
import "./statistics.scss";
import { useRecords } from "@/hooks/useRecords";
import { useTags } from "@/hooks/useTags";

const Statistics = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getTagName } = useTags();
  const groupedRecords = records
    .filter((r) => r.category === category)
    .reduce((result, record) => {
      const date = new Date(record.createdAt).toISOString().split("T")[0];
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(record);
      return result;
    }, {});
  const orderedGroupedRecords = Object.entries(groupedRecords).sort(
    (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime(),
  );
  return (
    <Layout>
      <CategorySection
        value={category}
        onChange={(c) => setCategory(c)}
        className="statistics-category-section"
      />

      {orderedGroupedRecords.map(([date, recordList]) => (
        <table key={date}>
          <thead>
            <tr>
              <th colSpan={3} style={{ textAlign: "left" }}>
                {date}
              </th>
            </tr>
          </thead>
          <tbody>
            {recordList.map((r) => (
              <tr key={r.createdAt}>
                <td>
                  {r.tagIds.map((tagId) => (
                    <span key={tagId}>{getTagName(tagId)}</span>
                  ))}
                </td>
                <td>{r.note}</td>
                <td>¥ {r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </Layout>
  );
};

export default Statistics;
