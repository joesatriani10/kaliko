import Image from "next/image";
import { BackToTopButton } from "./back-to-top-button";
import { MenuImageModal } from "./menu-image-modal";

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
      { name: "Espresso $28", image: "/menu/espresso.webp" },
      { name: "Espresso Doble $35", image: "/menu/Espresso doble.webp" },
      { name: "Espresso Affogato $50", image: "/menu/Affogato.webp" },
    ],
  },
  {
    type: "section",
    title: "Con café",
    note: "12oz o 16oz",
    items: [
      { name: "Americano $35 / $45", image: "/menu/americano.webp" },
      { name: "Mocaccino $60 / $70" },
      { name: "Latte Con Escencia $60 / $70", image: "/menu/latte.webp" },
      { name: "Capuchino Francés $60 / $70", image: "/menu/capuchino.webp" },
      { name: "Caramel Macchiato $60 / $70" },
      { name: "Dirty Matcha-Chai $65 / $75" },
    ],
  },
  {
    type: "section",
    title: "Sin café",
    note: "12oz o 16oz",
    items: [
      { name: "Chocolate $50 / $60", image: "/menu/chocolate.webp" },
      { name: "Chocolate Con Bombón $55 / $65" },
      { name: "Chai (Clásico, Vainilla) $50 / $60" },
      { name: "Matcha $50 / $60", image: "/menu/matcha.webp" },
      { name: "Tisana Frutal $60 / $70" },
    ],
  },
  {
    type: "category",
    title: "Bebidas Frias",
    eyebrow: "Fresco y cremoso",
  },
  {
    type: "section",
    title: "Con café",
    note: "12oz o 16oz",
    items: [
      { name: "Americano $40 / $50", image: "/menu/iced-americano.webp" },
      { name: "Mocaccino $65 / $75" },
      { name: "Iced Latte $60 / $70", image: "/menu/iced-latte-real.webp" },
      { name: "Dirty Chai / Matcha $70 / $80" },
      { name: "Cappuccino $60 / $70" },
      { name: "Caramel Macchiato $65 / $75" },
    ],
  },
  {
    type: "section",
    title: "Sin café",
    note: "12oz o 16oz",
    items: [
      { name: "Chocolate $60 / $70", image: "/menu/chocolate.webp" },
      { name: "Matcha $60 / $70" },
      { name: "Matcha Strawberry $70 / $80", image: "/menu/matcha-strawberry.webp" },
      { name: "Matcha Ceremonial $70 / $80" },
      { name: "Chai $60 / $70" },
      { name: "Soda Italiana $40 / $50", image: "/menu/soda-italiana-manzana-verde.webp" },
      { name: "Tisana Helada $60 / $70" },
    ],
  },
  {
    type: "section",
    title: "Mixología y Cocteleria",
    items: [
      { name: "Carajillo $70", image: "/menu/carajillo.webp" },
      { name: "Coco Spice Americano $70" },
    ],
  },
  {
    type: "category",
    title: "Frappé",
    eyebrow: "Antojo dulce",
  },
  {
    type: "section",
    title: "Sin café",
    note: "12oz o 16oz",
    items: [
      { name: "Tiramisú $60 / $70", image: "/menu/tiramisu.webp" },
      { name: "Matcha $60 / $70", image: "/menu/frappe-matcha.webp" },
      { name: "Chai $60 / $70" },
      { name: "Choco-Avellana $60 / $70", image: "/menu/chocoavellana.webp" },
      { name: "Chocomenta $60 / $70" },
      { name: "Taro $60 / $70" },
      { name: "Fresas Con Crema $60 / $70", image: "/menu/fresas.webp" },
      { name: "Tizana Frappé $60 / $70", image: "/menu/tizana-frappe.webp" },
      { name: "Mazapan $60 / $70", image: "/menu/mazapan-real.webp" },
      { name: "Flan $60 / $70", image: "/menu/flan-real.webp" },
      { name: "Cookies & Cream $60 / $70" },
      { name: "Cajeta $60 / $70" },
      { name: "Caramelo $60 / $70" },
    ],
  },
  {
    type: "section",
    title: "Con café",
    note: "12oz o 16oz",
    items: [
      { name: "Café $60 / $70", image: "/menu/cafe.webp" },
      { name: "Moka $60 / $70" },
      { name: "Cappuccino $60 / $70" },
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
      { name: "Zarzamora $50 / $60", image: "/menu/zarzamora-real.webp" },
      { name: "Frutos Rojos $50 / $60", image: "/menu/frutos-rojos.webp" },
      { name: "Fruta Del Dragón $50 / $60", image: "/menu/fruta-del-dragon-real.webp" },
      { name: "Maracuyá $50 / $60", image: "/menu/smoothie-maracuya.webp" },
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
      { name: "Sandia $50 / $60", image: "/menu/sandia-real.webp" },
      { name: "Mango $50 / $60", image: "/menu/chamoyada-mango.webp" },
      { name: "Tamarindo $50 / $60", image: "/menu/tamarindo-real.webp" },
      { name: "Maracuyá $50 / $60", image: "/menu/smoothie-maracuya.webp" },
      { name: "Frutos Tropicales $50 / $60", image: "/menu/frutos-tropicales-real.webp" },
    ],
  },
  {
    type: "section",
    title: "Extras",
    items: [
      { name: "Crema Batida $10" },
      { name: "Shot De Escencia $10" },
      { name: "Shot De Espresso $10" },
      { name: "Perlas Explosivas $10" },
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

const splitMenuItem = (name: string) => {
  const match = name.match(/^(.*?)(\s+\$\d+(?:\s\/\s\$\d+)?)$/);

  return {
    displayName: match ? match[1] : name,
    price: match ? match[2].trim() : undefined,
  };
};

const splitPrice = (price: string) => {
  const [smallPrice, largePrice] = price.split(" / ");

  return { smallPrice, largePrice };
};

export default function Home() {
  return (
    <main id="top" className="menu-page">
      <header className="site-header">
        <a className="brand-mark" href="#menu" aria-label="Ir al menú">
          <span className="brand-logo-frame">
            <Image
              src="/logo.png"
              alt=""
              fill
              className="brand-logo"
              priority
              sizes="52px"
            />
          </span>
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
                    {section.note ? (
                      <span className="section-size-label">
                        <span>12oz</span>
                        <span>o</span>
                        <span>16oz</span>
                      </span>
                    ) : null}
                  </div>

                  <div className="item-list">
                    {section.items.map((item) => {
                      const { displayName, price } = splitMenuItem(item.name);
                      const priceParts = price ? splitPrice(price) : undefined;

                      return (
                        <div
                          className={item.image ? "menu-item has-image" : "menu-item"}
                          key={`${section.title}-${item.name}`}
                        >
                          {item.image ? (
                            <MenuImageModal image={item.image} name={displayName} />
                          ) : null}
                          <span className="item-name">{displayName}</span>
                          {priceParts ? (
                            <span className={priceParts.largePrice ? "item-price item-price-pair" : "item-price"}>
                              <span>{priceParts.smallPrice}</span>
                              {priceParts.largePrice ? (
                                <>
                                  <span>/</span>
                                  <span>{priceParts.largePrice}</span>
                                </>
                              ) : null}
                            </span>
                          ) : null}
                        </div>
                      );
                    })}
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
          <a
            href="https://wa.me/523171194321?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido"
            target="_blank"
            rel="noreferrer"
            className="menu-link"
            aria-label="Enviar mensaje por WhatsApp al 317 119 4321"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="menu-link-icon">
              <path
                d="M12.1 3A8.8 8.8 0 0 0 4.5 16.2L3.4 21l4.9-1.3A8.8 8.8 0 1 0 12.1 3Zm0 1.7a7.1 7.1 0 0 1 6.1 10.8 7.1 7.1 0 0 1-8.7 2.7l-.3-.1-2.9.8.8-2.8-.2-.3a7.1 7.1 0 0 1 5.2-11.1Zm-3.1 3.8c-.2 0-.5.1-.7.4-.2.3-.8.8-.8 2 0 1.2.9 2.4 1 2.5.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.5-.3-1.7-.8c-.3-.1-.5-.2-.7.2l-.7.8c-.1.2-.3.2-.6.1-.3-.1-1.1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.8-.1-.3 0-.4.1-.6l.4-.4c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.4-.4-.4-.6-.4Z"
                fill="currentColor"
              />
            </svg>
            WhatsApp 317 119 4321
          </a>
        </footer>
      </section>

      <BackToTopButton />
    </main>
  );
}
