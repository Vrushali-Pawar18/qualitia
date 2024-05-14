
"use client"
import React from 'react'
import { useQuery, gql } from '@apollo/client';


const bannerData = gql`
query GetBannerData{
  banners{
    data{
      id
      attributes{
        Heading
        subHeading
        icon{
          data{
            attributes{
              name
            }
          }
        }
      }
    }
  }
}

`

const QualitiaBanner = () => {

  const { loading, error, data } = useQuery(bannerData);

  if (loading) return <p>Loading...</p>
  if (error) return <p>error</p>
  console.log(data);

  // const bannerData = {
  //   icon : { src : "logo.png" , alt : "hero"},
  //   heading : "Level up your Salesforce release game. Automate testing for every sprint.",
  //   subHeading : "Eliminate a ctach-up struggle that slows you down."
  // };


  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {data.banners.data.map((banner : any) => {
            return (
              <>
                <img className="mb-10 object-cover object-center rounded" src={banner.attributes.icon.data.attributes.name} /><div className="text-center lg:w-2/3 w-full">
                  <h1 className="title-font md:text-2xl lg:text-4xl mb-4 w-4/5 inline-block font-bold text-[#032d60]">{banner.attributes.Heading}</h1>
                  <p className="mb-8 sm:text-sm lg:text-3xl font-sm  leading-relaxed text-[#032d60]">{banner.attributes.subHeading}</p>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </div>

  )
}
export default QualitiaBanner;
