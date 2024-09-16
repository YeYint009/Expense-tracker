import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const Monthly = () => {
  return (
    <Card className="shadow-lg ">
      <CardHeader className="flex flex-row items-center justify-between -space-y-3 pb-2">
        <CardTitle className=" fond-bold text-md whitespace-nowrap">Monthly Income</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-4 w-4">
                <PencilIcon className="w-4 h-4" />
            </Button>
          </DialogTrigger>
        </Dialog>
      </CardHeader>
      <CardContent className="flex items-center">
        <div>2000¥</div>
      </CardContent>
    </Card>
  );
};

export default Monthly;
