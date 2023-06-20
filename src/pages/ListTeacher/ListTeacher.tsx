import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import TeacherItem from '../../components/TeacherItem/TeacherItem';
import { getListNewTeacher } from '../../service/teacher';
import styles from './ListTeacher.module.scss';

interface ListTeacherPageProps {}

const ListTeacherPage: React.FunctionComponent<ListTeacherPageProps> = () => {
  const [dataNew, setDataNew] = useState<[]>();

  useEffect(() => {
    getListNewTeacher().then((val) => {
      setDataNew(val.data.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>リクエスト中</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataNew ? dataNew.slice(4, 9).map((data) => <TeacherItem key={data['id_teacher']} data={data} />) : <></>}
          </div>
        </section>

        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>承認したの先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataNew ? dataNew.slice(2, 4).map((data) => <TeacherItem key={data['id_teacher']} data={data} />) : <></>}
          </div>
        </section>
      </div>
    </>
  );
};

export default ListTeacherPage;
