import ReactCodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { javascript } from "@codemirror/lang-javascript";

const Editor = () => {
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <div className="h-full w-6/12">
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
    </div>
  );
};

export default Editor;
