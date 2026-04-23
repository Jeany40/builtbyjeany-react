import React from 'react';

const reviews = [
  {
    av: 'MR', color: '#1a3a6e',
    name: 'Marcus R.', date: '2 weeks ago',
    text: '"Complete bathroom gut job — from bare studs to finished product. The tile work alone is worth every penny. Showed up on time every single day."',
  },
  {
    av: 'TL', color: '#1a4a2e',
    name: 'Tanya L.', date: '1 month ago',
    text: '"Fixed a leaking pipe that two other plumbers couldn\'t figure out. Same day, no mess, reasonable price. This is my go-to for everything now."',
  },
  {
    av: 'DW', color: '#4a1a1a',
    name: 'David W.', date: '1 month ago',
    text: '"Repainted my whole apartment before I moved in. Walls look brand new. Clean edges, no drips, and he moved all the furniture himself."',
  },
  {
    av: 'SP', color: '#3a3a1a',
    name: 'Sandra P.', date: '6 weeks ago',
    text: '"As a landlord with 3 units, I need someone reliable. He turned over two apartments in one weekend — painted, fixtures replaced, everything spotless."',
  },
  {
    av: 'JM', color: '#2a1a4a',
    name: 'James M.', date: '2 months ago',
    text: '"Installed 4 ceiling fans, replaced 6 outlets, and hung a 75-inch TV all in one day. Fast, professional, and the price was very fair."',
  },
  {
    av: 'KC', color: '#0a2a3a',
    name: 'Karen C.', date: '2 months ago',
    text: '"I was nervous hiring someone I didn\'t know but he was so professional. Wore shoe covers, cleaned up after himself, and the work was immaculate."',
  },
];

const StarIcon = () => (
  <svg className="star-svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

function Reviews() {
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews">
      <div className="reviews-top">
        <div data-reveal>
          <div className="section-label">
            <div className="line" aria-hidden="true" />
            <span>Reviews</span>
          </div>
          <h2 className="section-title">
            What Clients<br /><em>Are Saying</em>
          </h2>
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}
          data-reveal
          data-reveal-delay="2"
        >
          <div className="reviews-score-wrap">
            <div className="reviews-score">5.0</div>
            <div className="reviews-meta">
              <div className="stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <div className="reviews-count">Google Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="reviews-track-wrap" role="region" aria-label="Client reviews">
        <div className="reviews-track">
          {doubled.map((r, idx) => (
            <article className="review-card" key={idx}>
              <div className="review-top">
                <div className="reviewer-av" style={{ background: r.color }} aria-hidden="true">
                  {r.av}
                </div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="review-date">{r.date}</div>
                </div>
              </div>
              <div className="review-stars" aria-label="5 stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="review-text">{r.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="reviews-actions" data-reveal>
        <a
          href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          id="reviews-cta-leave"
        >
          Leave a Review
        </a>
        <a
          href="https://www.google.com/search?q=BuiltByJeany+NYC"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
          id="reviews-cta-view"
        >
          View All Reviews
        </a>
      </div>
    </section>
  );
}

export default Reviews;
