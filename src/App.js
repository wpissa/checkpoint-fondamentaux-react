import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Nom from './components/nom';
import Description from './components/description';
import Prix from './components/prix';
import PRODUITS from './Product';
import { useState } from 'react';


function App() {
  const [prenom, setPrenom] = useState("")

  const handleChange = (e) => {
    setPrenom(e.target.value)
  }

  return (
    <div className="App">
     Hello world
      <form>
        <input type="text" onChange={handleChange} value={prenom} placeholder="votre prenom" />
      </form>
     <div className='row'>
        {
          PRODUITS.map(produit => (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title><Nom produit={produit}/></Card.Title>
              <Card.Text>
                <Description produit={produit}/>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Prix produit={produit}/>
              </ListGroup.Item>
            </ListGroup>
            <div>
              {prenom ? `Bonjour ${prenom}`  : "Bonjour là" }
            </div>
          </Card>
          ))
        }
     </div>
     {prenom && <div>
      <img src="https://www.assuropoil.fr/wp-content/uploads/2023/07/avoir-un-chat-sante.jpg" alt='' />
      </div>}
    </div>
  );
}

export default App;
