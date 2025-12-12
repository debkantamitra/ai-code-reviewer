import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

export default function Demo() {
  return (
    <div className="h-full w-6/12">
      <MarkdownPreview
        source={source}
        style={{ padding: 16, width: "100%", height: "100%" }}
      />
    </div>
  );
}
