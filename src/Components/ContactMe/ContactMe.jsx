import { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";
import Swal from "sweetalert2";


const ContactMe = () => {

    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const name = form?.name?.value;
        const email = form?.email.value;
        const message = form?.message.value;

        const text = { name, email, message };

        fetch("https://formsubmit.co/ajax/careerhunter4280@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(text)
        })
            .then(response => response.json())
            .then(data => {
                if (data?.success) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Message sent!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                setLoading(false);
                form.reset();
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            });
    }
    return (
        <div id="contact">
            <h1 className="btn btn-block btn-sm text-white lg:text-lg px-5 bg-orange-500 hover:bg-orange-500">Contact me</h1>

            <div className="grid md:grid-cols-12 py-3 md:py-5 gap-5">

                <div className="order-2 md:order-1 md:col-span-8 space-y-3">
                    <h1 className="text-center font-medium text-lg">Leave me your message</h1>
                    <div className="border p-3 shadow rounded-md shadow-black bg-orange-100 font-medium">
                        <form onSubmit={handleSubmit}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Your Full Name ( Required)</span>
                                </div>
                                <input required name="name" type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Your Email ( Required)</span>
                                </div>
                                <input required name="email" type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Your Message</span>
                                </div>
                                <textarea required name="message" className="textarea textarea-bordered h-28" placeholder="Type here"></textarea>
                            </label>
                            <div className="text-center">
                                <button className="btn mt-3 bg-orange-500 text-white hover:bg-orange-400" type="submit">send message{loading && <CgSpinner className="animate-spin text-lg" />}</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="order-1 md:order-2 md:col-span-4 space-y-3">
                    <h1 className="text-center font-medium text-lg">Contact information</h1>
                    <div className="border p-3 lg:p-5 shadow rounded-md font-medium text-sm shadow-black bg-orange-100">
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
                    <div className="border p-3 lg:p-5 shadow rounded-md font-medium text-sm shadow-black bg-orange-100">
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