"use client";
import { useState } from "react";
import Lg from "./lg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Choose = () => {
  const [model, setModel] = useState<"lg" | "dt">("lg");
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p className="p-4 font-bold text-4xl text-center">
        {model == "dt" ? "Decision Tree" : "Logistic Regression"}
      </p>

      <Select onValueChange={(value) => setModel(value as "lg" | "dt")}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="prediction model" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lg">Logistic Regression</SelectItem>
          <SelectItem value="dt">Decision Tree</SelectItem>
        </SelectContent>
      </Select>

      <Lg isLg={model == "lg"} />
    </div>
  );
};

export default Choose;
