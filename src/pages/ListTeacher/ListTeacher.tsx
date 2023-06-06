import classNames from 'classnames';
import * as React from 'react';
import styles from './ListTeacher.module.scss';

interface ListTeacherPageProps {}

const ListTeacherPage: React.FunctionComponent<ListTeacherPageProps> = () => {
  return (
    <>
      <div className="container">
        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>リクエスト中</h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(4)].map(() => (
              <div className="flex flex-col gap-3">
                <div className="h-60 w-full">
                  <img
                    src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
                    alt="Teacher"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="text-xl font-bold">先生の名前</div>
                <div className="font-extralight leading-6 text-gray-600">先生の情報</div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-14">
          <h2 className={classNames(styles.title, 'mb-10 text-5xl')}>承認したの先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map(() => (
              <div className="flex flex-col gap-3">
                <div className="h-60 w-full">
                  <img
                    src="https://t4.ftcdn.net/jpg/01/13/31/65/360_F_113316547_q9wiDxadvidz5UvKITGbJMvzqrDw45Kl.jpg"
                    alt="Teacher"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="text-xl font-bold">先生の名前</div>
                <div className="font-extralight leading-6 text-gray-600">先生の情報</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ListTeacherPage;
