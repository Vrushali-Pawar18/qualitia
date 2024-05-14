import React from 'react';

const TextAndImageComp = () => {
    const textAndImageData = [
        {
            description: "End-to-end integrated testing for a variety of applications",
            image: { src: "/TextAndImageCompImg/triangleImg.png", alt: "horizontalImg" },
            alignment: "horizontal"
        },
        {
            description: "You are ready for CI/CD",
            image: { src: "/TextAndImageCompImg/CICDImg.png", alt: "verticalImg" },
            alignment: "vertical",
        },
    ];

    return (
        <div className='max-w-6xl mx-auto'>
            {textAndImageData.map((textAndImage, index) => (
                <div key={index} className={`container flex sm:flex-col md:flex-row px-5 py-8 sm:py-24 items-center justify-center ${textAndImage.alignment === 'vertical' ? 'flex-col' : 'flex-row'}`}>
                    <div className={textAndImage.alignment === 'vertical' ? 'flex flex-col items-center justify-center gap-12' : 'md:flex justify-center items-center '}>
                        <div className={textAndImage.alignment === 'vertical' ? 'mb-6 sm:mb-0' : 'lg:w-2/3 w-full'}>
                            <h1 className={textAndImage.alignment === 'vertical' ? 'title-font md:text-xl lg:text-5xl mb-2 inline-block font-bold text-[#032d60] text-center' : ' sm:items-center title-font md:text-xl lg:text-5xl mb-4 w-4/5 inline-block font-bold text-[#032d60]'}>
                                {textAndImage.description}
                            </h1>
                        </div>
                        <img className={textAndImage.alignment === 'vertical' ? 'mb-6 sm:mb-0 object-cover object-center h-[300px] sm:h-[550px]' : 'mb-6 sm:mb-0 object-cover object-center h-[250px] sm:h-[450px]'} src={textAndImage.image.src} alt={textAndImage.image.alt} />
                    </div>
                </div>
            ))}
        </div>


    );
};

export default TextAndImageComp;


