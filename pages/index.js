
import MasterPage from '../components/master';
import Precio from '../components/Precio';
import fetch from 'isomorphic-unfetch';

const index = (props) =>(
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio del Bitcoin</h2>
        <Precio
          precio = {props.precioBitcoin}
        />
      </div>
      <div className="col-md-8">
        <h2>Noticias Bitcoin</h2>

      </div>
      <div className="col-md-4">
        <h2>Proximos eventos Bitcoin</h2>
      </div>
    </div>
  </MasterPage>
);

index.getInitialProps = async () =>{
  const precio = await fetch("https://api.coinmarketcap.com/v2/ticker/1/")

  const resPrecio = await precio.json();

  return{
    precioBitcoin: resPrecio.data.quotes.USD
  }
}

export default index;