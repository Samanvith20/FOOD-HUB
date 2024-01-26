import React, { useState } from 'react';
import Validation from './validation';

const Login = () => {
  const [signinform, setsigninform] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [errormessage, seterrormessage] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlesigninform = () => {
    setsigninform(!signinform);
  };

  const submitform = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    const message = Validation(email, password);
    seterrormessage(message);

    // Handle form submission logic here
    if (message === null) {
      // The form is valid, you can proceed with submitting the form data
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-lg rounded px-10 pt-8 pb-10 mb-4 w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">{signinform ? "Sign In" : "Sign up"}</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        {!signinform && (
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="Enter your email"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
        )}
        <div className="mb-8 relative">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <span
            className="absolute right-0 top-0 mt-11 mr-4 cursor-pointer"
            onClick={handleTogglePassword}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </span>
        </div>
        <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={submitform}
          >
            {signinform ? "Sign In" : "Sign up"}
          </button>
        </div>
        <p className="py-4  text-lg cursor-pointer text-center" onClick={handlesigninform}>
          {signinform ? 'New to FoodHub? Sign Up Now' : 'Already registered? Sign In Now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
