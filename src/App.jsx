import { useState } from "react";

import PasswordDisplay from "./components/PasswordDisplay";
import CharacterLength from "./components/CharacterLength";
import PasswordOptions from "./components/PasswordOptions";
import StrengthMeter from "./components/StrengthMeter";

import generatePassword from "./utils/generatePassword";
import calculateStrength from "./utils/calculateStrength";

function App() {
  const [password, setPassword] = useState("");

  const [length, setLength] = useState(0);

  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handleGenerate = () => {
    const hasOption = Object.values(options).some(Boolean);

    if (!hasOption || length === 0) {
      return;
    }

    const newPassword = generatePassword(length, options);

    setPassword(newPassword);
  };

  const strength = calculateStrength(length, options);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#14131A] to-[#0A090D] px-4 py-4 flex items-start justify-center sm:items-center sm:py-8">
      <div className="w-full max-w-[540px] min-w-0">
        <h1 className="text-center text-[#817D92] text-2xl font-bold mb-6 sm:mb-8">
          Password Generator
        </h1>

        <PasswordDisplay password={password} />

        <div className="bg-[#24232C] px-6 py-6 sm:px-8 sm:py-7">
          <CharacterLength length={length} setLength={setLength} />

          <PasswordOptions options={options} setOptions={setOptions} />

          <StrengthMeter strength={strength} />

          <button
            onClick={handleGenerate}
            className="group flex w-full items-center justify-center gap-4 bg-[#A4FFAF] py-4 text-base font-bold text-[#18171F] transition-colors hover:bg-transparent hover:text-[#A4FFAF] hover:outline hover:outline-2 hover:outline-[#A4FFAF] focus:outline-none focus:ring-2 focus:ring-[#A4FFAF] focus:ring-offset-2 focus:ring-offset-[#24232C]"
          >
            GENERATE
            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
