import InfoCard from './components/InfoCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="container">
        <InfoCard
          picture="/icon-sedans.svg"
          carType="sedans"
          title="SEDANS"
          text="Choose a sedan for it's affordability 
            and excellent fuel economy. Ideal for cruising 
            in the city or on your next road trip."
        />

        <InfoCard
          picture="/icon-suvs.svg"
          carType="suvs"
          title="SUVS"
          text="Take an SUV for its spacious interior, 
            power, and versatility. Perfect for your next 
            family vacation and off-road adventures."
        />

        <InfoCard
          picture="/icon-luxury.svg"
          carType="luxury"
          title="LUXURY"
          text="Cruise in the best car brands without the
            bloated prices. Enjoy the enhanced comfort of a 
            luxury rental and arrive in style."
        />
      </main>
    </div>
  );
}

export default App;
