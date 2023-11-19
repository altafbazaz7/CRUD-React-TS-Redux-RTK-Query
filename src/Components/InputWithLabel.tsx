import { IInputWithLabelProps } from "../Types/IInputWithLabelProps";

const InputWithLabel = ({
  title,
  placeholder,
  isRequired,
  width,
  onChange,
  value
}: IInputWithLabelProps) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col align-start gap-[8px] ">
        <h6
         className={`text-textColor font-[500] text-14 font-[poppins] ${
          title === "Max Experience" || title === "Max Salary" ? 'visibility_hidden' : ''
        }`}
        >
          {title}
          {isRequired ? <span className="text-red-500">*</span> : ""}
        </h6>
        <input
          type="text"
          onChange={onChange}
          value={value}
          className={`block w-[${width}] rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
