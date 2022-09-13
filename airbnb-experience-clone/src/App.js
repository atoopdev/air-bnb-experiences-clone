import logo from './logo.svg';
import Top from "./components/Top"
import Card from "./components/Card"
import photoexperience from "./images/katie-zaferes.png"
import Joke from "./components/Joke"
// import jokesData from "./jokesData"
import CardData from "./data"
// import Contact from "./components/Contact"
// import felixcat from "./images/felix.png"
// import fluffycat from "./images/fluffykins.png"
// import whiskerscat from "./images/mr-whiskerson.png"
// import pumpkincat from "./images/pumpkin.png"

// note had to find custom image solution - https://delftstack.com/howto/react/react-img-src/

function App() {
  // const jokeElements = jokesData.map((joke) =>{
  //   return <Joke setup={joke.setup} punchline={joke.punchline} />
  // })
  
  // console.log(jokeElements)

  //note assign key to eliminate key error
  // pass entire object to Card()
  const cardElements = CardData.map((card)=>{
    return <Card 
    key={card.id}
    card={card}/>
  })

  // console.log("cardElements: ", cardElements)


  return (
   <div>
    <Top />
    <div className="experience-photos">{cardElements}</div>
    {/* <Card 
      img={photoexperience}
      rating="5.0"
      reviewcount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
  />*/}
    {/* <div>{jokeElements}</div> */}
  

    {/* <Joke 
      setup = "I got my daughter a fridge for her birthday"
      punchline = "I can't wait to see her face light up when she opens it"
      // nonstring props example
      number={1}
      />

      <Joke 
      setup = "How did the hacker escape the police?"
      punchline = "He just ransomware!"
      number={2}/>

      <Joke 
      punchline = "I am just a punchline"/> */}

    {/* <Contact 
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
    /> */}

   </div>
  );
}

export default App;
