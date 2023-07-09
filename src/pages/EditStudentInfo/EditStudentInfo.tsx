import classNames from 'classnames';
import React, { ChangeEvent, useEffect } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { editStudentInfo, getStudentDetail } from '../../services/api/student';
import { StudentDetails } from '../../vite-env';
import styles from './EditStudentInfo.module.scss';

const EditStudentInfo: React.FC = () => {
  const [student, setStudent] = React.useState<StudentDetails>();
  // const params = useParams();
  const { user } = useAuth();

  const id = user?.id_user;

  useEffect(() => {
    id &&
      getStudentDetail(id.toString()).then((student) => {
        setStudent(student.data.data);
      });
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let new_value;
    if (student !== undefined) {
      if (name === 'age') {
        new_value = parseInt(value);
      } else {
        new_value = value;
      }
      const preDetails = student;
      const x = {
        ...preDetails,
        [name]: new_value,
      };
      setStudent(x);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }, details: StudentDetails) => {
    event.preventDefault();

    const params = {
      name: details.name,
      age: details.age,
      address: details.address,
      phone: details.phone,
      email: details.email,
      description: details.description,
      academic_level: details.academic_level,
    };

    console.log(details);
    editStudentInfo(params)
      .then((response) => {
        console.log('Update successful:', response.data);
      })
      .catch((error) => {
        console.error('Update failed:', error);
      });
  };
  return (
    <div className="container flex flex-col items-center justify-center">
      {/* {student && ( */}
      <form className="flex flex-col items-center justify-center">
        <div className="h-auto w-80">
          <img
            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Avatar user"
            className="w-50 md:w-50 mx-auto rounded-full"
          />
        </div>
        <div className=" flex flex-row gap-8">
          <div className={classNames(styles['info'], 'mt-3 flex')}>
            <div className="flex flex-col items-end">
              <div className="m-1 flex ">
                <div className={classNames(styles.title)}>名前:</div>
                <input
                  className={classNames(
                    styles.info,
                    ' w-96 rounded-md border border-gray-300 px-4 py-1 focus:border-gray-500 active:border-gray-500',
                  )}
                  type="text"
                  name="name"
                  value={student?.name}
                  onChange={handleChange}
                />
              </div>
              <div className="m-1 flex">
                <div className={classNames(styles.title)}>年:</div>
                <input
                  className={classNames(
                    styles.info,
                    ' w-96 rounded-md border border-gray-300 px-4 py-1 focus:border-gray-500 active:border-gray-500',
                  )}
                  type="text"
                  name="age"
                  value={student?.age}
                  onChange={handleChange}
                />
              </div>
              <div className="m-1 flex ">
                <div className={classNames(styles.title)}>メール:</div>
                <input
                  className={classNames(
                    styles.info,
                    ' w-96 rounded-md border border-gray-300 px-4 py-1 focus:border-gray-500 active:border-gray-500',
                  )}
                  type="text"
                  name="email"
                  value={student?.email}
                  onChange={handleChange}
                />
              </div>
              <div className="m-1 flex ">
                <div className={classNames(styles.title)}>電話番号:</div>
                <input
                  className={classNames(
                    styles.info,
                    ' w-96 rounded-md border border-gray-300 px-4 py-1 focus:border-gray-500 active:border-gray-500',
                  )}
                  type="text"
                  name="phone"
                  value={student?.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="m-1 flex ">
                <div className={classNames(styles.title)}>宛先:</div>
                <input
                  className={classNames(
                    styles.info,
                    ' w-96 rounded-md border border-gray-300 px-4 py-1 focus:border-gray-500 active:border-gray-500',
                  )}
                  type="text"
                  name="address"
                  value={student?.address}
                  onChange={handleChange}
                />
              </div>
              <div className="m-1 flex ">
                <div className={classNames(styles.title)}>教育レベル:</div>
                <input
                  className={classNames(
                    styles.info,
                    ' w-96 rounded-md border border-gray-300 px-4 py-1 focus:border-gray-500 active:border-gray-500',
                  )}
                  type="text"
                  name="academic_level"
                  value={student?.academic_level}
                  onChange={handleChange}
                />
              </div>
              <div className="m-1 flex ">
                <div className={classNames(styles.title)}>伝記:</div>
                <input
                  className={classNames(
                    styles.info,
                    ' w-96 rounded-md border border-gray-300 px-4 py-1 focus:border-gray-500 active:border-gray-500',
                  )}
                  type="text"
                  name="description"
                  value={student?.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              className="focus:shadow-outline mt-3 rounded-md bg-gray-500 px-6 py-2 text-white hover:bg-gray-400 focus:outline-none"
              type="submit"
              onClick={(e) => {
                if (student !== undefined) {
                  handleSubmit(e, student);
                }
              }}
            >
              保存する
            </button>
          </div>
        </div>
      </form>
      {/* )} */}
    </div>
  );
};

export default EditStudentInfo;
