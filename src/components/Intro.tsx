import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'; // Importing icons from lucide-react

// Intro component with typing effect and social links
const Intro = () => {
  // State to manage the text being displayed character by character
  const [displayedText, setDisplayedText] = useState('');
  // The full text to be typed out
  const fullText = "Hi, I'm Ayush,\nA Web Developer, Freelancer, UI/UX Designer, Engineer.";
  // State to manage the index of the current character being typed
  const [textIndex, setTextIndex] = useState(0);

  // Effect hook for the typing animation
  useEffect(() => {
    if (textIndex < fullText.length) {
      // Set a timeout to add the next character after a delay
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 70); // Typing speed in milliseconds

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(typingTimeout);
    }
  }, [textIndex, fullText]); // Dependencies for the effect

  return (
    // Container for the Intro section, now always a column layout
    <div className="relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto p-8 bg-transparent rounded-xl shadow-none">
      {/* Left section for the typing effect - now top section */}
      <div className="flex-1 text-center mb-12"> {/* Changed to text-center and adjusted margin-bottom */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
          {displayedText}
          {/* Blinking cursor */}
          <span className="animate-pulse inline-block w-2 h-7 sm:h-9 lg:h-10 bg-blue-500 ml-1 rounded-sm"></span> {/* Adjusted cursor height */}
        </h1>
      </div>

      {/* Right section for social links - now bottom section */}
      <div className="flex-shrink-0 flex flex-col items-center space-y-8 p-6 bg-gray-800/20 rounded-xl border border-gray-700/50 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Connect with me:</h2> {/* Adjusted text size */}
        <div className="flex space-x-8">
          {/* GitHub Link */}
          <a
            href="https://github.com/yourusername" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="GitHub Profile"
          >
            <Github size={40} strokeWidth={1.5} /> {/* Adjusted icon size */}
          </a>
          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={40} strokeWidth={1.5} /> {/* Adjusted icon size */}
          </a>
          {/* Twitter Link */}
          <a
            href="https://twitter.com/yourusername" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Twitter Profile"
          >
            <Twitter size={40} strokeWidth={1.5} /> {/* Adjusted icon size */}
          </a>
          {/* Email Link */}
          <a
            href="mailto:youremail@example.com" // Replace with your email address
            className="text-gray-300 hover:text-blue-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Send an email"
          >
            <Mail size={40} strokeWidth={1.5} /> {/* Adjusted icon size */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro; // Export the Intro component directly
