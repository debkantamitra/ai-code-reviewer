import ReactCodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { javascript } from "@codemirror/lang-javascript";

const Editor = () => {
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <div className="h-full w-6/12 relative">
      <ReactCodeMirror
        value={value}
        height="100%"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={"dark"}
        style={{
          fontSize: 16,
          height: "100%",
        }}
      />
      <button
        className="absolute top-0 right-0 w-max p-2 bg-green-500 text-white rounded-md 
        cursor-pointer text-sm m-4 hover:bg-green-600 transition-all duration-300 
        active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
        disabled={!value}
      >
        Generate Review
      </button>
    </div>
  );
};

export default Editor;
