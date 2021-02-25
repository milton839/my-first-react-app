import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const developers = ['Azizul Islam Milton','Morsadur Zaman','Jahidul Islam','Shafiur Islam'];
  const products =[
    {name:"Photoshop",price:"$99.56"},
    {name:"Illustrator",price:"$60.25"},
    {name:"PDF Reader",price:"$9.45"},
    {name:"Adobe Reader",price:"$5.25"},
    {name:"Adobe Acrobat",price:"$2.25"},
    {name:"Ms Word",price:"$2.25"},
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>I am a Beginner React Developer</h2>
        <Counter></Counter>
        <ul>
            {
              developers.map(developer => <li>{developer}</li>)
            }
            {
              products.map(pd => <li>{pd.name}, price={pd.price}</li>)
            }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Person name={developers[0]} profession="Web Developer"></Person>
        <Person name={developers[1]} profession="Zoho Developer"></Person>
        <Person name={developers[2]} profession="Plugin Developer"></Person>
        <Person name={developers[3]} profession="PHP Developer"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(0);
  // const handleIncrease = ()=>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }Ei function ta short e likha jai seita button er onclick e set kora ase
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle ={
    width:'400px',
    height:'300px',
    border:'3px solid red',
    borderRadius:'15px',
    margin:'10px',
    float:'left',
    backgroundColor:'lightgray',
    color:'black',
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
  <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  var personStyle ={
    border:'5px solid red',
    borderRadius:'10px',
    margin:'20px',
    padding:'20px'
  }
  return(
    <div style={personStyle}>
      <h2>Name: {props.name}</h2>
      <p>Profession: {props.profession}</p>
    </div>
  )
}

export default App;
