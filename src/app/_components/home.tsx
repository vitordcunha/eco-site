import Header from "@/_components/header";
import GetStartedButton from "@/_components/get-started-button";

const Home = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Header />

      <main className="h-full w-full overflow-hidden">
        <div className="relative z-30 w-full h-full">
          <div className="flex flex-col gap-10 text-white text-center mt-10 items-center h-full">
            <h1 className="text-6xl font-light">
              Eco-Friendly Energy Solutions <br /> for a Sustaintable Future
            </h1>

            <p className="text-xl font-light">
              We customize solar solution to fit your unique energy <br />{" "}
              requirements and budget.
            </p>

            <GetStartedButton />
          </div>
        </div>
      </main>

      <video
        autoPlay
        loop
        muted
        disablePictureInPicture
        playsInline
        className="absolute top-0 z-10 min-h-screen min-w-screen object-fill"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Home;
