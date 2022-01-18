import { createContext, useState } from "react";

export const URLContext = createContext(null);
export const UrlProvider = ({ children }) => {
<<<<<<<< HEAD:control/src/context/Url.js
  const [url, setUrl] = useState(null)
========
  const [url, setUrl] = useState(null);
>>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78:packages/marketplace/src/context/Url.js

  return (
    <URLContext.Provider value={{ url, setUrl }}>
      {children}
    </URLContext.Provider>
  );
};
