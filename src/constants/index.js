const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Loopback", "FastAPI"],
    },
    {
        category: "Database",
        items: ["MongoDB", "MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/hanzala-sohrab",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://hanzala-sohrab.me/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/HanzalaSohrab",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/hanzala-sohrab",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Portfolio",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "portfolio.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A macOS-inspired portfolio website that recreates the look and feel of Apple's desktop operating system in the browser.",
                        "Features interactive windows, a functional dock, draggable icons, and a realistic desktop experience—all built as a web application.",
                        "Think of it as your own personal Mac desktop, showcasing projects, skills, and contact info in a unique and memorable way.",
                        "Built with React and Tailwind CSS, delivering smooth animations, responsive design, and an immersive user experience.",
                    ],
                },
                {
                    id: 2,
                    name: "hanzala-sohrab.me",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://hanzala-sohrab.me",
                    position: "top-10 right-20",
                },
                {
                    id: 3,
                    name: "portfolio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/portfolio.png",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Task Manager",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "task-manager.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "A modern task management application with a Next.js and TypeScript frontend, providing comprehensive task management with authentication, creation, editing, and tracking capabilities.",
                        "The backend is powered by FastAPI with user authentication, CRUD operations, integrated LLM capabilities using Ollama, and vector search functionality.",
                        "Think of it as a smart to-do app—organize tasks, track progress, and leverage AI-powered features for enhanced productivity.",
                        "Full-stack solution combining a sleek, responsive frontend with a robust, feature-rich backend API.",
                    ],
                },
                {
                    id: 2,
                    name: "task-manager-frontend",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/hanzala-sohrab/task-manager",
                    position: "top-10 left-20",
                },
                {
                    id: 3,
                    name: "task-manager-backend",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/hanzala-sohrab/task-manager-backend",
                    position: "top-40 left-20",
                },
                {
                    id: 4,
                    name: "task-manager.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/task-manager.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "OSS Contributions",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "contributions.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A collection of my open-source contributions.",
                        "I am actively contributing to popular open-source projects, focusing on adding new features, fixing bugs, and improving performance.",
                        "Here are some of my accepted pull requests across various repositories like GNOME Nautilus, Next.js, Graphify, and Newsflash.",
                    ],
                },
                {
                    id: 8,
                    name: "GNOME",
                    icon: "/images/gnome-icon.png",
                    kind: "folder",
                    position: "top-5 right-20",
                    windowPosition: "top-[40vh] left-10",
                    children: [
                        {
                            id: 1,
                            name: "Newsflash PR",
                            icon: "/images/io.gitlab.news_flash.NewsFlash.svg",
                            kind: "file",
                            fileType: "url",
                            href: "https://gitlab.com/news-flash/news_flash_gtk/-/merge_requests/257",
                            position: "top-5 left-10",
                        },
                        {
                            id: 9,
                            name: "Nautilus/Files",
                            icon: "/images/folder.png",
                            kind: "folder",
                            position: "top-5 right-20",
                            windowPosition: "top-[50vh] left-15",
                            children: [
                                {
                                    id: 1,
                                    name: "PR 2070",
                                    icon: "/images/org.gnome.Nautilus.svg",
                                    kind: "file",
                                    fileType: "url",
                                    href: "https://gitlab.gnome.org/GNOME/nautilus/-/merge_requests/2070",
                                    position: "top-5 left-10",
                                },
                                {
                                    id: 2,
                                    name: "PR 2080",
                                    icon: "/images/org.gnome.Nautilus.svg",
                                    kind: "file",
                                    fileType: "url",
                                    href: "https://gitlab.gnome.org/GNOME/nautilus/-/merge_requests/2080",
                                    position: "top-5 right-20",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Graphify PR",
                    icon: "/images/graphify.ico",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Graphify-Labs/graphify/pull/663",
                    position: "top-32 left-10",
                },
                {
                    id: 4,
                    name: "Next.js PR",
                    icon: "/images/Next.js.svg",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/vercel/next.js/pull/88928",
                    position: "top-32 right-20",
                },
            ],
        },

        // ▶ Project 4
        {
            id: 8,
            name: "Speech to Text",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-5",
            windowPosition: "top-[46vh] left-7",
            children: [
                {
                    id: 1,
                    name: "speech-to-text.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A speech-to-text application.",
                        "Converts spoken audio into written text efficiently.",
                        "A useful tool for generating transcripts and improving accessibility.",
                    ],
                },
                {
                    id: 2,
                    name: "speech-to-text",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/hanzala-sohrab/speech-to-text",
                    position: "top-5 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/hanzala.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/hanzala.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/hanzala.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-50 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/hanzala.jpg",
            description: [
                "👋 Hi, I’m Hanzala — a Senior Full-Stack Engineer passionate about building fast, scalable, and user-focused web applications. I work across the entire stack, from backend architecture and distributed systems to high-performance frontend experiences.",
                "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "🤝 Let’s build something amazing!",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            href: "https://drive.google.com/file/d/1vSmB4n0rFHmwh8mwfXsWnsjhazdlWN9D/view",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
