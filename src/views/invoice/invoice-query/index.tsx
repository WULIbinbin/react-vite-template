import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Space, Form, Input, Table, Button } from 'tdesign-react';

const data = [];
const total = 128;
const columns = (navigate) => [
  {
    colKey: 'row-select',
    type: 'multiple',
    width: 64,
  },
  {
    width: '100',
    colKey: 'index',
    title: '序号',
    align: 'center',
  },
  {
    width: '200',
    colKey: 'number',
    title: '发票代码',
    align: 'center',
  },
  {
    width: '140',
    colKey: 'code',
    title: '发票号码',
    align: 'center',
  },
  {
    width: 140,
    colKey: 'type',
    title: '发票类型',
    align: 'center',
  },
  {
    width: 140,
    colKey: 'checked',
    title: '是否查验',
    align: 'center',
  },
  {
    width: 200,
    colKey: 'operation',
    title: '操作',
    align: 'center',
    cell: () => (
      <Space>
        <Button onClick={() => navigate('/invoice/invoice-detail')}>查看详情</Button>
      </Space>
    ),
  },
];

for (let i = 0; i < total; i++) {
  data.push({
    index: i + 1,
    code: '1xxxxxx8',
    number: '1xxxxxxxxxxxx10',
    type: i % 2 === 0 ? '红字发票' : '蓝字发票',
    checked: i % 4 === 0 ? '是' : '否',
    description: '数据源',
  });
}

export default function Index() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();

  // 分页数据变化
  async function rehandleChange(pageInfo) {
    const { current, pageSize } = pageInfo;
    setCurrent(current);
    setPageSize(pageSize);
  }

  const onSelectChange = (value) => {
    setSelectedRowKeys(value);
  };

  return (
    <div>
      <Space direction='horizontal'>
        <Form layout='inline' labelWidth={80}>
          <Form.FormItem label='发票号码' name='number'>
            <Input />
          </Form.FormItem>
          <Form.FormItem label='发票代码' name='code'>
            <Input />
          </Form.FormItem>
        </Form>
      </Space>
      <Table
        columns={columns(navigate)}
        data={data}
        rowKey='index'
        pagination={{
          current,
          pageSize,
          total,
          showJumper: true,
          onChange(pageInfo) {
            rehandleChange(pageInfo);
          },
        }}
        selectedRowKeys={selectedRowKeys}
        onSelectChange={onSelectChange}
      ></Table>
    </div>
  );
}
