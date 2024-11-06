import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie } from "lucide-react";
import React, { useMemo } from "react";
import { Expense } from "../Dashboard";

type MostUseProps = {
  expenses: Expense[];
};

const MostUsedCate = ({ expenses }: MostUseProps) => {
  const categoryTotals = useMemo(() => {
    return expenses.reduce(
      (totals: { [category: string]: number }, expense) => {
        totals[expense.category] =
          (totals[expense.category] || 0) + expense.amount;
        return totals;
      },
      {}
    );
  }, [expenses]);
  const sortCate = useMemo(() => {
    return Object.entries(categoryTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
  }, [categoryTotals]);
  return (
    <Card className="shadow-lg w-[405px] md:w-full mx-auto px-4 h-48">
      <CardHeader className="flex items-center justify-between space-y-0 pb-2 whitespace-nowrap">
        <CardTitle className=" fond-bold text-xl">
          Most Used Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {sortCate.map(([category, total]) => (
            <li key={category} className="flex items-center justify-between">
              <div className="flex items-center">
                <ChartPie className="h-5 w-5 text-blue-500 mr-2" />
                <span>{category}</span>
              </div>
              <span className="font-semibold">{total} ¥</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MostUsedCate;
