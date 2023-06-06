import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getListNewTeacher, getListTopTeacher } from '../../service/teacher';
import styles from './Home.module.scss';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const [dataNew, setDataNew] = useState<[]>();
  const [dataTop, setDataTop] = useState<[]>();

  useEffect(() => {
    getListNewTeacher().then((val) => {
      setDataNew(val.data);
    });

    getListTopTeacher().then((val2) => {
      setDataTop(val2.data);
    });
  }, []);

  return (
    <>
      <div className={classNames(styles.hero, 'gap-8')}>
        <div className={classNames(styles.bluebox)}></div>
        <h1 className={classNames(styles.slogan, 'text-8xl')}>
          ようこそ、<span className="text-red-500">バナナ先生</span>へ
        </h1>
        <p className={classNames(styles.subslogan, 'text-5xl')}>
          ベトナムで<span className="text-yellow-500">一番</span>家庭教師を探すサイト
        </p>
      </div>

      <div className="container">
        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>今月の先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataNew ? (
              dataNew.map((data) => (
                <Link to={'/tutorInfo/' + data['id_teacher']}>
                  <div className="flex flex-col gap-3">
                    <div className="h-60 w-full">
                      <img
                        src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
                        alt="Teacher"
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="text-xl font-bold">{data['name']}</div>
                    <div>
                      <p className="text-black-900 text-base font-semibold leading-6">
                        年齢 :
                        <span className="text-black-300 pl-1 text-base font-extralight leading-6"> {data['age']}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-black-900 text-base font-semibold leading-6">
                        授業料:
                        <span className="text-black-300 pl-1 text-base font-extralight leading-6">
                          {' '}
                          {data['fee']} K
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-black-900 text-base font-semibold leading-6">
                        経験年数 :
                        <span className="text-black-300 pl-1 text-base font-extralight leading-6">
                          {' '}
                          {data['experience_year']}年
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-black-900 text-base font-semibold leading-6">
                        詳細の情報 :
                        <span className="text-black-300 pl-1 text-base font-extralight leading-6">
                          {' '}
                          {data['description']}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <></>
            )}
          </div>
        </section>

        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>新しい先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataTop ? (
              dataTop.map((data) => (
                <Link to={'/tutorInfo/' + data['id_teacher']}>
                  <div className="flex flex-col gap-3">
                    <div className="h-60 w-full">
                      <img
                        src="https://t4.ftcdn.net/jpg/01/13/31/65/360_F_113316547_q9wiDxadvidz5UvKITGbJMvzqrDw45Kl.jpg"
                        alt="Teacher"
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="text-xl font-bold">{data['name']}</div>
                    <div>
                      <p className="text-black-900 text-base font-semibold leading-6">
                        年齢 :
                        <span className="text-black-300 pl-1 text-base font-extralight leading-6"> {data['age']}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-black-900 text-base font-semibold leading-6">
                        授業料:
                        <span className="text-black-300 pl-1 text-base font-extralight leading-6">
                          {' '}
                          {data['fee']} K
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-black-900 text-base font-semibold leading-6">
                        経験年数 :
                        <span className="text-black-300 pl-1 text-base font-extralight leading-6">
                          {' '}
                          {data['experience_year']}年
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-black-900 text-base font-semibold leading-6">
                        詳細の情報 :
                        <span className="text-black-300 pl-1 text-base font-extralight leading-6">
                          {' '}
                          {data['description']}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <></>
            )}
          </div>
        </section>
      </div>

      <div className="container">
        <section className="flex flex-col items-center justify-center">
          <h2 className="mb-10 text-4xl font-bold">似合う先生を探そう</h2>
          <div className="flex flex-row gap-3">
            <Link
              to="/search-teacher"
              className="justify-content flex rounded-lg bg-red-500 px-16 py-3 text-xl text-white"
            >
              検索
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
