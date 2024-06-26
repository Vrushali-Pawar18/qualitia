// "use client"
// import React, { useEffect, useRef } from 'react';
// import { gql, useQuery } from '@apollo/client';
// import gsap from 'gsap'; // Import GSAP
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);


// const customersData = gql`
// query GetQualitiaCustomers {
//     qualitiaCustomers {
//       data {
//         id
//         attributes {
//           image(pagination:{pageSize:100}){
//             data {
//               id
//               attributes {
//                 name
//                 alternativeText
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const QualitiaCustomers = () => {
//     const { loading, error, data } = useQuery(customersData);
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!loading && data && containerRef.current && data.qualitiaCustomers.data) {
//             const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
//             const leftHalfElements = containerRef.current.querySelectorAll('.left-half');
//             const rightHalfElements = containerRef.current.querySelectorAll('.right-half');
//             const scroll = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

//             tl.fromTo(
//                 leftHalfElements,
//                 { x: '-100%', opacity: 0 },
//                 { x: '0%', opacity: 1, stagger: 0.05, duration: 0.7 }
//             ).fromTo(
//                 rightHalfElements,
//                 { x: '100%', opacity: 0 },
//                 { x: '0%', opacity: 1, stagger: 0.05, duration: 0.7 },
//             );


//             // Attach ScrollTrigger to the timeline
//             ScrollTrigger.create({
//                 trigger: containerRef.current,
//                 start: 'top 70%',
//                 end: " bottom 10%",
//                 onEnter: () => tl.play(),
//                 onEnterBack: () => tl.reverse(),
//                 animation: tl
//             });
//         }
//     }, [loading, data]);


//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error</p>;

//     console.log("QualitiaCustomers=======", data)

//     return (
//         <div className='max-w-6xl mx-auto pt-28' ref={containerRef}>
//             <div className='flex items-center justify-center'>
//                 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-sky-900">Qualitia Customers</h1>
//             </div>
//             <div className="grid sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-5 pb-2 ">
//                 {data.qualitiaCustomers.data[0].attributes?.image.data.map((customer: any, index: any) => {
//                     const getClassForIndex = (leftIndex : number) => {
//                         const indexes = [0, 1, 2, 6, 7, 8, 12, 13, 14];
//                         const indexInSequence = indexes.indexOf(leftIndex);
//                         return indexInSequence !== -1 || indexInSequence % 3 === 0 ? 'left-half' : 'right-half';
//                     };
//                     return (
//                         <div
//                             className={`rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto ${getClassForIndex(index)}`}
//                             key={index}
//                             style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
//                         >
//                             <img className="h-20 w-24 object-contain" src={customer.attributes.name} alt={customer.attributes.alternativeText} />
//                         </div>
//                     );
//                 })}
//             </div>

//             <div className="flex flex-col justify-center items-center text-xl pt-16 pb-4">
//                 <button className='border border-[#032d60] rounded-full h-12 w-36 text-lg text-[#032d60] font-bold'>See more</button>
//             </div>
//         </div>
//     );
// };

// export default QualitiaCustomers;





// "use client";
// import React, { useEffect, useRef } from 'react';
// import { gql, useQuery } from '@apollo/client';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const customersData = gql`
// query GetQualitiaCustomers {
//     qualitiaCustomers {
//       data {
//         id
//         attributes {
//           image(pagination:{pageSize:100}){
//             data {
//               id
//               attributes {
//                 name
//                 alternativeText
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const QualitiaCustomers = () => {
//     const { loading, error, data } = useQuery(customersData);
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!loading && data && containerRef.current) {
//             const leftHalfElements = containerRef.current.querySelectorAll('.left-half');
//             const rightHalfElements = containerRef.current.querySelectorAll('.right-half');

//             const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

//             tl.fromTo(
//                 leftHalfElements,
//                 { x: '-100%', opacity: 0 },
//                 { x: '0%', opacity: 1, stagger: 0.05, duration: 0.7 }
//             ).fromTo(
//                 rightHalfElements,
//                 { x: '100%', opacity: 0 },
//                 { x: '0%', opacity: 1, stagger: 0.05, duration: 0.7 },
//                 "-=0.7" 
//             );

//             ScrollTrigger.create({
//                 trigger: containerRef.current,
//                 start: 'top 55%',
//                 end: 'bottom 10%',
//                 animation: tl,
//                 onEnter: () => tl.play(),
//                 onLeaveBack: () => tl.reverse(),
//             });
//         }
//     }, [loading, data]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error</p>;

//     const getClassForIndex = (index: number) => {
//         const leftHalfIndexes = [0, 1, 2, 6, 7, 8, 12, 13, 14];
//         return leftHalfIndexes.includes(index) ? 'left-half' : 'right-half';
//     };

//     return (
//         <div className='max-w-6xl mx-auto pt-28' ref={containerRef}>
//             <div className='flex items-center justify-center'>
//                 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-sky-900">Qualitia Customers</h1>
//             </div>
//             <div className="grid sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-5 pb-2">
//                 {data.qualitiaCustomers.data[0].attributes?.image.data.map((customer: any, index: any) => (
//                     <div
//                         className={`rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto ${getClassForIndex(index)}`}
//                         key={customer.id}
//                         style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
//                     >
//                         <img className="h-20 w-24 object-contain" src={customer.attributes.name} alt={customer.attributes.alternativeText} />
//                     </div>
//                 ))}
//             </div>
//             <div className="flex flex-col justify-center items-center text-xl pt-16 pb-4">
//                 <button className='border border-[#032d60] rounded-full h-12 w-36 text-lg text-[#032d60] font-bold'>See more</button>
//             </div>
//         </div>
//     );
// };

// export default QualitiaCustomers;


"use client";
import React, { useEffect, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const customersData = gql`
query GetQualitiaCustomers {
    qualitiaCustomers {
      data {
        id
        attributes {
          image(pagination:{pageSize:100}){
            data {
              id
              attributes {
                name
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

const QualitiaCustomers = () => {
    const { loading, error, data } = useQuery(customersData);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!loading && data && containerRef.current) {
            const leftHalfElements = containerRef.current.querySelectorAll('.left-half');
            const rightHalfElements = containerRef.current.querySelectorAll('.right-half');

            const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

            tl.fromTo(
                leftHalfElements,
                { x: '-100%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 1.1, ease : "slow(0.7, 0.7, false)"}
            ).fromTo(
                rightHalfElements,
                { x: '100%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 1.1, ease : "slow(0.7, 0.7, false)"},
                "-=1.1" // Start the right elements animation at the same time as left elements animation
            );

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 70%',
                end: 'bottom 10%',
                animation: tl,
                onEnter: () => tl.play(),
                onLeaveBack: () => tl.reverse(),
            });
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const isLeftHalfIndex = (index:number) => {
        // const group = Math.floor(index / 6);
        const positionInGroup = index % 6;
        return positionInGroup < 3;
    };

    return (
        <div className='max-w-6xl mx-auto pt-28' ref={containerRef}>
            <div className='flex items-center justify-center'>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-sky-900">Qualitia Customers</h1>
            </div>
            <div className="grid sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-5 pb-2">
                {data.qualitiaCustomers.data[0].attributes?.image.data.map((customer: any, index: any) => (
                    <div
                        className={`rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto ${isLeftHalfIndex(index) ? 'left-half' : 'right-half'}`}
                        key={customer.id}
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
                    >
                        <img className="h-20 w-24 object-contain" src={customer.attributes.name} alt={customer.attributes.alternativeText} />
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center text-xl pt-16 pb-4">
                <button className='border border-[#032d60] rounded-full h-12 w-36 text-lg text-[#032d60] font-bold'>See more</button>
            </div>
        </div>
    );
};

export default QualitiaCustomers;
