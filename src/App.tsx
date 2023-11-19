import { useEffect } from "react";
import Form from "./Components/Form";
import { useAppDispatch, useAppSelector } from "./Redux/Hooks";
import { setIsFormOpenInStore } from "./Redux/Slices/appSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const isFormOpen = useAppSelector((state) => state?.app?.isFormOpen);

  useEffect(() => {
    dispatch(setIsFormOpenInStore(true));
  }, [dispatch]);

  return <>{isFormOpen && <Form />}</>;
};

export default App;
