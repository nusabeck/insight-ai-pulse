
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartData } from "@/services/mockData";

interface EngagementChartProps {
  data: ChartData;
  title: string;
  className?: string;
}

interface FormattedChartData {
  name: string;
  [key: string]: string | number;
}

const EngagementChart: React.FC<EngagementChartProps> = ({ data, title, className }) => {
  // Format the data for recharts
  const formatData = (chartData: ChartData): FormattedChartData[] => {
    return chartData.labels.map((label, index) => {
      const entry: FormattedChartData = { name: label };
      chartData.datasets.forEach((dataset) => {
        entry[dataset.name] = dataset.data[index];
      });
      return entry;
    });
  };

  const formattedData = formatData(data);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={formattedData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {data.datasets.map((dataset, index) => (
                <Bar
                  key={index}
                  dataKey={dataset.name}
                  fill={dataset.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EngagementChart;
