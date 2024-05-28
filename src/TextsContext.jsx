import React, { createContext, useState, useEffect } from "react";

export const TextsContext = createContext();

export const TextsProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : [],
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const addText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextsContext.Provider value={{ texts, addText }}>
      {children}
    </TextsContext.Provider>
  );
};
