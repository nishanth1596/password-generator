type CheckBoxProps = {
  description: string;
  isChecked: boolean;
  name: string;
  handleIsChecked: (id: string) => void;
};

function CheckBox({
  description,
  isChecked,
  name,
  handleIsChecked,
}: CheckBoxProps) {
  return (
    <button
      onClick={() => handleIsChecked(name)}
      className="sm:BodyM flex cursor-pointer items-center gap-5"
    >
      <svg
        className={` ${isChecked ? "bg-NeonGreen" : "border-AlmostWhite border-2"} flex`}
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
