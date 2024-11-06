import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard, Edit2, Trash2 } from "lucide-react";
import React, { useCallback } from "react";
import { Expense } from "../dashboard/Dashboard";
import { Button } from "@/components/ui/button";

type RecentTrancProps = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

const RecentTransaction = ({ expenses,onDelete}: RecentTrancProps) => {

  const handleDelete = useCallback((id : number) => {
    onDelete(id);
  },[onDelete])
  return (
    <Card className=" px-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold whitespace-nowrap">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {expenses
            .slice(-5)
            .reverse()
            .map((expense) => (
              <li
                key={expense.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center">
                  <CreditCard className="h-6 w-6 text-blue-500 mr-3" />
                  <div>
                    <span className="block text-lg font-semibold">
                      {expense.description}
                    </span>
                    <span className="text-sm text-gray-500">
                      {expense.category}
                    </span>
                  </div>
                </div>
                <span className="text-lg font-semibold">
                  {expense.amount} ¥
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  {expense.date}
                </span>
                <div className="cursor-pointer">
                  <Button variant="ghost" onClick={() => handleDelete(expense.id)}>
                    <Trash2 className="h-5 w-5 text-red-500 " />
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentTransaction;
