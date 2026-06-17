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
  const [isModalImageLoaded, setIsModalImageLoaded] = useState(false);
  const [shouldPreload, setShouldPreload] = useState(false);

  const preloadImage = () => {
    setShouldPreload(true);
  };

  const openModal = () => {
    setIsModalImageLoaded(false);
    setShouldPreload(true);
    setIsOpen(true);
  };

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
          <span
            aria-hidden="true"
            className="image-modal-skeleton"
            data-visible={!isModalImageLoaded}
          />
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 680px) 88vw, 640px"
            className="image-modal-photo"
            data-loaded={isModalImageLoaded}
            priority
            onLoad={() => setIsModalImageLoaded(true)}
            onError={() => setIsModalImageLoaded(true)}
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
        onClick={openModal}
        onFocus={preloadImage}
        onPointerDown={preloadImage}
        onPointerEnter={preloadImage}
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

      {shouldPreload ? (
        <span aria-hidden="true" className="image-preload">
          <Image src={image} alt="" width={640} height={640} sizes="640px" />
        </span>
      ) : null}

      {isOpen ? createPortal(modal, document.body) : null}
    </>
  );
}
