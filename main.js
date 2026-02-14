/* ═══════════════════════════════════════════════════════════════
   LPE — Líder da Própria Evolução
   V3: Portal de Transformação — Interactions
   ═══════════════════════════════════════════════════════════════ */

import Lenis from 'lenis';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Lenis Smooth Scroll ────────────────────────────────────── */
function initSmoothScroll() {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -7 * t)),
        touchMultiplier: 1.5,
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                lenis.scrollTo(target, { offset: -80, duration: 2 });
            }
        });
    });
}

/* ── Navbar ──────────────────────────────────────────────────── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ── Scroll Reveal ──────────────────────────────────────────── */
function initScrollReveal() {
    if (prefersReducedMotion) {
        document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

/* ── Stagger indices ──────────────────────────────────────── */
function initStaggerIndices() {
    document.querySelectorAll('[data-stagger]').forEach((container) => {
        container.querySelectorAll('[data-animate]').forEach((child, i) => {
            child.style.setProperty('--stagger-index', i);
        });
    });
}

/* ── Mobile Sticky CTA ──────────────────────────────────────── */
function initStickyCTA() {
    const stickyCTA = document.getElementById('sticky-cta');
    const heroCTA = document.getElementById('hero-cta');
    const footer = document.querySelector('.footer');
    if (!stickyCTA || !heroCTA) return;
    if (window.innerWidth > 768) return;

    new IntersectionObserver(([e]) => {
        stickyCTA.classList.toggle('is-visible', !e.isIntersecting);
    }, { threshold: 0 }).observe(heroCTA);

    if (footer) {
        new IntersectionObserver(([e]) => {
            if (e.isIntersecting) stickyCTA.classList.remove('is-visible');
        }, { threshold: 0.1 }).observe(footer);
    }
}


/* ── Video Modal ──────────────────────────────────────────────── */
function initVideoModal() {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-modal-player');
    const closeBtn = document.getElementById('video-modal-close');
    const backdrop = document.getElementById('video-modal-backdrop');
    if (!modal || !player) return;

    function openModal(videoId) {
        player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => { player.innerHTML = ''; }, 350);
    }

    document.querySelectorAll('[data-video-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(btn.dataset.videoId);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
}

/* ── Confirmation Modal ──────────────────────────────────────── */
function initConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    const closeBtn = document.getElementById('confirm-modal-close');
    const backdrop = document.getElementById('confirm-modal-backdrop');
    if (!modal) return;

    function openConfirm() {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeConfirm() {
        modal.classList.add('is-closing');
        setTimeout(() => {
            modal.classList.remove('is-open', 'is-closing');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }, 500);
    }

    document.querySelectorAll('[data-open-confirm]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openConfirm();
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeConfirm);
    if (backdrop) backdrop.addEventListener('click', closeConfirm);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeConfirm();
    });
}

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initNavbar();
    initStaggerIndices();
    initScrollReveal();
    initStickyCTA();

    initVideoModal();
    initConfirmModal();
});
