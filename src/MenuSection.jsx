
function MenuSection() {
  return(
    <div className="menu-section container">
      <aside className="menu-aside">
      <h3><a href="#Sushi-foods">🍣 Sushi & Sashimi</a></h3>
      <h3><a href="#Noodles-foods">🍜 Noodles</a></h3>
      <h3><a href="#Rice-foods">🍚 Rice Dishes</a></h3>
      <h3><a href="#Street-foods">🍢 Street Food & Snacks</a></h3>
      <h3><a href="#Bento-foods">🍱 Bento Boxes</a></h3>
      <h3><a href="#Tempura-foods">🍤 Tempura & Fried Foods</a></h3>
      <h3><a href="#Side-foods">🥢 Side Dishes & Starters</a></h3>
      <h3><a href="#Desserts-foods">🍡 Desserts & Sweets</a></h3>
      <h3><a href="#Beverages">🍶 Beverages</a></h3>
      </aside>
        <ul className="menu-list">  
          <li>
      <h3 id="Sushi-foods">🍣 Sushi & Sashimi</h3> <ul>
        <li>Nigiri (fish over rice)</li>
        <li>Maki (rolled sushi)</li>
        <li>Temaki (hand rolls)</li>
        <li>Sashimi (sliced raw fish)</li>
        <li>Chirashi (scattered sushi bowl)</li>
      </ul>
          </li>
          <li>
      <h3 id="Noodles-foods">🍜 Noodles</h3>
      <ul>
        <li>Ramen (broth noodles with toppings)</li>
        <li>Udon (thick wheat noodles)</li>
        <li>Soba (buckwheat noodles)</li>
        <li>Yakisoba (stir-fried noodles)</li>
        <li>Tsukemen (dipping noodles)</li>
      </ul>
          </li>
          <li>
      <h3 id="Rice-foods">🍚 Rice Dishes</h3>
      <ul>
        <li>Donburi (rice bowls, e.g., Gyudon, Katsudon)</li>
        <li>Omurice (omelet-wrapped rice)</li>
        <li>Onigiri (rice balls)</li>
        <li>Chahan (Japanese fried rice)</li>
      </ul>
          </li>
          <li>
      <h3 id="Street-foods">🍢 Street Food & Snacks</h3>
      <ul>
        <li>Takoyaki (octopus balls)</li>
        <li>Okonomiyaki (savory pancake)</li>
        <li>Taiyaki (fish-shaped sweet pastry)</li>
        <li>Yakitori (grilled chicken skewers)</li>
        <li>Korokke (Japanese croquettes)</li>
      </ul>
          </li>
          <li>
      <h3 id="Bento-foods">🍱 Bento Boxes</h3>
      <ul>
        <li>Classic Bento (rice, protein, pickles)</li>
        <li>Karaage Bento (fried chicken)</li>
        <li>Salmon Bento</li>
        <li>Tempura Bento</li>
        <li>Tofu or Veggie Bento</li>
      </ul>
          </li>
          <li>
      <h3 id="Tempura-foods">🍤 Tempura & Fried Foods</h3>
      <ul>
        <li>Ebi Tempura (shrimp tempura)</li>
        <li>Vegetable Tempura</li>
        <li>Katsu (breaded cutlets, e.g., Tonkatsu)</li>
        <li>Agedashi Tofu (fried tofu in broth)</li>
      </ul>
          </li>
          <li>
      <h3 id="Side-foods">🥢 Side Dishes & Starters</h3>
      <ul>
        <li>Edamame (salted soybeans)</li>
        <li>Miso Soup</li>
        <li>Gyoza (pan-fried dumplings)</li>
        <li>Seaweed Salad</li>
        <li>Tsukemono (pickled veggies)</li>
      </ul>
          </li>
          <li>
      <h3 id="Desserts-foods">🍡 Desserts & Sweets</h3>
      <ul>
        <li>Mochi (rice cake)</li>
        <li>Dorayaki (red bean pancake)</li>
        <li>Dango (rice flour skewers)</li>
        <li>Matcha Ice Cream</li>
        <li>Anmitsu (jelly and fruit dessert)</li>
      </ul>
          </li>
          <li>
      <h3 id="Beverages">🍶 Beverages</h3>
      <ul>
        <li>Green Tea (hot/cold)</li>
        <li>Sake (rice wine)</li>
        <li>Ramune (Japanese soda)</li>
        <li>Matcha Latte</li>
        <li>Japanese Beer (Asahi, Sapporo)</li>
      </ul>
          </li>
        </ul>
    </div>
    );
}

export default MenuSection;