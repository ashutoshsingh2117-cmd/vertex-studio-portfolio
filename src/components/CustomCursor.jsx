import { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      requestAnimationFrame(animateRing);
    };

    animateRing();

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "a, button, .gallery-card, .project-card, .service-card, .testimonial-card, .contact-card"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ring.classList.add("cursor-hover");
      });

      el.addEventListener("mouseleave", () => {
        ring.classList.remove("cursor-hover");
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring"
      ></div>

      <div
        ref={dotRef}
        className="cursor-dot"
      ></div>
    </>
  );
}

export default CustomCursor;