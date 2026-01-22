const ServiceCard = ({ title, price }) => {
    return (
      <div className="border rounded p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-green-600">₹ {price}</p>
        <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded">
          Book
        </button>
      </div>
    );
  };
  
  export default ServiceCard;
  