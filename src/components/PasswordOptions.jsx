function PasswordOptions({ options, setOptions }) {
  const handleChange = (event) => {
    const { name, checked } = event.target;

    setOptions({
      ...options,
      [name]: checked,
    });
  };

  return (
    <div className="space-y-4 mb-8">
      <label className="flex min-w-0 items-center gap-4 text-base text-white cursor-pointer sm:text-lg">
        <input
          type="checkbox"
          name="uppercase"
          checked={options.uppercase}
          onChange={handleChange}
          className="peer sr-only focus-visible:outline-none"
        />
        <span className="flex h-5 w-5 shrink-0 items-center justify-center border-2 border-white bg-transparent transition-colors hover:border-[#A4FFAF] peer-focus-visible:ring-2 peer-focus-visible:ring-[#A4FFAF] peer-checked:border-[#A4FFAF] peer-checked:bg-[#A4FFAF]">
          {options.uppercase && (
            <svg
              className="h-3 w-3 text-[#18171F]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M5 12l4 4L19 6" />
            </svg>
          )}
        </span>
        Include Uppercase Letters
      </label>

      <label className="flex min-w-0 items-center gap-4 text-base text-white cursor-pointer sm:text-lg">
        <input
          type="checkbox"
          name="lowercase"
          checked={options.lowercase}
          onChange={handleChange}
          className="peer sr-only"
        />
        <span className="flex h-5 w-5 shrink-0 items-center justify-center border-2 border-white bg-transparent transition-colors hover:border-[#A4FFAF] peer-focus-visible:ring-2 peer-focus-visible:ring-[#A4FFAF] peer-checked:border-[#A4FFAF] peer-checked:bg-[#A4FFAF]">
          {options.lowercase && (
            <svg
              className="h-3 w-3 text-[#18171F]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M5 12l4 4L19 6" />
            </svg>
          )}
        </span>
        Include Lowercase Letters
      </label>

      <label className="flex min-w-0 items-center gap-4 text-base text-white cursor-pointer sm:text-lg">
        <input
          type="checkbox"
          name="numbers"
          checked={options.numbers}
          onChange={handleChange}
          className="peer sr-only"
        />
        <span className="flex h-5 w-5 shrink-0 items-center justify-center border-2 border-white bg-transparent transition-colors hover:border-[#A4FFAF] peer-focus-visible:ring-2 peer-focus-visible:ring-[#A4FFAF] peer-checked:border-[#A4FFAF] peer-checked:bg-[#A4FFAF]">
          {options.numbers && (
            <svg
              className="h-3 w-3 text-[#18171F]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M5 12l4 4L19 6" />
            </svg>
          )}
        </span>
        Include Numbers
      </label>

      <label className="flex min-w-0 items-center gap-4 text-base text-white cursor-pointer sm:text-lg">
        <input
          type="checkbox"
          name="symbols"
          checked={options.symbols}
          onChange={handleChange}
          className="peer sr-only"
        />
        <span className="flex h-5 w-5 shrink-0 items-center justify-center border-2 border-white bg-transparent transition-colors hover:border-[#A4FFAF] peer-focus-visible:ring-2 peer-focus-visible:ring-[#A4FFAF] peer-checked:border-[#A4FFAF] peer-checked:bg-[#A4FFAF]">
          {options.symbols && (
            <svg
              className="h-3 w-3 text-[#18171F]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M5 12l4 4L19 6" />
            </svg>
          )}
        </span>
        Include Symbols
      </label>
    </div>
  );
}

export default PasswordOptions;
