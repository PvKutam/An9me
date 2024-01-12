import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Anime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  const [readMore, setReadMore] = useState(false);

  const {title,synopsis,trailer,duration,aired,season,score,images,rank,scored_by,popularity,status, rating, source,
  } = anime;

  const getanime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };
 
  useEffect(() => {
    getanime(id);
  }, []);
  return (
    <>
      <Container>
          <Main className="detail">
            <img src={images?.jpg.large_image_url} alt="" />
            <div>
            <h1>{title}</h1>
            <h3>Overview</h3>
            <p className="description">
              {readMore ? synopsis : synopsis?.substring(0, 450) + "..."}
              <button
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {readMore ? "Show less" : "Show More"}
              </button>
            </p>
            </div>
          </Main>
            <Submain className="anime-details">
              <p>
                <span  className="item-head">Aired:</span>
                <span className="item-name">{aired?.string}</span>
              </p>
              <p>
                <span className="item-head">Rating:</span>
                <span className="item-name">{rating}</span>
              </p>
              <p>
                <span className="item-head">Rank:</span>
                <span className="item-name">{rank}</span>
              </p>
              <p>
                <span className="item-head">Score:</span>
                <span className="item-name">{score}</span>
              </p>
              <p>
                <span className="item-head">Scored By:</span>
                <span className="item-name">{scored_by}</span>
              </p>
              <p>
                <span className="item-head">Popularity:</span>
                <span className="item-name">{popularity}</span>
              </p>
              <p>
                <span className="item-head">Status:</span>
                <span className="item-name">{status}</span>
              </p>
              <p>
                <span className="item-head">Source:</span>
                <span className="item-name">{source}</span>
              </p>
              <p>
                <span className="item-head">Season:</span>
                <span className="item-name">{season}</span>
              </p>
              <p>
                <span className="item-head">Duration:</span>
                <span className="item-name">{duration}</span>
              </p>
            </Submain>
            
          {/* Trailer */}
          <Trailer>
          <h3 className="title">Trailer</h3>
          <div className="trailer-con">
            {trailer?.embed_url ? (
              <iframe
                src={trailer?.embed_url}
                title="Inline Frame Example"
                width="800"
                height="450"
                allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <h3>Trailer not available</h3>
            )}
          </div>
          </Trailer>
        </Container>
    </>
  );
};


const Container= styled.div`
width: 80%;
max-width: 750px;
margin: 5rem auto;
background: rgba(42,44,49,.5);background: rgba(42,44,49,.5);
border:2px solid #FFC118;
border-radius:2rem;
@media (max-width:2560px){
  max-width:1100px;
}

`

const Main = styled.div`
display:flex;
flex-direction:column;
padding:1.7rem 0;
  

h1{
  color:#FFC118;
  font-size:1.7rem;
  padding:1rem;
  width:100%
}
h3{
  color:#fff;
  font-sixe:1.5rem;
  
}
p{
  color:#AAAAAA;
  font-size:.8rem;
  button{
    border:none;
    background: transparent;
    color:#fff118;
    
  }
}
img{
  margin:0 auto;
  max-width: 500px; 
  height: auto;

}
@media (max-width:2560px){
  width:80%;
  margin:0 auto;
  p{
    width:80%;
  }
  img{
    max-width: 80%;
  height: auto;
  }
  
}
`

const Submain = styled.div`
  p {
    
    display: flex;
    font-size: 1rem;
    color: #fff;
    padding: 0.2rem 0;
    .item-head {
      color: #FFFFFF; /* Style for item-head */
      padding-right:0.6rem;
    }
    .item-name {
      color: #AAAAAA; /* Style for item-name */
    }
    @media (max-width:2560px){
      width:80%;
      margin:0 auto;
    }
  }
`;

const Trailer = styled.div`
h3{
  font-size:2rem;
  color:#FFC118;
  display:flex;
  align-items: center;
  justify-content: center;
  padding:2rem;
}
iframe{
  width:100%;
  border:none;
}
@media (max-width: 768px) {
  h3 {
    font-size: 1.8rem;
    padding: 1.5rem;
  }

  .trailer-con {
    iframe {
      height: 200px; /* Adjust the height as needed */
      width:100%;
    }
  }
}


@media (max-width:2560px){
  margin:0 auto;
  padding: 2rem;  
}
}
`




export default Anime;
