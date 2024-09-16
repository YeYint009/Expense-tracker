import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import React from "react";

const ThisMonth = () => {
  return (
    <Card className="shadow-lg ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className=" fond-bold text-md">This Month</CardTitle>
        <ArrowTrendingUpIcon className="h-6 w-6" />
      </CardHeader>
      <CardContent className="flex items-center">
        <div>2000¥</div>
      </CardContent>
    </Card>
  );
};

export default ThisMonth;
