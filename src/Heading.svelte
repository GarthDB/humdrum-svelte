<script>
  export let headingSize = 1;
</script>

{#if headingSize === 1}
  <h1>
    <slot />
  </h1>
{:else if headingSize === 2}
  <h2>
    <slot />
  </h2>
{:else}
  <h3>
    <slot />
  </h3>
{/if}
