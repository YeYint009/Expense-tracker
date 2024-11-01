'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowTrendingDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Expense } from "../Dashboard";

type LastMonthProps = {
  expenses: Expense[];
};

const LastMonth = ({ expenses }: LastMonthProps) => {
  const currentDate = new Date();
  const lastMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1
  );

  const lastMonthExpenses = expenses?.filter(expense => {
    const expenseDate = new Date(expense.date);
    return (
      expenseDate.getMonth() === lastMonth.getMonth() &&
      expenseDate.getFullYear() === lastMonth.getFullYear()
    );
  });

  const totalLastMonth = lastMonthExpenses?.reduce(
    (sum, expense) => sum + expense?.amount,
    0
  );
  return (
    <Card className="shadow-lg ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className=" fond-bold text-md">Last Month</CardTitle>
        <ArrowTrendingDownIcon className="h-6 w-6" />
      </CardHeader>
      <CardContent className="flex items-center">
        <div>{totalLastMonth?.toFixed(2)}¥</div>
      </CardContent>
    </Card>
  );
};

export default LastMonth;
