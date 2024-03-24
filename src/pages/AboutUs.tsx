import { motion } from "framer-motion";

const laptop = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 20,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 my-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Learn more about our Disaster Relief Donation Platform.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="max-w-lg mx-auto rounded-lg overflow-hidden">
            <motion.div variants={laptop} initial="initial" animate="animate">
              <img
                className="w-full"
                src="https://www.onenationuk.org/wp-content/uploads/2023/10/gazaemergencyhm.jpg"
                alt="About Us"
              />
            </motion.div>
          </div>
          <div className="mt-6 prose prose-lg text-gray-600 flex flex-col justify-center items-center">
            <p className="font-bold italic my-4 text-center">
              “Whoever saved a life, it would be as if they saved the life of
              all mankind.” – (Qur’an 5:32)
            </p>
            <p className="my-2 text-center max-w-prose-sm">
              We envision a world in which access to food, clean water,
              education and shelter is a norm. The opportunity to live
              peacefully is offered to all without discrimination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
