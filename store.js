import {
  backpackPatches,
  footerGroups,
  gearProducts,
  missionPillars,
  navigationItems,
  patchCategories,
  states,
  uniformProducts,
} from "./store-data.js";

function imageBlock(image, alt, label, className = "") {
  return `
    <div class="image-shell ${className}">
      <img src="${image}" alt="${alt}" loading="lazy" onerror="this.closest('.image-shell').classList.add('is-fallback'); this.remove();">
      ${label ? `<span class="image-label">${label}</span>` : ""}
    </div>
  `;
}

function swatches() {
  return `
    <div class="swatch-row" aria-hidden="true">
      <span class="swatch swatch-light"></span>
      <span class="swatch swatch-dark"></span>
      <span class="swatch swatch-olive"></span>
    </div>
  `;
}

function ProductCard(product) {
  return `
    <article class="store-card product-card">
      ${imageBlock(product.image, product.alt, product.name, "store-card-image")}
      <div class="store-card-body">
        <h3>${product.name}</h3>
        <p class="store-price">${product.price}</p>
        <p class="store-description">${product.description}</p>
        ${swatches()}
        <button class="status-pill" type="button">${product.status}</button>
      </div>
    </article>
  `;
}

function PatchCard(patch) {
  return `
    <article class="patch-card">
      ${imageBlock(patch.image, patch.alt, patch.name, "patch-image")}
      <div class="patch-card-body">
        <h3>${patch.name}</h3>
        <p class="store-price">${patch.price}</p>
      </div>
    </article>
  `;
}

function StatePatchCard(patch) {
  return `
    <article class="state-card">
      ${imageBlock(patch.image, patch.alt, patch.name, "state-image")}
      <div class="state-card-body">
        <h4>${patch.name}</h4>
        <p class="store-price">${patch.price}</p>
        <button class="status-pill" type="button">${patch.status}</button>
      </div>
    </article>
  `;
}

function HeroSection() {
  return `
    <section class="hero-band">
      <section class="hero-grid">
        <div class="hero-copy">
          <p class="hero-kicker">This is not merch.</p>
          <h1>THIS IS<br>A UNIFORM.</h1>
          <p class="hero-subtext">Built for the mission.<br>Made for disciples.</p>
          <div class="hero-actions">
            <a class="primary-button" href="#uniform">Shop the Uniform</a>
            <a class="secondary-button" href="#patches">View Patches</a>
          </div>
        </div>
        <div class="hero-media">
          ${imageBlock("/public/images/store/hero-backpack.jpg", "Hero backpack placeholder", "", "hero-image")}
          <div class="hero-patch-stack" aria-label="Patch placement preview">
            ${backpackPatches.map((patch) => `<span>${patch}</span>`).join("")}
          </div>
        </div>
      </section>
    </section>
  `;
}

function CollectionBand({ id, eyebrow, title, subtitle, cards, actionLabel }) {
  return `
    <section class="collection-band" id="${id}">
      <div class="collection-header">
        <p class="collection-eyebrow">${eyebrow}</p>
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </div>
      <div class="product-rail">
        ${cards}
      </div>
      <div class="band-action">
        <a class="secondary-button band-button" href="#${id}">${actionLabel}</a>
      </div>
    </section>
  `;
}

function StatePatchGrid() {
  return `
    <section class="state-patch-section" id="discipleship">
      <div class="state-panel-header">
        <div>
          <p class="collection-eyebrow">All 50 States</p>
          <h3>Represent where you are sent.</h3>
        </div>
        <button class="secondary-button" type="button" data-state-toggle aria-expanded="false" aria-controls="state-patch-grid">
          View All State Patches
        </button>
      </div>
      <div class="state-grid" id="state-patch-grid" hidden>
        ${states.map(StatePatchCard).join("")}
      </div>
    </section>
  `;
}

function BackpackFeature() {
  return `
    <section class="backpack-feature" id="about">
      <div class="feature-visual">
        ${imageBlock("/public/images/store/backpack.jpg", "Backpack feature placeholder", "Backpack Feature", "feature-image")}
      </div>
      <div class="feature-copy">
        <p class="collection-eyebrow">Backpack Feature</p>
        <h2>Carry the mission. Mark the field. Represent where you are sent.</h2>
        <p>The tactical backpack serves as the field anchor for Drop 01, built to carry the core mission patches in one disciplined placement system.</p>
        <div class="feature-points">
          ${backpackPatches.map((patch) => `<span>${patch}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function MissionStrip() {
  return `
    <section class="mission-strip">
      <div class="mission-grid">
        ${missionPillars
          .map(
            (pillar) => `
              <article class="mission-card">
                ${imageBlock(pillar.image, pillar.title, "", "mission-image")}
                <div class="mission-card-copy">
                  <h3>${pillar.title}</h3>
                  <p>${pillar.text}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function EmailSignup() {
  return `
    <section class="email-band" id="mission">
      <div class="email-band-copy">
        <p class="collection-eyebrow">Stay Prepared</p>
        <h2>Be first to know when Drop 01 launches.</h2>
        <p>Get updates on new drops, missions, and field-ready releases.</p>
      </div>
      <form class="email-band-form">
        <input type="email" name="email" placeholder="Enter your email">
        <input type="text" name="state" placeholder="State">
        <select name="interest">
          <option>Apparel</option>
          <option>Patches</option>
          <option>Gear</option>
          <option>All</option>
        </select>
        <button class="primary-button" type="submit">Notify Me</button>
      </form>
    </section>
  `;
}

function FooterColumns() {
  return `
    <div class="footer-columns">
      ${footerGroups
        .map(
          (group) => `
            <div class="footer-group">
              <p>${group.title}</p>
              ${group.links.map((link) => `<a href="#">${link}</a>`).join("")}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderNavigation() {
  const nav = document.querySelector("[data-nav]");
  nav.innerHTML = navigationItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
}

function renderContent() {
  const app = document.querySelector("#store-app");

  app.innerHTML = `
    ${HeroSection()}
    ${CollectionBand({
      id: "uniform",
      eyebrow: "The Uniform",
      title: "Gear for the called. Built for the field.",
      subtitle: "Clean tactical silhouettes, brighter product framing, and a storefront rhythm closer to a premium drop page.",
      cards: uniformProducts.slice(0, 5).map(ProductCard).join(""),
      actionLabel: "View All Uniform",
    })}
    <span class="anchor-target" id="patches" aria-hidden="true"></span>
    ${CollectionBand({
      id: "patch-band",
      eyebrow: "Discipleship Patches",
      title: "Patches that build identity. Truths that lead transformation.",
      subtitle: "Core mission patches first, followed by a full 50-state release for local representation.",
      cards: patchCategories.map(PatchCard).join(""),
      actionLabel: "View All Patches",
    })}
    ${StatePatchGrid()}
    ${BackpackFeature()}
    ${CollectionBand({
      id: "gear",
      eyebrow: "Gear",
      title: "Field tools that support the work beyond the fit.",
      subtitle: "Notebook, pen, backpack, and patch bundle designed to support the mission in motion.",
      cards: gearProducts.map(ProductCard).join(""),
      actionLabel: "View All Gear",
    })}
    ${MissionStrip()}
    ${EmailSignup()}
  `;
}

function renderFooter() {
  const footerMeta = document.querySelector("[data-footer-meta]");
  footerMeta.innerHTML = `
    <div class="footer-brand-block">
      <p class="brand">THELORDS.ARMY</p>
      <p class="footer-tagline">A movement. Not a brand.</p>
      <p class="footer-join">Join the army.</p>
    </div>
    ${FooterColumns()}
  `;
}

function setupInteractions() {
  const toggle = document.querySelector("[data-state-toggle]");
  const grid = document.querySelector("#state-patch-grid");

  if (toggle && grid) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.textContent = expanded ? "View All State Patches" : "Hide State Patches";
      grid.hidden = expanded;
    });
  }

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      if (button) {
        button.textContent = "Added to Waitlist";
        button.disabled = true;
      }
    });
  });
}

function init() {
  renderNavigation();
  renderContent();
  renderFooter();
  setupInteractions();
  const yearSlot = document.querySelector("[data-year]");
  if (yearSlot) yearSlot.textContent = String(new Date().getFullYear());
}

init();
