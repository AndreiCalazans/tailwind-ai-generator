import { generateTailwindComponent } from "../actions/generateTailwindComposition";
import GenerateButton from "./GenerateButton";

export default function Prompt() {
  return (
    <form className="w-full" action={generateTailwindComponent}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Generate Tailwind JSX
      </label>
      <div className="relative">
        <textarea
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Describe your Tailwind component here: e.g. 'A button with a blue background and rounded corners'"
          required
          name="description"
        />
        <GenerateButton />
      </div>
    </form>
  );
}
