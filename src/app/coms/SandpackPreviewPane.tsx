"use client";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

const SandpackPreviewPane = ({ code }: { code: string }) => (
  <SandpackProvider
    template="react"
    options={{
      externalResources: ["https://cdn.tailwindcss.com"],
    }}
    files={{
      "/App.js": code,
    }}
  >
    <SandpackLayout>
      <SandpackPreview />
    </SandpackLayout>
  </SandpackProvider>
);

export default  SandpackPreviewPane;
