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
  | "downloads"
  | "notices"
  | "past-leadership"
  | "archive-roster"
  | "archived-message"
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

export const galleryImages = [...galleryContent].sort((a, b) => a.order - b.order);

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
  comingSoon("executive-committee", "Executive Committee", "About AOS", "The complete current 2026 executive committee roster is being prepared for publication."),
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
  comingSoon("secretary-message", "Secretary’s Message", "About AOS", "A message from the Hon. General Secretary will be published here."),
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
    slug: "member-login",
    title: "Member Login",
    group: "Membership",
    summary: "A preview of the future member area. Account access is not yet connected.",
    kind: "login",
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
    summary: "Selected AOS recordings and video resources.",
    status: "ready",
    sections: [
      {
        title: "AOS video links",
        paragraphs: [
          "Video material currently remains on the society’s YouTube channels. The links below open in a new tab."
        ],
        bullets: [
          "https://www.youtube.com/watch?v=paw4xbg6krE",
          "https://youtu.be/v04cD9xavPk"
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
      }
    ]
  },
  comingSoon("bone-joint-health", "Bone & Joint Health", "Public Awareness", "Practical guidance on movement, strength, nutrition, injury prevention, and timely care is being prepared."),
  comingSoon("osteoporosis", "Osteoporosis", "Public Awareness", "A patient-friendly guide to bone health, risk, screening, falls, and fracture prevention is being prepared."),
  comingSoon("knee-pain-arthritis", "Knee Pain & Arthritis", "Public Awareness", "Balanced information on common causes, activity, red flags, and treatment pathways is being prepared."),
  comingSoon("shoulder-problems", "Shoulder Problems", "Public Awareness", "A clear guide to common shoulder symptoms and when to seek assessment is being prepared."),
  comingSoon("spine-back-pain", "Spine & Back Pain", "Public Awareness", "Evidence-informed information on back care and warning signs is being prepared."),
  comingSoon("sports-injuries", "Sports Injuries", "Public Awareness", "Prevention, early care, recovery principles, and return-to-sport guidance are being prepared."),
  comingSoon("fracture-first-aid", "Fracture First Aid", "Public Awareness", "Safe first steps after a suspected fracture are being prepared for public use."),
  comingSoon("road-safety-trauma-prevention", "Road Safety & Trauma Prevention", "Public Awareness", "Locally relevant injury-prevention information is being prepared."),
  comingSoon("senior-fall-prevention", "Senior Citizen Fall Prevention", "Public Awareness", "A practical home, health, and mobility checklist for reducing falls is being prepared."),
  comingSoon("hindi-public-awareness", "हिंदी स्वास्थ्य जागरूकता", "Public Awareness", "हड्डी, जोड़, चोट और चलने-फिरने के स्वास्थ्य पर सरल हिंदी सामग्री तैयार की जा रही है।"),
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
