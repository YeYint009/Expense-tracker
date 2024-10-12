import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const NewExpense = () => {
  return (
    <div className="">
      <Card className="w-[405px] mx-auto px-4 ">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Add New Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="description" placeholder="Name of your usage" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="amount" placeholder="Add Amount" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="other">Other</Label>
                <Select>
                  <SelectTrigger id="other">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full ">Add Expense</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewExpense;
