function StrengthCheck() {
  const strength = "medium";
  const strengthBar = strength === "medium" ? 3 : 0;

  return (
    <div className="flex items-center gap-2">
      <p className="BodyM mr-2 uppercase">Medium</p>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`h-7 w-2.5 ${strengthBar > index ? `bg-yellow-500` : "border-2"} `}
        ></div>
      ))}
    </div>
  );
}

export default StrengthCheck;
