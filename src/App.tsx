import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Accordion, ItemsType} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/UnconrolledOnOff/UncontrolledOnOff';
import {Select} from './components/Select/Select';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function AppMemo() {
    const [switchOn, setSwitchOn] = useState(false)
    const [switchUncOn, setSwitchUncOn] = useState(false)
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [itemsValue, setItemsValue] = useState<ItemsType[]>([
        {title: 'Marta', value: 1},
        {title: 'Pavel', value: 2},
        {title: 'Olga', value: 3},
        {title: 'Irina', value: 4}
    ])
    const [selectValue, setSelectValue] = useState<ItemsType[]>([
        {title: 'Minsk', value: 1},
        {title: 'Moscow', value: 2},
        {title: 'Kiev', value: 3},
    ])

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
                       onClick={setSwitchOn}
                />
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
                    items={itemsValue}
                    onClick={() => setItemsValue(itemsValue)}
                />
                <Select
                    value={selectValue}
                    onChange={() => setSelectValue(selectValue)}
                    items={selectValue}
                />

            </div>
        </div>
    );
}

const App = React.memo(AppMemo)

export default App;