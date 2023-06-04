import classNames from 'classnames';
import * as React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <>
      <div className={classNames(styles.hero, 'gap-8')}>
        <div className={classNames(styles.bluebox)}></div>
        <h1 className={classNames(styles.slogan, 'text-8xl')}>ようこそ、<span className='text-red-500'>バナナ先生</span>へ</h1>
        <p className={classNames(styles.subslogan, 'text-5xl')}>ベトナムで<span className='text-yellow-500'>一番</span>家庭教師を探すサイト</p>
      </div>

      <div className="container">
        <section className="my-14">
          <h2 className={classNames(styles.title,'mb-10 text-5xl')}>今月の先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map(() => (
              <div className="flex flex-col gap-3">
                <div className="h-60 w-full">
                  <img
                    src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
                    alt="Teacher"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="font-bold text-xl">先生の名前</div>
                <div className="font-extralight leading-6 text-gray-600">先生の情報</div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-14">
          <h2 className={classNames(styles.title,'mb-10 text-5xl')}>新しい先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map(() => (
              <div className="flex flex-col gap-3">
                <div className="h-60 w-full">
                  <img
                    src="https://t4.ftcdn.net/jpg/01/13/31/65/360_F_113316547_q9wiDxadvidz5UvKITGbJMvzqrDw45Kl.jpg"
                    alt="Teacher"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="font-bold text-xl">先生の名前</div>
                <div className="font-extralight leading-6 text-gray-600">先生の情報</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="container">
        <section className='flex flex-col items-center justify-center'>
          <h2 className='mb-10 text-4xl font-bold'>似合う先生を探そう</h2>
          <div className="flex flex-row gap-3">
            <Link to="/list-teacher" className="rounded-lg bg-teal-500 px-20 py-3 text-xl text-white">
              検索
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
