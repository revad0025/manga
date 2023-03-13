import { useContext } from "react";
import MangaContext from "../context/manga";

function useMangaContext() {
  return useContext(MangaContext);
}

export default useMangaContext;