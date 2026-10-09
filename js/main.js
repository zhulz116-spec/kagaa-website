const products = [
  { id: "table-runner-green", name: "Table Runner — Green", cat: "Kitchen & Dining", img: "table-runner-green6.jpg", desc: "Soft, understated table textile designed to layer into everyday dining.", material: "Textile", materials: ["Textile"], size: "Multiple lengths" },
  { id: "table-runner-glod", name: "Table Runner — Gold", cat: "Kitchen & Dining", img: "table-runner-gold2.jpg", desc: "Soft, understated table textile designed to layer into everyday dining.", material: "Textile", materials: ["Textile"], size: "Multiple lengths" },
  { id: "matcha-ritual", name: "Matcha Ritual Set", cat: "Kitchen & Dining", img: "mocha1.jpg", desc: "A considered set for preparing and enjoying matcha at home.", material: "Ceramic / bamboo / stainless steel", materials: ["Ceramic", "Stainless steel"], size: "Set" },
  { id: "mixing-bowls", name: "Mixing Bowl Collection", cat: "Kitchen & Dining", img: "mixing-bowls.jpg", desc: "A practical family of stainless steel bowls for everyday preparation.", material: "Stainless steel", materials: ["Stainless steel"], size: "Multi-size set" },
  { id: "vacuum-storage", name: "Vacuum Storage Bags", cat: "Home & Living", img: "Vacuum-bag-1.jpg", desc: "Space-saving storage designed for seasonal clothing and textiles.", material: "PA + PE", materials: ["PE / PA"], size: "Multiple sizes" },
  { id: "storage-bag", name: "Everyday Storage Bag", cat: "Home & Living", img: "storage-bag-main.jpg", desc: "Large-capacity storage for bedding, clothing and seasonal organisation.", material: "PP woven fabric", materials: ["Textile"], size: "92 L" },
  { id: "coffee-cups", name: "Everyday Coffee Cups", cat: "Kitchen & Dining", img: "coffee-cup.jpg", desc: "500ml 304 Stainless Steel Camping Coffee Cup", material: "304 Stainless steel", materials: ["Stainless steel"], size: "Approx. 500 ml" },
  { id: "steel-cups", name: "Everyday Steel Cups", cat: "Kitchen & Dining", img: "cup1.jpg", desc: "Minimal stainless steel drinkware with a clean geometric profile.", material: "Stainless steel", materials: ["Stainless steel"], size: "Approx. 470 ml" },
  { id: "suit-bags", name: "Suit Bags", cat: "Home & Living", img: "suit-bag.jpg", desc: "Spacious storage solution for organising suits and formal wear.", material: "Nonwoven textile", materials: ["Textile"], size: "180 × 120 × 80 cm / 2 suits" },
  { id: "resistance-bands", name: "Resistance Bands", cat: "Active Living", img: "resistance-band.jpg", desc: "A compact resistance training set for movement at home or on the go.", material: "TPE / textile", materials: ["Textile"], size: "Multiple resistance levels" },
];

const grid = document.getElementById("grid");
const count = document.getElementById("count");
const sortSelect = document.getElementById("sort");
const filterPanel = document.getElementById("filters");
const selectedCategories = new Set();
const selectedMaterials = new Set();

const normalize = (value) => String(value || "").trim().toLowerCase();
const categoryBoxes = [...document.querySelectorAll('[data-filter="category"]')];
const materialBoxes = [...document.querySelectorAll('[data-filter="material"]')];

function syncFilterControls() {
  categoryBoxes.forEach((box) => { box.checked = selectedCategories.has(box.value); });
  materialBoxes.forEach((box) => { box.checked = selectedMaterials.has(box.value); });
  document.querySelectorAll(".categories button").forEach((button) => {
    const category = button.dataset.category;
    const active = category === "all" ? selectedCategories.size === 0 : selectedCategories.size === 1 && selectedCategories.has(category);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function getFilteredProducts() {
  let filtered = products.filter((product) => {
    const categoryMatch = selectedCategories.size === 0 || selectedCategories.has(product.cat);
    const materialMatch = selectedMaterials.size === 0 || product.materials.some((material) => selectedMaterials.has(material));
    return categoryMatch && materialMatch;
  });
  const sort = sortSelect ? sortSelect.value : "featured";
  if (sort === "az") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "za") filtered.sort((a, b) => b.name.localeCompare(a.name));
  return filtered;
}

function render() {
  if (!grid || !count) return;
  const filtered = getFilteredProducts();
  count.textContent = `${filtered.length} ${filtered.length === 1 ? "product" : "products"}`;
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>No products match these filters.</p><button type="button" id="emptyClear">Clear all filters</button></div>';
    document.getElementById("emptyClear").addEventListener("click", clearFilters);
    return;
  }
  grid.innerHTML = filtered.map((product) => `
    <article class="card">
      <a href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${product.name}">
        <img src="images/${product.img}" alt="${product.name}" loading="lazy">
        <div class="info">
          <p class="name">${product.name}</p>
          <p class="cat">${product.cat}</p>
          <p class="price">${product.material}</p>
        </div>
      </a>
    </article>`).join("");
}

function applyFilters() {
  syncFilterControls();
  render();
}

function clearFilters() {
  selectedCategories.clear();
  selectedMaterials.clear();
  applyFilters();
}

categoryBoxes.forEach((box) => box.addEventListener("change", () => {
  if (box.checked) selectedCategories.add(box.value);
  else selectedCategories.delete(box.value);
  applyFilters();
}));
materialBoxes.forEach((box) => box.addEventListener("change", () => {
  if (box.checked) selectedMaterials.add(box.value);
  else selectedMaterials.delete(box.value);
  applyFilters();
}));

document.querySelectorAll(".categories button").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    selectedCategories.clear();
    if (category && category !== "all") selectedCategories.add(category);
    applyFilters();
  });
});
if (sortSelect) sortSelect.addEventListener("change", render);

function addClearButton() {
  const head = document.querySelector(".filter-head");
  if (!head || document.getElementById("clearFilters")) return;
  const clear = document.createElement("button");
  clear.id = "clearFilters";
  clear.type = "button";
  clear.className = "clear-filters";
  clear.textContent = "Clear all";
  clear.addEventListener("click", clearFilters);
  head.insertBefore(clear, head.querySelector("#filterClose"));
}
addClearButton();

const mega = document.getElementById("collection");
const collectionButton = document.querySelector('[data-menu="collection"]');
if (collectionButton && mega) collectionButton.addEventListener("click", () => mega.classList.toggle("open"));
const search = document.getElementById("search");
const searchOpen = document.getElementById("searchOpen");
const searchClose = document.getElementById("searchClose");
if (searchOpen && search) searchOpen.addEventListener("click", () => { search.classList.add("open"); search.querySelector("input")?.focus(); });
if (searchClose && search) searchClose.addEventListener("click", () => search.classList.remove("open"));
const filterOpen = document.getElementById("filterOpen");
const filterClose = document.getElementById("filterClose");
if (filterOpen && filterPanel) filterOpen.addEventListener("click", () => filterPanel.classList.add("open"));
if (filterClose && filterPanel) filterClose.addEventListener("click", () => filterPanel.classList.remove("open"));
const hamburger = document.getElementById("hamburger");
if (hamburger && filterPanel) hamburger.addEventListener("click", () => filterPanel.classList.add("open"));
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

syncFilterControls();
render();
