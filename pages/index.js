import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Premium Properties</h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </div>
  );
}
