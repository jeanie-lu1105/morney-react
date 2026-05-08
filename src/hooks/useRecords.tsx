import { useState } from "react";
import type { TCategory } from "@views/money/CategorySection.tsx";
import { useUpdate } from "@/hooks/useUpdate.tsx";

type TRecordItem = {
  category: TCategory;
  tagIds: number[];
  note: string;
  amount: number;
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
    const record = {
      ...newRecord,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setRecords(records.concat(record));
  };

  useUpdate(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);
  return { records, addRecords };
};

export { useRecords };
