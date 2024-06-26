
"use client"
import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ctaData = gql`
query GetctaData{
    ctas{
      data{
        id
        attributes{
          ctaText
          ButtonText
        }
      }
    }
  }
`;

const Ctacomp = () => {
    const { loading, error, data } = useQuery(ctaData);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!loading && data && containerRef.current) {
            const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

            tl.fromTo(
                containerRef.current,
                { y: "-100%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.7, ease: "bounce" }
            );

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 20%',
                end: 'bottom 10%',
                animation: tl,
                onEnter: () => tl.play(),
                onLeaveBack: () => tl.reverse(),
                // markers: true
            });
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    console.log("ctaData", data);

    return (
        <div>
            <div ref={containerRef} className="ctacomp flex flex-col justify-center items-center">
                <div className="h-64 w-full bg-blue-950 text-white py-7 flex flex-col justify-center gap-6 items-center text-xl">
                    {data.ctas.data.map((cta: any, index: any) => {
                        return (
                            <>
                                <div key={index}>
                                    <p>{cta.attributes.ctaText}</p>
                                    <button className='bg-indigo-500 border border-white rounded-full h-10 w-32 text-base mx-20 mt-5'>{cta.attributes.ButtonText}</button>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Ctacomp;
