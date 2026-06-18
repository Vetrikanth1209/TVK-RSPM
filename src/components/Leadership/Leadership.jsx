import "./Leadership.css";

import VijayCard from "./VijayCard";
import SeniorLeadership from "./SeniorLeadership";
import DistrictLeadership from "./DistrictLeadership";
import RasipuramSlider from "./RasipuramSlider";

const Leadership = () => {
  return (
    <section className="leadership-wrapper">

      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <VijayCard />

      <SeniorLeadership />

      <DistrictLeadership />

      <RasipuramSlider />

    </section>
  );
};

export default Leadership;