import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <section className="mobile:px-4 bg-teal-700 px-[8%] py-16">
      {/* <div className="mobile:flex-col flex justify-between border-b border-solid border-white-200 pb-8">
        <div className="flex max-w-[500px] flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-white-500">
            Đăng ký nhận bản tin ngay
          </span>
          <span className="mt-2">
            Hãy là người đầu tiên biết về các tin tức và thông tin chi tiết về các khoá học mới.
          </span>
        </div>
        <div className="mobile:flex-col mobile:mt-8 flex items-center">
          <div className="mobile:w-full">
            <div className="relative">
              <input
                placeholder="Nhập email"
                className="text-md focus:shadow-tealFocus flex h-11 w-full items-center rounded-lg border border-solid border-white-300 bg-white px-3 text-sm font-normal text-white-900 shadow outline-none placeholder:text-white-500 focus:border-teal-300 disabled:bg-white-50 disabled:text-white-500"
              />
            </div>
          </div>
          <button className="mobile:w-full mobile:ml-0 mobile:mt-4 text-md focus:shadow-btnFocus ml-2 inline-flex h-11 w-max items-center justify-center rounded-lg bg-teal-600 px-[18px] font-medium text-white shadow transition-all duration-200 ease-in-out hover:bg-teal-800 focus:bg-teal-800 disabled:bg-teal-50 disabled:text-white-400">
            Đăng ký ngay
          </button>
        </div>
      </div> */}

      <div className="mobile:flex-col border-white-200 flex justify-between border-b border-solid pb-8 pt-16">
        <div>
          <div className="text-3xl text-white">バナナ先生</div>

          <div className="mobile:flex-col mobile:items-start flex items-center pt-8">
            <NavLink to="/" className="text-gray-300">
              ホームページ
            </NavLink>
            <NavLink to="/" className="mobile:pl-0 mobile:pt-3 pl-6 text-gray-300">
              アバウト
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mobile:flex-col mobile:items-start flex items-center justify-between pt-8">
        <div className="grid grid-cols-4 items-center gap-x-3">
          <a href="https://www.facebook.com" className="text-gray-300">
            <AiFillFacebook size="2rem" />
          </a>
          <a href="https://www.instagram.com" className="text-gray-300">
            <AiOutlineInstagram size="2rem" />
          </a>
          <a href="https://www.youtube.com" className="text-gray-300">
            <AiFillYoutube size="2rem" />
          </a>
        </div>

        <div className="mobile:flex-col mobile:items-start mobile:mt-8 flex items-center">
          <p className="text-gray-300"> Design ©2023 Created by Team Nakama and Banana</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
