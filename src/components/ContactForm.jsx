import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
    return(
        <div className="min-h-screen bg-white flex flex-col items-center px-6 md:px-24 py-12">
            <div className="text-center mb-12">
                <h5 className="text-2xl tracking-widest text-gray-500">CONTACT US</h5>
                <p className="text-black font-bold text-7xl py-5">Get in touch with us </p>
                <p className="text-xl text-gray-500">Fill out the form below or schedule a meeting with us at your convenience.</p>
            </div>

            <div className="min-h-screen bg-white px-4 md:px-8 py-10">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                    <div>
                        <label className="block text-xl font-semibold text-gray-700 mb-1">NAME</label>
                        <input type="text" 
                        placeholder="Your name"
                        className="w-[500px] border border-gray-300 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 "/>

                    </div>


                    <div>
                        <label className="block text-xl font-semibold text-gray-700 mb-1">EMAIL</label>
                        <input type="text" 
                        placeholder="Your email"
                        className="w-[500px] border border-gray-300 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 "/>

                    </div>


                    <div>
                        <label className="block text-xl font-semibold text-gray-700 mb-1">MESSAGE</label>
                        <textarea 
                        placeholder="Enter your message"
                        className="w-[500px] border border-gray-300 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 "
                        rows="4"/>
                        
                    </div>
                </div>


                <div className="space-y-6 mx-6">
                    <h3 className="text-lg font-semibold text-gray-900"> With our services you can</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <CheckCircle className=" text-gray-800 mt-1 "size={20}/>
                            <span>Instantly checks for harmful drug interactions</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle className=" text-gray-800 mt-1 "size={20}/>
                            <span>Supports caregivers managing multiple medications</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle className=" text-gray-800 mt-1 "size={20}/>
                            <span>Provides easy-to-understand safety guidance for users. </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle className=" text-gray-800 mt-1 "size={20}/>
                            <span>Helps prevent accidental self-medication risks</span>
                        </li>

                    </ul>

            <div className="mt-25 space-y-4 ">
                <div className="flex items-start gap-2">
                    <MapPin className="mt-1 text-gray-500"size={20} />
                    <div className="text-gray-500 text-sm">
                    <h4 className="text-gray-800 text-sm font-semibold ">USA</h4>
                    <p className="text-gray-500 text-sm">280 W, 17th street </p>
                        <p>4th floor, Flat no: 407</p> 
                        <p>New York NY, 10018</p>
                    </div>
                    
                    
                    <div className="flex items-start gap-2">
                    <MapPin className="mt-1 text-gray-500"size={20} />
                    <div className="text-gray-500 text-sm">
                    <h4 className="text-gray-800 text-sm font-semibold ">INDIA</h4>
                    <p className="text-gray-500 text-sm">Flat No. B-2-601/p/15ms</p>
                        <p>Banjara Hills, Road no 10</p> 
                        <p>Hyderabad, 500034</p>
                    </div>
                </div>
                </div>
            </div>
                </div>
                </div>

                
                <div className="flex items-center gap-2 mt-4">
                    <input 
                    type="checkbox"
                    id="terms"
                    className="accent-lime-500 w-4 h-4"/>
                    <label htmlFor = "terms" className="text-sm text-gray-700">
                        I agree with <a href="#" className="text-lime-500 underline"></a>
                        Terms and Conditions
                    </label>
                </div>

                <div>
                    <button type="submit"
                    className="bg-gray-800 w-[500px] text-white font-medium px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300 my-5 ">Send Your Request</button>
                </div>

                <div>
                    <p className=" text-lg font-bold my-6">You can also Contact us Via</p>
                </div>

                <div className="flex items-center gap-3 py-3 ">
                    <Mail className=" text-gray-600" size={24}/>
                    <p> contact.safemeds@gmail.com</p>

                    <Phone className=" text-gray-600"size={24}/>
                   <p> +91 8746379482</p> 
                </div>

 </div>
        </div>
    )
}
export default ContactForm;