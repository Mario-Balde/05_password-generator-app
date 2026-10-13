function CharacterLength({ length, setLength }) {
  const percentage = (length / 20) * 100;

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="text-white">Character Length</p>

        <span className="text-[#A4FFAF] text-3xl font-bold">{length}</span>
      </div>

      <div className="relative mb-8">
        <input
          type="range"
          min="0"
          max="20"
          value={length}
          onChange={(event) => setLength(Number(event.target.value))}
          aria-label="Character length"
          style={{
            background: `linear-gradient(
              to right,
              #A4FFAF 0%,
              #A4FFAF ${percentage}%,
              #18171F ${percentage}%,
              #18171F 100%
            )`,
          }}
          className="h-2 w-full cursor-pointer appearance-none rounded-none focus:outline-none
            [&::-webkit-slider-thumb]:h-7
            [&::-webkit-slider-thumb]:w-7
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-0
            hover:[&::-webkit-slider-thumb]:ring-2
            hover:[&::-webkit-slider-thumb]:ring-[#A4FFAF]
            focus:[&::-webkit-slider-thumb]:ring-2
            focus:[&::-webkit-slider-thumb]:ring-[#A4FFAF]
            [&::-moz-range-thumb]:h-7
            [&::-moz-range-thumb]:w-7
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-0
            hover:[&::-moz-range-thumb]:ring-2
            hover:[&::-moz-range-thumb]:ring-[#A4FFAF]
            focus:[&::-moz-range-thumb]:ring-2
            focus:[&::-moz-range-thumb]:ring-[#A4FFAF]"
        />
      </div>
    </>
  );
}

export default CharacterLength;
