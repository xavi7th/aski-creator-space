import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Plus, 
  Eye, 
  Save, 
  Type, 
  Image, 
  Video, 
  CreditCard, 
  Star, 
  Users, 
  Quote,
  Layout,
  Palette,
  Smartphone,
  Monitor,
  Tablet,
  Move,
  Settings,
  Copy,
  Trash2
} from "lucide-react";

interface Block {
  id: string;
  type: 'hero' | 'text' | 'image' | 'video' | 'pricing' | 'testimonial' | 'cta';
  content: any;
}

export default function PageBuilder() {
  const [activeTab, setActiveTab] = useState("builder");
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [blocks, setBlocks] = useState<Block[]>([
    {
      id: '1',
      type: 'hero',
      content: {
        title: 'BOOKED WITHOUT BOUNDARIES',
        subtitle: 'Master the art of client acquisition - join top coaches who have transformed their business. Take the leap into confidence.',
        image: 'bg-gradient-primary',
        cta: 'Register Now',
        hasForm: true,
        formFields: ['Full Name', 'Best Email', 'Phone Number']
      }
    },
    {
      id: '2', 
      type: 'text',
      content: {
        heading: 'You started off with one dream in mind:',
        text: 'To create something from your soul work as a coach that connects Heart to Heart.\n\nYou told yourself once this takes off - I hope that it is a skill you can identify with in this field.\n\nYou jumped yourself in the stage - then fact is a skill you can identify with in this stage.\n\nYou feel yourself it bit you can practice and gain practice and be experience and experience that fits yourself to be yourself to take yourself to experience that fits.\n\nYou looked around a bit practice and bit and some experience or mindfulness so you ended up not going yourself to business confidence.\n\nYou focused a long as yourself which helped and confident.\n\nYou feel isolated and a bit part of a different direction you will not be able to take as much practice as you want that you are already behind.',
        centered: true
      }
    },
    {
      id: '3',
      type: 'text', 
      content: {
        heading: 'We are here to support you on every stage of the journey',
        text: 'Our community includes thousands of coaches, consultants, and heart-centered entrepreneurs who have built six and seven figure businesses with authentic connection.\\n\\nThe 30 Day Challenge\\n\\nWe will provide you with the daily tools and resources you need to build your ideal client attraction system - and accountability to stick with it for 30 days.\\n\\nPartnership Program\\n\\nJoin our exclusive directory where we connect and support motivated coaches. Starting your online presence and build social authority.\\n\\nNurture Sales\\n\\nRun your online business like it is any real. Starting your social presence and build social authority.',
        features: [
          'Daily tools and resources',
          'Accountability system', 
          'Exclusive directory access',
          'Community support'
        ]
      }
    },
    {
      id: '4',
      type: 'text',
      content: {
        heading: 'In this conference, you will learn:',
        text: '',
        bulletPoints: [
          'How to consistently attract ideal clients',
          'The psychology behind client decisions', 
          'Building authentic relationships that convert',
          'Systems for sustainable business growth'
        ]
      }
    },
    {
      id: '5',
      type: 'text',
      content: {
        heading: 'Join Expert Instructors',
        text: 'Get ready to be in close company with our industry pros and see the transformational journey of our community members as they turn their stories into million-dollar businesses.',
        hasImage: true,
        imageUrl: '/lovable-uploads/0795ffc0-38d0-4894-a840-0ee84615459c.png'
      }
    },
    {
      id: '6', 
      type: 'text',
      content: {
        heading: 'Imagine what your life could be like in the next 100 days',
        text: 'Picture yourself confident in your abilities, with a clear path forward and the support you need to succeed.',
        bulletPoints: [
          'Consistent client bookings',
          'Clear business strategy',
          'Supportive community'
        ]
      }
    },
    {
      id: '7',
      type: 'text',
      content: {
        heading: '🎁 AMAZING GIFTS FOR YOU',
        text: 'When you join today, you will get exclusive bonuses that alone are worth more than the full program investment.',
        hasHighlight: true
      }
    },
    {
      id: '8',
      type: 'cta',
      content: {
        heading: '2025 is not over yet! Let us make it count.',
        text: 'Join the transformation today',
        button: 'Start Your Journey'
      }
    }
  ]);

  const blockTypes = [
    { type: 'hero', icon: Layout, label: 'Hero Section' },
    { type: 'text', icon: Type, label: 'Text Block' },
    { type: 'image', icon: Image, label: 'Image' },
    { type: 'video', icon: Video, label: 'Video' },
    { type: 'pricing', icon: CreditCard, label: 'Pricing' },
    { type: 'testimonial', icon: Quote, label: 'Testimonial' },
    { type: 'cta', icon: Star, label: 'Call to Action' }
  ];

  const addBlock = (type: string) => {
    const newBlock: Block = {
      id: Date.now().toString(),
      type: type as any,
      content: getDefaultContent(type)
    };
    setBlocks([...blocks, newBlock]);
  };

  const getDefaultContent = (type: string) => {
    const defaults: { [key: string]: any } = {
      hero: {
        title: 'Your Amazing Course Title',
        subtitle: 'Compelling subtitle that converts',
        image: 'bg-gradient-secondary',
        cta: 'Enroll Now'
      },
      text: {
        heading: 'Section Heading',
        text: 'Your content goes here...'
      },
      image: {
        url: '',
        alt: 'Image description',
        caption: ''
      },
      video: {
        url: '',
        title: 'Video Title',
        description: 'Video description'
      },
      pricing: {
        title: 'Course Pricing',
        price: '$197',
        features: ['Feature 1', 'Feature 2', 'Feature 3']
      },
      testimonial: {
        quote: 'This course changed my business!',
        author: 'Happy Student',
        role: 'Entrepreneur'
      },
      cta: {
        heading: 'Ready to Get Started?',
        text: 'Join thousands of successful students',
        button: 'Enroll Today'
      }
    };
    return defaults[type] || {};
  };

  const renderBlock = (block: Block) => {
    const isSelected = selectedBlock === block.id;
    
    switch (block.type) {
      case 'hero':
        return (
          <div 
            className={`relative ${block.content.image} h-96 rounded-lg overflow-hidden cursor-pointer transition-all ${
              isSelected ? 'ring-2 ring-primary shadow-medium' : 'hover:shadow-soft'
            }`}
            onClick={() => setSelectedBlock(block.id)}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">{block.content.title}</h1>
                <p className="text-xl mb-8">{block.content.subtitle}</p>
                <Button variant="default" size="lg">
                  {block.content.cta}
                </Button>
              </div>
            </div>
            {isSelected && <BlockControls blockId={block.id} />}
          </div>
        );
      
      case 'text':
        return (
          <div 
            className={`p-6 bg-white rounded-lg cursor-pointer transition-all ${
              isSelected ? 'ring-2 ring-primary shadow-medium' : 'hover:shadow-soft'
            }`}
            onClick={() => setSelectedBlock(block.id)}
          >
            <h2 className="text-2xl font-bold mb-4">{block.content.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{block.content.text}</p>
            {isSelected && <BlockControls blockId={block.id} />}
          </div>
        );
      
      case 'pricing':
        return (
          <div 
            className={`p-6 bg-white rounded-lg border-2 border-primary/20 cursor-pointer transition-all ${
              isSelected ? 'ring-2 ring-primary shadow-medium' : 'hover:shadow-soft'
            }`}
            onClick={() => setSelectedBlock(block.id)}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">{block.content.title}</h3>
              <div className="text-4xl font-bold text-primary mb-4">{block.content.price}</div>
              <div className="space-y-2 mb-6">
                {block.content.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              <Button variant="gradient" className="w-full">
                Purchase Now
              </Button>
            </div>
            {isSelected && <BlockControls blockId={block.id} />}
          </div>
        );
      
      default:
        return (
          <div 
            className={`p-6 bg-muted/50 rounded-lg border-2 border-dashed border-muted cursor-pointer transition-all ${
              isSelected ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedBlock(block.id)}
          >
            <p className="text-center text-muted-foreground">
              {block.type.charAt(0).toUpperCase() + block.type.slice(1)} Block
            </p>
            {isSelected && <BlockControls blockId={block.id} />}
          </div>
        );
    }
  };

  const BlockControls = ({ blockId }: { blockId: string }) => (
    <div className="absolute top-2 right-2 flex items-center space-x-1 bg-white rounded-md shadow-medium p-1">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Move className="w-3 h-3" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Copy className="w-3 h-3" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Settings className="w-3 h-3" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
        <Trash2 className="w-3 h-3" />
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-white border-b border-primary/10 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Page Builder</h1>
              <p className="text-muted-foreground">Create beautiful landing pages for your courses</p>
            </div>
            <div className="flex items-center space-x-3">
              {/* Device Preview Toggle */}
              <div className="flex items-center bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === 'desktop' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('desktop')}
                >
                  <Monitor className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'tablet' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('tablet')}
                >
                  <Tablet className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'mobile' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('mobile')}
                >
                  <Smartphone className="w-4 h-4" />
                </Button>
              </div>
              
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              <Button variant="secondary" size="sm">
                <Save className="w-4 h-4" />
                Save Draft
              </Button>
              <Button variant="gradient" size="sm">
                Publish Page
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar - Block Library */}
          <div className="col-span-3">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Blocks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-2">
                    {blockTypes.map((blockType) => (
                      <Button
                        key={blockType.type}
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => addBlock(blockType.type)}
                      >
                        <blockType.icon className="w-4 h-4 mr-2" />
                        {blockType.label}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Canvas */}
          <div className="col-span-6">
            <div className={`
              mx-auto bg-white shadow-medium rounded-lg overflow-hidden transition-all duration-300
              ${viewMode === 'mobile' ? 'max-w-sm' : viewMode === 'tablet' ? 'max-w-2xl' : 'max-w-4xl'}
            `}>
              {/* Page Header */}
              <div className="bg-gradient-subtle p-4 border-b border-primary/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Course Landing Page</h3>
                    <p className="text-sm text-muted-foreground">Last saved 2 minutes ago</p>
                  </div>
                  <Badge variant="secondary">Draft</Badge>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="min-h-96">
                {blocks.length === 0 ? (
                  <div className="flex items-center justify-center h-96 text-center">
                    <div>
                      <Layout className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Start Building Your Page</h3>
                      <p className="text-muted-foreground mb-4">Add blocks from the sidebar to create your landing page</p>
                      <Button onClick={() => addBlock('hero')}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Hero Section
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 p-6">
                    {blocks.map((block) => (
                      <div key={block.id} className="relative">
                        {renderBlock(block)}
                      </div>
                    ))}
                    
                    {/* Add Block Button */}
                    <div className="flex items-center justify-center py-8">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-dashed border-2"
                        onClick={() => addBlock('text')}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Block
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Properties Panel */}
          <div className="col-span-3">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Properties
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedBlock ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Block Type</label>
                      <Badge variant="secondary">
                        {blocks.find(b => b.id === selectedBlock)?.type}
                      </Badge>
                    </div>
                    
                    {/* Dynamic form based on selected block */}
                    {blocks.find(b => b.id === selectedBlock)?.type === 'hero' && (
                      <>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Title</label>
                          <Input 
                            defaultValue={blocks.find(b => b.id === selectedBlock)?.content.title}
                            placeholder="Enter title..."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Subtitle</label>
                          <Textarea 
                            defaultValue={blocks.find(b => b.id === selectedBlock)?.content.subtitle}
                            placeholder="Enter subtitle..."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Button Text</label>
                          <Input 
                            defaultValue={blocks.find(b => b.id === selectedBlock)?.content.cta}
                            placeholder="Button text..."
                          />
                        </div>
                      </>
                    )}
                    
                    {blocks.find(b => b.id === selectedBlock)?.type === 'text' && (
                      <>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Heading</label>
                          <Input 
                            defaultValue={blocks.find(b => b.id === selectedBlock)?.content.heading}
                            placeholder="Enter heading..."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Content</label>
                          <Textarea 
                            defaultValue={blocks.find(b => b.id === selectedBlock)?.content.text}
                            placeholder="Enter content..."
                            className="min-h-24"
                          />
                        </div>
                      </>
                    )}

                    <div className="pt-4 space-y-2">
                      <Button variant="gradient" size="sm" className="w-full">
                        Update Block
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Copy className="w-4 h-4 mr-2" />
                        Duplicate
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full text-red-500 hover:text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Block
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Settings className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Select a block to edit its properties
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}