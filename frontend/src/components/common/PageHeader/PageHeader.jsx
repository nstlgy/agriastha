export function PageHeader({ title, description }) {
  return (
    <header className="mb-12 text-center">
      <h1 className="journal-heading text-4xl font-bold mb-4 text-[var(--text-primary)]">
        {title}
      </h1>
      {description && (
        <p className="article-meta max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
}