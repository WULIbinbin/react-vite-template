import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import './index.less';

const component = [
  { id: 1, compName: '组件1' },
  { id: 2, compName: '组件2' },
  { id: 3, compName: '组件3' },
];

export default function Index() {
  const [components, setComponents] = useState(component);
  return (
    <ReactSortable
      tag={'div'}
      group={{
        name: 'component',
        pull: true,
        put: true,
      }}
      sort={true}
      list={components}
      setList={(data) => {
        console.log(data);
        setComponents(data);
      }}
      onUpdate={(e: any) => {
        console.log('onUpdate操作------------------->', e);
      }}
    >
      {components.map((item) => (
        <div className={`form-sandbox__components__item`} key={item.compName}>
          {item.compName}
        </div>
      ))}
    </ReactSortable>
  );
}
