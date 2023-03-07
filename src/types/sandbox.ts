import { ItemInterface } from 'react-sortablejs';

export type TFormData = {
  wrapLayout?: 'row' | 'column';
};
/**
 * sortable-event事件
 */
export enum EEvt {
  ON_ADD = 'add',
  ON_REMOVE = 'remove',
  ON_UPDATE = 'update',
}
export interface ICtRdr<T> {
  eventType: EEvt;
  selected: T[];
  toDelete?: T;
}

export interface ItemType extends ItemInterface {
  parentId?: string;
  compId: string;
  itemId?: string;
  compName: string;
  compType: string;
  nodeIndex?: number;
  formData?: TFormData;
  children?: ItemType[];
}

export type TEventData = { idx: number; parent: ItemType | null; current: ItemType[] };
