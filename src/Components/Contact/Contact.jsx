import React , {useState} from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";



function Contact() {
    
    const [result, setResult] = useState("");


    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "25b556f2-3646-40ab-a220-722028a00975");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='contactr-section'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt=''/>
                        <p>shuvadippal015@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt=''/>
                        <p>+91 9883610081</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt=''/>
                        <p>Kolkata, West Bengal</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name'/>
                <label htmlFor=''>Email</label>
                <input type='email' placeholder='Enter Your Email' name='email'/>
                <label htmlFor=''> Phone</label>
                <input type='number' placeholder='Enter Your Phone' name='phone'/>
                <label htmlFor=''>Enter your Message Here</label>
                <textarea name='message' rows='8' placeholder='Enter yout message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
            {result && <p className="form-result">{result}</p>}

        </div>
    </div>
  )
}

export default Contact