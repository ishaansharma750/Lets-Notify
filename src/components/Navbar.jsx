import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#30c606"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-send">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
        <p className="navbar-text">Lets Notify</p>
      </div>
      <div className="right">
        <div className="plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f8f7f7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-plus">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar