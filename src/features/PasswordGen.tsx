import CheckBox from "../ui/CheckBox";
import copyIcon from "../assets/icon-copy.svg";
import ButtonGenerate from "../ui/ButtonGenerate";
import { useState } from "react";
import StrengthCheck from "./StrengthCheck";

function PasswordGen() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <article className="mx-4 my-16 flex flex-col items-center">
      <h2 className="text-Grey leading-[1.31rem] font-bold">
        Password Generator
      </h2>

      <div className="bg-DarkGrey mt-4 flex w-full items-center justify-between p-4">
        <output className="HeadingM" aria-live="polite" role="status">
          P4$5W0rD!
        </output>
        <button aria-label="click to copy password">
          <img src={copyIcon} alt="copy Icon" className="w-4" />
        </button>
      </div>

      <div className="bg-DarkGrey mt-4 w-full p-4">
        <div className="flex w-full items-center justify-between">
          <label
            htmlFor="charLength"
            className="text-AlmostWhite leading-[1.31rem] font-bold"
          >
            Character Length
          </label>
          <p className="HeadingM text-NeonGreen">10</p>
        </div>
        <input
          type="range"
          className="accent-NeonGreen mt-2 w-full"
          id="charLength"
        />

        <div className="mt-8 space-y-4">
          <CheckBox description="Include Uppercase Letters" />
          <CheckBox description="Include Lowercase Letters" />
          <CheckBox description="Include Numbers" />
          <CheckBox description="Include Symbols" />
        </div>

        <div className="bg-veryDarkGrey mt-8 flex items-center justify-between px-4 py-3.5">
          <p className="text-Grey leading-[1.31rem] font-normal uppercase">
            Strength
          </p>

          <StrengthCheck />
        </div>
        <ButtonGenerate />
      </div>
    </article>
  );
}

export default PasswordGen;
