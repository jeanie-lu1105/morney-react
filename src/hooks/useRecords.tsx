import { useState } from "react";
import type { TCategory } from "@views/money/CategorySection.tsx";
import { useUpdate } from "@/hooks/useUpdate.tsx";

type TRecordItem = {
  category: TCategory;
  tagIds: number[];
  note: string;
  amount: string;
  createdAt: string;
  updatedAt: string;
};

type TNewRecord = Omit<TRecordItem, "createdAt" | "updatedAt">;

const localRecords = JSON.parse(
  localStorage.getItem("records") || "[]",
) as TRecordItem[];

const useRecords = () => {
  const [records, setRecords] = useState<TRecordItem[]>(localRecords);
  const addRecords = (newRecord: TNewRecord) => {
    if (parseFloat(newRecord.amount) <= 0) {
      alert("金额必须大于0");
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }
    const record = {
      ...newRecord,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setRecords(records.concat(record));
    return true;
  };

  useUpdate(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, records);
  return { records, addRecords };
};

export { useRecords };

export type { TCategory, TRecordItem, TNewRecord };
