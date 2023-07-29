import logo from './logo.svg';
import './App.css';
import img2 from './img/img2.jpg';
function App() {
  return (
    <div className="App">
      <div className='product_img'>
        <div className='image_pr'>
        <img id="imgs" src={img2} alt='not fount'/></div>
        <div style={{marginLeft:"12px"}}>
        <h2>Canon EOS 3000D DSLR <br></br>Camera</h2>
         <h4 style={{marginLeft:"34px"}}>Product Details</h4>
         </div>
        <ul>
        <li>Brand &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Canon</li>
        <li>Model  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  EOS</li>
        <li>Model no &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  EOS 30000D</li>
        <li>Type   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   DSLR</li>
        <li>Color  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Black</li>
      </ul>
      </div>
      <div className='pay'>
    <center> <h1>Price Details</h1></center> 
      <ul>
        <li>price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2999 </li>
        <li>Discount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $29 </li>
        <li>Delivery Charges &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Free Delivery</li>
      
      <hr></hr>
     <li>Total Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2970 </li>
      <hr></hr></ul>
      <center><h3>You will save $299 on this order</h3></center>
     <center><button>Pay Now</button></center> 
    </div></div>
  );
}

export default App;
