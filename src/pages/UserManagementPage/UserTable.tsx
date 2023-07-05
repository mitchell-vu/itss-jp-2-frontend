import { Table, TableProps, Tag } from 'antd';
import React from 'react';
import { FiLock, FiTrash } from 'react-icons/fi';
import { Navigate } from 'react-router-dom';
import { IUserTable } from './UserManagementPage';

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
    render: (status: string) => (
      <Tag bordered={false} color="green">
        {status}
      </Tag>
    ),
  },
  {
    title: 'アクション',
    render: () => (
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
    ),
  },
] as TableProps<IUserTable>['columns'];

interface UserTableProps {
  data: IUserTable[];
}

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  return (
    <Table
      dataSource={data}
      columns={COLUMNS}
      onRow={(user) => ({
        onClick: () => <Navigate to={`/administration/teacher/${user.id_teacher}`} />,
      })}
    />
  );
};

export default UserTable;
