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
import React, { useState } from "react";
import { Category, Expense, NewExpenseType } from "../Dashboard";

type NewExpenseProps = {
  onAddExpense: (expense: NewExpenseType) => void;
};

const Categories: Category[] = [
  "Food",
  "Entertainment",
  "Transportation",
  "Utilities",
  "Other",
];

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const [addNewExpense, setAddNewExpense] = useState<NewExpenseType>({
    description: "",
    amount: 0,
    category: "Other",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault;
    if(addNewExpense.amount>0){
      onAddExpense(addNewExpense);
      setAddNewExpense({
        description: "",
        amount: 0,
        category: "Other",
    })
    
  }else{
    alert("Amount mustn't 0")
  };
}
  return (
    <div className="">
      <Card className="md:w-full mx-auto px-4 ">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Add New Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="description"
                  placeholder="Name of your usage"
                  value={addNewExpense.description}
                  onChange={(e) => {
                    setAddNewExpense((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="amount"
                  type="number"
                  placeholder="Add Amount"
                  value={addNewExpense.amount || ""}
                  onChange={(e) =>
                    setAddNewExpense((prev) => ({
                      ...prev,
                      amount: Number(e.target.value),
                    }))
                  }
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="category">Other</Label>
                <Select
                  value={addNewExpense.category}
                  onValueChange={(value) =>
                    setAddNewExpense((prev) => ({
                      ...prev,
                      category: value as Category,
                    }))
                  }
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {Categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full " type="submit" onClick={handleSubmit}>
            Add Expense
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewExpense;
