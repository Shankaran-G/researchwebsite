import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, service4, service5 } from "../assets";

const Services = () => {
  return (
    <Section id="results">
      <div className="container">
        <Heading
          title="Results & Monitoring"
          text="Data Annotation, System Training, System Testing, Results"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[30rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[35rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4 ml-10">Model Architecture</h4>
              <p className="body-2 mb-[3rem] ml-10 text-n-3">
                Achieved 77% accuracy with our custom YOLO model to detect lane
                markings and road conditions.
              </p>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            <div className="relative min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Annotation CVAT"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Annotation</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Used CVAT to annotate road lane data and prepare a
                  high-quality dataset for training.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[35rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Challenging Conditions</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Annotated roads without markings to enhance the model’s
                  ability in real-world difficult scenarios.
                </p>
              </div>
              <div className="relative h-[15rem] bg-n-8 rounded-xl overflow-hidden md:h-[18rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Training Difficult Scenes"
                />
              </div>
            </div>

            <div className="relative min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service5}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="System Testing"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">System Testing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  The Model get 77% Accuracy during testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
