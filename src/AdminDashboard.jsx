import React, {  useState } from 'react';
import { FaPen } from "react-icons/fa6";
import './CSS-files/dashboard.css';
import imageUrl from './1.png';
import { ProjectAdditionSection } from './ProjectAdditionSection';
import { ProfileEditSection } from './ProfileEditSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminDashboard = () => {
  const [ProfileVsProjectAdditionSection, setProfileVsProjectAdditionSection] = useState(false); // Set initial state to false (unchecked)


  return (
    <div className='dashboard'>
      <h1 className='title'>Admin Dashboard</h1>
      
      {ProfileVsProjectAdditionSection ?
        <ProjectAdditionSection
          ProfileVsProjectAdditionSection={ProfileVsProjectAdditionSection}
          setProfileVsProjectAdditionSection={setProfileVsProjectAdditionSection}
        /> :
        <ProfileEditSection
          ProfileVsProjectAdditionSection={ProfileVsProjectAdditionSection}
          setProfileVsProjectAdditionSection={setProfileVsProjectAdditionSection}
        />}
        <ToastContainer />
    </div>
  );
};
