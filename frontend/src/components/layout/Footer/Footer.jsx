export function Footer() {
  return (
    <footer className="bg-[var(--bg-tertiary)] border-t border-[var(--border-primary)]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About the Journal</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Agriastha publishes peer-reviewed research in agricultural sciences, focusing on sustainable practices and innovation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Current Issue</li>
              <li>Archive</li>
              <li>Submit Manuscript</li>
              <li>Review Process</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Indexing</h3>
            <ul className="space-y-2 text-sm">
              <li>Web of Science</li>
              <li>Scopus</li>
              <li>Google Scholar</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Editorial Office</li>
              <li>Email: editor@agriastha.org</li>
              <li>ISSN: 2XXX-XXXX</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}