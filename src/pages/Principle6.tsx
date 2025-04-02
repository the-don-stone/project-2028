
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ShieldCheck } from 'lucide-react';

const Principle6 = () => {
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
                <BreadcrumbLink>Inclusivity & Equity</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <main className="flex-1 bg-white py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <ShieldCheck className="w-12 h-12 text-project-red mr-4" />
              <h1 className="text-4xl font-bold text-project-darkblue">Principle 6: Inclusivity & Equity</h1>
            </div>
            
            <div className="border-l-4 border-project-red pl-6 mb-8 italic text-xl text-gray-700">
              <p>Actively working to dismantle systemic discrimination and ensure opportunities are available to all.</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600">This is a placeholder for the full content about Inclusivity & Equity. You can replace this with your own content about how a just society must actively work to identify and dismantle barriers that prevent full participation by all members of society, especially those from marginalized and historically disadvantaged groups.</p>
              
              <p className="text-lg text-gray-600">The content will explore topics such as addressing systemic racism and other forms of discrimination, ensuring accessibility for people with disabilities, promoting gender equality, supporting LGBTQ+ rights, and creating policies that eliminate rather than reinforce historical inequities.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Principle6;
