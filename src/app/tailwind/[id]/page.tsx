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
    <div>
      <p>{data.title}</p>
      <p>{data.prompt}</p>
      <CodePlayground code={data.snippet.toString()} />;
    </div>
  );
}
