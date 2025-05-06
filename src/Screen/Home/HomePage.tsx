// import Automation from "./Components/Automation/Automation";
// import { Banner } from "./Components/Banner/Banner";
// import ReactHookForm from "./Components/ReactHookForm";

import getAllVehicles from './Components/api/get-vehicle';
import { CardDemo } from './Components/Card';

export default async function HomePage() {
  const vehicles = await getAllVehicles();
  return (
    // <section className={`w-full py-12 bg-white`}>
    //     <div className="container mx-auto border-0">
    //         <div className="flex flex-col items-center text-center mb-8">
    //             <h2 className="text-3xl font-bold tracking-tight mb-2">Our Services</h2>
    //             <p className="text-muted-foreground max-w-[700px]">Discover how our automation tools can help your business grow</p>
    //         </div>
    //         <Automation />
    //     </div>
    // </section>
    // <Banner/>
    // <ReactHookForm />
    <div className={`w-full bg-white py-10`}>
      <div className="container mx-auto border-0">
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">
            Popular Cards
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Discover how our automation tools can help your business grow
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-4">
          {vehicles?.map((item) => {
            return <CardDemo key={item.id} vehicle={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
