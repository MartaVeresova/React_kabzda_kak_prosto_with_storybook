import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import UncontrolledOnOff from './components/UnconrolledOnOff/UncontrolledOnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import OnOff from './components/OnOff/OnOff';
import {Accordion} from './components/Accordion/ Accordion';

function App() {

  const [switchOn, setSwitchOn] = useState(false)
  const [switchUncOn, setSwitchUncOn] = useState(false)
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
      <div className="app">
        <div className="uncontrolled">
          <h1>
            <b>Uncontrolled</b>
          </h1>

          <UncontrolledOnOff onChange={setSwitchUncOn}/> {switchUncOn.toString()}
          <UncontrolledRating/>
          <UncontrolledAccordion titleValue={'Menu'}/>
          <UncontrolledAccordion titleValue={'Users'}/>
        </div>

        <div className="controlled">
          <h1>
            <b>Controlled</b>
          </h1>

          <OnOff value={switchOn}
                 onClick={setSwitchOn}/>
          <Rating
              value={ratingValue}
              onClick={setRatingValue}
          />
          <Accordion
              titleValue={'Menu'}
              collapsed={accordionCollapsed}
              onChange={setAccordionCollapsed}
          />
        </div>
      </div>
  );
}
export default App;