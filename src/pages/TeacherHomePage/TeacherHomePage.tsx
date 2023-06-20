import React, { useEffect } from 'react';
import StudentCard from '../../components/StudentCard/StudentCard';
import { getListStudents } from '../../service/teacher';

interface DataType {
  id_teacher: number | undefined;
  status: number | undefined;
}

function TeacherHomePage() {
  const [status, setStatus] = React.useState(0);
  const id_teacher = 1;
  const [param, setParam] = React.useState<DataType>({
    id_teacher: undefined,
    status: undefined,
  });
  const [data, setData] = React.useState<[]>([]);
  const [res, setRes] = React.useState(0);
  useEffect(() => {
    getListStudents(param).then((response) => {
      setData(response.data);
      setRes(response.status);
    });
  }, [status]);
  const handleClickButton1 = () => {
    setStatus(1);
    setParam({
      id_teacher: id_teacher,
      status: status,
    });
  };
  const handleClickButton2 = () => {
    setStatus(0);
    setParam({
      id_teacher: id_teacher,
      status: status,
    });
  };
  return (
    <div className="container">
      <div className="flex">
        <button className="m-2 rounded-full bg-blue-500 p-2 text-white" onClick={handleClickButton1}>
          勉強中
        </button>
        <button className="m-2 rounded-full bg-blue-500 p-2 text-white" onClick={handleClickButton2}>
          リクエスト
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {res != 200 ? (
          data.map((item) => {
            return <StudentCard data={item} status={status} />;
          })
        ) : (
          <p>学生がない。</p>
        )}
      </div>
    </div>
  );
}

export default TeacherHomePage;
