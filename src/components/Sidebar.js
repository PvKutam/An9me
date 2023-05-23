import React from 'react'
import { styled } from "styled-components";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { popularAnime } = useGlobalContext();
  const randomanime= popularAnime?.sort((a,b)=>{
    return b.score- a.score
  })
  return (
    <>
    <SidebarStyle>
    <h3>Top 5 Popular</h3>
    <div className='anime'>
      {randomanime?.slice(0,5).map((anime)=>{
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <img src={anime.images.jpg.image_url} alt="" />
        <h5>{anime.title}</h5>
      </Link> 
      })}
    </div>
    </SidebarStyle>
      
    </>
  )
}

const SidebarStyle= styled.div`
background-color:#000;
margin-top:2rem;
padding-right:5rem;
padding-left:2rem;
padding-bottom:2rem;
border:3px solid  RGB(255, 193, 25);
.anime{
  margin-top:1rem;
  gap:.5rem;
  display:flex;
  flex-direction:column;
  width:150px;
  img{
    width:100%;
    border-radius:5px;
    border: 5px solid  RGB(255, 193, 25);
  }
}
`;


export default Sidebar
