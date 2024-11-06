import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Img_card({ img, title, description, onClick, delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation happens only once
    threshold: 0.1, // Triggers when 10% of the card is visible
  });

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <div className="py-5 px-3" >
        <div className="bg-slate-200 text-center w-[320px] h-[480px] rounded-md overflow-hidden">
          <img src={img} alt="" className="w-full" />
          <div className="text-center">
            <p className="text-red-600 font-semibold py-3 px-2 text-xl">
              {title}
            </p>
            <p className="text-black px-3 py-1 h-[100px]">{description}</p>
          </div>
          <div className="py-5 mt-2" onClick={onClick}>
            <button className="inline-block rounded bg-[#0c1a69] px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 duration-300">
              Know More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Img_card;
