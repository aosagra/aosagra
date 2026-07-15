import eventsContent from "../content/aos/events.json";
import galleryContent from "../content/aos/gallery.json";
import homeContent from "../content/aos/home.json";
import leadersContent from "../content/aos/leaders.json";
import navigationContent from "../content/aos/navigation.json";
import noticesContent from "../content/aos/notices.json";
import pagesContent from "../content/aos/pages.json";
import pastEventsContent from "../content/aos/past-events.json";
import settingsContent from "../content/aos/settings.json";

export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = NavItem & {
  items: NavItem[];
};

export type PageSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PageKind =
  | "standard"
  | "leadership"
  | "events"
  | "past-events"
  | "gallery"
  | "contact"
  | "form"
  | "login"
  | "member-area"
  | "public-directory"
  | "videos"
  | "downloads"
  | "notices"
  | "current-executive"
  | "past-leadership"
  | "archive-roster"
  | "archived-message"
  | "secretary-message"
  | "conference-archive";

export type ContentPage = {
  slug: string;
  title: string;
  group: string;
  summary: string;
  kind?: PageKind;
  status?: "ready" | "coming-soon";
  sections?: PageSection[];
  image?: string;
  canonicalSlug?: string;
};

export const organization = settingsContent;
export const mainNavigation = navigationContent as NavGroup[];
export const events = eventsContent;
export const pastEvents = pastEventsContent;
export const leaders = leadersContent;
export const notices = noticesContent;
export const home = homeContent;

export const pastPresidents = [
  { name: "Prof O. N. Vyas", term: "1979–1988" },
  { name: "Prof K. P. Srivastava", term: "1983–1997" },
  { name: "Dr A. K. Varshney", term: "1998–2001" },
  { name: "Dr S. C. Sahu", term: "2001–2004" },
  { name: "Dr I. A. Khan", term: "2004–2007" },
  { name: "Dr K. K. Pruthi", term: "2007–2010" },
  { name: "Dr Ashok Saxena", term: "2010–2011" },
  { name: "Dr G. B. Saxena", term: "2011–2012" },
  { name: "Dr Ravi Sabharwal", term: "2012–2013" },
  { name: "Dr J. K. Jain", term: "2013–2014" },
  { name: "Dr Salil Lalit", term: "2014–2015" },
  { name: "Dr D. V. Sharma", term: "2015–2016" },
  { name: "Dr Anup Khare", term: "2016–2017" },
  { name: "Dr Ashok Viz", term: "2017–2018" },
  { name: "Dr Sajid Hussain", term: "2018–2019" },
  { name: "Dr Anuj Kumar", term: "2019–2020" },
  { name: "Dr Anuj Kumar", term: "2019–2021" },
  { name: "Dr Sanjay Prakash", term: "2021–2022" },
  { name: "Dr Manvendra Sharma", term: "2022–2023" },
  { name: "Dr Arun Kapoor", term: "2023–2024" },
  { name: "Dr A. K. Gupta", term: "2024–2025" },
  { name: "Dr Atul Agarwal", term: "2025–2026" }
];

export const executiveBody2025 = [
  { name: "Dr Atul Agarwal", role: "President" },
  { name: "Dr A. K. Gupta", role: "Immediate Past President" },
  { name: "Dr Atul Kulshreshtha", role: "President-Elect" },
  { name: "Dr Pramod Gupta", role: "Vice President" },
  { name: "Dr Manoj Sharma", role: "Vice President" },
  { name: "Dr Anupam Gupta", role: "Hon. General Secretary" },
  { name: "Dr Sanjay Chaturvedi", role: "Joint General Secretary" },
  { name: "Dr Ashwani Sadana", role: "Joint General Secretary" },
  { name: "Dr Sanjeev Vohra", role: "Treasurer" },
  { name: "Dr Sanjay Agarwal", role: "Joint Treasurer" },
  { name: "Dr R. K. Arora", role: "Immediate Past Secretary" },
  { name: "Dr Brijesh Sharma", role: "Scientific Secretary" },
  { name: "Dr Ankit Varshney", role: "Scientific Secretary" },
  { name: "Dr Mukesh Goyal", role: "Cultural Secretary" },
  { name: "Dr Rajeev Gupta", role: "Web Master" },
  { name: "Dr Arpit Goyal", role: "Executive Member" },
  { name: "Dr Ashank Gupta", role: "Executive Member" },
  { name: "Dr Imran", role: "Executive Member" },
  { name: "Dr Rajesh Agrawal", role: "Executive Member" },
  { name: "Dr Rajat Kapoor", role: "Executive Member" },
  { name: "Dr S. K. Jain", role: "Executive Member" },
  { name: "Dr Shashi Kumar", role: "Executive Member" },
  { name: "Dr Vivek Mittal", role: "Executive Member" },
  { name: "Dr Vineet Pathak", role: "Executive Member" }
];

export const currentExecutive2026 = [
  { name: "Dr Atul Kulshreshtha", role: "President", group: "Office Bearers" },
  { name: "Dr Sanjay Chaturvedi", role: "Hon. General Secretary", group: "Office Bearers" },
  { name: "Dr Pramod Gupta", role: "President-Elect", group: "Office Bearers" },
  { name: "Dr Manoj Sharma", role: "Vice President", group: "Office Bearers" },
  { name: "Dr S. K. Jain", role: "Vice President", group: "Office Bearers" },
  { name: "Dr Sanjeev Vohra", role: "Treasurer", group: "Office Bearers" },
  { name: "Dr Ashwani Sadana", role: "Joint Secretary", group: "Office Bearers" },
  { name: "Dr Rajeev Gupta", role: "Joint Secretary", group: "Office Bearers" },
  { name: "Dr Atul Agarwal", role: "Immediate Past President", group: "Office Bearers" },
  { name: "Dr Anupam Gupta", role: "Immediate Past Secretary", group: "Office Bearers" },
  { name: "Dr Sanjay Agarwal", role: "Joint Treasurer", group: "Office Bearers" },
  { name: "Dr Kartik Pruthi", role: "Scientific Secretary", group: "Office Bearers" },
  { name: "Dr Ankit Varshney", role: "IT & Web Incharge", group: "Office Bearers" },
  { name: "Dr Mukesh Goyal", role: "Cultural Secretary", group: "Office Bearers" },
  { name: "Dr Rajeev Goyal", role: "Scientific Secretary", group: "Office Bearers" },
  { name: "Dr Arpit Goyal", role: "Executive Member", group: "Executive Members" },
  { name: "Dr Ashank Gupta", role: "Executive Member", group: "Executive Members" },
  { name: "Dr Imran", role: "Executive Member", group: "Executive Members" },
  { name: "Dr Rajesh Agrawal", role: "Executive Member", group: "Executive Members" },
  { name: "Dr Rajat Kapoor", role: "Web Incharge", group: "Executive Members" },
  { name: "Dr Shashi Kumar", role: "Executive Member", group: "Executive Members" },
  { name: "Dr Vivek Mittal", role: "Executive Member", group: "Executive Members" },
  { name: "Dr Vineet Pathak", role: "Executive Member", group: "Executive Members" },
  { name: "Dr Brijesh Sharma", role: "Executive Member", group: "Executive Members" },
  { name: "Dr A. K. Varshney", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr S. C. Sahu", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr I. A. Khan", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Ashok Saxena", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Ravi Sabharwal", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr J. K. Jain", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr D. V. Sharma", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Anup Khare", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Ashok Vij", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Sajid Hussain", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Anuj Kumar", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Sanjay Prakash", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Manvendra Sharma", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Arun Kapoor", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr A. K. Gupta", role: "Patron / Past President", group: "Patrons / Past Presidents" },
  { name: "Dr Sanjay Dhawan", role: "Special Invitee / Advisor", group: "Special Invitees / Advisors" },
  { name: "Dr Atul Srivastava", role: "Special Invitee / Advisor", group: "Special Invitees / Advisors" },
  { name: "Dr Dev Rajan Agarwal", role: "Designation to be updated", group: "Designation to be updated" },
  { name: "Dr Shubham Khandelwal", role: "Designation to be updated", group: "Designation to be updated" }
];

export const archivedPresidentMessage = {
  author: "Dr Atul Agarwal",
  role: "President, 2025–2026",
  image: "/assets/optimized/people/atul-agarwal-2025-26.webp",
  paragraphs: [
    "Dear fellow orthopaedic colleagues,",
    "As we gather to advance orthopaedic care in Agra, I’m honoured to serve as President of the Agra Orthopaedic Society for the year 2025–2026. Our mission is to share knowledge, experience, and expertise to improve patient outcomes.",
    "I invite you to participate in our academic programmes, share your insights, and lead initiatives. Together, let’s elevate orthopaedic care in our region.",
    "Thank you for your trust and support."
  ]
};

export const secretaryMessage = {
  author: "Dr Sanjay Chaturvedi",
  role: "Hon. General Secretary, Agra Orthopaedic Society",
  image: "/assets/optimized/people/sanjay-chaturvedi.webp",
  headline: "Making AOS active, documented, academic, and connected.",
  excerpt:
    "The current AOS working year is being built around regular academic activity, better records, transparent planning, public awareness, and a stronger connection with every member.",
  paragraphs: [
    "Respected seniors, colleagues, and dear members,",
    "It is a privilege to serve the Agra Orthopaedic Society as Hon. General Secretary. AOS has grown through the commitment of generations of orthopaedic surgeons in Agra, and our responsibility is to honour that legacy while making the society more useful, better documented, and easier for every member to engage with.",
    "Since the installation of the present team, our effort has been to move with steady and practical steps: regular academic activity, postgraduate participation, verified member records, committee-based working, public-awareness programmes, and a durable digital archive. Each of these is important if AOS is to remain both active in the present and well preserved for the future.",
    "The AOS Digital Directory and Member Activity Update process have been started so that member communication becomes more reliable and the academic, professional, teaching, research, public-awareness, and service contributions of members can be recorded and acknowledged. The proposed monthly AOS Member Achievements report will help ensure that good work done by members does not remain invisible.",
    "The scientific and governance calendar also gives us a clearer rhythm: GBM-CME meetings, journal clubs, postgraduate presentations, case discussions, invited lectures, committee reviews, public-awareness activity, and planned reporting. The aim is not only to hold meetings, but to create continuity, documentation, and meaningful participation.",
    "Our public-awareness work will continue around themes such as clubfoot awareness, bone and joint health, osteoporosis, falls prevention, road safety, trauma prevention, posture, safe exercise, and fracture first aid. A professional society has a responsibility to serve its members, its trainees, and the wider community.",
    "I request all AOS members to take part actively: attend programmes, encourage postgraduate colleagues, update directory details, share member achievements, contribute to committees, and help us build a clean institutional record. With the guidance of our seniors, the support of President Dr Atul Kulshreshtha, and the participation of every member, we can make this year academically productive, well organised, and worthy of the AOS legacy."
  ],
  priorities: [
    {
      title: "Academic continuity",
      text: "Monthly academic activity, GBM-CME meetings, journal clubs, case discussions, postgraduate paper presentations, and practical teaching formats."
    },
    {
      title: "Member records and achievements",
      text: "Digital directory updates, verified communication records, and a structured way to collect and acknowledge member activity."
    },
    {
      title: "Governance and archive",
      text: "Committee-based work, Constitution review, finance and compliance review, handover records, and a dependable digital society archive."
    },
    {
      title: "Public awareness",
      text: "Bone and joint health, osteoporosis, road safety, trauma prevention, falls prevention, sports injury prevention, and community-facing education."
    }
  ],
  links: [
    { label: "View the academic calendar", href: "/academic-calendar/" },
    { label: "Open the member area", href: "/member-area/" },
    { label: "See recent photographs", href: "/gallery/" }
  ]
};

export const galleryImages = [...galleryContent].sort((a, b) => a.order - b.order);

export const videoRecordings = [
  {
    id: "ogEZM8QZFEs",
    title: "11 July Osteoporosis Lecture by International Speakers",
    event: "Osteoporosis & Sarcopenia Symposium",
    date: "11 July 2026",
    summary: "Lecture recording from the AOS osteoporosis and sarcopenia academic programme.",
    url: "https://youtu.be/ogEZM8QZFEs"
  },
  {
    id: "LAbCehT1joc",
    title: "Agra Orthopaedic Society 11 July Osteoporosis Symposium",
    event: "Osteoporosis & Sarcopenia Symposium",
    date: "11 July 2026",
    summary: "Symposium recording from the 11 July AOS academic programme.",
    url: "https://youtu.be/LAbCehT1joc"
  }
];

const comingSoon = (
  slug: string,
  title: string,
  group: string,
  summary: string,
  kind: PageKind = "standard"
): ContentPage => ({
  slug,
  title,
  group,
  summary,
  kind,
  status: "coming-soon"
});

const basePages: ContentPage[] = [
  {
    slug: "about-aos",
    title: "About Agra Orthopaedic Society",
    group: "About AOS",
    summary:
      "A professional home for orthopaedic learning, ethical practice, fellowship, and public service in Agra since 1979.",
    status: "ready",
    sections: [
      {
        title: "A society built around shared learning",
        paragraphs: [
          "Agra Orthopaedic Society brings orthopaedic surgeons and trainees together through academic meetings, continuing medical education, skills development, research, professional fellowship, and community awareness.",
          "The society connects local clinical experience with wider academic collaboration while preserving the professional legacy built by generations of orthopaedic surgeons in Agra."
        ]
      },
      {
        title: "What guides the society",
        bullets: [
          "Advance orthopaedic knowledge through regular academic activity.",
          "Encourage ethical, evidence-informed, and compassionate patient care.",
          "Support postgraduate education, presentation, research, and mentorship.",
          "Contribute to public understanding of bone, joint, injury, and mobility health.",
          "Strengthen fellowship and collaboration across the orthopaedic community."
        ]
      }
    ]
  },
  {
    slug: "vision-mission",
    title: "Vision & Mission",
    group: "About AOS",
    summary: "A shared commitment to education, ethical practice, professional fellowship, and better orthopaedic care.",
    status: "ready",
    sections: [
      {
        title: "Vision",
        paragraphs: [
          "To strengthen orthopaedic care through continuous learning, ethical professional practice, collaboration, and service to society."
        ]
      },
      {
        title: "Mission",
        bullets: [
          "Create regular, useful academic opportunities for members and trainees.",
          "Encourage research, presentation, discussion, and responsible knowledge exchange.",
          "Build professional relationships across institutions and generations.",
          "Promote awareness that helps the public protect mobility, prevent injury, and seek timely care."
        ]
      }
    ]
  },
  {
    slug: "objectives",
    title: "Society Objectives",
    group: "About AOS",
    summary: "The practical priorities that translate the AOS purpose into academic activity and public service.",
    status: "ready",
    sections: [
      {
        title: "Our objectives",
        bullets: [
          "Organise scientific meetings, CME programmes, workshops, lectures, and case-based learning.",
          "Support postgraduate teaching and opportunities for young orthopaedic surgeons.",
          "Encourage research, publication, audit, and professional exchange.",
          "Promote ethical conduct and high standards of orthopaedic care.",
          "Undertake public-awareness and injury-prevention initiatives.",
          "Document and honour the society’s institutional legacy."
        ]
      }
    ]
  },
  {
    slug: "office-bearers",
    title: "Office Bearers",
    group: "About AOS",
    summary: "The current leadership of the Agra Orthopaedic Society.",
    kind: "leadership",
    status: "ready"
  },
  {
    slug: "executive-committee",
    title: "Executive Committee 2026",
    group: "About AOS",
    summary: "The present AOS executive roster for 2026, with names and designations from the society spreadsheet.",
    kind: "current-executive",
    status: "ready"
  },
  {
    slug: "executive-body",
    title: "Executive Body 2025–2026",
    group: "About AOS",
    summary: "The previous AOS executive body, preserved from the legacy website as a dated institutional record.",
    kind: "archive-roster",
    status: "ready"
  },
  comingSoon("committees", "Committees", "About AOS", "Committee roles and current membership will be published here after society review."),
  comingSoon("president-message", "President’s Message", "About AOS", "A message from current President Dr Atul Kulshreshtha will be published here."),
  {
    slug: "president-message-2025-2026",
    title: "President’s Message 2025–2026",
    group: "About AOS",
    summary: "An archived message from Dr Atul Agarwal’s term as AOS President.",
    kind: "archived-message",
    status: "ready"
  },
  {
    slug: "secretary-message",
    title: "Secretary’s Message",
    group: "About AOS",
    summary: "A message from Dr Sanjay Chaturvedi on AOS academic continuity, member records, public awareness, and digital documentation.",
    kind: "secretary-message",
    status: "ready"
  },
  {
    slug: "aos-legacy",
    title: "Legacy & Milestones",
    group: "About AOS",
    summary: "More than four decades of orthopaedic learning, fellowship, and service in Agra.",
    image: "/assets/optimized/installation-1280.webp",
    status: "ready",
    sections: [
      {
        title: "Since 1979",
        paragraphs: [
          "Agra Orthopaedic Society has grown through the contribution of senior clinicians, office bearers, teachers, organisers, members, and trainees. Its history lives not only in major conferences but in the continuity of monthly learning and professional fellowship.",
          "This digital archive will bring milestones, past leadership, photographs, and conference records into one organised and searchable home."
        ]
      },
      {
        title: "National conference legacy",
        paragraphs: [
          "The society’s IOACON 2004 and IOACON 2013 archives recognise landmark national meetings hosted in Agra. Dedicated archive pages are retained while additional material is catalogued."
        ]
      }
    ]
  },
  {
    slug: "past-leadership",
    title: "Past Presidents & Secretaries",
    group: "About AOS",
    summary: "The presidency record preserved from the legacy AOS website, with the past-secretaries register still under verification.",
    kind: "past-leadership",
    status: "ready"
  },
  comingSoon("ioacon-2004-archive", "IOACON 2004 Archive", "About AOS", "Photographs, documents, and memories from IOACON 2004 are being organised."),
  {
    slug: "ioacon-2013-archive",
    title: "IOACON 2013 Archive",
    group: "About AOS",
    summary: "Preserving the society’s role in hosting a landmark national orthopaedic conference in Agra.",
    image: "/assets/optimized/ioacon-banner-1800.webp",
    status: "ready",
    sections: [
      {
        title: "An archive in progress",
        paragraphs: [
          "Conference photographs and surviving digital material are being gathered into a durable archive. The page remains available now so members can contribute verified material for inclusion."
        ]
      }
    ]
  },
  comingSoon("legal-status-governance", "Constitution & Governance", "About AOS", "Approved governance documents will be published here once prepared for public access.", "downloads"),
  {
    slug: "contact",
    title: "Contact AOS",
    group: "About AOS",
    summary: "Reach the Agra Orthopaedic Society for membership, academic, event, and general enquiries.",
    kind: "contact",
    status: "ready"
  },
  {
    slug: "academics",
    title: "Academics",
    group: "Academics",
    summary: "A connected programme of CME, discussion, skills, postgraduate teaching, and research.",
    status: "ready",
    sections: [
      {
        title: "Learning through the year",
        paragraphs: [
          "AOS academic activity is organised around regular peer learning: monthly CME, case discussions, journal clubs, guest lectures, skills courses, postgraduate teaching, and presentation opportunities."
        ],
        bullets: [
          "Clinically relevant discussion led by members and invited faculty.",
          "Structured opportunities for postgraduate residents.",
          "Shared learning across institutions in Agra.",
          "An expanding digital record of lectures and presentations."
        ]
      }
    ]
  },
  {
    slug: "academic-calendar",
    title: "Academic Calendar",
    group: "Academics",
    summary: "The current AOS schedule of academic meetings and society programmes.",
    kind: "events",
    status: "ready"
  },
  comingSoon("monthly-cme", "Monthly CME", "Academics", "The next monthly CME programme and archive will be published here."),
  comingSoon("journal-club", "Journal Club", "Academics", "Journal club dates, selected papers, and discussion notes will be added here."),
  comingSoon("case-discussions", "Case Discussions", "Academics", "Upcoming case-discussion themes and submission guidance will be published here."),
  comingSoon("pg-teaching", "PG Teaching Programme", "Academics", "The structured postgraduate teaching schedule is being prepared."),
  comingSoon("workshops", "Workshops & Skills Courses", "Academics", "Workshop and skills-course announcements will appear here."),
  comingSoon("presentations-lectures", "Lectures & Presentations", "Academics", "Approved teaching material and lecture recordings will be organised here."),
  comingSoon("research-publications", "Research & Publications", "Academics", "Member publications, research activity, and submission guidance will be brought together here."),
  comingSoon("scientific-meetings", "Scientific Meetings", "Academics", "Scientific meeting records are being consolidated into the academic archive."),
  {
    slug: "events-cme",
    title: "Events & CME",
    group: "Events & CME",
    summary: "Upcoming programmes, registration, completed events, galleries, and certificates in one place.",
    kind: "events",
    status: "ready"
  },
  {
    slug: "upcoming-events",
    title: "Upcoming Events",
    group: "Events & CME",
    summary: "Current AOS academic and society dates.",
    kind: "events",
    status: "ready"
  },
  {
    slug: "register-for-event",
    title: "Register for an Event",
    group: "Events & CME",
    summary: "Send your details to begin registration for a current AOS programme.",
    kind: "form",
    status: "ready"
  },
  {
    slug: "past-events",
    title: "Past Events",
    group: "Events & CME",
    summary: "A growing record of completed AOS academic and society activity.",
    kind: "past-events",
    status: "ready"
  },
  {
    slug: "orthocon-2026",
    title: "50th UP Golden Jubilee ORTHOCON",
    group: "Events & CME",
    summary: "The February 2026 Golden Jubilee conference in Agra, preserved with its original brochure and event artwork.",
    kind: "conference-archive",
    image: "/assets/optimized/orthocon-2026-1200.webp",
    status: "ready",
    sections: [
      {
        title: "Experience, Energize, Evolve",
        paragraphs: [
          "The 50th UP Golden Jubilee ORTHOCON was held from 20–22 February 2026 at Hotel Clarks Shiraz, Agra.",
          "This page preserves the event artwork and brochure found on the legacy AOS website as part of the society’s conference record."
        ]
      }
    ]
  },
  {
    slug: "event-gallery",
    title: "Event Gallery",
    group: "Events & CME",
    summary: "Photographs from AOS meetings, teaching, fellowship, and public activity.",
    kind: "gallery",
    status: "ready"
  },
  comingSoon("cme-certificates", "CME Certificates", "Events & CME", "Certificate search and download will be enabled when the verified records are ready.", "downloads"),
  comingSoon("academic-collaboration", "Academic Collaboration", "Events & CME", "Information for institutions and societies interested in academic collaboration will be published here."),
  {
    slug: "membership",
    title: "Membership",
    group: "Membership",
    summary: "Join a professional community centred on learning, fellowship, ethics, and service.",
    status: "ready",
    sections: [
      {
        title: "Belong to the AOS community",
        paragraphs: [
          "AOS membership connects orthopaedic professionals in Agra with regular academic activity, society communication, collaborative opportunities, and an enduring local professional network."
        ]
      },
      {
        title: "Membership pathways",
        bullets: [
          "Membership categories and eligibility are confirmed by the society.",
          "Applicants may begin through the online enquiry or application form.",
          "The membership team will verify documents and guide the next step.",
          "Final admission remains subject to AOS rules and approval."
        ]
      }
    ]
  },
  comingSoon("membership-categories", "Membership Categories", "Membership", "Verified membership categories and eligibility criteria will be published here."),
  {
    slug: "membership-benefits",
    title: "Membership Benefits",
    group: "Membership",
    summary: "Academic participation, professional connection, society communication, and opportunities to contribute.",
    status: "ready",
    sections: [
      {
        title: "What membership supports",
        bullets: [
          "Participation in AOS academic meetings and professional programmes.",
          "Timely society notices, circulars, and event information.",
          "Opportunities to present, teach, collaborate, and serve on society initiatives.",
          "Connection with peers, senior colleagues, and postgraduate trainees.",
          "Recognition of appropriate member achievements and contributions."
        ]
      }
    ]
  },
  {
    slug: "find-orthopaedic-surgeon",
    title: "Find an Orthopaedic Surgeon in Agra",
    group: "Membership",
    summary: "A public AOS listing of orthopaedic surgeons practicing in Agra, with private member contact details kept off the open website.",
    kind: "public-directory",
    status: "ready",
    sections: [
      {
        title: "Public professional listing",
        paragraphs: [
          "This public directory helps patients and visitors identify orthopaedic surgeons practicing in Agra from the current AOS digital directory records.",
          "Phone numbers, email addresses, photographs, family details, and member-only information are not shown here. For corrections or missing listings, please contact AOS or update the member directory form."
        ]
      }
    ]
  },
  {
    slug: "apply-for-membership",
    title: "Apply for Membership",
    group: "Membership",
    summary: "Begin your AOS membership application. The society team will verify eligibility and supporting documents.",
    kind: "form",
    status: "ready"
  },
  {
    slug: "membership-enquiry",
    title: "Membership Enquiry",
    group: "Membership",
    summary: "Ask about eligibility, documents, categories, or the application process.",
    kind: "form",
    status: "ready"
  },
  comingSoon("member-directory", "Member Directory", "Membership", "The member directory will open only after consent review, record verification, and secure member authentication are complete.", "login"),
  {
    slug: "member-area",
    title: "Member Area",
    group: "Membership",
    summary: "Directory updates, member activity submissions, and the secure member portal roadmap for AOS members.",
    kind: "member-area",
    status: "ready"
  },
  {
    slug: "aos-connect",
    title: "AOS Connect",
    group: "AOS Connect",
    summary: "Notices, news, member activity, galleries, downloads, and useful professional links.",
    kind: "notices",
    status: "ready"
  },
  {
    slug: "latest-notices",
    title: "Latest Notices",
    group: "AOS Connect",
    summary: "Current dates and information from the Agra Orthopaedic Society.",
    kind: "notices",
    status: "ready"
  },
  comingSoon("circulars", "Circulars", "AOS Connect", "Approved society circulars will be available here.", "downloads"),
  comingSoon("aos-news", "AOS News", "AOS Connect", "Society news and verified updates will be published here."),
  comingSoon("member-achievements", "Member Achievements", "AOS Connect", "AOS members will be able to submit verified professional achievements for publication."),
  comingSoon("member-activities", "Member Activities", "AOS Connect", "Approved member-led academic and community activity will be featured here."),
  comingSoon("awards-recognition", "Awards & Recognition", "AOS Connect", "A verified record of awards and professional recognition is being prepared."),
  {
    slug: "gallery",
    title: "Photo Gallery",
    group: "AOS Connect",
    summary: "A visual record of learning, leadership, fellowship, and service.",
    kind: "gallery",
    status: "ready"
  },
  {
    slug: "video-gallery",
    title: "Video Gallery",
    group: "AOS Connect",
    summary: "Selected AOS recordings and video resources, including the 11 July 2026 osteoporosis symposium videos.",
    kind: "videos",
    status: "ready",
    sections: [
      {
        title: "About these recordings",
        paragraphs: [
          "AOS video material is hosted on YouTube and embedded here for easier member access. Recordings are shared as academic resources and remain subject to the source channel’s availability."
        ]
      }
    ]
  },
  {
    slug: "downloads-notices",
    title: "Downloads",
    group: "AOS Connect",
    summary: "Event material, notices, public-awareness resources, and approved society documents.",
    kind: "downloads",
    status: "ready"
  },
  {
    slug: "useful-links",
    title: "Useful Links",
    group: "AOS Connect",
    summary: "Selected professional and public-health resources.",
    status: "ready",
    sections: [
      {
        title: "Professional resources",
        bullets: [
          "Indian Orthopaedic Association — https://www.ioaindia.org",
          "AAOS OrthoInfo Patient Education — https://www.orthoinfo.org/",
          "Agra Orthopaedic Society Facebook — https://www.facebook.com/profile.php?id=100066359897312",
          "World Health Organization — https://www.who.int",
          "National Health Portal of India — https://www.nhp.gov.in"
        ]
      }
    ]
  },
  {
    slug: "public-awareness",
    title: "Public Awareness",
    group: "Public Awareness",
    summary: "Clear, responsible starting points for bone, joint, injury, and mobility health.",
    status: "ready",
    sections: [
      {
        title: "Health information, not a diagnosis",
        paragraphs: [
          "This section is being developed as a public service. It will explain common orthopaedic concerns, prevention, first-aid principles, and signs that should prompt timely professional assessment.",
          "General information cannot replace examination or individual medical advice. For urgent injury, severe pain, weakness, numbness, deformity, or loss of function, seek qualified medical care promptly."
        ]
      },
      {
        title: "Current awareness library",
        paragraphs: [
          "The first AOS public-awareness pages are being organised around common patient questions: knee osteoarthritis, shoulder pain myths, and night leg cramps.",
          "These pages support Facebook posts with slightly fuller explanations, warning signs, and practical next steps."
        ],
        bullets: [
          "Knee pain and osteoarthritis — /knee-pain-arthritis/",
          "Shoulder pain myth-buster series — /shoulder-problems/",
          "Night leg cramps — /night-leg-cramps/",
          "Hindi awareness archive — /hindi-public-awareness/",
          "Trusted OrthoInfo links — /trusted-orthoinfo-links/",
          "Follow the AOS Facebook page — https://www.facebook.com/profile.php?id=100066359897312"
        ]
      },
      {
        title: "Daily Hindi public-awareness posts",
        paragraphs: [
          "AOS will use its Facebook page for regular Hindi public-awareness posts on common orthopaedic problems. The aim is to share one clear, practical topic at a time for patients and families in Agra.",
          "Suggested themes include osteoporosis, knee arthritis, back pain, fracture first aid, sports injury prevention, senior-citizen falls, road-safety trauma prevention, posture, safe exercise, and when to seek urgent orthopaedic care."
        ],
        bullets: [
          "Monday: knee pain and osteoarthritis",
          "Wednesday: shoulder myth-buster",
          "Friday: practical self-care, cramps, stretching, fall prevention, or posture",
          "Sunday: simple patient question or doctor’s note"
        ]
      }
    ]
  },
  comingSoon("bone-joint-health", "Bone & Joint Health", "Public Awareness", "Practical guidance on movement, strength, nutrition, injury prevention, and timely care is being prepared."),
  comingSoon("osteoporosis", "Osteoporosis", "Public Awareness", "A patient-friendly guide to bone health, risk, screening, falls, and fracture prevention is being prepared."),
  {
    slug: "knee-pain-arthritis",
    title: "Knee Pain & Arthritis",
    group: "Public Awareness",
    summary: "Patient-friendly guidance on knee osteoarthritis, movement, X-rays, weight, warning signs, and treatment decisions.",
    status: "ready",
    sections: [
      {
        title: "Osteoarthritis is not simply old age",
        paragraphs: [
          "Knee osteoarthritis is common with increasing age, but pain and disability should not be dismissed as just getting old.",
          "Osteoarthritis affects the whole joint: cartilage, bone, joint lining, muscles and surrounding tissues. Symptoms may include pain while walking or climbing stairs, stiffness after rest, swelling, reduced movement and loss of confidence in the knee.",
          "Early attention to weight, muscle strength, activity pattern and correct diagnosis can often improve function considerably. A painful knee deserves assessment, not resignation."
        ]
      },
      {
        title: "Movement is usually part of treatment",
        paragraphs: [
          "Many people stop moving because the knee hurts. Prolonged inactivity can weaken the muscles that protect the joint and may make ordinary activity even harder.",
          "The aim is not painful over-exertion. Suitable regular activity may include walking within tolerance, cycling, swimming or prescribed strengthening exercises. The correct exercise depends on symptoms, balance, general health and the condition of the joint.",
          "A useful rule is simple: exercise should challenge the muscles without causing a major and lasting increase in pain or swelling."
        ]
      },
      {
        title: "Weight and knee pain",
        paragraphs: [
          "Body weight is not a moral issue, and patients should never be blamed. It is, however, an important mechanical and metabolic factor in knee osteoarthritis.",
          "Even modest, sustainable weight reduction may reduce stress on the knees and improve walking, sleep and exercise tolerance. Crash diets rarely solve a long-term joint problem.",
          "Small improvements maintained for months matter more than dramatic promises."
        ],
        bullets: [
          "Realistic nutrition changes",
          "Regular low-impact activity",
          "Strengthening of thigh and hip muscles",
          "Treatment of pain that prevents exercise"
        ]
      },
      {
        title: "An X-ray does not decide your pain",
        paragraphs: [
          "Two people can have similar knee X-rays and very different symptoms. One may walk comfortably; the other may struggle.",
          "Treatment should be based on the complete picture: pain pattern, swelling, movement, muscle strength, alignment, walking ability, sleep, work and personal goals. An X-ray is useful, but the patient is more important than the picture."
        ]
      },
      {
        title: "When should knee pain be examined?",
        paragraphs: [
          "Not every painful knee is osteoarthritis. Correct diagnosis comes before correct treatment."
        ],
        bullets: [
          "Pain is persistent or repeatedly associated with swelling",
          "Pain affects sleep, walking, stairs or routine activity",
          "The knee feels unstable, locks, or cannot bear weight",
          "There is fever, redness, sudden severe swelling, injury, numbness, weakness, deformity, or rapidly worsening symptoms"
        ]
      },
      {
        title: "Knee replacement is not the first step",
        paragraphs: [
          "Most patients with knee osteoarthritis do not begin with surgery. Treatment usually progresses through education, activity modification, exercise, weight management, medicines when appropriate, and selected procedures.",
          "Knee replacement is considered when severe pain and disability continue despite reasonable non-operative treatment and the joint damage matches the symptoms. The right decision is individual, informed and shared."
        ]
      },
      {
        title: "Reliable reference links",
        bullets: [
          "AAOS OrthoInfo: Arthritis of the Knee — https://www.orthoinfo.org/diseases--conditions/arthritis-of-the-knee/",
          "AOS Facebook page — https://www.facebook.com/profile.php?id=100066359897312"
        ]
      }
    ]
  },
  {
    slug: "shoulder-problems",
    title: "Shoulder Problems",
    group: "Public Awareness",
    summary: "A Hindi myth-buster style series on shoulder pain, frozen shoulder, rotator cuff problems, MRI, and safe exercise.",
    status: "ready",
    sections: [
      {
        title: "Shoulder pain myth-buster series",
        paragraphs: [
          "Shoulder pain has many causes. Every shoulder pain is not frozen shoulder, every pain near the shoulder is not necessarily from the shoulder, and every MRI finding does not automatically mean surgery.",
          "The AOS shoulder series is being built in simple Hindi for public awareness, with emphasis on clinical diagnosis, safe exercise, and avoiding unnecessary fear."
        ]
      },
      {
        title: "Topics ready for Facebook and website use",
        bullets: [
          "हर shoulder pain frozen shoulder नहीं होता",
          "Shoulder pain: गर्दन से या shoulder से?",
          "Frozen shoulder क्या है?",
          "Frozen shoulder exercises: कब करें, कब नहीं",
          "Safe exercises in frozen shoulder",
          "MRI in shoulder pain: कब जरूरी है?",
          "Rotator cuff क्या है?",
          "हर rotator cuff tear में surgery जरूरी नहीं"
        ]
      },
      {
        title: "Future topics",
        bullets: [
          "Biceps tendon pain",
          "Shoulder instability or dislocation",
          "Shoulder arthritis",
          "Calcific tendinitis",
          "Sports and gym injuries",
          "Shoulder replacement"
        ]
      },
      {
        title: "When shoulder pain should be assessed",
        paragraphs: [
          "Shoulder stiffness, weakness, pain after injury, repeated dislocation, night pain, diabetes-associated stiffness, or pain travelling from the neck to the arm should be assessed properly. Treatment depends on the cause, not on the name of the pain alone."
        ]
      },
      {
        title: "Reliable reference links",
        bullets: [
          "AAOS OrthoInfo: Frozen Shoulder — https://www.orthoinfo.org/diseases--conditions/frozen-shoulder/",
          "AAOS OrthoInfo: Rotator Cuff Tears — https://www.orthoinfo.org/diseases--conditions/rotator-cuff-tears/",
          "AOS Facebook page — https://www.facebook.com/profile.php?id=100066359897312"
        ]
      }
    ]
  },
  {
    slug: "night-leg-cramps",
    title: "Night Leg Cramps",
    group: "Public Awareness",
    summary: "रात में पिंडली या पैर में अकड़न, तुरंत राहत, बचाव और डॉक्टर से कब मिलें.",
    status: "ready",
    sections: [
      {
        title: "रात में पैरों में अकड़न क्यों होती है?",
        paragraphs: [
          "कई मरीज बताते हैं कि रात में अचानक पिंडली या पैर में तेज खिंचाव हो जाता है. नींद खुल जाती है, पैर कड़ा सा महसूस होता है और दर्द कुछ मिनटों तक रह सकता है.",
          "यह समस्या आम है, लेकिन बार-बार हो, नींद खराब करे, या दूसरे लक्षणों के साथ हो तो इसे नजरअंदाज नहीं करना चाहिए."
        ]
      },
      {
        title: "संभावित कारण",
        bullets: [
          "मांसपेशियों की थकान या कमजोरी",
          "पानी की कमी",
          "लंबे समय तक खड़े रहना या बैठे रहना",
          "बढ़ती उम्र में मांसपेशियों की flexibility कम होना",
          "कुछ दवाइयों का असर",
          "कभी-कभी electrolyte या vitamin imbalance",
          "Diabetes, thyroid, nerve या circulation से जुड़ी समस्या"
        ]
      },
      {
        title: "तुरंत राहत",
        bullets: [
          "पैर सीधा करें और पंजे को धीरे से अपनी ओर खींचें",
          "हल्की मालिश करें",
          "थोड़ा चलें या पैर हिलाएं",
          "गुनगुने पानी से सेक या warm bath मदद कर सकता है"
        ]
      },
      {
        title: "बचाव कैसे करें",
        bullets: [
          "पर्याप्त पानी पिएं",
          "सोने से पहले calf stretching करें",
          "नियमित हल्का व्यायाम करें",
          "संतुलित आहार लें",
          "बहुत tight या असुविधाजनक footwear से बचें"
        ]
      },
      {
        title: "कब डॉक्टर से मिलें?",
        paragraphs: [
          "बार-बार होने वाले cramps को केवल साधारण खिंचाव मानकर न टालें. सही कारण समझना जरूरी है."
        ],
        bullets: [
          "Cramps बार-बार हों या नींद खराब कर रहे हों",
          "Cramps 10 मिनट से अधिक रहें",
          "पैर में सूजन, सुन्नपन, कमजोरी या चलने में दिक्कत हो",
          "दर्द लंबे समय तक बना रहे या symptoms तेजी से बढ़ें"
        ]
      },
      {
        title: "Reliable reference links",
        bullets: [
          "NHS: Leg cramps — https://www.nhs.uk/conditions/leg-cramps/",
          "AOS Facebook page — https://www.facebook.com/profile.php?id=100066359897312"
        ]
      }
    ]
  },
  {
    slug: "trusted-orthoinfo-links",
    title: "Trusted OrthoInfo Links",
    group: "Public Awareness",
    summary: "Curated AAOS OrthoInfo patient-education links for deeper reading after AOS public-awareness posts.",
    status: "ready",
    sections: [
      {
        title: "How AOS will use OrthoInfo",
        paragraphs: [
          "AOS public-awareness pages will remain original, locally written patient education. OrthoInfo links are included for deeper reading from a respected orthopaedic reference.",
          "AAOS OrthoInfo material should be linked as a reference rather than copied, altered, or republished on the AOS website without permission."
        ]
      },
      {
        title: "Knee pain and arthritis",
        bullets: [
          "AAOS OrthoInfo: Arthritis of the Knee — https://www.orthoinfo.org/diseases--conditions/arthritis-of-the-knee/",
          "AAOS OrthoInfo: Total Knee Replacement — https://www.orthoinfo.org/treatment/total-knee-replacement/",
          "AOS page: Knee Pain & Arthritis — /knee-pain-arthritis/"
        ]
      },
      {
        title: "Shoulder pain",
        bullets: [
          "AAOS OrthoInfo: Frozen Shoulder — https://www.orthoinfo.org/diseases--conditions/frozen-shoulder/",
          "AAOS OrthoInfo: Rotator Cuff Tears — https://www.orthoinfo.org/diseases--conditions/rotator-cuff-tears/",
          "AAOS OrthoInfo: Rotator Cuff and Shoulder Conditioning Program — https://www.orthoinfo.org/recovery/rotator-cuff-and-shoulder-conditioning-program/",
          "AOS page: Shoulder Problems — /shoulder-problems/"
        ]
      },
      {
        title: "Bone health, back pain, and fractures",
        bullets: [
          "AAOS OrthoInfo: Low Back Pain — https://www.orthoinfo.org/diseases--conditions/low-back-pain/",
          "AAOS OrthoInfo: Neck Pain — https://www.orthoinfo.org/diseases--conditions/neck-pain/",
          "AAOS OrthoInfo: Fractures (Broken Bones) — https://www.orthoinfo.org/diseases--conditions/fractures-broken-bones/",
          "AAOS OrthoInfo: Care of Casts and Splints — https://www.orthoinfo.org/recovery/care-of-casts-and-splints/"
        ]
      },
      {
        title: "For future AOS posts",
        paragraphs: [
          "Each new AOS awareness topic can follow the same pattern: a short AOS explanation in simple language, a clear safety note, and one or two OrthoInfo links for deeper reading."
        ],
        bullets: [
          "Use OrthoInfo as a reference backbone, not as copied website text.",
          "Translate and localise AOS content in Dr Sanjay Chaturvedi's voice.",
          "Add the OrthoInfo link below the AOS post or website page as further reading."
        ]
      }
    ]
  },
  comingSoon("spine-back-pain", "Spine & Back Pain", "Public Awareness", "Evidence-informed information on back care and warning signs is being prepared."),
  comingSoon("sports-injuries", "Sports Injuries", "Public Awareness", "Prevention, early care, recovery principles, and return-to-sport guidance are being prepared."),
  comingSoon("fracture-first-aid", "Fracture First Aid", "Public Awareness", "Safe first steps after a suspected fracture are being prepared for public use."),
  comingSoon("road-safety-trauma-prevention", "Road Safety & Trauma Prevention", "Public Awareness", "Locally relevant injury-prevention information is being prepared."),
  comingSoon("senior-fall-prevention", "Senior Citizen Fall Prevention", "Public Awareness", "A practical home, health, and mobility checklist for reducing falls is being prepared."),
  {
    slug: "hindi-public-awareness",
    title: "हिंदी स्वास्थ्य जागरूकता",
    group: "Public Awareness",
    summary: "हड्डी, जोड़, चोट और चलने-फिरने के स्वास्थ्य पर सरल हिंदी सामग्री और फेसबुक पोस्ट योजना।",
    status: "ready",
    sections: [
      {
        title: "AOS Facebook awareness series",
        paragraphs: [
          "यह पेज AOS की हिंदी जन-जागरूकता सामग्री के लिए बनाया गया है। फेसबुक पर रोज़ाना या नियमित रूप से एक सरल विषय साझा किया जा सकता है, ताकि आम लोग हड्डी और जोड़ से जुड़ी समस्याओं को बेहतर समझ सकें।",
          "हर पोस्ट में सामान्य जानकारी, बचाव के उपाय, सावधानी के संकेत और समय पर डॉक्टर से सलाह लेने की बात शामिल रखी जानी चाहिए। यह सामग्री व्यक्तिगत जांच या डॉक्टर की सलाह का विकल्प नहीं है।"
        ],
        bullets: [
          "AOS Facebook page — https://www.facebook.com/profile.php?id=100066359897312",
          "Public Awareness overview — /public-awareness/",
          "घुटनों का दर्द और आर्थराइटिस — /knee-pain-arthritis/",
          "कंधे का दर्द, frozen shoulder और rotator cuff — /shoulder-problems/",
          "रात में पैरों में अकड़न — /night-leg-cramps/",
          "भरोसेमंद OrthoInfo links — /trusted-orthoinfo-links/"
        ]
      },
      {
        title: "अगले विषय जिनके पेज तैयार किए जाएंगे",
        paragraphs: [
          "इन विषयों पर भी AOS हिंदी में सरल patient-awareness material तैयार करेगा। जैसे-जैसे सामग्री final होगी, यहां अलग पेज और Facebook post links जोड़े जाएंगे।"
        ],
        bullets: [
          "ऑस्टियोपोरोसिस और हड्डियों की कमजोरी",
          "कमर दर्द और सही posture",
          "फ्रैक्चर होने पर प्राथमिक सावधानी",
          "बुजुर्गों में गिरने से बचाव",
          "सड़क दुर्घटना और trauma prevention",
          "बच्चों में clubfoot awareness",
          "खेल-कूद में चोट से बचाव"
        ]
      }
    ]
  },
  comingSoon("media-coverage", "Media Coverage", "AOS Connect", "Verified media references are being reviewed for the archive."),
  comingSoon("publications-digital-archive", "Publications & Digital Archive", "Academics", "Publications and historic digital material are being catalogued."),
  comingSoon("research-public-health", "Research & Public Health", "Academics", "Society research and public-health initiatives will be documented here."),
  comingSoon("event-brochures", "Event Brochures", "AOS Connect", "Available event brochures will be published here.", "downloads"),
  comingSoon("public-awareness-pdfs", "Public Awareness PDFs", "Public Awareness", "Approved patient-information downloads will be published here.", "downloads"),
  comingSoon("approved-society-documents", "Approved Society Documents", "About AOS", "Documents approved for public circulation will be published here.", "downloads"),
  comingSoon("archived-conference-documents", "Archived Conference Documents", "About AOS", "Historic conference files are being catalogued for release.", "downloads"),
  comingSoon("academic-committee", "Academic Committee", "About AOS", "The current academic committee roster will be published after verification."),
  comingSoon("membership-committee", "Membership Committee", "About AOS", "The current membership committee roster will be published after verification."),
  comingSoon("public-awareness-committee", "Public Awareness Committee", "About AOS", "The current public-awareness committee roster will be published after verification."),
  comingSoon("event-conference-committees", "Event & Conference Committees", "About AOS", "Event and conference committee records are being prepared.")
];

type EditablePage = Partial<ContentPage> & {
  slug: string;
};

const editablePageBySlug = new Map(
  (pagesContent as EditablePage[]).map((page) => [page.slug, page])
);

export const pages: ContentPage[] = basePages.map((page) => {
  const editablePage = editablePageBySlug.get(page.slug);

  if (!editablePage) {
    return page;
  }

  return {
    ...page,
    ...editablePage,
    slug: page.slug,
    group: editablePage.group ?? page.group,
    kind: editablePage.kind ?? page.kind,
    status: editablePage.status ?? page.status,
    sections: editablePage.sections ?? page.sections
  };
});

const unpublishedKinds = new Set(["form", "login"]);
const unpublishedSlugs = new Set([
  "aos-connect",
  "event-gallery",
  "president-message"
]);

/** Canonical pages that are complete enough to appear on the public website. */
export const publicPages: ContentPage[] = pages.filter(
  (page) => page.status === "ready" && !unpublishedKinds.has(page.kind ?? "") && !unpublishedSlugs.has(page.slug)
);

export const publicPageBySlug = new Map(publicPages.map((page) => [page.slug, page]));

const aliases: Record<string, string> = {
  "about-the-society": "about-aos",
  "aos-legacy-milestones": "aos-legacy",
  "aos-national-conference-legacy": "aos-legacy",
  "presidents": "past-leadership",
  "past-presidents": "past-leadership",
  "past-secretaries": "past-leadership",
  "contact-2": "contact",
  "member-login": "member-area",
  "members-area": "member-area",
  "2025/10/10/50th-up-golden-jubilee-orthocon-2026": "orthocon-2026"
};

export const allPages: ContentPage[] = [
  ...pages,
  ...Object.entries(aliases).map(([slug, target]) => {
    const page = pages.find((item) => item.slug === target);
    if (!page) {
      throw new Error(`Missing canonical page for alias: ${slug}`);
    }
    return {
      ...page,
      slug,
      canonicalSlug: target
    };
  })
];

export const pageBySlug = new Map(allPages.map((page) => [page.slug, page]));
