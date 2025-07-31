import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  FileText, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye,
  ArrowRight,
  Zap,
  Palette,
  Layout,
  Share2
} from "lucide-react";
import { Link } from "wouter";

export default function Overview() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Enski
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Create stunning storefronts and landing pages for your courses. 
              Professional tools to grow your educational business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/creator-storefront">
                  <Store className="w-5 h-5 mr-2" />
                  Build Your Storefront
                </Link>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <Link to="/page-builder">
                  <FileText className="w-5 h-5 mr-2" />
                  Create Landing Pages
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Total Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23,456</div>
              <p className="text-xs text-green-600 mt-1">+15% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Active Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-green-600 mt-1">+8% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,678</div>
              <p className="text-xs text-green-600 mt-1">+22% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14.2%</div>
              <p className="text-xs text-green-600 mt-1">+3.1% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Creator Storefront */}
          <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300">
            <div className="h-48 bg-gradient-secondary relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white text-secondary">
                  <Store className="w-3 h-3 mr-1" />
                  Creator Storefront
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional Storefronts</h3>
                <p className="text-white/90">Showcase all your courses in one beautiful place</p>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Palette className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Custom Branding</p>
                    <p className="text-sm text-muted-foreground">Match your brand colors and style</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Student Analytics</p>
                    <p className="text-sm text-muted-foreground">Track engagement and conversions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Share2 className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Easy Sharing</p>
                    <p className="text-sm text-muted-foreground">One link to all your content</p>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/creator-storefront">
                    Customize Your Storefront
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Page Builder */}
          <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300">
            <div className="h-48 bg-gradient-primary relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white text-primary">
                  <FileText className="w-3 h-3 mr-1" />
                  Page Builder
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-2">Landing Page Builder</h3>
                <p className="text-white/90">Create high-converting sales pages with ease</p>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Layout className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Drag & Drop Builder</p>
                    <p className="text-sm text-muted-foreground">Intuitive visual page creation</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Conversion Optimized</p>
                    <p className="text-sm text-muted-foreground">Templates proven to convert</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Mobile Responsive</p>
                    <p className="text-sm text-muted-foreground">Perfect on all devices</p>
                  </div>
                </div>
                
                <Button variant="gradient" className="w-full" asChild>
                  <Link to="/page-builder">
                    Start Building Pages
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-6 flex-col space-y-2">
                <Store className="w-8 h-8 text-primary" />
                <span className="font-medium">View My Storefront</span>
                <span className="text-sm text-muted-foreground">Check your public page</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-6 flex-col space-y-2">
                <FileText className="w-8 h-8 text-accent" />
                <span className="font-medium">Create New Page</span>
                <span className="text-sm text-muted-foreground">Build a landing page</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-6 flex-col space-y-2">
                <TrendingUp className="w-8 h-8 text-secondary" />
                <span className="font-medium">View Analytics</span>
                <span className="text-sm text-muted-foreground">Track performance</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Updated storefront theme", time: "2 hours ago", type: "storefront" },
                { action: "Created new landing page", time: "5 hours ago", type: "page" },
                { action: "Published course storefront", time: "1 day ago", type: "storefront" },
                { action: "Updated pricing section", time: "2 days ago", type: "page" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'storefront' ? 'bg-secondary/10' : 'bg-primary/10'
                    }`}>
                      {activity.type === 'storefront' ? (
                        <Store className={`w-4 h-4 ${activity.type === 'storefront' ? 'text-secondary' : 'text-primary'}`} />
                      ) : (
                        <FileText className={`w-4 h-4 ${activity.type === 'storefront' ? 'text-secondary' : 'text-primary'}`} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}