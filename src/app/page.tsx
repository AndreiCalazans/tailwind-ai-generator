import CodePlayground from './coms/CodePlayground';
import Prompt from './coms/Prompt';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-evenly p-6 sm:px-12 xl:px-24">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Tailwind Component Generator</span>
          <span className="block text-2xl text-indigo-600"><Link className="underline" href="/gallery">Copy from gallery</Link> or generate from prompt ↓</span>
        </h2>
      <Prompt />
      <CodePlayground />
    </main>
  )
}
