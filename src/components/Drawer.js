function Drawer({onClose, onRemove, items = [], onDelete, sum}) {
 
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close"></img>
        </h2>
        <div className="items">
          {items.map((obj) => (

            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}₸</b>
              </div>
              <img onClick={()=>onDelete(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
            </div>
        ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>{sum.toLocaleString()} ₸</b>
            </li>
            <li>
              <span>Налог 12%:</span>
              <div></div>
              <b>{Math.trunc((sum /100) * 12).toLocaleString()} ₸ </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
