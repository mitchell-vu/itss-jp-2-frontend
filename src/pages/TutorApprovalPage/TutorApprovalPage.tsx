import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { acceptTeacherRequest, deleteTeacherRequest } from '../../services/api/request';
import { getTeacherDetail } from '../../services/api/teacher';
import { toastError, toastSuccess } from '../../utils/toast';
import { TutorInformation } from '../../vite-env';
import TutorCard from './TutorCard';

const TutorApprovalPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = React.useState<TutorInformation>();

  const cancel = () => {
    id &&
      deleteTeacherRequest(parseInt(id))
        .then(() => {
          toastSuccess('リクエストはキャンセルしました。');
          setTimeout(() => {
            navigate(`/administration/user`);
          }, 1000);
        })
        .catch(() => {
          toastError('リクエストの送信に失敗しました。');
        });
  };

  const handle = () => {
    id &&
      acceptTeacherRequest(parseInt(id))
        .then(() => {
          toastSuccess('承認に成功した。');
          setTimeout(() => {
            navigate(`/administration/user`);
          }, 1000);
        })
        .catch(() => {
          toastError('リクエストの送信に失敗しました。');
        });
  };

  React.useEffect(() => {
    getTeacherDetail(String(id)).then((teacher) => {
      setDetails(teacher.data.data);
    });
  }, [id]);

  return (
    details && (
      <div className="container grid grid-cols-7">
        <div className="col-span-2">
          <TutorCard details={details} />
        </div>
        <div className="col-span-5 mt-8 flex flex-col justify-between overflow-hidden rounded bg-white p-8 shadow-2xl">
          <div>
            <h1 className="text-3xl">講師の情報</h1>
            <div className="mt-3 grid grid-cols-7">
              <div className="col-span-2">伝記</div>
              <p className="col-span-5">{details.description}</p>
            </div>
            <div className="mt-3 grid grid-cols-7">
              <div className="col-span-2">経験年数</div>
              <p className="col-span-5">{details.experience_year} year</p>
            </div>
            <div className="mt-3 grid grid-cols-7">
              <div className="col-span-2">授業料</div>
              <p className="col-span-5">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(details.fee)}
                $
              </p>
            </div>
            <div className="mt-3 grid grid-cols-7">
              <div className="col-span-2">教育レベル</div>
              <p className="col-span-5">DH Bach Khoa</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="rounded bg-teal-500 px-8 py-3 text-white" onClick={handle}>
              承認
            </button>
            <button className="rounded border px-8 py-3" onClick={cancel}>
              拒否
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default TutorApprovalPage;
