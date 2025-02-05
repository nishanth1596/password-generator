import copyIcon from "../assets/icon-copy.svg";
import arrowRightIcon from "../assets/icon-arrow-right.svg";
import Check from "./Check";

function PasswordGenerator() {
  return (
    <article>
      <div className="bg-veryDarkGrey-18171F mt-4 flex justify-between gap-[150px] p-4 text-2xl font-bold">
        <p>P4$5W0rD!</p>
        <img src={copyIcon} alt="Copy Icon" />
      </div>
      <div className="bg-veryDarkGrey-18171F mt-4 p-4">
        <div className="flex items-center justify-between font-bold">
          <h2 className="text-base leading-[1.31rem]">Character Length</h2>
          <p className="text-NeonGreen-A4FFAF text-2xl leading-[1.98rem]">10</p>
        </div>
        <label htmlFor="slider">
          <input
            className="mt-2"
            type="range"
            id="slider"
            name="slider"
            min={0}
            max={10}
          />
        </label>
        <div className="mt-8 space-y-4">
          <Check name="Include Uppercase Letters" />
          <Check name="Include Lowercase Letters" />
          <Check name="Include Numbers" />
          <Check name="Include Symbols" />
        </div>

        <div className="bg-veryDarkGrey-18171F">
          <p>Strength</p>
          <p>MEDIUM X</p>
        </div>

        <button>
          Generate <img src={arrowRightIcon} alt="Right navigation Arrow" />
        </button>
      </div>
    </article>
  );
}

export default PasswordGenerator;

// Strength

// Generate
