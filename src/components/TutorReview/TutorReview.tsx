import { Rate } from 'antd';
import { useEffect, useState } from 'react';
import { getStudentDetail } from '../../services/api/student';
import { CommentInformation } from '../../vite-env';

interface TutorReviewProps {
  cmt_detail: CommentInformation;
}

const TutorReview: React.FC<TutorReviewProps> = ({ cmt_detail }) => {
  const [name, setName] = useState<string>();
  useEffect(() => {
    getStudentDetail(String(cmt_detail.id_student)).then((student) => {
      setName(student.data.name);
    });
  }, [cmt_detail.id_student]);
  return (
    <div className="mb-5">
      <div className="flex">
        <Rate allowHalf disabled defaultValue={cmt_detail.star} style={{ color: '#ea580c', fontSize: 13 }} />
      </div>
      <div className="review_content">{cmt_detail.comment}</div>
      <div className="review_owner text-black-300 text-sm font-semibold">--- {name} ---</div>
    </div>
  );
};

export default TutorReview;
