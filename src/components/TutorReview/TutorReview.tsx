import { Rate } from 'antd';

function TutorReview() {
  return (
    <div className="mb-5">
      <div className="flex">
        <Rate allowHalf disabled defaultValue={4} style={{color: "#ea580c", fontSize: 12}}/>
      </div>
      <div className="review_content">
        とても献身的で熱心な先生たち。どの講義もとても面白くてためになり、先生と一緒に勉強してから、私はかなり上達しました。
      </div>
      <div className="review_owner text-black-300 text-base font-semibold">-from DuanCong</div>
    </div>
  );
}

export default TutorReview;
