import React from "react";

const Guidelines = () => {
  const guidelines = [
    "Only original research articles will be accepted for the publication in the magazine and same should not be published elsewhere.",
    "The view expressed in the paper will solely be of the authors.",
    "Articles on original research work should not exceed total 5 typed pages.",
    "The article of advance research in the area of Agricultural Sciences, Science and allied subjects of Science &Technology, Engineering & Technology, Social Science and Home Science are considered for publication.",
    "Title should be specific, informative and short.",
    "A short title not exceeding 30 letters should also be written for running headlines.",
    "By-line should contain the names and initial of the authors, the place and organization where research work was conducted. Present address, e-mail and mobile no. should also be given as a footnote.",
    "For citing references a recent issue of the Journal should be consulted. The alphabetically arranged complete references should be numbered and the same may be used in the text where necessary.",
    "All articles are sent to the members of editorial board and referees for scrutiny, and authors should improve the article, indicating the modifications made separately.",
    "Article should be typed as double spaced throughout (including by-line, abstract, references and tables) on white, durable A-4 size paper, with a 4 cm. margin at the top, bottom and left. Article should be mailed to : Email :- agriastha2021@gmail.com",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Guideline for Authors
      </h1>
      <h2 className="text-xl font-semibold mb-4 text-center">
        AGRIASTHA- Indigenous Development in Agriculture
      </h2>

      <p className="mb-6 text-gray-700">
        Authors are requested to follow the following instructions in
        preparation of the manuscript for publication in the half yearly
        Journal.
      </p>

      <ol className="list-decimal pl-6 space-y-4">
        {guidelines.map((guideline, index) => (
          <li key={index} className="text-gray-800">
            {guideline}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Guidelines;
