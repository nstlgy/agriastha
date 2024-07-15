import React from "react";
import { Link } from "react-router-dom";

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="flex flex-col items-center">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center mb-8">
        <Link to="/" className="text-xl font-bold flex items-center">
          <span className="mr-2">🌱</span> Agriastha
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link to="/about" className="font-bold">
            About
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-black">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>
      </nav>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">About Agriastha</h1>
        <p className="text-xl text-gray-600">
          Promoting Sustainable Agriculture Practices
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            At Agriastha, our mission is to advance sustainable agriculture
            through innovative practices and research. We aim to provide
            solutions that enhance productivity while preserving the environment
            for future generations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <p>
            Integrity, innovation, and sustainability are at the core of
            everything we do. We believe in fostering a community that values
            ethical practices, continuous improvement, and environmental
            stewardship.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="flex justify-around">
          <TeamMember
            name="Alice Bennett"
            role="Chief Agronomist"
            imageSrc="/path/to/alice-image.jpg"
          />
          <TeamMember
            name="David Zhang"
            role="Sustainability Expert"
            imageSrc="/path/to/david-image.jpg"
          />
          <TeamMember
            name="Sophie Turner"
            role="Research Scientist"
            imageSrc="/path/to/sophie-image.jpg"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Commitment to Sustainability
          </h2>
          <p>
            Agriastha is dedicated to implementing sustainable practices across
            all our projects. From reducing carbon footprints to promoting
            biodiversity, we are committed to making a positive impact on the
            environment.
          </p>
        </div>
        <div>
          <img
            src="/path/to/sustainability-image.jpg"
            alt="Sustainable farming"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>© 2023 Agriastha. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-black">
            Facebook
          </a>
          <a href="#" className="hover:text-black">
            Twitter
          </a>
          <a href="#" className="hover:text-black">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
