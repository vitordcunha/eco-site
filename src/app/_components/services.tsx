import GetStartedButton from "@/_components/get-started-button";
import { DirectionAwareHover } from "@/_components/ui/direction-aware-hover";
import { BentoGrid } from "@/_components/ui/grid";
import { Zap } from "lucide-react";

const Services = () => {
  return (
    <section className="h-screen w-screen bg-gray-100">
      <div className="flex h-full w-full p-20">
        <div className="w-full flex flex-col justify-between h-full py-16">
          <h3 className="uppercase font-light text-gray-400 text-2xl">
            Services
          </h3>

          <h2 className="text-5xl font-medium text-black">
            Increase Yout Home's <br />
            Value With Solar Panels
          </h2>

          <div className="flex flex-col gap-5 text-black">
            {items.map((item, index) => (
              <div className="h-30 flex gap-3 items-center" key={index}>
                <span className="flex items-center justify-center size-[60px] bg-blue-600/25 text-blue-600 rounded-full">
                  {item.icon}
                </span>

                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 font-light max-w-[350px]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <GetStartedButton className="border border-blue-600 text-blue-600" />
        </div>

        <div className="w-full">
          <BentoGrid className="md:grid-cols-2 md:grid-rows-2 w-full">
            <DirectionAwareHover
              className="col-span-2 md:w-full"
              imageUrl="/offshore-farm.jpg"
            >
              <p>Solar Panel Installation</p>
            </DirectionAwareHover>

            <DirectionAwareHover
              className="col-span-1 md:w-full"
              imageUrl="/offshore-farm.jpg"
            >
              <p>Solar Panel Installation</p>
            </DirectionAwareHover>

            <DirectionAwareHover
              className="col-span-1 md:w-full"
              imageUrl="/offshore-farm.jpg"
            >
              <p>Solar Panel Installation</p>
            </DirectionAwareHover>
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

const items = [
  {
    icon: <Zap size={25} />,
    title: "Energy Consultant",
    content:
      "Consultation first to see the energy condition around you and we can help to optimize it",
  },
  {
    icon: <Zap size={25} />,
    title: "Energy Consultant",
    content:
      "Consultation first to see the energy condition around you and we can help to optimize it",
  },
  {
    icon: <Zap size={25} />,
    title: "Energy Consultant",
    content:
      "Consultation first to see the energy condition around you and we can help to optimize it",
  },
];

export default Services;
