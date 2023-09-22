import React, { useState } from "react";
import Popular from "./popular";
import { useGlobalContext } from "../context/global";
import { styled } from "styled-components";
import Upcoming from "./Upcoming";
import Airing from "./Airing";

function Homepage() {
  const [open, setOpen] = useState(false);

  const { handleSubmit, search, handleChange, getUpcoming, getAiringAnime } =
    useGlobalContext();

  const [rendered, setRendered] = React.useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <div>
      <Navbar open={open}>
        <section className="logo">
          <Logo>An9me<span>Info</span></Logo>
          <Heading>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </Heading>
        </section>

        <StyledBurger open={open}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div
            style={{
              width: "2em",
              height: "0.25em",
              backgroundColor: open ? "#f1ea0082" : "#f1ea51",
              margin: "6px 0",
              
            }}
          />
          <div
            style={{
              width: "2em",
              height: "0.25em",
              backgroundColor: open ? "#f1ea0082" : "#f1ea51",
              margin: "6px 0",
            }}
          />
          <div
            style={{
              width: "2em",
              height: "0.25em",
              backgroundColor: open ? "#f1ea0082" : "#f1ea51",
              margin: "6px 0",
            }}
          />
        </StyledBurger>

        <div className="search-container">
        <div >
            <form action="" className="search-form" onSubmit={handleSubmit}>
              <section className="input-control">
                <input className="input"
                  type="text"
                  placeholder="Search Anime"
                  value={search}
                  onChange={handleChange}
                />
                <StyledButton1 type="submit">Search</StyledButton1>
              </section>
            </form>
          </div>
          <div className="filter-btn popular-filter">
            <StyledButton
              onClick={() => {
                setRendered("popular");
              }}
            >
              Popular<i className="fas fa-fire"></i>
            </StyledButton>
          </div>

          <div className="filter-btn airing-filter">
            <StyledButton
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </StyledButton>
          </div>
          <div className="filter-btn upcoming-filter">
            <StyledButton
              onClick={() => {
                setRendered("upcoming");
                getUpcoming();
              }}
            >
              Upcoming
            </StyledButton>
          </div>
        </div>
      </Navbar>
      {switchComponent()}
    </div>
  );
}

const Logo= styled.h1`
@media (max-width: 768px){
  padding-top:15px;
}

`
const Heading = styled .h1`
display:none
`
const StyledBurger = styled.div`
  width: 2em;
  height: 2em;
  top: 15px;
  right: 20px;
  z-index:  20;

  @media (min-width: 769px) {
    display: none; // Hide on screens larger than 768px
  }
`;
const StyledButton1 = styled.div`
  background: RGB(255, 193, 25);
  padding: 0.8em;
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid #1d1d1d;
  transition: background-color 0.3s ease-in, border-color 0.3s ease-in;

  &:hover {
    color:#FFF;
    background-color: #1d1d1d; 
    border-color: #FFF118;  
  }
`;

const StyledButton = styled.div`
  background: RGB(255, 193, 25);
  padding: 0.8em;
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid #1d1d1d;
  transition: background-color 0.3s ease-in, border-color 0.3s ease-in;

  @media (max-width: 768px){
    color:#FFFFFF;
    font-weight:500;
    background-color: #1b1b1b;
    align-items: center;
    
  }
  

  &:hover {
    color:#FFF;
    background-color: #1d1d1d; 
    border-color: #FFF118; 
  }
`;


const Navbar = styled.div`
width:100%;
max-width:1200px
height:55px;
padding:0 20px;
display:flex;
justify-content:space-between;
align-items: center; 

  .logo {
    h1 {
      font-size: 2rem;
      color: RGB(255, 193, 25); 
      margin: 0;
  
    }
  }
.search-container{
display:flex;
flex-flow: row nowrap;
gap: 2em;
padding:1em 0;




.filter-btn {
  display: flex;
  justify-content: center; 
  align-items: center; 

}
.input-control{
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap:0.5em;
}
.input {
  border: 1px solid #1d1d1d;
  padding: 0.8em;
  border-radius: 5px;
  width: 80%;
  max-width: 200px; // Adjust this as needed
  color:#1d1d1d;

}


@media (max-width: 768px) {
  flex-flow: column nowrap;
  background-color: #1b1b1b;
  position:fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top:3.5rem; 
}

}
`;



export default Homepage;
