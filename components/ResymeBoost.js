import { useState } from "react";

const ResymeBoost = () => {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };
  const onUserChangedText = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="flex flex-col items-center p-2 py-16">
      <h1 className="text-4xl tracking-wider font-bold pb-4">Resyme Boost</h1>
      <form className="py-8 text-right">
        <p className="py-2 text-left">Enter job description:</p>
        <div>
          <textarea
            value={userInput}
            onChange={onUserChangedText}
            rows="10"
            className="w-[300px] sm:w-[600px] border-none rounded-[3px] text-black pl-1 mb-4"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={callGenerateEndpoint}
          className="bg-[#e0ffff] text-[#5f7470] py-1 px-2 rounded-sm"
        >
          Submit
        </button>
      </form>
      {apiOutput && (
        <div className="w-[300px] sm:w-[600px]">
          <h2 className="text-4xl text-center py-2">Output</h2>
          <p className="py-2">{apiOutput}</p>
        </div>
      )}
    </div>
  );
};

export default ResymeBoost;
