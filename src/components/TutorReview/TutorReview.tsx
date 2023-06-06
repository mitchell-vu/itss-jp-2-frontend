import { AiOutlineStar } from 'react-icons/ai';

function TutorReview() {
  return (
    <div className='mb-5'>
      <div className="flex">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <div className="review_content">
        とても献身的で熱心な先生たち。どの講義もとても面白くてためになり、先生と一緒に勉強してから、私はかなり上達しました。
      </div>
      <div className="review_owner text-black-300 text-base font-semibold">-from DuanCong</div>
    </div>
  );
}

export default TutorReview;
