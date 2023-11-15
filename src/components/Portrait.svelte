<section>
  <div class="me"></div>
</section>

<style lang="scss">
  .me {
    display: block;
    margin-left: auto;
    margin-right: auto;

    background: url('$lib/images/me-1024.jpg');
    background-size: cover;
    width: 192px;
    height: 192px;

    border-radius: 50%;
    border: 5px solid $img-border-color;

    @extend %transition;

    @media (min-width: 768px) {
      height: 256px;
      width: 256px;
      background-size: 256px;
    }

    &:hover {
      border-color: $img-border-hover-color;
    }
  }
</style>
