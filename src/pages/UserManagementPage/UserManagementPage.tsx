import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';
import { getListNewTeacher } from '../../services/api/teacher';
import { TutorInformation } from '../../vite-env';
import UserTable from './UserTable';

export interface IUserTable extends TutorInformation {
  key: number;
  status: string;
}

const TABS = ['家庭教師', '家庭教師'];

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = React.useState<IUserTable[]>([]);

  React.useEffect(() => {
    getListNewTeacher().then((res) => {
      if (res.status === 200) {
        const data = res.data.data.map((item: TutorInformation) => ({
          key: item.id_teacher,
          id_teacher: item.id_teacher,
          name: item.name,
          experience_year: item.experience_year,
          email: item.email,
          phone: item.phone,
          status: 'active',
        }));
        setUsers(data);
      }
    });
  }, []);

  return (
    <div className="container my-8 flex flex-col">
      <h1 className="mb-6 text-3xl font-bold">アカウント管理</h1>
      <Tab.Group>
        <Tab.List className="flex max-w-fit space-x-1 rounded-xl bg-teal-900/10 p-1">
          {TABS.map((category, index) => (
            <Tab
              key={`tab-${index}`}
              className={({ selected }) =>
                classNames(
                  'w-full min-w-[160px] rounded-lg px-4 py-2.5 text-sm font-medium leading-5 text-teal-700 focus:outline-none',
                  selected ? 'bg-white shadow' : 'hover:bg-white/25',
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-6">
          {TABS.map((_, idx) => (
            <Tab.Panel key={idx} className="rounded-xl bg-white">
              <UserTable data={users} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default UserManagementPage;
