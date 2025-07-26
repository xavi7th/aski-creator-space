import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  Eye, 
  Edit3, 
  BookOpen, 
  Video, 
  Calendar, 
  Star, 
  Users, 
  DollarSign,
  Palette,
  Upload,
  Share2
} from "lucide-react";

export default function CreatorStorefront() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Controls */}
      <div className="bg-white border-b border-primary/10 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Creator Storefront</h1>
              <p className="text-muted-foreground">Design your public course showcase</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant={isEditing ? "secondary" : "outline"} 
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit3 className="w-4 h-4" />
                {isEditing ? "Exit Edit" : "Edit Mode"}
              </Button>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              <Button variant="accent" size="sm">
                <Share2 className="w-4 h-4" />
                Share Store
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="preview">Store Preview</TabsTrigger>
            <TabsTrigger value="customization">Customization</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Preview Tab */}
          <TabsContent value="preview" className="space-y-8">
            {/* Hero Section */}
            <Card className="overflow-hidden shadow-medium">
              <div className="relative h-48 bg-gradient-primary">
                <div className="absolute inset-0 bg-black/20"></div>
                {isEditing && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
                  >
                    <Upload className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-secondary shadow-medium -mt-12 border-4 border-white"></div>
                    {isEditing && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -bottom-2 -right-2 h-8 w-8 bg-white shadow-soft"
                      >
                        <Edit3 className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">Dr. Sarah Johnson</h2>
                        <p className="text-muted-foreground">Digital Marketing Expert & Course Creator</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="w-4 h-4 mr-1" />
                            12,453 students
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            4.9 rating
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="w-4 h-4 mr-1" />
                            15 courses
                          </div>
                        </div>
                      </div>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          <Edit3 className="w-4 h-4" />
                          Edit Profile
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-foreground leading-relaxed">
                    Helping entrepreneurs and businesses master digital marketing through practical, 
                    results-driven courses. Over 10 years of experience in scaling online businesses.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Featured Courses Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">Featured Courses</h3>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                    Manage Courses
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Complete Digital Marketing Mastery",
                    type: "Course",
                    icon: BookOpen,
                    price: "$197",
                    students: "2,341",
                    rating: "4.9",
                    image: "bg-primary"
                  },
                  {
                    title: "Social Media Strategy Workshop",
                    type: "Live Training",
                    icon: Calendar,
                    price: "$97",
                    students: "856",
                    rating: "4.8",
                    image: "bg-secondary"
                  },
                  {
                    title: "Email Marketing Automation",
                    type: "Video Series",
                    icon: Video,
                    price: "$67",
                    students: "1,234",
                    rating: "4.9",
                    image: "bg-accent"
                  }
                ].map((course, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                    <div className={`h-48 ${course.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 left-4 bg-white text-foreground"
                      >
                        <course.icon className="w-3 h-3 mr-1" />
                        {course.type}
                      </Badge>
                      {isEditing && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {course.students}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {course.rating}
                          </span>
                        </div>
                        <span className="text-lg font-semibold text-primary">{course.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="default">
                        <DollarSign className="w-4 h-4" />
                        Purchase Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Customization Tab */}
          <TabsContent value="customization" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Brand Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="w-5 h-5 mr-2" />
                    Brand & Appearance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Store Name</label>
                    <Input placeholder="Your Store Name" defaultValue="Dr. Sarah Johnson" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tagline</label>
                    <Input placeholder="Your professional tagline" defaultValue="Digital Marketing Expert & Course Creator" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bio</label>
                    <Textarea 
                      placeholder="Tell your story..." 
                      className="min-h-24"
                      defaultValue="Helping entrepreneurs and businesses master digital marketing through practical, results-driven courses."
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium">Color Theme</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { name: "Enski Orange", class: "bg-primary" },
                        { name: "Enski Blue", class: "bg-secondary" },
                        { name: "Enski Purple", class: "bg-accent" }
                      ].map((color) => (
                        <button
                          key={color.name}
                          className={`${color.class} h-12 rounded-md border-2 border-transparent hover:border-foreground/20 transition-colors`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Layout Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Layout & Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show student count</p>
                      <p className="text-sm text-muted-foreground">Display total enrolled students</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show ratings</p>
                      <p className="text-sm text-muted-foreground">Display course ratings</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable course previews</p>
                      <p className="text-sm text-muted-foreground">Allow preview of course content</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Social proof</p>
                      <p className="text-sm text-muted-foreground">Show testimonials and reviews</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="pt-4">
                    <Button variant="gradient" className="w-full">
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Store Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,432</div>
                  <p className="text-xs text-green-600 mt-1">+12% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.5%</div>
                  <p className="text-xs text-green-600 mt-1">+2.3% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,590</div>
                  <p className="text-xs text-green-600 mt-1">+18% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Popular Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Complete Digital Marketing Mastery", views: "2,341", revenue: "$8,420" },
                    { name: "Social Media Strategy Workshop", views: "1,856", revenue: "$5,230" },
                    { name: "Email Marketing Automation", views: "1,234", revenue: "$3,890" }
                  ].map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.views} views</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{course.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}