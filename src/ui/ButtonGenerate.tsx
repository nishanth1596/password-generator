type ButtonGenerateProps = {
  onClick: () => void;
};

function ButtonGenerate({ onClick }: ButtonGenerateProps) {
  return (
    <button
      onClick={onClick}
      className="bg-NeonGreen group hover:bg-DarkGrey hover:text-NeonGreen text-DarkGrey hover:outline-NeonGreen mt-4 flex w-full cursor-pointer items-center justify-center gap-4 py-[18px] transition-colors duration-300 ease-in-out hover:outline-2"
    >
      <span className="sm:BodyM font-bold uppercase">Generate</span>
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-DarkGrey group-hover:fill-NeonGreen h-3.5 w-4"
      >
        <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
      </svg>
    </button>
  );
}

export default ButtonGenerate;
