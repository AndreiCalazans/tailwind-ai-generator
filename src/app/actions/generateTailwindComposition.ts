"use server";
import { Configuration, OpenAIApi, CreateCompletionResponse } from "openai";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function makePromptForDescription(description: string) {
  return `
Create a component using TailwindCSS and React with the following description: "${description}"

rules to follow:
  - Make it nicely styled.
  - Make it responsive.
  - Examples are self contained and don't require outside props.
  - Always add minimum amount of padding.
  - If icons are requested return valid SVGs.
  - Don't include any library, use strictly only TailwindCSS and React.
  - Return just code.
  - Don't return code inside triple brackets.
`;
}

function makePromptForTitle(description: string) {
  return `Given this prompt: "${description}" 
Summarize into a title the UI element that was created, don't include libraries mentioned.`;
}

async function getCompletion(
  description: string
): Promise<CreateCompletionResponse> {
  const request = {
    prompt: description,
    temperature: 0.7,
    top_p: 0.9,
    max_tokens: 2200,
    model: "text-davinci-003",
  };
  const response = await openai.createCompletion(request);
  return response.data;
}

export async function generateTailwindComponent(data: FormData) {
  const description = data.get("description") as string | null;

  if (description === null) {
    return null;
  }

  let dataId;
  try {
    console.log("Initializing Tailwind Generation", description);
    const [title, snippet] = await Promise.all([
      getCompletion(makePromptForTitle(description)),
      getCompletion(makePromptForDescription(description)),
    ]);
    console.log("Success!");

    if (!snippet?.choices?.length) {
      console.log("Received invalid response from OpenAI");
      return null;
    }

    const generatedSnippet = snippet.choices[0].text;
    console.log("Generated Snippet", title.choices);

    // Sometimes we get a title with some new lines which we want to remove.
    const snippetTitle = (title.choices[0].text ?? "Unitled Snippet").replace(
      /\n/g,
      ""
    );
    const data = await prisma.snippet.create({
      data: {
        title: snippetTitle,
        prompt: description,
        // Sometimes snippets are returned within a triple backtick.
        snippet: Buffer.from((generatedSnippet ?? "").replace(/```/g, "")),
      },
    });

    dataId = data.id;
  } catch (err) {
    console.log("error", err);
    /*
     * This is a code smell from Next.js' redirect function not working inside
     * a try catch block -_-.
     * */
    throw err;
  }

  if (!dataId) {
    return null;
  }

  // code smell: redirect doesn't work inside try-catch.
  // (https://github.com/vercel/next.js/issues/49298)
  redirect(`/tailwind/${dataId}`);
}
