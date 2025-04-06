
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Principle1 from "./pages/Principle1";
import Principle2 from "./pages/Principle2";
import Principle3 from "./pages/Principle3";
import Principle4 from "./pages/Principle4";
import Principle5 from "./pages/Principle5";
import Principle6 from "./pages/Principle6";
import JoinMovement from "./pages/JoinMovement";
import DonatePage from "./pages/Donate";
import EventsPage from "./pages/Events";
import OrganizePage from "./pages/Organize";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/principle1" element={<Principle1 />} />
          <Route path="/principle2" element={<Principle2 />} />
          <Route path="/principle3" element={<Principle3 />} />
          <Route path="/principle4" element={<Principle4 />} />
          <Route path="/principle5" element={<Principle5 />} />
          <Route path="/principle6" element={<Principle6 />} />
          <Route path="/join" element={<JoinMovement />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/organize" element={<OrganizePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
