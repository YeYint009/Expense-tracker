"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Monthly = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Card className="shadow-lg ">
      <CardHeader className="flex flex-row items-center justify-between -space-y-3 pb-2">
        <CardTitle className=" fond-bold text-md whitespace-nowrap">
          Monthly Income
        </CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <PencilIcon className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle className="text-black font-bold text-2xl">Monthly Income</DialogTitle>
              <DialogDescription>
                Add Monthly Income
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right font-bold text-black">
                  Name
                </Label>
                <Input
                  id="Yen"
                  defaultValue="2000 ¥"
                  className="col-span-3 w-auto border-black text-black"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="flex items-center">
        <div>2000¥</div>
      </CardContent>
    </Card>
  );
};

export default Monthly;
