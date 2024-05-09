import Ctacomp from "@/components/Ctacomp/Ctacomp";
import QualitiaBanner from "@/components/QualitiaBanner/QualitiaBanner";
import QualitiaCustomers from "@/components/QualitiaCustomers/QualitiaCustomers";


export default function Home() {
  return (
    <>
      <QualitiaBanner />
      <Ctacomp/>
      <QualitiaCustomers />
    </>
  );
}
