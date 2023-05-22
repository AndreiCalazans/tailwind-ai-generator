const Header = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
    {children}
  </h1>
);

const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    {children}
  </p>
);

const About = () => {
  return (
    <div className="flex w-full gap-20 flex-col">
      <div className="">
        <Text>
          I am a developer who is passionate about using large language models
          (LLMs) to solve real-world problems. I believe that LLMs have the
          potential to revolutionize the way we develop software, and I am
          committed to exploring new ways to use them.
        </Text>
        <Text>
          My latest project is an LLM code generator for Tailwind React
          components. This tool allows developers to generate Tailwind React
          components from natural language descriptions. This can save
          developers a significant amount of time and effort, and it can help
          them to create more consistent and maintainable code.
        </Text>
        <Text>
          I am currently working on a number of other projects that use LLMs. I
          am excited about the potential of LLMs to make software development
          more efficient and productive, and I am committed to sharing my work
          with the community.
        </Text>
      </div>
      <div className="mx-auto">
        <Header>
          This project is a hobby project without any initial intention of
          monetization.
        </Header>
        <Text>
          I am developing this project as a hobby, and I do not have any plans
          to monetize it at this time. I am simply passionate about using LLMs
          to solve real-world problems, and I want to share my work with the
          community.
        </Text>
        <Text>
          However, I am open to the possibility of monetizing this project in
          the future. If I do decide to monetize this project, I will do so in a
          way that is fair and equitable to the community. I will also make sure
          that my monetization strategy does not impact the quality of my
          product or the experience of my users.
        </Text>
      </div>
      <div className="mx-auto">
        <Header>Disclaimer</Header>
        <Text>
          This software is provided as is under the MIT license. This means that
          you are free to use, modify, and redistribute this software for any
          purpose, without any restrictions. However, you are not allowed to
          claim ownership of this software, and you are not allowed to hold me
          liable for any damages caused by this software.
        </Text>
        <Text>
          I would love to hear from you! If you have any questions or feedback,
          please feel free to contact me at{" "}
          <a href="mailto:andreixoc@gmail.com">andreixoc@gmail.com</a>.
        </Text>
      </div>
    </div>
  );
};

export default async function AboutUs() {
  return (
    <main className="flex flex-col justify-evenly gap-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-indigo-600">About us</span>
      </h2>
      <About />
    </main>
  );
}
