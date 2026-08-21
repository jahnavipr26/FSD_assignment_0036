import { useState, useEffect } from 'react'
import './App.css'

// Signature element: an EKG-style "pulse line" used as a section divider
// and as an underline accent — ties back to the brand name and to the
// literal idea of a heartbeat under effort.
function PulseLine({ className = '', flat = false }) {
  const path = flat
    ? 'M0,20 L120,20 L132,20 L140,6 L150,34 L160,20 L180,20 L1440,20'
    : 'M0,20 L520,20 L534,20 L544,4 L556,36 L566,20 L580,20 L900,20 L912,20 L922,2 L934,38 L944,20 L960,20 L1440,20'
  return (
    <svg
      className={`pulse-line ${className}`}
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Workouts', href: '#workouts' },
  { label: 'Programs', href: '#programs' },
  { label: 'Nutrition', href: '#nutrition' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
]

const TICKER_WORDS = ['STRENGTH', 'MOBILITY', 'CARDIO', 'RECOVERY', 'CORE', 'BREATHWORK']

const FEATURE_TILES = [
  {
    size: 'lg',
    eyebrow: 'Trainer-Led Series',
    title: 'Train alongside a coach, not a countdown clock',
    copy: "Follow real trainers through full sessions filmed the way a class actually feels — cues, form checks, and modifications included.",
    cta: 'View the series',
    tone: 'ink',
    image: '/images/tile-trainer.jpg',
  },
  {
    size: 'sm',
    eyebrow: 'Custom Workouts',
    title: 'Build your own session',
    copy: 'Mix strength, cardio, and mobility blocks into a workout sized to the time you actually have.',
    cta: 'Build a workout',
    tone: 'accent',
  },
  {
    size: 'sm',
    eyebrow: 'Programs',
    title: 'Follow a plan that adapts with you',
    copy: 'Multi-week programs laid out on a calendar, so you always know what today asks of you.',
    cta: 'Browse programs',
    tone: 'sage',
  },
  {
    size: 'sm',
    eyebrow: 'Nutrition',
    title: 'Fuel it properly',
    copy: 'Simple, trainer-approved recipes built around how much time and energy you actually have on a weeknight.',
    cta: 'See recipes',
    tone: 'paper',
    image: '/images/tile-nutrition.jpg',
  },
  {
    size: 'sm',
    eyebrow: 'Community',
    title: 'Show up with other people',
    copy: 'Post your wins, ask questions mid-plateau, and keep each other honest on the hard weeks.',
    cta: 'Join the conversation',
    tone: 'ink',
    image: '/images/tile-community.jpg',
  },
]

const START_CARDS = [
  { num: '01', title: 'Join a Free Challenge', copy: 'A short, no-pressure block to find your footing.' },
  { num: '02', title: 'Start With the Basics', copy: 'Form-first fundamentals before you add load or speed.' },
  { num: '03', title: 'Get Stronger', copy: 'Progressive strength training that builds week over week.' },
  { num: '04', title: 'Commit to 4 Weeks', copy: 'One clear plan, one clear finish line, real momentum.' },
]

const STATS = [
  { value: '180+', label: 'Programs & Series' },
  { value: '12,000', label: 'Minutes of Coaching' },
  { value: '6', label: 'Certified Trainers' },
  { value: '0', label: 'Equipment Required to Start' },
]

const FOOTER_COLUMNS = [
  {
    heading: 'Workouts',
    links: ['Workout Videos', 'Custom Workouts', 'Trainer Series'],
  },
  {
    heading: 'Programs',
    links: ['Workout Programs', 'Meal Plans', 'Pilot Programs', 'Routines'],
  },
  {
    heading: 'Healthy Living',
    links: ['Articles', 'Healthy Recipes', 'Wellness Videos'],
  },
  {
    heading: 'Community',
    links: ['Community', 'Blog', 'Referral Program'],
  },
  {
    heading: 'About',
    links: ['About Pulseform', 'Careers', 'Our Trainers'],
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
      {/* ---------- Announcement bar ---------- */}
      <div className="announce">
        Week 3 is live — jump in anytime and add it to your calendar.{' '}
        <a href="#programs">Start the program →</a>
      </div>

      {/* ---------- Header ---------- */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <a className="logo" href="#top">
            <span className="logo__mark" aria-hidden="true">
              <PulseLine flat />
            </span>
            Pulseform
          </a>

          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn--ghost" href="#signin">Sign In</a>
            <a className="btn btn--solid" href="#join">Join Free</a>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="hero__inner">
            <p className="eyebrow">At-home training, since day one</p>
            <h1>
              Feel strong.
              <br />
              Think clear.
            </h1>
            <PulseLine className="hero__pulse" />
            <p className="hero__sub">
              Free workout videos and progressive training programs you can do
              at home — no equipment required to start, no guessing what
              today's session should be.
            </p>
            <div className="hero__ctas">
              <a className="btn btn--solid btn--lg" href="#join">Start Free</a>
              <a className="btn btn--outline btn--lg" href="#workouts">Browse Workouts</a>
            </div>
          </div>
          <div className="hero__art">
            <img src="/images/hero.jpg" alt="Person doing an at-home strength workout" />
          </div>
        </section>

        {/* ---------- Ticker ---------- */}
        <div className="ticker">
          <div className="ticker__track">
            {[...TICKER_WORDS, ...TICKER_WORDS, ...TICKER_WORDS].map((w, i) => (
              <span key={i}>
                {w}
                <span className="ticker__dot">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Feature tiles ---------- */}
        <section className="tiles" id="workouts">
          <div className="section-head">
            <p className="eyebrow">Where people start</p>
            <h2>Five ways in, one place to land</h2>
          </div>
          <div className="tiles__grid">
            {FEATURE_TILES.map((tile) => (
              <article key={tile.title} className={`tile tile--${tile.size} tile--${tile.tone} ${tile.image ? 'tile--has-image' : ''}`}>
                {tile.image && (
                  <img className="tile__image" src={tile.image} alt="" aria-hidden="true" />
                )}
                <p className="tile__eyebrow">{tile.eyebrow}</p>
                <h3>{tile.title}</h3>
                <p className="tile__copy">{tile.copy}</p>
                <a className="tile__link" href="#">
                  {tile.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <PulseLine className="section-divider" />

        {/* ---------- Where to start ---------- */}
        <section className="start" id="programs">
          <div className="section-head">
            <p className="eyebrow">Not sure where to start?</p>
            <h2>Programs give you the next four weeks, mapped out</h2>
          </div>
          <div className="start__grid">
            {START_CARDS.map((card) => (
              <div className="start-card" key={card.num}>
                <span className="start-card__num">{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            ))}
          </div>
          <a className="btn btn--outline" href="#programs">View All Programs</a>
        </section>

        {/* ---------- Stats band ---------- */}
        <section className="stats">
          {STATS.map((s) => (
            <div className="stats__item" key={s.label}>
              <span className="stats__value">{s.value}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </section>

        {/* ---------- Community / Nutrition CTA ---------- */}
        <section className="split" id="community">
          <div className="split__panel split__panel--dark">
            <p className="eyebrow">Community</p>
            <h2>Motivation is easier with company</h2>
            <p>
              Post your workout log, ask a form question, or just say you
              showed up today. Someone will answer.
            </p>
            <a className="btn btn--solid" href="#community">Visit Community</a>
          </div>
          <div className="split__panel split__panel--paper" id="nutrition">
            <p className="eyebrow">Nutrition</p>
            <h2>Recipes built for real weeknights</h2>
            <p>
              Fifteen-ingredients-or-fewer meals that hold up to a training
              week, written by the same trainers who program your workouts.
            </p>
            <a className="btn btn--outline" href="#nutrition">See Recipes</a>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="final-cta" id="join">
          <PulseLine className="final-cta__pulse" />
          <h2>Your next session is free</h2>
          <p>No card, no trial clock. Create an account and start today.</p>
          <a className="btn btn--solid btn--lg" href="#join">Join for Free</a>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer" id="about">
        <div className="site-footer__top">
          <a className="logo logo--footer" href="#top">Pulseform</a>
          <div className="site-footer__columns">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© 2026 Pulseform. All rights reserved.</p>
          <div className="site-footer__social">
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Pinterest">PIN</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
