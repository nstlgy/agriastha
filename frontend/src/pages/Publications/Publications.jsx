import React, { useState } from "react";
import { Search, Calendar, Download, SortAsc, SortDesc } from "lucide-react";
import { Card } from "@/components/common/Card/Card";
import { Button } from "@/components/common/Button/Button";

const Publications = () => {
  const [publications, setPublications] = useState([
    {
      id: 1,
      title: "Machine Learning Applications in Healthcare",
      authors: "John Smith, Jane Doe",
      date: "2023-06-15",
      pdfUrl: "https://drive.google.com/file/d/example1",
      keywords: ["Machine Learning", "Healthcare", "AI Diagnostics"],
    },
    {
      id: 2,
      title: "Deep Learning for Computer Vision",
      authors: "Bob Johnson, Sarah Wilson",
      date: "2023-05-20",
      pdfUrl: "https://drive.google.com/file/d/example2",
      abstract:
        "An in-depth analysis of deep learning techniques in computer vision applications and their impact on image recognition systems.",
      keywords: ["Deep Learning", "Computer Vision", "Image Recognition"],
    },
    {
      id: 3,
      title: "Natural Language Processing Advances",
      authors: "Mike Brown, Lisa Davis",
      date: "2023-04-10",
      pdfUrl: "https://drive.google.com/file/d/example3",
      abstract:
        "A comprehensive review of recent advances in natural language processing and their applications in modern linguistics.",
      keywords: ["NLP", "Linguistics", "AI"],
    },
  ]);

  const [filterDate, setFilterDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const sortedAndFilteredPublications = publications
    .filter((pub) => (filterDate ? pub.date.includes(filterDate) : true))
    .filter((pub) =>
      searchTerm
        ? pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub.authors.toLowerCase().includes(searchTerm.toLowerCase())
        : true,
    )
    .sort((a, b) => {
      if (sortConfig.direction === "asc") {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      }
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-[var(--bg-primary)]">
      <header className="mb-12 text-center">
        <h1 className="journal-heading text-4xl font-bold mb-4 text-[var(--text-primary)]">
          Publications
        </h1>
        <p className="article-meta max-w-2xl mx-auto">
          Explore our peer-reviewed research papers and scientific contributions
          in agricultural innovation and sustainability.
        </p>
      </header>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]"
            size={20}
          />
          <input
            type="text"
            placeholder="Search publications..."
            className="w-full pl-10 pr-4 py-2 border border-[var(--border-primary)] rounded-md bg-[var(--bg-primary)] text-[var(--text-primary)]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Calendar
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]"
            size={20}
          />
          <input
            type="text"
            placeholder="Filter by year..."
            className="w-full md:w-48 pl-10 pr-4 py-2 border border-[var(--border-primary)] rounded-md bg-[var(--bg-primary)] text-[var(--text-primary)]"
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-primary)]">
              <th
                className="px-4 py-3 text-left cursor-pointer hover:bg-[var(--bg-tertiary)]"
                onClick={() => handleSort("title")}
              >
                <div className="flex items-center gap-2">
                  Title
                  {sortConfig.key === "title" &&
                    (sortConfig.direction === "asc" ? (
                      <SortAsc size={16} />
                    ) : (
                      <SortDesc size={16} />
                    ))}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left cursor-pointer hover:bg-[var(--bg-tertiary)]"
                onClick={() => handleSort("authors")}
              >
                <div className="flex items-center gap-2">
                  Authors
                  {sortConfig.key === "authors" &&
                    (sortConfig.direction === "asc" ? (
                      <SortAsc size={16} />
                    ) : (
                      <SortDesc size={16} />
                    ))}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left cursor-pointer hover:bg-[var(--bg-tertiary)]"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center gap-2">
                  Date
                  {sortConfig.key === "date" &&
                    (sortConfig.direction === "asc" ? (
                      <SortAsc size={16} />
                    ) : (
                      <SortDesc size={16} />
                    ))}
                </div>
              </th>
              <th className="px-4 py-3 text-center">Download</th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredPublications.map((pub) => (
              <tr
                key={pub.id}
                className="border-b border-[var(--border-primary)] hover:bg-[var(--bg-secondary)]"
              >
                <td className="px-4 py-4">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      {pub.title}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pub.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-[var(--text-secondary)]">
                  {pub.authors}
                </td>
                <td className="px-4 py-4 text-[var(--text-secondary)]">
                  {pub.date}
                </td>
                <td className="px-4 py-4 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePdfClick(pub.pdfUrl)}
                  >
                    <Download size={16} className="mr-2" />
                    PDF
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Publications;
