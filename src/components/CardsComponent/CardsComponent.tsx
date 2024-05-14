import React from 'react'

const CardsComponent = () => {
    const CardData = {
        heading: "Identify defects early, continuously improve quality and roll out Salesforce releases faster",
        borderColor: "#76CCFF",
        cards: [
            {
                icons: { src: "/cardImages/card1.png", alt: "card1" },
                description: "The Al-powered test automation generation, just on a single click",

            },
            {
                icons: { src: "/cardImages/card2.png", alt: "card2" },
                description: "The Al-powered test automation generation, just on a single click",

            },
            {
                icons: { src: "/cardImages/card3.png", alt: "card3" },
                description: "The Al-powered test automation generation, just on a single click",

            },
            // {
            //     icons: { src: "/cardImages/card4.png", alt: "card4" },
            //     description: "The Al-powered test automation generation, just on a single click",

            // },

        ],

    };

    const cardCount = CardData.cards.length;
    const gridColumnClass = `grid-cols-${Math.min(cardCount, 4)}`;
    const gapValue = cardCount === 3 ? 20 : 0;

    return (

        <div className='max-w-full mx-24'>
            <div className='container px-5 py-24 max-w-6xl mx-auto flex items-center justify-center pl-10'>
                <h1 className="title-font md:text-2xl lg:text-4xl mb-4 w-4/5 inline-block gap- font-bold text-[#032d60]">{CardData.heading}</h1>
            </div>
            <div className={`flex flex-col gap-4 md:grid ${gridColumnClass} pb-16 md:pb-12 md:gap-${gapValue}`}>
                {CardData.cards.map((card, index) => {
                    return (
                        <div key={index} className={`gap-4 h-96 w-11/12 rounded-2xl flex flex-col items-center justify-center pb-5 border-t-[${CardData.borderColor}] border-t-[15px]`}
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
                        >
                            <img src={card.icons.src} alt={card.icons.alt} />
                            <h1 className='w-3/5 text-[#204572] text-lg pt-3 font-medium text-center justify-center'>{card.description}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}


export default CardsComponent;
