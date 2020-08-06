import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

// import user context

export default function BeachForecast() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    // const [location, setLocation] = useState({})

    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                // {dailyOjb.map.(function)
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >


                <div style={{ height: 200 }}>First Card</div>
                <div style={{ height: 200 }}>Second card</div>
                <div style={{ height: 200 }}>Third card</div>
                <div style={{ height: 200 }}>Fourth card</div>
                <div style={{ height: 200 }}>Fifth card</div>
                <div style={{ height: 200 }}>Sixth card</div>
                <div style={{ height: 200 }}>Seventh card</div>
            </ItemsCarousel>
        </div >
    );
};


