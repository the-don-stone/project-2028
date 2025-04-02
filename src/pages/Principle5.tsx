
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Globe } from 'lucide-react';

const Principle5 = () => {
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
                <BreadcrumbLink>Global Solidarity</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <main className="flex-1 bg-white py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Globe className="w-12 h-12 text-project-red mr-4" />
              <h1 className="text-4xl font-bold text-project-darkblue">Principle 5: Global Solidarity</h1>
            </div>
            
            <div className="border-l-4 border-project-red pl-6 mb-8 italic text-xl text-gray-700">
              <p>Recognizing that major challenges require international cooperation and mutual respect.</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600">This is a placeholder for the full content about Global Solidarity. You can replace this with your own content about how the major challenges facing humanity today—from climate change to pandemics to economic instability—transcend national borders and require coordinated international action.</p>
              
              <p className="text-lg text-gray-600">The content will explore topics such as multilateral cooperation, international institutions, shared responsibility for global challenges, respect for cultural diversity, and the importance of building relationships based on mutual benefit rather than exploitation.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Principle5;
