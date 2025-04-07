
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimeSelectorProps {
  onChange?: (value: string) => void;
  className?: string;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ onChange, className }) => {
  return (
    <div className={className}>
      <Select defaultValue="last6months" onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select time period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="last7days">Last 7 Days</SelectItem>
          <SelectItem value="last30days">Last 30 Days</SelectItem>
          <SelectItem value="last3months">Last 3 Months</SelectItem>
          <SelectItem value="last6months">Last 6 Months</SelectItem>
          <SelectItem value="last12months">Last 12 Months</SelectItem>
          <SelectItem value="custom">Custom Range</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeSelector;
