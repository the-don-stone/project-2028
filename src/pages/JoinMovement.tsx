
import React from 'react';
import { Rocket, Eye, Lock, Shield, MoveRight, Mail } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const JoinMovement = () => {
  const volunteerOrgs = [
    {
      name: "Sunrise Movement",
      description: "A youth movement to stop climate change and create millions of good jobs in the process.",
      website: "https://www.sunrisemovement.org/",
      focus: "Climate Justice"
    },
    {
      name: "Democratic Socialists of America",
      description: "Working to build progressive movements for social change while establishing an openly democratic socialist presence in American communities and politics.",
      website: "https://www.dsausa.org/",
      focus: "Economic Justice"
    },
    {
      name: "Working Families Party",
      description: "A grassroots political party fighting for a nation that cares for all of us.",
      website: "https://workingfamilies.org/",
      focus: "Workers' Rights"
    },
    {
      name: "Union of Concerned Scientists",
      description: "Using rigorous, independent science to solve our planet's most pressing problems.",
      website: "https://www.ucsusa.org/",
      focus: "Science Advocacy"
    },
    {
      name: "Our Revolution",
      description: "Building a progressive grassroots political movement to transform American politics.",
      website: "https://ourrevolution.com/",
      focus: "Political Reform"
    },
    {
      name: "Black Lives Matter",
      description: "A global organization whose mission is to eradicate white supremacy and build local power to intervene in violence inflicted on Black communities.",
      website: "https://blacklivesmatter.com/",
      focus: "Racial Justice"
    }
  ];

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
                <BreadcrumbLink>Join the Movement</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-project-darkblue mb-4">
                Join the Movement
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Help us build a better future by advancing Project 2028's core principles through collective action and shared commitment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="text-project-red" />
                    Why Join Project 2028
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <MoveRight className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Be Part of the Solution:</strong> Join a community dedicated to addressing our most pressing challenges through evidence-based policy and collective action.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <MoveRight className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Influence Real Change:</strong> Help shape policies and priorities that promote human dignity, shared prosperity, and democratic resilience.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <MoveRight className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Connect with Others:</strong> Build relationships with like-minded individuals committed to creating a more just, equitable, and sustainable world.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <MoveRight className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Access Resources:</strong> Stay informed with the latest research, tools, and opportunities to advance Project 2028's principles in your community.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="text-project-red" />
                    Our Data Privacy Commitment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Lock className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Minimal Data Collection:</strong> We only collect the information we absolutely need to keep you informed and involved.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Zero Data Selling:</strong> We will never sell or share your personal information with third parties for commercial purposes.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Transparency:</strong> We are committed to being transparent about what data we collect and how we use it.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Respecting Your Inbox:</strong> We hate spam as much as you do. We'll only email you with important updates and information, and you can unsubscribe at any time.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-project-darkblue mb-6 text-center">Recommended Organizations to Volunteer With</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 text-center">
                While Project 2028 is focused on framework development, these organizations are doing incredible work aligned with our principles:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteerOrgs.map((org, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-project-darkblue">{org.name}</CardTitle>
                      <CardDescription className="font-medium text-project-red">{org.focus}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{org.description}</p>
                      <a 
                        href={org.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-project-darkblue font-medium hover:text-project-red transition-colors inline-flex items-center"
                      >
                        Visit Website <MoveRight className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="text-project-red" />
                  Contact Us
                </CardTitle>
                <CardDescription>Reach out to us with questions or to get involved with Project 2028</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center p-4 rounded-lg border bg-white">
                  <Mail className="w-6 h-6 text-project-red mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:n1ghtw1re@proton.me" className="text-project-red hover:underline">n1ghtw1re@proton.me</a>
                  </div>
                </div>
                <p className="text-gray-700">
                  We welcome your inquiries, suggestions, and interest in getting involved with Project 2028. 
                  Please reach out via email, and we'll get back to you as soon as possible.
                </p>
                <p className="text-gray-700">
                  Thank you for your interest in joining our movement to build a better future 
                  based on pro-human, pro-union, anti-fascist, and anti-oligarch values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinMovement;
