import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Popluarstyled from "./Gstyle";

const Upcoming = ({ rendered }) => {
  const { upcomingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "upcoming") {
      return upcomingAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt=""   loading="lazy"/>
            <h3>{anime.title}</h3>
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt=""  loading="lazy" />
            <h3>{anime.title}</h3>
          </Link>
        );
      });
    }
  };

  return (
    <Popluarstyled>
      <div className="Main-anime">{conditionalRender()}</div>
      <Sidebar />
    </Popluarstyled>
  );
};


export default Upcoming;

