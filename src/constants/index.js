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
        date: "Jul 25, 2026",
        title: "Refining UX in GNOME Files (Nautilus)",
        image: "/images/org.gnome.Nautilus.svg",
        content: `
            <p>Contributing to the core desktop experience is always rewarding. I recently had two pull requests merged into <strong>GNOME Files (Nautilus)</strong> that focus on refining the user experience in the properties dialog.</p>
            <br/>
            <p>The first issue (PR !2070) involved a redundant UI element. When a user opened the properties dialog for a file from within its parent folder, the "Open Parent Folder" button was still being displayed. This was completely redundant and slightly confusing, as the user was already in the parent folder. I modified the logic to dynamically hide this button in this specific context, cleaning up the dialog's interface.</p>
            <br/>
            <p>However, this introduced an edge case (addressed in PR !2080). If a user opened the properties dialog, then closed the parent folder window but kept the properties dialog open (detaching it), they might actually <em>want</em> to use that "Open Parent Folder" button. I updated the behavior to re-show the parent folder row when the dialog becomes detached from its original view.</p>
            <br/>
            <p>These small, thoughtful adjustments are what make desktop environments feel polished and intuitive. It was a great experience diving into GTK and GNOME's codebase to make these improvements.</p>
            <br/>
            <p><strong>Pull Requests:</strong> <a href="https://gitlab.gnome.org/GNOME/nautilus/-/merge_requests/2070" target="_blank" rel="noreferrer noopener" class="text-blue-600 hover:underline">!2070</a>, <a href="https://gitlab.gnome.org/GNOME/nautilus/-/merge_requests/2080" target="_blank" rel="noreferrer noopener" class="text-blue-600 hover:underline">!2080</a></p>
        `
    },
    {
        id: 2,
        date: "May 2, 2026",
        title: "Optimizing Graphify: Parallel AST Extraction",
        image: "/images/graphify.ico",
        content: `
            <p>Recently, I contributed to <strong>Graphify</strong> by implementing parallel AST (Abstract Syntax Tree) extraction to eliminate CPU bottlenecks on large repositories.</p>
            <br/>
            <p>In the original implementation, the <code>extract()</code> method relied on a single-threaded process. This became a major bottleneck when dealing with extensive Python codebases because <code>importlib.import_module</code> inherently holds the Python Global Interpreter Lock (GIL). This meant that even though AST extraction could theoretically be heavily parallelized, the GIL forced execution to be effectively sequential, underutilizing CPU resources and resulting in long execution times.</p>
            <br/>
            <p>To resolve this, I introduced the <code>ProcessPoolExecutor</code> from Python's <code>concurrent.futures</code> module. By distributing the extraction tasks across multiple processes instead of threads, we completely bypass the GIL constraints. This allows Graphify to fully leverage multi-core processors, resulting in dramatically faster extraction times for large projects.</p>
            <br/>
            <p>I also integrated benchmarking support to accurately measure the performance gains. This contribution not only improves the immediate user experience by reducing wait times but also scales Graphify's capabilities to handle significantly larger codebases than before.</p>
            <br/>
            <p><strong>Pull Request:</strong> <a href="https://github.com/Graphify-Labs/graphify/pull/663" target="_blank" rel="noreferrer noopener" class="text-blue-600 hover:underline">#663</a></p>
        `
    },
    {
        id: 3,
        date: "Jan 23, 2026",
        title: "Improving Documentation in Next.js",
        image: "/images/Next.js.svg",
        content: `
            <p>Documentation is the lifeblood of any open-source framework, and I recently made a contribution to <strong>Next.js</strong> to ensure developers have accurate and up-to-date information.</p>
            <br/>
            <p>While reviewing the Next.js documentation regarding third-party scripts, specifically Partytown, I noticed that the reference URLs were outdated. The documentation was still pointing to <code>builder.io</code>, which was the old home for Partytown. Partytown has since migrated to the Qwik ecosystem.</p>
            <br/>
            <p>My pull request updated all Partytown documentation links to point to the correct <code>qwik.dev</code> URLs. Additionally, I updated the installation package references in the guide to ensure developers are pulling the right dependencies when setting up Partytown in their Next.js applications.</p>
            <br/>
            <p>While a documentation update might seem small compared to a core feature change, it prevents frustration and saves time for thousands of developers who rely on the Next.js docs daily. It's a reminder that every contribution, no matter the size, plays a crucial role in the ecosystem.</p>
            <br/>
            <p><strong>Pull Request:</strong> <a href="https://github.com/vercel/next.js/pull/88928" target="_blank" rel="noreferrer noopener" class="text-blue-600 hover:underline">#88928</a></p>
        `
    },
    {
        id: 4,
        date: "Sep 26, 2025",
        title: "Adding Keyboard Shortcuts in Newsflash",
        image: "/images/io.gitlab.news_flash.NewsFlash.svg",
        content: `
            <p>Accessibility and power-user features go hand in hand. I contributed a quality-of-life improvement to <strong>Newsflash</strong>, a popular feed reader for the Linux desktop.</p>
            <br/>
            <p>Newsflash supports various keyboard shortcuts to navigate articles and manage feeds efficiently. However, these shortcuts were not easily discoverable unless a user specifically looked them up in the documentation or settings. To solve this, I added keyboard shortcut information directly into the tooltips of the relevant buttons.</p>
            <br/>
            <p>Now, when a user hovers over a button like "Next Article" or "Mark as Read", the tooltip not only describes the action but also displays the associated keybinding. This subtle change significantly flattens the learning curve for power users, encouraging the adoption of keyboard navigation and making the overall application feel much more responsive and user-friendly.</p>
            <br/>
            <p>Working on this PR involved diving into the GTK UI framework used by Newsflash and ensuring the tooltips dynamically populated with the correct shortcut keys.</p>
            <br/>
            <p><strong>Pull Request:</strong> <a href="https://gitlab.com/news-flash/news_flash_gtk/-/merge_requests/257" target="_blank" rel="noreferrer noopener" class="text-blue-600 hover:underline">!257</a></p>
        `
    }
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
