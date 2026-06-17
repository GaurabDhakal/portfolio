export const DOB = new Date("2006-06-27");

export const AGE =
    new Date().getUTCFullYear() -
    DOB.getUTCFullYear() -
    (new Date().getUTCMonth() < DOB.getUTCMonth() ||
    (new Date().getUTCMonth() === DOB.getUTCMonth() &&
        new Date().getUTCDate() < DOB.getUTCDate())
        ? 1
        : 0);

export const FIRST_NAME = "Gaurab";
export const LAST_NAME = "Dhakal";
export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`;

export const PLACE_LIVING = "Kathmandu, Nepal";
export const HERO_MAIN =
    "Simple guy, who's giving his best to achieve his goals.";

export const BASIC_EXPANDED_INTRO_TEXT = `A ${AGE}-year-old bachelors student from ${PLACE_LIVING}. I'm currently diving deep into web development while aspiring to become a skilled AI/ML engineer.`;

export const ABOUT = `${FIRST_NAME}, a Kathmandu-based learner, is passionately exploring various web development concepts while building his foundation in modern development practices through hands-on experience.`;

export const EDUCATION = {
    history: [
        {
            gradeRange: "Upto Grade 10",
            institute: "Progressive English Secondary School",
            yearsAttended: "Upto 2022",
            summary:
                "A transformative journey that shaped my academic and personal growth.",
            location: "Mahankal, Kathmandu",
        },
        {
            gradeRange: "Grade 11 - Grade 12",
            institute: "Reliance International Academy",
            yearsAttended: "2022 - 2024",
            summary: "A period of refinement, exploration, and self-discovery.",
            location: "Saraswatinagar, Kathmandu",
        },
    ],
    completeSummary:
        "Throughout my educational journey, I have experienced significant transitions, overcoming challenges such as adapting to new schools, skipping grades, and moving between different locations. These experiences have shaped my resilience, perseverance, and determination to continue learning. Although there have been difficult times, each stage has contributed to my growth, both academically and personally. I am now in a phase of refining my skills, with a focus on future aspirations in web development and AI engineering.",
};

export type TSkill = {
    skill_name: string;
    level: string;
    level_code?: 1 | 2 | 3;
    screenshots?: string[];
    slug?: string;
    icon?: string;
};

export const TECH_STACK: TSkill[] = [
    {
        skill_name: "HTML",
        level: "High",
        level_code: 3,
    },
    {
        skill_name: "Next.js",
        level: "Intermediate",
        screenshots: [],
    },
    {
        skill_name: "Tanstack Start",
        level: "Intermediate",

        screenshots: [],
    },
];

export type categories =
    | "frontend"
    | "backend"
    | "runtimes"
    | "authentication"
    | "styling"
    | "state_management"
    | "programming_languages"
    | "full_stack";

export type TECH_STACK_T_REVAMPED = Record<categories, TSkill[]>;
export const TECH_STACK_N: TECH_STACK_T_REVAMPED = {
    programming_languages: [
        {
            skill_name: "JavaScript",
            level: "High",
            level_code: 3,
            icon: "/icons/js.svg",
        },
        {
            skill_name: "Python",
            level: "Intermediate",
            icon: "/icons/python.svg",
            level_code: 2,
        },
        {
            skill_name: "C++",
            level: "Beginner",
            icon: "/icons/cpp.svg",
            level_code: 1,
        },
        {
            skill_name: "Go",
            level: "Intermediate",
            icon: "/icons/go.svg",
            level_code: 2,
        },
    ],
    frontend: [
        {
            skill_name: "React JS",
            level: "Advanced",
            screenshots: [],
            level_code: 3,
            icon: "/icons/react.svg",
        },
        {
            skill_name: "Svelte",
            level: "Beginner",
            icon: "/icons/svelte.svg",
            level_code: 1,
        },
    ],
    full_stack: [
        {
            skill_name: "Next.js",
            level: "Intermediate",
            screenshots: [],
            level_code: 2,
            icon: "/icons/nextjs.svg",
        },
        {
            skill_name: "Tanstack Start",
            level: "Intermediate",
            level_code: 2,
            icon: "/icons/tanstack.svg",
            screenshots: [],
        },
    ],
    backend: [
        {
            skill_name: "Express.js",
            level: "Intermediate",
            level_code: 2,
            icon: "/icons/express.jpg",
            screenshots: [],
        },
        {
            skill_name: "NestJS",
            level: "Beginner",
            icon: "/icons/nestjs.svg",
            level_code: 1,
        },
        {
            skill_name: "Gin - Go ",
            level: "Beginner",
            icon: "/icons/gin.svg",
            level_code: 1,
        },
    ],
    runtimes: [
        {
            skill_name: "Node.JS",
            level: "Intermediate",
            icon: "/icons/nodejs.svg",
            level_code: 2,
        },
        {
            skill_name: "Bun",
            level: "Intermediate",
            icon: "/icons/bunjs.svg",
            level_code: 2,
        },
    ],
    authentication: [
        {
            skill_name: "Better Auth",
            level: "Intermediate",
            icon: "/icons/better-auth.svg",
            level_code: 2,
        },
        {
            skill_name: "Clerk",
            level: "High",
            level_code: 3,
            icon: "/icons/clerkjs.svg",
        },
    ],
    styling: [
        {
            skill_name: "CSS",
            level: "High",
            icon: "/icons/css.svg",
            level_code: 3,
        },
        {
            skill_name: "Tailwind CSS",
            level: "High",
            icon: "/icons/tailwind.svg",
            level_code: 3,
        },
    ],
    state_management: [
        {
            skill_name: "Zustand",
            level: "High",
            level_code: 3,
            icon: "/icons/zustand.svg",
        },
    ],
} as const;
