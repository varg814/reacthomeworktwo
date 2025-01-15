import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="image_container">
          <div className="eye">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 9C14 9 5.46 15.22 2 24C5.46 32.78 14 39 24 39C34.01 39 42.54 32.78 46 24C42.54 15.22 34.01 9 24 9ZM24 34C18.48 34 14 29.52 14 24C14 18.48 18.48 14 24 14C29.52 14 34 18.48 34 24C34 29.52 29.52 34 24 34ZM18 24C18 20.69 20.69 18 24 18C27.31 18 30 20.69 30 24C30 27.31 27.31 30 24 30C20.69 30 18 27.31 18 24Z"
                fill="white"
              />
            </svg>
          </div>
          <img src="./src/imgs/Rectangle Copy.png" alt="jewish" />
        </div>
        <div className="text">
          <h1 className="pointer">Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="eth">
          <div className="eth_child one">
            <i class="fa-brands fa-ethereum"></i>
            <p>0.041 ETH</p>
          </div>
          <div className="eth_child two">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <rect
                opacity="0.01"
                x="16.305"
                y="16.6739"
                width="16"
                height="16"
                transform="rotate(180 16.305 16.6739)"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.63834 8.67388C1.63834 4.99199 4.6231 2.00722 8.305 2.00722C10.0731 2.00722 11.7688 2.7096 13.019 3.95984C14.2693 5.21008 14.9717 6.90577 14.9717 8.67388C14.9717 12.3558 11.9869 15.3406 8.305 15.3406C4.6231 15.3406 1.63834 12.3558 1.63834 8.67388ZM8.305 9.34055H10.9717C11.3399 9.34055 11.6383 9.04207 11.6383 8.67388C11.6383 8.30569 11.3399 8.00722 10.9717 8.00722H8.97167V6.00722C8.97167 5.63903 8.67319 5.34055 8.305 5.34055C7.93681 5.34055 7.63834 5.63903 7.63834 6.00722V8.67388C7.63834 9.04207 7.93681 9.34055 8.305 9.34055Z"
                fill="#8BACD9"
              />
            </svg>
            <p>3 days left</p>
          </div>
        </div>
        <div className="author">
          <div className="line"></div>
          <div className="content">
            <div className="author_image_container">
              <img src="./src/imgs/Oval.png" alt="" />
            </div>
            <p>
              Creation of <span className="pointer">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
