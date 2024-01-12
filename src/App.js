import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const LazyHomepage = React.lazy(()=>import("./components/Homepage") )
const LazyAnime = React.lazy(()=> import("./components/Anime"))
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyHomepage/></Suspense>} />
        <Route path="/anime/:id" element={<Suspense fallback={<div>Loading...</div>}><LazyAnime/></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
