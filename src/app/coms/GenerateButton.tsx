"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function GenerateButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="self-end	text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {pending ? "Generating..." : "Generate"}
    </button>
  );
}
