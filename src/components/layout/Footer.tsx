export function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-10 pb-28 text-sm text-muted-foreground md:px-12">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>© 2026 Liam Flores. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/liamflores-09" target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com/in/liamjedmflores" target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="mailto:liamjedmflores@gmail.com" className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
