import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import CountdownTimer from './components/Timer';

function App() {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
   <>
    {/* <h1>Countdown Ends In</h1>
    <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
    <Navbar/>
    <Footer/>
   </>
  );
}

export default App;
