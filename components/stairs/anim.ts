import { Variants } from 'framer-motion';

export const expand: Variants = {
    initial: {
        top: 0
    },
    enter: (i) => ({    
        top: "100vh",
        transition: {
            duration: 0.4,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1]
        },
        transitionEnd: { height: "0", top: "0" }
    }),
    exit: (i) => ({
        height: "100vh",
        transition: {
            duration: 0.4,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
};

export const opacity: Variants = {
    initial: {
        opacity: 0.5
    },
    enter: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.215, 0.61, 0.355, 1]
        }
    },
    exit: {
        opacity: 0.5,
        transition: {
            duration: 0.4,
            ease: [0.215, 0.61, 0.355, 1]
        }
    }
};