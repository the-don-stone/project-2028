
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from '@/components/Footer';

const OrganizersHandbook = () => {
  const sections = [
    {
      title: "Building Your Core Team",
      content: "The foundation of any successful organizing effort is a dedicated core team. Start with 3-5 committed individuals who share your passion for democratic reform. Look for people with complementary skills and diverse perspectives. Hold regular meetings to build trust and establish clear roles based on each person's strengths and interests. Remember that a small, highly committed team is more effective than a large, loosely connected group."
    },
    {
      title: "Setting Clear Objectives",
      content: "Effective organizing requires specific, measurable goals. Begin by identifying the most pressing issues in your community that align with Project 2028's principles. Develop both short-term objectives (achievable within 1-3 months) and longer-term goals. For each objective, establish clear metrics to track progress. Regularly revisit and adjust your goals based on changing circumstances and community feedback."
    },
    {
      title: "Mapping Your Community",
      content: "Understanding the landscape of your community is crucial. Create a community map identifying key stakeholders, potential allies, existing organizations with aligned values, and centers of community power. Research local history, demographics, and previous organizing efforts. Identify community assets that can be leveraged and challenges that must be addressed. This mapping exercise helps you target your efforts where they'll be most effective."
    },
    {
      title: "Effective Outreach Strategies",
      content: "Successful organizing requires thoughtful outreach. Develop a compelling story that communicates why your work matters. Use multiple channels including social media, community events, door-to-door conversations, and local press. Tailor your message to different audiences while maintaining consistency in your core values. Always include specific ways for people to get involved at various levels of commitment."
    },
    {
      title: "Building Coalitions",
      content: "No single group can achieve systemic change alone. Identify potential coalition partners whose missions align with yours. Approach partnerships with humility and a clear understanding of mutual benefit. Be transparent about your goals and limitations. Formalize coalition relationships with clear agreements about decision-making processes, resource sharing, and public communications. Regular coalition meetings help maintain alignment and build trust."
    },
    {
      title: "Managing Volunteers",
      content: "Volunteers are the lifeblood of community organizing. Create clear pathways for involvement with varying levels of commitment. Provide thorough orientation and training. Develop systems for tracking volunteer skills, interests, and availability. Acknowledge contributions regularly and provide opportunities for leadership development. Remember that volunteer management is relationship management—make people feel valued and connected to the larger purpose."
    },
    {
      title: "Sustaining Momentum",
      content: "Maintaining energy over time is challenging but essential. Celebrate small victories along the way to keep morale high. Create regular touchpoints such as weekly updates or monthly gatherings. Develop leadership pipelines to prevent burnout and ensure continuity when key organizers need to step back. Regularly evaluate what's working and what isn't, and be willing to adapt your strategies accordingly."
    }
  ];

  const bestPractices = [
    "Document everything—meeting notes, event outcomes, successful tactics",
    "Develop accessible onboarding materials for new organizers",
    "Practice inclusive decision-making to ensure diverse perspectives are heard",
    "Create clear communication channels for your team and broader community",
    "Build time for relationship-building and community care into your work",
    "Establish boundaries to prevent burnout among core organizers",
    "Regularly assess your effectiveness against your stated goals"
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
              <BreadcrumbLink>Organizer's Handbook</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-10 h-10 text-project-blue" />
            <h1 className="text-4xl font-bold">Organizer's Handbook</h1>
          </div>
          <p className="text-xl mb-6">
            This comprehensive guide provides the fundamentals of community organizing to help you build 
            effective local groups aligned with Project 2028's principles.
          </p>
          <p className="text-lg mb-10">
            Whether you're new to organizing or have years of experience, this handbook offers 
            practical strategies, best practices, and troubleshooting advice to support your efforts.
          </p>

          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl">Core Organizing Principles</CardTitle>
              <CardDescription>
                These fundamental principles guide effective organizing work
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-2 bg-muted p-4 rounded-md">
                  <h3 className="font-bold text-lg">People-Centered Approach</h3>
                  <p>
                    Successful organizing starts and ends with people. Build relationships based on shared values and mutual respect. 
                    Listen deeply to understand community needs rather than imposing solutions.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 bg-muted p-4 rounded-md">
                  <h3 className="font-bold text-lg">Strategic Focus</h3>
                  <p>
                    Direct limited resources toward specific, achievable goals that build toward larger systemic change. 
                    Regularly assess whether tactics are advancing your strategy.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 bg-muted p-4 rounded-md">
                  <h3 className="font-bold text-lg">Distributed Leadership</h3>
                  <p>
                    Develop leadership at all levels of your organization. Create systems where responsibility and decision-making 
                    are shared among many people rather than concentrated among a few.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 bg-muted p-4 rounded-md">
                  <h3 className="font-bold text-lg">Intersectional Approach</h3>
                  <p>
                    Recognize that systems of oppression overlap and reinforce each other. Develop strategies that address multiple 
                    forms of injustice simultaneously and center those most affected.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Handbook Sections</h2>
            <Accordion type="single" collapsible className="w-full">
              {sections.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg">{section.title}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl">Organizing Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {bestPractices.map((practice, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-project-blue mr-2 mt-1 flex-shrink-0" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="bg-project-blue text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
            <p className="mb-6">
              Explore our other organizing resources to help you implement the strategies outlined in this handbook.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/event-planning" className="flex items-center justify-between p-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                <span>Event Planning Templates</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/discussion-guides" className="flex items-center justify-between p-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                <span>Discussion Guides</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/messaging-toolkit" className="flex items-center justify-between p-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                <span>Messaging Toolkit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrganizersHandbook;
