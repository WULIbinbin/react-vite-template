import { TEventData } from '@/types/sandbox';
import { RemoveObserver, DisposeObserver } from '../../utils/observers';

import './index.less';

interface IEventCover {
  children?: any;
  noMask?: boolean;
  eventData: TEventData;
}

export default function Index({ noMask = false, children, eventData }: IEventCover) {
  return (
    <div
      className={`form-sandbox__payground__item ${(!noMask && 'form-sandbox__payground--mask') || 'under-delete'}`}
      onClick={(e) => {
        e.stopPropagation();
        DisposeObserver.notify(eventData);
      }}
    >
      <div
        className='form-sandbox__payground--delete'
        onClick={(e) => {
          e.stopPropagation();
          RemoveObserver.notify(eventData);
        }}
      >
        -
      </div>
      {children}
    </div>
  );
}
