import { useState } from "react";
import { Copy, Check } from "lucide-react";

function PasswordDisplay({ password }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!password) return;

    await navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-[#24232C] px-6 py-5 mb-6 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <p className="min-w-0 truncate text-[#817D92] text-2xl font-bold sm:text-3xl">
          {password || "P4$5W0rD!"}
        </p>

        <button
          onClick={handleCopy}
          aria-label={copied ? "Password copied" : "Copy password"}
          className="shrink-0 text-[#A4FFAF] transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#A4FFAF] focus:ring-offset-2 focus:ring-offset-[#24232C]"
        >
          {copied ? <Check size={28} /> : <Copy size={28} />}
        </button>
      </div>
    </div>
  );
}

export default PasswordDisplay;
