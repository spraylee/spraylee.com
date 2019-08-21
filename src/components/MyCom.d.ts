export declare class MyCom extends ElementUIComponent {
  message: string
  type: 'big' | 'small'
}

import Vue from 'vue'

/** ElementUI component common definition */
declare class ElementUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void
}
