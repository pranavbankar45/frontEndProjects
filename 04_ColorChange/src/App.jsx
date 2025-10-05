import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // Update body background when color changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  // 7 colors for buttons
  const colors = ["red", "blue", "black", "green", "purple", "yellow", "orange"];

  return (
    <div className="w-full h-screen flex items-center justify-center relative duration-200">
      {   }
      <div className="absolute bottom-12 flex gap-4 shadow-xl bg-white px-8 py-6 rounded-3xl">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className="px-5 py-2 rounded-full text-white font-semibold capitalize shadow-md hover:scale-105 transition"
            style={{ backgroundColor: c }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
