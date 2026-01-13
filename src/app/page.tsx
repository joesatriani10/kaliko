const menuSections = [
  {
    title: "Bebidas calientes",
    note: "Espresso y especialidades",
    items: [
      { name: "Expresso" },
      { name: "Expresso doble" },
      { name: "Expresso affogato" },
      { name: "Americano" },
      { name: "Mocaccino" },
      { name: "Latte" },
      { name: "Latte con escencia" },
      { name: "Cappuchino francés" },
      { name: "Caramel Machiato" },
      { name: "Dirty Matcha-Chai" },
    ],
  },
  {
    title: "Chocolate e infusiones",
    note: "Calientes",
    items: [
      { name: "Chocolate" },
      { name: "Chocolate con bombón" },
      { name: "Chai (clásico, vainilla)" },
      { name: "Matcha" },
      { name: "Tisana frutal" },
    ],
  },
  {
    title: "Bebidas frías con café",
    note: "Tamaño 12oz o 16oz.",
    items: [
      { name: "Café" },
      { name: "Carajillo" },
      { name: "Americano con coco spice" },
      { name: "Americano" },
      { name: "Latte frío" },
      { name: "Dirty chai / matcha" },
      { name: "Cappuccino" },
      { name: "Caramel machiato" },
    ],
  },
  {
    title: "Mixología y coctelería",
    note: "Bebidas frías sin café • 12oz o 16oz",
    items: [
      { name: "Chocolate" },
      { name: "Matcha" },
      { name: "Matcha ceremonial" },
      { name: "Chai" },
      { name: "Soda italiana" },
    ],
  },
  {
    title: "Frappé sin café",
    note: "Sabores disponibles",
    items: [
      { name: "Tiramisú" },
      { name: "Matcha" },
      { name: "Chai" },
      { name: "Choco-avellana" },
      { name: "Taro" },
      { name: "Fresas con crema" },
      { name: "Mazapán" },
      { name: "Flan" },
      { name: "Galletas y crema" },
      { name: "Cajeta" },
      { name: "Oreo" },
    ],
  },
  {
    title: "Frappé con café",
    note: "Sabores disponibles",
    items: [
      { name: "Café" },
      { name: "Moka" },
      { name: "Cappuccino" },
    ],
  },
  {
    title: "Smoothies (batidos)",
    note: "Sabores disponibles",
    items: [
      { name: "Zarzamora" },
      { name: "Frutos rojos" },
      { name: "Fruta del dragón" },
      { name: "Maracuyá" },
    ],
  },
  {
    title: "Chamoyadas",
    note: "Sabores disponibles",
    items: [
      { name: "Sandía" },
      { name: "Mango" },
      { name: "Tamarindo" },
      { name: "Maracuyá" },
      { name: "Frutos tropicales" },
    ],
  },
  {
    title: "Extras",
    note: "Agrega un toque extra",
    items: [
      { name: "Crema batida" },
      { name: "Shot de escencia" },
      { name: "Shot de espresso" },
      { name: "Perlas explosivas" },
    ],
  },
];

export default function Home() {
  return (
    <main className="menu-page">
      <div className="menu-shell">
        <section className="menu-hero">
          <div className="hero-title">
            <img
              src="/logo.png"
              alt="Logo de Kaliko"
              className="hero-logo"
            />
            <div className="hero-heading">
              <p className="menu-subtitle">Menú</p>
            </div>
          </div>
        </section>

        <section className="menu-grid">
          {menuSections.map((section) => (
            <article key={section.title} className="menu-section">
              <div className="section-head">
                <h2 className="section-title">{section.title}</h2>
                {section.note ? (
                  <p className="section-note">{section.note}</p>
                ) : null}
              </div>
              <div className="menu-items">
                {section.items.map((item) => (
                  <div key={item.name} className="menu-item">
                    <span className="item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <footer className="menu-footer">
          <p>
            <a
              href="https://instagram.com/kaliko_panycafe"
              target="_blank"
              rel="noreferrer"
              className="menu-link"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="menu-link-icon"
              >
                <path
                  d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.6a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Zm6-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
                  fill="currentColor"
                />
                <path
                  d="M16.7 3H7.3A4.3 4.3 0 0 0 3 7.3v9.4A4.3 4.3 0 0 0 7.3 21h9.4A4.3 4.3 0 0 0 21 16.7V7.3A4.3 4.3 0 0 0 16.7 3Zm2.5 13.7a2.6 2.6 0 0 1-2.6 2.6H7.4a2.6 2.6 0 0 1-2.6-2.6V7.4a2.6 2.6 0 0 1 2.6-2.6h9.2a2.6 2.6 0 0 1 2.6 2.6Z"
                  fill="currentColor"
                />
              </svg>
              @kaliko_panycafe
            </a>{" "}
            · Tel. <strong>317 119 4321</strong>
          </p>
        </footer>
      </div>
    </main>
  );
}
