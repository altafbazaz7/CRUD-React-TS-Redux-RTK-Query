// Import necessary libraries and components
import { useEffect, useRef, useState } from "react";
import { InputWithLabelDataArr } from "../Data/InputWithLabelData";
import InputWithLabel from "./InputWithLabel";
import FormHeader from "./FormHeader";
import {
  useCreateJobMutation,
  useEditJobMutation,
  useGetJobsQuery,
} from "../Redux/API/jobsApi";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { resetEditId, resetIsFormOpenInStore } from "../Redux/Slices/appSlice";

const Form = () => {
  const dispatch = useAppDispatch();
  const selectedEditId = useAppSelector((state) => state.app.selectedId);
  const [createJob] = useCreateJobMutation();
  const [editJob] = useEditJobMutation();
  const [stage, setStage] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { data: jobsData } = useGetJobsQuery<any>({});
  const formRef = useRef<HTMLDivElement | any>();

  useEffect(() => {
    if (selectedEditId) {
      let foundJob = jobsData.find(
        (elem: Object | any) => elem.id === selectedEditId
      );
      setFormData(foundJob);
    }
  }, [selectedEditId]);

  const handleAddJobPosting = async () => {
    try {
      await createJob(formData);
    } catch (error) {
      console.error("Error creating job:", error);
    }

    dispatch(resetIsFormOpenInStore(false));
  };

  const handleUpdatePosting = async (selectedEditId: number | string) => {
    try {
      await editJob({
        id: selectedEditId,
        editJob: formData,
      });
    } catch (error) {
      console.error("Error creating job:", error);
    }

    dispatch(resetIsFormOpenInStore(false));
  };

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(e.target as Node)) {
      dispatch(resetIsFormOpenInStore(false));
      dispatch(resetEditId(""));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div
      ref={formRef}
      className="form__container absolute top-[5%] left-[32%] z-[100] "
    >
      <div className="flex p-[32px] flex-col items-center rounded-lg border border-gray-300 bg-white w-[545px] mt-[50px] relative h-[575px]">
        <FormHeader stage={stage} />
        <div className="w-[513px] flex flex-col gap-[24px]">
          {stage === 1 && (
            <>
              <div className="flex flex-col gap-[24px]">
                {InputWithLabelDataArr.slice(0, 3).map(
                  (elem: any, index: number) => (
                    <InputWithLabel
                      key={index}
                      title={elem.title}
                      placeholder={elem.placeholder}
                      isRequired={elem.isRequired}
                      width={elem.width}
                      onChange={(e: any) =>
                        handleChange(elem.valueToFunction, e.target.value)
                      }
                      value={formData[elem.valueToFunction] || ""}
                      isText={elem.isText}

                    />
                  )
                )}
              </div>
              <div className="flex flex-row gap-[14px]">
                {InputWithLabelDataArr.slice(3, 5).map(
                  (elem: any, index: number) => (
                    <InputWithLabel
                      key={index}
                      title={elem.title}
                      placeholder={elem.placeholder}
                      isRequired={elem.isRequired}
                      width={elem.width}
                      onChange={(e: any) =>
                        handleChange(elem.valueToFunction, e.target.value)
                      }
                      value={formData[elem.valueToFunction] || ""}
                      isText={elem.isText}
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
                  (elem: any, index: number) => (
                    <InputWithLabel
                      key={index}
                      title={elem.title}
                      placeholder={elem.placeholder}
                      isRequired={elem.isRequired}
                      width={elem.width}
                      onChange={(e: any) =>
                        handleChange(elem.valueToFunction, e.target.value)
                      }
                      value={formData[elem.valueToFunction] || ""}
                      isText={elem.isText}

                    />
                  )
                )}
              </div>
              <div className="flex flex-row gap-[14px]">
                {InputWithLabelDataArr.slice(7, 9).map(
                  (elem: any, index: number) => (
                    <InputWithLabel
                      key={index}
                      title={elem.title}
                      placeholder={elem.placeholder}
                      isRequired={elem.isRequired}
                      width={elem.width}
                      onChange={(e: any) =>
                        handleChange(elem.valueToFunction, e.target.value)
                      }
                      value={formData[elem.valueToFunction] || ""}
                      isText={elem.isText}

                    />
                  )
                )}
              </div>
              <div className="flex flex-col gap-[24px] ">
                {InputWithLabelDataArr.slice(9, 11).map(
                  (elem: any, index: number) => (
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
                          onChange={(e: any) =>
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
          {/* Save button */}
          <button
            className="flex px-[16px]  py-[8px] rounded-md bg-buttonBg text-white shadow-sm absolute right-[10px] bottom-[17px] "
            onClick={() => {
              stage === 1
                ? setStage(2)
                : formData.id
                ? handleUpdatePosting(selectedEditId)
                : handleAddJobPosting();
            }}
          >
            {stage === 1 ? "Next" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the Form component
export default Form;
