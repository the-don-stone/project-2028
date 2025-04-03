
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Principle3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-project-darkblue py-6">
        <div className="section-container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#principles">Principles</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Evidence-Based Policy</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-t-4 border-t-project-red shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Lightbulb className="w-12 h-12 text-project-red mr-4" />
                  <h1 className="text-4xl font-bold text-project-darkblue">Principle 3: Evidence-Based Policy</h1>
                </div>
                <div className="border-l-4 border-project-red pl-6 my-4 italic text-xl text-gray-700">
                  <p>Decisions must be grounded in scientific consensus, rigorous data, and expert knowledge.</p>
                </div>
              </CardHeader>
            </Card>
            
            <div className="space-y-8">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">About Evidence-Based Policy</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-600">This is a placeholder for the full content about Evidence-Based Policy. You can replace this with your own content about the importance of using scientific research, data analysis, and expert consensus to inform policy decisions rather than ideology or special interests.</p>
                    
                    <p className="text-lg text-gray-600">The content will explore topics such as the role of science in policymaking, the need for unbiased research, the importance of transparency in data collection and analysis, and mechanisms for incorporating expert knowledge into governance structures.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Principle3;
