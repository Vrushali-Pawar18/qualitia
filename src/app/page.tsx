import CardsComponent from "@/components/CardsComponent/CardsComponent";
import Ctacomp from "@/components/Ctacomp/Ctacomp";
import QualitiaBanner from "@/components/QualitiaBanner/QualitiaBanner";
import QualitiaCustomersStatic from "@/components/QualitiaCustomers/QualitiaCustomersStatic";
import QualitiaCustomers from "@/components/QualitiaCustomers/QualitiaCustomers";
import TextAndImageComp from "@/components/TextAndImageComp/TextAndImageComp";


export default function Home() {
  return (
    <>
      <QualitiaBanner />
      {/* <QualitiaCustomersStatic /> */}
      <Ctacomp/>
      <QualitiaCustomers />
      <CardsComponent />
      <TextAndImageComp />
    </>
  );
}
