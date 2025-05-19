// import Automation from './Components/Automation';
// import { Banner } from './Components/Banner/Banner';
// import { CardDemo } from './Components/Card';
import ReactHookForm from './Components/ReactHookForm';

export default async function HomePage() {
  // const vehicles = await getAllVehicles();
  return (
    <div>
      <section className={`w-full bg-white py-12`}>
        <div className="container mx-auto border-0">
          <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Discover how our automation tools can help your business grow
            </p>
          </div>
          {/* <Automation /> */}
          <ReactHookForm />
        </div>
      </section>
      {/* <Banner /> */}
    </div>
    // <div className={`w-full bg-white py-10`}>
    //   <div className="container mx-auto border-0">
    //     <div className="mb-8 flex flex-col items-center text-center">
    //       <h2 className="mb-2 text-3xl font-bold tracking-tight">
    //         Popular Cards
    //       </h2>
    //       <p className="text-muted-foreground max-w-[700px]">
    //         Discover how our automation tools can help your business grow
    //       </p>
    //     </div>
    //     {/* <div className="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-4">
    //       {vehicles?.map((item) => {
    //         return <CardDemo key={item.id} vehicle={item} />;
    //       })}
    //     </div> */}
    //   </div>
    // </div>
  );
}
