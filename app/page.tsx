import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header>
        <ul className="flex flex-row space-x-4">
          <li>
            <a>
              Nicks blog
            </a>
          </li>
          <li>
            <a>
              About
            </a>
          </li>
          <li>
            <a>
              Posts
            </a>
          </li>
        </ul>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>
          Main content
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
