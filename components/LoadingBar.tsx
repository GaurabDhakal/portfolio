import { motion } from "framer-motion";

export default function Spinner() {
    return (
        <div className="flex justify-center items-center min-h-full my-5 w-full bg-slate-50/20">
            <div className="relative">
                <motion.div
                    className="absolute w-32 h-32 rounded-xl border-[3px] border-rose-500"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />

                <motion.div
                    className="w-32 h-32 rounded-xl border-[3px] border-cyan-500"
                    animate={{
                        rotate: -360,
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{
                        rotate: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />

                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                        rotate: [0, 45, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-sky-500 rounded-lg"
                        animate={{
                            scale: [0.8, 1.2, 0.8],
                            rotate: [45, -45, 45],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-80"
                    animate={{
                        rotate: [45, 0, 45],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-amber-500 via-pink-500 to-violet-500 rounded-lg"
                        animate={{
                            scale: [1.2, 0.8, 1.2],
                            rotate: [-45, 45, -45],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
