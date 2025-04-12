
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from '@/components/Footer';

const EventPlanning = () => {
  const eventTypes = [
    {
      type: "community-meeting",
      title: "Community Meeting",
      description: "Regular gatherings of your local group to plan actions, share updates, and build community.",
      timeline: [
        { time: "6 weeks before", tasks: ["Set date, time, and location", "Create planning committee", "Define meeting objectives"] },
        { time: "4 weeks before", tasks: ["Develop agenda", "Identify and invite speakers", "Begin promotion"] },
        { time: "2 weeks before", tasks: ["Send reminders to registered participants", "Finalize agenda", "Prepare materials"] },
        { time: "1 week before", tasks: ["Confirm all logistics", "Prepare facilitation notes", "Send final reminders"] },
        { time: "Day of event", tasks: ["Arrive early for setup", "Welcome participants", "Document key discussions"] },
        { time: "Post-event", tasks: ["Send thank you notes", "Share meeting notes", "Follow up on action items"] }
      ],
      materials: ["Agenda", "Sign-in sheet", "Handouts", "Presentation materials", "Name tags", "Evaluation forms"],
      tips: [
        "Start and end on time to respect people's schedules",
        "Balance information sharing with discussion and action planning",
        "Always have clear next steps and assign responsibility",
        "Consider accessibility needs when choosing location and format",
        "Include time for relationship building and community connection"
      ]
    },
    {
      type: "educational-workshop",
      title: "Educational Workshop",
      description: "Interactive sessions focused on building knowledge and skills around specific topics.",
      timeline: [
        { time: "8 weeks before", tasks: ["Define workshop topic and learning objectives", "Identify potential facilitators", "Secure venue"] },
        { time: "6 weeks before", tasks: ["Develop workshop curriculum", "Create promotional materials", "Open registration"] },
        { time: "3 weeks before", tasks: ["Send prep materials to registered participants", "Finalize workshop activities", "Arrange for necessary supplies"] },
        { time: "1 week before", tasks: ["Send reminder with logistics", "Prepare all workshop materials", "Hold facilitator prep meeting"] },
        { time: "Day of event", tasks: ["Set up room for interactive learning", "Welcome participants", "Facilitate workshop activities"] },
        { time: "Post-event", tasks: ["Send follow-up resources", "Collect and analyze feedback", "Plan next steps for continued learning"] }
      ],
      materials: ["Workshop agenda", "Participant workbooks", "Visual aids", "Activity supplies", "Resource list", "Evaluation forms"],
      tips: [
        "Use diverse teaching methods to engage different learning styles",
        "Build in reflection time throughout the workshop",
        "Keep lectures short and prioritize interactive activities",
        "Provide take-home resources for continued learning",
        "Be prepared to adjust timing and activities based on group dynamics"
      ]
    },
    {
      type: "public-forum",
      title: "Public Forum",
      description: "Larger public events designed to raise awareness, build support, and engage new people.",
      timeline: [
        { time: "12 weeks before", tasks: ["Form planning committee", "Set date and secure venue", "Identify speakers/panelists"] },
        { time: "8 weeks before", tasks: ["Develop promotional strategy", "Create event materials", "Launch public communications"] },
        { time: "4 weeks before", tasks: ["Intensify promotion", "Coordinate with speakers", "Arrange for audio/visual needs"] },
        { time: "2 weeks before", tasks: ["Send media advisories", "Confirm all logistics", "Prepare facilitation plan"] },
        { time: "Day of event", tasks: ["Set up venue", "Brief speakers", "Manage registration and welcome"] },
        { time: "Post-event", tasks: ["Send thank you notes to speakers and volunteers", "Follow up with new contacts", "Share event highlights"] }
      ],
      materials: ["Event program", "Sign-in sheets", "Promotional materials", "Media kit", "Presentation equipment", "Action sign-up sheets"],
      tips: [
        "Have a clear call to action for attendees",
        "Create opportunities for audience participation",
        "Plan for capturing contact information of new supporters",
        "Prepare speakers with key talking points aligned with your message",
        "Have visual documentation through photos or videos"
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="section-container">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/organize">Organize</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Event Planning Templates</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-10 h-10 text-project-blue" />
            <h1 className="text-4xl font-bold">Event Planning Templates</h1>
          </div>
          <p className="text-xl mb-6">
            Organizing effective events is crucial for building community power and advancing 
            Project 2028's principles. These ready-to-use templates will help you plan and 
            execute successful events.
          </p>
          <p className="text-lg mb-10">
            Each template includes timelines, checklists, and best practices customized for 
            different types of organizing events. Adapt them to your specific needs and context.
          </p>

          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl">Event Planning Essentials</CardTitle>
              <CardDescription>
                Key elements to consider for any successful event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-start gap-2 p-4 border rounded-md">
                  <h3 className="font-bold text-lg">Purpose & Goals</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Clear objectives</li>
                    <li>Target audience</li>
                    <li>Desired outcomes</li>
                    <li>Success metrics</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-2 p-4 border rounded-md">
                  <h3 className="font-bold text-lg">Logistics</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Venue selection</li>
                    <li>Timing considerations</li>
                    <li>Equipment needs</li>
                    <li>Budget management</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-2 p-4 border rounded-md">
                  <h3 className="font-bold text-lg">People Power</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Volunteer coordination</li>
                    <li>Role assignments</li>
                    <li>Speaker preparation</li>
                    <li>Participant engagement</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-md flex items-start gap-3">
                <Info className="w-5 h-5 text-project-blue mt-1 flex-shrink-0" />
                <p>
                  <strong>Accessibility matters:</strong> For every event, consider physical accessibility, 
                  language access, childcare needs, and varying abilities. Creating inclusive events 
                  demonstrates your commitment to equity and expands your reach.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Event Planning Templates</h2>
            <Tabs defaultValue="community-meeting">
              <TabsList className="w-full grid grid-cols-1 md:grid-cols-3 mb-6">
                <TabsTrigger value="community-meeting">Community Meeting</TabsTrigger>
                <TabsTrigger value="educational-workshop">Educational Workshop</TabsTrigger>
                <TabsTrigger value="public-forum">Public Forum</TabsTrigger>
              </TabsList>
              
              {eventTypes.map((event) => (
                <TabsContent key={event.type} value={event.type} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-lg mb-6">{event.description}</p>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Planning Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {event.timeline.map((timepoint, idx) => (
                          <div key={idx} className="border-l-4 border-project-blue pl-4 py-1">
                            <h4 className="font-bold text-lg">{timepoint.time}</h4>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              {timepoint.tasks.map((task, taskIdx) => (
                                <li key={taskIdx}>{task}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Materials Checklist</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {event.materials.map((material, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-project-blue flex-shrink-0" />
                              {material}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Best Practices</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {event.tips.map((tip, idx) => (
                            <li key={idx} className="text-sm">{tip}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-300 p-4 rounded-md flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <p>
                      <strong>Common pitfalls to avoid:</strong> Insufficient promotion, unclear roles, 
                      running overtime, technical difficulties, and inadequate follow-up. Plan ahead 
                      for these challenges to ensure your event runs smoothly.
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="bg-project-blue text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Access More Resources</h2>
            <p className="mb-6">
              Explore our other organizing resources to strengthen your local efforts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/organizers-handbook" className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors text-center">
                Organizer's Handbook
              </Link>
              <Link to="/discussion-guides" className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors text-center">
                Discussion Guides
              </Link>
              <Link to="/messaging-toolkit" className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors text-center">
                Messaging Toolkit
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventPlanning;
