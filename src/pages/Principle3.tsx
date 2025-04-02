
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Lightbulb } from 'lucide-react';

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
      
      <main className="flex-1 bg-white py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-12 h-12 text-project-red mr-4" />
              <h1 className="text-4xl font-bold text-project-darkblue">Principle 3: Evidence-Based Policy</h1>
            </div>
            
            <div className="border-l-4 border-project-red pl-6 mb-8 italic text-xl text-gray-700">
              <p>Decisions must be grounded in scientific consensus, rigorous data, and expert knowledge.</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600">This is a placeholder for the full content about Evidence-Based Policy. You can replace this with your own content about the importance of using scientific research, data analysis, and expert consensus to inform policy decisions rather than ideology or special interests.</p>
              
              <p className="text-lg text-gray-600">The content will explore topics such as the role of science in policymaking, the need for unbiased research, the importance of transparency in data collection and analysis, and mechanisms for incorporating expert knowledge into governance structures.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Principle3;
