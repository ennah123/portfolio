"use client"
import { useState } from 'react';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState('profile')
  const year = new Date().getFullYear()

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-black text-white rounded-xl hover:scale-110 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed lg:static inset-y-0 border-r-[3px] border-black left-0 z-40 lg:w-80 bg-white text-black transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'} flex flex-col overflow-hidden`}>
        <div className="p-8 mt-15">
          <div className="flex items-center justify-center space-x-3">
            <h1 className="text-3xl font-black text-gray-900 text-center">ENNAH OULDLAKHLIFA</h1>
          </div>
          <div className="w-16 h-1 bg-[#FFCC0D] mx-auto mt-4"></div>
        </div>

        <div className="flex-1 flex flex-col  items-center px-6">
          <nav className="space-y-2 w-full flex flex-col items-center mt-15">
            {['profile','settings','project','messages','projects','contact'].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`block px-4 py-2 ${page === p ? 'bg-[#FFCC0D]' : 'hover:border-dotted hover:border-[1px]'} w-full text-center`}
              >
                <span className="font-semibold text-black uppercase">{p}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="">
          <div className="px-6">
            <div className="border-t border-[2px] border-black"></div>
          </div>

          <div className="p-6">
            <p className="text-sm font-semibold text-black mb-4 text-center">Follow Me</p>
            <div className="flex justify-center space-x-4">
              {[
                  { icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", name: "Facebook" },
                { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", name: "Twitter" },
                { icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", name: "Facebook" },
                { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", name: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white  flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200 group border border-black"
                >
                  <svg className="w-5 h-5 text-black group-hover:text-[#FFCC0D]" viewBox="0 0 24 24">
                    <path fill="currentColor" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="px-6 py-4 bg-white">
            <p className="text-xs text-gray-500 text-center">
              © {year} Ouldlakhlifa Ennah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
