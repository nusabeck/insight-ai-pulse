
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  Users, 
  Heart, 
  Eye, 
  TrendingUp,
  BarChart2
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  className,
}) => {
  // Determine which icon to use
  const getIcon = () => {
    switch (icon) {
      case "users":
        return <Users className="h-5 w-5 text-brand-blue" />;
      case "heart":
        return <Heart className="h-5 w-5 text-brand-pink" />;
      case "eye":
        return <Eye className="h-5 w-5 text-brand-lightBlue" />;
      case "trending-up":
        return <TrendingUp className="h-5 w-5 text-brand-purple" />;
      default:
        return <BarChart2 className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className="p-2 rounded-full bg-gray-100">{getIcon()}</div>
        </div>
        <div className="mt-4 flex items-center">
          {change >= 0 ? (
            <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span
            className={cn(
              "text-sm font-medium",
              change >= 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {Math.abs(change)}%
          </span>
          <span className="text-sm text-muted-foreground ml-1">vs last period</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
