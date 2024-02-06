import { PromptPlayground } from "./ui/prompt-playground";

export default function Home() {
  return (
    <main className="container max-w-lg m-auto flex flex-col min-h-screen">
      <header className="py-4">
        <h1 className="text-3xl font-bold text-center">Make me laugh!</h1>
      </header>

      <div className="flex flex-col gap-y-2">
        <PromptPlayground />
      </div>

    </main>
  );
}
