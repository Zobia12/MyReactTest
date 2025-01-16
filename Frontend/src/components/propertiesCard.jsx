
const PropertyCard = ({ property }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4 m-2">
        <img
          src={property.image|| property.title.toLowerCase().includes("villa")?"/images/villa.jpg":"/images/apartment.jpg"}
          alt={property.title}
          className="w-full h-48 object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">{property.title}</h3>
        <p className="text-gray-700 mb-2">{property.location}</p>
        <p className="text-green-500 font-semibold">{property.price}</p>
        <p className="text-gray-500 text-sm mt-2">{property.description}</p>
      </div>
    );
  };
  
  export default PropertyCard;
  