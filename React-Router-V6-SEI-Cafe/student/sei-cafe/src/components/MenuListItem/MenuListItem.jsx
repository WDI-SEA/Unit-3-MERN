import './MenuListItem.css'

function MenuListItem(props) {
  return (
    <div className="MenuListItem">
      <div className="emoji flex-ctr-ctr">{props.emoji}</div>
      <div className="name">{props.name}</div>
      <div className="buy">
        <span>{props.price}</span>
        <button className="btn-sm" onClick={() => alert('add to cart coming soon!')}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default MenuListItem;