import { ItemInterface } from 'react-sortablejs';
import { RadioOption, CheckboxOption } from 'tdesign-react';

export type TFormData = {
  layout?: 'row' | 'column';
  formName?: string;
  placeHolder?: string;
  rules?: any[];
};
/**
 * sortable-event事件
 */
export enum EEvt {
  ON_ADD = 'add',
  ON_REMOVE = 'remove',
  ON_UPDATE = 'update',
  ON_RESET = 'reset',
}

export enum ECompType {
  WRAP = 'wrap',
  INPUT = 'input',
  SELECTOR = 'selector',
  DATE_PICKER = 'date-picker',
}
export interface ICtRdr<T> {
  eventType?: EEvt;
  selected: T[];
  toDelete?: T;
}

export interface ItemType extends ItemInterface {
  parentId?: string;
  compId: string;
  itemId?: string;
  compName: string;
  compType: ECompType;
  nodeIndex?: number;
  formData?: TFormData;
  children?: ItemType[];
}

export type TEventData = { idx: number; parent: ItemType | null; current: ItemType[] };

export interface IDisposeConfig {
  label: string;
  type: string;
  name: string;
  defaultValue?: any;
  options?: RadioOption[] | CheckboxOption[];
}
