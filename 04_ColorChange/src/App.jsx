import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // Update body background when color changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="w-full h-screen duration-200">
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-4 shadow-lg bg-white px-5 py-3 rounded-3xl">
          {["red", "blue", "black", "green", "purple"].map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className="px-5 py-2 rounded-full text-white font-semibold capitalize"
              style={{ backgroundColor: c }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
