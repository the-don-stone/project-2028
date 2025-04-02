
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-t-4 border-t-project-red shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <ShieldCheck className="w-12 h-12 text-project-red mr-4" />
                  <h1 className="text-4xl font-bold text-project-darkblue">Principle 6: Inclusivity & Equity</h1>
                </div>
                <div className="border-l-4 border-project-red pl-6 my-4 italic text-xl text-gray-700">
                  <p>Actively working to dismantle systemic discrimination and ensure opportunities are available to all.</p>
                </div>
              </CardHeader>
            </Card>
            
            <div className="space-y-8">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">About Inclusivity & Equity</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-600">This is a placeholder for the full content about Inclusivity & Equity. You can replace this with your own content about how a just society must actively work to identify and dismantle barriers that prevent full participation by all members of society, especially those from marginalized and historically disadvantaged groups.</p>
                    
                    <p className="text-lg text-gray-600">The content will explore topics such as addressing systemic racism and other forms of discrimination, ensuring accessibility for people with disabilities, promoting gender equality, supporting LGBTQ+ rights, and creating policies that eliminate rather than reinforce historical inequities.</p>
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

export default Principle6;
