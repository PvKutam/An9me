import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
const GlobalContext = createContext();
const baseURL = "https://api.jikan.moe/v4";

const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_PICTURES = "GET_PICTURES";

const reducer = (state, actions) => {
  switch (actions.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POPULAR_ANIME:
      return { ...state, popularAnime: actions.payload, loading: false };
    case GET_PICTURES:
      return { ...state, pictures: actions.payload, loading: false };
      case GET_UPCOMING_ANIME:
        return {...state, upcomingAnime: actions.payload, loading: false}
    case SEARCH:
      return { ...state, searchResults: actions.payload, loading: false };
    case GET_AIRING_ANIME:
      return { ...state, airingAnime: actions.payload, loading: false };
    default:
      return state;
  }
};
export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    pictures: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      state.isSearch = false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      searchAnime(search);
      state.isSearch = true;
    } else {
      state.isSearch = false;
      alert("Please enter a search term");
    }
  };
  const getPopular = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseURL}/top/anime?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
  };

  const searchAnime = async (anime) => {
    dispatch({ type: LOADING });
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`
    );
    const data = await response.json();
    dispatch({ type: SEARCH, payload: data.data });
  };
  const getUpcoming = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseURL}/top/anime?filter=upcoming`);
    const data = await response.json();
    dispatch({ type: GET_UPCOMING_ANIME, payload: data.data });
  };

  const getAiringAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseURL}/top/anime?filter=airing`);
    const data = await response.json();
    dispatch({ type: GET_AIRING_ANIME, payload: data.data });
  };
  const getAnimePictures = async (id) => {
    dispatch({ type: LOADING }); 
    const response = await fetch(
      `https://api.jikan.moe/v4/characters/${id}/pictures`
    );
    const data = await response.json();
    dispatch({ type: GET_PICTURES, payload: data.data });
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getAnimePictures,
        getAiringAnime,
        getUpcoming,
        handleSubmit,
        handleChange,
        searchAnime,
        search, 
        getPopular,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
