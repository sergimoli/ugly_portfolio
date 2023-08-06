import React from "react";

function Contact() {
  return (
    <div className="page">
      <h1 className="heading">Services</h1>
      <form className="contact" action="mailto:sergimoli@gmail.com">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="text" placeholder="Email" />
        <textarea type="text" placeholder="contact me" />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default Contact;
