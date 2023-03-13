import { createContext, useState , useEffect} from 'react'
import axios from "axios";
const MangaContext = createContext();
 function Provider({children}) {
  const [mangasTopTen, setMangasTopTen] = useState([]);
  const [loadingTop, setLoadingTop] = useState(true);
  
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [mangaGenres, setMangaGenres] = useState([]);
  const [genLoading, setGenLoading] = useState(true); 



  // const [commentList, setCommentList] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [mangaPerPage] = useState(24);
  const [totalPages, setTotalPages] = useState(1);

 
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.jikan.moe/v4/top/manga?&limit=10`)
      
      setMangasTopTen(response.data.data);
      setLoadingTop(false);
    }
    fetchData();
  }, []);

  // const fetchTopManga = useCallback( async () => {
  //   const response = await axios.get(`https://api.jikan.moe/v4/top/manga?&limit=10`)
  //   setMangasTopTen(response.data.data);
  //   setLoadingTop(false);
  // },[]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.jikan.moe/v4/manga?&limit=${mangaPerPage}q=&order_by=members&sort=desc&page=${currentPage}`);
      setMangas(response.data.data);
      setTotalPages(Math.ceil(response.data.pagination.items.total / mangaPerPage))
      setLoading(false);
    }
    fetchData();
  }, [currentPage,mangaPerPage]);

  const handlePageChange = (pageNumber) => {
    let selected = pageNumber.selected + 1;
    setCurrentPage(selected);
  };
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.jikan.moe/v4/genres/manga`);  
      console.log(response);
      setMangaGenres(response.data.data);
      setGenLoading(false);
    }
    fetchData();
  }, []);

  // const selectedGenre = (gen) => {
  //   let selectedG = gen.target.innerText;
  //   setGen(selectedG);
  //   console.log(gen.target.innerText);
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`https://api.jikan.moe/v4/manga/?&genre=${gen}&order_by=score&sort=desc`)
  //     setMangas(response);
  //     setGloading(false);
  //   }
  //   fetchData();
  // }, [gen]);

  // const fetchManga = useCallback( async () => {
  //   const response = await axios.get(`https://api.jikan.moe/v4/genres/manga`);  
  //   console.log(response);
  //   setMangaGenres(response.data.data);
  //   setGenLoading(false);
  // },[]);

  // const createUser = async (data) => {
  //   //BAD CODE :
  //   // books.push({id: 123, title: title});
  //   // console.log(books);
  //   // setBooks(books);
  //   // const book = {title , id: ~~(Math.random() * 1000)};
  //   // setBooks([...books, book]);
  //   const response = await axios.post('http://localhost:3001/users', {
  //     body:JSON.stringify(data)
  //   });
 
  //   const updatedUsers = [
  //     ...users,
  //     response.data
  //   ];
  //   setUsers(updatedUsers.json());
  // };
  const  fetchUserData = async() => {
    const response = await fetch('http://localhost:3001/users');
    return await response.json();
  }
  const createUser = async (data) => {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  }
  const checkUserCredentials = async(credentials) => {
    const userData = await fetchUserData();
    const user = userData.find(user => user.email === credentials.email && user.password === credentials.password);
    return !!user;
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`http://localhost:3001/comments`);  
  //     setCommentList(response.data);
  //   }
  //   fetchData();
  // }, []);
  
  
  // const fetchComments = useCallback( async () => {
  //   const response =  await axios.get('http://localhost:3001/comments');
  //   console.log(response.data);
  //   setCommentList(response.data);
  // },[]);


  // const genreDict = {
  //   "Action" : 1,
  //   "Adventure" : 2,
  //   "Avant Garde" : 5,
  //   "Award Winning" : 46,
  //   "Boys Love" : 28,
  //   "Comedy" : 4,
  //   "Drama" : 8,
  //   "Fantasy" : 10,
  //   "Girls Love" : 26,
  //   "Gourmet" :47,
  //   "Horror" :14,
  //   "Mystery" :7,
  //   "Romance" :22,
  //   "Sci-Fi" :24,
  //   "Slice of Life" :36,
  //   "Sports" :30,
  //   "Supernatural" :37,
  //   "Suspense" : 45,
  //   "Ecchi" :9,
  //   "Erotica" : 49,
  //   "Hentai" : 12,
  //   "Adult Cast" :50,
  //   "Anthropomorphic" :51,
  //   "CGDCT" :52,
  //   "Childcare" :53,
  //   "Combat Sports" :54,
  //   "Crossdressing" : 44,
  //   "Delinquents" : 55,
  //   "Detective" : 39,
  //   "Educational" : 56,
  //   "Gag Humor" : 57,
  //   "Gore" : 58,
  //   "Harem" : 35,
  //   "High Stakes Game" : 59,
  //   "Historical" :13,
  //   "Idols (Female)" : 60,
  //   "Idols (Male)" : 61,
  //   "Isekai" : 62,
  //   "Iyashikei" : 63,
  //   "Love Polygon" : 64,
  //   "Magical Sex Shift" : 65,
  //   "Mahou Shoujo" : 66,
  //   "Martial Arts" : 17,
  //   "Mecha" : 18,
  //   "Medical" : 67,
  //   "Memoir" : 68,
  //   "Military" : 38,
  //   "Music" : 19,
  //   "Mythology" : 6,
  //   "Organized Crime" : 69,
  //   "Otaku Culture" : 70,
  //   "Parody" :20,
  //   "Performing Arts" :71,
  //   "Pets" : 72,
  //   "Psychological" : 40,
  //   "Racing" : 3,
  //   "Reincarnation" : 73,
  //   "Reverse Harem" :74,
  //   "Romantic Subtext" : 75,
  //   "Samurai" : 21,
  //   "School" : 23,
  //   "Showbiz" : 76,
  //   "Space" : 29,
  //   "Strategy Game" : 11,
  //   "Super Power" :31,
  //   "Survival" : 77,
  //   "Team Sports" : 78,
  //   "Time Travel" : 79,
  //   "Vampire" : 32,
  //   "Video Game" : 80,
  //   "Villainess" : 81,
  //   "Visual Arts" : 82,
  //   "Workplace" : 48,
  //   "Josei" : 42,
  //   "Kids" : 15,
  //   "Seinen" : 41,
  //   "Shoujo" : 25,
  //   "Shounen" : 27,
  // }
  

  const value = {
    mangasTopTen,
    mangas,
    loadingTop,
    loading,
    currentPage,
    mangaPerPage,
    totalPages,
    handlePageChange,
    mangaGenres,
    genLoading,
    createUser,
    checkUserCredentials,
    // commentList,
    // fetchComments,
    // genreDict
      // fetchTopManga,
    // fetchManga,
  }


  return (
    <MangaContext.Provider value={value}>
      { children }
    </MangaContext.Provider>
  )
}

export  { Provider };
export default MangaContext;