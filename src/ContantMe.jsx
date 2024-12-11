import React, { useContext, useState } from 'react';
import MyContext from './Context-Api/MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContantMe = () => {
  const { SetContactme } = useContext(MyContext);

  // Local state to temporarily hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Change Handler
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission
    SetContactme((prevState) => [...prevState, formData]); // Add new entry to contactMe array
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form fields
    notify();
  };

  const notify = () => toast.success("Message submitted successfully!",{theme:"dark"});

  return (
    <div className="contactus-form-container" id="contactme">
      <div className="container">
        <h1 className="contactus-heading">Contact me</h1>
        <h3 className="contactus-sub-heading">
          Questions, thoughts, or just want to say hello?
        </h3>
        <div className="contactus-form-container">
          <form className="form" onSubmit={submitHandler}>
            <div className="formfield-container">
              <input
                className="formfield"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={changeHandler}
                required
              />
              <input
                className="formfield"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={changeHandler}
                required
              />
              <input
                className="formfield"
                type="text"
                name="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={changeHandler}
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="formfield formfield-textarea"
                placeholder="Enter your message"
                value={formData.message}
                onChange={changeHandler}
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn-pink" id="submit-btn">
                Send Message<i className="submit-icon fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContantMe;
