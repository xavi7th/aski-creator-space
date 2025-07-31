import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
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
  Trash2,
  Grid3X3,
  List,
  ArrowUp,
  ArrowDown,
  Edit3,
  Target,
  Trophy,
  Gift,
  Clock,
  Check,
  X,
  GripVertical
} from "lucide-react";

interface Block {
  id: string;
  type: 'hero' | 'text' | 'features' | 'testimonials' | 'cta' | 'form' | 'image' | 'video' | 'pricing' | 'bonuses' | 'timeline' | 'footer';
  content: any;
  settings: {
    backgroundColor: string;
    textColor: string;
    padding: string;
    alignment: 'left' | 'center' | 'right';
  };
}

// Default template based on the attached image
const defaultTemplate: Block[] = [
  {
    id: 'hero-1',
    type: 'hero',
    content: {
      title: 'BOOKED WITHOUT BOUNDARIES',
      subtitle: 'Master the art of client acquisition and join top coaches who have transformed their business. Take the leap into confidence.',
      ctaText: 'Claim Your Spot Now',
      formTitle: 'Reserve Your Spot Now',
      formFields: [
        { label: 'Full Name', placeholder: 'Enter your full name', required: true },
        { label: 'Best Email', placeholder: 'Enter your email', required: true },
        { label: 'Phone Number', placeholder: 'Enter your phone', required: true }
      ]
    },
    settings: {
      backgroundColor: 'bg-slate-800',
      textColor: 'text-white',
      padding: 'py-20',
      alignment: 'center'
    }
  },
  {
    id: 'text-1',
    type: 'text',
    content: {
      heading: 'You started off with one dream in mind:',
      subheading: 'To create something meaningful that connects with people...',
      text: 'You told yourself once this takes off - I hope this becomes something I can be proud of.\n\nYou jumped in with passion, knowing deep down that success in coaching requires skills you can develop.\n\nYou want to help people transform their lives, but you realized that building a successful coaching business requires more than just good intentions.\n\nYou looked around and saw other coaches thriving, but felt uncertain about how to replicate their success.\n\nYou focused on your craft but struggled with the business side - marketing, sales, and client acquisition.\n\nYou sometimes feel isolated and unsure about the direction to take your coaching practice.'
    },
    settings: {
      backgroundColor: 'bg-white',
      textColor: 'text-gray-800',
      padding: 'py-16',
      alignment: 'center'
    }
  },
  {
    id: 'features-1',
    type: 'features',
    content: {
      heading: 'We are here to support you on every stage of the journey',
      features: [
        {
          icon: 'target',
          title: 'The 30 Day Challenge',
          description: 'Daily tools and resources to build your ideal client attraction system with accountability.'
        },
        {
          icon: 'users',
          title: 'Partnership Program', 
          description: 'Join our exclusive directory where we connect and support motivated coaches.'
        },
        {
          icon: 'trophy',
          title: 'Proven System',
          description: 'Run your coaching business with confidence using our tested frameworks.'
        }
      ]
    },
    settings: {
      backgroundColor: 'bg-gray-50',
      textColor: 'text-gray-800',
      padding: 'py-16',
      alignment: 'center'
    }
  },
  {
    id: 'testimonials-1',
    type: 'testimonials',
    content: {
      heading: 'In this conference, you\'ll learn:',
      bulletPoints: [
        'How to consistently attract your ideal clients without burning out',
        'The psychology behind client decision-making and how to ethically influence',
        'Building authentic relationships that naturally convert to sales',
        'Systems for sustainable business growth while maintaining work-life balance'
      ]
    },
    settings: {
      backgroundColor: 'bg-white',
      textColor: 'text-gray-800',
      padding: 'py-16',
      alignment: 'left'
    }
  },
  {
    id: 'cta-1',
    type: 'cta',
    content: {
      heading: 'Join Expert Instructors',
      text: 'Get ready to be in close company with our industry pros and see the transformational journey of our community members as they turn their stories into successful businesses.',
      ctaText: 'Register Now',
      hasImage: true,
      imageDescription: 'Expert instructor presenting to engaged audience'
    },
    settings: {
      backgroundColor: 'bg-slate-800',
      textColor: 'text-white',
      padding: 'py-20',
      alignment: 'center'
    }
  },
  {
    id: 'timeline-1',
    type: 'timeline',
    content: {
      heading: 'Imagine what your life could be like in the next 100 days',
      timelineItems: [
        { phase: 'Days 1-30', title: 'Foundation Building', description: 'Master the fundamentals of client attraction' },
        { phase: 'Days 31-60', title: 'System Implementation', description: 'Put proven frameworks into action' },
        { phase: 'Days 61-100', title: 'Scale & Optimize', description: 'Grow your business sustainably' }
      ]
    },
    settings: {
      backgroundColor: 'bg-gray-50',
      textColor: 'text-gray-800',
      padding: 'py-16',
      alignment: 'center'
    }
  },
  {
    id: 'bonuses-1',
    type: 'bonuses',
    content: {
      heading: '🎁 AMAZING GIFTS FOR YOU',
      subtitle: 'When you join today, you get exclusive bonuses worth more than the program investment',
      bonuses: [
        { title: 'Exclusive Client/Coach Discovery Access', value: '$497', description: 'Private community access' },
        { title: 'Advanced Marketing Templates', value: '$297', description: 'Ready-to-use marketing materials' },
        { title: '1-on-1 Strategy Session', value: '$500', description: 'Personal consultation call' }
      ]
    },
    settings: {
      backgroundColor: 'bg-orange-50',
      textColor: 'text-gray-800',
      padding: 'py-16',
      alignment: 'center'
    }
  },
  {
    id: 'footer-1',
    type: 'footer',
    content: {
      heading: '2025 is not over yet! Let\'s make it count.',
      text: 'Join us and transform your coaching business today.',
      ctaText: 'Secure Your Spot Now'
    },
    settings: {
      backgroundColor: 'bg-slate-800',
      textColor: 'text-white',
      padding: 'py-16',
      alignment: 'center'
    }
  }
];

export default function PageBuilder() {
  const [activeTab, setActiveTab] = useState("builder");
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [blocks, setBlocks] = useState<Block[]>(defaultTemplate);
  const [pageSettings, setPageSettings] = useState({
    title: 'Booked Without Boundaries - Landing Page',
    description: 'Transform your coaching business with proven strategies'
  });

  // Load saved data
  useEffect(() => {
    const savedData = localStorage.getItem('pageBuilderData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setBlocks(parsed.blocks || defaultTemplate);
      setPageSettings(parsed.pageSettings || pageSettings);
    }
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem('pageBuilderData', JSON.stringify({ blocks, pageSettings }));
  }, [blocks, pageSettings]);

  const blockTypes = [
    { type: 'hero', label: 'Hero Section', icon: Layout, description: 'Main header with form' },
    { type: 'text', label: 'Text Block', icon: Type, description: 'Heading and paragraphs' },
    { type: 'features', label: 'Features', icon: Grid3X3, description: 'Feature grid with icons' },
    { type: 'testimonials', label: 'Testimonials', icon: Quote, description: 'Social proof section' },
    { type: 'cta', label: 'Call to Action', icon: Target, description: 'Action-focused section' },
    { type: 'form', label: 'Form', icon: Edit3, description: 'Standalone form' },
    { type: 'image', label: 'Image', icon: Image, description: 'Image with caption' },
    { type: 'video', label: 'Video', icon: Video, description: 'Video embed' },
    { type: 'pricing', label: 'Pricing', icon: CreditCard, description: 'Pricing tables' },
    { type: 'bonuses', label: 'Bonuses', icon: Gift, description: 'Bonus offers section' },
    { type: 'timeline', label: 'Timeline', icon: Clock, description: 'Process timeline' },
    { type: 'footer', label: 'Footer', icon: Layout, description: 'Page footer' }
  ];

  const addBlock = (type: Block['type']) => {
    const newBlock: Block = {
      id: `${type}-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      settings: {
        backgroundColor: 'bg-white',
        textColor: 'text-gray-800',
        padding: 'py-16',
        alignment: 'center'
      }
    };
    setBlocks([...blocks, newBlock]);
  };

  const getDefaultContent = (type: Block['type']) => {
    switch (type) {
      case 'hero':
        return {
          title: 'Your Compelling Headline',
          subtitle: 'A powerful subtitle that converts',
          ctaText: 'Get Started Now',
          formTitle: 'Sign Up Today',
          formFields: [
            { label: 'Name', placeholder: 'Your name', required: true },
            { label: 'Email', placeholder: 'Your email', required: true }
          ]
        };
      case 'text':
        return {
          heading: 'Section Heading',
          subheading: 'Optional subheading',
          text: 'Your content goes here. You can write multiple paragraphs to convey your message effectively.'
        };
      case 'features':
        return {
          heading: 'Our Amazing Features',
          features: [
            { icon: 'check', title: 'Feature One', description: 'Description of this feature' },
            { icon: 'star', title: 'Feature Two', description: 'Description of this feature' },
            { icon: 'target', title: 'Feature Three', description: 'Description of this feature' }
          ]
        };
      case 'testimonials':
        return {
          heading: 'What People Say',
          bulletPoints: [
            'First testimonial or benefit point',
            'Second testimonial or benefit point',
            'Third testimonial or benefit point'
          ]
        };
      case 'cta':
        return {
          heading: 'Ready to Get Started?',
          text: 'Join thousands of satisfied customers today.',
          ctaText: 'Get Started Now',
          hasImage: false
        };
      case 'bonuses':
        return {
          heading: '🎁 Exclusive Bonuses',
          subtitle: 'Limited time offer',
          bonuses: [
            { title: 'Bonus One', value: '$100', description: 'Description of bonus' },
            { title: 'Bonus Two', value: '$200', description: 'Description of bonus' }
          ]
        };
      case 'timeline':
        return {
          heading: 'Your Journey',
          timelineItems: [
            { phase: 'Step 1', title: 'Getting Started', description: 'Begin your journey' },
            { phase: 'Step 2', title: 'Making Progress', description: 'See results' },
            { phase: 'Step 3', title: 'Success', description: 'Achieve your goals' }
          ]
        };
      case 'footer':
        return {
          heading: 'Ready to Transform?',
          text: 'Join us today and start your journey.',
          ctaText: 'Get Started'
        };
      default:
        return {};
    }
  };

  const updateBlock = (blockId: string, newContent: any) => {
    setBlocks(blocks.map(block => 
      block.id === blockId ? { ...block, content: { ...block.content, ...newContent } } : block
    ));
  };

  const updateBlockSettings = (blockId: string, newSettings: Partial<Block['settings']>) => {
    setBlocks(blocks.map(block => 
      block.id === blockId ? { ...block, settings: { ...block.settings, ...newSettings } } : block
    ));
  };

  const deleteBlock = (blockId: string) => {
    setBlocks(blocks.filter(block => block.id !== blockId));
    if (selectedBlock === blockId) {
      setSelectedBlock(null);
    }
  };

  const moveBlock = (blockId: string, direction: 'up' | 'down') => {
    const index = blocks.findIndex(block => block.id === blockId);
    if (
      (direction === 'up' && index > 0) ||
      (direction === 'down' && index < blocks.length - 1)
    ) {
      const newBlocks = [...blocks];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
      setBlocks(newBlocks);
    }
  };

  const duplicateBlock = (blockId: string) => {
    const block = blocks.find(b => b.id === blockId);
    if (block) {
      const newBlock = { ...block, id: `${block.type}-${Date.now()}` };
      const index = blocks.findIndex(b => b.id === blockId);
      setBlocks([...blocks.slice(0, index + 1), newBlock, ...blocks.slice(index + 1)]);
    }
  };

  const getViewModeClass = () => {
    switch (viewMode) {
      case 'mobile': return 'max-w-sm mx-auto';
      case 'tablet': return 'max-w-2xl mx-auto';
      default: return 'w-full';
    }
  };

  const renderIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'check': return <Check className={className} />;
      case 'star': return <Star className={className} />;
      case 'target': return <Target className={className} />;
      case 'users': return <Users className={className} />;
      case 'trophy': return <Trophy className={className} />;
      default: return <Check className={className} />;
    }
  };

  const renderBlock = (block: Block) => {
    const { settings } = block;
    const alignmentClass = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    };

    const baseClasses = `${settings.backgroundColor} ${settings.textColor} ${settings.padding} ${alignmentClass[settings.alignment]}`;

    switch (block.type) {
      case 'hero':
        return (
          <section className={`${baseClasses} relative`} key={block.id}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {block.content.title}
                  </h1>
                  <p className="text-xl mb-8 opacity-90">
                    {block.content.subtitle}
                  </p>
                  <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                    {block.content.ctaText}
                  </Button>
                </div>
                <div className="bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    {block.content.formTitle}
                  </h3>
                  <form className="space-y-4">
                    {block.content.formFields?.map((field: any, index: number) => (
                      <Input
                        key={index}
                        placeholder={field.placeholder}
                        className="w-full"
                      />
                    ))}
                    <Button className="w-full bg-slate-800 hover:bg-slate-700">
                      {block.content.ctaText}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );

      case 'text':
        return (
          <section className={baseClasses} key={block.id}>
            <div className="container mx-auto px-4 max-w-4xl">
              {block.content.heading && (
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {block.content.heading}
                </h2>
              )}
              {block.content.subheading && (
                <h3 className="text-xl md:text-2xl mb-8 opacity-80">
                  {block.content.subheading}
                </h3>
              )}
              {block.content.text && (
                <div className="text-lg leading-relaxed whitespace-pre-line">
                  {block.content.text}
                </div>
              )}
            </div>
          </section>
        );

      case 'features':
        return (
          <section className={baseClasses} key={block.id}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                {block.content.heading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {block.content.features?.map((feature: any, index: number) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        {renderIcon(feature.icon, "w-12 h-12 text-blue-600")}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );

      case 'testimonials':
        return (
          <section className={baseClasses} key={block.id}>
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {block.content.heading}
              </h2>
              <ul className="space-y-4 text-lg">
                {block.content.bulletPoints?.map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );

      case 'cta':
        return (
          <section className={baseClasses} key={block.id}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {block.content.heading}
                  </h2>
                  <p className="text-xl mb-8 opacity-90">
                    {block.content.text}
                  </p>
                  <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                    {block.content.ctaText}
                  </Button>
                </div>
                {block.content.hasImage && (
                  <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">{block.content.imageDescription || 'Image placeholder'}</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'bonuses':
        return (
          <section className={baseClasses} key={block.id}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {block.content.heading}
              </h2>
              <p className="text-xl mb-12 text-center opacity-80">
                {block.content.subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {block.content.bonuses?.map((bonus: any, index: number) => (
                  <Card key={index} className="border-2 border-orange-200">
                    <CardHeader className="text-center">
                      <Badge className="mx-auto mb-2 bg-orange-500 text-white">
                        {bonus.value}
                      </Badge>
                      <CardTitle className="text-lg">{bonus.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-600">{bonus.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );

      case 'timeline':
        return (
          <section className={baseClasses} key={block.id}>
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                {block.content.heading}
              </h2>
              <div className="space-y-8">
                {block.content.timelineItems?.map((item: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="font-bold text-sm text-center">{item.phase}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'footer':
        return (
          <section className={baseClasses} key={block.id}>
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {block.content.heading}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {block.content.text}
              </p>
              <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                {block.content.ctaText}
              </Button>
            </div>
          </section>
        );

      default:
        return (
          <div className={baseClasses} key={block.id}>
            <div className="container mx-auto px-4">
              <p>Block type "{block.type}" not implemented yet</p>
            </div>
          </div>
        );
    }
  };

  const renderBlockEditor = (block: Block) => {
    if (!block) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Edit {block.type} Block</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedBlock(null)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <Separator />

        {/* Content Editor */}
        <div className="space-y-4">
          <h4 className="font-medium">Content</h4>
          
          {block.type === 'hero' && (
            <>
              <div>
                <Label>Title</Label>
                <Input
                  value={block.content.title || ''}
                  onChange={(e) => updateBlock(block.id, { title: e.target.value })}
                />
              </div>
              <div>
                <Label>Subtitle</Label>
                <Textarea
                  value={block.content.subtitle || ''}
                  onChange={(e) => updateBlock(block.id, { subtitle: e.target.value })}
                />
              </div>
              <div>
                <Label>CTA Text</Label>
                <Input
                  value={block.content.ctaText || ''}
                  onChange={(e) => updateBlock(block.id, { ctaText: e.target.value })}
                />
              </div>
              <div>
                <Label>Form Title</Label>
                <Input
                  value={block.content.formTitle || ''}
                  onChange={(e) => updateBlock(block.id, { formTitle: e.target.value })}
                />
              </div>
            </>
          )}

          {block.type === 'text' && (
            <>
              <div>
                <Label>Heading</Label>
                <Input
                  value={block.content.heading || ''}
                  onChange={(e) => updateBlock(block.id, { heading: e.target.value })}
                />
              </div>
              <div>
                <Label>Subheading</Label>
                <Input
                  value={block.content.subheading || ''}
                  onChange={(e) => updateBlock(block.id, { subheading: e.target.value })}
                />
              </div>
              <div>
                <Label>Text Content</Label>
                <Textarea
                  value={block.content.text || ''}
                  onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                  rows={6}
                />
              </div>
            </>
          )}

          {block.type === 'cta' && (
            <>
              <div>
                <Label>Heading</Label>
                <Input
                  value={block.content.heading || ''}
                  onChange={(e) => updateBlock(block.id, { heading: e.target.value })}
                />
              </div>
              <div>
                <Label>Text</Label>
                <Textarea
                  value={block.content.text || ''}
                  onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                />
              </div>
              <div>
                <Label>CTA Text</Label>
                <Input
                  value={block.content.ctaText || ''}
                  onChange={(e) => updateBlock(block.id, { ctaText: e.target.value })}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={block.content.hasImage}
                  onCheckedChange={(checked) => updateBlock(block.id, { hasImage: checked })}
                />
                <Label>Include Image</Label>
              </div>
            </>
          )}
        </div>

        <Separator />

        {/* Settings Editor */}
        <div className="space-y-4">
          <h4 className="font-medium">Settings</h4>
          
          <div>
            <Label>Background Color</Label>
            <Select
              value={block.settings.backgroundColor}
              onValueChange={(value) => updateBlockSettings(block.id, { backgroundColor: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bg-white">White</SelectItem>
                <SelectItem value="bg-gray-50">Light Gray</SelectItem>
                <SelectItem value="bg-slate-800">Dark</SelectItem>
                <SelectItem value="bg-blue-50">Light Blue</SelectItem>
                <SelectItem value="bg-orange-50">Light Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Text Color</Label>
            <Select
              value={block.settings.textColor}
              onValueChange={(value) => updateBlockSettings(block.id, { textColor: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text-gray-800">Dark</SelectItem>
                <SelectItem value="text-white">White</SelectItem>
                <SelectItem value="text-blue-800">Blue</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Alignment</Label>
            <Select
              value={block.settings.alignment}
              onValueChange={(value: 'left' | 'center' | 'right') => updateBlockSettings(block.id, { alignment: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Page Builder</h1>
              <p className="text-sm text-gray-600">Create beautiful landing pages</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
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
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              
              <Button size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="builder">Builder</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="builder" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Add Blocks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {blockTypes.map((blockType) => {
                        const IconComponent = blockType.icon;
                        return (
                          <Button
                            key={blockType.type}
                            variant="ghost"
                            className="justify-start h-auto p-3"
                            onClick={() => addBlock(blockType.type)}
                          >
                            <IconComponent className="w-4 h-4 mr-2" />
                            <div className="text-left">
                              <div className="font-medium">{blockType.label}</div>
                              <div className="text-xs text-gray-500">{blockType.description}</div>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Block List */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Page Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-64">
                      <div className="space-y-2">
                        {blocks.map((block) => (
                          <div
                            key={block.id}
                            className={`p-2 rounded border cursor-pointer transition-colors ${
                              selectedBlock === block.id
                                ? 'bg-blue-50 border-blue-200'
                                : 'bg-white hover:bg-gray-50'
                            }`}
                            onClick={() => setSelectedBlock(block.id)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium capitalize">
                                {block.type}
                              </span>
                              <div className="flex items-center space-x-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveBlock(block.id, 'up');
                                  }}
                                >
                                  <ArrowUp className="w-3 h-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveBlock(block.id, 'down');
                                  }}
                                >
                                  <ArrowDown className="w-3 h-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    duplicateBlock(block.id);
                                  }}
                                >
                                  <Copy className="w-3 h-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteBlock(block.id);
                                  }}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Page Preview</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className={`transition-all duration-300 ${getViewModeClass()}`}>
                      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        {blocks.map((block) => renderBlock(block))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Properties Panel */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedBlock ? (
                      renderBlockEditor(blocks.find(b => b.id === selectedBlock)!)
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Select a block to edit its properties
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="mt-6">
            <div className={getViewModeClass()}>
              <div className="bg-white rounded-lg overflow-hidden">
                {blocks.map((block) => renderBlock(block))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Page Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Page Title</Label>
                  <Input
                    value={pageSettings.title}
                    onChange={(e) => setPageSettings({ ...pageSettings, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Page Description</Label>
                  <Textarea
                    value={pageSettings.description}
                    onChange={(e) => setPageSettings({ ...pageSettings, description: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}