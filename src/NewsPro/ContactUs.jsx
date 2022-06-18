
  import React, { useRef } from 'react';
  import emailjs from '@emailjs/browser';
  import './aboutUs.css'
  export const ContactUs = () => {
    const form = useRef();
   function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm('service_f3xf7r8', 'template_xslcc9b',form.current, 'aN-wAf-lbZE7ROZiU')
        .then((result) => {
            alert("Message Sent (status:ok)")
        }, (error) => {
            alert("Some error Occured");
        });
    };
    return (
    <div id='ContactUs'>
    <form ref={form} onSubmit={sendEmail}>
        <div className="InputFields">
         <div className="HeaderForFeedback">Contact us</div>
        <input type="text" className='TextInput' name="user_name" placeholder='Enter Name' />
        <input type="email" className='TextInput' name="user_email" placeholder='Enter Email' />
        <textarea name="message" className="InputComments" rows={"6"} placeholder='Type your query here'/>
        <input type="submit" value="Send" className='OnSubmitHandleButton'/>
        </div>
      </form>
    </div>
    );
  };