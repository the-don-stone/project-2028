
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-t-4 border-t-project-red shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Lightbulb className="w-12 h-12 text-project-red mr-4" />
                  <h1 className="text-4xl font-bold text-project-darkblue">Principle 3: Evidence-Based Policy</h1>
                </div>
                <div className="border-l-4 border-project-red pl-6 my-4 italic text-xl text-gray-700">
                  <p>Decisions must be grounded in scientific consensus, rigorous data, and expert knowledge.</p>
                </div>
              </CardHeader>
            </Card>
            
            <div className="space-y-8">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Moving Beyond Guesswork: The Case for Evidence</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Effective governance demands more than good intentions; it requires a commitment to understanding reality as accurately as possible and using that understanding to craft policies that genuinely work for the people. Evidence-Based Policy (EBP) provides the framework for achieving this. By grounding decisions in the best available science, data, and expertise, we move away from policymaking driven by ideology, anecdote, special interests, or short-term political convenience. This approach is crucial for:</p>
                    
                    <ul>
                      <li><strong>Effectiveness:</strong> Designing interventions that have the highest probability of achieving desired outcomes for <strong>Human Dignity & Well-being</strong>.</li>
                      <li><strong>Efficiency:</strong> Ensuring that public resources are used wisely, targeting investments where they can make the most significant positive impact.</li>
                      <li><strong>Accountability:</strong> Making the rationale behind policy decisions transparent and subject to scrutiny, strengthening <strong>Democratic Resilience</strong>.</li>
                      <li><strong>Avoiding Harm:</strong> Minimizing unintended negative consequences by anticipating impacts based on evidence rather than speculation.</li>
                      <li><strong>Building Trust:</strong> Fostering public confidence that decisions are made rationally and in the public interest, not arbitrarily or capriciously.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Understanding the Evidence</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Grounding policy in evidence requires clarity about what constitutes reliable information:</p>
                    
                    <ol>
                      <li>
                        <strong>Scientific Consensus:</strong> For complex issues like climate change, public health, and environmental protection, the overwhelming agreement reached by experts within the relevant scientific fields, based on the accumulated weight of research, must be the starting point for policy. Ignoring or contradicting broad scientific consensus is irresponsible and dangerous.
                      </li>
                      <li>
                        <strong>Rigorous Data:</strong> This includes systematically collected quantitative data (statistics, measurements) and qualitative data (interviews, case studies) analyzed using sound, transparent methodologies. Investing in robust data collection infrastructure, including data disaggregated by relevant demographics (<strong>Equity</strong>), is essential to understand societal conditions and policy impacts accurately.
                      </li>
                      <li>
                        <strong>Expert Knowledge:</strong> Leveraging the deep understanding and insights of individuals with specialized training and experience is critical. This includes not only natural and social scientists but also engineers, medical professionals, educators, urban planners, and other experts relevant to the policy area. Mechanisms for integrating diverse expert input into the policy process are vital.
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Putting Evidence into Practice</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Committing to EBP requires concrete actions and institutional changes:</p>
                    
                    <ul>
                      <li><strong>Investing in Research & Development:</strong> Adequately funding public research institutions and data collection agencies to generate the knowledge needed for informed decisions (<strong>Pro-Science</strong>).</li>
                      <li><strong>Establishing Independent Advisory Bodies:</strong> Creating and empowering non-partisan scientific and expert advisory councils to provide objective assessments and recommendations to policymakers.</li>
                      <li><strong>Promoting Open Data & Transparency:</strong> Making government data and the evidence used in policy decisions publicly accessible whenever possible, allowing for independent analysis and verification.</li>
                      <li><strong>Integrating Policy Evaluation:</strong> Systematically evaluating the effectiveness of policies and programs using rigorous methods, and using these findings to adapt, improve, or discontinue ineffective initiatives.</li>
                      <li><strong>Fostering Scientific Literacy:</strong> Promoting public understanding of scientific methods and evidence, enabling citizens to engage more meaningfully in policy debates (<strong>Democratic Resilience</strong>).</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Navigating Complexity: Evidence, Values, and Politics</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Evidence-Based Policy does not imply that decisions are purely technical or devoid of values. Evidence can tell us the likely outcomes of different policy choices, but societal values inevitably shape which outcomes are prioritized. For example, evidence might show different ways to structure a tax system (<strong>Economic Justice</strong>), but the choice between them involves value judgments about fairness and distribution.</p>
                    
                    <p>EBP demands transparency about <em>how</em> evidence informs decisions and <em>where</em> value judgments come into play. It requires decision-makers to honestly engage with the evidence, even when it challenges preconceived notions or political preferences. It also means acknowledging uncertainty where it exists and designing policies that are adaptable as new evidence emerges. Resisting the deliberate politicization or suppression of science and data is crucial for maintaining the integrity of this approach (<strong>Anti-Fascist</strong> element).</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Fueling Progress Across All Goals</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>A steadfast commitment to Evidence-Based Policy is essential for realizing the vision of Project 2028. It allows us to:</p>
                    <ul>
                      <li>Design effective public health and social programs (<strong>Well-being</strong>).</li>
                      <li>Craft economic policies that promote shared prosperity based on real-world data (<strong>Economic Justice</strong>).</li>
                      <li>Develop robust environmental regulations grounded in climate science (<strong>Sustainability / Pro-Science</strong>).</li>
                      <li>Identify and address systemic inequities using reliable data (<strong>Equity</strong>).</li>
                      <li>Build more resilient and trusted democratic institutions (<strong>Democracy</strong>).</li>
                      <li>Engage in more effective <strong>Global Cooperation</strong> based on shared understandings of challenges like pandemics or climate change.</li>
                    </ul>
                    
                    <p>By prioritizing evidence, we commit to a more rational, effective, and accountable form of governance dedicated to achieving tangible improvements in the lives of all people.</p>
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

export default Principle3;
