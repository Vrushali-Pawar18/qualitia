import React from 'react'

const Ctacomp = () => {
    const compData = {
        buttonHeading : "want to see Q-Boson in action?" ,
        buttonText : "Say when?",
      };
    return (
        <div>
            <div className="flex flex-col justify-center items-center ">
                <div className="h-64 w-full bg-blue-950 text-white py-7 flex flex-col justify-center gap-6 items-center text-xl ">
                    <p>{compData.buttonHeading} </p>
                    <button className='bg-indigo-500 border border-white rounded-full h-10 w-32 text-base'>{compData.buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Ctacomp;