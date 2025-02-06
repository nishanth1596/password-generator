const base = "inset-2 h-7 w-2.5 border-2";
const active = "bg-Yellow-F8CD65 h-7 w-2.5";

type StrengthProps = {
  isActive: boolean;
};

function Strength({ isActive }: StrengthProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className={` ${isActive ? active : base}`}></div>
      ))}
    </div>
  );
}

export default Strength;
