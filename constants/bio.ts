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

export const BASIC_EXPANDED_INTRO_TEXT = `Hello, I'm ${FULL_NAME}, a ${AGE}-year-old bachelors student from ${PLACE_LIVING}. I'm currently diving deep into web development 💻 while aspiring to become a skilled AI/ML engineer.`;

export const ABOUT = `${FIRST_NAME}, a Kathmandu-based learner, is passionately exploring various web development concepts while building his foundation in modern development practices through hands-on experience.`;

export const EDUCATION = {
    history: [
        {
            gradeRange: "till Grade 10",
            institute: "Progressive English Secondary School",
            yearsAttended: "till 2022",
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
export const TECHNICAL_SKILLS = [
    {
        skill_name: "Next.js",
        level: "Intermediate",
        short_summary:
            "I deeply admire Next.js and am continuously working on enhancing my skills in it.",
        screenshots: [],
    },
    {
        skill_name: "Tanstack Start",
        level: "Intermediate",
        short_summary:
            "The DX of Tanstack Start is very good which is the reason I started learning it and I am constantly working on getting better at it.",
        screenshots: [],
    },
];
