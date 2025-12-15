import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

export default function PropertyCard({ property }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      overflow: "hidden",
      background: "#fff"
    }}>
      
      <ImageCarousel images={property.images} />

      <div style={{ padding: "15px" }}>
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p><b>{property.price}</b></p>

        <Link href={`/property/${property.id}`}>
          <button style={{
            marginTop: "10px",
            padding: "8px 14px",
            background: "#f4b400",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
}
