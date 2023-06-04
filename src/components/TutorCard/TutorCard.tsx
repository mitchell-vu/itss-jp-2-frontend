import classNames from 'classnames';
import styles from './TutorCard.module.scss'
import { AiOutlineStar } from "react-icons/ai";

function TutorCard() {
  return (
    <div className={classNames(styles['cardTutor'])}>
      <div className={classNames(styles['card'], 'flex')}>
        <img src="../../../public/nhiep-anh-10.jpg" alt="" className={classNames(styles['card_image'])}/>
      </div>
      <span>Nguyễn Duẩn</span>
      <div className={classNames(styles.star, 'flex')}>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
      </div>
      <div>
        <div className={classNames(styles.title)}>宛先</div>
        <p className={classNames(styles.info)}>18A-0042 Tokyo-to Minato-ku, Azabudai</p>
        <div className={classNames(styles.title)}>メール</div>
        <p className={classNames(styles.info)}>duan@gmail.com</p>
        <div className={classNames(styles.title)}>電話番号</div>
        <p className={classNames(styles.info)}>037xxxxxxx</p>
      </div>
    </div>
  );
}

export default TutorCard;
