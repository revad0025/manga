import Router from './Router';
import { RouterProvider } from 'react-router-dom';
// import { useEffect } from 'react';
// import useMangaContext from './hooks/useMangaContext';
function App() {
  // const { fetchComments } = useMangaContext();

  // useEffect(() => {
  //   fetchComments();
  // },[fetchComments]); 

  // useEffect(() => {
  //   fetchTopManga();
  // },[fetchTopManga]); 

  // useEffect(() => {
  //   fetchManga();
  // },[fetchManga]); 


  return (
    <RouterProvider router={ Router }/>
  )
}

export default App
