import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <p>
          Main content
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
