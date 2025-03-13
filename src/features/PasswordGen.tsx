import CheckBox from "../ui/CheckBox";
import ButtonGenerate from "../ui/ButtonGenerate";
import { useState } from "react";
import StrengthCheck from "../ui/StrengthCheck";
import ButtonCopy from "../ui/ButtonCopy";
import { generatePassword } from "../data/data";

const checkedParameters = {
  upperCase: false,
  lowerCase: false,
  numbers: false,
  symbols: false,
  charLength: 10,
};

function PasswordGen() {
  const [isCheckedParameters, setIsCheckedParameters] =
    useState(checkedParameters);
  const [isCopied, setIsCopied] = useState(false);
  const [charLength, setCharLength] = useState(10);
  const [password, setPassword] = useState("");

  function handleIsChecked(id: string) {
    setIsCheckedParameters((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof checkedParameters],
    }));
  }

  let result = "";
  const numOfTrue = Object.values(isCheckedParameters).filter(
    (value) => value === true,
  );
  if (numOfTrue.length === 4) result = "strong";
  if (numOfTrue.length === 3) result = "medium";
  if (numOfTrue.length === 2) result = "weak";
  if (numOfTrue.length === 1) result = "too weak";

  function handleGeneratePassword() {
    setPassword(
      generatePassword(
        isCheckedParameters.upperCase,
        isCheckedParameters.lowerCase,
        isCheckedParameters.numbers,
        isCheckedParameters.symbols,
        charLength,
      ),
    );
  }

  function handleCopyPassword() {
    if (!password) return;

    navigator.clipboard.writeText(password).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }

  return (
    <article className="mx-4 my-16 flex flex-col items-center md:mx-0 md:mt-[8.31rem] md:mb-[12.25rem]">
      <h2 className="text-Grey leading-[1.31rem] font-bold md:text-2xl md:leading-8">
        Password Generator
      </h2>

      <div className="bg-DarkGrey mt-4 flex w-full max-w-[33.75rem] items-center justify-between p-4 md:mt-8 md:px-8 md:py-5">
        <output className="HeadingM" aria-live="polite" role="status">
          {password ? (
            <span className="HeadingM sm:HeadingL">{password}</span>
          ) : (
            <span className="HeadingM sm:HeadingL opacity-25">P4$5W0rD!</span>
          )}
        </output>
        <ButtonCopy
          password={password}
          isCopied={isCopied}
          onClick={handleCopyPassword}
        />
      </div>

      <div className="bg-DarkGrey mt-4 w-full max-w-[540px] p-4 sm:px-8 sm:pt-6 sm:pb-8 md:mt-6">
        <div className="flex w-full items-center justify-between">
          <label
            htmlFor="charLength"
            className="text-AlmostWhite sm:bodyM leading-[1.31rem] font-bold"
          >
            Character Length
          </label>
          <p className="HeadingM text-NeonGreen">{charLength}</p>
        </div>
        <input
          type="range"
          className="accent-NeonGreen mt-2 w-full cursor-pointer md:mt-4"
          id="charLength"
          min="0"
          max="20"
          value={charLength}
          onChange={(e) => setCharLength(Number(e.target.value))}
        />

        <div className="mt-8 space-y-4 md:space-y-5">
          <CheckBox
            description="Include Uppercase Letters"
            name="upperCase"
            isChecked={isCheckedParameters.upperCase}
            handleIsChecked={handleIsChecked}
          />

          <CheckBox
            description="Include Lowercase Letters"
            name="lowerCase"
            isChecked={isCheckedParameters.lowerCase}
            handleIsChecked={handleIsChecked}
          />

          <CheckBox
            description="Include Numbers"
            name="numbers"
            isChecked={isCheckedParameters.numbers}
            handleIsChecked={handleIsChecked}
          />
          <CheckBox
            description="Include Symbols"
            name="symbols"
            isChecked={isCheckedParameters.symbols}
            handleIsChecked={handleIsChecked}
          />
        </div>

        <div className="bg-veryDarkGrey mt-8 flex items-center justify-between px-4 py-3.5 sm:px-8 sm:py-5">
          <p className="text-Grey sm:odyM leading-[1.31rem] font-normal uppercase">
            Strength
          </p>

          <StrengthCheck result={result} />
        </div>
        <ButtonGenerate onClick={handleGeneratePassword} />
      </div>
    </article>
  );
}

export default PasswordGen;
