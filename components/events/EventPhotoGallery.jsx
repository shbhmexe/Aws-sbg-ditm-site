'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import './EventPhotoGallery.css';

const ArrowIcon = ({ direction = 'right' }) => (
  <svg className={`event-photo-arrow ${direction}`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m18 6-12 12M6 6l12 12" />
  </svg>
);

export default function EventPhotoGallery({ photos = [], eventTitle }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visiblePhotoCount, setVisiblePhotoCount] = useState(12);
  const trackRef = useRef(null);
  const openerRef = useRef(null);
  const touchStartX = useRef(null);

  const displayPhotos = photos;
  const visiblePhotos = displayPhotos.slice(0, visiblePhotoCount);
  const thumbnailStart = activeIndex === null
    ? 0
    : Math.max(0, Math.min(activeIndex - 3, displayPhotos.length - 7));
  const viewerPhotos = displayPhotos.slice(thumbnailStart, thumbnailStart + 7);
  const displayActivePhoto = activeIndex === null ? null : displayPhotos[activeIndex];
  const displayHasMultiplePhotos = displayPhotos.length > 1;
  const isOpen = activeIndex !== null;

  const movePhoto = (direction) => {
    if (!displayPhotos.length) return;
    setActiveIndex((index) => (index + direction + displayPhotos.length) % displayPhotos.length);
  };

  useEffect(() => {
    if (!isOpen) {
      openerRef.current?.focus?.();
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft' && displayHasMultiplePhotos) movePhoto(-1);
      if (event.key === 'ArrowRight' && displayHasMultiplePhotos) movePhoto(1);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, displayHasMultiplePhotos, displayPhotos.length]);

  const scrollPhotos = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: track.clientWidth * 0.85, behavior: 'smooth' });
  };

  const loadMorePhotosNearEnd = (event) => {
    const track = event.currentTarget;
    const remaining = track.scrollWidth - track.scrollLeft - track.clientWidth;
    if (remaining < track.clientWidth * 0.8 && visiblePhotoCount < displayPhotos.length) {
      setVisiblePhotoCount((count) => Math.min(count + 12, displayPhotos.length));
    }
  };

  const finishSwipe = (event) => {
    if (touchStartX.current === null || !displayHasMultiplePhotos) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) >= 45) movePhoto(distance < 0 ? 1 : -1);
  };

  return (
    <>
      <section className="event-photo-gallery" aria-labelledby="event-photo-gallery-title">
        <div className="event-photo-gallery-header">
          <h2 id="event-photo-gallery-title">
            Photos <span>{displayPhotos.length}</span>
          </h2>
        </div>

        {displayPhotos.length ? (
          <div className="event-photo-track-wrap">
            <div className="event-photo-track" ref={trackRef} onScroll={loadMorePhotosNearEnd}>
              {visiblePhotos.map((photo, index) => (
                <button
                  className="event-photo-thumb"
                  key={photo.src}
                  type="button"
                  onClick={(event) => {
                    openerRef.current = event.currentTarget;
                    setActiveIndex(index);
                  }}
                  aria-label={`Open photo ${index + 1}: ${photo.title}`}
                >
                  <Image
                    className="event-photo-thumb-image"
                    src={photo.src}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 48vw, 23vw"
                    quality={58}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </button>
              ))}
            </div>
            {displayPhotos.length > 3 && (
              <>
                <div className="event-photo-track-fade" aria-hidden="true" />
                <button className="event-photo-track-next" type="button" onClick={scrollPhotos} aria-label="Scroll photos right">
                  <ArrowIcon />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="event-photo-gallery-empty">
            <span>Photos from {eventTitle} will be added here.</span>
          </div>
        )}
      </section>

      {displayActivePhoto && typeof document !== 'undefined' && createPortal(
        <div
          className="event-photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${displayActivePhoto.title}, photo ${activeIndex + 1} of ${displayPhotos.length}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="event-photo-lightbox-topbar">
            <div className="event-photo-lightbox-count">
              <span>EVENT PHOTOS</span>
              <strong>
                {String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(displayPhotos.length).padStart(2, '0')}
              </strong>
            </div>
            <button className="event-photo-lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close photo viewer">
              <CloseIcon />
            </button>
          </div>

          <div
            className="event-photo-lightbox-stage"
            onClick={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
          >
            {displayHasMultiplePhotos && (
              <button
                className="event-photo-lightbox-nav previous"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  movePhoto(-1);
                }}
                aria-label="Previous photo"
              >
                <ArrowIcon direction="left" />
              </button>
            )}
            <Image
              key={displayActivePhoto.src}
              className="event-photo-lightbox-image"
              src={displayActivePhoto.src}
              alt={displayActivePhoto.alt}
              fill
              sizes="100vw"
              quality={76}
              loading="eager"
              onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
              onTouchEnd={finishSwipe}
            />
            {displayHasMultiplePhotos && (
              <button
                className="event-photo-lightbox-nav next"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  movePhoto(1);
                }}
                aria-label="Next photo"
              >
                <ArrowIcon />
              </button>
            )}
          </div>

          <div className="event-photo-lightbox-slider">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <input
              type="range"
              min="0"
              max={displayPhotos.length - 1}
              value={activeIndex}
              onChange={(event) => setActiveIndex(Number(event.target.value))}
              aria-label="Browse event photos"
              aria-valuetext={`Photo ${activeIndex + 1} of ${displayPhotos.length}`}
              style={{ '--photo-progress': `${displayPhotos.length > 1 ? (activeIndex / (displayPhotos.length - 1)) * 100 : 0}%` }}
            />
            <span>{String(displayPhotos.length).padStart(2, '0')}</span>
          </div>

          <div className="event-photo-lightbox-footer">
            <div className="event-photo-lightbox-caption" aria-live="polite">
              <h2>{displayActivePhoto.title}</h2>
              <p>{displayActivePhoto.caption}</p>
            </div>
            {displayHasMultiplePhotos && (
              <div className="event-photo-lightbox-thumbnails" aria-label="Choose a photo">
                {viewerPhotos.map((photo, visibleIndex) => {
                  const index = thumbnailStart + visibleIndex;
                  const isActive = activeIndex === index;
                  return (
                    <button
                      className={`event-photo-lightbox-thumbnail${isActive ? ' active' : ''}`}
                      key={photo.src}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show photo ${index + 1}: ${photo.title}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <Image src={photo.src} alt="" fill sizes="64px" quality={48} loading="lazy" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
