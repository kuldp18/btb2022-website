// import logo from './logo.svg';
import '../../Styles/Prizes.css';
import Card from './Card';
// import CardEight from './CardEight';
// import CardFive from './CardFive';
// import CardFour from './CardFour';
// import CardNine from './CardNine';
// import CardOne from './CardOne';
// import CardSeven from './CardSeven';
// import CardSix from './CardSix';
// import CardThree from './CardThree';
// import CardTwo from './CardTwo';
import silver from '../../require_images/silver_trophy.jpg';
import gold from '../../require_images/gold_trophy.jpg';
import bronze from '../../require_images/bronze_trophy.jpg';

function PrizesSection() {
  return (
    <div className="prizes-section">
      <h1 className="red prizes-title">GRAND PRIZES</h1>
      <p className="white">
        we have a prize pool worth <span className="red-1"> 200K INR </span>
        along with captiving rewards in BTB 2022.
      </p>
      <div className="flex-container">
        <div className="gold">
          <img className="trophy_img" src={gold} alt="gold_trophy"></img>
          <p className="white-letter">1st Prize</p>
          <p className="red-letter">Rs. 30,000</p>
        </div>
        <div className="silver">
          <img className="trophy_img" src={silver} alt="silver_trophy"></img>
          <p className="white-letter">2nd Prize</p>
          <p className="red-letter">Rs. 25,000</p>
        </div>
        <div className="bronze">
          <img className="trophy_img" src={bronze} alt="bronze_trophy"></img>
          <p className="white-letter">3rd Prize</p>
          <p className="red-letter">Rs. 20,000</p>
        </div>
      </div>
      <div className="space"></div>
      <div>
        <div className="card-inline">{/* <Card /> */}</div>
        <div className="card-inline">{/* <Card /> */}</div>
      </div>

      {/* for two */}

      <div>
        <div className="card-inline">{/* <Card /> */}</div>
        <div className="card-inline">{/* <Card /> */}</div>
      </div>

      {/* for three */}

      <div>
        <div className="card-inline">{/* <Card /> */}</div>
        <div className="card-inline">{/* <Card /> */}</div>
      </div>

      {/* for four */}

      <div>
        <div className="card-inline">{/* <Card /> */}</div>
        <div className="card-inline">{/* <Card /> */}</div>
      </div>

      {/* for five */}

      <div>
        <div className="card-inline">{/* <Card /> */}</div>
        <div className="card-inline">{/* <Card /> */}</div>
      </div>
    </div>
  );
}

export default PrizesSection;
