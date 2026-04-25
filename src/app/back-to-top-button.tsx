"use client";

import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const hotDrinks = document.getElementById("bebidas-calientes");
      const threshold = hotDrinks
        ? hotDrinks.getBoundingClientRect().top + window.scrollY + hotDrinks.offsetHeight - 120
        : window.innerHeight;

      setIsVisible(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <a
      className="back-top"
      data-visible={isVisible}
      href="#top"
      aria-hidden={!isVisible}
      aria-label="Regresar arriba"
      tabIndex={isVisible ? undefined : -1}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M12 5 5.5 11.5l1.4 1.4 4.1-4.1V20h2V8.8l4.1 4.1 1.4-1.4L12 5Z"
          fill="currentColor"
        />
      </svg>
      <span>Arriba</span>
    </a>
  );
}
