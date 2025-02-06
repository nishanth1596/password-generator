type CheckProps = {
  name: string;
  isActive?: boolean;
};

const base = "border-AlmostWhite-E6E5EA h-5 w-5 inset-0.5 border-2";
const active = "bg-NeonGreen-A4FFAF flex h-5 w-5 items-center justify-center";

function Check({ name, isActive }: CheckProps) {
  return (
    <div className="flex cursor-pointer items-center gap-5">
      <div className={` ${isActive ? active : base}`}>
        <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#18171F"
            strokeWidth="3"
            fill="none"
            d="M1 5.607 4.393 9l8-8"
          />
        </svg>
      </div>
      {name}
    </div>
  );
}

export default Check;
