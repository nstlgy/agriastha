import React from "react";

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="text-center">
    <img src={imageSrc} alt={name} className="w-32 h-32 mx-auto mb-4" />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
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
        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember
            name="Dr. Bhisham Pal"
            role="Chief Editor"
            imageSrc="src/assets/Bhisham_Pal.jpg"
          />
          <TeamMember
            name="Dr. S.P. Singh"
            role="Editor"
            imageSrc="src/assets/sp.jpg"
          />
          <TeamMember
            name="Dr. Uma"
            role="Managing Director"
            imageSrc="src/assets/uma.jpg"
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
      </section>
    </div>
  );
}

export default About;
