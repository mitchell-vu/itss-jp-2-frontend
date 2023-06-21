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
    <div className="container mt-8">
      <h1 className="text-3xl">講師の情報</h1>
      <div className="my-6 flex flex-row gap-6">
        <div className="flex-[2]">
          <img
            src="https://motto-jp.com/media/wp-content/uploads/2020/07/AdobeStock_257074046.jpeg"
            className="rounded-lg"
          />
        </div>
        <div className="flex-[5]">
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

          <div className="mt-3 flex gap-2">
            {status === '0' ? (
              <>
                <button onClick={handleConfirm} className="rounded-full bg-blue-500 px-6 py-2 font-bold text-white">
                  確認
                </button>
                <button onClick={handleCancel} className="rounded-full bg-red-500 px-6 py-2 font-bold text-white">
                  キャンセル
                </button>
              </>
            ) : (
              <button onClick={handleFinishCourse} className="rounded-full bg-gray-500 px-6 py-2 font-bold text-white">
                終わり
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
