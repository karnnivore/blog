export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <main className="h-screen flex flex-col gap-8 row-start-2 items-center align-middle sm:items-start ">
        <div className="m-auto">
          <h1 className="text-4xl font-bold">
            Nick Chinsen
          </h1>
          <p className="mt-2">
            I am a software engineer and writer. I write about software, technology, and personal development.
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
