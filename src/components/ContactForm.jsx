import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 md:px-10 lg:px-24 py-8 md:py-12">
      <div className="text-center mb-10 md:mb-12">
        <h5 className="text-lg md:text-2xl tracking-widest text-gray-500">CONTACT US</h5>
        <p className="text-black font-bold text-3xl md:text-5xl lg:text-7xl py-3 md:py-5">
          Get in touch with us
        </p>
        <p className="text-base md:text-xl text-gray-500">
          Fill out the form below or schedule a meeting with us at your convenience.
        </p>
      </div>

      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
         
          <form
            className="space-y-6 flex flex-col w-full"
            onSubmit={e => e.preventDefault()}
            autoComplete="off"
          >
            <div>
              <label className="block text-base md:text-xl font-semibold text-gray-700 mb-1">
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
              />
            </div>

            <div>
              <label className="block text-base md:text-xl font-semibold text-gray-700 mb-1">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
              />
            </div>

            <div>
              <label className="block text-base md:text-xl font-semibold text-gray-700 mb-1">
                MESSAGE
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
                rows={4}
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="terms"
                className="accent-lime-500 w-4 h-4"
              />
              <label htmlFor="terms" className="text-sm text-gray-700 select-none">
                I agree with{" "}
                <a href="#" className="text-lime-500 underline hover:no-underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="bg-gray-800 w-full text-white font-medium px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300 mt-2"
            >
              Send Your Request
            </button>
          </form>

      
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                With our services you can
              </h3>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-lime-600 mt-1" size={20} />
                  <span>Instantly checks for harmful drug interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-lime-600 mt-1" size={20} />
                  <span>Supports caregivers managing multiple medications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-lime-600 mt-1" size={20} />
                  <span>Provides easy-to-understand safety guidance for users</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-lime-600 mt-1" size={20} />
                  <span>Helps prevent accidental self-medication risks</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* <div className="flex items-start gap-2">
                  <MapPin className="mt-1 text-gray-500" size={20} />
                  <div className="text-gray-500 text-sm">
                    <h4 className="text-gray-800 text-sm font-semibold">USA</h4>
                    <p className="text-gray-500 text-sm">280 W, 17th street</p>
                    <p>4th floor, Flat no: 407</p>
                    <p>New York NY, 10018</p>
                  </div>
                </div> */}
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 text-gray-500" size={20} />
                  <div className="text-gray-500 text-sm">
                    <h4 className="text-gray-800 text-sm font-semibold">INDIA</h4>
                    <p className="text-gray-500 text-sm">Flat No. B-2-601/p/15ms</p>
                    <p>Patul University, Limda</p>
                    <p>Vadodara, 383478</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <p className="text-lg font-bold">You can also Contact us Via</p>
                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <Mail className="text-gray-600" size={22} />
                  <span className="text-gray-800 text-base">contact.safemeds@gmail.com</span>
                  <Phone className="text-gray-600" size={22} />
                  <span className="text-gray-800 text-base">+91 8746379482</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ContactForm;