
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Scale } from 'lucide-react';

const Principle2 = () => {
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
                <BreadcrumbLink>Democratic Resilience</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <main className="flex-1 bg-white py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Scale className="w-12 h-12 text-project-red mr-4" />
              <h1 className="text-4xl font-bold text-project-darkblue">Principle 2: Democratic Resilience</h1>
            </div>
            
            <div className="border-l-4 border-project-red pl-6 mb-8 italic text-xl text-gray-700">
              <p>Protecting and strengthening democratic institutions, processes, and norms is paramount.</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600">This is a placeholder for the full content about Democratic Resilience. You can replace this with your own content about how democratic institutions must be protected and strengthened to resist authoritarian tendencies and ensure government remains accountable to the people.</p>
              
              <p className="text-lg text-gray-600">The content will explore topics such as voting rights, checks and balances, transparency in governance, free press, civil liberties, and the importance of civic participation.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Principle2;
