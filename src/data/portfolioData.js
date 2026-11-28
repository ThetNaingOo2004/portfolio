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
  email: 'thetnaingoo1224@gmail.com',
  emailIsPlaceholder: true,
  github: 'https://github.com/ThetNaingOo2004',
  githubHandle: 'ThetNaingOo2004',
  linkedin: 'https://www.linkedin.com/in/thet-naing-oo-7393ba28a',
  linkedinHandle: 'thet-naing-oo',
  // Use "./assets/..." if deploying to /portfolio/ on GitHub Pages
  profileImage: './assets/profile.png',
  cvUrl: './assets/Thet_Naing_Oo_CV.pdf',
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
    id: 'languages-spoken',
    title: 'Languages',
    text: 'Native in Burmese; fluent in English, Urdu and Rohingya; basic proficiency in Arabic and Thai',
    items: [
      'Burmese (Native)',
      'English (Fluent)',
      'Urdu (Fluent)',
      'Rohingya (Fluent)',
      'Arabic (Basic)',
      'Thai (Basic)',
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    text: 'JavaScript, PHP, Python; MySQL, HTML, CSS, Bootstrap, Tailwind CSS',
    items: ['JavaScript', 'PHP', 'Python', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: 'backend-api',
    title: 'Backend & API Development',
    text: 'RESTful API Development, API Integration, Microservices Architecture',
    items: ['RESTful API Development', 'API Integration', 'Microservices Architecture'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    text: 'Docker & Containerization, Cloud-Native Application Concepts, Software Architecture',
    items: [
      'Docker & Containerization',
      'Cloud-Native Application Concepts',
      'Software Architecture',
    ],
  },
  {
    id: 'frameworks-tools',
    title: 'Frameworks & Tools',
    text: 'React, Django, Laravel, Git, GitHub, VS Code, Telegram bot notifications; data science fundamentals',
    items: [
      'React',
      'Django',
      'Laravel',
      'Git',
      'GitHub',
      'VS Code',
      'Telegram bot notifications',
      'Data science fundamentals',
    ],
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
    title: 'Development Workflow, Deployment & Tools',
    eyebrow: 'Build, Deploy & Maintain',
    summary:
      'I manage projects from local development to live production—handling version control, hosting setup, domain configuration, and ongoing maintenance.',
    deliverables: [
      'Self-managed web hosting & live deployment on Namecheap',
      'Domain, DNS, SSL, and production MySQL database setup',
      'Version control & collaborative repositories (Git & GitHub)',
      'Local server testing, debugging, and troubleshooting',
    ],
    technologies: [
      'Namecheap Hosting / cPanel',
      'Website Deployment',
      'Git & GitHub',
      'VS Code',
      'XAMPP',
      'Debugging & Troubleshooting',
    ],
    relatedProjects: [
      { title: "Myanmar Da'wah Center", href: '#projects' },
      { title: 'Afaaf Store', href: '#projects' },
      { title: 'Vanta Tech', href: '#projects' },
    ],
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

export const academicProjects = [
  {
    id: 'se-coursework',
    course: 'Software Engineering',
    format: 'Documentation & System Design',
    status: 'In Progress',
    summary:
      'Formal software engineering documentation covering requirements analysis, system architecture, and structured design specifications.',
    deliverables: ['SRS Documentation', 'System Diagrams', 'Architecture Planning'],
    // Keep null while repo is private; paste your GitHub repo URL once public
    githubUrl: null,
  },
  {
    id: 'special-topic-app-dev',
    course: 'Special Topic in Application Development',
    format: 'Practical Implementation',
    status: 'In Progress',
    summary:
      'Hands-on application development project focused on practical software engineering, feature implementation, and clean architecture.',
    deliverables: ['Application Build', 'Feature Implementation', 'Testing'],
    githubUrl: null,
  },
  {
    id: 'dti-innovation-project',
    course: 'Digital Technology Innovation Project',
    format: 'Research Paper + Practical Build',
    status: 'In Progress',
    summary:
      'Combined academic research and practical software development project exploring technology-driven solutions.',
    deliverables: ['Research Paper', 'Working Prototype', 'Technical Evaluation'],
    githubUrl: null,
  },
  {
    id: 'dsa-coursework',
    course: 'Data Structures & Algorithms',
    format: 'Practical Implementation',
    status: 'In Progress',
    summary:
      'Practical coursework focused on implementing core data structures, analyzing time and space complexity, and solving algorithmic problems.',
    deliverables: ['Data Structures', 'Algorithmic Problem-Solving', 'Complexity Analysis'],
    githubUrl: null,
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
    title: 'IBM Data Science with Python Certificate',
    issuer: 'Coursera',
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