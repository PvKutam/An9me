 import styled from "styled-components";
 const Popluarstyled = styled.div`
  display: flex;
  .Main-anime{
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

    h3 {
      color: RGB(255, 193, 25);
    }

    a {
      height: 500px;
      border-radius: 7px;
      margin: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content: center; 
      align-items: center; 
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
  }

  @media (max-width: 768px) {
    .Main-anime {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      padding: 1rem;
      grid-gap: 1rem;
       h3{
        font-size:medium;
       }
    }
  }
`;

export default Popluarstyled;