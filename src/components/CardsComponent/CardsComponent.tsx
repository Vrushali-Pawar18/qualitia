
"use client";

import React, { useEffect, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../app/qualitiaCustomers/page.css";

gsap.registerPlugin(ScrollTrigger);

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
`;

const CardsComponent = () => {
    const { loading, error, data } = useQuery(cardData);
    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!loading && data) {
            data.cardsComponents.data.forEach((_: any, index: any) => {
                const container = containerRefs.current[index];
                if (container) {
                    const cards = container.querySelectorAll('.cardComp');
                    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

                    tl.fromTo(
                        cards,
                        { y: 500, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, ease: "slow(0.7, 0.7, false)", stagger: 0.2 }
                    );

                    ScrollTrigger.create({
                        trigger: container,
                        start: 'top 45%',
                        end: 'bottom 10%',
                        animation: tl,
                        onEnter: () => tl.play(),
                        onLeaveBack: () => tl.reverse(),
                        // markers: true,
                    });
                }
            });
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const getGridClasses = (cardCount: number) => {
        switch (cardCount) {
            case 1:
            case 2:
            case 3:
                return 'grid-cols-3 gap-20';
            case 4:
            default:
                return 'grid-cols-4';
        }
    };

    return (
        <>
            {data?.cardsComponents?.data?.map((cardComponent: any, index1: any) => {
                const cardCount = cardComponent.attributes?.cardSectiondata?.length;
                const gridColumnClass = getGridClasses(cardCount);

                return (
                    <div
                        key={index1}
                        ref={(el) => { containerRefs.current[index1] = el; }}
                        className='max-w-6xl mx-auto flex flex-col justify-center items-center'
                    >
                        <div className='px-5 py-24 max-w-6xl mx-auto flex items-center justify-center pl-10'>
                            <h1 className="title-font md:text-2xl lg:text-4xl mb-4 w-4/5 inline-block font-bold text-[#032d60]">
                                {cardComponent.attributes.heading}
                            </h1>
                        </div>
                        <div className={`flex flex-col md:grid ${gridColumnClass} pb-16 md:pb-12 gap-5`}>
                            {cardComponent.attributes.cardSectiondata?.map((card: any, index: any) => (
                                <div
                                    key={index}
                                    className="cardComp gap-4 h-96 w-11/12 rounded-2xl flex flex-col items-center justify-center pb-5 border-t-[15px]"
                                    style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderColor: cardComponent.attributes.topBorderColor }}
                                >
                                    <img src={card.cardIcons.data.attributes.name} alt={card.cardIcons.data.attributes.alternativeText} />
                                    <h1 className={`${cardCount === 4 ? "w-4/5" : "w-3/5"} text-[#204572] text-lg pt-3 font-medium text-center justify-center`}>
                                        {card.cardDescription}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CardsComponent;




