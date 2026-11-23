export const personalInfo = {
  name: 'Thet Naing Oo',
  shortName: 'TNO',
  yearLabel: '2026 Portfolio',
  roleLine:
    'Digital Technology & Innovation Student | Aspiring Software Engineer | Data Analyst | Data Science Enthusiast',
  headline:
    'Building practical web systems and exploring data-driven solutions to real-world problems.',
  intro:
    'Third-year B.Sc. Digital Technology & Innovation undergraduate at Kasem Bundit University, Thailand. I bridge full-stack web development with Python-based data analysis and data science fundamentals.',
  location: 'Bangkok, Thailand',
  university: 'Kasem Bundit University, Thailand',
  degree: 'Bachelor of Science in Digital Technology & Innovation',
  gpa: '3.62 / 4.00',
  academicLevel: 'Third Year, Second Semester',
  expectedGraduation: 'February 2028',
  // Replace with your preferred email address
  email: 'thetnaingoo.contact@example.com',
  emailIsPlaceholder: true,
  github: 'https://github.com/ThetNaingOo2004',
  githubHandle: 'ThetNaingOo2004',
  linkedin: 'https://www.linkedin.com/in/thet-naing-oo-7393ba28a',
  linkedinHandle: 'thet-naing-oo',
  // Use "./assets/..." if deploying to /portfolio/ on GitHub Pages
  profileImage: './assets/profile-placeholder.svg',
  cvUrl: null,
};

export const aboutContent = {
  lead: 'I approach technology from two complementary angles: engineering reliable software systems and using data to understand how those systems—and the problems behind them—actually behave.',
  paragraphs: [
    'As a third-year undergraduate in Digital Technology & Innovation at Kasem Bundit University (GPA 3.62/4.00), much of my learning happens outside lecture slides—by building real web applications, structuring relational databases, and writing Python code to explore and interpret datasets.',
    'Over the past few years, I have developed community platforms, e-commerce workflows, and personal finance tools using PHP, MySQL, JavaScript, and modern CSS frameworks, while expanding into Django, Laravel, and React. Completing IBM’s Data Science with Python course on Coursera further sharpened my analytical foundation and confirmed my interest in combining software engineering with data science.',
    'Looking ahead to graduation in February 2028, I am actively preparing for international research programs, technical internships, and collaborative engineering environments where I can keep learning and contribute to meaningful, well-built projects.',
  ],
  highlights: [
    { label: 'Current Level', value: 'Year 3, Sem 2' },
    { label: 'Cumulative GPA', value: '3.62 / 4.00' },
    { label: 'Expected Graduation', value: 'Feb 2028' },
    { label: 'Focus Areas', value: 'Software & Data' },
  ],
};

export const skillCategories = [
  {
    id: 'languages',
    index: '01',
    title: 'Programming Languages',
    note: 'Core languages used across coursework, web applications, and data exploration.',
    items: ['Python', 'PHP', 'JavaScript'],
  },
  {
    id: 'frontend',
    index: '02',
    title: 'Frontend Development',
    note: 'Responsive interfaces, semantic structure, and component-driven UI.',
    items: ['HTML5', 'CSS3', 'React', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    index: '03',
    title: 'Backend Development',
    note: 'Server-side architecture, routing, authentication, and business logic.',
    items: ['Laravel', 'Django', 'PHP'],
  },
  {
    id: 'data',
    index: '04',
    title: 'Data Analysis & Data Science',
    note: 'Foundational skills developed through academic study and IBM Coursera coursework.',
    items: [
      'Data analysis with Python',
      'Data exploration and interpretation',
      'Data-driven problem-solving',
      'Data science fundamentals',
      'Analytical thinking',
      'Data visualization fundamentals',
    ],
  },
  {
    id: 'database',
    index: '05',
    title: 'Database',
    note: 'Relational schema design, structured queries, and transactional data management.',
    items: ['MySQL'],
  },
  {
    id: 'tools',
    index: '06',
    title: 'Tools & Workflow',
    note: 'Version control, local server environments, and day-to-day development setup.',
    items: ['Git', 'GitHub', 'VS Code', 'XAMPP'],
  },
];

export const capabilities = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development & Digital Experiences',
    eyebrow: 'Frontend & Interface Engineering',
    summary:
      'I build responsive websites, interactive user interfaces, and web experiences with a focus on usability, functionality, and clean design.',
    deliverables: [
      'Responsive multi-device layouts',
      'Interactive, accessible user interfaces',
      'Clean component-based frontend architecture',
      'Fast, readable editorial and business websites',
    ],
    technologies: ['HTML5 & CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
    relatedProjects: [
      { title: 'Vanta Tech', href: '#projects' },
      { title: 'Afaaf Store', href: '#projects' },
      { title: "Myanmar Da'wah Center", href: '#projects' },
    ],
    accent: 'light',
  },
  {
    id: 'backend-systems',
    number: '02',
    title: 'Backend Development & Application Systems',
    eyebrow: 'Server Logic & Relational Data',
    summary:
      'I develop functional systems behind websites, including business logic, data processing, database integration, and application features.',
    deliverables: [
      'CRUD applications & database-driven websites',
      'Authentication systems & admin dashboards',
      'E-commerce functionality & inventory management',
      'API integrations (e.g., automated Telegram notifications)',
    ],
    technologies: ['PHP', 'Laravel', 'Django', 'MySQL'],
    relatedProjects: [
      { title: 'Afaaf Store', href: '#projects' },
      { title: "Myanmar Da'wah Center", href: '#projects' },
      { title: 'Expense Tracker', href: '#projects' },
    ],
    accent: 'light',
  },
  {
    id: 'data-analysis',
    number: '03',
    title: 'Data Analysis & Data Science',
    eyebrow: 'Analytical Foundation · IBM Coursera (2026)',
    summary:
      'I am interested in understanding data, identifying patterns, extracting meaningful insights, and using analytical approaches to support decision-making. I completed IBM’s Data Science with Python coursework through Coursera.',
    deliverables: [
      'Data analysis fundamentals',
      'Data exploration & interpretation',
      'Data visualization fundamentals',
      'Data-driven problem-solving',
    ],
    technologies: ['Python', 'Data Analysis Fundamentals', 'Data Exploration', 'Data Visualization Fundamentals'],
    relatedProjects: [],
    note: 'Developing foundational analytical skills through university coursework and IBM’s Data Science with Python program.',
    accent: 'navy',
  },
  {
    id: 'workflow-tools',
    number: '04',
    title: 'Development Workflow & Tools',
    eyebrow: 'Build, Debug & Maintain',
    summary:
      'I use development tools to build, debug, manage, and maintain projects efficiently from local testing to live deployment.',
    deliverables: [
      'Version control & collaborative repositories',
      'Local server & database testing environments',
      'Structured debugging and troubleshooting',
    ],
    technologies: [
      'Git & GitHub',
      'VS Code',
      'XAMPP',
      'Local development environments',
      'Debugging and troubleshooting',
    ],
    relatedProjects: [],
    accent: 'light',
  },
];

export const projects = [
  {
    id: 'myanmar-dawah',
    number: '01',
    title: "Myanmar Da'wah Center",
    category: 'Community Web Platform',
    context: 'Live Production Platform',
    overview:
      'A community-focused Islamic platform designed to provide structured educational resources and facilitate meaningful community engagement across events and Q&A.',
    features: [
      'Islamic events listing & scheduling',
      'Community Q&A portal',
      'Subscriber notifications',
      'Organized community resources',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://myanmardawah.com',
    githubUrl: null,
    image: null,
    visualType: 'dawah',
    layout: 'featured',
  },
  {
    id: 'afaaf-store',
    number: '02',
    title: 'Afaaf Store',
    category: 'E-Commerce & POS System',
    context: 'Previous Project',
    overview:
      'An end-to-end e-commerce and point-of-sale platform developed for modest fashion products, unifying storefront checkout with live inventory and automated order alerts.',
    features: [
      'Product management',
      'Inventory management',
      'Product variants',
      'Online checkout',
      'Telegram order notifications',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://afaaf.store',
    githubUrl: null,
    image: null,
    visualType: 'afaaf',
    layout: 'split-left',
  },
  {
    id: 'vanta-tech',
    number: '03',
    title: 'Vanta Tech',
    category: 'Digital & Educational Services',
    context: 'Web Presence',
    overview:
      'A technology and educational services website focused on clearly presenting digital service offerings and educational initiatives with fast, lightweight frontend delivery.',
    features: [
      'Clear presentation of digital services',
      'Educational offerings showcase',
      'Responsive multi-device layout',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://vantatech.site',
    githubUrl: null,
    image: null,
    visualType: 'vanta',
    layout: 'split-right',
  },
  {
    id: 'expense-tracker',
    number: '04',
    title: 'Expense Tracker',
    category: 'Personal Finance Application',
    context: 'Full-Stack Web Application',
    overview:
      'A personal finance management application built to record, filter, and audit income and expenses with secure user accounts and exportable financial statements.',
    features: [
      'Income and expense tracking',
      'User authentication',
      'Transaction management',
      'Multi-criteria filtering',
      'PDF export',
    ],
    tech: ['PHP', 'MySQL', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
    image: null,
    visualType: 'expense',
    layout: 'wide',
  },
];

export const educationList = [
  {
    institution: 'Kasem Bundit University',
    location: 'Thailand',
    credential: 'Bachelor of Science in Digital Technology & Innovation',
    period: 'Expected Graduation: February 2028',
    status: 'Third Year, Second Semester',
    metric: 'GPA: 3.62 / 4.00',
    details:
      'Coursework focused on software development, web technologies, databases, algorithms, and analytical problem-solving.',
  },
  {
    institution: 'KMD Institute',
    location: 'Web Development Program',
    credential: 'Diploma in Web Development',
    period: '2023',
    status: 'Completed',
    metric: null,
    details:
      'Foundational training in full-stack web design, database-backed development, and practical project delivery.',
  },
];

export const certificationsList = [
  {
    title: 'Data Science with Python',
    issuer: 'IBM via Coursera',
    year: '2026',
    highlight: true,
    note: 'Strengthened practical foundation in Python, data analysis workflows, exploratory interpretation, and data-oriented problem-solving.',
  },
  {
    title: 'Intermediate English',
    issuer: 'The SPACE Language School',
    year: '2024',
    highlight: false,
    note: 'Structured academic and professional English communication training.',
  },
];

export const researchInterests = [
  {
    name: 'Data Analysis',
    area: 'Analytical',
    description: 'Structuring, cleaning, and interpreting datasets to uncover clear, actionable patterns.',
  },
  {
    name: 'Data Visualization',
    area: 'Analytical',
    description: 'Communicating quantitative findings clearly through thoughtful visual representation.',
  },
  {
    name: 'Data Science',
    area: 'Analytical',
    description: 'Combining statistical reasoning with computational tools to investigate real-world questions.',
  },
  {
    name: 'Python for Data Analysis',
    area: 'Technical',
    description: 'Using Python workflows for exploratory analysis, scripting, and reproducible notebooks.',
  },
  {
    name: 'Artificial Intelligence',
    area: 'Emerging',
    description: 'Exploring intelligent systems and how AI methods can augment human decision-making.',
  },
  {
    name: 'Machine Learning',
    area: 'Emerging',
    description: 'Building foundational understanding of predictive modeling and data-driven learning systems.',
  },
  {
    name: 'Software Engineering',
    area: 'Engineering',
    description: 'Designing maintainable architectures, clean interfaces, and dependable backend logic.',
  },
  {
    name: 'Web Application Development',
    area: 'Engineering',
    description: 'Creating accessible, responsive, database-driven web platforms from concept to deployment.',
  },
  {
    name: 'Technology for Community Impact',
    area: 'Purpose',
    description: 'Applying software and analytical tools to educational and community-centered initiatives.',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
];