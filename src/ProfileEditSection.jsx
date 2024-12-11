import React, { useContext, useState } from 'react';
import MyContext from './Context-Api/MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ProfileEditSection = ({ ProfileVsProjectAdditionSection, setProfileVsProjectAdditionSection }) => {
  console.log(ProfileVsProjectAdditionSection);
  const { UserDetails, setUserDetails } = useContext(MyContext);

  // Local state to track form inputs
  const [name, setName] = useState(UserDetails.name);
  const [about, setAbout] = useState(UserDetails.about);
  const [myTechStack, setMyTechStack] = useState(UserDetails.myTechStack);

  const handleClick = () => {
    setProfileVsProjectAdditionSection(1);  // Example logic to set state
  };

  // Submit function to handle form submission
  const submit = (e) => {
    e.preventDefault();

    // Update the UserDetails context with the new values
    setUserDetails({
      ...UserDetails,
      name: name,
      about: about,
      myTechStack: myTechStack,
    });


    notify();
    
  };
  const notify = () => toast.success("Successfully Reset Details ",{theme:"colored"});

  return (
    <div className='ProjectAdditionSection'>
      <label className="switch" onClick={handleClick}>
        <input type="checkbox" />
        <span className="slider"></span>
      </label>

      <h1>Profile Edit</h1>
      
      <div>
        <label htmlFor="name">Name : </label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      <div>
        <label htmlFor="about">About : </label>
        <textarea 
          name="about" 
          id="about" 
          rows="5" 
          cols="50" 
          value={about}
          onChange={(e) => setAbout(e.target.value)} 
        />
      </div>

      <div>
        <label htmlFor="myTechStack">My Tech Stack : </label>
        <textarea 
          name="myTechStack" 
          id="myTechStack" 
          rows="5" 
          cols="50" 
          value={myTechStack} 
          onChange={(e) => setMyTechStack(e.target.value)} 
        />
      </div>

      <button className='submitBtn' role="button" onClick={submit}>Submit</button>
      <ToastContainer />
    </div>
  );
};
