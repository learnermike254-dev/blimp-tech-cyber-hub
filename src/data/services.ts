export type SubService = { name: string; price: string };

export type ServiceCategory = {
  slug: string;
  title: string;
  icon: string; // lucide icon name
  summary: string;
  description: string;
  items: SubService[];
};

export const services: ServiceCategory[] = [
  {
    slug: "secretarial-services",
    title: "Secretarial Services",
    icon: "Printer",
    summary: "Typing, printing, CVs and everything paperwork — done fast and neat.",
    description:
      "Walk in with a rough draft or nothing at all. We type, format, print and package your documents to a professional standard while you wait.",
    items: [
      { name: "Typing & document formatting (per page)", price: "KES 30" },
      { name: "Printing — black & white (per page)", price: "KES 10" },
      { name: "Printing — colour (per page)", price: "KES 30" },
      { name: "Scanning (per page)", price: "KES 20" },
      { name: "Photocopying (per page)", price: "KES 5" },
      { name: "Laminating (A4)", price: "KES 100" },
      { name: "Spiral binding", price: "KES 150" },
      { name: "CV / resume writing & redesign", price: "KES 700" },
      { name: "Cover & application letter writing", price: "KES 300" },
    ],
  },
  {
    slug: "government-services",
    title: "Government Services",
    icon: "Landmark",
    summary: "eCitizen, KRA, NTSA, HELB, SHIF and more — handled correctly the first time.",
    description:
      "Government portals are slow and unforgiving. We know the exact steps, the right documents and the common rejection traps.",
    items: [
      { name: "KRA PIN registration", price: "KES 300" },
      { name: "KRA returns filing (nil / employed)", price: "KES 300 – 700" },
      { name: "NTSA — driving licence renewal", price: "KES 400" },
      { name: "NTSA — TLB & vehicle transfer", price: "KES 700" },
      { name: "HELB application & compliance certificate", price: "KES 500" },
      { name: "NHIF / SHIF registration", price: "KES 300" },
      { name: "Passport & ID application assistance", price: "KES 500" },
      { name: "Good Conduct (DCI) application", price: "KES 500" },
      { name: "Birth & marriage certificate applications", price: "KES 500" },
    ],
  },
  {
    slug: "non-government-services",
    title: "Non-Government Services",
    icon: "Globe",
    summary: "Job portals, emails, school and scholarship applications — filled the right way.",
    description:
      "Online applications fail on small details. We sit with you, fill each form accurately and keep proof of every submission.",
    items: [
      { name: "Job application on an online portal", price: "KES 200" },
      { name: "Email account creation", price: "KES 150" },
      { name: "Email / account recovery", price: "KES 300" },
      { name: "University & college applications", price: "KES 500" },
      { name: "Scholarship form filling", price: "KES 500" },
      { name: "TSC & KNEC applications", price: "KES 500" },
      { name: "Freelancer account setup (Upwork, Fiverr)", price: "KES 1,000" },
    ],
  },
  {
    slug: "tech-consultation",
    title: "Tech Consultation",
    icon: "ShieldCheck",
    summary: "Cyber security, devices, software and websites — honest expert advice.",
    description:
      "Led by a cyber security specialist and web developer. Whether you are buying a laptop or locking down your business online, you get straight answers.",
    items: [
      { name: "Laptop & phone purchase advisory", price: "KES 500" },
      { name: "Software installation & troubleshooting", price: "from KES 700" },
      { name: "Website & domain setup for small businesses", price: "from KES 15,000" },
      { name: "Brand creation & expansion package", price: "from KES 10,000" },
      { name: "Digital marketing starter pack", price: "from KES 5,000" },
      { name: "Cyber security basics session (1 hr)", price: "KES 1,500" },
      { name: "Business security audit", price: "from KES 8,000" },
    ],
  },
  {
    slug: "e-learning-materials",
    title: "E-Learning Materials",
    icon: "GraduationCap",
    summary: "Past papers, digital skills courses and research formatting help.",
    description:
      "Study material and skills training for students, teachers and anyone upgrading their digital game.",
    items: [
      { name: "KCSE / KCPE past papers (per subject set)", price: "KES 100" },
      { name: "College & university past papers", price: "KES 200" },
      { name: "Coding tutorials & bootcamp guidance", price: "KES 500" },
      { name: "Basic computer packages course", price: "KES 5,000" },
      { name: "MS Office training (Word, Excel, PowerPoint)", price: "KES 6,000" },
      { name: "Research & thesis formatting help", price: "from KES 1,500" },
    ],
  },
  {
    slug: "office-tech-products",
    title: "Office & Tech Products",
    icon: "ShoppingBag",
    summary: "Flash disks, printers, laptops, accessories and stationery for sale.",
    description:
      "Genuine products at fair prices, with advice on what actually suits your needs and budget.",
    items: [
      { name: "Flash disks & memory cards", price: "from KES 700" },
      { name: "External hard drives", price: "from KES 5,500" },
      { name: "Printers, toners & cartridges", price: "from KES 2,500" },
      { name: "Laptops (new & refurbished)", price: "from KES 22,000" },
      { name: "Chargers, mice & keyboards", price: "from KES 600" },
      { name: "Phone cables, earphones & power banks", price: "from KES 400" },
      { name: "Office stationery (paper, files, pens)", price: "from KES 50" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
