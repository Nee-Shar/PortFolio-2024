"use client";
import React from "react";
import "../globals.css";
function Projects() {
  return (
    <div className=" text-white mt-6 " id="projects">
      <h1 className="mt-6 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
        <code>Projects</code>
      </h1>
      <div className="flex justify-center px-4 py-16 border-t border-base-300">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-items-center gap-10 mt-4 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16">
          <div className="w-full sm:w-auto">
            <>
              <div className="card card-hover w-full sm:w-90 glass">
                <figure>
                  <img
                    src="/my-password-animate (1).svg"
                    alt="car!"
                    style={{ height: "250px", width: "auto" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title  text-4xl">
                    <code className="mx-auto">Password Manager</code>
                  </h2>
                  <span className="text-center">Tech Stack Used</span>
                  <ul className="menu menu-horizontal menu-sm  rounded-box mt-2">
                    <li className="mx-auto">
                      <a className="tooltip" data-tip="React">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#80deea"
                            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                          ></path>
                          <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-auto">
                      <a className="tooltip" data-tip="Supabase">
                        <img
                          src="/supabase-logo-icon.svg"
                          alt="Supabase"
                          className="h-10 w-10"
                        />
                      </a>
                    </li>
                    <li className="mx-auto">
                      <a className="tooltip" data-tip="Bootstrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#7c4dff"
                            d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-auto">
                      <a className="tooltip" data-tip="Vite">
                        <img
                          alt="Vite"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png"
                          className="h-10 w-10"
                        />
                      </a>
                    </li>
                  </ul>
                  <div className="card-actions justify-center mt-2">
                    <button className="btn btn-info  text-white">
                      <a
                        href="https://github.com/Nee-Shar/Passoword-Manager-Final-2"
                        target="_blank"
                      >
                        {" "}
                        Github{" "}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>
          <div className="w-full sm:w-auto">
            <>
              <div className="card card-hover-2 w-full sm:w-90 glass">
                <figure>
                  <img
                    src="/time-management-animate.svg"
                    alt="car!"
                    style={{ height: "250px", width: "auto" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="  card-title text-3xl">
                    <code className="mx-auto">Time Tracker Extension</code>
                  </h2>
                  <span className="text-center">Tech Stack Used</span>
                  <ul className="menu menu-horizontal menu-sm  rounded-box mt-2">
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Python">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#0277BD"
                            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                          ></path>
                          <path
                            fill="#FFC107"
                            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="MySQL">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#00796b"
                            d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"
                          ></path>
                          <path
                            fill="#00796b"
                            d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"
                          ></path>
                          <path
                            fill="#f57f17"
                            d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"
                          ></path>
                          <path
                            fill="#f57f17"
                            d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"
                          ></path>
                          <path
                            fill="#f57f17"
                            d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"
                          ></path>
                          <path
                            fill="#00796b"
                            d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"
                          ></path>
                          <path
                            fill="#00796b"
                            d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Bootstrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#7c4dff"
                            d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Js">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                          <path
                            fill="#000001"
                            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div className="card-actions justify-center mt-2">
                    <button className="btn btn-info  text-white">
                      <a
                        href="https://github.com/Nee-Shar/Web-Extension-TIme-Tracker"
                        target="_blank"
                      >
                        {" "}
                        Github{" "}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>
          <div className="w-full sm:w-auto">
            <>
              <div className="card card-hover w-full sm:w-90 glass">
                <figure>
                  <img
                    src="/profile-data-animate.svg"
                    alt="car!"
                    style={{ height: "250px", width: "auto" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="  card-title text-3xl">
                    <code className="mx-auto">Github Profile Visualizer</code>
                  </h2>
                  <span className="text-center">Tech Stack Used</span>
                  <ul className="menu menu-horizontal menu-sm  rounded-box mt-2">
                    <li className="mx-3">
                      <a className="tooltip" data-tip="React">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#80deea"
                            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                          ></path>
                          <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Bootstrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#7c4dff"
                            d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Axios">
                        <img
                          alt="axios"
                          src="https://axios-http.com/assets/logo.svg"
                          className="h-12 w-12"
                        ></img>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Js">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                          <path
                            fill="#000001"
                            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div className="card-actions justify-center mt-2">
                    <button className="btn btn-info  text-white">
                      <a
                        href="https://github.com/Nee-Shar/GithubVisualizer"
                        target="_blank"
                      >
                        {" "}
                        Github{" "}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>

          <div className="w-full sm:w-auto">
            <>
              <div className="card card-hover-2 w-full sm:w-90  glass">
                <figure>
                  <img
                    src="/retail-markdown-animate.svg"
                    alt="car!"
                    style={{ height: "260px", width: "auto" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="  card-title text-1xl">
                    <code className="mx-auto">
                      Dark Patterns in E-Commerce Detection
                    </code>
                  </h2>
                  <span className="text-center">Tech Stack Used</span>
                  <ul className="menu menu-horizontal menu-sm bg-danger-content rounded-box mt-2">
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Python">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#0277BD"
                            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                          ></path>
                          <path
                            fill="#FFC107"
                            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Jupyter">
                        <img
                          alt="jupyter"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/883px-Jupyter_logo.svg.png"
                          className="h-10 w-10"
                        ></img>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="HTML">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <linearGradient
                            id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1"
                            x1="18.208"
                            x2="34.159"
                            y1="2.413"
                            y2="46.236"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#f09701"></stop>
                            <stop offset="1" stop-color="#e36001"></stop>
                          </linearGradient>
                          <path
                            fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)"
                            d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                          ></path>
                          <path
                            fill="#f09601"
                            d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"
                          ></path>
                          <path
                            fill="#d6e0e9"
                            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                          ></path>
                          <path
                            d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z"
                            opacity=".05"
                          ></path>
                          <path
                            d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z"
                            opacity=".07"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mx-3">
                      <a className="tooltip" data-tip="Js">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                          <path
                            fill="#000001"
                            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div className="card-actions justify-center mt-2">
                    <button className="btn btn-info  text-white">
                      <a
                        href="https://github.com/Nee-Shar/Dark-Pattern-Busters"
                        target="_blank"
                      >
                        {" "}
                        Github{" "}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
