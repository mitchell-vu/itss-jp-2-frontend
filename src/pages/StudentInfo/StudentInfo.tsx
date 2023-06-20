import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentDetail } from '../../service/student';
import { StudentDetails } from '../../vite-env';

function StudentInfo() {
  const [details, setDetails] = useState<StudentDetails>();
  const params = useParams();

  const id = params.student_id;
  const status = params.status;
  useEffect(() => {
    getStudentDetail(String(id)).then((student) => {
      setDetails(student.data);
    });
  }, [id]);
  return (
    <div className={classNames('container')}>
      <h1 className="text-3xl">講師の情報</h1>
      <div className={classNames('container grid grid-cols-7')}>
        <div className={classNames('col-span-3')}>
          <img src="https://upanh123.com/wp-content/uploads/2020/12/hinh-ve-cute-dang-yeu.jpg" alt="" className="" />
        </div>
        <div className={classNames(' col-span-4 mt-8')}>
          <div>
            <p className="text-black-900 text-4xl font-semibold leading-10">
              名前 :<span className="pl-1 text-4xl font-extralight leading-10 text-black"> {details?.name}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-4xl font-semibold leading-10">
              年 :<span className="pl-1 text-4xl font-extralight leading-10 text-black"> {details?.age}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-4xl font-semibold leading-10">
              Eメール :<span className="pl-1 text-4xl font-extralight leading-10 text-black"> {details?.email}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-4xl font-semibold leading-10">
              電話 :<span className="pl-1 text-4xl font-extralight leading-10 text-black"> {details?.phone}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-4xl font-semibold leading-10">
              住所 :<span className="pl-1 text-4xl font-extralight leading-10 text-black"> {details?.address}</span>
            </p>
          </div>
          <div>
            <p className="text-black-900 text-4xl font-semibold leading-10">
              説明 :<span className="pl-1 text-4xl font-thin leading-10 text-black"> {details?.description}</span>
            </p>
          </div>
          {status ? (
            <div className="flex">
              <button className="m-2 rounded-full bg-blue-500 p-2 text-white">勉強中</button>
              <button className="m-2 rounded-full bg-red-500 p-2 text-white">リクエスト</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
