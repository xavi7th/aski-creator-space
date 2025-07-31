import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { Navigation } from "@/components/Navigation";
import Overview from "./pages/Overview";
import CreatorStorefront from "./pages/CreatorStorefront";
import PageBuilder from "./pages/PageBuilder";
import NotFound from "./pages/NotFound";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Overview} />
          <Route path="/creator-storefront" component={CreatorStorefront} />
          <Route path="/page-builder" component={PageBuilder} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
