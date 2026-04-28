import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import DonateFinancially from "./pages/DonateFinancially.tsx";
import HistoryFounders from "./pages/HistoryFounders.tsx";
import Volunteer from "./pages/Volunteer.tsx";
import Pickup from "./pages/Pickup.tsx";
import CommunityPartners from "./pages/CommunityPartners.tsx";
import BecomePartner from "./pages/BecomePartner.tsx";
import FurnitureCategoryDetails from "./pages/FurnitureCategoryDetails.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donate" element={<DonateFinancially />} />
          <Route path="/history-founders" element={<HistoryFounders />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/pickup" element={<Pickup />} />
          <Route path="/community-partners" element={<CommunityPartners />} />
          <Route path="/become-a-partner" element={<BecomePartner />} />
          <Route path="/furniture-categories/:slug" element={<FurnitureCategoryDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
