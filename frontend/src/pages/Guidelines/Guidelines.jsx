import React from "react";

const Guidelines = () => {
  const guidelines = [
    "Only original research articles will be accepted for publication in the magazine. The same should not be published elsewhere.",
    "The views expressed in the paper will solely be those of the authors.",
    "Articles on original research work should not exceed a total of 5 typed pages.",
    "Articles on advanced research in Agricultural Sciences, Science and allied subjects of Science & Technology, Engineering & Technology, Social Science, and Home Science are considered for publication.",
    "The title should be specific, informative, and concise.",
    "A short title not exceeding 30 characters should also be provided for running headlines.",
    "The byline should contain the names and initials of the authors, the place and organization where the research work was conducted. Present address, email, and mobile number should be given as a footnote.",
    "For citing references, a recent issue of the Journal should be consulted. The alphabetically arranged complete references should be numbered and used in the text where necessary.",
    "All articles are sent to members of the editorial board and referees for scrutiny. Authors should improve the article as per suggestions, indicating the modifications made separately.",
    "Articles should be typed double-spaced throughout (including byline, abstract, references, and tables) on white, durable A-4 size paper, with a 4 cm margin at the top, bottom, and left.",
    "Articles should be emailed to: agriastha2021@gmail.com",
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-10">
            <h1 className="text-3xl font-bold mb-2 text-center text-green-800 border-b pb-4">
              Guidelines for Authors
            </h1>
            <h2 className="text-xl mb-6 text-center text-gray-700">
              AGRIASTHA - Indigenous Development in Agriculture
            </h2>

            <p className="mb-8 text-gray-700 text-lg leading-relaxed">
              Authors are requested to adhere to the following instructions when preparing manuscripts for publication in our biannual Journal. Strict compliance with these guidelines ensures a smooth review process and timely publication.
            </p>

            <ol className="list-decimal pl-6 space-y-6">
              {guidelines.map((guideline, index) => (
                <li key={index} className="text-gray-800 leading-relaxed">
                  {guideline}
                </li>
              ))}
            </ol>

            <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Important Note:</h3>
              <p className="text-gray-700 leading-relaxed">
                Adherence to these guidelines is crucial for consideration of your manuscript. Submissions that do not conform to these standards may be returned for revision before the peer review process can begin. We appreciate your cooperation in maintaining the high standards of our publication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
