
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Quote, MessageSquare, Users } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from '@/components/Footer';

const DiscussionGuides = () => {
  const facilitationTips = [
    {
      title: "Create a safe space",
      description: "Establish clear ground rules at the beginning. Encourage respectful disagreement and remind participants that the goal is understanding, not necessarily agreement."
    },
    {
      title: "Ask open-ended questions",
      description: "Questions that can't be answered with a simple 'yes' or 'no' encourage deeper thinking and more meaningful participation from everyone."
    },
    {
      title: "Practice active listening",
      description: "Model listening to understand rather than listening to respond. Summarize points before moving on to show participants they've been heard."
    },
    {
      title: "Balance voices",
      description: "Gently encourage quieter participants while respectfully managing those who tend to dominate. Consider using techniques like round-robin or small breakout groups."
    },
    {
      title: "Maintain focus",
      description: "Gently redirect discussions that veer too far from the topic while allowing for natural conversation flow. Periodically summarize points to track progress."
    }
  ];

  const discussionFormats = [
    {
      id: "study-circle",
      name: "Study Circle",
      description: "A small group (5-15 people) that meets multiple times to explore an issue in depth",
      structure: [
        "Welcome and check-in (10 min)",
        "Review of previous discussion/homework (15 min)",
        "Introduction to current topic with framing questions (10 min)",
        "Main discussion (60-75 min)",
        "Reflection and next steps (15 min)",
        "Closing (5 min)"
      ],
      tips: [
        "Meet consistently, ideally biweekly or monthly",
        "Assign manageable readings or reflections between sessions",
        "Rotate facilitation roles to build leadership",
        "Document key insights and questions for future sessions",
        "Plan for concrete actions based on group learning"
      ]
    },
    {
      id: "community-forum",
      name: "Community Forum",
      description: "A larger event (15-50+ people) designed to surface community perspectives on a specific issue",
      structure: [
        "Welcome and context-setting (10 min)",
        "Panel presentations or community testimony (20-30 min)",
        "Facilitated large group discussion (30 min)",
        "Small group breakouts by topic/question (30-45 min)",
        "Report-backs from small groups (15 min)",
        "Next steps and closing (10 min)"
      ],
      tips: [
        "Use strong facilitation to ensure productive discussion",
        "Provide multiple ways for people to participate (speaking, writing, etc.)",
        "Capture all input through notes, recordings, or other documentation",
        "Have clear process for how community input will be used",
        "Follow up with participants about outcomes and future engagement"
      ]
    },
    {
      id: "kitchen-table",
      name: "Kitchen Table Conversation",
      description: "Informal discussions (3-8 people) hosted in homes to introduce Project 2028 principles",
      structure: [
        "Social time and introductions (15 min)",
        "Personal stories related to the topic (20 min)",
        "Focused discussion on 2-3 key questions (40 min)",
        "Brainstorming actions (15 min)",
        "Commitments and closing (10 min)"
      ],
      tips: [
        "Keep the atmosphere casual and welcoming",
        "Start with personal connections before policy discussions",
        "Use simple language and avoid jargon",
        "Provide easy ways for people to take immediate action",
        "End with an invitation to host their own kitchen table conversation"
      ]
    }
  ];

  const discussionTopics = [
    {
      title: "Democratic Reform",
      description: "Explore ways to strengthen democratic institutions and increase citizen participation",
      questions: [
        "What barriers to democratic participation exist in our community?",
        "How can we increase transparency in local government?",
        "What democratic reforms would make the biggest difference in our area?",
        "How might reforms like ranked choice voting or public financing affect local elections?",
        "What role should technology play in modernizing our democratic systems?"
      ]
    },
    {
      title: "Economic Justice",
      description: "Discuss approaches to creating a more equitable economy that works for everyone",
      questions: [
        "What does a fair economy look like in our community?",
        "How is wealth distributed locally, and what are the historical reasons for this distribution?",
        "What policies would help working families in our area thrive?",
        "How can we support local businesses while ensuring good jobs?",
        "What role should unions play in our community's economic future?"
      ]
    },
    {
      title: "Climate Action",
      description: "Consider both personal and systemic approaches to addressing the climate crisis",
      questions: [
        "How is climate change already affecting our community?",
        "What climate solutions could also address other community needs?",
        "Which local industries need to transition to sustainable practices?",
        "How can we ensure environmental justice in climate policies?",
        "What climate actions can we take at personal, community, and policy levels?"
      ]
    },
    {
      title: "Digital Rights",
      description: "Examine issues of privacy, access, and power in the digital age",
      questions: [
        "How does the digital divide manifest in our community?",
        "What concerns do people have about data privacy and surveillance?",
        "How can technology strengthen rather than undermine democracy?",
        "What should public oversight of technology companies look like?",
        "How can we ensure technology serves human needs rather than exploits them?"
      ]
    }
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
              <BreadcrumbLink>Discussion Guides</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-10 h-10 text-project-blue" />
            <h1 className="text-4xl font-bold">Discussion Guides</h1>
          </div>
          <p className="text-xl mb-6">
            Meaningful conversations are at the heart of community organizing. These guides will help you 
            facilitate productive discussions on issues related to Project 2028's core principles.
          </p>
          <p className="text-lg mb-10">
            Each guide includes suggested formats, facilitation tips, and carefully crafted questions 
            to spark thoughtful dialogue and move people toward collective action.
          </p>

          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl">The Power of Facilitated Dialogue</CardTitle>
              <CardDescription>
                Well-structured discussions build understanding, reveal shared values, and lead to coordinated action
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted p-5 rounded-lg">
                <blockquote className="border-l-4 border-project-blue pl-4 italic">
                  "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."
                  <footer className="text-right mt-2">— Margaret Mead</footer>
                </blockquote>
              </div>
              
              <p>
                Good discussions don't just happen—they require thoughtful preparation, skilled facilitation, 
                and clear purpose. When done well, structured dialogue can:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 list-disc pl-5">
                <li>Build shared understanding across differences</li>
                <li>Surface wisdom and insights from diverse perspectives</li>
                <li>Identify common ground and collaborative opportunities</li>
                <li>Develop collective analysis of complex problems</li>
                <li>Transform individual concerns into collective priorities</li>
                <li>Create pathways from conversation to coordinated action</li>
                <li>Strengthen relationships and community bonds</li>
                <li>Develop new leaders through participation</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Effective Facilitation</h2>
            <p className="mb-6">
              The role of a facilitator is not to direct the conversation or impose views, but to create 
              the conditions for productive dialogue where all participants can contribute meaningfully.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {facilitationTips.map((tip, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-project-blue text-white">
              <CardContent className="p-4 flex items-start gap-3">
                <Quote className="w-10 h-10 opacity-80 flex-shrink-0" />
                <p className="pt-2">
                  <strong>Remember:</strong> The most important skill in facilitation is listening—not just to what 
                  people are saying, but to what they're really trying to communicate. Listen for values, 
                  concerns, hopes, and unspoken questions beneath the surface of the conversation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Discussion Formats</h2>
            <p className="mb-6">
              Choose the right format based on your goals, group size, and available time. Each format 
              serves different purposes and can be adapted to your specific needs.
            </p>
            <Tabs defaultValue="study-circle">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-6">
                {discussionFormats.map(format => (
                  <TabsTrigger key={format.id} value={format.id}>
                    {format.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {discussionFormats.map(format => (
                <TabsContent key={format.id} value={format.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{format.name}</CardTitle>
                      <CardDescription>{format.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-project-blue" />
                          Suggested Structure
                        </h4>
                        <ol className="list-decimal pl-6 space-y-1">
                          {format.structure.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MessageSquare className="h-5 w-5 text-project-blue" />
                          Facilitation Tips
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {format.tips.map((tip, idx) => (
                            <li key={idx}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Discussion Topics & Questions</h2>
            <p className="mb-6">
              These discussion guides focus on key topics related to Project 2028's principles. For each topic, 
              we provide context and carefully crafted questions designed to promote thoughtful dialogue.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {discussionTopics.map((topic, index) => (
                <AccordionItem key={index} value={`topic-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div>
                      <h3 className="text-lg font-semibold">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4 border-l-2 border-project-blue mt-2">
                      <h4 className="font-semibold mb-2">Discussion Questions:</h4>
                      <ol className="list-decimal space-y-3 pl-5">
                        {topic.questions.map((question, qIdx) => (
                          <li key={qIdx}>{question}</li>
                        ))}
                      </ol>
                      <div className="mt-4 bg-muted p-3 rounded-md">
                        <p className="text-sm">
                          <strong>Facilitation tip:</strong> For this topic, consider starting with personal 
                          stories before moving to policy discussions. This helps ground the conversation in 
                          lived experiences rather than abstract concepts.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

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
              <Link to="/messaging-toolkit" className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors text-center">
                Messaging Toolkit
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiscussionGuides;
