
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlatformData } from "@/services/mockData";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface PlatformPerformanceProps {
  data: PlatformData[];
  className?: string;
}

const PlatformPerformance: React.FC<PlatformPerformanceProps> = ({ data, className }) => {
  // Get the platform icon
  const getPlatformIcon = (iconName: string, color: string) => {
    switch (iconName.toLowerCase()) {
      case "instagram":
        return <Instagram style={{ color }} />;
      case "facebook":
        return <Facebook style={{ color }} />;
      case "twitter":
        return <Twitter style={{ color }} />;
      case "linkedin":
        return <Linkedin style={{ color }} />;
      default:
        return null;
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Platform Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((platform, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="mr-4">
                {getPlatformIcon(platform.icon, platform.color)}
              </div>
              <div className="flex-1 grid grid-cols-4 gap-2">
                <div>
                  <p className="text-sm font-medium">{platform.name}</p>
                  <p className="text-xs text-muted-foreground">{platform.followers.toLocaleString()} followers</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{platform.engagement}%</p>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{platform.reach.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Reach</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-500">+{platform.growth}%</p>
                  <p className="text-xs text-muted-foreground">Growth</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformPerformance;
