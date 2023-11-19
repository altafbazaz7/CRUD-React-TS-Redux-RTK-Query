import { useState } from "react";
import { InputWithLabelDataArr } from "../Data/InputWithLabelData";
import InputWithLabel from "./InputWithLabel";
import FormHeader from "./FormHeader";
import { useCreateJobMutation } from "../Redux/API/jobsApi";

const Form = () => {
  const [createJob] = useCreateJobMutation();

  const [stage, setStage] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleAddJobPosting = async () => {
    try {
      const result = await createJob(formData);
      console.log(result,"result")
    } catch (error) {
        
    }
  };

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="flex p-[32px] flex-col items-center rounded-lg border border-gray-300 bg-white w-[545px] mt-[50px] relative h-[575px]">
      <FormHeader stage={stage} />
      <div className="w-[513px] flex flex-col gap-[24px]">
        {stage === 1 && (
          <>
            <div className="flex flex-col gap-[24px]">
              {InputWithLabelDataArr.slice(0, 3).map(
                (elem: Object | any, index: number) => (
                  <InputWithLabel
                    key={index}
                    title={elem.title}
                    placeholder={elem.placeholder}
                    isRequired={elem.isRequired}
                    width={elem.width}
                    onChange={(e: Object | any) =>
                      handleChange(elem.valueToFunction, e.target.value)
                    }
                  />
                )
              )}
            </div>
            <div className="flex flex-row gap-[14px]">
              {InputWithLabelDataArr.slice(3, 5).map(
                (elem: Object | any, index: number) => (
                  <InputWithLabel
                    key={index}
                    title={elem.title}
                    placeholder={elem.placeholder}
                    isRequired={elem.isRequired}
                    width={elem.width}
                    onChange={(e: Object | any) =>
                      handleChange(elem.valueToFunction, e.target.value)
                    }
                  />
                )
              )}
            </div>
          </>
        )}
        {stage === 2 && (
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-row gap-[14px]">
              {InputWithLabelDataArr.slice(5, 7).map(
                (elem: Object | any, index: number) => (
                  <InputWithLabel
                    key={index}
                    title={elem.title}
                    placeholder={elem.placeholder}
                    isRequired={elem.isRequired}
                    width={elem.width}
                    onChange={(e: Object | any) =>
                      handleChange(elem.valueToFunction, e.target.value)
                    }
                  />
                )
              )}
            </div>
            <div className="flex flex-row gap-[14px]">
              {InputWithLabelDataArr.slice(7, 9).map(
                (elem: Object | any, index: number) => (
                  <InputWithLabel
                    key={index}
                    title={elem.title}
                    placeholder={elem.placeholder}
                    isRequired={elem.isRequired}
                    width={elem.width}
                    onChange={(e: Object | any) =>
                      handleChange(elem.valueToFunction, e.target.value)
                    }
                  />
                )
              )}
            </div>
            <div className="flex flex-col gap-[24px] ">
              {InputWithLabelDataArr.slice(9, 11).map(
                (elem: Object | any, index: number) => (
                  <>
                    {elem.isRadio ? (
                      <div className="flex flex-col ml-[2px]">
                        <h6 className="text-textColor font-[500] text-14 font-[poppins] ">
                          Apply Type
                        </h6>
                        <div className="flex flex-row mt-[10px] ">
                          {["Quick Apply", "External Apply"].map(
                            (option: string) => (
                              <div
                                className="flex items-center me-4"
                                key={option}
                              >
                                <input
                                  id={`radio-${option
                                    .toLowerCase()
                                    .replace(/\s/g, "-")}`}
                                  type="radio"
                                  name="apply-type"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                />
                                <label
                                  htmlFor={`radio-${option
                                    .toLowerCase()
                                    .replace(/\s/g, "-")}`}
                                  className="ms-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                >
                                  {option}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ) : (
                      <InputWithLabel
                        key={index}
                        title={elem.title}
                        placeholder={elem.placeholder}
                        isRequired={elem.isRequired}
                        width={elem.width}
                        onChange={(e: Object | any) =>
                          handleChange(elem.valueToFunction, e.target.value)
                        }
                      />
                    )}
                  </>
                )
              )}
            </div>
          </div>
        )}
        <button
          className="flex px-[16px]  py-[8px] rounded-md bg-buttonBg text-white shadow-sm absolute right-[10px] bottom-[17px] "
          onClick={() => {
            stage === 1 ? setStage(2) : handleAddJobPosting();
          }}
        >
          {stage === 1 ? "Next" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Form;
