function ButtonGenerate() {
  return (
    <button className="bg-NeonGreen text-DarkGrey mt-4 flex w-full items-center justify-center gap-4 py-[18px]">
      <span className="font-bold uppercase">Generate</span>
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-4"
      >
        <path
          fill="#24232C"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        />
      </svg>
    </button>
  );
}

export default ButtonGenerate;
