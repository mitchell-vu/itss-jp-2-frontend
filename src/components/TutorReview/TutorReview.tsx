import { Rate } from 'antd';
import { CommentInformation } from '../../vite-env';

interface TutorReviewProps {
  cmt_detail: CommentInformation;
}

const TutorReview: React.FC<TutorReviewProps> = ({ cmt_detail }) => {
  
  return (
    <div className="mb-5">
      <div className="flex">
        <Rate allowHalf disabled defaultValue={cmt_detail.star} style={{ color: '#ea580c', fontSize: 12 }} />
      </div>
      <div className="review_content">
        {cmt_detail.comment}
      </div>
      <div className="review_owner text-black-300 text-base font-semibold">-from DuanCong</div>
    </div>
  );
}

export default TutorReview;
