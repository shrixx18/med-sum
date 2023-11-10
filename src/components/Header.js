import React from 'react';
import Link from 'next/link';
function Header({loggedInUser,onLogout }) {
  
  return (
    <header className="bg-white shadow-md p-2 md:p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold text-black">Mediclaim Summarizer</div>
        <div className="hidden md:block">
        {loggedInUser ? (
          <button className="bg-blue-600 rounded-md p-4 m-4" onClick={onLogout}>
            Log Out
          </button>
        ) : null}
            <Link href="/about" className="hover:text-blue-500 text-black">About Us</Link>
       
        </div>
      </div>
    </header>
  );
}

export default Header;