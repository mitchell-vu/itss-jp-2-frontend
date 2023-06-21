import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getStudentDetail } from '../../services/api/student';
import { StudentDetails } from '../../vite-env';

const StudentInfo: React.FC = () => {
  const [details, setDetails] = useState<StudentDetails>();
  const params = useParams();

  const id = params.student_id;
  const status = params.status;

  useEffect(() => {
    id &&
      getStudentDetail(id.toString()).then((student) => {
        setDetails(student.data);
      });
  }, [id]);

  return (
    <div className={classNames('container')}>
      <h1 className="text-3xl">講師の情報</h1>
      <div className={classNames('container grid grid-cols-7')}>
        <div className="col-span-2 mr-2">
          <img
            src="https://img.lovepik.com/free-png/20220126/lovepik-junior-high-school-student-image-png-image_401807387_wh860.png"
            alt=""
            className=""
          />
        </div>
        <div className={classNames(' col-span-4 mt-8')}>
          <div>
            <p className="text-black-900 text-xl font-semibold leading-10">
              名前 :<span className="pl-1 text-xl font-extralight leading-10 text-black"> {details?.name}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-xl font-semibold leading-10">
              年 :<span className="pl-1 text-xl font-extralight leading-10 text-black"> {details?.age}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-xl font-semibold leading-10">
              Eメール :<span className="pl-1 text-xl font-extralight leading-10 text-black"> {details?.email}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-xl font-semibold leading-10">
              電話 :<span className="pl-1 text-xl font-extralight leading-10 text-black"> {details?.phone}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-xl font-semibold leading-10">
              住所 :<span className="pl-1 text-xl font-extralight leading-10 text-black"> {details?.address}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-xl font-semibold leading-10">
              説明 :<span className="pl-1 text-xl font-thin leading-10 text-black"> {details?.description}</span>
            </p>
          </div>
          {status != '0' ? (
            <div className="flex">
              <button className="m-2 rounded-full bg-blue-500 p-2 text-white">確認</button>
              <Link to="/teachers/home">
                <button className="m-2 rounded-full bg-red-500 p-2 text-white">キャンセル</button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
