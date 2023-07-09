import classNames from 'classnames';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { editTeacherInfo, getTeacherDetail } from '../../services/api/teacher';
import { toastError, toastSuccess } from '../../utils/toast';
import { TutorInformation } from '../../vite-env';
import styles from './TutorInfoPage.module.scss';

interface EditTeacherInfoPageProps {}

const teacher: TutorInformation = {
  id_teacher: 1,
  name: 'Duan',
  age: 21,
  address: 'Hai Ba Trung',
  phone: '0399709386',
  email: 'duannguyen194509@gmail.com',
  description: 'học kém',
  // level_description: details.level_description,
  experience_year: 4,
  gender: 0,
  fee: 130,
  level_description: 'Đại học',
  request: 1,
  rate: '5',
  comments_avg_star: '5',
  total_comments: 0,
  comments: [],
};

const EditTeacherInfoPage: React.FunctionComponent<EditTeacherInfoPageProps> = () => {
  const [details, setDetails] = useState<TutorInformation>(teacher);
  const { user } = useAuth();

  const id = user?.id_user;

  useEffect(() => {
    getTeacherDetail(String(id)).then((teacher) => {
      setDetails(teacher.data.data);
    });
  }, [id]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      const new_value = ['age', 'fee', 'experience_year'].includes(name) ? parseInt(value) : value;
      return {
        ...(prevDetails ?? {}),
        [name]: new_value,
      };
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }, details: TutorInformation) => {
    event.preventDefault();

    const params = {
      name: details.name,
      age: details.age,
      gender: details.gender,
      email: details.email,
      phone: details.phone,
      experience_year: details.experience_year,
      description: details.description,
      address: details.address,
      fee: details.fee,
      level_description: details.level_description,
    };

    console.log(params);

    editTeacherInfo(params)
      .then(() => {
        toastSuccess('情報編集に成功しました');
      })
      .catch(() => {
        toastError('情報編集に失敗しました');
      });
  };

  return (
    details && (
      <form>
        <div className="container grid grid-cols-7">
          <div className="col-span-2">
            <div className="mt-8 max-w-sm overflow-hidden rounded bg-white p-8 shadow-2xl">
              <div className={classNames(styles['card'])}>
                <div className=" relative mb-3 h-40 w-40 sm:mb-0">
                  <img
                    src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
                    alt="aji"
                    className=" h-40 w-40 rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div>
                <div className={classNames(styles.title, 'mt-2')}>名前</div>
                <input
                  className={classNames(
                    styles.info,
                    ' rounded-md border border-orange-300 px-4 py-2 focus:border-orange-500 active:border-orange-500',
                  )}
                  type="text"
                  name="name"
                  value={details.name}
                  onChange={handleChange}
                />
                <div className={classNames(styles.title, 'mt-4')}>宛先</div>
                <input
                  className={classNames(
                    styles.info,
                    ' rounded-md border border-orange-300 px-4 py-2 focus:border-orange-500 active:border-orange-500',
                  )}
                  type="text"
                  name="address"
                  value={details.address}
                  onChange={handleChange}
                />
                <div className={classNames(styles.title, 'mt-2')}>メール</div>
                <input
                  className={classNames(
                    styles.info,
                    ' rounded-md border border-orange-300 px-4 py-2 focus:border-orange-500 active:border-orange-500',
                  )}
                  type="text"
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                />
                <div className={classNames(styles.title, 'mt-2')}>電話番号</div>
                <input
                  className={classNames(
                    styles.info,
                    ' rounded-md border border-orange-300 px-4 py-2 focus:border-orange-500 active:border-orange-500',
                  )}
                  type="text"
                  name="phone"
                  value={details.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div
            className={classNames(
              styles.detailInfoContainer,
              'relative col-span-5 mt-8 overflow-hidden rounded bg-white p-8 shadow-2xl',
            )}
          >
            <h1 className="text-3xl">講師の情報</h1>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>伝記</div>
              <input
                className={classNames(
                  styles.info,
                  'col-span-5 rounded-md border border-orange-300 px-4 py-2 focus:border-orange-500 active:border-orange-500',
                )}
                type="text"
                name="description"
                value={details.description}
                onChange={handleChange}
              />
            </div>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>経験年数</div>
              <input
                className={classNames(
                  styles.info,
                  'col-span-5 rounded-md border border-orange-300 px-4 py-2 focus:border-orange-500 active:border-orange-500',
                )}
                type="number"
                name="experience_year"
                value={details.experience_year}
                onChange={handleChange}
              />
            </div>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>授業料</div>
              <input
                className={classNames(
                  styles.info,
                  'col-span-5 rounded-md border border-orange-300 px-4 py-2 focus:border-orange-500 active:border-orange-500',
                )}
                type="text"
                name="fee"
                value={details.fee}
                onChange={handleChange}
              />
            </div>
            <div className={classNames(styles.info_container, 'mt-3 grid grid-cols-7')}>
              <div className={classNames(styles.title, 'col-span-2')}>教育レベル</div>
              <input
                className={classNames(
                  styles.info,
                  'col-span-5 rounded-md border border-orange-300 px-4 py-2 focus:border-orange-500 active:border-orange-500',
                )}
                type="text"
                name="level_description"
                value="ハノイ工科大学"
                onChange={handleChange}
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="focus:shadow-outline rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-400 focus:outline-none"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e, details);
                }}
              >
                保存する
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  );
};

export default EditTeacherInfoPage;
