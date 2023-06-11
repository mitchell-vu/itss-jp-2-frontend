import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import TutorReview from '../../components/TutorReview/TutorReview';
import { getTeacherDetail } from '../../service/teacher';
import styles from './TutorInfo.module.scss';

interface TutorInfoProps {}

const TutorInfo: React.FunctionComponent<TutorInfoProps> = () => {
  const [Details, setDetails] = useState<[]>();
  const params = useParams();

  const id = params.id;

  useEffect(() => {
    getTeacherDetail(String(id)).then((teacher) => {
      setDetails(teacher.data);
    });
  }, [id]);
  console.log('Details:', Details);

  return (
    <div className="">
      {Details ? (
        Details.map((data) => (
          <div className="container grid grid-cols-7">
            <div className="col-span-2">
              <TutorCard details={data} />
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
                <p className={classNames(styles.info, 'col-span-5')}>{data['description']}</p>
              </div>
              <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
                <div className={classNames(styles.title, 'col-span-2')}>経験年数</div>
                <p className={classNames(styles.info, 'col-span-5')}>{data['experience_year']} year</p>
              </div>
              <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
                <div className={classNames(styles.title, 'col-span-2')}>授業料</div>
                <p className={classNames(styles.info, 'col-span-5')}>{data['fee']}K/1時間</p>
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
                        className="focus:border-red-600 dark:focus:border-red-600 relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-red-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(204, 0, 0)] focus:outline-none dark:border-red-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        placeholder="input text"
                        aria-label="Search"
                        aria-describedby="button-addon1"
                      />

                      <button
                        className="hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r bg-red-600 px-6 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        コメントを追加
                      </button>
                    </div>
                  </div>
                  <TutorReview />
                  <TutorReview />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default TutorInfo;
