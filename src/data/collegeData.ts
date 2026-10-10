export interface NavItem {
  label: string;
  id: string;
  href?: string;
  children?: {
    label: string;
    id: string;
    subItems?: { label: string; id: string }[];
  }[];
}

export interface PlacedStudent {
  id: string;
  name: string;
  branch: string;
  company: string;
  package: string;
  batch: string;
  avatarSeed: string;
  role: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Examination' | 'Placement' | 'Sports & Events' | 'Circular';
  isNew?: boolean;
  content: string;
  pdfName?: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  duration: string;
  instructor: string;
  industryPartner: string;
  description: string;
  topics: string[];
  enrollmentStatus: 'Open' | 'Ongoing' | 'Upcoming';
}

export interface DepartmentDetail {
  id: string;
  name: string;
  shortCode: string;
  headOfDept: string;
  tagline: string;
  about: string;
  mission: string[];
  vision: string;
  courses: {
    name: string;
    level: 'Undergraduate' | 'Postgraduate' | 'Diploma';
    duration: string;
    intake: number;
    eligibility: string;
  }[];
  labs: {
    name: string;
    equipment: string;
    description: string;
  }[];
  placements: {
    highestPackage: string;
    avgPackage: string;
    topCompanies: string[];
    placementRate: string;
  };
}

export const COLLEGE_INFO = {
  name: 'Infinity Management & Engineering College',
  shortName: 'IMEC Sagar',
  groupName: 'Infinity Group of Institutions',
  motto: 'Learn. Innovate. Lead. Succeed.',
  phone: '+91 73890 74289',
  altPhone: '+91 94251 72159',
  tollFree: '1800 270 1488',
  email: 'info@infinitycollege.in',
  admissionsEmail: 'admissions@infinitycollege.in',
  address: 'University Road, Patharia Hills, Sagar, Madhya Pradesh - 470002, India',
  affiliation: 'Approved by AICTE, New Delhi & Affiliated to RGPV, Bhopal and MCBU, Chhatarpur',
  aicteCode: 'AICTE Permanent ID: 1-424147401',
  rgpvCode: 'RGPV College Code: 0145',
  establishedYear: '2008',
  campusArea: '35+ Acres Lush Green Wi-Fi Campus',
};

export const FLASH_ANNOUNCEMENTS = [
  '⚡ Admissions Open for Academic Session 2026-27 | B.Tech, M.Tech, MBA & Polytechnic Diploma',
  '🎓 Hexaware Technologies Campus Placement Drive concluded: 28 Students selected with packages up to 7.09 LPA',
  '🏆 National Level Hackathon "CodeInfinity 2026" registrations closing soon. Win exciting cash prizes!',
  '📢 First Mid-Semester Examination Schedule for Even Semester announced. Download from Student Corner',
  '🌟 Free Bus Facility available across all routes of Sagar city and Cantonment area',
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Excellence in Engineering & Management Education',
    subtitle: 'Nurturing innovators, leaders, and technocrats through world-class academic infrastructure and hands-on industrial training.',
    tag: 'Welcome to IMEC Sagar',
    primaryAction: 'Explore Programs',
    secondaryAction: 'Campus Virtual Tour',
    badge: 'NAAC Accredited & AICTE Approved',
    accentColor: 'from-blue-900/90 to-indigo-950/90',
  },
  {
    id: 2,
    title: 'Industry 4.0 Center of Excellence & Robotics Labs',
    subtitle: 'Specialized skill tracks in Artificial Intelligence, Cyber Defense, IoT, and Cloud Computing aligned with global corporate requirements.',
    tag: 'Advanced Infrastructure',
    primaryAction: 'View Laboratories',
    secondaryAction: 'Download Syllabus',
    badge: '100% Practical Pedagogy',
    accentColor: 'from-sky-950/90 to-blue-900/90',
  },
  {
    id: 3,
    title: 'Record Campus Placements: Top MNCs Hire at IMEC',
    subtitle: 'Over 85% placement record with prominent recruitment partners including TCS, Infosys, Hexaware, Cognizant, and Wipro.',
    tag: 'Training & Placement Cell',
    primaryAction: 'Placement Statistics',
    secondaryAction: 'Admissions 2026-27',
    badge: 'Highest Package: 7.09 LPA',
    accentColor: 'from-amber-950/90 to-blue-950/90',
  },
  {
    id: 4,
    title: 'Holistic Student Life, Clubs & Sports Complex',
    subtitle: 'A vibrant 35-acre green campus equipped with digital library, modern auditoriums, residential hostels, and active technical societies.',
    tag: 'Campus Experience',
    primaryAction: 'Student Corner',
    secondaryAction: 'Apply Online',
    badge: '35+ Acres Smart Campus',
    accentColor: 'from-slate-950/90 to-blue-900/90',
  },
];

export const PLACED_STUDENTS: PlacedStudent[] = [
  {
    id: 'p1',
    name: 'Priyanshu Tiwari',
    branch: 'B.Tech - CSE',
    company: 'Hexaware Technologies',
    package: '7.09 LPA',
    batch: 'Batch 2025-26',
    avatarSeed: 'priyanshu',
    role: 'Associate Software Engineer',
  },
  {
    id: 'p2',
    name: 'Ananya Sharma',
    branch: 'B.Tech - CSE',
    company: 'Cognizant',
    package: '6.50 LPA',
    batch: 'Batch 2025-26',
    avatarSeed: 'ananya',
    role: 'Programmer Analyst',
  },
  {
    id: 'p3',
    name: 'Rohan Vishwakarma',
    branch: 'B.Tech - Mechanical',
    company: 'Larsen & Toubro (L&T)',
    package: '5.80 LPA',
    batch: 'Batch 2025-26',
    avatarSeed: 'rohan',
    role: 'Graduate Engineer Trainee',
  },
  {
    id: 'p4',
    name: 'Divya Rajput',
    branch: 'B.Tech - ECE',
    company: 'Tata Consultancy Services',
    package: '5.50 LPA',
    batch: 'Batch 2025-26',
    avatarSeed: 'divya',
    role: 'System Engineer',
  },
  {
    id: 'p5',
    name: 'Aditya Sen',
    branch: 'MBA (Marketing & Fin)',
    company: 'Reliance Retail Ltd',
    package: '5.25 LPA',
    batch: 'Batch 2025-26',
    avatarSeed: 'aditya',
    role: 'Assistant Store Manager',
  },
  {
    id: 'p6',
    name: 'Shraddha Jain',
    branch: 'B.Tech - CSE',
    company: 'Wipro Technologies',
    package: '5.00 LPA',
    batch: 'Batch 2025-26',
    avatarSeed: 'shraddha',
    role: 'Project Engineer',
  },
  {
    id: 'p7',
    name: 'Aman Khan',
    branch: 'B.Tech - Civil',
    company: 'Shapoorji Pallonji',
    package: '4.80 LPA',
    batch: 'Batch 2025-26',
    avatarSeed: 'aman',
    role: 'Site Quality Engineer',
  },
  {
    id: 'p8',
    name: 'Neha Chaurasia',
    branch: 'B.Tech - CSE',
    company: 'Capgemini India',
    package: '4.75 LPA',
    batch: 'Batch 2025-26',
    avatarSeed: 'neha',
    role: 'Software Analyst',
  },
];

export const RECRUITERS = [
  { name: 'Hexaware', tier: 'Global Tech', package: '7.09 LPA' },
  { name: 'Cognizant', tier: 'Fortune 500', package: '6.50 LPA' },
  { name: 'TCS', tier: 'Tata Group', package: '5.50 LPA' },
  { name: 'Infosys', tier: 'IT Major', package: '5.20 LPA' },
  { name: 'Wipro', tier: 'Global IT', package: '5.00 LPA' },
  { name: 'Capgemini', tier: 'Consulting', package: '4.75 LPA' },
  { name: 'L&T', tier: 'Infrastructure', package: '5.80 LPA' },
  { name: 'Tech Mahindra', tier: 'Telecom & AI', package: '4.50 LPA' },
  { name: 'HCL Technologies', tier: 'Enterprise', package: '4.75 LPA' },
  { name: 'Reliance', tier: 'Retail & Fin', package: '5.25 LPA' },
  { name: 'Collabera', tier: 'Staffing Major', package: '4.20 LPA' },
  { name: 'Byju’s', tier: 'EdTech', package: '6.00 LPA' },
];

export const LATEST_NOTICES: Notice[] = [
  {
    id: 'n1',
    title: 'Notification regarding B.Tech/Diploma Even Semester Examination Form 2026',
    date: 'Oct 08, 2026',
    category: 'Examination',
    isNew: true,
    content: 'Students enrolled in B.Tech (II, IV, VI, VIII) and Diploma (II, IV, VI) semesters are advised to fill out their university exam forms via RGPV portal before October 25, 2026 without late fee. Forward verified slips to Student Section.',
    pdfName: 'RGPV_Exam_Form_Notice_Oct2026.pdf',
  },
  {
    id: 'n2',
    title: 'Pool Campus Drive by Hexaware Technologies & Collabera for 2026 Passing Out Batch',
    date: 'Oct 05, 2026',
    category: 'Placement',
    isNew: true,
    content: 'T&P Cell is organizing an on-campus recruitment drive for final year B.Tech (CSE/ECE/ME) and MBA students on October 28-29, 2026. Dress code: Formal with updated resumes and passport photos.',
    pdfName: 'Placement_Drive_Hexaware_Schedule.pdf',
  },
  {
    id: 'n3',
    title: 'State Level Inter-College Cricket & Badminton Tournament "Spardha 2026"',
    date: 'Sep 29, 2026',
    category: 'Sports & Events',
    isNew: false,
    content: 'Annual sports meet will be held from November 12-16, 2026 at IMEC Sports Complex. Department coordinators are requested to submit team rosters to the Sports Officer before October 30.',
    pdfName: 'Spardha_2026_Rulebook.pdf',
  },
  {
    id: 'n4',
    title: 'Workshop on Cyber Security, Ethical Hacking & Digital Forensics in collaboration with Cyber Peace Foundation',
    date: 'Sep 22, 2026',
    category: 'Academic',
    isNew: false,
    content: 'Three-day hands-on workshop scheduled from November 4 to 6, 2026. Practical training on penetration testing, CTF challenges, and vulnerability assessment. Certificates will be awarded.',
    pdfName: 'Cyber_Security_Workshop_Brochure.pdf',
  },
  {
    id: 'n5',
    title: 'NSS Blood Donation Camp & Tree Plantation Drive on World Health Awareness Week',
    date: 'Sep 15, 2026',
    category: 'Circular',
    isNew: false,
    content: 'National Service Scheme (NSS) unit of IMEC is organizing voluntary blood donation in collaboration with District Hospital Sagar on October 18, 2026 at the Main Auditorium.',
    pdfName: 'NSS_Drive_Oct2026.pdf',
  },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'tr1',
    title: 'Hands-on Artificial Intelligence, Deep Learning & Generative AI Workshop',
    duration: '40 Hours / 4 Weeks',
    instructor: 'Dr. Vivek Saxena & Industry Mentors',
    industryPartner: 'AWS Academy & NVIDIA DLI',
    description: 'Comprehensive curriculum covering neural network architecture, computer vision, natural language processing, and prompt engineering.',
    topics: ['Python for Data Science', 'PyTorch & TensorFlow', 'Computer Vision Pipelines', 'LLM Deployment', 'Capstone Project'],
    enrollmentStatus: 'Open',
  },
  {
    id: 'tr2',
    title: 'Cyber Security, Network Defense & Ethical Hacking Track',
    duration: '35 Hours / 3 Weeks',
    instructor: 'Prof. Animesh Chourasia & Certified CEH Experts',
    industryPartner: 'Cyber Peace Foundation',
    description: 'Hands-on penetration testing, packet analysis with Wireshark, OWASP Top 10 web vulnerabilities, and incident response.',
    topics: ['Kali Linux Mastery', 'Port Scanning & Recon', 'Web Exploit Defense', 'Cryptography & Zero Trust', 'Bug Bounty Frameworks'],
    enrollmentStatus: 'Open',
  },
  {
    id: 'tr3',
    title: 'Intellectual Property Rights (IPR) Awareness & Patent Filing Clinic',
    duration: '15 Hours / 2 Weeks',
    instructor: 'Patent Attorney Adv. M. K. Shrivastava',
    industryPartner: 'National IP Literacy Mission (NIPAM)',
    description: 'Practical training on patent drafting, prior art search, design registrations, copyright laws, and monetizing collegiate engineering patents.',
    topics: ['Patent Search Databases', 'Patent Claims Drafting', 'Design Registration', 'Trade Secrets & Trademarks', 'Commercialization'],
    enrollmentStatus: 'Upcoming',
  },
  {
    id: 'tr4',
    title: 'Full Stack Web & Cloud Microservices Bootcamp',
    duration: '60 Hours / 6 Weeks',
    instructor: 'Er. Sandeep Patel (Ex-Infosys Architect)',
    industryPartner: 'Red Hat Academy',
    description: 'From React and Node.js microservices to Docker containers, Kubernetes orchestration, and CI/CD pipelines.',
    topics: ['TypeScript & Next.js', 'PostgreSQL & MongoDB', 'REST & GraphQL APIs', 'Docker & Kubernetes', 'Cloud Deployment'],
    enrollmentStatus: 'Ongoing',
  },
];

export const DEPARTMENTS: Record<string, DepartmentDetail> = {
  cse: {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortCode: 'CSE',
    headOfDept: 'Dr. Rajendra Kumar Gupta, Ph.D. (IIT Roorkee)',
    tagline: 'Architecting Future Computing Paradigms with AI, Cloud & Cyber Defense',
    about: 'The Department of Computer Science & Engineering at IMEC Sagar was established in 2008 with a mission to deliver top-tier computing education. The department blends theoretical computer science with experiential labs in Artificial Intelligence, Cloud Computing, Cyber Security, and Mobile Application Development.',
    mission: [
      'To provide state-of-the-art computational infrastructure and progressive pedagogy for global competence.',
      'To foster research, intellectual property generation, and entrepreneurship in cutting-edge software domains.',
      'To cultivate ethical values, leadership qualities, and social accountability among computer technocrats.',
    ],
    vision: 'To emerge as a nationally recognized center of computational brilliance, producing ethically responsible software leaders and innovators.',
    courses: [
      { name: 'B.Tech in Computer Science & Engineering', level: 'Undergraduate', duration: '4 Years (8 Semesters)', intake: 120, eligibility: '10+2 with Physics, Mathematics & Chemistry/CS with min 45% + JEE Main / MP DTE Counseling' },
      { name: 'B.Tech in CSE (Artificial Intelligence & ML)', level: 'Undergraduate', duration: '4 Years (8 Semesters)', intake: 60, eligibility: '10+2 with PCM with min 45% + MP DTE Counseling' },
      { name: 'M.Tech in Computer Science & Engineering', level: 'Postgraduate', duration: '2 Years (4 Semesters)', intake: 18, eligibility: 'B.E./B.Tech in CSE/IT with min 50% marks + GATE / Non-GATE DTE Counseling' },
      { name: 'Polytechnic Diploma in CSE', level: 'Diploma', duration: '3 Years (6 Semesters)', intake: 60, eligibility: '10th Passed with Science & Maths with min 35% marks' },
    ],
    labs: [
      { name: 'AI & Deep Learning Computing Lab', equipment: 'High-end NVIDIA RTX GPU Workstations, Jupyter Hub, Anaconda Cloud', description: 'Dedicated computational cluster for training machine learning models and computer vision applications.' },
      { name: 'Advanced Software Engineering Lab', equipment: '120 Core i7 Terminals, Gigabit LAN, Git, Docker & VS Code Enterprise', description: 'Hands-on laboratory for software design, testing, continuous integration, and database architecture.' },
      { name: 'Cyber Defense & Network Security Lab', equipment: 'Hardware Cisco Routers & Switches, Wireshark, Kali Linux, Firewall Appliances', description: 'Simulated enterprise network environments for vulnerability analysis and ethical hacking challenges.' },
      { name: 'Cloud Computing & IoT Systems Lab', equipment: 'Raspberry Pi 4, Arduino Mega, ESP32, Sensor kits, AWS Educate Cloud Access', description: 'Platform for developing smart embedded devices and real-time cloud analytics.' },
    ],
    placements: {
      highestPackage: '7.09 LPA',
      avgPackage: '4.80 LPA',
      topCompanies: ['Hexaware', 'Cognizant', 'TCS', 'Infosys', 'Wipro', 'Capgemini'],
      placementRate: '92%',
    },
  },
  me: {
    id: 'me',
    name: 'Mechanical Engineering',
    shortCode: 'ME',
    headOfDept: 'Prof. Harishankar Mishra, M.Tech (NIT Bhopal)',
    tagline: 'Pioneering Automation, Thermal Engineering & Precision Manufacturing',
    about: 'Mechanical Engineering is the bedrock of modern industrial civilization. The department at IMEC Sagar features heavy machinery workshops, CNC machines, thermal engineering test rigs, and modern CAD/CAM software suites.',
    mission: [
      'To provide deep conceptual grounding in mechanics, thermodynamics, fluid dynamics, and materials.',
      'To bridge industrial requirements with practical machine shop experience and CAD/CAM proficiency.',
      'To inspire sustainable green manufacturing practices and energy-efficient vehicle design.',
    ],
    vision: 'To produce versatile mechanical engineers capable of solving complex societal challenges in automation, energy, and robotics.',
    courses: [
      { name: 'B.Tech in Mechanical Engineering', level: 'Undergraduate', duration: '4 Years (8 Semesters)', intake: 60, eligibility: '10+2 with PCM with min 45% + MP DTE Counseling' },
      { name: 'M.Tech in Thermal Engineering / Machine Design', level: 'Postgraduate', duration: '2 Years (4 Semesters)', intake: 18, eligibility: 'B.E./B.Tech in Mechanical/Automobile with min 50%' },
      { name: 'Polytechnic Diploma in Mechanical Engg', level: 'Diploma', duration: '3 Years (6 Semesters)', intake: 60, eligibility: '10th Passed with min 35% marks' },
    ],
    labs: [
      { name: 'Central Workshop & Machine Shop', equipment: 'Heavy Lathes, Milling Machines, Shapers, Radial Drilling, TIG/MIG Welding', description: 'Spacious 8,000 sq ft workshop for fitting, carpentry, blacksmithy, welding, and machine operations.' },
      { name: 'CAD / CAM & Simulation Lab', equipment: 'SolidWorks, AutoCAD 2026, ANSYS, CNC Lathe Trainer', description: 'High-speed CAD design studio for finite element analysis and computerized machining.' },
      { name: 'Thermal Engineering & IC Engines Lab', equipment: 'Computerized Multi-Cylinder Petrol & Diesel Engine Test Rigs, Bomb Calorimeter', description: 'Evaluation of engine performance, emissions, heat transfer, and refrigeration cycles.' },
      { name: 'Fluid Mechanics & Hydraulics Machinery Lab', equipment: 'Pelton Turbine, Francis Turbine, Venturi Meter, Reynolds Apparatus', description: 'Fluid flow testing and hydraulic power generation test setups.' },
    ],
    placements: {
      highestPackage: '5.80 LPA',
      avgPackage: '3.90 LPA',
      topCompanies: ['L&T', 'Shapoorji Pallonji', 'Tata Motors', 'Mahindra', 'Collabera'],
      placementRate: '82%',
    },
  },
  ce: {
    id: 'ce',
    name: 'Civil Engineering',
    shortCode: 'CE',
    headOfDept: 'Er. Alok Sharma, M.Tech (Structural Engg)',
    tagline: 'Building Resilient Infrastructure & Sustainable Urban Horizons',
    about: 'The Civil Engineering Department is committed to training structural planners, surveyors, and environmental engineers. Equipped with modern total stations, universal testing machines, soil mechanics labs, and concrete testing bays.',
    mission: [
      'To provide intensive practical training in structural mechanics, surveying, and material sciences.',
      'To instil green building philosophies, earthquake-resistant design, and water resource management.',
      'To prepare students for prestigious public and private sector civil infrastructure projects.',
    ],
    vision: 'To be a premier cradle of civil engineers creating durable, eco-friendly infrastructure for regional and national development.',
    courses: [
      { name: 'B.Tech in Civil Engineering', level: 'Undergraduate', duration: '4 Years (8 Semesters)', intake: 60, eligibility: '10+2 with PCM with min 45% + MP DTE Counseling' },
      { name: 'Polytechnic Diploma in Civil Engineering', level: 'Diploma', duration: '3 Years (6 Semesters)', intake: 60, eligibility: '10th Passed with min 35% marks' },
    ],
    labs: [
      { name: 'Advanced Surveying & Geomatics Lab', equipment: 'Electronic Total Stations, Digital Theodolites, Auto Levels, GPS Handhelds', description: 'Field measurement, topographic contouring, and satellite geodetic survey.' },
      { name: 'Strength of Materials & Concrete Tech Lab', equipment: '1000 kN Universal Testing Machine (UTM), Compression Testing, Torsion Tester', description: 'Testing compressive, tensile, and shear strengths of construction steels and concretes.' },
      { name: 'Soil Mechanics & Geotechnical Lab', equipment: 'Direct Shear Apparatus, Triaxial Test, Standard Proctor Compaction, Core Cutters', description: 'Soil bearing capacity and foundation engineering parameters analysis.' },
      { name: 'Environmental Engineering Lab', equipment: 'BOD Incubator, COD Digester, Turbidity Meter, Spectrophotometer', description: 'Water and wastewater quality testing and pollution mitigation studies.' },
    ],
    placements: {
      highestPackage: '5.20 LPA',
      avgPackage: '3.80 LPA',
      topCompanies: ['L&T Construction', 'Dilip Buildcon', 'Shapoorji Pallonji', 'Prism Johnson'],
      placementRate: '79%',
    },
  },
  ece: {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortCode: 'ECE',
    headOfDept: 'Dr. Sunita Patel, Ph.D. (MANIT Bhopal)',
    tagline: 'Bridging Hardware, Embedded Intelligence & Modern Telecommunication',
    about: 'The Department of ECE focuses on analog/digital systems, VLSI microelectronics, microwave communications, optical fiber networks, and embedded IoT controllers.',
    mission: [
      'To cultivate robust fundamentals in semiconductor electronics and signal processing.',
      'To provide hands-on experience in VLSI chip design, embedded microcontrollers, and wireless communications.',
      'To foster interdisciplinary innovation in robotics, automation, and 5G communication protocols.',
    ],
    vision: 'To achieve excellence in electronics, communications, and embedded technologies through practical education and industry alignment.',
    courses: [
      { name: 'B.Tech in Electronics & Communication Engg', level: 'Undergraduate', duration: '4 Years (8 Semesters)', intake: 60, eligibility: '10+2 with PCM with min 45% + MP DTE Counseling' },
      { name: 'M.Tech in VLSI & Embedded Systems', level: 'Postgraduate', duration: '2 Years (4 Semesters)', intake: 18, eligibility: 'B.E./B.Tech in ECE/EE/EI with min 50%' },
    ],
    labs: [
      { name: 'VLSI & Embedded Systems Design Lab', equipment: 'Xilinx Vivado, FPGA Development Boards, ARM Cortex-M4 Kits, Keil IDE', description: 'VHDL/Verilog synthesis, hardware modeling, and microcontroller programming.' },
      { name: 'Microwave & Optical Fiber Lab', equipment: 'Klystron Test Benches, Gunn Oscillator, Fiber Optic Trainer, Spectrum Analyzers', description: 'Microwave frequency measurements, waveguide attenuation, and high-speed optical links.' },
      { name: 'Digital Signal Processing (DSP) Lab', equipment: 'Texas Instruments TMS320C6713 Kits, MATLAB & Simulink, Digital Storage Oscilloscopes', description: 'Audio/video filtering, FFT implementation, and real-time algorithmic DSP.' },
      { name: 'Analog & Digital Communication Lab', equipment: 'AM/FM Modulation Kits, PAM/PPM/PWM Systems, Logic Analyzers', description: 'Baseband and passband communication architectures and constellation analysis.' },
    ],
    placements: {
      highestPackage: '5.50 LPA',
      avgPackage: '4.20 LPA',
      topCompanies: ['TCS', 'Cognizant', 'Tech Mahindra', 'Wipro', 'Bharat Electronics Limited'],
      placementRate: '86%',
    },
  },
  mba: {
    id: 'mba',
    name: 'Department of Management Studies',
    shortCode: 'MBA',
    headOfDept: 'Dr. Manish Verma, Ph.D. (IIM Indore Alum)',
    tagline: 'Developing Visionary Business Leaders, Strategists & Entrepreneurs',
    about: 'IMEC Department of Management Studies offers a prestigious two-year full-time MBA program affiliated to MCBU and approved by AICTE. We integrate case studies, corporate internships, live market simulations, and leadership bootcamps.',
    mission: [
      'To develop holistic managerial acumen with strong analytical and ethical foundations.',
      'To nurture entrepreneurial spirit and corporate-readiness through live business consulting.',
      'To offer specialized skill training in Financial Analytics, Digital Marketing, and Strategic HR.',
    ],
    vision: 'To be a premier business school transforming ambitious minds into responsible global business leaders.',
    courses: [
      { name: 'Master of Business Administration (MBA)', level: 'Postgraduate', duration: '2 Years (4 Semesters)', intake: 120, eligibility: 'Graduation in any stream with min 50% marks (45% for reserved category) + CMAT / MPMET Counseling' },
    ],
    labs: [
      { name: 'Business Simulation & Financial Analytics Lab', equipment: 'Bloomberg Terminals Simulation, Advanced Excel & SPSS, Power BI Suites', description: 'Financial modeling, stock market algorithmic analysis, and business analytics simulations.' },
      { name: 'Management Communication Studio', equipment: 'Smart Audio-Visual Recording, Podium Stage, Mock Interview Suites', description: 'Dedicated hub for corporate presentations, group discussions, and pitch training.' },
    ],
    placements: {
      highestPackage: '6.00 LPA',
      avgPackage: '4.50 LPA',
      topCompanies: ['Reliance Retail', 'HDFC Bank', 'ICICI Securities', 'Byju’s', 'Bajaj Finserv'],
      placementRate: '88%',
    },
  },
};

export const LEADERSHIP = [
  {
    role: 'Chairperson',
    name: 'Smt. Sudha Malaiya',
    credentials: 'Philanthropist, Social Visionary & Educationist',
    message: 'Infinity Group of Institutions was established with the pious objective of providing world-class professional education to the youth of Bundelkhand and Madhya Pradesh. Our graduates lead in major multinational corporations across the globe.',
  },
  {
    role: 'Group Director & Trustee',
    name: 'Er. Abhishek Malaiya',
    credentials: 'B.Tech, MBA, Visionary Edu-Entrepreneur',
    message: 'At IMEC, we do not simply impart textbook theories; we equip our engineering and management scholars with real industry capabilities, patents mindset, and leadership character.',
  },
  {
    role: 'Principal & Academic Head',
    name: 'Dr. P. K. Singh',
    credentials: 'Ph.D., M.Tech, FIE, 25+ Years Academic Leadership',
    message: 'Welcome to Infinity Management & Engineering College. Our outcome-based education system, vibrant clubs, and devoted faculty guarantee holistic personal transformation.',
  },
];

export const SCHOLARSHIPS_INFO = [
  {
    title: 'Post-Matric Scholarship Scheme (Govt. of MP)',
    beneficiary: 'SC / ST / OBC category students of Madhya Pradesh',
    benefit: 'Up to 100% Tuition Fee Reimbursement as per State Government Norms',
    eligibility: 'Annual parental income limit as per MP Govt Scholarship Portal criteria.',
  },
  {
    title: 'Mukhya Mantri Medhavi Vidyarthi Yojana (MMVY)',
    beneficiary: 'Meritorious students of MP Board (70%+) and CBSE (85%+)',
    benefit: 'Full Tuition Fee borne by Government of Madhya Pradesh',
    eligibility: 'Father/Guardian annual income less than 6.00 Lakhs per annum.',
  },
  {
    title: 'Infinity Merit & Sports Scholarship',
    beneficiary: 'Top rankers in JEE Main / 10+2 and National Sports Medalists',
    benefit: 'Special institutional concession of 25% to 50% on first-year tuition',
    eligibility: 'Direct evaluation by the Academic Advisory Board during admission.',
  },
  {
    title: 'Beti Padhao Institutional Concession',
    beneficiary: 'Single girl child and female engineering aspirants',
    benefit: 'Special annual scholarship grant of ₹10,000 per academic year',
    eligibility: 'Valid domicile certificate and regular academic attendance.',
  },
];

export const STUDENT_CLUBS = [
  {
    name: 'Infinity Coding & Open Source Club',
    domain: 'Software & Hackathons',
    lead: 'CSE Department',
    activities: 'Weekly Competitive Coding, Web3 workshops, Open-Source sprints, LeetCode challenges.',
  },
  {
    name: 'RoboKnights Robotics & IoT Guild',
    domain: 'Hardware & Automation',
    lead: 'ME & ECE Departments',
    activities: 'Line follower robots, Drone construction, IoT sensor arrays, participation in IIT Techfests.',
  },
  {
    name: 'Udaan Cultural & Fine Arts Society',
    domain: 'Performing Arts & Literature',
    lead: 'Central Student Council',
    activities: 'Annual College Fest "Udaan", Drama, Classical & Western Dance, Literary Debates, Photography.',
  },
  {
    name: 'Phoenix Sports & Athletics Club',
    domain: 'Sports & Fitness',
    lead: 'Department of Physical Education',
    activities: 'Cricket tournaments, Football league, Volleyball, Table Tennis, Badminton, Yoga sessions.',
  },
];

export const DIGITAL_NOTES = [
  {
    id: 'not1',
    subject: 'Data Structures & Algorithms (CS-301)',
    semester: 'Semester III',
    department: 'CSE',
    faculty: 'Prof. Animesh Chourasia',
    topics: 'Arrays, Stacks, Queues, Binary Trees, Graph Traversal, Dynamic Programming',
    pages: 142,
  },
  {
    id: 'not2',
    subject: 'Database Management Systems (CS-402)',
    semester: 'Semester IV',
    department: 'CSE',
    faculty: 'Dr. R. K. Gupta',
    topics: 'Relational Algebra, SQL Queries, Normalization, ACID Transactions, Indexing',
    pages: 118,
  },
  {
    id: 'not3',
    subject: 'Theory of Machines & Mechanisms (ME-401)',
    semester: 'Semester IV',
    department: 'Mechanical',
    faculty: 'Prof. Harishankar Mishra',
    topics: 'Kinematic Linkages, Gear Trains, Gyroscopic Couples, Balancing of Masses',
    pages: 164,
  },
  {
    id: 'not4',
    subject: 'Structural Analysis & RCC Design (CE-501)',
    semester: 'Semester V',
    department: 'Civil',
    faculty: 'Er. Alok Sharma',
    topics: 'Moment Distribution, Slope Deflection, Limit State RCC Beam & Column Design',
    pages: 180,
  },
  {
    id: 'not5',
    subject: 'Microprocessors & Microcontrollers (EC-502)',
    semester: 'Semester V',
    department: 'ECE',
    faculty: 'Dr. Sunita Patel',
    topics: '8086 Architecture, ARM Cortex Instructions, Interfacing ADC/DAC, Timers',
    pages: 135,
  },
  {
    id: 'not6',
    subject: 'Financial Management & Corporate Valuation (MBA-202)',
    semester: 'Semester II',
    department: 'MBA',
    faculty: 'Dr. Manish Verma',
    topics: 'Cost of Capital, Capital Budgeting, Working Capital, DCF Valuation',
    pages: 120,
  },
];

export const CAREER_OPENINGS = [
  {
    id: 'car1',
    title: 'Assistant Professor - Computer Science & Engineering',
    dept: 'Department of CSE',
    qualification: 'M.Tech / Ph.D. in CSE or IT with min 2 years teaching experience',
    type: 'Full-Time Regular',
    deadline: 'October 30, 2026',
  },
  {
    id: 'car2',
    title: 'Associate Professor - Mechanical & Robotics Engineering',
    dept: 'Department of ME',
    qualification: 'Ph.D. in Mechanical / Automation with published SCI journal papers',
    type: 'Full-Time Regular',
    deadline: 'November 05, 2026',
  },
  {
    id: 'car3',
    title: 'Corporate Placement & Soft-Skills Trainer',
    dept: 'Training & Placement Cell',
    qualification: 'MBA / MA with demonstrated corporate training and aptitude coaching record',
    type: 'Full-Time Regular',
    deadline: 'October 25, 2026',
  },
  {
    id: 'car4',
    title: 'Technical Lab Assistant - AI & Cloud Computing',
    dept: 'Department of CSE',
    qualification: 'Diploma / B.Sc in CS or BCA with Linux and Networking experience',
    type: 'Full-Time Regular',
    deadline: 'October 31, 2026',
  },
];
