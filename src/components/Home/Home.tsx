import Classroom from "../Classroom/Classroom";
import Cloud from "../Cloud/Cloud";
import Header from "../Header/Header";
import LatestNes from "../Latest-New/LatestNes";
import Lwm from "../LWM/Lwm";
import Success from "../Success/Success";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Success />
      <Cloud />
      <Lwm />
      <Classroom />
      <Testimonial />
      <LatestNes />
     
    </div>
  );
};

export default Home;
