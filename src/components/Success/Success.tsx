const Success = () => {
  return (
    <div className="lg:w-[1036px] mx-auto font-mFont lg:mt-28 mt-14">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">Our Success</h1>
        <p className="lg:w-[550px] w-96 mx-auto text-gray-500">
          Our students dedication has led to remarkable achievements—top
          university admissions, awards, and positive community impact.
        </p>
        {/** progress counter **/}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 pt-8">
          <div className="flex flex-col">
            <h1 className="md:text-6xl text-4xl text-cyan-600">15+</h1>
            <p className="text-sm font-semibold text-gray-600">Students</p>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-6xl text-4xl text-cyan-600">75%</h1>
            <p className="text-sm font-semibold text-gray-600">Total success</p>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-6xl text-4xl text-cyan-600">35</h1>
            <p className="text-sm font-semibold text-gray-600">
              Main questions
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-6xl text-4xl text-cyan-600">26</h1>
            <p className="text-sm font-semibold text-gray-600">Chief experts</p>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-6xl text-4xl  text-cyan-600">16</h1>{" "}
            <p className="text-sm font-semibold text-gray-600">
              Years of experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
