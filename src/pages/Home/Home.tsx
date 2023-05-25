import classNames from 'classnames';
import * as React from 'react';
import styles from './Home.module.scss';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <>
      <div className={classNames(styles.hero, 'gap-8 text-white')}>
        <h1 className="text-5xl">ようこそ、バナナ先生へ</h1>
        <p className="text-xl">ベトナムで一番家庭教師を探すサイト</p>
      </div>

      <div className="container">
        <section className="my-14">
          <h2 className="mb-10 text-3xl">今月の先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map(() => (
              <div className="flex flex-col gap-3">
                <div className="h-40 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Teacher"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div>先生の名前</div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-14">
          <h2 className="mb-10 text-3xl">新しい先生</h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map(() => (
              <div className="flex flex-col gap-3">
                <div className="h-40 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Teacher"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div>先生の名前</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
