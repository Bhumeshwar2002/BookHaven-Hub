
import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Logout() {
    const [, setAuthUser] = useAuth();

    const handleLogout = async () => {
        try {
            localStorage.removeItem('Users');
            sessionStorage.removeItem('AuthToken');

            setAuthUser(null);

            toast.success('Logged out successfully');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
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
