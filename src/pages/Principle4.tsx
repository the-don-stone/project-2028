
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-t-4 border-t-project-red shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <TrendingUp className="w-12 h-12 text-project-red mr-4" />
                  <h1 className="text-4xl font-bold text-project-darkblue">Principle 4: Shared Prosperity</h1>
                </div>
                <div className="border-l-4 border-project-red pl-6 my-4 italic text-xl text-gray-700">
                  <p>Economic systems should benefit the many, not just the few, with strong protections for workers and the environment.</p>
                </div>
              </CardHeader>
            </Card>
            
            <div className="space-y-8">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Measuring What Matters: Prosperity for People and Planet</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>True economic success cannot be measured solely by aggregate figures like GDP growth or stock market indices, which often mask deep inequalities and environmental degradation. A thriving economy under Project 2028 is defined by <strong>Shared Prosperity</strong>: a system where economic gains translate into tangible improvements in the living standards, security, and <strong>Well-being</strong> of the vast majority of people, while actively safeguarding the planet for future generations. This principle asserts that economic structures are human creations that must be intentionally designed and regulated to serve the broad public good, rather than allowing wealth and power to concentrate in the hands of a select few (<strong>Anti-Oligarch</strong>).</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Pillars of a Fair Economy</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Achieving shared prosperity requires building an economy on three essential pillars:</p>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">1. Worker Empowerment and Dignity (<strong>Pro-Union</strong>)</h3>
                    <p>Workers are the engines of the economy and deserve dignity, security, and a fair share of the value they create. This requires:</p>
                    <ul>
                      <li><strong>Strong Labor Rights:</strong> Guaranteeing the right to organize, form unions, and bargain collectively without fear of reprisal.</li>
                      <li><strong>Fair Wages & Benefits:</strong> Ensuring wages keep pace with productivity and provide a decent standard of living, complemented by essential benefits like healthcare, paid leave, and retirement security.</li>
                      <li><strong>Safe & Healthy Workplaces:</strong> Enforcing strong occupational safety standards and protecting workers from exploitation and hazardous conditions.</li>
                      <li><strong>Investment in Skills & Training:</strong> Providing opportunities for workers to adapt and thrive in a changing economy through accessible education and training programs.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">2. Fair Distribution of Wealth and Opportunity (<strong>Anti-Oligarch</strong>)</h3>
                    <p>An economy captured by narrow interests cannot deliver shared prosperity. Fairness requires:</p>
                    <ul>
                      <li><strong>Progressive Taxation:</strong> Implementing tax systems where corporations and the wealthiest individuals contribute their fair share to fund public services and reduce inequality.</li>
                      <li><strong>Robust Social Safety Nets:</strong> Providing strong support systems (unemployment insurance, disability benefits, pensions, food assistance) to protect individuals and families from economic shocks and poverty.</li>
                      <li><strong>Anti-Monopoly & Pro-Competition Policies:</strong> Actively combating corporate concentration to ensure fairer markets, greater innovation, and reduced power imbalance between capital and labor/consumers.</li>
                      <li><strong>Investment in Public Goods:</strong> Directing public resources towards universal access to quality education, healthcare, childcare, housing, and infrastructure, leveling the playing field and creating broad opportunities.</li>
                      <li><strong>Curbing Financial Speculation:</strong> Regulating financial markets to prioritize long-term productive investment over destabilizing short-term speculation.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">3. Environmental Sustainability (<strong>Pro-Science</strong>)</h3>
                    <p>Long-term prosperity is impossible on a degraded planet. Economic activity must operate within ecological limits. This necessitates:</p>
                    <ul>
                      <li><strong>Integrating Environmental Costs:</strong> Ensuring that the environmental damage caused by economic activities (e.g., pollution, carbon emissions) is accounted for and paid for, often through regulation or carbon pricing mechanisms informed by <strong>Evidence-Based Policy</strong>.</li>
                      <li><strong>Investing in Green Transitions:</strong> Actively supporting the shift to renewable energy, sustainable agriculture, circular economy models, and green infrastructure, creating new jobs and industries.</li>
                      <li><strong>Conservation & Restoration:</strong> Protecting biodiversity, vital ecosystems, and natural resources that underpin both human well-being and economic stability.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Policy Levers for Inclusive Growth</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Governments have a critical role in shaping economic systems to achieve shared prosperity. Key policy levers include progressive taxation, strong enforcement of labor laws, antitrust actions, targeted public investments, robust social programs, campaign finance reform to reduce corporate influence (<strong>Democratic Resilience</strong>), and environmental regulations aligned with scientific consensus. This is not about rejecting markets, but about structuring them with rules and safeguards that ensure they produce broadly beneficial outcomes.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Countering Economic Concentration and Oligarchy</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Extreme concentration of wealth poses a direct threat not only to shared prosperity but also to <strong>Democratic Resilience</strong>. Wealth translates into political power, allowing oligarchic interests to rig the rules further in their favor, creating a vicious cycle. Policies promoting shared prosperity – such as progressive taxation, empowering workers, and curbing monopolies – are essential tools for decentralizing economic and political power, ensuring the economy serves the <strong>Pro-People</strong> goals of the society, not the narrow interests of an elite.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Interconnections: Economy, Democracy, and Well-being</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Shared prosperity is intrinsically linked to the other principles of Project 2028. It provides the material foundation for <strong>Human Dignity and Well-being</strong>. It strengthens <strong>Democratic Resilience</strong> by reducing corrosive inequality and fostering social cohesion. Achieving it requires <strong>Evidence-Based Policy</strong> to understand what works, and its benefits must be distributed according to principles of <strong>Equity and Inclusion</strong>. It cannot be achieved without respecting environmental limits revealed by <strong>Science</strong>, nor pursued in isolation (<strong>Global Cooperation</strong>).</p>
                    
                    <p>By committing to Shared Prosperity, we envision an economy that fosters widespread opportunity, security, and dignity, operating in harmony with the environment and accountable to the needs of all people.</p>
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

export default Principle4;
