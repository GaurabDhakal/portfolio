import gsap from "gsap";

export const blurredIn = (customValues: gsap.TweenVars = {}) => {
    const defaultValues: gsap.TweenVars = {
        filter: "blur(17px)",
        y: 35,
        scale: 0.95,
        opacity: 0,
        stagger: {
            from:"center",
            each: 0.018,
        },
        duration: 0.9,
        ease: "expo.out",
    };
    return {
        ...defaultValues,
        ...customValues,
    };
};
