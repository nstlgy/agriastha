import React from "react";
import { assets } from "@/assets/assets";

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <div className="h-48 overflow-hidden">
      <img src={imageSrc} alt={name} className="w-full h-full object-cover object-center" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

function About() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-primary">About Agriastha</h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Pioneering Indigenous Development in Agriculture
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At Agriastha, our mission is to advance sustainable agriculture
              through innovative practices and cutting-edge research. We strive to
              provide solutions that enhance productivity while preserving the
              environment for future generations, ensuring food security and
              economic prosperity for farming communities.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Values</h2>
            <p className="text-lg leading-relaxed">
              Integrity, innovation, and sustainability are at the core of
              everything we do. We believe in fostering a community that values
              ethical practices, continuous improvement, and environmental
              stewardship. Our commitment to these principles drives our research
              and shapes our partnerships with farmers and industry leaders.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. Bhisham Pal"
              role="Chief Editor"
              imageSrc={assets.bp}
            />
            <TeamMember
              name="Dr. S.P. Singh"
              role="Editor"
              imageSrc={assets.sp}
            />
            <TeamMember
              name="Dr. Uma"
              role="Managing Director"
              imageSrc={assets.uma}
            />
          </div>
        </section>

        <section className="bg-white p-12 rounded-lg shadow-md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary text-center">
              Our Commitment to Sustainability
            </h2>
            <p className="text-lg leading-relaxed text-center">
              Agriastha is dedicated to implementing sustainable practices across
              all our projects. From reducing carbon footprints to promoting
              biodiversity, we are committed to making a positive impact on the
              environment. Our research focuses on developing eco-friendly
              agricultural techniques that balance productivity with conservation,
              ensuring a sustainable future for agriculture.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
