"use client";

const { useContext, useState, createContext } = require("react");

const TestContext = createContext();

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const increaseVal = () => {
    setValue(value + 1);
  };
  const decreaseVal = () => {
    setValue(value + 1);
  };
  return (
    <TestContext.Provider value={{ value, increaseVal, decreaseVal }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => useContext(TestContext);

export default ContextProvider;
