import React from 'react';
import { useParams } from 'react-router-dom';
import { getTeacherDetail } from '../../services/api/teacher';
import { TutorInformation } from '../../vite-env';
import TutorCard from './TutorCard';

const TutorApprovalPage: React.FC = () => {
  const { id } = useParams();
  const [details, setDetails] = React.useState<TutorInformation>();

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
            <button className="rounded bg-teal-500 px-8 py-3 text-white">承認</button>
            <button className="rounded border px-8 py-3">拒否</button>
          </div>
        </div>
      </div>
    )
  );
};

export default TutorApprovalPage;
