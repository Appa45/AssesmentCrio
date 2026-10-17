
import React from 'react';
import { Music2 } from 'lucide-react';
import './styles.css';

function HeroIllustration() {
  return (
    <div
      className="hero-image"
      role="img"
      aria-label="Illustration of a person enjoying music"
    >
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="600" height="280" fill="#3829e0" />
        <path d="M0 205h600v75H0z" fill="#2920c8" />

        <g fill="#2519b8">
          <path d="M30 160h40v120H30zM85 125h34v155H85zM130 174h43v106h-43zM430 148h48v132h-48zM492 112h42v168h-42zM550 165h32v115h-32z" />
        </g>

        <g fill="#f27cfa">
          <path d="M80 82v32c-8-5-18 0-18 10 0 12 19 11 19-2V94l24-6v22c-8-5-18 0-18 10 0 12 19 11 19-2V70z" />
          <path d="M400 65v30c-7-4-16 1-16 10 0 10 17 10 17-2V78l20 5v20c-7-4-16 1-16 10 0 10 17 10 17-2V73z" />
          <path d="M110 160q20 8 0 25q-20-8 0-25M520 180q18 7 0 23q-18-7 0-23" />
        </g>

        <g fill="#65c8ff">
          <circle cx="54" cy="55" r="5" />
          <circle cx="158" cy="42" r="3" />
          <circle cx="520" cy="64" r="4" />
          <circle cx="450" cy="40" r="3" />
        </g>

        <path d="M240 280q-20-60 8-103l60-22 72 27q34 38 18 98z" fill="#55e2b7" />
        <path d="M266 178l-24-49 22-23 31 45 22 25z" fill="#f4f4f4" />
        <path d="M250 112l-15-33 8-8 28 27z" fill="#fff" />
        <path d="M238 80l-8-12 24-22 8 5-15 15 18-11 6 6-18 14 16-7 4 7-25 14z" fill="#fff" />
        <path d="M330 173l37-40 26 16-25 49-24 20z" fill="#15162c" />
        <path d="M366 136l12-34 10 2-3 24 12-18 8 4-9 23 14-11 6 7-20 23z" fill="#fff" />
        <path d="M294 125q-10-30 12-42q24-12 41 10q13 19 1 48l-13 23-30-6z" fill="#f5eee9" stroke="#15162c" strokeWidth="4" />
        <path d="M292 116q-7-36 25-42q31-3 39 25l-5 13-8-19q-18-4-35 8l-8 18z" fill="#15162c" />
        <path d="M296 118q-18-4-15 17q4 17 18 12" fill="#f4e8e1" stroke="#15162c" strokeWidth="4" />
        <path d="M294 103q-19 20-4 50q-13 28-33 40l-18-16q26-27 19-57q-5-24 12-38z" fill="#15162c" />
        <path d="M285 153q17 16 37 0l-1 20q-16 17-34 0z" fill="#f4e8e1" />
        <path d="M276 182q28 22 63-1l12 20q-31 34-73 13z" fill="#55e2b7" />
        <path d="M365 179l29-36 20 16-25 43-25 6z" fill="#15162c" />
        <rect x="401" y="132" width="22" height="43" rx="4" fill="#fff" stroke="#15162c" strokeWidth="4" />
        <rect x="407" y="138" width="10" height="25" rx="1" fill="#3829e0" />
        <path d="M260 203q-38 28-37 66M355 210q40 18 53 49" fill="none" stroke="#15162c" strokeWidth="3" />
        <path d="M305 112q-3 24 10 28q14 4 20-18" fill="none" stroke="#15162c" strokeWidth="2" />
        <circle cx="323" cy="118" r="3" fill="#15162c" />
        <path d="M310 136q8 6 15 0" fill="none" stroke="#15162c" strokeWidth="2" />
        <path d="M285 94q-8-12 1-21q22-22 48-4q16 10 18 31" fill="none" stroke="#15162c" strokeWidth="9" />
        <rect x="280" y="96" width="12" height="33" rx="6" fill="#15162c" />
        <rect x="347" y="91" width="12" height="32" rx="6" fill="#15162c" />
      </svg>
    </div>
  );
}

export default function App() {
  const handleProceedMouseEnter = (event) => {
    event.currentTarget.style.backgroundColor = '#766cf1';
  };

  const handleProceedMouseLeave = (event) => {
    event.currentTarget.style.backgroundColor = '#3829e0';
  };

  const handleCancelMouseEnter = (event) => {
    event.currentTarget.style.color = '#1f2f56';
  };

  const handleCancelMouseLeave = (event) => {
    event.currentTarget.style.color = '#7280a7';
  };

  return (
    <main className="main">
      <article className="container" aria-labelledby="order-heading">
        <HeroIllustration />

        <div className="content">
          <h1 className="heading" id="order-heading">
            Order Summary
          </h1>

          <p className="summary-para">
            You can now listen to millions of songs, audiobooks, and podcasts
            on any device anywhere you like!
          </p>

          <section className="plan-row" aria-label="Selected plan">
            <div className="music-icon" aria-hidden="true">
              <Music2 size={25} strokeWidth={2.4} />
            </div>

            <div className="plan-text" id="plan-details">
              <h3>Annual Plan</h3>
              <p>$59.99/year</p>
            </div>

            <div className="change-link">
              <a href="#">Change</a>
            </div>
          </section>

         <button
  className="proceed-btn"
  type="button"
  onMouseOver={(event) => {
    event.currentTarget.style.setProperty(
      'background-color',
      'rgb(118, 108, 241)',
      'important'
    );
  }}
  onMouseOut={(event) => {
    event.currentTarget.style.setProperty(
      'background-color',
      'rgb(56, 41, 224)',
      'important'
    );
  }}
>
  Proceed to Payment
</button>

          <a
            className="cancel-order"
            href="#"
            onMouseEnter={handleCancelMouseEnter}
            onMouseLeave={handleCancelMouseLeave}
          >
            Cancel Order
          </a>
        </div>
      </article>

      <footer className="attribution">
        Challenge by{' '}
        <a href="https://crio.do/" target="_blank" rel="noreferrer">
          Crio.do
        </a>
        . Coded by <a href="#">Apoorva</a>.
      </footer>
    </main>
  );
}
