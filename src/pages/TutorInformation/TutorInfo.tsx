import classNames from 'classnames';
import TutorCard from '../../components/TutorCard/TutorCard';
import styles from './TutorInfo.module.scss';
import TutorReview from '../../components/TutorReview/TutorReview';

function TutorInfo() {
  return (
    <div className="container grid grid-cols-7">
      <div className="col-span-2">
        <TutorCard />
      </div>
      <div className={classNames(styles.detailInfoContainer, ' col-span-5')}>
        <h1 className="text-3xl">講師の情報</h1>
        <div className={classNames(styles.info_container, 'grid grid-cols-7')}>
          <div className={classNames(styles.title, 'col-span-2')}>伝記</div>
          <p className={classNames(styles.info, 'col-span-5')}>
            初めまして、Nguyễn Công Duẩnと申します。私はハノイ工科大学の4年生の学生です。
            私は長い間、外国の学生にベトナム語を教える経験があります。ベトナム語の教師として、文法、発音、会話、読み書きなど、さまざまなスキルを教えてきました。
            私の目標は、外国の学生がベトナム語をより流暢に話し、理解することをサポートすることです。異文化の交流を通じて、学生たちがベトナム語の言語と文化に触れる機会を提供することも大切にしています。
          </p>
        </div>
        <div className={classNames(styles.info_container, 'grid grid-cols-7')}>
          <div className={classNames(styles.title, 'col-span-2')}>教育レベル</div>
          <p className={classNames(styles.info, 'col-span-5')}>
            sinh viên năm 4 , khoa công nghệ thông tin , Đại học Bách Khoa Hà Nội.
          </p>
        </div>
        <div className={classNames(styles.info_container, 'grid grid-cols-7')}>
          <div className={classNames(styles.title, 'col-span-2')}>政策</div>
          <p className={classNames(styles.info, 'col-span-5')}>50USD/1時間</p>
        </div>
        <div className={classNames(styles.info_container, 'grid grid-cols-7')}>
          <div className={classNames(styles.title, 'col-span-2')}>科目</div>
          <p className={classNames(styles.info, 'col-span-5')}>ベトナム語</p>
        </div>
        <div className={classNames(styles.info_container, 'grid grid-cols-7')}>
          <div className={classNames(styles.title, 'col-span-2')}>コメント</div>
          <div className={classNames(styles.info, 'col-span-5')}>
            <div className="mb-3">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="focus:border-primary dark:focus:border-primary relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="input text"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />

                <button
                  className="bg-red-600 hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
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
  );
}

export default TutorInfo;
