import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Industry_tab({ icon, title, description, delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensure it only triggers once
    threshold: 0.1, // Triggers when 10% of the card is visible
  });

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <div className="bg-slate-200 mx-3 my-3 duration-300 border-red-500 rounded-lg overflow-hidden hover:shadow-red-700 hover:shadow-[0_0px_20px_rgb(0,0,0,0.13)]">
        <img src={icon} alt="" className="m-auto" />
        <h1 className="text-xl font-bold py-4 text-red-600">{title}</h1>
        <p className="px-3 pb-5 h-[120px]">{description}</p>
      </div>
    </motion.div>
  );
}

export default Industry_tab;
