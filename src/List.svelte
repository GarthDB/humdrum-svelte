<script>
  export let listItems = ["Item 1", "Item 2"];
</script>

<ul class="hd-list-group">
  {#each listItems as item}
    <li class="hd-list-group__item">{item}</li>
  {/each}
</ul>
