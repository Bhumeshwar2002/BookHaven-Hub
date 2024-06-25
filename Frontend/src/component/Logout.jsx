import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = async () => {
        try {
            localStorage.removeItem('Users'); // Clear user data from localStorage
            sessionStorage.removeItem('AuthToken'); // Clear session storage if needed

            await setAuthUser(null); // Clear the authenticated user

            toast.success('Logged out successfully');
            // Optionally navigate to another route instead of reloading the entire page
            // history.push('/login');
        } catch (error) {
            console.error('Error logging out:', error);
            toast.error('Error logging out. Please try again.');
        }
    };

    return (
        <div>
            <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
                Logout
            </button>
            <ToastContainer />
        </div>
    );
}

export default Logout;
