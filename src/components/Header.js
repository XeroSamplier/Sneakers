function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png"></img>
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg"></img>
          <span>{1321} ₸</span>
        </li>
        <li className="d-flex align-canter">
          <img width={20.87} height={18.95} src="/img/like.svg"></img>
        </li>
        <li className="d-flex align-canter">
          <img width={18} height={18} src="/img/user.svg"></img>
        </li>
      </ul>
    </header>
  );
}
export default Header;
