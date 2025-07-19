import "./Atirlar.css";
import Victoriya from "./Victoriya";

const Atirlar = () => {
  return <div className="atirlar">
    <div className="container atir-content">
        <h3>Популярные ароматы</h3>
        <div className="atir">
          <Victoriya />
          <Victoriya />
          <Victoriya />
        </div>
        <h3>Бонусы от покупок</h3>
    </div>
  </div>;
};

export default Atirlar;
