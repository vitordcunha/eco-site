import { IconCloudFilled } from "@tabler/icons-react";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="h-screen w-screen p-10 bg-white">
      <div className="bg-blue-600/20 w-full h-full rounded-3xl flex p-6">
        <div className="w-full h-full relative">
          <Image
            src="/offshore-farm.jpg"
            width="1000"
            height="1000"
            className="h-full w-full rounded-3xl object-cover"
            alt="offshore farm"
          />

          <div className="absolute w-[200px] h-[280px] bg-white rounded-xl bottom-6 left-6"></div>
        </div>

        <div className="w-full flex flex-col justify-center gap-20 py-10 px-32">
          <h3 className="uppercase font-light text-gray-400 text-3xl">
            Benefit
          </h3>

          <h2 className="text-7xl font-medium text-black">
            Benefits of <br />
            -- Renewable <br />
            ------ Energy!
          </h2>

          <div className="h-30 flex gap-3 items-center">
            <span className="flex items-center justify-center size-[60px] bg-blue-600 text-white rounded-full">
              <IconCloudFilled />
            </span>

            <div className="text-black">
              <p className="font-medium">Pollution Free</p>
              <p className="mt-1 font-light max-w-[350px]">
                Reduce your carbon footprint and contribution to global warming
              </p>
            </div>
          </div>

          <div className="h-30 flex gap-3 items-center">
            <span className="flex items-center justify-center size-[60px] bg-blue-600 text-white rounded-full">
              <IconCloudFilled />
            </span>

            <div className="text-black">
              <p className="font-medium">Pollution Free</p>
              <p className="mt-1 font-light max-w-[350px]">
                Reduce your carbon footprint and contribution to global warming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
