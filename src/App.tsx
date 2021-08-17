import { useState, useCallback } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        onButtonClick={handleClickButton}
      />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
