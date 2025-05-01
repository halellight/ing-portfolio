import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Shows = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-16 px-4 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Shows
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover where I₦G will be performing next. Mark your calendars and don’t miss out.
        </motion.p>

        {/* Sample Show Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2].map((show) => (
            <motion.div
              key={show}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: show * 0.2 }}
              className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">Event Name {show}</h2>
              <p className="text-gray-500 mb-1">Date: July 12, 2025</p>
              <p className="text-gray-500 mb-3">Location: Lagos, Nigeria</p>
              <a
                href="#"
                className="text-green-600 hover:underline text-sm"
              >
                Get Tickets →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shows;
