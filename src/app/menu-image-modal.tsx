"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

type MenuImageModalProps = {
  name: string;
  image: string;
};

export function MenuImageModal({ name, image }: MenuImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const modal = (
    <div
      aria-modal="true"
      className="image-modal-backdrop"
      role="dialog"
      onClick={() => setIsOpen(false)}
    >
      <div className="image-modal" onClick={(event) => event.stopPropagation()}>
        <button
          aria-label="Cerrar"
          className="image-modal-close"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <div className="image-modal-frame">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 680px) 88vw, 640px"
            className="image-modal-photo"
          />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );

  return (
    <>
      <button
        aria-label={`Ver imagen de ${name}`}
        className="item-image-button"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={image}
          alt=""
          width={112}
          height={112}
          className="item-image"
          loading="eager"
        />
      </button>

      {isOpen ? createPortal(modal, document.body) : null}
    </>
  );
}
