import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS-files/LogIn1.css';
import MyContext from './Context-Api/MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LogIn = () => {


    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const notify = () =>toast.error("Email or Password is wrong!!!!", {theme: "colored"});
    const notify1 = () => toast.success("Successfully Reset Details ",{theme:"colored"});

    const { tempEmail, tempPassword } = useContext(MyContext);

    function compare(e) {
        e.preventDefault();
        console.log(Email)

        if (Email != tempEmail || Password != tempPassword) {
            notify();
        } else {
            navigate('/admin-Dashboard'); // Navigates to the given route
            notify1();

        }


        setTimeout(() => {
            setError(0);
        }, 2000);


    }

    return (
        <div className={'LogIn'} >
            <h1>Admin Access</h1>


            <div>
                <label htmlFor="Email">Email : </label>
                <input type="Email" id='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="Password">Password : </label>
                <input type="Password" id='Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
            </div>


            <button className='submit' onClick={compare}>Submit</button>
            
      <ToastContainer />
        </div>
    )
}
