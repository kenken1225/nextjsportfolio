"use client";

// LanguageContext.js
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lng, setLng] = useState("en"); // デフォルトは英語

  const changeLanguage = (newLng) => {
    setLng(newLng);
    i18next.changeLanguage(newLng); // `i18next`で言語を変更
  };

  return <LanguageContext.Provider value={{ lng, changeLanguage }}>{children}</LanguageContext.Provider>;
};

// カスタムフックでContextを利用
export const useLanguage = () => useContext(LanguageContext);
