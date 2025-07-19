import "./Mushfig.css";

const Mushfig = () => {
  return (
    <div className="mushfig">
        <div className="atircard">
          <img src="./img/atir.png" alt="" />
          <h5>The devil is a loser by Mushfig</h5>
          <span>Объем мл.</span>
          <div className="btn">
            <button>10</button>
            <button>30</button>
            <button>50</button>
            <button>100</button>
          </div>
          <p>
            Стоимость: <span>2 400,00 ₽</span>
          </p>
          <button className="korzinku">в корзину</button>
        </div>
      </div>
  );
};

export default Mushfig;
