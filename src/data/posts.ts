export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "how-to-apply-for-a-kra-pin",
    title: "How to apply for a KRA PIN in 2026",
    excerpt:
      "A step-by-step walkthrough of the eCitizen KRA PIN registration, the documents you need and the mistakes that get applications rejected.",
    date: "2026-08-12",
    readTime: "4 min read",
    body: [
      "A KRA PIN is required for almost everything in Kenya: employment, business registration, land transactions, car imports and even some bank accounts. The good news is that registration is free and fully online.",
      "You will need your national ID number, a working email address you can access, and your employer or business details if you are registering as employed or self-employed.",
      "Log into eCitizen, select the KRA service, choose 'New PIN Registration', pick the correct taxpayer type, then fill in the tax obligations that apply to you. Income Tax Resident is the right choice for most individuals.",
      "The most common reason applications stall is an email address the applicant cannot open. Your PIN certificate is emailed to you, so use an address you control. If you no longer have access, we can recover it for you first.",
      "Walk into Blimp Tech Cyber and we will complete the whole process with you and print your certificate on the spot.",
    ],
  },
  {
    slug: "helb-application-deadlines",
    title: "HELB application deadlines: what students must know",
    excerpt:
      "First-time applicants, subsequent applicants and compliance certificates — the timelines and documents that matter.",
    date: "2026-07-28",
    readTime: "3 min read",
    body: [
      "HELB funding is not automatic. First-time applicants must apply before the university deadline, and subsequent applicants must reapply every academic year.",
      "Prepare your ID, admission letter, KRA PIN, parents' or guardians' ID copies, and two guarantors with their ID copies and signatures.",
      "Graduates applying for jobs will usually be asked for a HELB compliance certificate. If you have a loan balance, you need to be on an active repayment plan before it is issued.",
      "We handle first-time applications, reapplications and compliance certificates daily, and we keep a copy of your submission for your records.",
    ],
  },
  {
    slug: "cyber-security-basics-for-small-business",
    title: "Five cyber security basics every Nairobi small business needs",
    excerpt:
      "Simple, low-cost steps that stop the attacks that actually hit small businesses in Kenya.",
    date: "2026-06-30",
    readTime: "5 min read",
    body: [
      "Most small business breaches are not sophisticated. They are reused passwords, unprotected M-Pesa confirmations and staff clicking a fake invoice link.",
      "1. Turn on two-factor authentication for every business email and social account. This alone blocks the majority of account takeovers.",
      "2. Use a password manager instead of one password everywhere. Free options are good enough to start.",
      "3. Back up your records weekly — an external drive plus a cloud copy. Ransomware is only a disaster if the backup does not exist.",
      "4. Verify payment change requests by phone, never by email alone. Invoice fraud is the most expensive attack hitting Kenyan SMEs.",
      "5. Keep Windows, Android and your browsers updated. Unpatched devices are the easiest way in.",
      "Book a cyber security basics session with us and we will set all of this up on your actual devices.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
