import Link from "next/link";
import { PrismaClient } from "@prisma/client";

import CodePlayground from "../coms/CodePlayground";
import SandpackPreviewPane from "../coms/SandpackPreviewPane";

const prisma = new PrismaClient();

const SnippetCard = ({
  title,
  id,
  code,
}: {
  title: string;
  code: string;
  id: number;
}) => {
return (
  <div className="w-1/3 p-3 mb-4">
    <Link href={`/tailwind/${id}`}>
      <div className="rounded-md overflow-hidden shadow-md bg-white">
        <div className="flex flex-col p-4">
          <div className="text-lg font-semibold">{title}</div>
          <div className="w-full h-48">
          <SandpackPreviewPane code={code} />
          </div>
        </div>
      </div>
    </Link>
  </div>
)
};

export default async function Gallery() {
  const snippets = await prisma.snippet.findMany();
  return (
    <main className="flex min-h-screen flex-col justify-evenly p-6 sm:px-12 xl:px-24">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Tailwind Component Gallery</span>
        <span className="block text-2xl text-indigo-600">
          Use a component already created
        </span>
      </h2>

      <div className="flex flex-wrap">
        {snippets.map((snippet, i) => (
          <SnippetCard
            key={`snippet_card_${i}`}
            id={snippet.id}
            title={snippet.title}
            code={snippet.snippet.toString()}
          />
        ))}
      </div>
    </main>
  );
}
