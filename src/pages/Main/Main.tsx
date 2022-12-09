import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Main = () => {
  const textList = ["Simple", "Animation"];

  return (
    <div className={styles.root}>
      <div className={styles["character-wrapper"]}>
        <motion.div
          className={styles.character}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}>
          R
        </motion.div>
        <motion.div
          className={styles.character}
          animate={{
            rotate: 180,
          }}
          transition={{
            delay: 2,
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 2,
          }}>
          E
        </motion.div>
        <motion.div
          className={styles.character}
          initial={{
            y: -100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.1, 0.1, 0.5, 1],
          }}>
          A
        </motion.div>
        <motion.div
          className={styles.character}
          initial="initial"
          animate="start"
          transition={{
            delay: 0.5,
          }}
          variants={cCaracterVariants}>
          C
        </motion.div>
        <motion.div className={styles.character} initial="initial" animate="start" variants={tCaracterVariants}>
          T
        </motion.div>
      </div>
      <p className={styles.text}>
        {textList.map((word, index) => {
          return (
            <motion.span variants={textVariants} initial="initial" animate="start" custom={index} key={index}>
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
};

const cCaracterVariants = {
  initial: {
    display: "none",
    y: -200,
    x: 500,
    opacity: 0,
  },
  start: {
    display: "block",
    y: 0,
    x: 0,
    opacity: 1,
  },
};

const tCaracterVariants = {
  initial: {
    display: "none",
    y: 200,
    x: 500,
    opacity: 0,
  },
  start: {
    display: "block",
    y: 0,
    x: 0,
    opacity: 1,
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  start: (index: number) => ({
    opacity: 1,
    transition: {
      delay: index ? index * 1.1 : 0.5,
    },
    y: 0,
  }),
};

export default Main;
