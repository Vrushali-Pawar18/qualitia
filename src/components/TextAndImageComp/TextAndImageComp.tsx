"use client"
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const textAndImageData = gql`
query GetTextAndImgCompData{
    textAndImgComps{
      data{
        id
        attributes{
          textImgData{
            heading
            Layout
            Image{
              data{
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




const TextAndImageComp = () => {

    // const textAndImageData = 
    //     {
    //         description: "End-to-end integrated testing for a variety of applications",
    //         image: { src: "/TextAndImageCompImg/triangleImg.png", alt: "horizontalImg" },
    //         alignment: "horizontal"
    //     }
    const { loading, error, data } = useQuery(textAndImageData);

    if (loading) return <p>Loading...</p>
    if (error) return <p>error</p>
    console.log("textAndImageData------>", data);


    return (
        <div className='max-w-6xl mx-auto'>
            {data.textAndImgComps.data.map((textAndImage: any, index: any) => (
                <div className={`container flex sm:flex-col md:flex-row px-5 py-8 sm:py-24 items-center justify-center ${textAndImage.attributes.textImgData[0].Layout === 'vertical' ? 'flex-col' : 'flex-row'}`}>
                    <div className={textAndImage.attributes.textImgData[0].Layout === 'vertical' ? 'flex flex-col items-center justify-center gap-12' : 'md:flex justify-center items-center '}>
                        <div className={textAndImage.attributes.textImgData[0].Layout === 'vertical' ? 'mb-6 sm:mb-0' : 'lg:w-2/3 w-full'}>
                            <h1 className={textAndImage.attributes.textImgData[0].Layout === 'vertical' ? 'title-font md:text-xl lg:text-5xl mb-2 inline-block font-bold text-[#032d60] text-center' : ' sm:items-center title-font md:text-xl lg:text-5xl mb-4 w-4/5 inline-block font-bold text-[#032d60]'}>
                                {textAndImage.attributes.textImgData[0].heading}
                            </h1>
                        </div>
                        <img className={textAndImage.attributes.textImgData[0].Layout === 'vertical' ? 'mb-6 sm:mb-0 object-cover object-center h-[300px] sm:h-[550px]' : 'mb-6 sm:mb-0 object-cover object-center h-[250px] sm:h-[450px]'} src={textAndImage.attributes.textImgData[0].Image?.data.attributes.name} alt={textAndImage.attributes.textImgData[0].Image?.data.attributes.alternativeText} />
                    </div>
                </div>
            ))}
        </div>


    );
};

export default TextAndImageComp;


