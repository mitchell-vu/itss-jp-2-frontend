import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import TeacherItem from '../../components/TeacherItem/TeacherItem';
import { getStudentRequests } from '../../services/api/student';
import { TutorInformation } from '../../vite-env';
import styles from './ListTeacher.module.scss';

interface ListTeacherPageProps {}

const ListTeacherPage: React.FunctionComponent<ListTeacherPageProps> = () => {
  const [dataClosed, setDataClosed] = useState<[TutorInformation]>();
  const [dataIsStudying, setDataIsStudying] = useState<[TutorInformation]>();
  const [dataRequest, setDataRequest] = useState<[TutorInformation]>();

  useEffect(() => {
    getStudentRequests().then((val) => {
      // console.log(val.data.data)
      setDataClosed(val.data.data.closed);
      setDataIsStudying(val.data.data.is_studying);
      setDataRequest(val.data.data.requested);
    });
  }, []);

  return (
    <>
      <div className="container">
        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>リクエスト中</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataRequest && dataRequest.length > 0 ? (
              dataRequest.map((data) => <TeacherItem key={data['id_teacher']} data={data} />)
            ) : (
              <p className="ml-20 text-lg">ありません。</p>
            )}
          </div>
        </section>

        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>承認したの先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataIsStudying && dataIsStudying.length > 0 ? (
              dataIsStudying.map((data) => <TeacherItem key={data['id_teacher']} data={data} />)
            ) : (
              <p className="ml-20 text-lg">ありません。</p>
            )}
          </div>
        </section>

        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>勉強しておいた先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataClosed && dataClosed.length > 0 ? (
              dataClosed.map((data) => <TeacherItem key={data['id_teacher']} data={data} />)
            ) : (
              <p className="ml-20 text-lg">ありません。</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ListTeacherPage;
