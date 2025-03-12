type CheckBoxProps = {
  description: string;
  isChecked: boolean;
};

function CheckBox({ description, isChecked }: CheckBoxProps) {
  return (
    <button className="flex cursor-pointer items-center gap-5">
      <svg
        className={`border-AlmostWhite ${isChecked ? "bg-NeonGreen" : ""} flex border-2`}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // stroke="#18171F"
          stroke={isChecked ? "#18171F" : ""}
          strokeWidth="3"
          fill="none"
          d="M1 5.607 4.393 9l8-8"
          transform="translate(3, 4)"
        />
      </svg>
      {description}
    </button>
  );
}

export default CheckBox;
