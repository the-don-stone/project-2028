
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { TrendingUp } from 'lucide-react';

const Principle4 = () => {
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
                <BreadcrumbLink>Shared Prosperity</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <main className="flex-1 bg-white py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-12 h-12 text-project-red mr-4" />
              <h1 className="text-4xl font-bold text-project-darkblue">Principle 4: Shared Prosperity</h1>
            </div>
            
            <div className="border-l-4 border-project-red pl-6 mb-8 italic text-xl text-gray-700">
              <p>Economic systems should benefit the many, not just the few, with strong protections for workers and the environment.</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600">This is a placeholder for the full content about Shared Prosperity. You can replace this with your own content about how economic systems should be designed to ensure that growth and prosperity are broadly shared across society rather than concentrated among the wealthy and powerful.</p>
              
              <p className="text-lg text-gray-600">The content will explore topics such as progressive taxation, workers' rights and labor protections, environmental sustainability in economic development, addressing wealth inequality, and ensuring economic opportunities for all communities.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Principle4;
