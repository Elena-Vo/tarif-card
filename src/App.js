
import './App.css';
import Card from "./components/card"

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Card
          title="Безлимитный 300"
          price="300"
          speed="до 10 Мбит/сек"
          titleColor="#229cab" 
          priceColor="#2cc1d5" 
        />
        <Card
          title="Безлимитный 450"
          price="450"
          speed="до 50 Мбит/сек"
          titleColor="#2cc1d5" 
          priceColor="#24ae8d" 
        />
        <Card
          title="Безлимитный 550"
          price="550"
          speed="до 100 Мбит/сек"
          isTall
          titleColor="#c4554e" 
          priceColor="#f46a5f" 
        />
        <Card
          title="Безлимитный 1000"
          price="1000"
          speed="до 200 Мбит/сек"
          titleColor="#282f37" 
          priceColor="#333a44" 
        />
      </div>
    </div>
  );
}


export default App;
