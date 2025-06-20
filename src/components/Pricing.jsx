import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="our-app">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Vision Based Output Android App"
          title="Real-time detection and guidance"
        />

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            Click To Download the App
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
