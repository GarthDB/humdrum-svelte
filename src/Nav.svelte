<script>
  export let links = [
    {
      text: "Home",
      url: "#blank"
    },
    {
      text: "FAQs",
      url: "#blank"
    },
    {
      text: "Contact Us",
      url: "#blank"
    },
  ];
</script>

<input type="checkbox" id="menuCheckbox" class="hd-nav__checkbox" />
<nav class="hd-nav">
  <label for="menuCheckbox">
    <header id="nav-expander" class="hd-nav__hamburger">
      <svg
        class="hd-nav__hamburger-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        enable-background="new 0 0 18 18"
        width="18"
        height="18">
        <rect x="1" y="3" width="16" height="2" />
        <rect x="1" y="8" width="16" height="2" />
        <rect x="1" y="13" width="16" height="2" />
      </svg>
      <span>Menu</span>
    </header>
  </label>
  <ul class="hd-nav__list">
    {#each links as link}
      <li class="hd-nav__item"><a class="hd-nav__link" href="{link.url}">{link.text}</a></li>
    {/each}
  </ul>
</nav>
