import { useAppSelector } from '@/store';
import { Breadcrumb, Space } from 'tdesign-react';
import { IContainer } from '@/types/layout.d';

const { BreadcrumbItem } = Breadcrumb;

export default function Index(props: IContainer) {
  const layout = useAppSelector((state) => state.layout);
  console.log(layout, props);
  return (
    <div className='g-container'>
      <Space direction='vertical' size={'small'}>
        <Breadcrumb maxItemWidth='200px' theme={layout.theme}>
          {props.breadcrumbs.map((item, idx) => (
            <BreadcrumbItem key={idx}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumb>
        <div className='g-container-body'>{props.children}</div>
      </Space>
    </div>
  );
}
