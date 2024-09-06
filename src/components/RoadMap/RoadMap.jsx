import RoadmapContainer from '../Rodmap-container/RoadmapContainer';
import './Roadmap.css';

function Roadmap() {
    const boxes = [1, 2, 3];  // Create 3 boxes for the roadmap
  
    return (
      <div className="roadmap-container">
        <h1 className="roadmap-title">ROADMAP</h1>
  
        <div className="boxes-container">
          {boxes.map((box, index) => (
            <div key={index} className="roadmap-box">
              {/* Box content goes here */}
            </div>
          ))}
        </div>
  
        {/* Overlaying the strips */}
        <div className="strips-container">
          <img src="src\assets\Group 6.png" alt="Black Strip 1" className="black-strip-1" />
          <img src="src\assets\Group 3.png" alt="Yellow Strip 1" className="yellow-strip-1" />
          <img src="src\assets\Group 4.png" alt="Black Strip 2" className="black-strip-2" />
          <img src="src\assets\Group 5.png" alt="Yellow Strip 2" className="yellow-strip-2" />
        </div>
      </div>
    );
  };
  
  export default Roadmap;