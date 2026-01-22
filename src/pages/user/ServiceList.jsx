import CategoryFilter from "../../components/user/CategoryFilter";
import ServiceGrid from "../../components/user/ServiceGrid";

const ServiceList = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <CategoryFilter />
      <ServiceGrid />
    </div>
  );
};

export default ServiceList;
