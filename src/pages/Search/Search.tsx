import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import TeacherItem from '../../components/TeacherItem/TeacherItem';
import { searchTeacher } from '../../service/teacher';


interface SearchPageProps {}

interface DataType {
  page: number | undefined;
  gender: number | undefined;
  name: string | undefined;
  experience_year: number | undefined;
  fee: number | undefined;
  rate: string | undefined;
}

const SearchPage: React.FunctionComponent<SearchPageProps> = () => {
  const [dataSource, setDataSource] = useState<[]>();
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);

  const [name] = useState<string | undefined>(undefined);
  const [gender, setGender] = useState<number | undefined>(undefined);
  const [fee, setFee] = useState<number | undefined>(undefined);
  const [experience, setExperience] = useState<number | undefined>(undefined);
  const [rate, setRate] = useState<string | undefined>(undefined);

  const [search, setSearch] = useState<DataType>({
    page: undefined,
    gender: undefined,
    name: undefined,
    experience_year: undefined,
    fee: undefined,
    rate: undefined,
  });
  
  useEffect(() => {
    searchTeacher(search).then((val) => {
      setDataSource(val.data.data);
      setTotal(val.data.total);
      setCurrent(1);
      // console.log(val.data.data);
    });
  }, [search]);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
    const search2 = { ...search, page: page };
    searchTeacher(search2).then((val) => {
      setDataSource(val.data.data);
      setTotal(val.data.total);
    });
    setTimeout(() => {
      window.scrollTo(0, 0); // Di chuyển lên đầu trang
    }, 700);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý dữ liệu khi submit form
    setSearch({
      page: 1,
      gender: gender,
      name: name,
      experience_year: experience,
      fee: fee,
      rate: rate,
    });
  };

  return (
    <>
      <div className="container">
        <div className="flex gap-x-10">
          <section className="my-14 w-1/3">
            {/* <RollingObject> */}
            <form className="" onSubmit={handleSubmit}>
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-bold leading-7 text-gray-900">フィルター</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-6">
                  {/* <div className="sm:col-span-full">
                      <label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900">
                        名前
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-base sm:leading-6"
                        />
                      </div>
                    </div> */}

                  <div className="sm:col-span-2">
                    <label htmlFor="gender" className="block text-base font-medium leading-6 text-gray-900">
                      性別
                    </label>
                    <div className="mt-2">
                      <select
                        id="gender"
                        name="gender"
                        autoComplete="gender"
                        value={gender}
                        onChange={(e) => {
                          e.target.value == '' ? setGender(undefined) : setGender(parseInt(e.target.value));
                        }}
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600  sm:text-base sm:leading-6"
                      >
                        <option value="">すべて</option>
                        <option value="0">男</option>
                        <option value="1">女</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="fee" className="block text-base font-medium leading-6 text-gray-900">
                      授業料
                    </label>
                    <div className="mt-2">
                      <select
                        id="fee"
                        name="fee"
                        autoComplete="fee"
                        value={fee}
                        onChange={(e) => {
                          e.target.value == '' ? setFee(undefined) : setFee(parseInt(e.target.value));
                        }}
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600  sm:text-base sm:leading-6"
                      >
                        <option value="">すべて</option>
                        <option value="1">25万ドン以下</option>
                        <option value="2">25-30万ドン</option>
                        <option value="3">30-35万ドン</option>
                        <option value="4">35万ドン以上</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="experience" className="block text-base font-medium leading-6 text-gray-900">
                      経験年数
                    </label>
                    <div className="mt-2">
                      <select
                        id="experience"
                        name="experience"
                        autoComplete="experience"
                        value={experience}
                        onChange={(e) => {
                          e.target.value == '' ? setExperience(undefined) : setExperience(parseInt(e.target.value));
                        }}
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600  sm:text-base sm:leading-6"
                      >
                        <option value="">すべて</option>
                        <option value="1">3年以下</option>
                        <option value="2">3-5年</option>
                        <option value="3">5-7年</option>
                        <option value="4">7年以上</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="rate" className="block text-base font-medium leading-6 text-gray-900">
                      評価点数
                    </label>
                    <div className="mt-2">
                      <select
                        id="rate"
                        name="rate"
                        autoComplete="rate"
                        value={rate ? rate : ''}
                        onChange={(e) => {
                          e.target.value == '' ? setRate(undefined) : setRate(e.target.value);
                        }}
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600  sm:text-base sm:leading-6"
                      >
                        <option value="" disabled selected>
                          --並べ替え--
                        </option>
                        <option value="desc">最も高い</option>
                        <option value="asc">最も低い</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-teal-600 px-10 py-2 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  検索
                </button>
              </div>
            </form>
            {/* </RollingObject>   */}
          </section>
          <section className="my-14 w-2/3">
            <p className="mb-2 text-2xl font-semibold">検索結果</p>
            <p className="mb-5 text-base font-extralight">{`約${total}件の結果`}</p>
            <div className="grid grid-cols-2 gap-4">
              {dataSource ? dataSource.map((data) => <TeacherItem key={data['id_teacher']} data={data} />) : <></>}
            </div>
            <div className="mt-10 flex items-center justify-center">
              <Pagination className="" current={current} onChange={onChange} total={total} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
