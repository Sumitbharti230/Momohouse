import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Momologo from "../../assets/images/momologo.png"







function Footer() {
    return (
        <>
            <div className=" bg-slate-50">
                <div className='flex gap-40 mt-5'>

                    <div className=' ml-52'>
                        <div className="flex gap-2">
                            <img src={Momologo} alt="Momologo" className="h-7" />

                            <h1 className='text-green-800 text-xl font-bold'> momo</h1>
                        </div>
                        <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur. Elit sem <br /> tempor egestas molestie. Volutpat quis egestas <br /> porttitor turpis sit in. Lorem nunc nullam morbi urna <br />amet suspendisse nullam ac vivamus.</p>
                    </div>

                    <div className='flex justify-center items-center gap-14 '>

                        <div>

                            <h1 className='text-green-800 font-bold'>momos</h1>
                            <div className='text-slate-600'>
                                <p>About Us  </p>
                                <p>Our Menu</p>
                                <p>Our Services</p>
                                <p>Contact Us</p>
                            </div>
                        </div>



                        <div className="mb-5">
                            <h1 className='text-green-800 font-bold'>Legals</h1>
                            <div className='text-slate-600'>
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Support</p>
                            </div>
                        </div>


                        <div className="mb-3">
                            <h1 className='text-green-800 font-bold'>Follow Us</h1>
                            <div className="flex gap-6 mt-3 text-2xl text-slate-500">
                                <FaFacebook />
                                <FaLinkedin />
                                <AiFillTwitterCircle />
                            </div>
                            <div className="flex gap-6 mt-5 text-2xl text-slate-500">
                                <FaYoutube />
                                <FaInstagramSquare />
                                <AiFillTikTok />
                            </div>

                        </div>
                    </div>




                </div>


                <div className="flex items-center text-center justify-center mt-16 ">
                    <p>Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.</p>
                </div>

            </div>
        </>
    )
}

export default Footer;
