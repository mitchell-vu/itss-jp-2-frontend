import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudentDetail } from '../../services/api/student';
import { approveRequest, finishCourse } from '../../services/api/teacher';
import { toastWithAsyncFetch } from '../../utils/toast';
import { StudentDetails } from '../../vite-env';

const StudentInfo: React.FC = () => {
  const [details, setDetails] = useState<StudentDetails>();
  const navigate = useNavigate();
  const params = useParams();

  const id = params.student_id;
  const status = params.status;

  useEffect(() => {
    id &&
      getStudentDetail(id.toString()).then((student) => {
        setDetails(student.data);
      });
  }, [id]);

  const handleConfirm = () => {
    if (!id) return;

    toastWithAsyncFetch(
      {
        loading: '承認中...',
        success: '承認が成功しました！',
        error: '承認が失敗しました！',
      },
      () => approveRequest(id, 'accepted'),
      (res) => {
        console.log(res);
      },
    );
  };

  const handleCancel = () => {
    if (!id) return;

    toastWithAsyncFetch(
      {
        loading: 'キャンセル中...',
        success: 'キャンセルしました！',
        error: 'キャンセルするが失敗しました！',
      },
      () => approveRequest(id, 'cancelled'),
      (res) => {
        navigate('/');
        console.log(res);
      },
    );
  };

  const handleFinishCourse = () => {
    if (!id) return;

    toastWithAsyncFetch(
      {
        loading: 'キャンセル中...',
        success: 'キャンセルしました！',
        error: 'キャンセルするが失敗しました！',
      },
      () => finishCourse(id),
      (res) => {
        navigate('/');
        console.log(res);
      },
    );
  };

  return (
    <div className={classNames('container')}>
      <h1 className="text-3xl">講師の情報</h1>
      <div className={classNames('container grid grid-cols-7')}>
        <div className="col-span-2 mr-2">
          <img
            src="https://motto-jp.com/media/wp-content/uploads/2020/07/AdobeStock_257074046.jpeg"
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
          {status === '0' ? (
            <div className="flex">
              <button onClick={handleConfirm} className="m-2 rounded-full bg-blue-500 p-2 text-white">
                確認
              </button>
              <button onClick={handleCancel} className="m-2 rounded-full bg-red-500 p-2 text-white">
                キャンセル
              </button>
            </div>
          ) : (
            <button onClick={handleFinishCourse} className="m-2 rounded-full bg-gray-500 p-2 text-white">
              終わり
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
