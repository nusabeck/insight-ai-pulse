
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import EngagementChart from "@/components/dashboard/EngagementChart";
import PlatformPerformance from "@/components/dashboard/PlatformPerformance";
import AIAnalysis from "@/components/dashboard/AIAnalysis";
import TimeSelector from "@/components/dashboard/TimeSelector";
import { getMockData } from "@/services/mockData";

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const data = getMockData();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 pb-8">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
              <TimeSelector />
            </div>
            
            {/* Metrics Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {data.metrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  icon={metric.icon}
                />
              ))}
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <EngagementChart
                title="Engagement Overview"
                data={data.engagementChart}
              />
              <EngagementChart
                title="Reach Overview"
                data={data.reachChart}
              />
            </div>
            
            {/* Platform Performance and AI Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PlatformPerformance data={data.platformData} />
              <AIAnalysis goals={data.goals} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
