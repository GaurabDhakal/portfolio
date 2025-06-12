export const DOB = new Date("2006-06-27");
export const AGE = new Date().getUTCFullYear() - DOB.getUTCFullYear() -
    (new Date().getUTCMonth() < DOB.getUTCMonth() ||
        (new Date().getUTCMonth() === DOB.getUTCMonth() && new Date().getUTCDate() < DOB.getUTCDate()) ? 1 : 0);
export const FIRST_NAME = "Gaurab";
export const LAST_NAME = "Dhakal"
export const NAME = `${FIRST_NAME} ${LAST_NAME}`;
export const PLACE_LIVING = "Kathmandu, Nepal";
export const BASIC_SHORT_INTRO_TEXT = "Curious mind exploring coding and logic with passion. 🚀";
export const BASIC_EXPANDED_INTRO_TEXT = `Hello, I'm ${NAME}, a ${AGE}-year-old high school graduate from ${PLACE_LIVING}. I'm currently diving deep into web development 💻 while aspiring to become a skilled data scientist.`;
export const ABOUT = `${FIRST_NAME}, a Kathmandu-based learner, is passionately exploring various web development concepts while building his foundation in modern development practices through hands-on experience.`

export const EDUCATION = {
    history: [
        {
            gradeRange: "Nursery - Grade 4",
            institute: "Sungava Basic School",
            yearsAttended: "2010 - 2016",
            summary: "Laid the foundation for learning and curiosity.",
            location: "Sallebas, Mandandeupur, Kavre"
        },
        {
            gradeRange: "Grade 6 (Nepali Medium)",
            institute: "Shree Baluwa Secondary School",
            yearsAttended: "2016 - 2017",
            summary: "A transitional phase with new experiences.",
            location: "Baluwapati, Mandandeupur, Kavre"
        },
        {
            gradeRange: "Grade 6",
            institute: "Trinetra Secondary School",
            yearsAttended: "2017",
            summary: "A brief yet insightful period of learning.",
            location: "Kapan, Kathmandu"
        },
        {
            gradeRange: "Grade 6 - Grade 10",
            institute: "Progressive English Secondary School",
            yearsAttended: "2018 - 2022",
            summary: "A transformative journey that shaped my academic and personal growth.",
            location: "Mahankal, Kathmandu"
        },
        {
            gradeRange: "Grade 11 - Grade 12",
            institute: "Reliance International Academy",
            yearsAttended: "2022 - 2024",
            summary: "A period of refinement, exploration, and self-discovery.",
            location: "Saraswatinagar, Kathmandu"
        }
    ],
    completeSummary: "Throughout my educational journey, I have experienced significant transitions, overcoming challenges such as adapting to new schools, skipping grades, and moving between different locations. These experiences have shaped my resilience, perseverance, and determination to continue learning. Although there have been difficult times, each stage has contributed to my growth, both academically and personally. I am now in a phase of refining my skills, with a focus on future aspirations in web development and data science."
};
export const TECHNICAL_SKILLS = [
    {
        skill_name: "Next.js",
        level: "Intermediate",
        short_summary: "I deeply admire Next.js and am continuously working on enhancing my skills in it.",
        screenshots: []
    },
]