import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Popluarstyled from "./Gstyle";

const Popular = ({ rendered}) => {
  const { popularAnime, isSearch,searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === 'popular' ) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt=""  loading="lazy" />
            <h3>{anime.title}</h3>
          </Link>
        );
      });
    }
    else{
      return searchResults?.map((anime) => {
          return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt=""  loading="lazy" />
              <h3>{anime.title}</h3>

          </Link>
      })
  }
  };

  return (
    <Popluarstyled>
      <div className="Main-anime">{conditionalRender()}</div>
      <Sidebar></Sidebar>
    </Popluarstyled>
  );
};


export default Popular;
