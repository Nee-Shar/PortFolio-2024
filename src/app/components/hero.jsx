"use client";
import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="hero min-h-screen bg-primary-content text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="animation"
          src="hand-coding-animate.svg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            <code>
              <Typewriter
                options={{
                  strings: ["Hello World", "हैलो वर्ल्ड"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </code>
          </h1>
          <p className="py-6 text-1xl">
            <blockquote className="italic">
              Hi, I'm Neeraj Sharma, a full stack web developer—can't fix your
              Wi-Fi, but can definitely make your website run like a charm.
            </blockquote>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
