"use client";
import Navbar from "@/components/navBar/Navbar";
import React, { useCallback, useState,useEffect } from "react";
import LastMonth from "./components/LastMonth";
import Monthly from "./components/Monthly";
import NewExpense from "./components/NewExpense";
import ThisMonth from "./components/ThisMonth";
import TotalExpense from "./components/TotalExpense";
import RecentTransaction from "../recent_trasaction/RecentTransaction";
import MostUsedCate from "./components/MostUsedCate";

export type Category =
  | "Food"
  | "Transportation"
  | "Entertainment"
  | "Utilities"
  | "Other";

export type Expense = {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: Category;
};
export type NewExpenseType = {
  description: string;
  amount: number;
  category: Category;
};

export const initialData: Expense[] = [
  {
    id: 1,
    description: "Groceries",
    amount: 50.75,
    date: "2023-06-01",
    category: "Food",
  },
  {
    id: 2,
    description: "Gas",
    amount: 30.0,
    date: "2023-06-02",
    category: "Transportation",
  },
  {
    id: 3,
    description: "Restaurant",
    amount: 45.5,
    date: "2023-06-03",
    category: "Food",
  },
  {
    id: 4,
    description: "Internet Bill",
    amount: 60.0,
    date: "2023-06-04",
    category: "Utilities",
  },
  {
    id: 5,
    description: "Movie Tickets",
    amount: 25.0,
    date: "2023-06-05",
    category: "Entertainment",
  },
];

const Dashboard = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filterExpense = expenses.filter((expense) =>
    expense.description.toLocaleLowerCase().includes(searchTerm)
  );
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  useEffect(()=>{
    setExpenses(initialData)
  },[expenses])
  const addExpense = useCallback(
    (newExpense: NewExpenseType) => {
      const expense: Expense = {
        id: expenses.length + 1,
        description: newExpense.description,
        amount: newExpense.amount,
        category: newExpense.category,

        date: new Date().toISOString().split("T")[0],
      };
      setExpenses((prevExpense) => [...prevExpense, expense]);
    },
    [expenses]
  );

  const updateMonthlyIncome = useCallback((newIncome: number) => {
    setMonthlyIncome(newIncome);
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar onSearch={handleSearch} searchTerm={searchTerm}/>
      <div className="max-w-7xl mx-auto px-2 bg-gray-200">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 ">
          <LastMonth expenses={expenses}/>
          <ThisMonth />
          <TotalExpense expenses={expenses}/>
          <Monthly />
          <RecentTransaction />
          <div className="grid grid-cols-subgrid col-span-3 ">
            <div className="col-start-2">
              <NewExpense />
              <div className="mt-2">
                <MostUsedCate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
