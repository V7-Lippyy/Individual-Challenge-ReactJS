import { useId } from 'react';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav className="grid grid-cols-3 max-w-7xl mx-auto mt-6 justify-between px-12 py-4 bg-[#8091FF] items-center shadow-lg rounded-xl">
      <ul>
        <li className="flex items-center justify-center">
          <Link
            to="/"
            className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342] text-lg font-semibold transition-colors duration-200"
          >
            Home
          </Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="w-full">
          <input
            type="text"
            className="text-black focus:text-black px-4 py-2 w-full rounded-lg shadow-inner transition-shadow duration-200 focus:shadow-md focus:outline-none"
            name="search"
            id={inputId}
            placeholder="Search product..."
            onChange={handleSearchInput}
          />
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className="flex gap-4 justify-end">
          <li>
            <button
              onClick={login}
              className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342] text-lg font-semibold transition-colors duration-200"
            >
              Sign in
            </button>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342] text-lg font-semibold transition-colors duration-200"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-4">
          <li>
            <Link
              to="/cart"
              className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342] text-lg font-semibold transition-colors duration-200"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342] text-lg font-semibold transition-colors duration-200"
            >
              My Orders
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342] text-lg font-semibold transition-colors duration-200"
            >
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}