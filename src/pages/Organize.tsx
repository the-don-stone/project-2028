
import React from 'react';
import { Users, CheckCircle, Download, FileText, MessageSquare, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

interface OrganizingStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

const organizingSteps: OrganizingStep[] = [
  {
    title: "Build Your Team",
    description: "Start by finding like-minded individuals who share your passion for democratic reform. Even 3-5 dedicated people can make a significant impact in your community.",
    icon: <Users className="w-10 h-10 text-project-blue" />
  },
  {
    title: "Define Your Focus",
    description: "Choose specific Project 2028 principles that resonate most with your local community's needs. Focusing your efforts leads to more tangible outcomes.",
    icon: <CheckCircle className="w-10 h-10 text-project-blue" />
  },
  {
    title: "Create an Action Plan",
    description: "Develop clear, achievable goals with specific timelines. Break down larger objectives into smaller tasks that can be accomplished in weeks rather than months.",
    icon: <FileText className="w-10 h-10 text-project-blue" />
  },
  {
    title: "Engage Your Community",
    description: "Host events, workshops, or discussion groups to raise awareness. Use social media, local press, and community bulletin boards to spread the word.",
    icon: <MessageSquare className="w-10 h-10 text-project-blue" />
  },
  {
    title: "Measure and Celebrate Success",
    description: "Document your progress and celebrate victories, no matter how small. Recognition keeps volunteers motivated and attracts new supporters.",
    icon: <Award className="w-10 h-10 text-project-blue" />
  }
];

const faqs: FAQ[] = [
  {
    question: "How much time should I expect to commit as an organizer?",
    answer: "The time commitment is flexible and can be adapted to your availability. Many successful organizers dedicate 5-10 hours per week, often concentrated around specific events or campaigns. We encourage setting sustainable boundaries to prevent burnout."
  },
  {
    question: "Do I need prior organizing experience?",
    answer: "No prior experience is necessary. We provide resources and mentorship to help new organizers develop their skills. The most important qualities are passion for the cause and willingness to learn."
  },
  {
    question: "Can I receive financial support for my organizing efforts?",
    answer: "Project 2028 is primarily a volunteer-driven initiative. While we can't provide direct financial support, we offer resources, materials, and guidance on fundraising strategies for your local events and activities."
  },
  {
    question: "How do I align my local efforts with the broader Project 2028 movement?",
    answer: "We host monthly coordinator calls where organizers share updates and align strategies. We also provide messaging guides to ensure consistency while allowing for local adaptation. Joining our organizer communication channels keeps you connected with the broader movement."
  },
  {
    question: "What if I face opposition or criticism in my community?",
    answer: "This is common in advocacy work. We provide training on constructive dialogue and conflict resolution. Having well-researched talking points helps address concerns. Remember that building bridges often begins with listening and finding common values."
  }
];

const resourceLinks = [
  {
    title: "Organizer's Handbook",
    description: "Comprehensive guide to building effective local groups",
    icon: <Download className="w-5 h-5" />
  },
  {
    title: "Event Planning Templates",
    description: "Ready-to-use checklists and planning documents",
    icon: <Download className="w-5 h-5" />
  },
  {
    title: "Discussion Guides",
    description: "Frameworks for hosting productive community conversations",
    icon: <Download className="w-5 h-5" />
  },
  {
    title: "Messaging Toolkit",
    description: "Key talking points and communication strategies",
    icon: <Download className="w-5 h-5" />
  }
];

const OrganizePage = () => {
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
          </BreadcrumbList>
        </Breadcrumb>
      
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Organize for Change</h1>
          <p className="text-xl mb-6">
            Real change begins in communities. By organizing locally, you can help build the momentum 
            needed for broader systemic reform. Project 2028 provides the framework, resources, 
            and support—you provide the passion and local knowledge.
          </p>
          <p className="text-lg mb-10">
            Whether you're an experienced organizer or just starting out, you have the power to 
            make a difference. Below are the key steps to launch your organizing efforts, along 
            with resources to help you succeed.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Getting Started: Five Key Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {organizingSteps.map((step, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Organizer Resources</h2>
            <div className="space-y-4">
              {resourceLinks.map((resource, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-project-blue">
                        {resource.icon}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button className="w-full bg-project-blue hover:bg-blue-800">
                Access Resource Library
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-project-blue text-white p-8 rounded-lg max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Organizing?</h2>
          <p className="mb-6">
            Join our network of organizers and get personalized support to launch your local efforts.
            We'll connect you with experienced mentors and fellow organizers in your area.
          </p>
          <Button size="lg" className="bg-white text-project-blue hover:bg-gray-100">
            Sign Up as an Organizer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrganizePage;
