import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import React from "react";

const transactions = [
  { id: 1, title: "House Rent", category: "Utilities", amount: "¥1200" },
  { id: 2, title: "Electricity Bill", category: "Utilities", amount: "¥150" },
  { id: 3, title: "Groceries", category: "Shopping", amount: "¥250" },
  { id: 4, title: "Gym Membership", category: "Fitness", amount: "¥50" },
];

const RecentTransaction = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Card className="w-[405px] mx-auto px-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold whitespace-nowrap">
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center">
                  <CreditCard className="h-6 w-6 text-blue-500 mr-3" />
                  <div>
                    <span className="block text-lg font-semibold">
                      {transaction.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      {transaction.category}
                    </span>
                  </div>
                </div>
                <span className="text-lg font-semibold">{transaction.amount}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentTransaction;
