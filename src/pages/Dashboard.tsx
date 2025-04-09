import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import EngagementChart from "@/components/dashboard/EngagementChart";
import PlatformPerformance from "@/components/dashboard/PlatformPerformance";
import AIAnalysis from "@/components/dashboard/AIAnalysis";
import AITrendSpotter from "@/components/dashboard/AITrendSpotter";
import TimeSelector from "@/components/dashboard/TimeSelector";
import { getMockData } from "@/services/mockData";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const data = getMockData();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <TimeSelector />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <AIAnalysis goals={data.goals} />
              <AITrendSpotter />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <EngagementChart
                data={data.engagementChart}
                title="Engagement Overview"
              />
              <EngagementChart
                data={data.reachChart}
                title="Reach Overview"
              />
            </div>

            <div className="mt-6">
              <PlatformPerformance data={data.platformData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
