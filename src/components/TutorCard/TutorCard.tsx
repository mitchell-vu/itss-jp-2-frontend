import { Rate } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { sendRequest } from '../../services/api/request';
import { toastError, toastSuccess } from '../../utils/toast';
import { FixMeLater } from '../../vite-env';
import styles from './TutorCard.module.scss';

function TutorCard(props: FixMeLater) {
  const details = props.details;
  const [cancelBtn, setCancelBtn] = useState<boolean>(false);
  const { user } = useAuth();

  const handleRequest = () => {
    sendRequest({
      id_teacher: details.id_teacher,
      id_student: user?.id_user,
    })
      .then(() => {
        toastSuccess('リクエストは教師による承認待ちです。');
        setTimeout(() => {
          setCancelBtn(true);
        }, 1500);
      })
      .catch(() => {
        toastError('レビューの送信に失敗しました。');
      });
  };

  return (
    <div className="mt-8 max-w-sm overflow-hidden rounded bg-white p-8 shadow-2xl">
      <div className={classNames(styles['card'])}>
        <div className=" relative mb-3 h-40 w-40 sm:mb-0">
          <img
            src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
            alt="aji"
            className=" h-40 w-40 rounded-2xl object-cover"
          />
        </div>
        <h3 className="mt-3 text-3xl font-semibold">{details.name}</h3>
        <div className={classNames(styles.star, 'flex')}>
          <Rate allowHalf disabled defaultValue={parseFloat(details.rate)} style={{ color: '#ea580c' }} />
        </div>
      </div>
      <div>
        <div className={classNames(styles.title, 'mt-4')}>宛先</div>
        <p className={classNames(styles.info)}>{details['address'] ? details['address'] : 'なし'}</p>
        <div className={classNames(styles.title, 'mt-2')}>メール</div>
        <p className={classNames(styles.info)}>{details['email'] ? details['email'] : 'なし'}</p>
        <div className={classNames(styles.title, 'mt-2')}>電話番号</div>
        <p className={classNames(styles.info)}>{details['phone'] ? details['phone'] : 'なし'}</p>
        <div className="mt-5 flex items-center">
          {cancelBtn ? (
            <button className="mx-auto rounded-lg bg-gray-400 px-10 py-1 text-lg text-white">キャンセル</button>
          ) : (
            <button className="mx-auto rounded-lg bg-red-500 px-10 py-1 text-lg text-white" onClick={handleRequest}>
              要求
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TutorCard;
