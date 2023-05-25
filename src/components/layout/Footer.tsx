import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { HiOutlineMail, HiOutlineMap, HiOutlinePhone } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <section className="mobile:px-4 bg-gray-50 px-[8%] py-16">
      <div className="mobile:flex-col flex justify-between border-b border-solid border-gray-200 pb-8">
        <div className="flex max-w-[500px] flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
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
                className="text-md focus:shadow-tealFocus flex h-11 w-full items-center rounded-lg border border-solid border-gray-300 bg-white px-3 text-sm font-normal text-gray-900 shadow outline-none placeholder:text-gray-500 focus:border-teal-300 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>
          <button className="mobile:w-full mobile:ml-0 mobile:mt-4 text-md focus:shadow-btnFocus ml-2 inline-flex h-11 w-max items-center justify-center rounded-lg bg-teal-600 px-[18px] font-medium text-white shadow transition-all duration-200 ease-in-out hover:bg-teal-800 focus:bg-teal-800 disabled:bg-teal-50 disabled:text-gray-400">
            Đăng ký ngay
          </button>
        </div>
      </div>

      <div className="mobile:flex-col flex justify-between border-b border-solid border-gray-200 pb-8 pt-16">
        <div>
          <div className="text-3xl">バナナ先生</div>

          <div className="mobile:flex-col mobile:items-start flex items-center pt-8">
            <NavLink to="/" className="text-[#374151]">
              Trang chủ
            </NavLink>
            <NavLink to="/courses" className="mobile:pl-0 mobile:pt-3 pl-6 text-[#374151]">
              Tất cả khoá học
            </NavLink>
            <NavLink to="/upcoming-courses" className="mobile:pl-0 mobile:pt-3 pl-6 text-[#374151]">
              Các khoá sắp mở
            </NavLink>
          </div>
          <div className="mt-4 flex w-[275px] flex-col">
            <div className="flex items-center">
              <HiOutlineMail size="1.25rem" className="flex-shrink-0 text-gray-500" />
              <span className="ml-4 text-xs text-gray-500">hello@desklass.com</span>
            </div>
            <div className="mt-2 flex items-center">
              <HiOutlinePhone size="1.25rem" className="flex-shrink-0 text-gray-500" />
              <span className="ml-4 text-xs text-gray-500">0869 964 296</span>
            </div>
            <div className="mt-2 flex items-center">
              <HiOutlineMap size="1.25rem" className="flex-shrink-0 text-gray-500" />
              <span className="ml-4 text-xs text-gray-500">
                Số 18.16, Tầng 18, Tòa nhà Golden King, 15 Nguyễn Lương Bằng, P. Tân Phú, Quận 7, TP. HCM
              </span>
            </div>
          </div>
        </div>
        <div className="mobile:mt-8 flex max-w-[320px] flex-col items-start">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">CÔNG TY TNHH DESKLASS</span>
          <span className="pt-2 text-xs text-gray-500">
            Giấy chứng nhận đăng ký doanh nghiệp số: 0317414296 Cấp ngày: 02/08/2022. Nơi cấp: Sở Kế hoạch và Đầu tư
            TP.Hồ Chí Minh.
          </span>
          <div className="mb-8 mt-8 h-[1px] w-full bg-gray-200"></div>
          <a href="http://online.gov.vn/Home/WebDetails/99709" className="mt-2">
            <img alt="" title="" src="https://desklass.com/assets/trade.d38ef0cc.png" />
          </a>
        </div>
      </div>

      <div className="mobile:flex-col mobile:items-start flex items-center justify-between pt-8">
        <div className="grid grid-cols-4 items-center gap-x-3">
          <a href="https://www.facebook.com/thedesklass" className="text-gray-400">
            <AiFillFacebook size="2rem" />
          </a>
          <a href="https://www.instagram.com/thedesklass/" className="text-gray-400">
            <AiOutlineInstagram size="2rem" />
          </a>
          <a href="https://www.facebook.com/thedesklass" className="text-gray-400">
            <AiFillYoutube size="2rem" />
          </a>
        </div>

        <div className="mobile:flex-col mobile:items-start mobile:mt-8 flex items-center">
          <a className="text-gray-400" href="/terms-and-conditions">
            Điều khoản sử dụng
          </a>
          <a className="mobile:pl-0 mobile:pt-4 pl-8 text-gray-400" href="/privacy">
            Bảo mật thông tin
          </a>
          <a className="mobile:pl-0 mobile:pt-4 pl-8 text-gray-400" href="/return-policy">
            Thanh toán, đổi trả &amp; hoàn tiền
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
