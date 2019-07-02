
import MasterPage from '../components/master';

const index = () =>(
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio del Bitcoin</h2>
      </div>
      <div className="col-md-8">
        <h2>Noticias Bitcoin</h2>

      </div>
      <div className="col-md-4">
        <h2>Proximos eventos Bitcoin</h2>
      </div>
    </div>
  </MasterPage>
)

export default index;