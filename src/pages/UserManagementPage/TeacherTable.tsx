import { Table, TableProps, Tag } from 'antd';
import React from 'react';
import { FiLock, FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { ITeacherTable } from './UserManagementPage';

const COLUMNS = [
  {
    title: 'ユーザー',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年',
    dataIndex: 'experience_year',
    key: 'experience_year',
  },
  {
    title: 'Eメール',
    dataIndex: 'email',
    key: 'address',
  },
  {
    title: '電話',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'スターテス',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) =>
      status === 'active' ? <Tag color="green">{status}</Tag> : <Tag color="gray">{status}</Tag>,
  },
  {
    title: 'アクション',
    dataIndex: 'status',
    render: (status: string) =>
      status === 'active' ? (
        <div className="flex flex-col gap-2">
          <button className="flex flex-row items-center gap-2 rounded-full border px-4 py-2">
            <FiLock />
            ブロック
          </button>
          <button className="flex flex-row items-center gap-2 rounded-full border border-red-500 px-4 py-2 text-red-500">
            <FiTrash />
            削除
          </button>
        </div>
      ) : (
        <div className="">
          <button className="flex flex-row items-center gap-2 rounded bg-teal-500 p-5 px-8 py-3 text-white">
            詳細
          </button>
        </div>
      ),
  },
] as TableProps<ITeacherTable>['columns'];

interface TeacherTableProps {
  data: ITeacherTable[];
}

const TeacherTable: React.FC<TeacherTableProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Table
      dataSource={data}
      columns={COLUMNS}
      onRow={(user) => {
        return {
          onClick: () => {
            if (user.status === 'inactive') navigate(`/administration/teacher/${user.id_teacher}`);
          },
        };
      }}
      rowClassName="cursor-pointer"
    />
  );
};

export default TeacherTable;
