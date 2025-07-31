import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Store, FileText, Home } from "lucide-react";

export const Navigation = () => {
  const [location] = useLocation();
  
  const isActive = (path: string) => location === path;
  
  return (
    <nav className="bg-white border-b border-primary/10 shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Enski
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Button 
                variant={isActive("/") ? "default" : "ghost"} 
                size="sm" 
                asChild
              >
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Overview
                </Link>
              </Button>
              <Button 
                variant={isActive("/creator-storefront") ? "secondary" : "ghost"} 
                size="sm" 
                asChild
              >
                <Link to="/creator-storefront">
                  <Store className="w-4 h-4" />
                  Creator Storefront
                </Link>
              </Button>
              <Button 
                variant={isActive("/page-builder") ? "accent" : "ghost"} 
                size="sm" 
                asChild
              >
                <Link to="/page-builder">
                  <FileText className="w-4 h-4" />
                  Page Builder
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Preview
            </Button>
            <Button variant="gradient" size="sm">
              Publish
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};