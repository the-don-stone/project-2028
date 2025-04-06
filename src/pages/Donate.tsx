
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

interface DonationLink {
  name: string;
  description: string;
  url: string;
}

interface DonationCategory {
  title: string;
  description: string;
  links: DonationLink[];
}

const donationCategories: DonationCategory[] = [
  {
    title: "Political Action",
    description: "Organizations working to strengthen democratic processes and combat authoritarianism",
    links: [
      {
        name: "Fair Fight",
        description: "Working to ensure free and fair elections through voter education and advocacy",
        url: "https://fairfight.com/"
      },
      {
        name: "Brennan Center for Justice",
        description: "Nonpartisan law and policy institute working to reform and defend systems of democracy",
        url: "https://www.brennancenter.org/"
      },
      {
        name: "Represent.Us",
        description: "Fighting corruption and working towards political reform across the political spectrum",
        url: "https://represent.us/"
      },
      {
        name: "Common Cause",
        description: "Holding power accountable through lobbying, research, and grassroots organizing",
        url: "https://www.commoncause.org/"
      }
    ]
  },
  {
    title: "Social Justice",
    description: "Groups working to address systemic inequality and advocate for marginalized communities",
    links: [
      {
        name: "Equal Justice Initiative",
        description: "Working to end mass incarceration and excessive punishment in the United States",
        url: "https://eji.org/"
      },
      {
        name: "ACLU",
        description: "Defending civil liberties and individual rights for all people",
        url: "https://www.aclu.org/"
      },
      {
        name: "Color Of Change",
        description: "Largest online racial justice organization helping people respond effectively to injustice",
        url: "https://colorofchange.org/"
      },
      {
        name: "Southern Poverty Law Center",
        description: "Monitoring hate groups and fighting for racial justice through litigation",
        url: "https://www.splcenter.org/"
      }
    ]
  },
  {
    title: "Education Initiatives",
    description: "Projects focused on expanding educational access and improving educational outcomes",
    links: [
      {
        name: "DonorsChoose",
        description: "Platform connecting donors with public school teachers who need classroom resources",
        url: "https://www.donorschoose.org/"
      },
      {
        name: "Khan Academy",
        description: "Free, world-class education available to anyone, anywhere",
        url: "https://www.khanacademy.org/"
      },
      {
        name: "First Book",
        description: "Providing equal access to quality education for children in need",
        url: "https://firstbook.org/"
      },
      {
        name: "Code.org",
        description: "Expanding access to computer science education and increasing participation by women and underrepresented minorities",
        url: "https://code.org/"
      }
    ]
  },
  {
    title: "Community Development",
    description: "Organizations building stronger, more resilient local communities",
    links: [
      {
        name: "Habitat for Humanity",
        description: "Building and improving homes in partnership with individuals and families in need",
        url: "https://www.habitat.org/"
      },
      {
        name: "Community Solutions",
        description: "Working to end homelessness through data-driven approaches",
        url: "https://community.solutions/"
      },
      {
        name: "Strong Towns",
        description: "Supporting a model of development that allows America's cities and towns to grow financially strong and resilient",
        url: "https://www.strongtowns.org/"
      },
      {
        name: "ioby",
        description: "Crowdfunding platform for community-led projects that make neighborhoods more sustainable and livable",
        url: "https://ioby.org/"
      }
    ]
  },
  {
    title: "Environmental Causes",
    description: "Groups working to protect the planet and address climate change",
    links: [
      {
        name: "350.org",
        description: "Building a global grassroots movement to address the climate crisis",
        url: "https://350.org/"
      },
      {
        name: "Sunrise Movement",
        description: "Youth-led political movement advocating for political action on climate change",
        url: "https://www.sunrisemovement.org/"
      },
      {
        name: "The Nature Conservancy",
        description: "Global environmental nonprofit working to create a world where people and nature can thrive",
        url: "https://www.nature.org/"
      },
      {
        name: "Climate Justice Alliance",
        description: "Network of frontline communities and organizations building climate justice solutions",
        url: "https://climatejusticealliance.org/"
      }
    ]
  },
  {
    title: "Healthcare Access",
    description: "Organizations focused on expanding healthcare access and health equity",
    links: [
      {
        name: "Partners In Health",
        description: "Providing high-quality healthcare to the most vulnerable around the world",
        url: "https://www.pih.org/"
      },
      {
        name: "National Patient Advocate Foundation",
        description: "Advocating for policies that improve healthcare access for all",
        url: "https://www.npaf.org/"
      },
      {
        name: "Health Leads",
        description: "Working to address social needs that affect health like food, housing, and transportation",
        url: "https://healthleadsusa.org/"
      },
      {
        name: "Doctors Without Borders",
        description: "International humanitarian medical organization providing aid in conflict zones and countries affected by epidemics",
        url: "https://www.doctorswithoutborders.org/"
      }
    ]
  }
];

const DonatePage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="section-container">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/donate">Donate</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Support the Cause</h1>
          <p className="text-xl mb-6">
            Project 2028 is a personal initiative advocating for democratic reform and shared prosperity.
            Rather than accepting direct donations, we encourage you to support established organizations
            that are already doing the vital work aligned with our mission.
          </p>
          <p className="text-lg mb-10">
            Below are categories of organizations we believe are paving the way for the future
            we envision in Project 2028. Your support to any of these groups helps build
            the collective strength needed for meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {donationCategories.map((category, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-project-blue">{category.title}</CardTitle>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="border-l-4 border-project-red pl-4 py-2 hover:bg-muted transition-colors">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-lg text-project-blue">{link.name}</span>
                          <ExternalLink className="w-4 h-4 text-project-red group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-muted-foreground mt-1">{link.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">A Note About Privacy</h2>
          <p className="mb-4">
            At Project 2028, we believe in a private and anonymous internet. We don't track which 
            organizations you choose to support, and we encourage you to research each organization's 
            privacy policies before donating.
          </p>
          <p>
            We also recommend considering privacy-focused payment methods when possible, and remember 
            that many organizations offer options for anonymous donations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
