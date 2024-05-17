"use client"
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import "../../app/qualitiaCustomers/page.css";


const cardData = gql`
query GetCarComponentData {
    cardsComponents{
      data{
        id
        attributes{
          heading
          topBorderColor
          cardSectiondata{
            id
            cardDescription
            cardIcons{
              data{
                id
                attributes{
                  name
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }    
`


const CardsComponent = () => {
    // const CardData = {
    //     heading: "Identify defects early, continuously improve quality and roll out Salesforce releases faster",
    //     borderColor: "#76CCFF",
    //     cards: [
    //         {
    //             icons: { src: "/cardImages/card1.png", alt: "card1" },
    //             description: "The Al-powered test automation generation, just on a single click",

    //         },
    //         {
    //             icons: { src: "/cardImages/card2.png", alt: "card2" },
    //             description: "The Al-powered test automation generation, just on a single click",

    //         },
    //         {
    //             icons: { src: "/cardImages/card3.png", alt: "card3" },
    //             description: "The Al-powered test automation generation, just on a single click",

    //         },
    //         {
    //             icons: { src: "/cardImages/card4.png", alt: "card4" },
    //             description: "The Al-powered test automation generation, just on a single click",

    //         },

    //     ],

    // };

    const { loading, error, data } = useQuery(cardData);

    if (loading) return <p>Loading...</p>
    if (error) return <p>error</p>
    console.log("cardData------>", data);

    console.log("cardSectionData=====", data?.cardsComponents?.data[0].attributes?.cardSectiondata);

    return (
        <>
            {data?.cardsComponents?.data?.map((cardComponent: any, index1: any) => {
                const cardCount = cardComponent.attributes?.cardSectiondata?.length;
                const gridColumnClass = `grid-cols-${Math.min(cardCount, 4)}`;
                const gapValue = cardCount === 3 ? 20 : 0;
                console.log(gridColumnClass,'66666');
                
                return (
                    <div key={index1} className='max-w-6xl mx-auto flex flex-col justify-center items-center'>
                        <div className='container px-5 py-24 max-w-6xl mx-auto flex items-center justify-center pl-10'>
                            <h1 className="title-font md:text-2xl lg:text-4xl mb-4 w-4/5 inline-block gap- font-bold text-[#032d60]">{cardComponent.attributes.heading}</h1>
                        </div>
                        <div className={`flex flex-col md:grid ${gridColumnClass} pb-16 md:pb-12 md:gap-${gapValue}`}>
                            {cardComponent.attributes.cardSectiondata?.map((card: any, index: any) => {
                                return (
                                    <div key={index} className={`gap-4 fadeInDown h-96 w-11/12 rounded-2xl flex flex-col items-center justify-center pb-5 border-t-[15px]`}
                                        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderColor : cardComponent.attributes.topBorderColor }}
                                    >
                                            <img src={card.cardIcons.data.attributes.name} />
                                            <h1 className={`${cardCount === 4 ? "w-4/5" : "w-3/5"} text-[#204572] text-lg pt-3 font-medium  text-center justify-center`}>{card.cardDescription}</h1>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })
            }

        </>

    );
}


export default CardsComponent;
