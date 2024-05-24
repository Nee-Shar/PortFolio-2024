"use client";
import React from "react";
import Typewriter from "typewriter-effect";
function About() {
  let today = new Date();
  return (
    <div id="about">
      <ul className="timeline timeline-snap-icon sm:timeline-compact timeline-vertical  text-white mb-5">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <code>About Me</code>
        </h1>

        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black"></div>
            <div className="mockup-code max-w-xl bg-info-content text-start">
              <pre data-prefix="$">
                <code>cd /Class_X</code>
              </pre>
              <pre data-prefix="$">
                <code>ls</code>
              </pre>
              <pre data-prefix="$" className="text-info">
                <code>School : SSMS</code>
              </pre>
              <pre data-prefix="$" className="text-info">
                <code>Grade Transcirpt</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>Percentage: 96.5 %</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>Status: Done!</code>
              </pre>
            </div>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black"> </div>
            <div className="mockup-code max-w-xl bg-info-content text-start">
              <pre data-prefix="~">
                <code>cd /Class_XII</code>
              </pre>
              <pre data-prefix="~">
                <code>ls</code>
              </pre>
              <pre data-prefix="~" className="text-info">
                <code>School : SSMS</code>
              </pre>
              <pre data-prefix="~" className="text-info">
                <code>Grade Transcirpt</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>Percentage: 96.4 %</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>Status: Done!</code>
              </pre>
            </div>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-black"></div>
            <div className="mockup-code max-w-xl bg-info-content text-start">
              <pre data-prefix="$">
                <code>cd /B.Tech</code>
              </pre>
              <pre data-prefix="$">
                <code>ls</code>
              </pre>
              <pre data-prefix="$" className="text-info">
                <code>College : NSUT</code>
              </pre>
              <pre data-prefix="$" className="text-info">
                <code>Branch : I.T.</code>
              </pre>
              <pre data-prefix="$" className="text-info">
                <code>Grade Transcirpt</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>CGPA: 9.0 </code>
              </pre>
              <pre data-prefix=">" className="text-error">
                <code>Status: Ongoing...</code>
              </pre>
            </div>
          </div>

          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Hobbies</time>
            <div className="text-lg font-black"> </div>
            <div className="mockup-code max-w-xl bg-info-content text-start">
              <pre data-prefix="$">
                <code>cd /Hobbies</code>
              </pre>
              <pre data-prefix="$">
                <code>ls</code>
              </pre>
              <pre data-prefix="~" className="text-warning">
                <code>Sports Movies Travel</code>
              </pre>

              <pre data-prefix="$">
                <code>age --version</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>{today.getFullYear() - 2002}.0</code>
              </pre>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default About;
