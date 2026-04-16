import type { SiteIconKey } from "@/lib/site-icons";

export const siteConfig = {
  name: "Illuminknob",
  waitlistUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeNNJqI6UXUfJU_4qUftacGQY5gYudjhgtV37H_UTsEEDuAYg/viewform?usp=publish-editor",
  partnershipFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSen9865skRPEm9P-MB-J0D6K8rmgl4zLT1xazc6fXlE9FGKXg/viewform?usp=publish-editor",
  shortDescription:
    "A modern illuminated doorknob concept designed to make doors easier to locate in low-light environments.",
  heroHeadline: "A clearer way to find the door at night.",
  heroDescription:
    "Illuminknob is a doorknob concept with illumination around the base and rim, created to improve low-light visibility in homes, guest rooms, apartments, and accessibility-minded spaces.",
  missionStatement:
    "Illuminknob exists to make low-light navigation feel simpler, more comfortable, and more intuitive through practical hardware design.",
  supportEmail: "illuminknob@gmail.com",
  partnerEmail: "illuminknob@gmail.com",
};

export const primaryNavItems = [
  { label: "How It Works", href: "/#solution" },
  { label: "Benefits", href: "/#benefits" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const teamLinkedInLinks = [
  {
    name: "Dominic Saffioti",
    href: "https://www.linkedin.com/in/dominic-saffioti-277a452b2/",
  },
  {
    name: "Joseph Ingegneri",
    href: "https://www.linkedin.com/in/joseph-ingegneri/",
  },
  {
    name: "Kyle Harvin",
    href: "https://www.linkedin.com/in/kyle-i-harvin-5a93b2360/",
  },
] as const;

export const problemPoints: Array<{
  title: string;
  description: string;
  icon: SiteIconKey;
}> = [
  {
    title: "Doors can disappear into dim surroundings",
    description:
      "In dark bedrooms, hallways, and guest spaces, a familiar knob can be harder to spot than expected.",
    icon: "moon",
  },
  {
    title: "Finding the handle takes extra effort",
    description:
      "When visibility drops, people often slow down, reach twice, or feel for the right hardware before they can move on.",
    icon: "eye",
  },
  {
    title: "Small visibility issues can affect comfort",
    description:
      "A more visible handle can make nighttime routines feel smoother and more reassuring without changing how the door works.",
    icon: "door",
  },
];

export const solutionSteps: Array<{
  title: string;
  description: string;
  icon: SiteIconKey;
}> = [
  {
    title: "Illuminated base",
    description:
      "A gentle glow around the base helps define where the door hardware begins against darker surfaces.",
    icon: "lightbulb",
  },
  {
    title: "Visible outer rim",
    description:
      "A lit rim helps the knob read more clearly at a glance, even when surrounding light is limited.",
    icon: "sparkles",
  },
  {
    title: "Familiar form, clearer function",
    description:
      "The concept stays grounded in a recognizable knob shape so the benefit feels intuitive rather than complicated.",
    icon: "hand",
  },
];

export const benefitCards: Array<{
  title: string;
  description: string;
  icon: SiteIconKey;
}> = [
  {
    title: "Easier to locate in the dark",
    description:
      "The illuminated profile helps people identify the handle faster in low-light rooms and corridors.",
    icon: "eye",
  },
  {
    title: "Supports smoother nighttime movement",
    description:
      "A clearer point of reference can reduce hesitation when entering or exiting a room after dark.",
    icon: "shield",
  },
  {
    title: "Helpful in low-visibility environments",
    description:
      "Designed with homes, guest rooms, and shared spaces in mind where visibility conditions can vary.",
    icon: "moon",
  },
  {
    title: "Modern, understated appearance",
    description:
      "The concept is intended to feel premium and realistic, not bulky or overly futuristic.",
    icon: "sparkles",
  },
  {
    title: "Relevant across residential and hospitality spaces",
    description:
      "Useful for homeowners, apartments, hotels, and accessibility-minded renovation plans.",
    icon: "building",
  },
  {
    title: "Practical accessibility-minded design",
    description:
      "Built around convenience, visibility, and everyday ease rather than hype or overstatement.",
    icon: "heart",
  },
];

export const useCases: Array<{
  title: string;
  description: string;
  icon: SiteIconKey;
}> = [
  {
    title: "At home",
    description:
      "Helps family members find bedroom, bathroom, or hallway doors more easily during nighttime routines.",
    icon: "home",
  },
  {
    title: "For older adults",
    description:
      "Supports clearer visual wayfinding in spaces where confidence and ease of movement matter.",
    icon: "users",
  },
  {
    title: "In hallways and guest rooms",
    description:
      "Useful where low ambient lighting is common and a visible handle improves the guest experience.",
    icon: "hotel",
  },
  {
    title: "For property and hospitality teams",
    description:
      "Offers a practical conversation starter for spaces that value usability, convenience, and thoughtful upgrades.",
    icon: "briefcase",
  },
];

export const productPreviewBullets = [
  "Low-light visibility enhancement",
  "Minimalist knob design",
  "Easy integration concept",
  "Residential and hospitality-friendly styling",
];

export const brandPrinciples: Array<{
  title: string;
  description: string;
  icon: SiteIconKey;
}> = [
  {
    title: "Practical innovation",
    description:
      "We focus on improving a familiar object in a way people can understand immediately.",
    icon: "wrench",
  },
  {
    title: "Accessibility-minded thinking",
    description:
      "The intent is to support clearer visibility without making the product feel clinical or intimidating.",
    icon: "heart",
  },
  {
    title: "Design that fits real spaces",
    description:
      "Illuminknob is imagined for everyday homes and professional environments, not as a novelty gadget.",
    icon: "building",
  },
];

export const faqs = [
  {
    question: "What is Illuminknob?",
    answer:
      "Illuminknob is a concept for a doorknob with built-in illumination around the base and rim, designed to make door hardware easier to locate in low-light settings.",
  },
  {
    question: "Is the product available now?",
    answer:
      "This website presents launch-ready marketing copy and a product concept preview. Availability, final product timing, and commercial details can be shared through the waitlist or contact form as development progresses.",
  },
  {
    question: "Are the technical specifications final?",
    answer:
      "No. Any spec-style product details shown on this site are clearly labeled as placeholder or demo copy until engineering, manufacturing, and testing details are finalized.",
  },
  {
    question: "Who is the product designed for?",
    answer:
      "The concept is intended for homeowners, older adults and their families, people who benefit from better nighttime visibility, and commercial buyers such as hotels, apartments, builders, and accessibility-minded partners.",
  },
  {
    question: "Can distributors or accessibility partners get involved?",
    answer:
      "Yes. The contact page directs interested partners to a dedicated inquiry form and direct email contact for distribution, hospitality, and accessibility-related conversations.",
  },
];

export const aboutStoryHighlights: Array<{
  title: string;
  description: string;
}> = [
  {
    title: "Why the product exists",
    description:
      "Illuminknob started with a simple observation: in low light, finding the door hardware itself can become an unnecessary point of friction.",
  },
  {
    title: "What makes the idea different",
    description:
      "Instead of changing door behavior, the concept improves visual clarity around a familiar interaction so the product feels intuitive from the start.",
  },
  {
    title: "How the brand thinks",
    description:
      "We believe accessibility-minded products should feel practical, polished, and well-suited to modern residential and hospitality spaces.",
  },
];

export const contactReasons: Array<{
  title: string;
  description: string;
  icon: SiteIconKey;
}> = [
  {
    title: "Hospitality and guest spaces",
    description: "Use the form if you are evaluating Illuminknob for guest rooms, hallways, or broader hospitality rollout conversations.",
    icon: "message",
  },
  {
    title: "Distribution and partnerships",
    description: "Start reseller, builder, pilot program, or channel partnership discussions through the dedicated inquiry form.",
    icon: "briefcase",
  },
  {
    title: "Accessibility-related inquiries",
    description: "Share interest in usability, visibility, and accessibility-minded placement for residential or commercial environments.",
    icon: "heart",
  },
];
