import React from "react";
import "./Katalog.css";
import Mushfig from "./Mushfig";

const Katalog = () => {
  return (
    <div>
      <div className="katalog-content">
        <h4>Каталог</h4>
        <button>Фильтры</button>
        <button>По популярности</button>
        <div className="col">
       <Mushfig />
       <Mushfig />
       <Mushfig />
       <Mushfig />
     </div>
        <div className="col">
       <Mushfig />
       <Mushfig />
       <Mushfig />
       <Mushfig />
     </div>
        <div className="col">
       <Mushfig />
       <Mushfig />
       <Mushfig />
       <Mushfig />
     </div>
      </div>
     
    </div>
  );
};

export default Katalog;
