import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getListNewTeacher } from '../../service/teacher';
import styles from './ListTeacher.module.scss';

interface ListTeacherPageProps {}

const ListTeacherPage: React.FunctionComponent<ListTeacherPageProps> = () => {
  const [dataNew, setDataNew] = useState<[]>();

  useEffect(() => {
    getListNewTeacher().then((val) => {
      setDataNew(val.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>リクエスト中</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataNew ? (
              dataNew.slice(6, 9).map((data) => (
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
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>承認したの先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {dataNew ? (
              dataNew.slice(2, 3).map((data) => (
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
      </div>
    </>
  );
};

export default ListTeacherPage;
