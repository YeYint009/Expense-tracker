import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie } from "lucide-react";
import React from "react";

const MostUsedCate = () => {
  return (
    <Card className="shadow-lg w-[405px] mx-auto px-4 h-48">
      <CardHeader className="flex items-center justify-between space-y-0 pb-2 whitespace-nowrap">
        <CardTitle className=" fond-bold text-xl">
          Most Used Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <ChartPie className="h-5 w-5 text-blue-500 mr-2" />
              <span>Food</span>
            </div>
            <span className="font-semibold">$250.00</span>
          </li>
          <li className="flex items-center justify-between">
        <div className="flex items-center">
          <ChartPie className="h-5 w-5 text-blue-500 mr-2" />
          <span>Entertainment</span>
        </div>
        <span className="font-semibold">$100.00</span>
      </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default MostUsedCate;
