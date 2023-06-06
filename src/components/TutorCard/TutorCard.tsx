import classNames from 'classnames';
import { AiOutlineStar } from 'react-icons/ai';
import { FixMeLater } from '../../vite-env';
import styles from './TutorCard.module.scss';
import { pushNotification } from "../../common/notification";
import { NOTIFICATION_TYPE } from "../../const/notification";

function TutorCard(props: FixMeLater) {
  const details = props.details;
  console.log('details2:', details);

  const handleRequest = () => {
    pushNotification(
      "成功",
      "リクエストは管理者による承認待ちです。",
      NOTIFICATION_TYPE.SUCCESS
    );
  }
  return (
    <div className={classNames(styles['cardTutor'])}>
      <div className={classNames(styles['card'], 'flex')}>
        <img src="../../../public/nhiep-anh-10.jpg" alt="" className={classNames(styles['card_image'])} />
      </div>
      <span>{details.name}</span>
      <div className={classNames(styles.star, 'flex')}>
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <div>
        <div className={classNames(styles.title)}>宛先</div>
        <p className={classNames(styles.info)}>{details['address']}</p>
        <div className={classNames(styles.title)}>メール</div>
        <p className={classNames(styles.info)}>{details['email']}</p>
        <div className={classNames(styles.title)}>電話番号</div>
        <p className={classNames(styles.info)}>{details['phone']}</p>
        <button className="justify-content flex rounded-lg bg-red-500 px-10 py-1 text-xl text-white" onClick={handleRequest}>
            要求
        </button>
      </div>
    </div>
  );
}

export default TutorCard;
