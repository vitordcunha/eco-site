import Counter from "@/_components/counter";
import GetStartedButton from "@/_components/get-started-button";
import { DirectionAwareHover } from "@/_components/ui/direction-aware-hover";

const AboutUs = () => {
  return (
    <section className="h-screen bg-white overflow-hidden">
      <div className="flex items-center p-10 text-black border-b">
        {items.map((item) => (
          <div
            key={item.label}
            className="w-full flex flex-col items-center gap-3"
          >
            <Counter
              from={0}
              to={item.value}
              suffix={item.sufix}
              className="text-5xl font-bold tracking-wide"
            />

            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-full flex p-10">
        <div className="flex flex-col w-full h-full px-5">
          <h3 className="text-6xl text-black">
            Shaping The Future <br />
            <span className="text-blue-600">SmartTechForGreen</span> <br />
            Energy And Grid Revenue
          </h3>

          <div className="py-10 h-[550px] w-[750px]">
            <DirectionAwareHover
              imageUrl="/about-us-worker.jpg"
              className="rounded-md md:w-full md:h-full"
            >
              <p>Wind farm power</p>
            </DirectionAwareHover>
          </div>
        </div>

        <div className="w-full h-full text-2xl text-black">
          <p>
            Embrace cutting-edge technology that enhances energy efficiency and
            promotes sustainability, creating a smarter and greener future for
            all.
          </p>

          <p className="mt-5">
            Our advanced solutions not only reduce carbon footprints but also
            optimize energy consumption, making it easier for individuals and
            businesses to contribute to a cleaner planet. With our innovative
            technology, the energy sector is evolving to meet the demands of a
            modern world. By integrating smart systems and renewable energy
            sources, we are paving the way for a future where energy is not only
            sustainable but also more accessible and reliable for everyone.
          </p>

          <GetStartedButton className="border border-blue-600 mt-10 text-blue-600" />
        </div>
      </div>
    </section>
  );
};

const items = [
  {
    value: 1200,
    label: "Total Hectares",
  },
  {
    value: 50,
    label: "Countries in Service",
    sufix: "+",
  },
  {
    value: 95,
    label: "Our Green Solutions",
    sufix: "%",
  },
  {
    value: 30,
    label: "Satished Customers",
    sufix: "k+",
  },
  {
    value: 10,
    label: "years in the industry",
    sufix: "+",
  },
];

const aboutUsImages = [
  {
    path: "/offshore-farm.jpg",
    title: "Offshore Farm",
    description: "Offshore Farm",
  },
  {
    path: "/solar-energy.jpeg",
    title: "Solar Energy",
    description: "Solar Energy",
  },
];

export default AboutUs;
