import ServiceCard from "../common/ServiceCard";

const NearbyServices = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-3 gap-6">
      <ServiceCard title="Royal DJ" price="8000" />
      <ServiceCard title="Wedding Catering" price="15000" />
      <ServiceCard title="Stage Decoration" price="6000" />
    </div>
  );
};

export default NearbyServices;
