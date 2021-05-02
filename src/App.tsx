import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Accordion} from './components/Accordion/ Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UnconrolledOnOff/UncontrolledOnOff';

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
                <UncontrolledRating onChange={x => x}/>
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
                    onChange={() => {
                        setAccordionCollapsed(!accordionCollapsed)
                    }}
                />
            </div>
        </div>
    );
}

export default App;