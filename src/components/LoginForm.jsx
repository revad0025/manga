import React, { useState } from 'react';
import useMangaContext from '../hooks/useMangaContext';
import { Link } from 'react-router-dom';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {checkUserCredentials} = useMangaContext()
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isCredentialsValid = await checkUserCredentials({ email, password });
    if (isCredentialsValid) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password.');
    }
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
        <button type="submit" className="btn bg-[#c0c0c0]">Login</button>
      </form>
      <div className='flex gap-1 pt-2'>
        <p className='text-white text-sm'>
          Dont Have an Account?
        </p>
        <Link to='/signup' className='text-white text-sm hover:underline'>Sign Up</Link>
      </div>
    </div>
    
  );
}

export default LoginForm;
