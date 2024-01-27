import React, { useEffect } from 'react';
import { LOGO_URL } from '../../utils/Constants';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from "../../utils/Store/userSlice";

const Header = ({onToggleForm,showSignInForm}) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, password, displayName } = user;
        const uid = user.uid;
        dispatch(
          addUser({
            email: email,
            password: password,
            uid: uid,
            displayName: displayName,
          })
        );
        navigate('/restaurant');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);

  return (
    <div className="bg-gray-800 text-white p-2 md:flex md:justify-between md:items-center">
      {/* Logo */}
      {user && (
        <div className="w-24 h-24 mt-1 ml-2">
          <img src={LOGO_URL} alt="food-hub logo" />
        </div>
      )}

      {/* Navigation links or Sign In */}
      {user ? (
        <div className='flex space-x-14 flex-row cursor-pointer '>
          <h1 className="text-lg font-semibold hover:text-gray-400 transition duration-300">Home</h1>
          <h2 className="text-lg font-semibold hover:text-gray-400 transition duration-300">About</h2>
          <h3 className="text-lg font-semibold hover:text-gray-400 transition duration-300">Contact Us</h3>
          <h3 className="text-lg font-semibold hover:text-gray-400 transition duration-300">Grocery</h3>
          <button onClick={handleSignOut} className="  font-bold text-white">
            Sign Out
          </button>
        </div>
      ) : (
        <>
        <div className="w-24 h-24 mt-0 ml-2">
        <img src={LOGO_URL} alt="food-hub logo" />
      </div>
      <button
  className="mr-7 px-4 py-2 bg-gray-700 rounded text-white font-semibold hover:bg-gray-600 cursor-pointer"
  onClick={onToggleForm}
>
  {showSignInForm ? "Sign Up" : "Sign In"}
</button>


        </>
      )}

      
    </div>
  );
};

export default Header;
