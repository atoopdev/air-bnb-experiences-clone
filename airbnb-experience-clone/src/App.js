import logo from './logo.svg';
import Top from "./components/Top"
import Card from "./components/Card"
import Contact from "./components/Contact"
import felixcat from "./images/felix.png"
import fluffycat from "./images/fluffykins.png"
import whiskerscat from "./images/mr-whiskerson.png"
import pumpkincat from "./images/pumpkin.png"

function App() {
  return (
   <div>
    <Top />
    <Card />
    <Contact 
    img = {whiskerscat}
    name="Mr. Whiskerson"
    phone="212-555-1234"
    email="mrwhiskerson@meow.com"
    />

<Contact 
    img={felixcat} 
    name="Felix Cat"
    phone="212-555-5678"
    email="felixcat@meow.com"
    />

<Contact 
    img={fluffycat} 
    name="Fluffy Cat"
    phone="212-555-1111"
    email="fluffycat@meow.com"
    />

<Contact 
    img={pumpkincat} 
    name="Pumpkin"
    phone="212-555-2222"
    email="pumpkin@meow.com"
    />
   </div>
  );
}

export default App;
