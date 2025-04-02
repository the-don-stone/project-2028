
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Users } from 'lucide-react';

const Principle1 = () => {
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
                <BreadcrumbLink>Human Dignity & Well-being First</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <main className="flex-1 bg-white py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Users className="w-12 h-12 text-project-red mr-4" />
              <h1 className="text-4xl font-bold text-project-darkblue">Principle 1: Human Dignity & Well-being First</h1>
            </div>
            
            <div className="border-l-4 border-project-red pl-6 mb-8 italic text-xl text-gray-700">
              <p>All policy should prioritize the health, safety, education, and overall well-being of all people.</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>The Foundational Standard</h2>
              <p>This principle establishes the fundamental benchmark against which all public action, legislation, and governance must be measured. It asserts that the primary purpose of any societal structure or government is to serve its people – <em>all</em> its people – by actively fostering conditions where every individual can live with dignity and achieve well-being. Human thriving is not a secondary outcome or a fortunate byproduct of other goals; it is the central objective.</p>
              
              <h2>What This Means in Practice</h2>
              <p>Prioritizing human dignity and well-being requires a holistic understanding that encompasses multiple dimensions of life:</p>
              
              <ol>
                <li>
                  <strong>Health:</strong> Ensuring universal access to comprehensive, high-quality physical and mental healthcare. This includes preventative care, treatment, and support systems that allow individuals to maintain their health and manage illness effectively, free from crippling financial burden. Public health initiatives that protect the entire community are paramount.
                </li>
                <li>
                  <strong>Safety & Security:</strong> Guaranteeing safety from violence, crime, persecution, and environmental hazards. This extends to economic security – protection from destitution, access to safe and affordable housing, nutritious food, and secure livelihoods. It means building communities where people feel safe and supported.
                </li>
                <li>
                  <strong>Education & Lifelong Learning:</strong> Providing universal access to quality education from early childhood through higher education and vocational training. Fostering critical thinking, creativity, and the skills necessary for personal fulfillment and meaningful participation in society. Education empowers individuals and strengthens democracy.
                </li>
                <li>
                  <strong>Overall Well-being:</strong> Recognizing the broader factors that contribute to a flourishing life. This includes a clean and sustainable environment, opportunities for meaningful work with fair compensation and conditions (supporting the <strong>Pro-Union</strong> goal), strong social connections and community life, access to culture and recreation, and the assurance of fundamental rights and freedoms (<strong>Anti-Fascist</strong>). It requires actively combating factors that degrade human dignity, such as poverty, discrimination, and exploitation (<strong>Anti-Oligarch</strong>, <strong>Pro-People</strong>).
                </li>
              </ol>
              
              <h2>The Policy Imperative: People Over Abstract Goals</h2>
              <p>This principle demands that policymakers explicitly evaluate proposed actions based on their impact on people's lives. Questions must be asked:</p>
              
              <ul>
                <li>Does this policy enhance or diminish the health, safety, and well-being of our communities?</li>
                <li>Are the benefits and burdens distributed equitably, or does it disproportionately harm vulnerable groups? (<strong>Equity</strong>)</li>
                <li>Does it respect individual autonomy and dignity?</li>
                <li>Is it based on the best available evidence and understanding of human needs? (<strong>Pro-Science</strong>)</li>
              </ul>
              
              <p>Economic indicators like GDP growth, corporate profits, or abstract notions of national prestige are secondary. They are only valuable <em>if</em> they demonstrably contribute to the well-being of the population as a whole. When a policy forces a choice between, for example, corporate deregulation and public health protections, <strong>Human Dignity & Well-being First</strong> dictates that public health takes precedence. When faced with decisions on resource allocation, investments in education, healthcare, and social safety nets must be seen not as costs, but as essential investments in our collective future and human potential.</p>
              
              <h2>Universality and Non-Discrimination</h2>
              <p>The phrase "all people" is non-negotiable. This principle rejects any policy framework that treats certain groups as disposable or less worthy. It requires actively identifying and dismantling systemic barriers based on race, gender, religion, sexual orientation, disability, socioeconomic status, or any other characteristic. It mandates that the needs of the most marginalized and vulnerable populations are specifically considered and addressed, ensuring that progress leaves no one behind.</p>
              
              <h2>The Cornerstone of Project 2028</h2>
              <p>Human Dignity & Well-being First is the ethical foundation upon which all other goals of Project 2028 are built. Strengthening democracy ensures people have a voice in shaping policies that affect their well-being. Economic justice provides the material security necessary for a dignified life. Advancing science offers tools to improve health and environmental sustainability. Fostering equity ensures well-being is accessible to all. And global cooperation recognizes that dignity and well-being are universal aspirations requiring shared responsibility (<strong>Global Citizenship</strong>).</p>
              
              <p>By embedding this principle at the heart of governance, we commit to building societies where every person is valued, supported, and empowered to live a full, safe, and meaningful life.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Principle1;
