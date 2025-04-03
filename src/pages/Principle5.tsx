
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Globe } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-t-4 border-t-project-red shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Globe className="w-12 h-12 text-project-red mr-4" />
                  <h1 className="text-4xl font-bold text-project-darkblue">Principle 5: Global Solidarity</h1>
                </div>
                <div className="border-l-4 border-project-red pl-6 my-4 italic text-xl text-gray-700">
                  <p>Recognizing that major challenges (climate change, pandemics, economic stability) require international cooperation and mutual respect.</p>
                </div>
              </CardHeader>
            </Card>
            
            <div className="space-y-8">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Beyond Borders: Recognizing Our Shared Fate</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>In the 21st century, the idea that any nation can truly isolate itself from global challenges is a dangerous illusion. Issues ranging from the climate crisis profoundly impacting regions like Southeast Asia to pandemics that cross borders with impunity, to economic shocks that ripple across continents, demonstrate our deep interconnectedness. <strong>Global Solidarity</strong> moves beyond narrow nationalism to acknowledge this reality. It embraces the understanding that humanity shares a common destiny on a single planet, and that collective problems demand collective solutions. This principle asserts that proactive international cooperation, grounded in mutual respect, is not merely idealistic, but pragmatic and essential for securing the <strong>Well-being</strong> and security of people everywhere.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Key Arenas for Collective Action</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Global solidarity must translate into tangible cooperation across critical domains:</p>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">1. Climate Change & Environmental Protection (<strong>Pro-Science</strong>)</h3>
                    <p>The climate crisis is a quintessential global challenge requiring immediate, coordinated action. Solidarity means:</p>
                    <ul>
                      <li>Adhering to and strengthening international agreements (like the Paris Agreement) based on <strong>Evidence-Based Policy</strong> and scientific consensus.</li>
                      <li>Supporting developing nations in their transition to sustainable energy and adaptation efforts (climate justice).</li>
                      <li>Collaborating on research, technology sharing, and conservation efforts to protect global biodiversity and vital ecosystems.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">2. Global Health Security</h3>
                    <p>Pandemics and infectious diseases ignore borders. Solidarity means:</p>
                    <ul>
                      <li>Strengthening international health organizations (like the WHO) and global surveillance systems.</li>
                      <li>Ensuring equitable access to vaccines, treatments, and diagnostics worldwide, rejecting vaccine nationalism.</li>
                      <li>Collaborating on research and sharing data openly to combat health threats effectively. Supporting robust public health infrastructure globally is an investment in everyone's safety.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">3. Economic Stability & Justice (<strong>Shared Prosperity</strong>)</h3>
                    <p>Global economic systems link nations inextricably. Solidarity means:</p>
                    <ul>
                      <li>Cooperating on fair international trade rules that protect labor rights and environmental standards.</li>
                      <li>Working together to regulate global finance, combat illicit financial flows and tax evasion that drain resources (<strong>Anti-Oligarch</strong>).</li>
                      <li>Providing development assistance and debt relief where needed to foster global <strong>Shared Prosperity</strong> and reduce instability.</li>
                      <li>Coordinating responses to global economic downturns.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">4. Peace, Human Rights & Humanitarian Action</h3>
                    <p>Lasting peace and respect for <strong>Human Dignity</strong> require international commitment. Solidarity means:</p>
                    <ul>
                      <li>Upholding international law and supporting multilateral institutions dedicated to diplomacy and conflict resolution (e.g., the UN).</li>
                      <li>Promoting and defending universal human rights globally, supporting democratic movements and civil society (<strong>Democratic Resilience</strong>).</li>
                      <li>Providing timely and impartial humanitarian assistance to populations affected by conflict, disaster, or persecution, including refugees and displaced persons.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">The Foundation: Mutual Respect and True Partnership</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Effective international cooperation cannot be built on dominance or coercion. It requires <strong>Mutual Respect</strong>:</p>
                    <ul>
                      <li>Recognizing the sovereignty and diverse circumstances of all nations.</li>
                      <li>Engaging in good-faith diplomacy and dialogue.</li>
                      <li>Ensuring that international forums and decision-making processes are inclusive and give voice to nations of all sizes and levels of development (<strong>Equity</strong>).</li>
                      <li>Moving away from zero-sum thinking towards finding win-win solutions based on shared interests.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Solidarity is Enlightened Self-Interest</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Far from being naive idealism, global solidarity represents the most pragmatic path forward in our interconnected world. Global challenges left unaddressed inevitably rebound on all nations, while cooperative solutions create benefits that extend across borders. By recognizing our shared humanity and common interests, we can build a more stable, just, and sustainable global order that enhances the security and well-being of all.</p>
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

export default Principle5;
