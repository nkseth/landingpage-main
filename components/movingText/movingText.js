import { motion } from "framer-motion";
import { FiChevronRight, fiChevronLeft, FiChevronLeft } from "react-icons/fi";
import { styles } from "./movingTextStyle";

const movingTest = () => {
  const textData = [
    "Content Moderation",
    "Content Moderation",
    "Content Moderation",
  ];
  const list = { hidden: { opacity: 0 } };
  return (
    <div className="texts-container">
      {textData.map((item, index) => {
        return (
          <div key={index} className="text1-container">
            <motion.h1
              animate={
                index % 2 !== 0 ? { x: [1700, -850] } : { x: [-850, 1700] }
              }

              initial={
                index % 2 !== 0 ? { x: [1700, -850] } : { x: [-850, 1700] }
              }
              transition={{ duration: 5 }}
              style={styles.h1}
            >
              {item}
              <FiChevronRight />
            </motion.h1>
            {index * 2 == 4 ? null : (
              <motion.hr
                animate="hidden"
                variants={list}
                transition={{ duration: 7 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default movingTest;
