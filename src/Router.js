import { createBrowserRouter ,  } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import ErrorPage from './error-page';
import HomePage from './routes/HomePage';
import MangaPage from './routes/MangaPage';
import MangaDetail from './routes/MangaDetail';
import {loader as mangaDetailLoader} from './components/MangaDetailShow';
import {loader as MangaGenreLoader} from './components/MangaListByGenre';
import MangaGenre from './routes/MangaGenre';
import Full from './components/layout/Full';
import RegisterPage from './routes/RegisterPage';
import LoginPage from './routes/LoginPage';

// const Router = ()  => {
//   const [authenticated, setAuthenticated] = useState(false);
//   return (
//     <BrowserRouter>
//     <Route exact path="/" component={<HomePage/>} />
//     <Route path="/login" component={<LoginPage/>} />
//     <PrivateRoute
//       path="/dashboard"
//       authenticated={authenticated}
//       component={<HomePage/>}
//     />
//   </BrowserRouter>
//   )
// }

const Router = createBrowserRouter([
  
  {
    path: "/",
    element:<HomePage/>,
    errorElement:  <ErrorPage/>
  },
  {
    path: "manga",
    element:<MangaPage/>,
    errorElement:  <ErrorPage/>,
    children:[
      {
        path: "full",
        element: <Full/>
      },
      {
        path: ":id/:title",
        element: <MangaDetail />,
        loader: mangaDetailLoader,
      },
      {
        path: "genre/:genre",
        element: <MangaGenre />,
        loader: MangaGenreLoader,
      }
    ]
  },
  {
    path: "signup",
    element:<RegisterPage/>,
    errorElement:  <ErrorPage/>,
  },
  {
    path: "login",
    element:<LoginPage/>,
    errorElement:  <ErrorPage/>,
  }
])


export default Router
