import { Rate } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { TutorInformation } from '../../vite-env';

interface TeacherItemProps {
  data: TutorInformation;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ data }) => {
  function addCommasToNumber(number: number) {
    // Chuyển số thành chuỗi
    const strNumber = number.toString();

    // Tách phần nguyên và phần thập phân (nếu có)
    const parts = strNumber.split('.');
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Thêm dấu phẩy vào phần nguyên
    let formattedNumber = '';
    let count = 0;
    for (let i = integerPart.length - 1; i >= 0; i--) {
      count++;
      formattedNumber = integerPart.charAt(i) + formattedNumber;
      if (count % 3 === 0 && i !== 0) {
        formattedNumber = ',' + formattedNumber;
      }
    }

    // Kết hợp phần nguyên và phần thập phân (nếu có)
    return formattedNumber + decimalPart;
  }
  const rate = data.rate ? data.rate : data.comments_avg_star;

  return (
    <Link to={`/teachers/${data.id_teacher}`}>
      <div className="relative mx-auto w-full max-w-sm pt-6">
        <div className="rounded-lg">
          <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
            <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
              <img
                src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
                alt=""
              />
            </div>

            <div className="absolute bottom-0 mb-3 flex justify-center">
              <div className="flex space-x-5 overflow-hidden rounded-lg bg-white/70 px-4 py-1 shadow">
                <Rate allowHalf disabled defaultValue={rate ? parseFloat(rate) : 0} style={{ color: '#ea580c' }} />
              </div>
            </div>
            {/* {data.experience_year && data.experience_year >= 7 && (
              <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                勉強中{' '}
              </span>
            )} */}
          </div>

          <div className="">
            <div className="mt-4 grid grid-cols-2">
              <div className="flex items-center">
                <div className="relative">
                  <h2 className="line-clamp-1 text-xl font-bold text-gray-800 md:text-lg" title="Name">
                    {data['name']}
                  </h2>
                  <p className="mt-2 line-clamp-1 text-sm text-gray-800">{data['description']}</p>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                  <span className="text-sm uppercase"> $ </span>
                  <span className="text-lg">{addCommasToNumber(data['fee'])}</span>
                </p>
              </div>
            </div>

            {/* <div className="mt-2 border-t border-gray-200 pt-3">{data['description']}</div> */}

            <div className="mt-2 grid grid-cols-2 grid-rows-1 gap-3 border-b border-t border-gray-200 pb-3 pt-3 text-sm">
              <p className="flex items-center justify-start text-gray-800 xl:flex-row xl:items-center">
                <svg
                  className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
                  viewBox="0 0 512 512"
                >
                  <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
                  <g>
                    <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
                  </g>
                </svg>
                <span className="xl:mt-0"> {`${data['experience_year']}年の経験`} </span>
              </p>
              <p className="flex items-center justify-start text-gray-800 xl:flex-row xl:items-center">
                <svg
                  className=" mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                </svg>
                <span className="mt-0 line-clamp-1"> {data['email']} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeacherItem;

// <div className="flex flex-col gap-3">
//           <div className="h-60 w-full">
//             <img
//               src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
//               alt="Teacher"
//               className="h-full w-full rounded-lg object-cover"
//             />
//           </div>
//           <div className="text-xl font-bold">{data['name']}</div>
//           <div>
//             <p className="text-black-900 text-base font-semibold leading-6">
//               年齢 :
//               <span className="text-black-300 pl-1 text-base font-extralight leading-6"> {data['age']}</span>
//             </p>
//           </div>
//           <div>
//             <p className="text-black-900 text-base font-semibold leading-6">
//               授業料:
//               <span className="text-black-300 pl-1 text-base font-extralight leading-6">
//                 {' '}
//                 {data['fee']} K
//               </span>
//             </p>
//           </div>
//           <div>
//             <p className="text-black-900 text-base font-semibold leading-6">
//               経験年数 :
//               <span className="text-black-300 pl-1 text-base font-extralight leading-6">
//                 {' '}
//                 {data['experience_year']}年
//               </span>
//             </p>
//           </div>
//           <div>
//             <p className="text-black-900 text-base font-semibold leading-6">
//               詳細の情報 :
//               <span className="text-black-300 pl-1 text-base font-extralight leading-6">
//                 {' '}
//                 {data['description']}
//               </span>
//             </p>
//           </div>
//           <Rate allowHalf disabled defaultValue={2.3} />
//         </div>
