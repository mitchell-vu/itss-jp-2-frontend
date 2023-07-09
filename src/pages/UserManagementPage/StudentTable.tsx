import { Table, TableProps } from 'antd';
import React from 'react';
import { IStudentTable } from './UserManagementPage';

const COLUMNS = [
  {
    title: 'ユーザーID',
    dataIndex: 'id_student',
    key: 'id_student',
  },
  {
    title: 'ユーザー',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年齢',
    dataIndex: 'age',
    key: 'age',
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
    title: 'アドレス',
    dataIndex: 'address',
    key: 'address',
  },
] as TableProps<IStudentTable>['columns'];

interface StudentTableProps {
  data: IStudentTable[];
}

const StudentTable: React.FC<StudentTableProps> = ({ data }) => {
  return <Table dataSource={data} columns={COLUMNS} rowClassName="cursor-pointer" />;
};

export default StudentTable;
