import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [i, setI] = useState(0);

  const next = () => setI((i + 1) % images.length);
  const prev = () => setI((i - 1 + images.length) % images.length);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={images[i]}
        style={{ width: "100%", borderRadius: 8 }}
      />

      <button onClick={prev} style={{ position: "absolute", left: 5, top: "45%" }}>◀</button>
      <button onClick={next} style={{ position: "absolute", right: 5, top: "45%" }}>▶</button>
    </div>
  );
}
