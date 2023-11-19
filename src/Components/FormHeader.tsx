const FormHeader = ({ stage }: number | any) => {
  return (
    <div className="w-[513px]">
      {" "}
      <div className="w-[100%] flex  justify-between items-center mb-[24px]">
        {[...Array(2)].map((_, index: number) => {
          return (
            <>
              <h5
                className={`text-textColor font-${
                  index === 0 ? "[normal]" : "[500]"
                } text-20 font-[poppins]`}
              >
                {index === 0 ? "Create a job" : `Step ${stage}`}{" "}
              </h5>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FormHeader;
