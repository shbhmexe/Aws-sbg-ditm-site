import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURED_EVENTS } from "@/lib/featured-events";
import { getEventGalleryPhotos } from "@/lib/event-gallery";
import EventWallpaper from "@/components/events/EventWallpaper";
import EventPhotoGallery from "@/components/events/EventPhotoGallery";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export function generateStaticParams() {
  return FEATURED_EVENTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = FEATURED_EVENTS.find((item) => item.slug === slug);

  if (!event) return { title: "Event not found | AWS SBGL DITM" };

  return {
    title: `${event.title} | AWS SBGL DITM`,
    description: event.intro,
  };
}

export default async function FeaturedEventPage({ params }) {
  const { slug } = await params;
  const event = FEATURED_EVENTS.find((item) => item.slug === slug);

  if (!event) notFound();
  const galleryPhotos = await getEventGalleryPhotos(event);

  return (
    <section className="event-detail-page">
      <div className="event-detail-container">
        <div className="event-detail-topline">
          <Link href="/events" className="event-detail-back">
            <span aria-hidden="true">←</span> Back to events
          </Link>
          <EventWallpaper />
        </div>

        <div className="event-detail-layout">
          <article className="event-detail-main">
            <header className="event-detail-heading">
              <p className="event-detail-kicker">WORKSHOP · EVENT ARCHIVE</p>
              <h1>{event.title}</h1>
              <p className="event-detail-intro">{event.intro}</p>
            </header>

            <figure className="event-detail-poster">
              <img src={event.image} alt={`${event.title} event poster`} />
            </figure>

            <section className="event-detail-section">
              <p className="event-detail-section-label">THE SESSION</p>
              <h2>Learn it. Build it. Share it.</h2>
              <p>{event.intro}</p>
            </section>

            <section className="event-detail-section">
              <p className="event-detail-section-label">PROGRAMME</p>
              <h2>What happened</h2>
              <div className="event-agenda">
                {event.agenda.map((item, index) => (
                  <article className="event-agenda-item" key={item.title}>
                    <span className="event-agenda-index">0{index + 1}</span>
                    <div className="event-agenda-copy">
                      <div className="event-agenda-heading">
                        <h3>{item.title}</h3>
                        {item.duration && <span>{item.duration}</span>}
                      </div>
                      <p className="event-agenda-speaker">{item.speaker}</p>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="event-detail-section event-takeaways-section">
              <p className="event-detail-section-label">TAKEAWAYS</p>
              <h2>What you could take away</h2>
              <ul className="event-takeaways-list">
                {event.takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </section>

            {event.notes?.length > 0 && (
              <section className="event-detail-notes" aria-label="Event notes">
                <h2>Good to know</h2>
                <ul>
                  {event.notes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </section>
            )}

            <EventPhotoGallery photos={galleryPhotos} eventTitle={event.title} />
          </article>

          <aside className="event-detail-aside">
            <div className="event-detail-aside-top">
              <span className="event-archive-mark"><span></span> PAST EVENT</span>
              <span className="event-detail-host">AWS Student Builder Group · DITM</span>
            </div>
            <h2>Event details</h2>
            <dl className="event-facts-list">
              <div>
                <dt>Date</dt>
                <dd>{event.dateLong}</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>{event.time}</dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>{event.venue}</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>{event.mode}</dd>
              </div>
              <div>
                <dt>Eligibility</dt>
                <dd>{event.eligibility}</dd>
              </div>
            </dl>
            <a
              className="event-meetup-link"
              href={event.meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View event on Meetup</span>
              <ArrowIcon />
            </a>
            <p className="event-meetup-caption">Opens the original event listing on Meetup.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
