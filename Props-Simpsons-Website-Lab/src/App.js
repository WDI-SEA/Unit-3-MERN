import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={homer} 
                           name={"Homer Simpson"}
                           description={"Loves his family as much as donuts"}
                           email={"homer@simpson.com"}
              
              
              
              />
              <ProfileCard pic={lisa}
                           name={"Lisa Simpson"}
                           description={"Amazing saxophone player"}
                           email={"lisa@harvard.edu"}
                  
              />
              <ProfileCard pic={maggie}
                           name={"Maggie Simpson"}
                           description={"Maggie is known to have murdered at least one person"}
                           email={"maggie@simpson.com"}
            
              />
              <ProfileCard pic={marge}
                           name={"Marge Simpson"}
                           description={"Marge is a role model"}
                           email={"marge@simpson.edu"}
              
              />
              <ProfileCard pic={bart} 
                           name={"Bart Simpson"}
                           description={"Bart is the eternal prankster"}
                           email={"bart@simpson.com"}
              
              
              
              />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
