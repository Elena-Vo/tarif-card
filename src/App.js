
import './App.css';
import Card from "./components/card"

function App() {
  const cards = [
    {
      id: 1,
      title: "Безлимитный 300",
      price: "300",
      speed: "до 10 Мбит/сек",
      traffic: "Объем включенного трафика не ограничен",
      titleColor: "#229cab",
      priceColor: "#2cc1d5"
    },
    {
      id: 2,
      title: "Безлимитный 450",
      price: "450",
      speed: "до 50 Мбит/сек",
      traffic: "Объем включенного трафика не ограничен",
      titleColor: "#2cc1d5",
      priceColor: "#24ae8d"
    },
    {
      id: 3,
      title: "Безлимитный 550",
      price: "550",
      speed: "до 100 Мбит/сек",
      traffic: "Объем включенного трафика не ограничен",
      titleColor: "#c4554e",
      priceColor: "#f46a5f"
    },
    {
      id: 4,
      title: "Безлимитный 1000",
      price: "1000",
      speed: "до 200 Мбит/сек",
      traffic: "Объем включенного трафика не ограничен",
      titleColor: "#282f37",
      priceColor: "#333a44"
    }
  ];



  return (
    <div className="App">
      <div className="card-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          price={card.price}
          speed={card.speed}
          titleColor={card.titleColor}
          priceColor={card.priceColor}
          traffic={card.traffic}
      
        />
      )) 
      }
  
      </div>
    </div>
  );
}


export default App;
