type StrengthCheckProps = {
  result: string;
};

function StrengthCheck({ result }: StrengthCheckProps) {
  let strengthBar = 0;
  let strengthColor = "";

  if (result === "too weak") {
    strengthBar = 1;
    strengthColor = "bg-Red";
  } else if (result === "weak") {
    strengthBar = 2;
    strengthColor = "bg-Orange";
  } else if (result === "medium") {
    strengthBar = 3;
    strengthColor = "bg-Yellow";
  } else if (result === "strong") {
    strengthBar = 4;
    strengthColor = "bg-NeonGreen";
  }

  return (
    <div className="flex items-center gap-2">
      <p className="BodyM mr-2 uppercase">{result}</p>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`h-7 w-2.5 ${strengthBar > index ? `${strengthColor}` : "border-2"} transition-colors duration-300 ease-in`}
        ></div>
      ))}
    </div>
  );
}

export default StrengthCheck;
