import copyIcon from "../assets/icon-copy.svg";
import arrowRightIcon from "../assets/icon-arrow-right.svg";
import Check from "./Check";
import Strength from "./Strength";

function PasswordGenerator() {
  return (
    <article className="mx-4 max-w-[33.75rem]">
      <div className="bg-DarkGrey-24232c mt-4 flex justify-between p-4 text-2xl font-bold">
        <p>P4$5W0rD!</p>
        <button className="cursor-pointer">
          <img src={copyIcon} alt="Copy Icon" />
        </button>
      </div>
      <div className="bg-DarkGrey-24232c mt-4 p-4">
        <div className="flex items-center justify-between font-bold">
          <h2 className="text-base leading-[1.31rem]">Character Length</h2>
          <p className="text-NeonGreen-A4FFAF text-2xl leading-[1.98rem]">10</p>
        </div>

        <input
          className="mt-2 w-full"
          type="range"
          id="slider"
          name="slider"
          defaultValue={10}
          min={0}
          max={20}
        />

        <div className="mt-8 space-y-4">
          <Check name="Include Uppercase Letters" />
          <Check name="Include Lowercase Letters" />
          <Check name="Include Numbers" />
          <Check name="Include Symbols" />
        </div>

        <div className="bg-veryDarkGrey-18171F mt-8 flex items-center justify-between px-4 py-3.5">
          <p className="text-Grey-817D92 text-base leading-[1.31rem] font-bold uppercase">
            Strength
          </p>
          <div className="flex items-center gap-4 text-lg leading-[1.49rem] font-bold uppercase">
            <p>medium</p> <Strength isActive={true} />
          </div>
        </div>

        <button className="bg-NeonGreen-A4FFAF text-DarkGrey-24232c hover:bg-veryDarkGrey-18171F hover:text-NeonGreen-A4FFAF btn mt-4 flex w-full items-center justify-center gap-4 py-[1.125rem] text-base leading-[1.31rem] font-bold uppercase">
          Generate <img src={arrowRightIcon} alt="Right navigation Arrow" />
        </button>
      </div>
    </article>
  );
}

export default PasswordGenerator;
