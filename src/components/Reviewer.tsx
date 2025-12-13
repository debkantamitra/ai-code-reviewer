import MarkdownPreview from "@uiw/react-markdown-preview";

const source = (review: string) => `
## MarkdownPreview

${review ? `> todo: ${review}` : '> Please generate a review for the code.'}
`;

interface ReviewerProps {
  review: string;
}

export default function Reviewer({ review }: ReviewerProps) {
  return (
    <div className="h-full w-6/12">
      <MarkdownPreview
        source={source(review)}
        style={{ padding: 16, width: "100%", height: "100%" }}
      />
    </div>
  );
}
