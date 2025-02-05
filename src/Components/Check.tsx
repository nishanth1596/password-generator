type CheckProps = {
  name: string;
};

function Check({ name }: CheckProps) {
  return (
    <div className="text-AlmostWhite-E6E5EA flex items-center gap-5 text-base leading-[1.31rem] font-bold">
      <svg
        width="14"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        className="inset-0.5 h-5 w-5 border"
      >
        <path
          stroke="#18171f"
          stroke-width="3"
          fill="#18171f"
          d="M1 5.607 4.393 9l8-8"
        />
      </svg>
      {name}
    </div>
  );
}

export default Check;
