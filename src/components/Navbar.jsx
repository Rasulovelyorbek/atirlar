import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbar-content">
        <p><i class="fa-regular fa-paper-plane"></i> Ваш город: Москва</p>
        <ul className="nav-item">
          <li><a href="" className="nav-link">Бонусы</a></li>
          <li><a href="" className="nav-link">Документация</a></li>
          <li><a href="" className="nav-link">О нас</a></li>
          <li><a href="" className="nav-link"><i class="fa-solid fa-phone"></i>7(937) 136 - 77 - 66</a></li>
        </ul>
      </div>  
    </div>
  );
};

export default Navbar;
