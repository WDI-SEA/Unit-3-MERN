// import this
import './CategoryList.css';

function CategoryList(props) {
  return (
      <div>
        <ul className='CategoryList'>
        {props.menuCategories.map(c => <li>{c}</li>)}
        </ul>
      </div>
  );
}

export default CategoryList;