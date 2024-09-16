import Navbar from "@/components/navBar/Navbar";
import React from "react";
import LastMonth from "./components/LastMonth";
import Monthly from "./components/Monthly";
import NewExpense from './components/NewExpense';
import ThisMonth from "./components/ThisMonth";
import TotalExpense from "./components/TotalExpense";

const Dashboard = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 h-screen bg-gray-200">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 ">
        <LastMonth />
        <ThisMonth/>
        <TotalExpense/>
        <Monthly/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
