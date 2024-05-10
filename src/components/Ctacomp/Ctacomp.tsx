"use client"
import { gql, useQuery } from '@apollo/client';
import React from 'react'

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
`

const Ctacomp = () => {

    const { loading, error, data } = useQuery(ctaData);

    if (loading) return <p>Loading...</p>
    if (error) return <p>error</p>

    console.log("ctaData", data);



    // const compData = {
    //     buttonHeading : "want to see Q-Boson in action?" ,
    //     buttonText : "Say when?",
    //   };

    return (
        <div>
            <div className="flex flex-col justify-center items-center ">
                <div className="h-64 w-full bg-blue-950 text-white py-7 flex flex-col justify-center gap-6 items-center text-xl ">
                    {data.ctas.data.map((cta: any) => {
                        return (
                            <>
                                <p>{cta.attributes.ctaText} </p>
                                <button className='bg-indigo-500 border border-white rounded-full h-10 w-32 text-base'>{cta.attributes.ButtonText}</button>
                            </>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Ctacomp;