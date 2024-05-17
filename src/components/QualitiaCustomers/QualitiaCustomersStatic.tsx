
// "use client"
// import React from 'react';
// import "../../app/qualitiaCustomers/page.css";
// import "../../app/qualitiaCustomers/customerAnimation";
// const QualitiaCustomersStatic = () => {

//     const customersData = {
//         Heading: "Qualitia Customers",
//         customerIconsLeft: [
//             { src: "/customersImage/PWC.png", alt: "PWC" },
//             { src: "/customersImage/Deloitte.png", alt: "Deloitte" },
//             { src: "/customersImage/CIBC.png", alt: "CIBC" },
//             { src: "/customersImage/pitney bowes.png", alt: "pitney bowes" },
//             { src: "/customersImage/MetLife.jpeg", alt: "MetLife" },
//             { src: "/customersImage/HDFC.png", alt: "HDFC" },
//             { src: "/customersImage/Springer.png", alt: "Springer" },
//             { src: "/customersImage/PTC.png", alt: "PTC" },
//             { src: "/customersImage/Capita.png", alt: "Capita" },

//         ],

//         customerIconsRight: [
//             { src: "/customersImage/newrez.png", alt: "newrez" },
//             { src: "/customersImage/BSE.png", alt: "BSE" },
//             { src: "/customersImage/CDSL.png", alt: "CDSL" },
//             { src: "/customersImage/GE healthcare.png", alt: "GE healthcare" },
//             { src: "/customersImage/Prudential.png", alt: "Prudential" },
//             { src: "/customersImage/Philips.png", alt: "Philips" },
//             { src: "/customersImage/Nuance.png", alt: "Nuance" },
//             { src: "/customersImage/Whirpool.png", alt: "Whirpool" },
//             { src: "/customersImage/EbixCash.png", alt: "EbixCash" },
//         ],
//         buttonText: 'See more'
//     };

//     return (
//         <div className='max-w-6xl mx-auto pt-28'>
//             <div className='flex items-center justify-center'>
//                 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-sky-900">Qualitia Customers</h1>
//             </div>
//             <div className='flex gap-3'>
//                 <div className=" slide-in fadeInLeft grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-5 pb-2 w-1/2 ">
//                     {customersData.customerIconsLeft.map((customer: any, index: any) => (
//                         <div className=' rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto' key={index}
//                             style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
//                         >
//                             <img key={index} className="h-20 w-24 object-contain" src={customer.src} alt={customer.alt} />
//                         </div>
//                     ))}
//                 </div>
//                 <div className=" slide-in fadeInRight grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-5 pb-2 w-1/2">
//                     {customersData.customerIconsRight.map((customer: any, index: any) => (
//                         <div className=' rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto' key={index}
//                             style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
//                         >
//                             <img key={index} className="h-20 w-24 object-contain" src={customer.src} alt={customer.alt} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="flex flex-col justify-center items-center text-xl pt-16 pb-4">
//                 <button className='border border-[#032d60] rounded-full h-12 w-36 text-lg text-[#032d60] font-bold'>See more</button>
//             </div>
//         </div>

//     );
// };

// export default QualitiaCustomersStatic;



"use client"
import React, { useEffect, useRef } from 'react';
import '../../app/qualitiaCustomers/page.css';

const QualitiaCustomersStatic = () => {
    const componentRef = useRef(null);

    useEffect(() => {
        const component = componentRef.current;
        if (!component) return;

        const appearOptions = {
            threshold: 0,
        };

        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sliders = entry.target.querySelectorAll('.slide-in-right');
                    const slidersLeft = entry.target.querySelectorAll('.slide-in-left');

                    sliders.forEach((slider) => {
                        slider.classList.add('slide-in-right', 'appear');
                      }); 
                      
                      slidersLeft.forEach((slider) => {
                        slider.classList.add('slide-in-left', 'appear');
                      });
                      

                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        appearOnScroll.observe(component);

        return () => {
            if (component) {
                appearOnScroll.unobserve(component);
            }
        };
    }, []);

    const customersData = {
        Heading: 'Qualitia Customers',
        customerIconsLeft: [
            { src: "/customersImage/PWC.png", alt: "PWC" },
            { src: "/customersImage/Deloitte.png", alt: "Deloitte" },
            { src: "/customersImage/CIBC.png", alt: "CIBC" },
            { src: "/customersImage/pitney bowes.png", alt: "pitney bowes" },
            { src: "/customersImage/MetLife.jpeg", alt: "MetLife" },
            { src: "/customersImage/HDFC.png", alt: "HDFC" },
            { src: "/customersImage/Springer.png", alt: "Springer" },
            { src: "/customersImage/PTC.png", alt: "PTC" },
            { src: "/customersImage/Capita.png", alt: "Capita" },

        ],
        customerIconsRight: [
            { src: "/customersImage/newrez.png", alt: "newrez" },
            { src: "/customersImage/BSE.png", alt: "BSE" },
            { src: "/customersImage/CDSL.png", alt: "CDSL" },
            { src: "/customersImage/GE healthcare.png", alt: "GE healthcare" },
            { src: "/customersImage/Prudential.png", alt: "Prudential" },
            { src: "/customersImage/Philips.png", alt: "Philips" },
            { src: "/customersImage/Nuance.png", alt: "Nuance" },
            { src: "/customersImage/Whirpool.png", alt: "Whirpool" },
            { src: "/customersImage/EbixCash.png", alt: "EbixCash" },
        ],
        buttonText: 'See more',
    };

    return (
        <div ref={componentRef} className="max-w-6xl mx-auto pt-28">
            <div className="flex items-center justify-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-sky-900">
                    Qualitia Customers
                </h1>
            </div>
            <div className="flex gap-3">
                <div className="slide-in-left grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-5 pb-2 w-1/2">
                    {customersData.customerIconsLeft.map((customer, index) => (
                        <div
                            className="rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto slide-in"
                            key={index}
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                            }}
                        >
                            <img
                                key={index}
                                className="h-20 w-24 object-contain"
                                src={customer.src}
                                alt={customer.alt}
                            />
                        </div>
                    ))}
                </div>
                <div className="slide-in-right grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-5 pb-2 w-1/2">
                    {customersData.customerIconsRight.map((customer, index) => (
                        <div
                            className="rounded-md flex justify-center items-center w-8/12 sm:w-full mx-auto slide-in"
                            key={index}
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                            }}
                        >
                            <img
                                key={index}
                                className="h-20 w-24 object-contain"
                                src={customer.src}
                                alt={customer.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-xl pt-16 pb-4">
                <button className="border border-[#032d60] rounded-full h-12 w-36 text-lg text-[#032d60] font-bold">
                    See more
                </button>
            </div>
        </div>
    );
};

export default QualitiaCustomersStatic;
