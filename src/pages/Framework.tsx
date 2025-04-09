
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from 'react-router-dom';
import { FileText, Book, Users, Info, LayoutDashboard, Link as LinkIcon, Search } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Framework = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-project-darkblue py-6">
        <div className="section-container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Framework Document</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar for navigation */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-8">
                <Card className="shadow-md">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-4 text-project-blue flex items-center">
                      <Book className="mr-2 h-5 w-5" /> Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      <a href="#introduction" className="flex items-center text-project-darkblue hover:text-project-blue transition-colors py-1 border-l-2 border-transparent hover:border-project-blue pl-3">
                        <Info className="mr-2 h-4 w-4" /> Introduction & Purpose
                      </a>
                      <a href="#goals" className="flex items-center text-project-darkblue hover:text-project-blue transition-colors py-1 border-l-2 border-transparent hover:border-project-blue pl-3">
                        <LayoutDashboard className="mr-2 h-4 w-4" /> Goals & Objectives
                      </a>
                      <a href="#audience" className="flex items-center text-project-darkblue hover:text-project-blue transition-colors py-1 border-l-2 border-transparent hover:border-project-blue pl-3">
                        <Users className="mr-2 h-4 w-4" /> Target Audience
                      </a>
                      <a href="#message" className="flex items-center text-project-darkblue hover:text-project-blue transition-colors py-1 border-l-2 border-transparent hover:border-project-blue pl-3">
                        <LinkIcon className="mr-2 h-4 w-4" /> Core Message & Tone
                      </a>
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-9">
              <Card className="mb-8 border-t-4 border-t-project-red shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="w-12 h-12 text-project-red mr-4" />
                    <div>
                      <h1 className="text-4xl font-bold text-project-darkblue">Project 2028 Website Framework Document</h1>
                      <div className="flex items-center text-gray-500 mt-2">
                        <span className="mr-4"><strong>Version:</strong> 1.0</span>
                        <span className="mr-4"><strong>Date:</strong> April 9, 2025</span>
                      </div>
                      <div className="text-gray-500">
                        <span className="mr-4"><strong>Prepared For:</strong> Project 2028 Initiative</span>
                      </div>
                      <div className="text-gray-500 italic">
                        <span><strong>Context:</strong> Developed in Siem Reap, Cambodia, reflecting the global scope of the project.</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-8">
                <Card id="introduction" className="shadow-md scroll-mt-16">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-project-blue mb-4 flex items-center">
                      <Info className="mr-2 h-6 w-6" /> 1. Introduction & Purpose
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        This document outlines the framework for the official Project 2028 website. 
                        The website will serve as the primary digital platform for communicating the project's vision, 
                        principles, goals, and resources to a global audience. Its purpose is to inform, engage, 
                        and inspire action towards building more just, equitable, democratic, and sustainable societies 
                        worldwide, offering a constructive alternative to authoritarian, oligarchic, and anti-science trends.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              
                <Card id="goals" className="shadow-md scroll-mt-16">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-project-blue mb-4 flex items-center">
                      <LayoutDashboard className="mr-2 h-6 w-6" /> 2. Website Goals & Objectives
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <ul className="space-y-4">
                        <li>
                          <strong>Inform:</strong> Clearly articulate the mission, vision, core principles, and high-level goals of Project 2028.
                        </li>
                        <li>
                          <strong>Educate:</strong> Provide accessible explanations of key concepts (e.g., democratic resilience, 
                          shared prosperity, evidence-based policy) and their importance.
                        </li>
                        <li>
                          <strong>Contrast & Position:</strong> Establish Project 2028 as a positive, forward-looking, pro-people 
                          alternative to detrimental political projects and ideologies (such as Project 2025).
                        </li>
                        <li>
                          <strong>Engage:</strong> Encourage visitors to explore the content deeply and understand the 
                          interconnectedness of the project's themes.
                        </li>
                        <li>
                          <strong>Mobilize (Future Goal):</strong> Provide pathways for visitors to get involved, share information, 
                          connect with related efforts, and support the initiative (e.g., newsletter sign-ups, social sharing, contact forms).
                        </li>
                        <li>
                          <strong>Serve as a Resource Hub:</strong> Offer access to foundational documents, supporting evidence, 
                          related articles, and potentially links to allied organizations or research.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              
                <Card id="audience" className="shadow-md scroll-mt-16">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-project-blue mb-4 flex items-center">
                      <Users className="mr-2 h-6 w-6" /> 3. Target Audience
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <ul className="space-y-4">
                        <li>
                          <strong>Concerned Citizens:</strong> Individuals globally seeking positive alternatives and ways to 
                          understand and counter negative political trends.
                        </li>
                        <li>
                          <strong>Activists & Organizers:</strong> Individuals and groups working on related issues (democracy, 
                          human rights, labor rights, climate action, social justice) seeking alignment and resources.
                        </li>
                        <li>
                          <strong>Policymakers & Staff:</strong> Officials and advisors looking for comprehensive, alternative 
                          policy frameworks grounded in democratic and pro-people values.
                        </li>
                        <li>
                          <strong>Academics & Researchers:</strong> Scholars studying political science, economics, sociology, 
                          environmental science, etc., interested in the project's framework and evidence base.
                        </li>
                        <li>
                          <strong>Journalists & Media:</strong> Reporters seeking information and context on Project 2028 and its stance.
                        </li>
                        <li>
                          <strong>Students:</strong> Learners seeking to understand contemporary political and social challenges and potential solutions.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              
                <Card id="message" className="shadow-md scroll-mt-16">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-project-blue mb-4 flex items-center">
                      <LinkIcon className="mr-2 h-6 w-6" /> 4. Core Message & Tone
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <h3 className="text-xl font-semibold mt-2 mb-3">Core Message:</h3>
                      <p>
                        Project 2028 offers a hopeful, actionable, and principled framework for building a better future 
                        based on human dignity, democracy, science, shared prosperity, global solidarity, and equity, 
                        serving as a necessary counterpoint to rising authoritarianism and inequality.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Tone:</h3>
                      <ul className="space-y-3">
                        <li>
                          <strong>Confident & Assertive:</strong> Clear and direct about its values and goals.
                        </li>
                        <li>
                          <strong>Hopeful & Constructive:</strong> Focused on positive solutions and a desirable future.
                        </li>
                        <li>
                          <strong>Accessible & Clear:</strong> Avoiding overly academic jargon; explaining complex ideas simply.
                        </li>
                        <li>
                          <strong>Authoritative & Credible:</strong> Grounded in principles and (eventually) evidence.
                        </li>
                        <li>
                          <strong>Inclusive & Global:</strong> Speaking to a diverse international audience.
                        </li>
                        <li>
                          <strong>Urgent but Not Alarmist:</strong> Conveying the importance and timeliness of the initiative.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Framework;
