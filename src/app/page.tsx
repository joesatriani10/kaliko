import Image from "next/image";
import { BackToTopButton } from "./back-to-top-button";

type MenuItem = {
  name: string;
  image?: string;
};

type MenuEntry =
  | {
      type: "category";
      title: string;
      eyebrow?: string;
    }
  | {
      type: "section";
      title: string;
      note?: string;
      items: MenuItem[];
    };

type MenuGroup = {
  title: string;
  eyebrow?: string;
  sections: Extract<MenuEntry, { type: "section" }>[];
};

const menuSections: MenuEntry[] = [
  {
    type: "category",
    title: "Bebidas Calientes",
    eyebrow: "Calientito para empezar",
  },
  {
    type: "section",
    title: "Café",
    items: [
      { name: "Espresso", image: "/menu/espresso.jpg" },
      { name: "Espresso Doble" },
      { name: "Espresso Affogato" },
    ],
  },
  {
    type: "section",
    title: "Bebidas con café",
    note: "12oz o 16oz",
    items: [
      { name: "Americano", image: "/menu/americano.jpg" },
      { name: "Mocaccino" },
      { name: "Latte", image: "/menu/latte.jpg" },
      { name: "Latte Con Escencia" },
      { name: "Capuchino Francés", image: "/menu/capuchino.jpeg" },
      { name: "Caramel Macchiato" },
      { name: "Dirty Matcha-Chai" },
    ],
  },
  {
    type: "section",
    title: "Bebidas sin café",
    note: "12oz o 16oz",
    items: [
      { name: "Chocolate", image: "/menu/chocolate.jpg" },
      { name: "Chocolate Con Bombón" },
      { name: "Chai (Clásico, Vainilla)" },
      { name: "Matcha", image: "/menu/matcha.jpg" },
      { name: "Tisana Frutal" },
    ],
  },
  {
    type: "category",
    title: "Bebidas Frias",
    eyebrow: "Fresco y cremoso",
  },
  {
    type: "section",
    title: "Bebidas con café",
    note: "12oz o 16oz",
    items: [
      { name: "Americano", image: "/menu/iced-americano.jpg" },
      { name: "Iced Latte", image: "/menu/iced-latte-real.jpeg" },
      { name: "Dirty Chai / Matcha" },
      { name: "Cappuccino" },
      { name: "Caramel Macchiato" },
    ],
  },
  {
    type: "section",
    title: "Bebidas sin café",
    note: "12oz o 16oz",
    items: [
      { name: "Chocolate" },
      { name: "Matcha" },
      { name: "Matcha Strawberry", image: "/menu/matcha-strawberry.jpeg" },
      { name: "Matcha Ceremonial" },
      { name: "Chai" },
      { name: "Soda Italiana", image: "/menu/soda-italiana.jpg" },
    ],
  },
  {
    type: "section",
    title: "Mixología y Cocteleria",
    items: [
      { name: "Carajillo", image: "/menu/carajillo.jpg" },
      { name: "Coco Spice Americano" },
    ],
  },
  {
    type: "category",
    title: "Frappé",
    eyebrow: "Antojo dulce",
  },
  {
    type: "section",
    title: "Bebidas sin café",
    note: "12oz o 16oz",
    items: [
      { name: "Tiramisú", image: "/menu/tiramisu.jpg" },
      { name: "Matcha", image: "/menu/frappe-matcha.jpeg" },
      { name: "Chai" },
      { name: "Choco-Avellana" },
      { name: "Taro" },
      { name: "Fresas Con Crema", image: "/menu/fresas.jpg" },
      { name: "Tizana Frappé", image: "/menu/tizana-frappe-thumb.jpeg" },
      { name: "Mazapan" },
      { name: "Flan" },
      { name: "Cookies & Cream" },
      { name: "Cajeta" },
      { name: "Oreo" },
    ],
  },
  {
    type: "section",
    title: "Bebidas con café",
    note: "12oz o 16oz",
    items: [
      { name: "Café", image: "/menu/cafe.jpg" },
      { name: "Moka" },
      { name: "Cappuccino" },
    ],
  },
  {
    type: "category",
    title: "Smothies",
    eyebrow: "Fruta y color",
  },
  {
    type: "section",
    title: "Sabores",
    note: "12oz o 16oz",
    items: [
      { name: "Zarzamora" },
      { name: "Frutos Rojos", image: "/menu/frutos-rojos.jpg" },
      { name: "Fruta Del Dragón" },
      { name: "Maracuyá" },
    ],
  },
  {
    type: "category",
    title: "Chamoyadas",
    eyebrow: "Dulce, ácido y picosito",
  },
  {
    type: "section",
    title: "Sabores",
    note: "12oz o 16oz",
    items: [
      { name: "Sandia" },
      { name: "Mango", image: "/menu/mango.jpg" },
      { name: "Tamarindo" },
      { name: "Maracuyá" },
      { name: "Frutos Tropicales" },
    ],
  },
  {
    type: "section",
    title: "Extras",
    note: "12oz o 16oz",
    items: [
      { name: "Crema Batida" },
      { name: "Shot De Escencia" },
      { name: "Shot De Espresso" },
      { name: "Perlas Explosivas" },
    ],
  },
];

const menuGroups = menuSections.reduce<MenuGroup[]>((groups, entry) => {
  if (entry.type === "category") {
    groups.push({
      title: entry.title,
      eyebrow: entry.eyebrow,
      sections: [],
    });
    return groups;
  }

  const currentGroup = groups.at(-1);

  if (currentGroup) {
    currentGroup.sections.push(entry);
  }

  return groups;
}, []);

const heroImages = menuSections
  .flatMap((section) => (section.type === "section" ? section.items : []))
  .filter((item): item is MenuItem & { image: string } => Boolean(item.image))
  .slice(0, 4);

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Home() {
  return (
    <main id="top" className="menu-page">
      <header className="site-header">
        <a className="brand-mark" href="#menu" aria-label="Ir al menú">
          <Image
            src="/logo.png"
            alt=""
            width={96}
            height={96}
            className="brand-logo"
            priority
          />
          <span>Kaliko Pan y Cafe</span>
        </a>
        <a className="header-action" href="#menu">
          Menú
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p>Kaliko Pan y Cafe</p>
          <h1>Menú</h1>
        </div>

        <div className="hero-gallery" aria-hidden="true">
          {heroImages.map((item, index) => (
            <div className={`hero-image hero-image-${index + 1}`} key={item.name}>
              <Image
                src={item.image}
                alt=""
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : undefined}
                sizes="(max-width: 760px) 46vw, 240px"
              />
            </div>
          ))}
        </div>
      </section>

      <nav className="category-nav" aria-label="Categorías del menú">
        {menuGroups.map((group) => (
          <a href={`#${slugify(group.title)}`} key={group.title}>
            {group.title}
          </a>
        ))}
      </nav>

      <section id="menu" className="menu-shell" aria-label="Menu de Kaliko Pan y Cafe">
        {menuGroups.map((group) => (
          <section className="menu-group" id={slugify(group.title)} key={group.title}>
            <div className="group-head">
              {group.eyebrow ? <p>{group.eyebrow}</p> : null}
              <h2>{group.title}</h2>
            </div>

            <div className="section-grid">
              {group.sections.map((section) => (
                <article className="menu-section" key={`${group.title}-${section.title}`}>
                  <div className="section-head">
                    <h3>{section.title}</h3>
                    {section.note ? <span>{section.note}</span> : null}
                  </div>

                  <div className="item-list">
                    {section.items.map((item) => (
                      <div
                        className={item.image ? "menu-item has-image" : "menu-item"}
                        key={`${section.title}-${item.name}`}
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt=""
                            width={112}
                            height={112}
                            className="item-image"
                            loading="eager"
                          />
                        ) : null}
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <footer className="menu-footer">
          <a
            href="https://instagram.com/kaliko_panycafe"
            target="_blank"
            rel="noreferrer"
            className="menu-link"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="menu-link-icon">
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
          </a>
          <span>Tel. 317 119 4321</span>
        </footer>
      </section>

      <BackToTopButton />
    </main>
  );
}
