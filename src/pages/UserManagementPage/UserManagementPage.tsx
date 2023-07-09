import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';
import { getAllUser } from '../../services/api/user';
import { StudentDetails, TutorInformation } from '../../vite-env';
import StudentTable from './StudentTable';
import TeacherTable from './TeacherTable';

export interface ITeacherTable extends TutorInformation {
  key: number;
  status: string;
}

export interface IStudentTable extends StudentDetails {
  key: number;
}

const TABS = ['家庭教師', '学習者', '作成リクエスト'];

const UserManagementPage: React.FC = () => {
  const [student, setStudent] = React.useState<[IStudentTable]>();
  const [teacher, setTeacher] = React.useState<[ITeacherTable]>();
  const [request, setRequest] = React.useState<[ITeacherTable]>();

  React.useEffect(() => {
    getAllUser().then((res) => {
      if (res.status === 200) {
        const data_teacher = res.data.data.teacher.map((item: TutorInformation) => ({
          ...item,
          status: 'active',
        }));
        const data_request = res.data.data.request.map((item: TutorInformation) => ({
          ...item,
          status: 'inactive',
        }));
        setStudent(res.data.data.student);
        setTeacher(data_teacher);
        setRequest(data_request);
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
          <Tab.Panel key={0} className="rounded-xl bg-white">
            {teacher && <TeacherTable data={teacher} />}
          </Tab.Panel>
          <Tab.Panel key={1} className="rounded-xl bg-white">
            {student && <StudentTable data={student} />}
          </Tab.Panel>
          <Tab.Panel key={2} className="rounded-xl bg-white">
            {request && <TeacherTable data={request} />}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default UserManagementPage;
