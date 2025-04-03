
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Scale } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-t-4 border-t-project-red shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Scale className="w-12 h-12 text-project-red mr-4" />
                  <h1 className="text-4xl font-bold text-project-darkblue">Principle 2: Democratic Resilience</h1>
                </div>
                <div className="border-l-4 border-project-red pl-6 my-4 italic text-xl text-gray-700">
                  <p>Protecting and strengthening democratic institutions, processes, and norms is paramount.</p>
                </div>
              </CardHeader>
            </Card>
            
            <div className="space-y-8">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">The Indispensable Foundation</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Democracy – governance derived from the will of the people – is not merely one political system among many; it is the indispensable foundation for a society that upholds human dignity, fosters well-being, and enables collective progress. It provides the essential framework for peaceful conflict resolution, holds power accountable, and ensures that government ultimately serves the governed. A resilient democracy is one that can withstand challenges, adapt to changing circumstances, and actively resist attempts to undermine the power of the people. Its protection and reinforcement are therefore non-negotiable priorities.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Pillars of Democratic Strength</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Democratic resilience rests on several interconnected pillars, each requiring constant attention and reinforcement:</p>
                    
                    <h3 className="text-xl font-bold mt-6 mb-3">1. Robust Institutions</h3>
                    <p>These are the formal structures that enable democratic governance. Resilience requires:</p>
                    <ul>
                      <li><strong>Independent Judiciaries:</strong> Courts free from political interference, upholding the rule of law fairly and impartially for all.</li>
                      <li><strong>Accountable Legislatures:</strong> Representative bodies that effectively debate, legislate, and provide oversight, reflecting the diverse views of the population.</li>
                      <li><strong>Professional Civil Service:</strong> An impartial administration dedicated to implementing laws effectively and serving the public interest, shielded from political patronage or corruption.</li>
                      <li><strong>Trustworthy Electoral Bodies:</strong> Independent, non-partisan organizations that administer free, fair, and secure elections, ensuring the integrity of the vote.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold mt-6 mb-3">2. Fair and Accessible Processes</h3>
                    <p>These are the mechanisms through which democracy functions. Resilience requires:</p>
                    <ul>
                      <li><strong>Universal Suffrage & Electoral Integrity:</strong> Ensuring every eligible citizen can easily register and vote, with confidence that their vote will be counted accurately and free from suppression, manipulation, or undue influence (combating <strong>Oligarchic</strong> interference).</li>
                      <li><strong>Transparency & Open Government:</strong> Making government operations, data, and decision-making processes accessible to the public to enable scrutiny and accountability.</li>
                      <li><strong>Freedom of Information & Expression:</strong> Guaranteeing the right of citizens and a free, independent press to seek, receive, and impart information and ideas, fostering informed public debate.</li>
                      <li><strong>Right to Peaceful Assembly & Association:</strong> Protecting the ability of people to organize, protest, and advocate for their interests and beliefs (<strong>Pro-People</strong>, <strong>Pro-Union</strong>).</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold mt-6 mb-3">3. Vibrant Democratic Norms</h3>
                    <p>These are the unwritten rules, shared values, and civic attitudes essential for democracy's health. Resilience requires:</p>
                    <ul>
                      <li><strong>Respect for Election Outcomes:</strong> Accepting legitimate results, even in disagreement, and supporting the peaceful transfer of power.</li>
                      <li><strong>Commitment to Truth & Fact-Based Discourse:</strong> Rejecting deliberate disinformation and engaging in public debate grounded in reality (<strong>Pro-Science</strong>).</li>
                      <li><strong>Tolerance & Pluralism:</strong> Respecting differing viewpoints and the rights of political minorities.</li>
                      <li><strong>Civic Engagement & Participation:</strong> Encouraging active involvement of citizens in their communities and political life beyond just voting.</li>
                      <li><strong>Rejection of Political Violence:</strong> Upholding peaceful means as the only legitimate way to pursue political goals.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Confronting the Threats</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Democratic resilience is not guaranteed. It faces constant threats from various sources:</p>
                    <ul>
                      <li><strong>Authoritarianism & Fascism:</strong> Movements and leaders seeking to dismantle checks and balances, suppress dissent, and consolidate power (<strong>Anti-Fascist</strong>).</li>
                      <li><strong>Oligarchic Capture:</strong> Excessive influence of concentrated wealth over political decisions and institutions (<strong>Anti-Oligarch</strong>).</li>
                      <li><strong>Disinformation & Propaganda:</strong> Deliberate efforts, often amplified by technology, to manipulate public opinion, sow division, and erode trust in institutions.</li>
                      <li><strong>Systemic Inequality & Exclusion:</strong> Failure to ensure all segments of society feel represented and benefit from the democratic system can undermine its legitimacy (<strong>Equity</strong>).</li>
                      <li><strong>Foreign Interference:</strong> Attempts by external actors to covertly influence elections and public discourse.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Building for the Future: Proactive Measures</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Protecting democracy requires more than defense; it demands proactive strengthening:</p>
                    <ul>
                      <li><strong>Comprehensive Civics Education:</strong> Equipping citizens from a young age with the knowledge and skills to understand and participate in democratic life.</li>
                      <li><strong>Campaign Finance Reform:</strong> Reducing the corrosive influence of money in politics to ensure responsiveness to citizens, not just donors.</li>
                      <li><strong>Media Literacy Programs:</strong> Helping citizens critically evaluate information sources and identify manipulation.</li>
                      <li><strong>Modernizing Institutions:</strong> Adapting democratic structures and processes to meet contemporary challenges, including those posed by technology.</li>
                      <li><strong>Strengthening Local Democracy:</strong> Empowering communities and fostering participation at the grassroots level.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Enabling a Just and Sustainable Society</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>A resilient democracy is the prerequisite for achieving the other core goals of Project 2028. It empowers people to demand <strong>Economic Justice</strong>, ensures that <strong>Science</strong> can inform policy without political suppression, provides the framework for achieving <strong>Equity and Inclusion</strong>, and underpins <strong>Human Dignity and Well-being</strong> by guaranteeing fundamental rights and accountability. It is also the most reliable basis for responsible <strong>Global Cooperation</strong>. Protecting and strengthening democracy is not merely about preserving a system of government; it is about safeguarding the potential for a more just, equitable, and sustainable future for all.</p>
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

export default Principle2;
