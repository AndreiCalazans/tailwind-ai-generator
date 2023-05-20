import CodePlayground from "@/app/coms/CodePlayground";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function getCodeFromDb(id?: string) {
  let _id = Number(id);
  if (isNaN(_id)) {
    return null;
  }

  return await prisma.snippet.findUnique({ where: { id: Number(id) } });
}

export default async function Tailwind({ params }: { params: { id: string } }) {
  const data = await getCodeFromDb(params.id);

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex min-h-screen flex-col justify-evenly p-6 sm:px-12 xl:px-24">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">{data.title}</span>
        <span className="block text-xl text-indigo-600">Prompt: {data.prompt}</span>
      </h2>
      <CodePlayground code={data.snippet.toString()} />
    </div>
  );
}
