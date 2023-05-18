'use server'
import { Configuration, OpenAIApi, CreateCompletionResponse } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getCompletion(description: string): Promise<CreateCompletionResponse> {
  const request = {
    prompt: description,
    temperature: 0.7,
    top_p: 0.9,
    model: "text-davinci-003",
  };
  const response = await openai.createCompletion(request);
  return response.data;
}

export async function generateTailwindComponent(data: FormData) {
  const description = data.get('description') as string | null;
  
  if (description === null) {
    return null;
  }

  try {
    console.log('Initializing Tailwind Generation');
    const data = await getCompletion(description);
    console.log('Success!');

    if (!(data?.choices?.length)) {
      console.log('Received invalid response from OpenAI');
      return null;
    }

    return data.choices[0].text
  } catch (err) {
    return null;
  }
}
