function StrengthMeter({ strength }) {
  const strengthLabels = {
    0: "",
    1: "TOO WEAK!",
    2: "WEAK",
    3: "MEDIUM",
    4: "STRONG",
  };

  return (
    <div className="mb-8 flex items-center justify-between bg-[#18171F] px-5 py-4">
      <p className="text-sm font-bold uppercase text-[#817D92] sm:text-base">
        Strength
      </p>

      <div className="flex items-center gap-3">
        {strength > 0 && (
          <span className="mr-1 text-lg font-bold uppercase text-white">
            {strengthLabels[strength]}
          </span>
        )}

        <div className="flex gap-1.5">
          {[1, 2, 3, 4].map((bar) => (
            <span
              key={bar}
              className={`h-7 w-2 border-2 ${
                bar <= strength
                  ? strength === 1
                    ? "border-[#F64B4B] bg-[#F64B4B]"
                    : strength === 2
                      ? "border-[#FB7C58] bg-[#FB7C58]"
                      : strength === 3
                        ? "border-[#F8CD65] bg-[#F8CD65]"
                        : "border-[#A4FFAF] bg-[#A4FFAF]"
                  : "border-white bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StrengthMeter;
