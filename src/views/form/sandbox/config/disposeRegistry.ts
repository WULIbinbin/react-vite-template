import { IDisposeConfig } from '@/types/sandbox';

const wrap: IDisposeConfig[] = [
  {
    label: '布局',
    type: 'radio',
    name: 'layout',
    defaultValue: 'single',
    options: [
      { label: '单列', value: 'single' },
      { label: '多列', value: 'multi' },
    ],
  },
];

const input: IDisposeConfig[] = [
  {
    label: '表单名称',
    type: 'input',
    name: 'formName',
  },
  {
    label: '表单占位符',
    type: 'input',
    name: 'placeHolder',
  },
];

const selector: IDisposeConfig[] = [
  {
    label: '表单名称',
    type: 'input',
    name: 'formName',
  },
  {
    label: '表单占位符',
    type: 'input',
    name: 'placeHolder',
  },
];

const dataPicker: IDisposeConfig[] = [
  {
    label: '表单名称',
    type: 'input',
    name: 'formName',
  },
  {
    label: '表单占位符',
    type: 'input',
    name: 'placeHolder',
  },
];

export default {
  wrap,
  input,
  selector,
  'data-picker': dataPicker,
};
