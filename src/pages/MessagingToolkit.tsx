
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Target, AlertTriangle, CheckCircle } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from '@/components/Footer';

const MessagingToolkit = () => {
  const coreNarrative = {
    problem: "Our democratic systems are increasingly captured by wealthy interests, leading to policies that serve the few rather than the many.",
    solution: "Project 2028 offers a framework for democratic renewal based on evidence-based policies that restore power to people.",
    vision: "A society where everyone has the opportunity to thrive, where government serves the public good, and where we collectively address our shared challenges.",
    urgency: "The challenges we face—from climate change to economic inequality—require immediate, coordinated action before they become irreversible."
  };

  const audienceSegments = [
    {
      id: "progressive",
      name: "Progressive Base",
      description: "Already aligned with Project 2028's values and eager for bold action",
      approach: "Emphasize concrete plans and the need for coordination across movements",
      keyWords: ["justice", "solidarity", "collective action", "systemic change", "people power"],
      avoid: ["moderate", "incremental", "compromise", "centrism", "middle ground"]
    },
    {
      id: "persuadable",
      name: "Persuadable Middle",
      description: "Concerned about key issues but unsure about systemic solutions",
      approach: "Focus on shared values and practical benefits of proposed policies",
      keyWords: ["common sense", "practical solutions", "fairness", "opportunity", "working together"],
      avoid: ["radical", "socialist", "revolution", "leftist", "extreme"]
    },
    {
      id: "youth",
      name: "Youth Audiences",
      description: "Gen Z and younger millennials concerned about their future",
      approach: "Highlight urgency, authenticity, and pathways to meaningful involvement",
      keyWords: ["future", "authentic", "impact", "crisis", "equity", "digital rights"],
      avoid: ["traditional", "establishment", "bureaucracy", "wait your turn", "in the past"]
    }
  ];

  const issueFraming = [
    {
      issue: "Climate Action",
      ineffective: "We must sacrifice economic growth to save the planet",
      effective: "Smart climate policies create good jobs while protecting our communities",
      talking_points: [
        "Renewable energy is already creating more jobs than fossil fuels in many regions",
        "Communities on the frontlines of climate impacts need immediate support and investment",
        "Climate solutions create healthier communities with cleaner air and water",
        "We can build a thriving economy powered by clean energy and sustainable industries",
        "The costs of inaction far exceed the investments needed for a just transition"
      ]
    },
    {
      issue: "Economic Justice",
      ineffective: "The wealthy need to pay their fair share",
      effective: "We need an economy that rewards work, not just wealth",
      talking_points: [
        "Everyone who works full time should be able to afford housing, healthcare, and education",
        "Small businesses and workers are the real job creators and economic drivers",
        "Public investments in infrastructure, education, and healthcare benefit everyone",
        "Economic security allows people to innovate, take risks, and contribute to society",
        "An economy that works for everyone is more stable and productive in the long run"
      ]
    },
    {
      issue: "Democratic Reform",
      ineffective: "Our democracy is broken and corrupt",
      effective: "We need a democracy where every voice matters and voters choose their representatives",
      talking_points: [
        "Citizens should have more power than special interests in determining policy",
        "Voting should be secure, accessible, and convenient for all eligible voters",
        "District boundaries should be drawn fairly, not manipulated for partisan advantage",
        "Campaign finance reforms ensure candidates respond to voters, not just donors",
        "A healthy democracy requires informed citizens and trusted sources of information"
      ]
    }
  ];

  const messagingDos = [
    "Lead with shared values before policy details",
    "Use clear, accessible language free of jargon",
    "Tell stories that illustrate the impact of policies on real people",
    "Acknowledge legitimate concerns and questions",
    "Offer a positive vision, not just criticism of the status quo",
    "Tailor your message to your specific audience",
    "Connect local issues to broader systemic patterns",
    "Use metaphors and analogies to explain complex concepts"
  ];

  const messagingDonts = [
    "Use academic or technical language without explanation",
    "Attack people who disagree rather than addressing their concerns",
    "Overwhelm audiences with too many statistics or policy details",
    "Make claims without evidence or examples",
    "Use divisive language that alienates potential allies",
    "Focus only on problems without offering solutions",
    "Rely on insider shorthand or acronyms",
    "Shift message completely for different audiences"
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="section-container">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/organize">Organize</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Messaging Toolkit</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-10 h-10 text-project-blue" />
            <h1 className="text-4xl font-bold">Messaging Toolkit</h1>
          </div>
          <p className="text-xl mb-6">
            Effective communication is essential for building support for Project 2028's principles. 
            This toolkit provides messaging strategies, talking points, and communication best practices.
          </p>
          <p className="text-lg mb-10">
            Use these resources to craft compelling messages that resonate with different audiences 
            while maintaining consistency with our core values and vision.
          </p>

          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl">Core Narrative Framework</CardTitle>
              <CardDescription>
                The foundation for consistent, values-based messaging across all communications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-bold text-lg mb-2">Problem</h3>
                    <p>{coreNarrative.problem}</p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-bold text-lg mb-2">Solution</h3>
                    <p>{coreNarrative.solution}</p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-bold text-lg mb-2">Vision</h3>
                    <p>{coreNarrative.vision}</p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-bold text-lg mb-2">Urgency</h3>
                    <p>{coreNarrative.urgency}</p>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-bold text-lg mb-3">Message Structure</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Values connection:</strong> Begin by establishing shared values</li>
                    <li><strong>Problem statement:</strong> Identify the challenge in human terms</li>
                    <li><strong>Solution vision:</strong> Present Project 2028's approach</li>
                    <li><strong>Benefits:</strong> Explain how this improves people's lives</li>
                    <li><strong>Call to action:</strong> Specify how people can get involved</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Audience-Specific Messaging</h2>
            <p className="mb-6">
              While our core principles remain consistent, how we frame and present them should be 
              tailored to different audiences for maximum effectiveness.
            </p>
            
            <Tabs defaultValue="progressive">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-6">
                {audienceSegments.map(segment => (
                  <TabsTrigger key={segment.id} value={segment.id}>{segment.name}</TabsTrigger>
                ))}
              </TabsList>
              
              {audienceSegments.map(segment => (
                <TabsContent key={segment.id} value={segment.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{segment.name}</CardTitle>
                      <CardDescription>{segment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Recommended Approach</h4>
                          <p>{segment.approach}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" /> Language to Emphasize
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {segment.keyWords.map((word, idx) => (
                                <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
                                  {word}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-amber-600" /> Language to Avoid
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {segment.avoid.map((word, idx) => (
                                <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-sm">
                                  {word}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-muted p-4 rounded-md">
                          <h4 className="font-semibold mb-2">Sample Messaging</h4>
                          <p className="italic">
                            {segment.id === "progressive" && "Together, we can build the power needed to transform our democracy and economy. Project 2028 provides a framework for coordinating our movements toward systemic change that addresses the root causes of inequality and injustice."}
                            {segment.id === "persuadable" && "We all want communities where hard work is rewarded and everyone has a fair shot at success. Project 2028 offers practical solutions to challenges like rising costs and political dysfunction that affect all of us, regardless of party."}
                            {segment.id === "youth" && "Your generation faces unprecedented challenges, but also has unprecedented power to create change. Project 2028 provides both a vision for the future you deserve and concrete ways to build it now, without waiting for permission."}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Issue Framing Guidelines</h2>
            <p className="mb-6">
              How we talk about issues dramatically affects how they're received. These guidelines 
              help frame key issues in ways that connect with audiences' values and experiences.
            </p>
            
            {issueFraming.map((issue, idx) => (
              <Card key={idx} className="mb-6">
                <CardHeader className="pb-2">
                  <CardTitle>{issue.issue}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-4 rounded-md">
                        <h4 className="font-semibold mb-2 text-red-800">Ineffective Framing</h4>
                        <p className="text-red-800">{issue.ineffective}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-md">
                        <h4 className="font-semibold mb-2 text-green-800">Effective Framing</h4>
                        <p className="text-green-800">{issue.effective}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Talking Points</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {issue.talking_points.map((point, pointIdx) => (
                          <li key={pointIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Communication Best Practices</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" /> 
                    <span>Messaging Do's</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {messagingDos.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="text-amber-600" /> 
                    <span>Messaging Don'ts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {messagingDonts.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-project-blue" />
                <span>Key Message Testing</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Before widely using a message, test it with a small audience that represents your target. 
                Use these questions to evaluate effectiveness:
              </p>
              <div className="bg-muted p-4 rounded-md space-y-3">
                <p><strong>1. Is it memorable?</strong> Will people remember the core message tomorrow?</p>
                <p><strong>2. Is it meaningful?</strong> Does it connect to things people care about?</p>
                <p><strong>3. Is it believable?</strong> Do you have evidence or examples that support it?</p>
                <p><strong>4. Is it actionable?</strong> Does it lead naturally to specific next steps?</p>
                <p><strong>5. Is it values-aligned?</strong> Does it reflect Project 2028's core values?</p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-project-blue text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Access More Resources</h2>
            <p className="mb-6">
              Explore our other organizing resources to strengthen your local efforts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/organizers-handbook" className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors text-center">
                Organizer's Handbook
              </Link>
              <Link to="/event-planning" className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors text-center">
                Event Planning Templates
              </Link>
              <Link to="/discussion-guides" className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors text-center">
                Discussion Guides
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MessagingToolkit;
