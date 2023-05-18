import { Configuration, OpenAIApi, CreateCompletionResponse } from 'openai';
import { NextResponse } from 'next/server'

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

export async function GET(request: Request) {
  // const body = await request.json()
  // console.log('body data', body);

  try {
    console.log('Initializing Tailwind Generation');
    const data = await getCompletion('Please replace X: There X continents on the planet Earth');
    console.log('Success!');

    if (!(data?.choices?.length)) {
      console.log('Received invalid response from OpenAI');
      return NextResponse.error();
    }

    return NextResponse.json(data.choices[0].text)
  } catch (err) {
    console.log('error', err)
  }
}
