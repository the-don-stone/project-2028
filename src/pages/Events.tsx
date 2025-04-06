import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  category: 'workshop' | 'rally' | 'townhall' | 'conference';
  virtual: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: "Democracy Reform Workshop",
    description: "Join us for an interactive workshop focused on practical strategies for strengthening democratic institutions at the local level.",
    date: "2025-05-15",
    time: "18:00-20:00",
    location: "Portland Community Center",
    attendees: 45,
    category: "workshop",
    virtual: false
  },
  {
    id: 2,
    title: "Project 2028 Town Hall",
    description: "Open discussion about the core principles of Project 2028 and how they apply to current political challenges.",
    date: "2025-05-22",
    time: "19:00-21:00",
    location: "Online via Zoom",
    attendees: 120,
    category: "townhall",
    virtual: true
  },
  {
    id: 3,
    title: "Economic Justice Rally",
    description: "Join community leaders and advocates for a peaceful demonstration supporting fair wages and economic equity.",
    date: "2025-06-01",
    time: "12:00-15:00",
    location: "City Hall Plaza",
    attendees: 250,
    category: "rally",
    virtual: false
  },
  {
    id: 4,
    title: "Future of Work Conference",
    description: "A day-long conference examining how technology, automation, and labor policy will shape the future of employment.",
    date: "2025-06-15",
    time: "09:00-17:00",
    location: "Metropolitan Convention Center",
    attendees: 180,
    category: "conference",
    virtual: false
  },
  {
    id: 5,
    title: "Digital Democracy Workshop",
    description: "Technical workshop exploring tools and strategies for expanding democratic participation through technology.",
    date: "2025-06-18",
    time: "18:00-20:00",
    location: "Online via Zoom",
    attendees: 60,
    category: "workshop",
    virtual: true
  },
  {
    id: 6,
    title: "Climate Action Town Hall",
    description: "Community discussion on local climate initiatives and how they align with Project 2028's environmental principles.",
    date: "2025-06-25",
    time: "19:00-21:00",
    location: "Greenfield Community Center",
    attendees: 90,
    category: "townhall",
    virtual: false
  }
];

const EventsPage = () => {
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
                <Link to="/events">Events</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Project 2028 Events</h1>
          <p className="text-xl mb-6">
            Connect with fellow advocates, learn new skills, and help build momentum for meaningful change.
            Our events bring together passionate individuals committed to creating a better future.
          </p>
          <p className="text-lg mb-10">
            Whether virtual or in-person, every gathering is an opportunity to advance the principles
            of Project 2028. Find an event below that speaks to your interests and join us!
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="workshop">Workshops</TabsTrigger>
              <TabsTrigger value="townhall">Town Halls</TabsTrigger>
              <TabsTrigger value="rally">Rallies</TabsTrigger>
              <TabsTrigger value="conference">Conferences</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="workshop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.filter(event => event.category === 'workshop').map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="townhall">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.filter(event => event.category === 'townhall').map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rally">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.filter(event => event.category === 'rally').map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="conference">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.filter(event => event.category === 'conference').map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="max-w-3xl mx-auto text-center bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Host Your Own Event</h2>
          <p className="mb-6">
            Interested in organizing a Project 2028 event in your community? We can provide resources,
            guidance, and promotional support to help make your event a success.
          </p>
          <Button asChild size="lg" className="bg-project-blue hover:bg-blue-800">
            <Link to="/organize">Learn How to Organize</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="bg-project-blue text-white rounded-t-lg">
        <CardTitle className="text-xl">{event.title}</CardTitle>
        <div className="flex items-center text-white/85 mt-2 gap-2">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
      </CardHeader>
      <CardContent className="py-4 flex-grow">
        <CardDescription className="text-base mb-4">{event.description}</CardDescription>
        <div className="space-y-2">
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
            {event.virtual && <span className="ml-2 bg-project-red/10 text-project-red text-xs px-2 py-0.5 rounded-full">Virtual</span>}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="w-4 h-4 mr-2" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Button className="w-full bg-project-blue hover:bg-blue-800">Register Now</Button>
      </CardFooter>
    </Card>
  );
};

export default EventsPage;
