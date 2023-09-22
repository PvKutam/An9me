import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
const Popular = ({ rendered}) => {
  const { popularAnime, isSearch,searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === 'popular' ) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
            <h3>{anime.title}</h3>
          </Link>
        );
      });
    }
    else{
      return searchResults?.map((anime) => {
          return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt="" />
              <h3>{anime.title}</h3>

          </Link>
      })
  }
  };

  return (
    <Popluarstyled>
      <div className="popular-anime">{conditionalRender()}</div>
      <Sidebar></Sidebar>
    </Popluarstyled>
  );
};

const Popluarstyled = styled.div`
  display: flex;
  .popular-anime {
    margin-top: 2rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    background-color: #000;
    border-top: 5px solid RGB(255, 193, 25);
    a {
      height: 500px;
      border-radius: 7px;
      margin:0.9rem;
      }
    a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
    img:hover {
      transform: translateY(-5px);
      background-color: #1b1b1b;
      border: 5px solid RGB(255, 193, 25);
  }
`;

export default Popular;
