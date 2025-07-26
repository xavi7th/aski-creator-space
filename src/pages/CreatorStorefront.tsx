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
                        <h2 className="text-2xl font-bold text-foreground">{storeData.profile.name}</h2>
                        <p className="text-muted-foreground">{storeData.profile.tagline}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          {storeData.settings.showStudentCount && (
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="w-4 h-4 mr-1" />
                              {storeData.profile.students} students
                            </div>
                          )}
                          {storeData.settings.showRatings && (
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="w-4 h-4 mr-1 text-yellow-500" />
                              {storeData.profile.rating} rating
                            </div>
                          )}
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {storeData.profile.courses} courses
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
                    {storeData.profile.bio}
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