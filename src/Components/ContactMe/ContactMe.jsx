import { FaFlag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form?.name?.value;
        const email = form?.email.value;
        const message = form?.message.value;
        console.log(name, email, message)
    }
    return (
        <div id="contact">
            <h1 className="btn btn-block btn-sm text-white lg:text-lg px-5 bg-orange-500 hover:bg-orange-500">Contact me</h1>

            <div className="grid md:grid-cols-12 py-3 md:py-5 gap-5">

                <div className="order-2 md:order-1 md:col-span-8 space-y-3">
                    <h1 className="text-center font-medium text-lg">Leave me your message</h1>
                    <div className="border p-3 shadow rounded-md shadow-black bg-orange-100">
                        <form onSubmit={handleSubmit}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Your Full Name ( Required)</span>
                                </div>
                                <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Your Email ( Required)</span>
                                </div>
                                <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Your Message</span>
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-28" placeholder="Type here"></textarea>
                            </label>
                            <div className="text-center">
                                <button className="btn mt-3 bg-orange-500 text-white hover:bg-orange-400" type="submit">send message</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="order-1 md:order-2 md:col-span-4 space-y-3">
                    <h1 className="text-center font-medium text-lg">Contact information</h1>
                    <div className="border p-3 lg:p-5 shadow rounded-md shadow-black bg-orange-100">
                        <FaFlag className="mx-auto bg-orange-300 rounded-full text-4xl p-2" />
                        <div className="flex justify-between">
                            <div>
                                <p>Country</p>
                                <p>Division</p>
                                <p>District</p>
                            </div>
                            <div>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                            </div>
                            <div>
                                <p>Bangladesh</p>
                                <p>Sylhet</p>
                                <p>Moulvibazar</p>
                            </div>
                        </div>
                    </div>
                    <div className="border p-3 lg:p-5 shadow rounded-md shadow-black bg-orange-100">
                        <MdEmail className="mx-auto bg-orange-300 rounded-full text-4xl p-2" />
                        <div className="flex justify-between">
                            <div>
                                <p>Email</p>
                                <p>Linkedin</p>
                                <p>GitHub</p>
                            </div>
                            <div>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                            </div>
                            <div>
                                <p>careerhunter4280@gmail.com</p>
                                <a href="https://www.linkedin.com/in/masum-reza-4935b92a0" target="_blank" rel="noopener noreferrer">@Masum-reza</a>
                                <p><a href="https://github.com/Masum-Reza2" target="_blank" rel="noopener noreferrer">@masum-reza</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe