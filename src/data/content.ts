export const heroData = {
  image: "/assets/images/profile-photo.png"
};

export const aboutData = {
  education: [
    {
      degree: "Bachelor of Science",
      field: "Computer Science & Engineering",
      institution: "Pundra University of Science & Technology, Bogura, Bangladesh",
      period: "May 2018 – Dec 2022",
      score: "Final Grade: 3.40 / 4.00"
    },
    {
      degree: "Higher Secondary School Certificate",
      field: "Science",
      institution: "Government Azizul Haque College, Bogura",
      period: "2014 – 2016",
      score: "Final Grade: 5.00 / 5.00"
    },
    {
      degree: "Secondary School Certificate",
      field: "Science",
      institution: "SOS Hermann Gmeiner College, Bogura",
      period: "2012 – 2014",
      score: "Final Grade: 5.00 / 5.00"
    }
  ],
  work: [
    {
      role: "Web Developer",
      company: "",
      period: "Nov 2023 – Dec 2024",
      responsibilities: [
        "Developed responsive interfaces using HTML, CSS, and JavaScript.",
        "Integrated front-end applications with RESTful APIs.",
        "Collaborated with designers and backend developers."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "",
      period: "May 2023 – Oct 2023",
      responsibilities: [
        "Assisted in UI development and bug fixing.",
        "Participated in Agile workflows and code reviews.",
        "Contributed to front-end feature development and testing."
      ]
    }
  ],
  description: "I'm passionate about turning raw data into meaningful insights and building intelligent, real-world solutions using modern algorithms and automation."
};

export const projectsData = [
  {
    id: 1,
    title: "VisionGuard",
    category: "Computer Vision • Object Detection",
    year: "2024",
    description: "Real-time object detection application using YOLOv8 and OpenCV. Originally developed as an undergraduate project and redeveloped with a modular architecture for inference, training, and evaluation.",
    github: "https://github.com/shaownXjony/visionguard",
    technologies: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "AI Crisis Tweet Classifier",
    category: "Machine Learning • NLP",
    year: "2024",
    description: "Streamlit web app using Machine Learning (Linear SVM + TF-IDF) to automatically classify tweets during crisis events as either informative or not informative.",
    github: "https://github.com/shaownXjony/AI-Crisis-Tweet-Classifier",
    technologies: ["Python", "Streamlit", "Scikit-learn", "NLP"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Global CO₂ Dashboard",
    category: "Data Analytics • Visualization",
    year: "2024",
    description: "Interactive web dashboard for visualizing historical global CO₂ emissions and related indicators. Features dynamic filtering and GDP correlation analysis.",
    github: "https://github.com/shaownXjony/global-co2-dashboard",
    technologies: ["Python", "Plotly", "Dash", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "Adult Income ML",
    category: "Machine Learning • Data Science",
    year: "2025",
    description: "Machine learning project for predicting adult income based on demographic features. Built as part of OSTAD Academy's Data Science and Machine Learning course.",
    github: "https://github.com/shaownXjony/adult-income-ml",
    technologies: ["Python", "Scikit-learn", "Pandas", "ML"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    title: "CS50 Final Project",
    category: "Web Development • Python",
    year: "2025",
    description: "Final project submission for Harvard's CS50 course. Demonstrates proficiency in Python programming and software development principles.",
    github: "https://github.com/shaownXjony/CS50-final-Project",
    technologies: ["Python", "CS50", "Web Development"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
  }
];

export const blogData = [
  {
    id: 1,
    title: "Sajek Tour: 5 Days Mountain Adventure",
    category: "Travel, Adventure",
    date: "Aug 2023",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200",
    link: "https://www.facebook.com/jonys4s/posts/pfbid0aJRB35P3xkqHs1xdJVF1WydHKTziBcYsEDXf3sjvH7FAcQRbGVz3LDniQaWCjSftl"
  },
  {
    id: 2,
    title: "Building Real-Time Object Detection with YOLOv8",
    category: "Computer Vision, Deep Learning",
    date: "2024",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Crisis Tweet Classification Using Machine Learning",
    category: "Machine Learning, NLP",
    date: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "Visualizing Global CO₂ Emissions with Interactive Dashboards",
    category: "Data Analysis, Visualization",
    date: "2024",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    title: "Understanding Explainable AI in Modern ML Systems",
    category: "AI, Machine Learning",
    date: "2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 6,
    title: "From Raw Data to Insights: A Data Science Workflow",
    category: "Data Science, Analysis",
    date: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 7,
    title: "Getting Started with TensorFlow and Keras",
    category: "Deep Learning, Tutorial",
    date: "2024",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=1200"
  }
];

export const skillsData = {
  intro: {
    first: "From machine learning and computer vision to NLP and explainable AI,",
    second: "my work focuses on building robust, scalable intelligent systems."
  },
  tags: [
    "Data Analysis",
    "Machine Learning",
    "Computer Vision",
    "NLP Systems",
    "AI Applications"
  ],
  stats: [
    { value: "3+", label: "Years Learning" },
    { value: "15+", label: "Projects Built" },
    { value: "5+", label: "ML Models" }
  ]
};

export const contactData = {
  tel: "(+880) 1775017373",
  email: "shaownrahman30@gmail.com",
  address: "Bogura, Bangladesh"
};

export const certificationsData = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford University",
      year: "2025",
      type: "certification"
    },
    {
      title: "Data Science & Machine Learning with Python",
      issuer: "Ostad Academy",
      year: "2025",
      type: "certification"
    },
    {
      title: "Generative AI Engineering",
      issuer: "IBM Professional Certificate",
      year: "2025",
      type: "certification"
    },
    {
      title: "CS50's Introduction to Programming with Python",
      issuer: "Harvard University",
      year: "2025",
      type: "course"
    }
  ],
  activities: [
    {
      title: "Private Tutoring",
      description: "Mathematics & Science",
      period: "2017–Present",
      type: "activity"
    },
    {
      title: "PUB Programming Competition Participant",
      period: "2018–2022",
      type: "activity"
    },
    {
      title: "Volunteer, Pundra University Science Club",
      period: "2019–2022",
      type: "activity"
    }
  ]
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
];

