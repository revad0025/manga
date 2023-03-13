import { useState } from "react";
import useMangaContext from "../hooks/useMangaContext";
import { Link } from "react-router-dom";
function RegisterUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 const {createUser}= useMangaContext();
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser({ email, password });
    alert('Email Registered successfully!');
    setEmail('');
    setPassword('');
  };


 



  return (
    <div>
      <form onSubmit={handleSubmit} className='p-6 rounded bg-neutral flex flex-col'>
        <label className="text-white">
          Email:
          
        </label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <br />
        <label className="text-white">
          Password:
          
        </label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit" className="btn bg-[#c0c0c0]">Register</button>
      </form>
      <div className='flex gap-1 pt-2'>
        <p className='text-white text-sm'>
          Already have an account?
        </p>
        <Link to='/login' className='text-white text-sm hover:underline'>Log In</Link>
      </div>
    </div>
  );
}

export default RegisterUser
