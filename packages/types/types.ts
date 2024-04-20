import type { ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- осознанно пока что игнорируется параметр P
// @ts-expect-error -- осознанно пока что игнорируется параметр P
export type JsonSchema<P> = string; // eslint-disable-line @typescript-eslint/no-unused-vars -- осознанно пока что игнорируется параметр P

export interface MicrofrontendMeta<P> {
  /** Реализация компонента */
  default: ComponentType<P>;
  /** Схема пропсов компонента */
  schema: JsonSchema<P>;
}
