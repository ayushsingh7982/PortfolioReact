import React from 'react';
// Import icons from lucide-react.
// Make sure you have lucide-react installed: npm install lucide-react
import { Home, Briefcase, Info, Code, Mail } from 'lucide-react';

// Define the type for a navigation link to ensure type safety in TypeScript
interface NavLink {
  name: string;
  href: string;
  Icon: React.ElementType; // Using React.ElementType for the icon component
}

const Navbar: React.FC = () => {
  // Define navigation links with their names, hrefs, and corresponding Lucide icons
  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home', Icon: Home },
    { name: 'Services', href: '#services', Icon: Briefcase },
    { name: 'About', href: '#about', Icon: Info },
    { name: 'Skills', href: '#skills', Icon: Code },
    { name: 'Contact', href: '#contact', Icon: Mail },
  ];

  return (
    // Main navigation container with glassmorphism effect and rounded corners
    // bg-white/10: white background with 10% opacity
    // backdrop-blur-md: applies a medium blur effect to content behind it
    // border border-white/20: a subtle white border with 20% opacity
    // shadow-lg: a large shadow for depth
    // rounded-full: makes the navbar fully rounded
    // px-6 py-3: horizontal and vertical padding
    // fixed top-4 left-1/2 -translate-x-1/2: fixes it at the top, centers it horizontally
    // z-50: ensures it stays on top of other content
    // w-11/12 md:w-4/5 lg:w-3/4 max-w-screen-xl: responsive width
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                    rounded-full px-6 py-3
                    w-11/12 md:w-4/5 lg:w-3/4 max-w-screen-xl
                    flex justify-center items-center font-inter"> {/* Added font-inter */}

      {/* Inner container for content, handles spacing and responsiveness */}
      <div className="flex justify-between items-center w-full">
        {/* Brand Name - styled with white text, bold, and larger font */}
        <a href="#home" className=" font-primary text-white text-xl md:text-2xl font-bold whitespace-nowrap mr-4">
          JetMinds
        </a>

        {/* Navigation Links - hidden on small screens, shown on medium and up */}
        {/* flex-wrap: allows items to wrap to the next line if space is limited */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-wrap justify-end font-primary">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* Individual navigation link */}
              {/* text-white: white text color */}
              {/* hover:text-gray-300: changes text to light gray on hover */}
              {/* transition-colors duration-300: smooth color transition */}
              {/* flex items-center: aligns icon and text horizontally */}
              {/* space-x-1: small space between icon and text */}
              {/* relative: needed for the absolute positioning of the pseudo-element */}
              {/* group: enables group-hover utilities for child elements */}
              <a
                href={link.href}
                className="relative text-white hover:text-gray-300 transition-colors duration-300
                           flex items-center space-x-1 text-sm md:text-base whitespace-nowrap
                           group" // Added group class for hover effect
              >
                {/* Render the Lucide icon component */}
                <link.Icon size={18} className="inline-block" />
                <span>{link.name}</span>
                {/* Underline effect: absolute positioned pseudo-element */}
                {/* absolute bottom-0 left-0: positions it at the bottom left of the link */}
                {/* w-0: starts with zero width */}
                {/* h-0.5: height of the line */}
                {/* bg-white: color of the line */}
                {/* group-hover:w-full: expands to full width on hover of the parent group */}
                {/* transition-all duration-300 ease-out: smooth transition for width */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white
                                 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button (optional, not implemented for full menu here but placeholder) */}
        {/* You would typically add a hamburger icon here for a mobile dropdown menu */}
        <div className="md:hidden">
          {/* This could be a button to toggle a mobile menu */}
          {/* For this example, we are simply hiding the nav links on small screens */}
          {/* and showing them on medium screens and up. */}
          {/* If you want a mobile menu, you'd add state and a button here. */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
