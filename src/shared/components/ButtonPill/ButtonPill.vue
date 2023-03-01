<template>
  <button
    class="button-pill"
    :class="{
      '--primary': isPrimary,
      '--secundary': isSecundary,
      '--neutral': isNeutral,
      '--outline ': isOutline,
      '--sm ': isSm,
    }"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
  import { Vue, Options } from 'vue-class-component'
  import type { ButtonPillType, ButtonPillTypeSize } from './ButtonPill.type'

  @Options({
    props: {
      label: String,
      type: String,
      ButtonPillTypeSize: String,
      isOutline: Boolean,
      size: String,
    },
  })
  export default class ButtonPill extends Vue {
    public label!: string
    public type!: ButtonPillType

    public isPrimary = true
    public isSecundary = false
    public isNeutral = false

    public isSm = false
    public isMd = true
    public size!: ButtonPillTypeSize

    public isOutline!: boolean

    public mounted(): void {
      this.typeColor()
      this.typeSize()
    }

    private typeColor() {
      if (this.type === 'primary' || this.type === undefined) {
        this.isPrimary = true
        this.isSecundary = false
        this.isNeutral = false
        return
      }

      if (this.type === 'neutral') {
        this.isPrimary = false
        this.isSecundary = false
        this.isNeutral = true
        return
      }

      this.isPrimary = false
      this.isSecundary = true
      this.isNeutral = false
    }

    private typeSize() {
      if (this.size === 'md' || this.size === undefined) {
        this.isMd = true
        this.isSm = false
        return
      }

      this.isSm = true
      this.isMd = false
    }
  }
</script>

<style scoped>
  .button-pill {
    padding: 14px 28px;
    border-radius: 40px;
    border-width: 0;
    font-weight: bold;
    font-size: var(--font-size-300);
    cursor: pointer;
    user-select: none;
  }

  /*  */
  .button-pill.--primary {
    background-color: var(--color-function-primary-500);
    color: var(--color-deep-0);
  }

  .button-pill.--primary:active {
    background-color: var(--color-function-primary-300);
    color: var(--color-deep-0);
  }

  .button-pill.--primary:hover {
    background-color: var(--color-function-primary-600);
  }

  /*  */
  .button-pill.--secundary {
    background-color: var(--color-function-secundary-500);
    color: var(--color-deep-0);
  }

  .button-pill.--secundary {
    background-color: var(--color-function-secundary-500);
    color: var(--color-deep-0);
  }

  /*  */
  .button-pill.--outline {
    background-color: transparent;
    border-width: 2px;
    border-style: solid;
    transition: all 0.25s ease-in-out;
  }

  /*  */
  .button-pill.--primary.--outline {
    border-color: var(--color-function-primary-500);
    color: var(--color-function-primary-500);
  }

  .button-pill.--primary.--outline:active {
    background-color: var(--color-function-primary-300);
    color: var(--color-deep-0);
  }
  .button-pill.--primary.--outline:hover {
    background-color: var(--color-function-primary-500);
    color: var(--color-deep-0);
  }

  /*  */
  .button-pill.--secundary.--outline {
    border-color: var(--color-function-secundary-500);
    color: var(--color-function-secundary-500);
  }

  .button-pill.--secundary.--outline:active {
    background-color: var(--color-function-secundary-300);
    color: var(--color-deep-0);
  }

  .button-pill.--secundary.--outline:hover {
    background-color: var(--color-function-secundary-500);
    color: var(--color-deep-0);
  }

  /*  */
  .button-pill.--neutral.--outline {
    border-color: #cccccc;
    color: #6d7071;
    box-shadow: 0 1px 2px #eee;
  }

  /*  */
  .button-pill.--sm {
    padding: 12px 20px 11px;
    font-size: var(--font-size-2);
  }
</style>
