import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer border-t ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link
              to="/"
              className="text-xl font-bold text-green-800 flex items-center"
            >
              <span className="mr-2">🌱</span> Agriastha
            </Link>
            <p className="mt-2 text-sm text-white">
              Promoting sustainable agriculture for a greener tomorrow.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-green-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-green-700">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="text-white hover:text-green-700"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-green-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Contact Us
            </h3>
            <ul className="space-y-3 text-white">
              <li>
                812, Paschimpuri, Bodla - Sikandra Road, Agra- 282007 (U.P.)
                INDIA
              </li>
              <li>Phone: +(91) 9806710726, 9837650525</li>
              <li>Email: info@agriastha.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-green-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-green-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-200 text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Agriastha. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;