import React from 'react'

const QualitiaBanner = () => {
  const bannerData = {
    icon : { src : "logo.png" , alt : "hero"},
    heading : "Level up your Salesforce release game. Automate testing for every sprint.",
    subHeading : "Eliminate a ctach-up struggle that slows you down.",
    buttonHeading : "want to see Q-Boson in action?" ,
    buttonText : "Say when?",
  };


  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="mb-10 object-cover object-center rounded" alt={bannerData.icon.alt} src= {bannerData.icon.src} />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font md:text-2xl lg:text-3xl mb-4 font-bold  text-[#032d60]">{bannerData.heading}</h1>
            <p className="mb-8 md:text-sm lg:text-3xl font-sm leading-relaxed text-[#032d60]">{bannerData.subHeading}</p>
          </div>
        </div>
      </section>
    </div>

  )
}
export default QualitiaBanner;
