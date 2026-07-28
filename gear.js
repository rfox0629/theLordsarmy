import {
  footerColumns,
  heroPatches,
  missionTiles,
  navigationItems,
  patchProducts,
  statePatches,
  uniformProducts,
} from "./gear-data.js";

function imageShell(image, alt, label = "", className = "") {
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

function renderNav() {
  const nav = document.querySelector("[data-nav]");
  nav.innerHTML = navigationItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
}

function productCard(product) {
  return `
    <article class="product-card">
      ${imageShell(product.image, product.alt, product.name, "product-image")}
      <div class="product-card-body">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        ${swatches()}
      </div>
    </article>
  `;
}

function patchCard(patch) {
  return `
    <article class="patch-card">
      ${imageShell(patch.image, patch.alt, patch.name, "patch-image")}
      <div class="patch-card-body">
        <h3>${patch.name}</h3>
        <p class="price">${patch.price}</p>
      </div>
    </article>
  `;
}

function stateCard(patch) {
  return `
    <article class="state-card">
      ${imageShell(patch.image, patch.alt, patch.name, "state-image")}
      <div class="state-card-body">
        <h3>${patch.name}</h3>
        <p class="price">${patch.price}</p>
      </div>
    </article>
  `;
}

function missionCard(tile) {
  return `
    <article class="mission-card">
      ${imageShell(tile.image, tile.title, "", "mission-image")}
      <div class="mission-card-body">
        <h3>${tile.title}</h3>
        <p>${tile.text}</p>
      </div>
    </article>
  `;
}

function footerColumn(column) {
  return `
    <div class="footer-column">
      <p>${column.title}</p>
      ${column.links.map((link) => `<a href="#">${link}</a>`).join("")}
    </div>
  `;
}

function renderPage() {
  const app = document.querySelector("#gear-app");
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="hero-kicker">This is not merch.</p>
        <h1>THIS IS<br>A UNIFORM.</h1>
        <p class="hero-lines">Built for the mission.<br>Made for disciples.</p>
        <a class="hero-button" href="#uniform">Shop the Uniform</a>
      </div>
      <div class="hero-media">
        ${imageShell("/public/images/store/hero-backpack.jpg", "Large tactical backpack hero placeholder", "", "hero-image")}
        <div class="hero-patches" aria-label="Backpack patch stack">
          ${heroPatches.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    </section>

    <section class="section-band" id="uniform">
      <div class="section-header">
        <h2>The Uniform</h2>
        <p>Gear for the called. Built for the field.</p>
      </div>
      <div class="product-grid">
        ${uniformProducts.slice(0, 5).map(productCard).join("")}
      </div>
      <div class="section-cta">
        <button class="section-button" type="button" data-uniform-toggle aria-expanded="false" aria-controls="uniform-extended">
          View All Uniform
        </button>
      </div>
      <div class="extended-grid" id="uniform-extended" hidden>
        ${uniformProducts.slice(5).map(productCard).join("")}
      </div>
    </section>

    <section class="section-band" id="patches">
      <div class="section-header">
        <h2>Discipleship Patches</h2>
        <p>Patches that build identity. Truths that lead transformation.</p>
      </div>
      <div class="patch-grid">
        ${patchProducts.map(patchCard).join("")}
      </div>
      <div class="section-cta">
        <button class="section-button" type="button" data-patch-toggle aria-expanded="false" aria-controls="state-patch-grid">
          View All Patches
        </button>
      </div>
      <div class="state-patch-grid" id="state-patch-grid" hidden>
        ${statePatches.map(stateCard).join("")}
      </div>
    </section>

    <section class="mission-strip" id="mission-strip">
      <div class="mission-grid">
        ${missionTiles.map(missionCard).join("")}
      </div>
    </section>
  `;
}

function renderFooter() {
  const footer = document.querySelector("[data-footer-columns]");
  footer.innerHTML = footerColumns.map(footerColumn).join("");
}

function setupInteractions() {
  const patchToggle = document.querySelector("[data-patch-toggle]");
  const stateGrid = document.querySelector("#state-patch-grid");
  if (patchToggle && stateGrid) {
    patchToggle.addEventListener("click", () => {
      const expanded = patchToggle.getAttribute("aria-expanded") === "true";
      patchToggle.setAttribute("aria-expanded", String(!expanded));
      patchToggle.textContent = expanded ? "View All Patches" : "Hide State Patches";
      stateGrid.hidden = expanded;
    });
  }

  const uniformToggle = document.querySelector("[data-uniform-toggle]");
  const uniformExtended = document.querySelector("#uniform-extended");
  if (uniformToggle && uniformExtended) {
    uniformToggle.addEventListener("click", () => {
      const expanded = uniformToggle.getAttribute("aria-expanded") === "true";
      uniformToggle.setAttribute("aria-expanded", String(!expanded));
      uniformToggle.textContent = expanded ? "View All Uniform" : "Hide Extended Uniform";
      uniformExtended.hidden = expanded;
    });
  }

  const form = document.querySelector(".footer-signup-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      button.textContent = "Added";
      button.disabled = true;
    });
  }
}

function init() {
  renderNav();
  renderPage();
  renderFooter();
  setupInteractions();
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}

init();
