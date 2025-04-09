// Types for our social media data
export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  icon: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    name: string;
    data: number[];
    color?: string;
  }[];
}

export interface PlatformData {
  name: string;
  followers: number;
  engagement: number;
  reach: number;
  growth: number;
  color: string;
  icon: string;
}

export interface Goal {
  id: string;
  name: string;
}

export interface SocialMediaData {
  metrics: MetricCard[];
  engagementChart: ChartData;
  reachChart: ChartData;
  platformData: PlatformData[];
  goals: Goal[];
}

// Mock data for our dashboard
export const getMockData = (): SocialMediaData => {
  return {
    metrics: [
      {
        title: "Total Followers",
        value: "124,582",
        change: 5.2,
        icon: "users"
      },
      {
        title: "Engagement Rate",
        value: "3.8%",
        change: 0.7,
        icon: "heart"
      },
      {
        title: "Post Reach",
        value: "458,294",
        change: 12.3,
        icon: "eye"
      },
      {
        title: "Conversions",
        value: "2,841",
        change: -1.2,
        icon: "trending-up"
      }
    ],
    engagementChart: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          name: "Likes",
          data: [4235, 5428, 6120, 7840, 8350, 7890],
          color: "#4361ee"
        },
        {
          name: "Comments",
          data: [2105, 2418, 3210, 2840, 3150, 2790],
          color: "#7209b7"
        },
        {
          name: "Shares",
          data: [1435, 1628, 2120, 1940, 2250, 1890],
          color: "#4cc9f0"
        }
      ]
    },
    reachChart: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          name: "Organic Reach",
          data: [45235, 52428, 61220, 78340, 83520, 78790],
          color: "#4361ee"
        },
        {
          name: "Paid Reach",
          data: [21050, 24180, 32100, 38400, 41500, 37290],
          color: "#f72585"
        }
      ]
    },
    platformData: [
      {
        name: "Instagram",
        followers: 52480,
        engagement: 4.2,
        reach: 186420,
        growth: 7.8,
        color: "#E1306C",
        icon: "instagram"
      },
      {
        name: "Facebook",
        followers: 38250,
        engagement: 2.7,
        reach: 142380,
        growth: 2.3,
        color: "#1877F2",
        icon: "facebook"
      },
      {
        name: "Twitter",
        followers: 24680,
        engagement: 3.1,
        reach: 92450,
        growth: 4.5,
        color: "#1DA1F2", 
        icon: "twitter"
      },
      {
        name: "LinkedIn",
        followers: 9172,
        engagement: 5.7,
        reach: 37044,
        growth: 9.2,
        color: "#0077B5",
        icon: "linkedin"
      }
    ],
    goals: [
      { id: "brand-awareness", name: "Brand Awareness" },
      { id: "lead-generation", name: "Lead Generation" },
      { id: "engagement", name: "Engagement" },
      { id: "website-traffic", name: "Website Traffic" },
      { id: "community-building", name: "Community Building" }
    ]
  };
};

// AI analysis response based on goals
export const getAIAnalysis = (goalId: string): string => {
  const analyses = {
    "brand-awareness": 
      "Your brand awareness metrics show positive growth with an overall reach increase of 12.3%. Instagram is your strongest platform for building brand awareness with its high reach of 186,420 users. To improve further, consider increasing your posting frequency on Instagram and experimenting with more video content. Facebook's lower engagement rate of 2.7% suggests your content strategy may need revision for that platform to maximize brand visibility.",
    
    "lead-generation": 
      "Your lead generation efforts are showing mixed results. While conversions have slightly decreased by 1.2%, your LinkedIn engagement rate of 5.7% is impressive and should be leveraged further for B2B lead generation. The data indicates that LinkedIn is your most effective platform for converting followers into leads. Consider creating more gated content specifically for LinkedIn to capitalize on this engagement. Your Facebook strategy needs adjustment as its lower engagement rate is not supporting your lead generation goals effectively.",
    
    "engagement": 
      "Your overall engagement rate of 3.8% is above industry average, with a positive growth of 0.7%. Instagram is leading with an engagement rate of 4.2%, while LinkedIn shows the highest at 5.7%. The engagement chart shows that likes have been consistently growing, but comments have plateaued in recent months. To boost engagement further, focus on creating more interactive content that encourages comments and shares. Your content on Facebook is underperforming with only 2.7% engagement - consider revising your content strategy for this platform.",
    
    "website-traffic": 
      "Your social media efforts are driving substantial traffic to your website, with Twitter performing particularly well relative to its follower count. The reach metrics show that your organic reach is consistently outperforming paid reach, which indicates strong content relevance. To further increase website traffic, focus on optimizing your call-to-actions in Instagram posts, which has the highest potential with its 186,420 reach. Consider implementing more trackable links across all platforms to better attribute traffic sources.",
    
    "community-building": 
      "Your community metrics show healthy growth with follower count increasing by 5.2% overall. Instagram shows the strongest community growth at 7.8%, while Facebook is lagging at 2.3%. The engagement patterns suggest that your audience responds best to interactive content, with comments and shares showing steady growth. To strengthen community building, consider implementing more user-generated content campaigns and community Q&A sessions, particularly on Instagram and Twitter where engagement rates are higher."
  };

  return analyses[goalId] || "Select a social media goal to see AI-powered insights based on your current performance metrics.";
};

// Add industry type
export type Industry = 
  | "Technology"
  | "Finance"
  | "Healthcare"
  | "Education"
  | "Retail"
  | "Entertainment"
  | "All Industries";

// Update TrendInfo interface
interface TrendInfo {
  name: string;
  description: string;
  popularity: number;
  industries: Industry[]; // Add industries field
  weeklyGrowth?: number; // Optional growth indicator
}

export const getTrendingTopics = (network: string, industry?: Industry): Promise<TrendInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const trends = {
        twitter: [
          // Technology trends
          {
            name: "#AI",
            description: "Discussions about artificial intelligence innovations and their impact on various industries. Popular among tech professionals and entrepreneurs.",
            popularity: 92,
            industries: ["Technology"],
            weeklyGrowth: 15
          },
          {
            name: "#Web3",
            description: "Emerging discussions about blockchain, NFTs, and decentralized applications shaping the future of the internet.",
            popularity: 88,
            industries: ["Technology", "Finance"],
            weeklyGrowth: 12
          },
          // Finance trends
          {
            name: "#FinTech",
            description: "Latest developments in financial technology, digital banking, and cryptocurrency markets.",
            popularity: 87,
            industries: ["Finance", "Technology"],
            weeklyGrowth: 9
          },
          {
            name: "#MarketAnalysis",
            description: "Real-time market insights, trading strategies, and economic forecasts shared by financial experts.",
            popularity: 84,
            industries: ["Finance"],
            weeklyGrowth: 6
          },
          // Healthcare trends
          {
            name: "#DigitalHealth",
            description: "Innovations in telemedicine, health tech, and patient care solutions.",
            popularity: 86,
            industries: ["Healthcare", "Technology"],
            weeklyGrowth: 11
          },
          {
            name: "#WellnessTech",
            description: "Integration of technology in mental health and wellness practices.",
            popularity: 83,
            industries: ["Healthcare"],
            weeklyGrowth: 7
          },
          // Education trends
          {
            name: "#EdTech",
            description: "Digital transformation in education, online learning platforms, and teaching methodologies.",
            popularity: 85,
            industries: ["Education", "Technology"],
            weeklyGrowth: 8
          },
          // Retail trends
          {
            name: "#RetailTech",
            description: "Technology reshaping shopping experiences and retail operations.",
            popularity: 81,
            industries: ["Retail", "Technology"],
            weeklyGrowth: 5
          },
          // Entertainment trends
          {
            name: "#StreamingWars",
            description: "Competition and innovation in digital entertainment and streaming platforms.",
            popularity: 89,
            industries: ["Entertainment", "Technology"],
            weeklyGrowth: 10
          }
        ],
        instagram: [
          // Entertainment focused
          {
            name: "#ContentCreator",
            description: "Trending strategies and tips for creating engaging social media content.",
            popularity: 95,
            industries: ["Entertainment", "Retail"],
            weeklyGrowth: 14
          },
          // Retail focused
          {
            name: "#ShopLocal",
            description: "Small businesses showcasing products and connecting with local communities.",
            popularity: 88,
            industries: ["Retail"],
            weeklyGrowth: 9
          },
          // Healthcare focused
          {
            name: "#WellnessJourney",
            description: "Health professionals sharing wellness tips and medical knowledge through visual content.",
            popularity: 86,
            industries: ["Healthcare"],
            weeklyGrowth: 7
          },
          // Education focused
          {
            name: "#LearnOnInstagram",
            description: "Educational content creators sharing knowledge through visual storytelling.",
            popularity: 84,
            industries: ["Education"],
            weeklyGrowth: 6
          }
        ],
        linkedin: [
          // Technology focused
          {
            name: "Tech Leadership",
            description: "CTO and tech leaders sharing insights about industry trends and management.",
            popularity: 91,
            industries: ["Technology"],
            weeklyGrowth: 11
          },
          // Finance focused
          {
            name: "Future of Banking",
            description: "Financial industry leaders discussing digital transformation in banking.",
            popularity: 89,
            industries: ["Finance"],
            weeklyGrowth: 8
          },
          // Healthcare focused
          {
            name: "Healthcare Innovation",
            description: "Healthcare professionals sharing insights about medical technology and patient care.",
            popularity: 87,
            industries: ["Healthcare"],
            weeklyGrowth: 9
          },
          // Education focused
          {
            name: "Future of Learning",
            description: "Educators and institutions sharing perspectives on evolving education models.",
            popularity: 86,
            industries: ["Education"],
            weeklyGrowth: 7
          }
        ],
        facebook: [
          // Community focused for each industry
          {
            name: "Tech Communities",
            description: "Developer groups and tech communities sharing knowledge and opportunities.",
            popularity: 88,
            industries: ["Technology"],
            weeklyGrowth: 6
          },
          {
            name: "Financial Education",
            description: "Groups focused on financial literacy and investment education.",
            popularity: 85,
            industries: ["Finance"],
            weeklyGrowth: 5
          },
          {
            name: "Healthcare Support",
            description: "Healthcare communities providing support and information sharing.",
            popularity: 87,
            industries: ["Healthcare"],
            weeklyGrowth: 8
          }
        ],
        tiktok: [
          // Entertainment & Education mix
          {
            name: "#LearnOnTikTok",
            description: "Educational content creators making learning fun and accessible.",
            popularity: 94,
            industries: ["Education", "Entertainment"],
            weeklyGrowth: 15
          },
          // Technology focused
          {
            name: "#TechTok",
            description: "Tech enthusiasts sharing quick tips and tech news in engaging ways.",
            popularity: 92,
            industries: ["Technology", "Entertainment"],
            weeklyGrowth: 13
          },
          // Finance focused
          {
            name: "#FinTok",
            description: "Financial advisors and experts sharing money tips and investment advice.",
            popularity: 90,
            industries: ["Finance", "Education"],
            weeklyGrowth: 11
          },
          // Healthcare focused
          {
            name: "#MedicalTok",
            description: "Healthcare professionals sharing medical knowledge and health tips.",
            popularity: 89,
            industries: ["Healthcare", "Education"],
            weeklyGrowth: 10
          },
          // Retail focused
          {
            name: "#ShopWithMe",
            description: "Creators sharing shopping experiences and product reviews.",
            popularity: 91,
            industries: ["Retail", "Entertainment"],
            weeklyGrowth: 12
          }
        ]
      };

      let filteredTrends = trends[network as keyof typeof trends] || [];
      
      // Filter by industry if specified
      if (industry && industry !== "All Industries") {
        filteredTrends = filteredTrends.filter(trend => 
          trend.industries.includes(industry)
        );
      }

      resolve(filteredTrends);
    }, 1500);
  });
};
