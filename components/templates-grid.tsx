"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HeartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-context"
import {
  FileText,
  Video,
  Newspaper,
  Mic,
  Star,
  BarChart,
  Zap,
  Clock,
  ImageIcon,
  Mail,
  PieChart,
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  Target,
  ShoppingBag,
  Calendar,
  Sparkles,
  Megaphone,
  MessageSquare,
  Layers,
  LineChart,
  Palette,
  Tv,
  Gift,
  Search,
  GraduationCapIcon as Graduation,
  BookOpen,
  Globe,
  HeartHandshake,
  UserPlus,
  Share2,
  MessageCircle,
  Rocket,
  Presentation,
  Headphones,
  Clipboard,
  CheckCircle,
  ThumbsUp,
  Gauge,
  Trophy,
  Puzzle,
  Coins,
  Percent,
  ShieldCheck,
} from "lucide-react"

// Template data
export const templates = [
  // Original templates
  {
    id: 1,
    title: "Blog Post to Social Media",
    description: "Transform long-form blog content into engaging social media posts",
    icon: <FileText className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["Twitter", "LinkedIn", "Facebook"],
    popular: true,
  },
  {
    id: 2,
    title: "Product Launch Announcement",
    description: "Create excitement for your new product across multiple channels",
    icon: <Zap className="h-5 w-5" />,
    category: "Marketing",
    platforms: ["All Platforms"],
    new: true,
  },
  {
    id: 3,
    title: "Weekly Newsletter",
    description: "Structured template for consistent weekly newsletters",
    icon: <Newspaper className="h-5 w-5" />,
    category: "Email",
    platforms: ["Email", "Blog"],
  },
  {
    id: 4,
    title: "Video Script to Blog Post",
    description: "Convert video content into SEO-optimized blog articles",
    icon: <Video className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["Blog", "YouTube"],
  },
  {
    id: 5,
    title: "Case Study Format",
    description: "Showcase customer success stories with this structured template",
    icon: <BarChart className="h-5 w-5" />,
    category: "Marketing",
    platforms: ["Blog", "LinkedIn"],
  },
  {
    id: 6,
    title: "Podcast Episode Promotion",
    description: "Promote your podcast episodes across multiple platforms",
    icon: <Mic className="h-5 w-5" />,
    category: "Content Promotion",
    platforms: ["All Platforms"],
  },
  {
    id: 7,
    title: "Thought Leadership Article",
    description: "Position yourself as an industry expert with this template",
    icon: <Star className="h-5 w-5" />,
    category: "Branding",
    platforms: ["LinkedIn", "Blog"],
  },
  {
    id: 8,
    title: "Social Media Content Calendar",
    description: "30-day content plan for consistent social media presence",
    icon: <Clock className="h-5 w-5" />,
    category: "Planning",
    platforms: ["All Platforms"],
  },

  // Creator Content templates
  {
    id: 9,
    title: "Viral Short-Form Video Script",
    description: "Create attention-grabbing scripts for short-form video content",
    icon: <Video className="h-5 w-5" />,
    category: "Creator Content",
    platforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
    new: true,
    popular: true,
  },
  {
    id: 10,
    title: "Expert Interview to Content Suite",
    description: "Transform one interview into multiple content pieces",
    icon: <Mic className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["All Platforms"],
    new: true,
  },
  {
    id: 11,
    title: "Data Storytelling",
    description: "Turn complex data and statistics into compelling narratives",
    icon: <PieChart className="h-5 w-5" />,
    category: "Business",
    platforms: ["LinkedIn", "Blog", "Twitter"],
    new: true,
  },
  {
    id: 12,
    title: "Crisis Communication",
    description: "Professionally address issues across channels with consistent messaging",
    icon: <Megaphone className="h-5 w-5" />,
    category: "PR & Communications",
    platforms: ["All Platforms"],
    new: true,
  },
  {
    id: 13,
    title: "Visual Story Carousel",
    description: "Create swipeable visual stories that drive engagement",
    icon: <ImageIcon className="h-5 w-5" />,
    category: "Visual Content",
    platforms: ["Instagram", "LinkedIn", "Facebook"],
    new: true,
  },
  {
    id: 14,
    title: "Email Sequence Builder",
    description: "Design multi-touch email sequences that convert",
    icon: <Mail className="h-5 w-5" />,
    category: "Email",
    platforms: ["Email"],
    new: true,
  },
  {
    id: 15,
    title: "Executive Summary",
    description: "Condense lengthy reports into executive-friendly formats",
    icon: <Briefcase className="h-5 w-5" />,
    category: "Business",
    platforms: ["PDF", "Email", "Presentation"],
    new: true,
  },
  {
    id: 16,
    title: "Community Update",
    description: "Keep your community engaged with consistent updates",
    icon: <Users className="h-5 w-5" />,
    category: "Community Management",
    platforms: ["Discord", "Slack", "Email"],
    new: true,
  },
  {
    id: 17,
    title: "Trend Analysis Report",
    description: "Analyze industry trends and position your brand accordingly",
    icon: <TrendingUp className="h-5 w-5" />,
    category: "Market Research",
    platforms: ["Blog", "LinkedIn", "Newsletter"],
    new: true,
  },
  {
    id: 18,
    title: "Award Submission",
    description: "Craft compelling award entries that highlight achievements",
    icon: <Award className="h-5 w-5" />,
    category: "PR & Recognition",
    platforms: ["Document", "Website"],
    new: true,
  },
  {
    id: 19,
    title: "Workshop Framework",
    description: "Structure engaging workshops and training sessions",
    icon: <Lightbulb className="h-5 w-5" />,
    category: "Education",
    platforms: ["Presentation", "Workbook", "Video"],
    new: true,
  },
  {
    id: 20,
    title: "Audience Persona Builder",
    description: "Create detailed audience personas for targeted content",
    icon: <Target className="h-5 w-5" />,
    category: "Strategy",
    platforms: ["Document", "Presentation"],
    new: true,
  },
  {
    id: 21,
    title: "Product Comparison",
    description: "Highlight your product's advantages against competitors",
    icon: <ShoppingBag className="h-5 w-5" />,
    category: "Sales",
    platforms: ["Website", "Email", "Social Media"],
    new: true,
  },
  {
    id: 22,
    title: "Event Promotion Bundle",
    description: "Promote your event across all channels with consistent messaging",
    icon: <Calendar className="h-5 w-5" />,
    category: "Event Marketing",
    platforms: ["All Platforms"],
    new: true,
  },
  {
    id: 23,
    title: "AI Prompt Engineering Guide",
    description: "Create effective prompts for AI content generation",
    icon: <Sparkles className="h-5 w-5" />,
    category: "AI Content",
    platforms: ["Document", "Blog"],
    new: true,
    popular: true,
  },

  // Additional templates for each category
  // Content Repurposing
  {
    id: 24,
    title: "Webinar to Multi-Format Content",
    description: "Transform webinar recordings into blog posts, social clips, and more",
    icon: <Tv className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["Blog", "Social Media", "Email"],
    new: true,
  },
  {
    id: 25,
    title: "Whitepaper to Social Series",
    description: "Break down technical whitepapers into digestible social media content",
    icon: <FileText className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["LinkedIn", "Twitter", "Instagram"],
  },
  {
    id: 26,
    title: "Podcast to Newsletter",
    description: "Convert podcast episodes into engaging email newsletters",
    icon: <Mic className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["Email"],
  },

  // Marketing
  {
    id: 27,
    title: "Customer Testimonial Campaign",
    description: "Showcase real customer stories across multiple channels",
    icon: <MessageSquare className="h-5 w-5" />,
    category: "Marketing",
    platforms: ["Website", "Social Media", "Email"],
  },
  {
    id: 28,
    title: "Limited-Time Offer",
    description: "Create urgency with time-sensitive promotional content",
    icon: <Clock className="h-5 w-5" />,
    category: "Marketing",
    platforms: ["All Platforms"],
  },
  {
    id: 29,
    title: "Product Feature Spotlight",
    description: "Highlight specific product features with compelling content",
    icon: <Zap className="h-5 w-5" />,
    category: "Marketing",
    platforms: ["Website", "Social Media", "Email"],
  },

  // Creator Content
  {
    id: 30,
    title: "Behind-the-Scenes Content",
    description: "Share authentic behind-the-scenes content that builds connection",
    icon: <Layers className="h-5 w-5" />,
    category: "Creator Content",
    platforms: ["Instagram", "TikTok", "YouTube"],
  },
  {
    id: 31,
    title: "Tutorial Series Framework",
    description: "Create step-by-step tutorials that showcase your expertise",
    icon: <Lightbulb className="h-5 w-5" />,
    category: "Creator Content",
    platforms: ["YouTube", "TikTok", "Instagram"],
  },
  {
    id: 32,
    title: "Creator Challenge Template",
    description: "Design viral challenges that encourage audience participation",
    icon: <Star className="h-5 w-5" />,
    category: "Creator Content",
    platforms: ["TikTok", "Instagram", "YouTube"],
    popular: true,
  },

  // Business
  {
    id: 33,
    title: "Quarterly Business Review",
    description: "Structured template for sharing business performance and insights",
    icon: <LineChart className="h-5 w-5" />,
    category: "Business",
    platforms: ["Presentation", "PDF", "Email"],
  },
  {
    id: 34,
    title: "Investor Update",
    description: "Professional template for communicating with investors",
    icon: <TrendingUp className="h-5 w-5" />,
    category: "Business",
    platforms: ["Email", "PDF", "Presentation"],
  },
  {
    id: 35,
    title: "Team Performance Dashboard",
    description: "Visual representation of team metrics and achievements",
    icon: <BarChart className="h-5 w-5" />,
    category: "Business",
    platforms: ["Dashboard", "Presentation"],
  },

  // Email
  {
    id: 36,
    title: "Welcome Email Series",
    description: "Onboard new subscribers with a strategic email sequence",
    icon: <Mail className="h-5 w-5" />,
    category: "Email",
    platforms: ["Email"],
    popular: true,
  },
  {
    id: 37,
    title: "Abandoned Cart Recovery",
    description: "Win back potential customers who didn't complete their purchase",
    icon: <ShoppingBag className="h-5 w-5" />,
    category: "Email",
    platforms: ["Email"],
  },
  {
    id: 38,
    title: "Product Recommendation Email",
    description: "Personalized product suggestions based on customer behavior",
    icon: <Gift className="h-5 w-5" />,
    category: "Email",
    platforms: ["Email"],
  },

  // Visual Content
  {
    id: 39,
    title: "Brand Style Guide",
    description: "Comprehensive visual guidelines for consistent brand presentation",
    icon: <Palette className="h-5 w-5" />,
    category: "Visual Content",
    platforms: ["PDF", "Website"],
  },
  {
    id: 40,
    title: "Data Visualization Templates",
    description: "Turn complex data into compelling visual stories",
    icon: <PieChart className="h-5 w-5" />,
    category: "Visual Content",
    platforms: ["Presentation", "Social Media", "Website"],
  },
  {
    id: 41,
    title: "Social Media Graphics Pack",
    description: "Coordinated visual assets for cohesive social media presence",
    icon: <ImageIcon className="h-5 w-5" />,
    category: "Visual Content",
    platforms: ["All Social Platforms"],
  },

  // Strategy
  {
    id: 42,
    title: "Content Gap Analysis",
    description: "Identify opportunities in your content strategy",
    icon: <Target className="h-5 w-5" />,
    category: "Strategy",
    platforms: ["Document", "Presentation"],
  },
  {
    id: 43,
    title: "Competitive Content Audit",
    description: "Analyze competitor content to inform your strategy",
    icon: <LineChart className="h-5 w-5" />,
    category: "Strategy",
    platforms: ["Document", "Presentation"],
  },
  {
    id: 44,
    title: "Annual Content Calendar",
    description: "Plan your content strategy for the entire year",
    icon: <Calendar className="h-5 w-5" />,
    category: "Strategy",
    platforms: ["Document", "Spreadsheet"],
  },

  // AI Content
  {
    id: 45,
    title: "AI Content Optimization",
    description: "Enhance AI-generated content for better performance",
    icon: <Sparkles className="h-5 w-5" />,
    category: "AI Content",
    platforms: ["Document", "Blog"],
  },
  {
    id: 46,
    title: "AI Research Assistant",
    description: "Framework for using AI to conduct content research",
    icon: <Search className="h-5 w-5" />,
    category: "AI Content",
    platforms: ["Document"],
  },
  {
    id: 47,
    title: "AI Content Workflow",
    description: "Streamline content creation with AI integration",
    icon: <Layers className="h-5 w-5" />,
    category: "AI Content",
    platforms: ["Document", "Workflow"],
    new: true,
  },

  // PR & Communications
  {
    id: 48,
    title: "Media Kit Template",
    description: "Professional media kit for press and partnership opportunities",
    icon: <Briefcase className="h-5 w-5" />,
    category: "PR & Communications",
    platforms: ["PDF", "Website"],
  },
  {
    id: 49,
    title: "Press Release Format",
    description: "Standard format for announcing news to media outlets",
    icon: <Newspaper className="h-5 w-5" />,
    category: "PR & Communications",
    platforms: ["Document", "Email", "Website"],
  },
  {
    id: 50,
    title: "Brand Messaging Framework",
    description: "Consistent messaging guidelines for all communications",
    icon: <MessageSquare className="h-5 w-5" />,
    category: "PR & Communications",
    platforms: ["Document", "Presentation"],
  },

  // NEW CATEGORIES AND TEMPLATES

  // Educational Content
  {
    id: 51,
    title: "Online Course Structure",
    description: "Framework for creating engaging online courses with modules and lessons",
    icon: <Graduation className="h-5 w-5" />,
    category: "Educational Content",
    platforms: ["LMS", "Website", "PDF"],
    new: true,
  },
  {
    id: 52,
    title: "Educational Video Script",
    description: "Script template for clear, engaging educational videos",
    icon: <Video className="h-5 w-5" />,
    category: "Educational Content",
    platforms: ["YouTube", "Vimeo", "Course Platform"],
  },
  {
    id: 53,
    title: "Interactive Workbook",
    description: "Create workbooks with exercises to reinforce learning",
    icon: <BookOpen className="h-5 w-5" />,
    category: "Educational Content",
    platforms: ["PDF", "Digital Workbook"],
  },
  {
    id: 54,
    title: "Microlearning Series",
    description: "Bite-sized learning content for better retention",
    icon: <Layers className="h-5 w-5" />,
    category: "Educational Content",
    platforms: ["Email", "Social Media", "Mobile App"],
  },

  // Product Marketing
  {
    id: 55,
    title: "Product Demo Script",
    description: "Showcase your product's features and benefits effectively",
    icon: <Presentation className="h-5 w-5" />,
    category: "Product Marketing",
    platforms: ["Video", "Webinar", "Sales Call"],
    popular: true,
  },
  {
    id: 56,
    title: "Feature Announcement",
    description: "Highlight new features to existing customers",
    icon: <Rocket className="h-5 w-5" />,
    category: "Product Marketing",
    platforms: ["Email", "Product", "Blog"],
  },
  {
    id: 57,
    title: "Product Comparison Matrix",
    description: "Side-by-side comparison with competitors' offerings",
    icon: <Clipboard className="h-5 w-5" />,
    category: "Product Marketing",
    platforms: ["Website", "Sales Materials", "Email"],
  },
  {
    id: 58,
    title: "Product Benefits Guide",
    description: "Translate features into customer benefits",
    icon: <CheckCircle className="h-5 w-5" />,
    category: "Product Marketing",
    platforms: ["Website", "Sales Materials", "Email"],
  },

  // Social Media Campaigns
  {
    id: 59,
    title: "Hashtag Campaign",
    description: "Create viral hashtag campaigns that drive engagement",
    icon: <Share2 className="h-5 w-5" />,
    category: "Social Media Campaigns",
    platforms: ["Instagram", "Twitter", "TikTok"],
    new: true,
  },
  {
    id: 60,
    title: "Social Media Contest",
    description: "Run engaging contests to increase followers and engagement",
    icon: <Trophy className="h-5 w-5" />,
    category: "Social Media Campaigns",
    platforms: ["All Social Platforms"],
  },
  {
    id: 61,
    title: "Social Media Takeover",
    description: "Framework for guest takeovers of your social accounts",
    icon: <Users className="h-5 w-5" />,
    category: "Social Media Campaigns",
    platforms: ["Instagram", "TikTok", "Twitter"],
  },
  {
    id: 62,
    title: "Social Media Ad Campaign",
    description: "Structured approach to paid social media campaigns",
    icon: <Target className="h-5 w-5" />,
    category: "Social Media Campaigns",
    platforms: ["Facebook", "Instagram", "LinkedIn"],
  },

  // Customer Success
  {
    id: 63,
    title: "Customer Onboarding Sequence",
    description: "Guide new customers to success with your product",
    icon: <HeartHandshake className="h-5 w-5" />,
    category: "Customer Success",
    platforms: ["Email", "Product", "Video"],
    popular: true,
  },
  {
    id: 64,
    title: "Customer Feedback Survey",
    description: "Gather actionable feedback from your customers",
    icon: <ThumbsUp className="h-5 w-5" />,
    category: "Customer Success",
    platforms: ["Email", "Website", "Product"],
  },
  {
    id: 65,
    title: "Customer Health Dashboard",
    description: "Monitor customer satisfaction and engagement metrics",
    icon: <Gauge className="h-5 w-5" />,
    category: "Customer Success",
    platforms: ["Dashboard", "Presentation"],
  },
  {
    id: 66,
    title: "Customer Success Story",
    description: "Showcase how customers achieve success with your product",
    icon: <Star className="h-5 w-5" />,
    category: "Customer Success",
    platforms: ["Website", "Email", "Sales Materials"],
  },

  // Lead Generation
  {
    id: 67,
    title: "Lead Magnet Framework",
    description: "Create valuable content that generates qualified leads",
    icon: <UserPlus className="h-5 w-5" />,
    category: "Lead Generation",
    platforms: ["Website", "Landing Page", "Email"],
    new: true,
  },
  {
    id: 68,
    title: "Webinar Lead Generation",
    description: "Use webinars to attract and qualify potential customers",
    icon: <Video className="h-5 w-5" />,
    category: "Lead Generation",
    platforms: ["Webinar", "Email", "Landing Page"],
  },
  {
    id: 69,
    title: "Quiz Lead Generation",
    description: "Interactive quizzes that capture leads while providing value",
    icon: <Clipboard className="h-5 w-5" />,
    category: "Lead Generation",
    platforms: ["Website", "Social Media"],
  },
  {
    id: 70,
    title: "Lead Nurturing Sequence",
    description: "Convert leads into customers with targeted content",
    icon: <Mail className="h-5 w-5" />,
    category: "Lead Generation",
    platforms: ["Email"],
  },

  // Event Marketing
  {
    id: 71,
    title: "Virtual Event Promotion",
    description: "Comprehensive promotion plan for online events",
    icon: <Calendar className="h-5 w-5" />,
    category: "Event Marketing",
    platforms: ["All Platforms"],
    new: true,
  },
  {
    id: 72,
    title: "Conference Speaking Proposal",
    description: "Craft compelling speaking proposals for industry events",
    icon: <Mic className="h-5 w-5" />,
    category: "Event Marketing",
    platforms: ["Document", "Email"],
  },
  {
    id: 73,
    title: "Event Follow-up Sequence",
    description: "Nurture relationships after events to maximize ROI",
    icon: <Mail className="h-5 w-5" />,
    category: "Event Marketing",
    platforms: ["Email", "LinkedIn"],
  },
  {
    id: 74,
    title: "Event Sponsorship Deck",
    description: "Attract sponsors with a compelling sponsorship proposal",
    icon: <Presentation className="h-5 w-5" />,
    category: "Event Marketing",
    platforms: ["Presentation", "PDF"],
  },

  // Podcast Content
  {
    id: 75,
    title: "Podcast Show Format",
    description: "Structure your podcast episodes for maximum engagement",
    icon: <Mic className="h-5 w-5" />,
    category: "Podcast Content",
    platforms: ["Audio", "Video"],
    popular: true,
  },
  {
    id: 76,
    title: "Podcast Guest Outreach",
    description: "Templates for inviting guests to your podcast",
    icon: <Mail className="h-5 w-5" />,
    category: "Podcast Content",
    platforms: ["Email", "LinkedIn"],
  },
  {
    id: 77,
    title: "Podcast Show Notes",
    description: "Structured format for comprehensive show notes",
    icon: <FileText className="h-5 w-5" />,
    category: "Podcast Content",
    platforms: ["Website", "Blog", "Podcast Platforms"],
  },
  {
    id: 78,
    title: "Podcast Audiogram",
    description: "Create engaging audio snippets with visual elements",
    icon: <Headphones className="h-5 w-5" />,
    category: "Podcast Content",
    platforms: ["Social Media", "Website"],
  },

  // Blog Content
  {
    id: 79,
    title: "SEO Blog Post Template",
    description: "Optimize your blog content for search engines",
    icon: <BookOpen className="h-5 w-5" />,
    category: "Blog Content",
    platforms: ["Blog", "Website"],
    new: true,
  },
  {
    id: 80,
    title: "Listicle Format",
    description: "Create engaging list-based articles that drive traffic",
    icon: <Clipboard className="h-5 w-5" />,
    category: "Blog Content",
    platforms: ["Blog", "Website"],
  },
  {
    id: 81,
    title: "How-To Guide Template",
    description: "Step-by-step instructional content that showcases expertise",
    icon: <Lightbulb className="h-5 w-5" />,
    category: "Blog Content",
    platforms: ["Blog", "Website"],
  },
  {
    id: 82,
    title: "Expert Roundup Post",
    description: "Compile insights from multiple industry experts",
    icon: <Users className="h-5 w-5" />,
    category: "Blog Content",
    platforms: ["Blog", "Website"],
  },

  // International Marketing
  {
    id: 83,
    title: "Localization Guide",
    description: "Adapt your content for different markets and cultures",
    icon: <Globe className="h-5 w-5" />,
    category: "International Marketing",
    platforms: ["Document", "Website", "Marketing Materials"],
    new: true,
  },
  {
    id: 84,
    title: "Global Campaign Framework",
    description: "Create campaigns that resonate across multiple regions",
    icon: <Target className="h-5 w-5" />,
    category: "International Marketing",
    platforms: ["All Platforms"],
  },
  {
    id: 85,
    title: "International SEO Strategy",
    description: "Optimize content for search engines in different countries",
    icon: <Search className="h-5 w-5" />,
    category: "International Marketing",
    platforms: ["Website", "Blog"],
  },
  {
    id: 86,
    title: "Cultural Adaptation Guide",
    description: "Ensure your content respects cultural nuances and preferences",
    icon: <Puzzle className="h-5 w-5" />,
    category: "International Marketing",
    platforms: ["Document", "Marketing Materials"],
  },

  // Community Engagement
  {
    id: 87,
    title: "Community Discussion Prompts",
    description: "Spark engaging conversations in your online community",
    icon: <MessageCircle className="h-5 w-5" />,
    category: "Community Engagement",
    platforms: ["Discord", "Slack", "Facebook Groups"],
    popular: true,
  },
  {
    id: 88,
    title: "Community Welcome Sequence",
    description: "Onboard new community members effectively",
    icon: <Users className="h-5 w-5" />,
    category: "Community Engagement",
    platforms: ["Email", "Discord", "Slack"],
  },
  {
    id: 89,
    title: "Community Event Planning",
    description: "Organize virtual and in-person community gatherings",
    icon: <Calendar className="h-5 w-5" />,
    category: "Community Engagement",
    platforms: ["Document", "Email", "Community Platform"],
  },
  {
    id: 90,
    title: "User-Generated Content Campaign",
    description: "Encourage and showcase content created by your community",
    icon: <Star className="h-5 w-5" />,
    category: "Community Engagement",
    platforms: ["Social Media", "Website", "Community Platform"],
  },

  // Analytics & Reporting
  {
    id: 91,
    title: "Content Performance Dashboard",
    description: "Track and visualize the performance of your content",
    icon: <BarChart className="h-5 w-5" />,
    category: "Analytics & Reporting",
    platforms: ["Dashboard", "Presentation"],
    new: true,
  },
  {
    id: 92,
    title: "Marketing ROI Report",
    description: "Demonstrate the return on investment of your marketing efforts",
    icon: <Coins className="h-5 w-5" />,
    category: "Analytics & Reporting",
    platforms: ["Presentation", "PDF", "Dashboard"],
  },
  {
    id: 93,
    title: "A/B Test Results Analysis",
    description: "Structured approach to analyzing and presenting test results",
    icon: <Percent className="h-5 w-5" />,
    category: "Analytics & Reporting",
    platforms: ["Document", "Presentation"],
  },
  {
    id: 94,
    title: "Competitive Analysis Report",
    description: "Track and compare your performance against competitors",
    icon: <LineChart className="h-5 w-5" />,
    category: "Analytics & Reporting",
    platforms: ["Presentation", "PDF", "Dashboard"],
  },
  // Add the following templates to the templates array

  // ADD THESE NEW TEMPLATES AT THE END OF THE EXISTING TEMPLATES ARRAY (after template id: 94)

  // Content Repurposing (CR) Templates
  {
    id: 95,
    title: "Podcast to Social Media Clips",
    description: "Transform long podcast episodes into shareable social media clips",
    icon: <Mic className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["Instagram", "TikTok", "Twitter", "LinkedIn"],
    new: true,
  },
  {
    id: 96,
    title: "Blog to Email Newsletter",
    description: "Convert blog posts into engaging email newsletters",
    icon: <Mail className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["Email"],
    new: true,
  },
  {
    id: 97,
    title: "Whitepaper to Infographic",
    description: "Transform complex whitepapers into easy-to-understand infographics",
    icon: <FileText className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["Social Media", "Website", "Email"],
    new: true,
  },
  {
    id: 98,
    title: "Long-form to Twitter Thread",
    description: "Convert detailed content into engaging Twitter thread narratives",
    icon: <MessageCircle className="h-5 w-5" />,
    category: "Content Repurposing",
    platforms: ["Twitter"],
    new: true,
  },

  // Creator Content (CC) Templates
  {
    id: 99,
    title: "Livestream Repurposing Plan",
    description: "Strategy to turn livestreams into multiple content formats",
    icon: <Video className="h-5 w-5" />,
    category: "Creator Content",
    platforms: ["YouTube", "TikTok", "Instagram", "Podcast"],
    new: true,
  },
  {
    id: 100,
    title: "Influencer Collaboration Script",
    description: "Structured template for successful creator collaborations",
    icon: <Users className="h-5 w-5" />,
    category: "Creator Content",
    platforms: ["All Platforms"],
    new: true,
  },
  {
    id: 101,
    title: "Content Creator Monetization Plan",
    description: "Strategic framework to diversify creator revenue streams",
    icon: <Coins className="h-5 w-5" />,
    category: "Creator Content",
    platforms: ["Document", "Spreadsheet"],
    new: true,
  },
  {
    id: 102,
    title: "Creator Brand Pitch Deck",
    description: "Professional template for pitching to brands for sponsorships",
    icon: <Presentation className="h-5 w-5" />,
    category: "Creator Content",
    platforms: ["PDF", "Presentation"],
    new: true,
  },

  // Visual Content (VC) Templates
  {
    id: 103,
    title: "Social Media Carousel Design",
    description: "Create visually consistent and engaging carousel posts",
    icon: <ImageIcon className="h-5 w-5" />,
    category: "Visual Content",
    platforms: ["Instagram", "LinkedIn", "Facebook"],
    new: true,
  },
  {
    id: 104,
    title: "Video Thumbnail Template",
    description: "High-converting thumbnail design system for video content",
    icon: <Tv className="h-5 w-5" />,
    category: "Visual Content",
    platforms: ["YouTube", "Vimeo"],
    new: true,
  },
  {
    id: 105,
    title: "Brand Visual Identity System",
    description: "Comprehensive visual identity guidelines for consistent branding",
    icon: <Palette className="h-5 w-5" />,
    category: "Visual Content",
    platforms: ["PDF", "Design System"],
    new: true,
  },
  {
    id: 106,
    title: "Motion Graphics Package",
    description: "Animated visual elements to enhance video content",
    icon: <Zap className="h-5 w-5" />,
    category: "Visual Content",
    platforms: ["Video", "Social Media"],
    new: true,
  },

  // AI Content (AC) Templates
  {
    id: 107,
    title: "AI Content Enhancement Workflow",
    description: "Process to refine and improve AI-generated content",
    icon: <Sparkles className="h-5 w-5" />,
    category: "AI Content",
    platforms: ["Document", "Blog", "Social Media"],
    new: true,
  },
  {
    id: 108,
    title: "AI + Human Hybrid Content",
    description: "Framework for combining AI efficiency with human creativity",
    icon: <Lightbulb className="h-5 w-5" />,
    category: "AI Content",
    platforms: ["All Platforms"],
    new: true,
  },
  {
    id: 109,
    title: "AI Image Prompt Engineering",
    description: "Guidelines for creating effective prompts for AI image generation",
    icon: <ImageIcon className="h-5 w-5" />,
    category: "AI Content",
    platforms: ["Document", "Design"],
    new: true,
  },
  {
    id: 110,
    title: "AI Content Ethical Guidelines",
    description: "Best practices for ethical AI content creation and disclosure",
    icon: <ShieldCheck className="h-5 w-5" />,
    category: "AI Content",
    platforms: ["Document", "Website", "Blog"],
    new: true,
  },

  // Educational Content (EC) Templates
  {
    id: 111,
    title: "Digital Workbook Template",
    description: "Interactive workbook with exercises and assessments for online courses",
    icon: <FileText className="h-5 w-5" />,
    category: "Educational Content",
    platforms: ["PDF", "Digital"],
    new: true,
  },
  {
    id: 112,
    title: "Learning Module Structure",
    description: "Framework for creating structured educational modules",
    icon: <Graduation className="h-5 w-5" />,
    category: "Educational Content",
    platforms: ["LMS", "Website", "PDF"],
    new: true,
  },
  {
    id: 113,
    title: "Explainer Video Script",
    description: "Template for clear, concise educational explainer videos",
    icon: <Video className="h-5 w-5" />,
    category: "Educational Content",
    platforms: ["YouTube", "Website", "Course Platform"],
    new: true,
  },
  {
    id: 114,
    title: "Educational Resources Guide",
    description: "Curated collection of learning resources on a specific topic",
    icon: <BookOpen className="h-5 w-5" />,
    category: "Educational Content",
    platforms: ["PDF", "Website", "Email"],
    new: true,
  },
]

interface TemplatesGridProps {
  activeCategory: string
  searchQuery: string
  activePlatform: string
  onTemplateClick: (id: number) => void
  userFavorites?: number[]
  onToggleFavorite?: (id: number) => void
}

export function TemplatesGrid({
  activeCategory,
  searchQuery,
  activePlatform,
  onTemplateClick,
  userFavorites = [],
  onToggleFavorite,
}: TemplatesGridProps) {
  const [filteredTemplates, setFilteredTemplates] = useState(templates)
  const { user } = useAuth()

  useEffect(() => {
    // Filter templates based on category, search query, and platform
    const filtered = templates.filter((template) => {
      // Filter by category
      const categoryMatch = activeCategory === "all" || template.category.toLowerCase() === activeCategory.toLowerCase()

      // Filter by search query
      const searchMatch =
        searchQuery === "" ||
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.category.toLowerCase().includes(searchQuery.toLowerCase())

      // Filter by platform
      const platformMatch =
        activePlatform === "All Platforms" ||
        template.platforms.includes(activePlatform) ||
        template.platforms.includes("All Platforms")

      // Filter by favorites if viewing favorites
      const favoritesMatch = !userFavorites.length || userFavorites.includes(template.id)

      return categoryMatch && searchMatch && platformMatch && favoritesMatch
    })

    setFilteredTemplates(filtered)
  }, [activeCategory, searchQuery, activePlatform, userFavorites])

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredTemplates.map((template) => (
        <motion.div
          key={template.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-xl border border-purple-800/20 bg-gray-900/80 shadow-lg shadow-purple-900/5 transition-all duration-300 hover:border-purple-700/30 hover:shadow-xl hover:shadow-purple-900/10"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />

          {/* Favorite button */}
          {user && onToggleFavorite && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-gray-900/50 p-1.5 text-gray-400 backdrop-blur-sm transition-all hover:bg-gray-800 hover:text-white"
              onClick={(e) => {
                e.stopPropagation()
                onToggleFavorite(template.id)
              }}
            >
              <HeartIcon
                className={`h-full w-full ${
                  userFavorites.includes(template.id) ? "fill-purple-400 text-purple-400" : ""
                }`}
              />
              <span className="sr-only">
                {userFavorites.includes(template.id) ? "Remove from favorites" : "Add to favorites"}
              </span>
            </Button>
          )}

          <div className="flex h-full cursor-pointer flex-col p-5" onClick={() => onTemplateClick(template.id)}>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-900/30 text-purple-400">
                {template.icon}
              </div>
              <div className="flex space-x-1">
                {template.popular && (
                  <span className="rounded-full bg-amber-900/30 px-2 py-0.5 text-xs font-medium text-amber-400">
                    Popular
                  </span>
                )}
                {template.new && (
                  <span className="rounded-full bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-400">
                    New
                  </span>
                )}
              </div>
            </div>
            <h3 className="mb-1 text-lg font-semibold text-white">{template.title}</h3>
            <p className="mb-4 flex-1 text-sm text-gray-400">{template.description}</p>
            <div className="flex flex-wrap gap-1">
              {template.platforms.map((platform) => (
                <span key={platform} className="rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-400">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
