import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeacherItem from '../../components/TeacherItem/TeacherItem';
import { getListNewTeacher, getListTopTeacher } from '../../service/teacher';
import styles from './Home.module.scss';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const [dataNew, setDataNew] = useState<[]>();
  const [dataTop, setDataTop] = useState<[]>();

  useEffect(() => {
    getListNewTeacher().then((val) => {
      setDataNew(val.data.data);
    });

    getListTopTeacher().then((val2) => {
      setDataTop(val2.data.data);
    });
  }, []);

  return (
    <>
      <div className={classNames(styles.hero)}>
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
            {dataNew && dataNew.map((data) => <TeacherItem key={data['id_teacher']} data={data} />) }
          </div>
        </section>

        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>新しい先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataTop && dataTop.map((data) => <TeacherItem key={data['id_teacher']} data={data} />)}
          </div>
        </section>
      </div>

      <div className="container">
        <section className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">似合う先生を探そう</h2>
          <div className="my-10 flex flex-row gap-3">
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
