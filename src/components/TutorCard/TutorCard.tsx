import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { cancelRequest, sendRequest } from '../../services/api/request';
import { getStudentRequests } from '../../services/api/student';
import { toastError, toastSuccess } from '../../utils/toast';
import { FixMeLater, TutorInformation } from '../../vite-env';
import styles from './TutorCard.module.scss';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ea580c',
  },
  // '& .MuiRating-iconHover': {
  //   color: '#ff3d47',
  // },
});

function TutorCard(props: FixMeLater) {
  const [dataClosed, setDataClosed] = useState<[TutorInformation]>();
  const [dataIsStudying, setDataIsStudying] = useState<[TutorInformation]>();
  const [dataRequest, setDataRequest] = useState<[TutorInformation]>();
  const details = props.details;
  const { user } = useAuth();

  useEffect(() => {
    getStudentRequests().then((val) => {
      setDataClosed(val.data.data.closed);
      setDataIsStudying(val.data.data.is_studying);
      setDataRequest(val.data.data.requested);
    });
  }, []);

  const cancel = () => {
    cancelRequest(details.id_teacher)
      .then(() => {
        toastSuccess('リクエストはキャンセルしました。');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(() => {
        toastError('リクエストの送信に失敗しました。');
      });
  };

  const handleRequest = () => {
    sendRequest({
      id_teacher: details.id_teacher,
      id_student: user?.id_user,
    })
      .then(() => {
        toastSuccess('リクエストは教師による承認待ちです。');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(() => {
        toastError('リクエストの送信に失敗しました。');
      });
  };

  const showButton = () => {
    const found_request = dataRequest && dataRequest.find((element) => element.id_teacher === details.id_teacher);
    const found_study = dataIsStudying && dataIsStudying.find((element) => element.id_teacher === details.id_teacher);
    const found_close = dataClosed && dataClosed.find((element) => element.id_teacher === details.id_teacher);

    if (found_request) {
      return (
        <button className="mx-auto rounded-lg bg-gray-400 px-10 py-1 text-lg text-white" onClick={cancel}>
          キャンセル
        </button>
      );
    } else if (found_study) {
      return (
        <button
          className="mx-auto rounded-lg bg-gray-400 px-10 py-1 text-lg text-white"
          onClick={cancel}
          disabled={true}
        >
          キャンセル
        </button>
      );
    } else if (found_close) {
      return (
        <button className="mx-auto rounded-lg bg-red-500 px-10 py-1 text-lg text-white" onClick={handleRequest}>
          再要求
        </button>
      );
    } else {
      return (
        <button className="mx-auto rounded-lg bg-red-500 px-10 py-1 text-lg text-white" onClick={handleRequest}>
          要求
        </button>
      );
    }
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
        <div className={classNames(styles.star, 'mt-2 flex')}>
          <StyledRating name="customized-color" defaultValue={parseFloat(details.rate)} precision={0.1} readOnly />
          <span className="ml-2 text-base font-semibold text-gray-800"> {parseFloat(details.rate).toFixed(1)} </span>

          {/* <Rate allowHalf disabled defaultValue={parseFloat(details.rate)} style={{ color: '#ea580c' }} /> */}
        </div>
      </div>
      <div>
        <div className={classNames(styles.title, 'mt-4')}>宛先</div>
        <p className={classNames(styles.info)}>{details['address'] ? details['address'] : 'なし'}</p>
        <div className={classNames(styles.title, 'mt-2')}>メール</div>
        <p className={classNames(styles.info)}>{details['email'] ? details['email'] : 'なし'}</p>
        <div className={classNames(styles.title, 'mt-2')}>電話番号</div>
        <p className={classNames(styles.info)}>{details['phone'] ? details['phone'] : 'なし'}</p>
        <div className="mt-5 flex items-center">{showButton()}</div>
      </div>
    </div>
  );
}

export default TutorCard;
