import { useState } from 'react'

export default function ContactForm() {

    const [formData, setformdata] = useState({
        name: "",
        email: "",
        message: ""
    });


    //understood but still question it later. setting/initialising to empty string 
    const [error, seterror] = useState("");
    const [success, setsuccess] = useState("");


    const handleChange = (e) => {
        setformdata({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim()) {
            seterror("Name and email are required!!");
            setsuccess("");
            // console.log("Validation failed");
            return;
        }

        // console.log("Form submitted");
        // console.log("Form Data:", formData);

        setsuccess("Message ready to send (backend not connected yet)");
        seterror("");

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setsuccess("Message sent succesfully!!");
                seterror("");
                setformdata({ name: "", email: "", message: "" });
            } else {
                seterror(data.error || "Something went wrong");
                setsuccess("");
            }
        } catch (err) {
            seterror("Failed to connect to server!!");
            setsuccess("");
            alert("alr"); 
        }
    };


    return (
        <div className="mainContactContainer">
            <div className="contactform">
                <form className="actualform" onSubmit={handleSubmit}>
                    <div className="name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="ContactName"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="name">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="ContactName"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="name">
                        <input
                            type="text"
                            name="message"
                            placeholder="Enter a brief messaage (optional)"
                            className="ContactName"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
} 