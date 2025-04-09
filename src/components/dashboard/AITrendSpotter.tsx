import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Loader2, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getTrendingTopics, type Industry } from "@/services/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AITrendSpotterProps {
  className?: string;
}

interface TrendInfo {
  name: string;
  description: string;
  popularity: number;
  industries: Industry[];
  weeklyGrowth?: number;
}

const SOCIAL_NETWORKS = [
  { id: "twitter", name: "Twitter/X", color: "#1DA1F2" },
  { id: "instagram", name: "Instagram", color: "#E4405F" },
  { id: "facebook", name: "Facebook", color: "#1877F2" },
  { id: "linkedin", name: "LinkedIn", color: "#0A66C2" },
  { id: "tiktok", name: "TikTok", color: "#000000" },
];

const INDUSTRIES: Industry[] = [
  "All Industries",
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Entertainment",
];

const AITrendSpotter: React.FC<AITrendSpotterProps> = ({ className }) => {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("All Industries");
  const [trends, setTrends] = useState<TrendInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleNetworkChange = async (value: string) => {
    setSelectedNetwork(value);
    await fetchTrends(value, selectedIndustry);
  };

  const handleIndustryChange = async (value: Industry) => {
    setSelectedIndustry(value);
    if (selectedNetwork) {
      await fetchTrends(selectedNetwork, value);
    }
  };

  const fetchTrends = async (network: string, industry: Industry) => {
    setIsLoading(true);
    try {
      const trendingTopics = await getTrendingTopics(network, industry);
      setTrends(trendingTopics);
    } catch (error) {
      toast({
        title: "Failed to fetch trends",
        description: "There was an error fetching the trends. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-brand-pink" />
          AI Trend Spotter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Select social network
              </label>
              <Select value={selectedNetwork} onValueChange={handleNetworkChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a network" />
                </SelectTrigger>
                <SelectContent>
                  {SOCIAL_NETWORKS.map((network) => (
                    <SelectItem key={network.id} value={network.id}>
                      <span className="flex items-center">
                        <span
                          className="h-2 w-2 rounded-full mr-2"
                          style={{ backgroundColor: network.color }}
                        />
                        {network.name}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Select industry
              </label>
              <Select
                value={selectedIndustry}
                onValueChange={handleIndustryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose an industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRIES.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-brand-purple" />
            </div>
          ) : (
            selectedNetwork && (
              <ScrollArea className="h-[400px] rounded-md border p-4">
                <div className="space-y-4">
                  {trends.map((trend, index) => (
                    <div key={index} className="space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm">{trend.name}</h3>
                        <div className="flex items-center gap-2">
                          {trend.weeklyGrowth && (
                            <span className={`text-xs flex items-center ${
                              trend.weeklyGrowth > 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {trend.weeklyGrowth > 0 ? (
                                <ArrowUp className="h-3 w-3 mr-1" />
                              ) : (
                                <ArrowDown className="h-3 w-3 mr-1" />
                              )}
                              {Math.abs(trend.weeklyGrowth)}%
                            </span>
                          )}
                          <span className="text-sm text-muted-foreground">
                            {trend.popularity}% trending
                          </span>
                        </div>
                      </div>
                      <Progress value={trend.popularity} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        {trend.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {trend.industries.map((industry) => (
                          <span
                            key={industry}
                            className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AITrendSpotter; 