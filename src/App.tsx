import { useState } from "react";
import Editor from "./components/Editor";
import Reviewer from "./components/Reviewer";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  const handleCodeChange = (code: string) => {
    setCode(code);
  };

  const handleGenerateReview = () => {
    fetch("http://localhost:3000/review", {
      method: "POST",
      body: JSON.stringify({ code: code }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log("data", data);

      setReview(data.review);
    })
    .catch(err => {
      console.error(err);
    });
  };

  return (
    <div className="h-screen flex">
      <Editor code={code} onChange={handleCodeChange} onGenerateReview={handleGenerateReview} />
      <Reviewer review={review} />
    </div>
  );
}

export default App;
