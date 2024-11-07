"use client";
import Navbar from "@/components/navBar/Navbar";
import React, { useCallback, useState, useEffect, useRef } from "react";
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

const Dashboard = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      const storeExpense = localStorage.getItem("expenses");
      console.log("get from localStorage : ", storeExpense);
      if (storeExpense) {
        try {
          const parsedExpense = JSON.parse(storeExpense);
          setExpenses(parsedExpense);
        } catch (error) {
          console.error("parsing data error", error);
          localStorage.removeItem("expenses");
        }
      }
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (initialized.current) {
      console.log("Save data:", JSON.stringify(expenses));
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpense = useCallback((newExpense: NewExpenseType) => {
    const expense: Expense = {
      id: Date.now(),
      description: newExpense.description,
      amount: newExpense.amount,
      category: newExpense.category,

      date: new Date().toISOString().split("T")[0],
    };
    setExpenses((prevExpense) => [...prevExpense, expense]);
  }, []);

  const handleDelete = useCallback((id: number) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 bg-gray-200">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-3 ">
          <LastMonth expenses={expenses} />
          <ThisMonth expenses={expenses} />
          <TotalExpense expenses={expenses} />
          <Monthly />
          <div className="grid grid-col-2 gap-4 col-span-2">
            <div className="grid w-full">
              <RecentTransaction expenses={expenses} onDelete={handleDelete} />
            </div>
          </div>
          <div className=" grid col-span-2">
            <div className="grid w-full gap-2">
              <NewExpense onAddExpense={addExpense} />
              <MostUsedCate expenses={expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
