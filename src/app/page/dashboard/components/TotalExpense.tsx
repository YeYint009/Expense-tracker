"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Expense } from "../Dashboard";

type totalExpenseProps = {
  expenses: Expense[];
};

const TotalExpense = ({ expenses }: totalExpenseProps) => {
  const [totalSumExpense , setTotalSumExpense] = useState(0);
  const [initialLoad ,setInitialLoad] = useState(true);
  useEffect(() => {
    if(!initialLoad){
      const sum = expenses.reduce((sum,expense)=> sum+expense.amount , 0)
      setTotalSumExpense(sum)
    }else { 
      setInitialLoad(false)
    }

  },[expenses,initialLoad])
  return (
    <Card className="shadow-lg ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className=" fond-bold text-md">Total Expense</CardTitle>
        <CurrencyDollarIcon className="h-6 w-6" />
      </CardHeader>
      <CardContent className="flex items-center">
        <div>{totalSumExpense.toFixed(2)} ¥</div>
      </CardContent>
    </Card>
  );
};

export default TotalExpense;
