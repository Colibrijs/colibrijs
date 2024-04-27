export type { IComponent, IComponentConstructorOptions } from './components';
export type { IPage, IPageConstructorOptions } from './pages';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- осознанно пока что игнорируется параметр P
// @ts-expect-error -- осознанно пока что игнорируется параметр P
export type JsonSchema<P> = string; // eslint-disable-line @typescript-eslint/no-unused-vars -- осознанно пока что игнорируется параметр P
