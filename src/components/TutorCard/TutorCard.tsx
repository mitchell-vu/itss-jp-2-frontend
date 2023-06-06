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
    <div className='mt-8 max-w-sm rounded overflow-hidden shadow-2xl p-8 bg-white'>
      <div className={classNames(styles['card'])}>
        <img src="../../../public/nhiep-anh-10.jpg" alt="" className={classNames(styles['card_image'])} />
      
        <h3 className='font-semibold text-2xl'>{details.name}</h3>
        <div className={classNames(styles.star, 'flex')}>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      </div>
      <div>
        <div className={classNames(styles.title, 'mt-4')}>宛先</div>
        <p className={classNames(styles.info)}>{details['address']?details['address']:'なし'}</p>
        <div className={classNames(styles.title, 'mt-2')}>メール</div>
        <p className={classNames(styles.info)}>{details['email']?details['email']:'なし'}</p>
        <div className={classNames(styles.title, 'mt-2')}>電話番号</div>
        <p className={classNames(styles.info)}>{details['phone']?details['phone']:'なし'}</p>
        <div className='flex items-center mt-5'>
          <button className="mx-auto rounded-lg bg-red-500 px-10 py-1 text-xl text-white" onClick={handleRequest}>
              要求
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default TutorCard;
