import { StaggerLayout } from "./Stagger.styles";
import { StaggerCard } from "./StaggerCard";
import { motion } from "framer-motion";
import { animationVariants } from "./staggerVariants";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // delayChildren: 1.5,
      staggerChildren: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: {
    marginRight: "5px",
    transition: { ease: "easeOut" },
  },
};
export const Stagger = () => {
  return (
    <StaggerLayout.Container
      variants={animationVariants.container}
      initial={"hidden"}
      animate={"visible"}
    >
      <StaggerCard variants={animationVariants.card}></StaggerCard>
      <StaggerCard variants={animationVariants.card}></StaggerCard>
      <StaggerCard variants={animationVariants.card}></StaggerCard>
      <StaggerCard variants={animationVariants.card}></StaggerCard>
    </StaggerLayout.Container>
  );
};

export const Stagger2 = () => {
  const replies = [
    {
      id: "1",
      photo: "🐶",
    },
    {
      id: "2",
      photo: "🐱",
    },
    {
      id: "3",
      photo: "🐰",
    },
    {
      id: "4",
      photo: "🐭",
    },
    {
      id: "5",
      photo: "🐹",
    },
    {
      id: "6",
      photo: "🦊",
    },
    {
      id: "7",
      photo: "🐻",
    },
    {
      id: "8",
      photo: "🐼",
    },
    {
      id: "9",
      photo: "🐨",
    },
  ];

  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 1.5,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: {
      marginRight: "5px",
      transition: { ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.ul
        // style={{
        //   display: "flex",
        //   flexWrap: "wrap",
        //   marginLeft: "0px",
        //   marginBottom: "8px",
        //   marginTop: "15px"
        // }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {replies.map((reply) => (
          <StaggerCard
            style={{
              listStyle: "none",
              marginRight: "-10px",
            }}
            key={reply.id}
            data-testid={reply.id}
            variants={item}
            /** Uncomment this to see the issue, this used to work in framer-motion 2.6.13! */
            // whileHover="hover"
          >
            <div
              style={{
                background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "3px solid #4C79DF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "38px",
              }}
            >
              <span role="img">{reply.photo}</span>
            </div>
          </StaggerCard>
        ))}
      </motion.ul>
    </>
  );
};
