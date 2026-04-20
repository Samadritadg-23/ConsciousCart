import { createContext, useContext, useState, useEffect } from "react";

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [saved, setSaved] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedProducts"));
    if (data) setSaved(data);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("savedProducts", JSON.stringify(saved));
  }, [saved]);

  const toggleSave = (product) => {
    const exists = saved.find((p) => p.id === product.id);

    if (exists) {
      setSaved(saved.filter((p) => p.id !== product.id));
    } else {
      setSaved([...saved, product]);
    }
  };

  const isSaved = (id) => {
    return saved.some((p) => p.id === id);
  };

  return (
    <SavedContext.Provider value={{ saved, toggleSave, isSaved }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => useContext(SavedContext);