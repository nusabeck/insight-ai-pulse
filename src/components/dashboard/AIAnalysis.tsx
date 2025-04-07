
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Goal, getAIAnalysis } from "@/services/mockData";
import { BrainCircuit, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIAnalysisProps {
  goals: Goal[];
  className?: string;
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({ goals, className }) => {
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [analysis, setAnalysis] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleGoalChange = (value: string) => {
    setSelectedGoal(value);
    // Clear previous analysis when goal changes
    setAnalysis("");
  };

  const generateAnalysis = async () => {
    if (!selectedGoal) {
      toast({
        title: "Please select a goal",
        description: "You need to select a social media goal to generate insights.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      try {
        const aiResponse = getAIAnalysis(selectedGoal);
        setAnalysis(aiResponse);
        toast({
          title: "Analysis generated",
          description: "Your AI insights are ready to view.",
        });
      } catch (error) {
        toast({
          title: "Failed to generate analysis",
          description: "There was an error processing your request. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <BrainCircuit className="h-5 w-5 mr-2 text-brand-purple" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="goal-select" className="text-sm font-medium text-muted-foreground">
              Select your social media goal
            </label>
            <Select
              value={selectedGoal}
              onValueChange={handleGoalChange}
            >
              <SelectTrigger id="goal-select">
                <SelectValue placeholder="Choose a goal" />
              </SelectTrigger>
              <SelectContent>
                {goals.map((goal) => (
                  <SelectItem key={goal.id} value={goal.id}>
                    {goal.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={generateAnalysis}
            disabled={isLoading || !selectedGoal}
            className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 transition-opacity"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating insights...
              </>
            ) : (
              "Summarize with AI"
            )}
          </Button>

          {analysis && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
              <h4 className="font-semibold mb-2">
                {goals.find(g => g.id === selectedGoal)?.name} Insights:
              </h4>
              <p className="text-sm text-slate-700">{analysis}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAnalysis;
