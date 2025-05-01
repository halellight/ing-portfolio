import { motion } from "framer-motion";
import Navbar from "./Navbar";
const About = () => {
  return (

    <>
    <Navbar/>
    <div className="min-h-screen bg-[#f8f8f8] py-20 px-6 sm:px-10 md:px-20">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Meet <span className="text-green-700">I₦G</span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          I₦G is more than just a name — it's a movement. A Nigerian-born artist blending Afrobeat rhythms with bold storytelling, humor, and visual creativity. From viral YouTube sketches to soul-shaking music, I₦G’s mission is simple: inspire, entertain, and connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-3xl shadow-lg"
          >
            <img
              src="/ing1.jpg"
              alt="I₦G performing"
              className="w-full object-cover h-[400px]"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >

            <h2 className="text-2xl font-semibold">Who is I₦G?</h2>
            <p className="text-gray-600">I.₦.G (theonlying) is a Christian rapper known for blending hip-hop and trap with powerful messages of hope, faith, and perseverance.
Born on March 9, 2004, in Tottori City, Japan, he grew up with a deep passion for music and a calling to inspire others through his art.

After overcoming personal battles, including struggles with addiction, I.₦.G found freedom and purpose through his relationship with Jesus Christ. His music is a reflection of that journey — real, raw, and filled with a message that no matter the circumstance, God is always present and ready to lift anyone up.

Every song he creates is more than entertainment — it is a testimony and a lifeline for those who feel lost or broken.
Through his sound, I.₦.G invites listeners into a space of honesty, healing, and hope, reminding them that with God, victory is always possible.</p>
            <p className="text-gray-600">I₦G is not just an artist; he is a voice for the voiceless, a beacon of light in a world that often feels dark. His mission is to reach the unreached and share the love of Christ through his music.</p>
            <h2 className="text-2xl font-semibold">What Drives I₦G?</h2>
            <p></p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                🎵 Music that moves — blending Afrofusion, hip-hop, and Naija street vibes.
              </li>
              <li>
                🎥 Visual storytelling — viral skits and thought-provoking YouTube series.
              </li>
              
              <li>
                🌍 Cultural pride — putting Nigeria and Africa on the global creative map.
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              Whether it's a beat drop or a punchline, I₦G delivers. With millions of views and an ever-growing fanbase, he’s not just entertaining — he’s building a legacy.
            </p>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/book"
            className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Book I₦G for Shows & Collabs
          </a>
        </motion.div>
      </motion.div>
    </div>

    </>
  );
};

export default About;
