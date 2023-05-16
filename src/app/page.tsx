import Image from 'next/image'
import CodePlayground from './coms/CodePlayground';
import Prompt from './coms/Prompt';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 xl:p-24">
      <h1>Next.js + Tailwind CSS</h1>
      <Prompt />
      <CodePlayground />
    </main>
  )
}
