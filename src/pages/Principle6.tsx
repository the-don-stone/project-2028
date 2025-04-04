
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
                  <p>Actively working to dismantle systemic discrimination and ensure opportunities are available to all, regardless of background.</p>
                </div>
              </CardHeader>
            </Card>
            
            <div className="space-y-8">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">The Imperative of Fairness: Building Societies for Everyone</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>In the pursuit of a just and prosperous future, mere equality before the law is insufficient. <strong>Inclusivity & Equity</strong> demands a proactive approach to dismantling the systemic barriers that perpetuate disadvantage based on race, ethnicity, gender, sexual orientation, disability, religion, socioeconomic status, or other aspects of identity. It acknowledges that historical and ongoing discrimination creates uneven playing fields, and that true opportunity requires targeted interventions. This principle calls for a commitment to building societies where everyone has the chance to thrive, contributing their unique talents and perspectives to the common good.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Key Dimensions of Inclusive & Equitable Action</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Achieving genuine inclusivity and equity requires action across multiple fronts:</p>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">1. Dismantling Systemic Discrimination (<strong>Human Dignity</strong>)</h3>
                    <ul>
                      <li><strong>Policy Reform:</strong> Review and reform laws, policies, and practices across all sectors (education, employment, housing, justice, healthcare) to identify and eliminate discriminatory biases.</li>
                      <li><strong>Addressing Implicit Bias:</strong> Implement training and awareness programs to combat implicit biases within institutions and among individuals.</li>
                      <li><strong>Promoting Representation:</strong> Ensure diverse representation in leadership positions and decision-making bodies at all levels of society.</li>
                      <li><strong>Accountability & Enforcement:</strong> Strengthen mechanisms for reporting, investigating, and addressing discrimination and hate crimes.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">2. Ensuring Equal Opportunity (<strong>Shared Prosperity</strong>)</h3>
                    <ul>
                      <li><strong>Universal Access to Essentials:</strong> Guarantee equitable access to quality education, healthcare, affordable housing, and other essential services.</li>
                      <li><strong>Targeted Investments:</strong> Direct resources and support to historically marginalized communities and individuals to address disparities and promote economic mobility.</li>
                      <li><strong>Affirmative Action & Equity Programs:</strong> Implement programs that provide targeted support and opportunities to underrepresented groups.</li>
                      <li><strong>Promoting Inclusive Employment:</strong> Enact policies that promote fair hiring practices, equal pay, and workplace inclusion.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">3. Fostering Inclusive Communities (<strong>Democratic Resilience</strong>)</h3>
                    <ul>
                      <li><strong>Promoting Intergroup Dialogue:</strong> Support initiatives that encourage dialogue and understanding between diverse communities.</li>
                      <li><strong>Combating Hate Speech & Extremism:</strong> Implement measures to counter hate speech, online harassment, and the spread of extremist ideologies.</li>
                      <li><strong>Protecting Minority Rights:</strong> Safeguard the rights and freedoms of minority groups and vulnerable populations.</li>
                      <li><strong>Supporting Civil Society Organizations:</strong> Empower community-based organizations and advocacy groups working to advance inclusivity and equity.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-project-blue mt-6 mb-3">4. Centering Marginalized Voices (<strong>Evidence-Based Policy</strong>)</h3>
                    <ul>
                      <li><strong>Data Collection & Analysis:</strong> Collect disaggregated data to identify disparities and inform policy development.</li>
                      <li><strong>Meaningful Consultation:</strong> Engage with marginalized communities in the design and implementation of policies that affect them.</li>
                      <li><strong>Community-Based Solutions:</strong> Support community-led initiatives and solutions that address local needs and priorities.</li>
                      <li><strong>Promoting Inclusive Narratives:</strong> Challenge stereotypes and promote positive representations of diverse communities in media and culture.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Beyond Tolerance: Embracing Diversity as a Strength</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>True inclusivity goes beyond mere tolerance. It recognizes that diversity is a source of strength, innovation, and resilience. By embracing the unique perspectives and experiences of all members of society, we create a more vibrant, dynamic, and just world.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-project-blue mb-4">Equity is Foundational to a Just Future</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>The pursuit of inclusivity and equity is not a separate goal, but a fundamental prerequisite for achieving all other objectives of Project 2028. Without a foundation of justice and fairness, efforts to strengthen democracy, promote economic prosperity, and address global challenges will be undermined. Building societies where everyone belongs and has the opportunity to thrive is not only a moral imperative, but a practical necessity for creating a better future for all.</p>
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
