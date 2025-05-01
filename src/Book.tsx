import Navbar from "./Navbar";

const Book = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-20 ">
        <h1 className="text-4xl font-bold mb-4">Book Me</h1>
        <p className="text-lg text-gray-600">
          Interested in working with I₦G? Fill out the form or reach out via email.
        </p>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Book;
