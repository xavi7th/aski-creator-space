import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Share2,
  Quote,
  FileText,
  Briefcase,
  User
} from "lucide-react";

interface StoreData {
  profile: {
    name: string;
    tagline: string;
    bio: string;
    avatar: string;
    banner: string;
    students: string;
    rating: string;
    courses: string;
  };
  sections: {
    testimonials: { enabled: boolean; size: 'small' | 'large'; data: Array<{quote: string; author: string; role: string}> };
    extendedBio: { enabled: boolean; size: 'small' | 'large'; data: string };
    portfolio: { enabled: boolean; size: 'small' | 'large'; data: Array<{title: string; description: string; image: string}> };
    resume: { enabled: boolean; size: 'small' | 'large'; data: Array<{position: string; company: string; period: string; description: string}> };
  };
  settings: {
    showStudentCount: boolean;
    showRatings: boolean;
    enablePreviews: boolean;
    showSocialProof: boolean;
  };
}

const defaultStoreData: StoreData = {
  profile: {
    name: "Dr. Sarah Johnson",
    tagline: "Digital Marketing Expert & Course Creator",
    bio: "Helping entrepreneurs and businesses master digital marketing through practical, results-driven courses. Over 10 years of experience in scaling online businesses.",
    avatar: "",
    banner: "",
    students: "12,453",
    rating: "4.9",
    courses: "15"
  },
  sections: {
    testimonials: { 
      enabled: false, 
      size: 'large', 
      data: [
        { quote: "Amazing course! Transformed my business completely.", author: "John Smith", role: "Entrepreneur" },
        { quote: "Best investment I've made for my career.", author: "Jane Doe", role: "Marketing Manager" }
      ]
    },
    extendedBio: { 
      enabled: false, 
      size: 'large', 
      data: "I started my journey in digital marketing over a decade ago when I launched my first online business. Since then, I've helped hundreds of entrepreneurs and businesses scale their online presence through strategic digital marketing approaches." 
    },
    portfolio: { 
      enabled: false, 
      size: 'large', 
      data: [
        { title: "E-commerce Growth Campaign", description: "Increased sales by 300% for a fashion brand", image: "" },
        { title: "SaaS Lead Generation", description: "Generated 1000+ qualified leads in 3 months", image: "" }
      ]
    },
    resume: { 
      enabled: false, 
      size: 'large', 
      data: [
        { position: "Senior Marketing Director", company: "TechCorp Inc.", period: "2020-2023", description: "Led digital transformation initiatives resulting in 40% revenue growth" },
        { position: "Marketing Manager", company: "StartupXYZ", period: "2018-2020", description: "Built marketing team from ground up, scaling from 10K to 1M users" }
      ]
    }
  },
  settings: {
    showStudentCount: true,
    showRatings: true,
    enablePreviews: false,
    showSocialProof: true
  }
};

export default function CreatorStorefront() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");
  const [storeData, setStoreData] = useState<StoreData>(defaultStoreData);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('creatorStoreData');
    if (savedData) {
      setStoreData(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage whenever storeData changes
  useEffect(() => {
    localStorage.setItem('creatorStoreData', JSON.stringify(storeData));
  }, [storeData]);

  const updateProfile = (field: string, value: string) => {
    setStoreData(prev => ({
      ...prev,
      profile: { ...prev.profile, [field]: value }
    }));
  };

  const updateSection = (section: keyof StoreData['sections'], field: string, value: any) => {
    setStoreData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: { ...prev.sections[section], [field]: value }
      }
    }));
  };

  const updateSettings = (field: string, value: boolean) => {
    setStoreData(prev => ({
      ...prev,
      settings: { ...prev.settings, [field]: value }
    }));
  };

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
            {/* Hero Section - Professional Design */}
            <div className="relative overflow-hidden">
              {/* Cover Image with Sophisticated Gradient */}
              <div className="relative h-80 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.1),transparent_30%,rgba(255,255,255,0.05))]"></div>
                
                {/* Elegant Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_25%_25%,white_2px,transparent_2px)] bg-[length:60px_60px]"></div>
                </div>
                
                {isEditing && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Change Cover
                  </Button>
                )}
              </div>

              {/* Main Content Card with Sophisticated Layout */}
              <div className="relative -mt-32 mx-6">
                <Card className="backdrop-blur-sm bg-white/95 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.1)] border-0">
                  <CardContent className="p-0">
                    {/* Profile Section */}
                    <div className="p-8 pb-6">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Avatar with Premium Styling */}
                        <div className="relative flex-shrink-0">
                          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-4 ring-white/50">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                              <User className="w-16 h-16 text-white/60" />
                            </div>
                          </div>
                          {isEditing && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute -bottom-2 -right-2 h-10 w-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-gray-50 rounded-xl border border-gray-100"
                            >
                              <Edit3 className="w-4 h-4 text-gray-600" />
                            </Button>
                          )}
                        </div>
                        
                        {/* Profile Info with Premium Typography */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="space-y-3">
                              <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                  {storeData.profile.name}
                                </h1>
                                <p className="text-xl text-primary/80 font-medium mt-1">
                                  {storeData.profile.tagline}
                                </p>
                              </div>
                              
                              {/* Premium Stats Row */}
                              <div className="flex flex-wrap items-center gap-6 mt-4">
                                {storeData.settings.showStudentCount && (
                                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl">
                                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                      <Users className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                      <p className="text-lg font-bold text-gray-900">{storeData.profile.students}</p>
                                      <p className="text-xs text-gray-500 -mt-1">Students</p>
                                    </div>
                                  </div>
                                )}
                                {storeData.settings.showRatings && (
                                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-xl">
                                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                      <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                                    </div>
                                    <div>
                                      <p className="text-lg font-bold text-gray-900">{storeData.profile.rating}</p>
                                      <p className="text-xs text-gray-500 -mt-1">Rating</p>
                                    </div>
                                  </div>
                                )}
                                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl">
                                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-4 h-4 text-blue-600" />
                                  </div>
                                  <div>
                                    <p className="text-lg font-bold text-gray-900">{storeData.profile.courses}</p>
                                    <p className="text-xs text-gray-500 -mt-1">Courses</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {isEditing && (
                              <Button variant="outline" size="lg" className="flex-shrink-0">
                                <Edit3 className="w-4 h-4 mr-2" />
                                Edit Profile
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Bio with Premium Typography */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                          {storeData.profile.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Featured Courses Grid - Premium Design */}
            <div className="space-y-8 mt-16">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Featured Courses
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Carefully crafted learning experiences designed to accelerate your growth
                </p>
                {isEditing && (
                  <Button variant="outline" size="lg" className="mt-4">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Courses
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Complete Digital Marketing Mastery",
                    type: "Course",
                    icon: BookOpen,
                    price: "$197",
                    originalPrice: "$297",
                    students: "2,341",
                    rating: "4.9",
                    lessons: "24",
                    duration: "8 hours",
                    description: "Master the fundamentals of digital marketing with hands-on projects and real-world case studies.",
                    tags: ["Beginner", "Certificate", "Lifetime Access"]
                  },
                  {
                    title: "Social Media Strategy Workshop",
                    type: "Live Training",
                    icon: Calendar,
                    price: "$97",
                    originalPrice: "$147",
                    students: "856",
                    rating: "4.8",
                    lessons: "Live",
                    duration: "3 hours",
                    description: "Join our interactive workshop to build winning social media strategies that convert.",
                    tags: ["Intermediate", "Live", "Q&A Session"]
                  },
                  {
                    title: "Email Marketing Automation",
                    type: "Video Series",
                    icon: Video,
                    price: "$67",
                    originalPrice: "$97",
                    students: "1,234",
                    rating: "4.9",
                    lessons: "12",
                    duration: "4 hours",
                    description: "Build automated email sequences that nurture leads and drive consistent sales.",
                    tags: ["Advanced", "Templates", "Practical"]
                  }
                ].map((course, index) => (
                  <Card key={index} className="group hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                    {/* Course Image */}
                    <div className="relative h-56 overflow-hidden rounded-t-xl">
                      <div className={`h-full bg-gradient-to-br ${
                        index === 0 ? 'from-blue-500 to-blue-600' :
                        index === 1 ? 'from-purple-500 to-purple-600' :
                        'from-emerald-500 to-emerald-600'
                      }`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-white/90 text-gray-900 hover:bg-white/90">
                            <course.icon className="w-3 h-3 mr-1" />
                            {course.type}
                          </Badge>
                        </div>
                        
                        {/* Rating Badge */}
                        <div className="absolute top-6 right-6">
                          <div className="bg-white/90 rounded-full px-3 py-1 flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                            <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                          </div>
                        </div>

                        {/* Course Stats */}
                        <div className="absolute bottom-6 left-6 flex items-center gap-4">
                          <div className="bg-white/90 rounded-lg px-3 py-1">
                            <span className="text-sm font-semibold text-gray-900">{course.lessons} lessons</span>
                          </div>
                          <div className="bg-white/90 rounded-lg px-3 py-1">
                            <span className="text-sm font-semibold text-gray-900">{course.duration}</span>
                          </div>
                        </div>

                        {isEditing && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute bottom-6 right-6 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Stats Row */}
                      <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-medium">{course.students}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <BookOpen className="w-4 h-4" />
                          <span className="text-sm font-medium">{course.lessons} lessons</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-500" />
                          <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                        </div>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="space-y-4">
                        <div className="flex items-baseline gap-3">
                          <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                          <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs font-bold">
                            SAVE {Math.round((1 - parseInt(course.price.slice(1)) / parseInt(course.originalPrice.slice(1))) * 100)}%
                          </span>
                        </div>
                        
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <DollarSign className="w-4 h-4 mr-2" />
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Extended Bio Section */}
            {storeData.sections.extendedBio.enabled && (
              <Card className={`${storeData.sections.extendedBio.size === 'large' ? 'p-8' : 'p-4'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    About Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-foreground leading-relaxed ${storeData.sections.extendedBio.size === 'large' ? 'text-lg' : 'text-base'}`}>
                    {storeData.sections.extendedBio.data}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Portfolio Section */}
            {storeData.sections.portfolio.enabled && (
              <Card className={`${storeData.sections.portfolio.size === 'large' ? 'p-8' : 'p-4'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`grid gap-6 ${storeData.sections.portfolio.size === 'large' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    {storeData.sections.portfolio.data.map((item, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-soft transition-shadow">
                        <h4 className={`font-semibold ${storeData.sections.portfolio.size === 'large' ? 'text-lg' : 'text-base'}`}>
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Resume Section */}
            {storeData.sections.resume.enabled && (
              <Card className={`${storeData.sections.resume.size === 'large' ? 'p-8' : 'p-4'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {storeData.sections.resume.data.map((item, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <h4 className={`font-semibold ${storeData.sections.resume.size === 'large' ? 'text-lg' : 'text-base'}`}>
                          {item.position}
                        </h4>
                        <p className="text-primary font-medium">{item.company}</p>
                        <p className="text-sm text-muted-foreground">{item.period}</p>
                        <p className="text-foreground mt-2">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Testimonials Section */}
            {storeData.sections.testimonials.enabled && (
              <Card className={`${storeData.sections.testimonials.size === 'large' ? 'p-8' : 'p-4'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Quote className="w-5 h-5 mr-2" />
                    What Students Say
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`grid gap-6 ${storeData.sections.testimonials.size === 'large' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    {storeData.sections.testimonials.data.map((testimonial, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-6">
                        <Quote className="w-8 h-8 text-primary/50 mb-4" />
                        <p className={`text-foreground mb-4 ${storeData.sections.testimonials.size === 'large' ? 'text-lg' : 'text-base'}`}>
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full mr-3"></div>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
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
                    <Input 
                      placeholder="Your Store Name" 
                      value={storeData.profile.name}
                      onChange={(e) => updateProfile('name', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tagline</label>
                    <Input 
                      placeholder="Your professional tagline" 
                      value={storeData.profile.tagline}
                      onChange={(e) => updateProfile('tagline', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bio</label>
                    <Textarea 
                      placeholder="Tell your story..." 
                      className="min-h-24"
                      value={storeData.profile.bio}
                      onChange={(e) => updateProfile('bio', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Students</label>
                      <Input 
                        placeholder="12,453" 
                        value={storeData.profile.students}
                        onChange={(e) => updateProfile('students', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Rating</label>
                      <Input 
                        placeholder="4.9" 
                        value={storeData.profile.rating}
                        onChange={(e) => updateProfile('rating', e.target.value)}
                      />
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
                    <Switch 
                      checked={storeData.settings.showStudentCount}
                      onCheckedChange={(checked) => updateSettings('showStudentCount', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show ratings</p>
                      <p className="text-sm text-muted-foreground">Display course ratings</p>
                    </div>
                    <Switch 
                      checked={storeData.settings.showRatings}
                      onCheckedChange={(checked) => updateSettings('showRatings', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable course previews</p>
                      <p className="text-sm text-muted-foreground">Allow preview of course content</p>
                    </div>
                    <Switch 
                      checked={storeData.settings.enablePreviews}
                      onCheckedChange={(checked) => updateSettings('enablePreviews', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Social proof</p>
                      <p className="text-sm text-muted-foreground">Show testimonials and reviews</p>
                    </div>
                    <Switch 
                      checked={storeData.settings.showSocialProof}
                      onCheckedChange={(checked) => updateSettings('showSocialProof', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section Controls */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Additional Sections</h3>
              
              {/* Extended Bio Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Extended Bio Section
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Select 
                        value={storeData.sections.extendedBio.size} 
                        onValueChange={(value: 'small' | 'large') => updateSection('extendedBio', 'size', value)}
                      >
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                      <Switch 
                        checked={storeData.sections.extendedBio.enabled}
                        onCheckedChange={(checked) => updateSection('extendedBio', 'enabled', checked)}
                      />
                    </div>
                  </div>
                </CardHeader>
                {storeData.sections.extendedBio.enabled && (
                  <CardContent>
                    <Textarea 
                      placeholder="Extended bio content..." 
                      className="min-h-32"
                      value={storeData.sections.extendedBio.data}
                      onChange={(e) => updateSection('extendedBio', 'data', e.target.value)}
                    />
                  </CardContent>
                )}
              </Card>

              {/* Portfolio Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Portfolio Section
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Select 
                        value={storeData.sections.portfolio.size} 
                        onValueChange={(value: 'small' | 'large') => updateSection('portfolio', 'size', value)}
                      >
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                      <Switch 
                        checked={storeData.sections.portfolio.enabled}
                        onCheckedChange={(checked) => updateSection('portfolio', 'enabled', checked)}
                      />
                    </div>
                  </div>
                </CardHeader>
                {storeData.sections.portfolio.enabled && (
                  <CardContent className="space-y-4">
                    {storeData.sections.portfolio.data.map((item, index) => (
                      <div key={index} className="space-y-2 p-4 border rounded-lg">
                        <Input 
                          placeholder="Project title" 
                          value={item.title}
                          onChange={(e) => {
                            const newData = [...storeData.sections.portfolio.data];
                            newData[index] = { ...item, title: e.target.value };
                            updateSection('portfolio', 'data', newData);
                          }}
                        />
                        <Textarea 
                          placeholder="Project description" 
                          value={item.description}
                          onChange={(e) => {
                            const newData = [...storeData.sections.portfolio.data];
                            newData[index] = { ...item, description: e.target.value };
                            updateSection('portfolio', 'data', newData);
                          }}
                        />
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>

              {/* Resume Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Resume Section
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Select 
                        value={storeData.sections.resume.size} 
                        onValueChange={(value: 'small' | 'large') => updateSection('resume', 'size', value)}
                      >
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                      <Switch 
                        checked={storeData.sections.resume.enabled}
                        onCheckedChange={(checked) => updateSection('resume', 'enabled', checked)}
                      />
                    </div>
                  </div>
                </CardHeader>
                {storeData.sections.resume.enabled && (
                  <CardContent className="space-y-4">
                    {storeData.sections.resume.data.map((item, index) => (
                      <div key={index} className="space-y-2 p-4 border rounded-lg">
                        <Input 
                          placeholder="Position" 
                          value={item.position}
                          onChange={(e) => {
                            const newData = [...storeData.sections.resume.data];
                            newData[index] = { ...item, position: e.target.value };
                            updateSection('resume', 'data', newData);
                          }}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Input 
                            placeholder="Company" 
                            value={item.company}
                            onChange={(e) => {
                              const newData = [...storeData.sections.resume.data];
                              newData[index] = { ...item, company: e.target.value };
                              updateSection('resume', 'data', newData);
                            }}
                          />
                          <Input 
                            placeholder="Period" 
                            value={item.period}
                            onChange={(e) => {
                              const newData = [...storeData.sections.resume.data];
                              newData[index] = { ...item, period: e.target.value };
                              updateSection('resume', 'data', newData);
                            }}
                          />
                        </div>
                        <Textarea 
                          placeholder="Description" 
                          value={item.description}
                          onChange={(e) => {
                            const newData = [...storeData.sections.resume.data];
                            newData[index] = { ...item, description: e.target.value };
                            updateSection('resume', 'data', newData);
                          }}
                        />
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>

              {/* Testimonials Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Quote className="w-5 h-5 mr-2" />
                      Testimonials Section
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Select 
                        value={storeData.sections.testimonials.size} 
                        onValueChange={(value: 'small' | 'large') => updateSection('testimonials', 'size', value)}
                      >
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                      <Switch 
                        checked={storeData.sections.testimonials.enabled}
                        onCheckedChange={(checked) => updateSection('testimonials', 'enabled', checked)}
                      />
                    </div>
                  </div>
                </CardHeader>
                {storeData.sections.testimonials.enabled && (
                  <CardContent className="space-y-4">
                    {storeData.sections.testimonials.data.map((testimonial, index) => (
                      <div key={index} className="space-y-2 p-4 border rounded-lg">
                        <Textarea 
                          placeholder="Testimonial quote" 
                          value={testimonial.quote}
                          onChange={(e) => {
                            const newData = [...storeData.sections.testimonials.data];
                            newData[index] = { ...testimonial, quote: e.target.value };
                            updateSection('testimonials', 'data', newData);
                          }}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Input 
                            placeholder="Author name" 
                            value={testimonial.author}
                            onChange={(e) => {
                              const newData = [...storeData.sections.testimonials.data];
                              newData[index] = { ...testimonial, author: e.target.value };
                              updateSection('testimonials', 'data', newData);
                            }}
                          />
                          <Input 
                            placeholder="Author role" 
                            value={testimonial.role}
                            onChange={(e) => {
                              const newData = [...storeData.sections.testimonials.data];
                              newData[index] = { ...testimonial, role: e.target.value };
                              updateSection('testimonials', 'data', newData);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                )}
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