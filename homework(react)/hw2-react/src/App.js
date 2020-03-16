import React, { useState, useEffect } from 'react';
// import { CardDeck } from 'react-bootstrap';
// import { Card } from 'react-bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button"
import {Modal} from './components/Modal'



function App() {

  const[firstModelStatus,setFirstModelStatus]=useState(false);
  const toggleFirstModal=()=>setFirstModelStatus(v=>!v);

  const [data, setData] = useState({ products: [] });
  console.log(data);

  const getData = async (url) => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(data => ({
      ...newData,
      products: [...data.products, ...newData.products]
    }));
    console.log(data);
  };

  // const loadMore = () => {
  //   getData(data.next)
  // }


  useEffect(() => {
    getData('./products.json');
  }, [])
  return (
    <div>
    <h3 className="musica">LATEST ARRIVALS IN MUSICA</h3>
    <div className="products-container">
      {!!data.products.length ? data.products.map(({number, name, price, imgUrl}) => (
       
      //  <CardDeck>
      //  <Card>
      //    <Card.Img variant="top" src={imgUrl} style={{width:200}}/>
      //    <Card.Body style={{width:300}}>
      //      <Card.Title>Card title</Card.Title>
      //      <Card.Text>
      //        This is a wider card with supporting text below as a natural lead-in to
      //        additional content. This content is a little bit longer.
      //      </Card.Text>
      //    </Card.Body>
      //    <Card.Footer>
      //      <small className="text-muted">Last updated 3 mins ago</small>
      //    </Card.Footer>
      //  </Card>
      //  </CardDeck>
      <div key={number} className="ProductCard">
          
          <img  className="img" src={imgUrl} />
          <div className="all">
          <div className="name-container">
          <h4 className="name">{name}</h4> 
          <div className='artist'>by Artist</div>
          </div>
          
          <p>lorem</p>
          <div className="price-and-btn">
          <h4>{price}</h4>
          {/* <Button onClick={toggleFirstModal} className="btn" key={number}>ADD TO CART</Button> */}

          <Button 
          key={number}
          backgroundColor="#b734eb" 
       text='ADD TO CART'
       onClick={toggleFirstModal} 
       />
          
          {firstModelStatus && (
       <Modal 
       key={number}
       style={{backgroundColor: "lightblue"}}
       header='Do you want to add?'
       closeIcon={true}
       text='Do you want to add it?'
       close={toggleFirstModal}
       actions ={[ 
      <Button
        key={number}
        backgroundColor='rgba(0,0,0,.2)'
        text='Ok' 
        onClick={() => alert('File added')} 
      />,
      <Button 
        key={number}
        backgroundColor='rgba(0,0,0,.2)' 
        text='Cancel'
        onClick={toggleFirstModal} />]} />
) }
          </div>
          </div>
        </div>
       
      
      )) :
    <h1>Loading</h1>
  }
  

  
</div>
</div>
);
}

export default App;
