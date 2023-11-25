import { Body  } from "./components/Body/Body"
import { Main } from './components/Main/Main'
import car from './components/Body/car.png'
import package1 from './components/Body/package.png'
import cash from './components/Body/cash.png'
import delivery from './components/Body/delivery.png'
import { Container } from './components/Container/Container';
import {Ask} from './components/Ask/Ask'
import { Simple } from "./components/Simple Away"

function App() {
  return (
    <div>
      <Main/>
   <div className="main">
<div className="container">
<Body imgSrc={car} title={'Free Shipping'} des={'Last Chance! Free shipping on all orders ends today.'} />
<Body imgSrc={package1} title={'Quick Packaging'} des={'Last Chance! Free shipping on all orders ends today.'} />
<Body imgSrc={cash} title={'100% Money Back'} des={'Last Chance! Free shipping on all orders ends today.'} />
<Body imgSrc={delivery} title={'Fast Delivery'} des={'Last Chance! Free shipping on all orders ends today.'} />

    </div>
   </div>
   <div>
   <Container/>
   </div>
   <div>
    <Ask/>
   </div>
   <Simple/>
   </div>


  );
}

export default App;
 