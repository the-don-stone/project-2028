import React, { useState } from 'react';
import { 
  Vote as VoteIcon, 
  Scale as ScaleIcon, 
  Eye as EyeIcon, 
  HeartHandshake as HeartHandshakeIcon, 
  XCircle as XCircleIcon,
  HandCoins as HandCoinsIcon,
  Percent as PercentSquareIcon,
  Building as BuildingIcon,
  PiggyBank as PiggyBankIcon,
  Home as HomeIcon,
  CloudSun as CloudSunIcon,
  Microscope as MicroscopeIcon,
  GraduationCap as GraduationCapIcon,
  Book as BookIcon,
  Bot as BotIcon,
  HeartPulse as HeartPulseIcon,
  School as SchoolIcon,
  Shield as ShieldIcon,
  Handshake as HandshakeIcon,
  Globe as GlobeIcon,
  Scale as ScaleIcon2,
  BarChartHorizontal as BarChartHorizontalIcon,
  AlertCircle as AlertCircleIcon
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const goals = [
  {
    id: "democracy",
    title: "Strengthening Democracy & Countering Authoritarianism",
    items: [
      { text: "Protect & Expand Voting Rights", icon: <VoteIcon className="w-5 h-5 text-project-red" /> },
      { text: "Uphold the Rule of Law", icon: <ScaleIcon className="w-5 h-5 text-project-red" /> },
      { text: "Promote Transparency & Accountability", icon: <EyeIcon className="w-5 h-5 text-project-red" /> },
      { text: "Defend Civil Liberties & Human Rights", icon: <HeartHandshakeIcon className="w-5 h-5 text-project-red" /> },
      { text: "Combat Disinformation", icon: <XCircleIcon className="w-5 h-5 text-project-red" /> },
    ]
  },
  {
    id: "economic",
    title: "Promoting Economic Justice & Curbing Oligarchic Influence",
    items: [
      { text: "Empower Workers & Strengthen Unions", icon: <HandCoinsIcon className="w-5 h-5 text-project-red" /> },
      { text: "Implement Fair Taxation", icon: <PercentSquareIcon className="w-5 h-5 text-project-red" /> },
      { text: "Regulate Corporate Power", icon: <BuildingIcon className="w-5 h-5 text-project-red" /> },
      { text: "Reduce Wealth Inequality", icon: <PiggyBankIcon className="w-5 h-5 text-project-red" /> },
      { text: "Invest in Public Goods", icon: <HomeIcon className="w-5 h-5 text-project-red" /> },
    ]
  },
  {
    id: "science",
    title: "Advancing Science, Sustainability & Innovation for the Public Good",
    items: [
      { text: "Prioritize Climate Action", icon: <CloudSunIcon className="w-5 h-5 text-project-red" /> },
      { text: "Invest in Research & Development", icon: <MicroscopeIcon className="w-5 h-5 text-project-red" /> },
      { text: "Ensure Evidence-Based Policymaking", icon: <GraduationCapIcon className="w-5 h-5 text-project-red" /> },
      { text: "Promote Scientific Literacy", icon: <BookIcon className="w-5 h-5 text-project-red" /> },
      { text: "Ethical Technology Governance", icon: <BotIcon className="w-5 h-5 text-project-red" /> },
    ]
  },
  {
    id: "inclusive",
    title: "Fostering Inclusive & Equitable Societies",
    items: [
      { text: "Universal Access to Essentials", icon: <HeartPulseIcon className="w-5 h-5 text-project-red" /> },
      { text: "Strengthen Social Safety Nets", icon: <ShieldIcon className="w-5 h-5 text-project-red" /> },
      { text: "Advance Social & Racial Justice", icon: <ScaleIcon2 className="w-5 h-5 text-project-red" /> },
      { text: "Promote Gender Equity", icon: <SchoolIcon className="w-5 h-5 text-project-red" /> },
      { text: "Protect Environmental Justice", icon: <BuildingIcon className="w-5 h-5 text-project-red" /> },
    ]
  },
  {
    id: "global",
    title: "Championing Global Cooperation & Responsible Citizenship",
    items: [
      { text: "Re-engage in Diplomacy & Multilateralism", icon: <HandshakeIcon className="w-5 h-5 text-project-red" /> },
      { text: "Support International Law & Human Rights", icon: <GlobeIcon className="w-5 h-5 text-project-red" /> },
      { text: "Promote Fair Trade & Sustainable Development", icon: <BarChartHorizontalIcon className="w-5 h-5 text-project-red" /> },
      { text: "Address Global Challenges Cooperatively", icon: <AlertCircleIcon className="w-5 h-5 text-project-red" /> },
      { text: "Provide Humanitarian Assistance", icon: <HeartHandshakeIcon className="w-5 h-5 text-project-red" /> },
    ]
  }
];

const Goals = () => {
  return (
    <section className="bg-project-white text-project-darkblue py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">High-Level Goals to Accomplish</h2>
          <div className="w-24 h-1 bg-project-red mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">A progressive framework to address the urgent challenges of our time.</p>
        </div>
        
        <Tabs defaultValue="democracy" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-8">
            <TabsTrigger className="text-sm md:text-base" value="democracy">Democracy</TabsTrigger>
            <TabsTrigger className="text-sm md:text-base" value="economic">Economic Justice</TabsTrigger>
            <TabsTrigger className="text-sm md:text-base" value="science">Science & Sustainability</TabsTrigger>
            <TabsTrigger className="text-sm md:text-base" value="inclusive">Inclusive Societies</TabsTrigger>
            <TabsTrigger className="text-sm md:text-base" value="global">Global Cooperation</TabsTrigger>
          </TabsList>
          
          {goals.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="animate-fade-in"
            >
              <div className="bg-project-blue text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="goal-card">
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-3">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Goals;
