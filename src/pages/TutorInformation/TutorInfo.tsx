import { Modal } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import TutorReview from '../../components/TutorReview/TutorReview';
import { getTeacherDetail } from '../../services/api/teacher';
import { TutorInformation } from '../../vite-env';
import ModalAddReview from './ModalAddReview';
import styles from './TutorInfo.module.scss';

interface TutorInfoProps {}

const TutorInfo: React.FunctionComponent<TutorInfoProps> = () => {
  const [details, setDetails] = useState<TutorInformation>();
  const [open, setOpen] = useState(false);
  const params = useParams();

  const id = params.id;

  useEffect(() => {
    getTeacherDetail(String(id)).then((teacher) => {
      setDetails(teacher.data.data);
    });
  }, [id]);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleOK = async () => {
    const res = await getTeacherDetail(String(id));
    setDetails(res.data.data);
    setOpen(false);
  };

  function addCommasToNumber(number: number) {
    // Chuyển số thành chuỗi
    const strNumber = number.toString();

    // Tách phần nguyên và phần thập phân (nếu có)
    const parts = strNumber.split('.');
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Thêm dấu phẩy vào phần nguyên
    let formattedNumber = '';
    let count = 0;
    for (let i = integerPart.length - 1; i >= 0; i--) {
      count++;
      formattedNumber = integerPart.charAt(i) + formattedNumber;
      if (count % 3 === 0 && i !== 0) {
        formattedNumber = ',' + formattedNumber;
      }
    }

    // Kết hợp phần nguyên và phần thập phân (nếu có)
    return formattedNumber + decimalPart;
  }

  return (
    <div className="">
      {details && (
        <div className="container grid grid-cols-7">
          <div className="col-span-2">
            <TutorCard details={details} />
          </div>
          <div
            className={classNames(
              styles.detailInfoContainer,
              'col-span-5 mt-8 overflow-hidden rounded bg-white p-8 shadow-2xl',
            )}
          >
            <h1 className="text-3xl">講師の情報</h1>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>伝記</div>
              <p className={classNames(styles.info, 'col-span-5')}>{details.description}</p>
            </div>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>経験年数</div>
              <p className={classNames(styles.info, 'col-span-5')}>{details.experience_year} year</p>
            </div>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>授業料</div>
              <p className={classNames(styles.info, 'col-span-5')}>{addCommasToNumber(details.fee)} $</p>
            </div>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>教育レベル</div>
              <p className={classNames(styles.info, 'col-span-5')}>DH Bach Khoa</p>
            </div>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>コメント</div>
              <div className={classNames(styles.info, 'col-span-5')}>
                <div className="mb-3">
                  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      type="search"
                      className="focus:shadow-[inset_0_0_0_1px_rgb(204, 0, 0)] relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-red-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-red-600 focus:text-neutral-700 focus:outline-none dark:border-red-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-red-600"
                      placeholder="input text"
                      aria-label="Search"
                      aria-describedby="button-addon1"
                      onClick={showModal}
                    />

                    <button
                      className="hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r bg-red-600 px-6 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      type="button"
                      id="button-addon1"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={showModal}
                    >
                      コメントを追加
                    </button>
                    <Modal className="shadow-lg" open={open} onCancel={hideModal} destroyOnClose={true} footer={null}>
                      <ModalAddReview handleOK={handleOK} teacher_id={id} />
                    </Modal>
                  </div>
                </div>
                {details.comments.map((comment) => (
                  <TutorReview key={comment['id']} cmt_detail={comment} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorInfo;
