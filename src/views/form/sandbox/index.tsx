import { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';

import './index.less';

console.log();

export default function Index() {
  const componentRef = useRef();
  console.log(componentRef);
  const initSortable = () => {
    const sort = new Sortable(componentRef.current, {
      animation: 150,
      ghostClass: 'blue-background-class',
    });
    console.log(sort);
  };

  useEffect(() => {
    initSortable();
  }, [componentRef]);
  return (
    <div className='form-sandbox__main'>
      <div className='form-sandbox__components' ref={componentRef}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </div>
      <div className='form-sandbox__content'></div>
      <div className='form-sandbox__dispose'></div>
    </div>
  );
}
