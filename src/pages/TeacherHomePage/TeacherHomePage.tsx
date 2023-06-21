import cn from 'classnames';
import React, { useEffect } from 'react';
import StudentCard from '../../components/StudentCard/StudentCard';
import { useAuth } from '../../providers/AuthProvider';
import { getListStudents } from '../../services/api/teacher';

const TeacherHomePage: React.FC = () => {
  const { user } = useAuth();
  const [status, setStatus] = React.useState(1);
  const [teachingData, setTeachingData] = React.useState<[]>([]);
  const [requestedData, setRequestedData] = React.useState<[]>([]);

  useEffect(() => {
    user?.id_user &&
      getListStudents(user.id_user).then((response) => {
        setTeachingData(response.data.data.is_teaching);
        setRequestedData(response.data.data.requested);
      });
  }, [user?.id_user]);

  const handleClickRequest = () => {
    setStatus(0);
  };
  const handleClickStudying = () => {
    setStatus(1);
  };

  return (
    <div className="container">
      <div className="flex">
        <button
          className={cn('m-2 rounded-full bg-gray-500 p-2 text-white', { '!bg-teal-500': status === 1 })}
          onClick={handleClickStudying}
        >
          勉強中
        </button>
        <button
          className={cn('m-2 rounded-full bg-gray-500 p-2 text-white', { '!bg-teal-500': status === 0 })}
          onClick={handleClickRequest}
        >
          リクエスト
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {status === 1 &&
          (teachingData?.length > 0 ? (
            teachingData.map((item) => <StudentCard data={item} status={status} />)
          ) : (
            <p>学生がない。</p>
          ))}
        {status === 0 &&
          (requestedData?.length > 0 ? (
            requestedData.map((item) => <StudentCard data={item} status={status} />)
          ) : (
            <p>学生がない。</p>
          ))}
      </div>
    </div>
  );
};

export default TeacherHomePage;
