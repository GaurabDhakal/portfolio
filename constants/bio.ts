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