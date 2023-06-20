import React, { useEffect } from 'react';
import StudentCard from '../../components/StudentCard/StudentCard';
import { getListStudents } from '../../services/api/teacher';

function TeacherHomePage() {
  const [status, setStatus] = React.useState(0);
  const [teachingData, setTeachingData] = React.useState<[]>([]);
  const [requestedData, setRequestedData] = React.useState<[]>([]);

  useEffect(() => {
    getListStudents().then((response) => {
      setTeachingData(response.data.data.is_teaching);
      setRequestedData(response.data.data.requested);
    });
  }, [status]);
  const handleClickButton1 = () => {
    setStatus(1);
  };
  const handleClickButton2 = () => {
    setStatus(0);
  };
  console.log(teachingData);

  return (
    <div className="container">
      <div className="flex">
        <button className="m-2 rounded-full bg-blue-500 p-2 text-white" onClick={handleClickButton2}>
          勉強中
        </button>
        <button className="m-2 rounded-full bg-blue-500 p-2 text-white" onClick={handleClickButton1}>
          リクエスト
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {status == 0 ? (
          teachingData ? (
            teachingData.map((item) => <StudentCard data={item} status={status} />)
          ) : (
            <p>学生がない。</p>
          )
        ) : requestedData ? (
          requestedData.map((item) => <StudentCard data={item} status={status} />)
        ) : (
          <p>学生がない。</p>
        )}
      </div>
    </div>
  );
}

export default TeacherHomePage;
