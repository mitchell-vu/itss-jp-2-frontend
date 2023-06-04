import * as React from 'react';
import classNames from 'classnames';
import styles from './Search.module.scss';

interface SearchPageProps {}

const SearchPage: React.FunctionComponent<SearchPageProps> = (props) => {
  return ( 
    <>
      <div className="container">
        <div className="flex gap-x-12">
          <form className="my-14 w-1/3">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-bold leading-7 text-gray-900">フィルター</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                名前
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                性別
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                  >
                    <option>男</option>
                    <option>女</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                授業料
                </label>
                <div className="mt-2">
                  <select
                    id="subject"
                    name="subject"
                    autoComplete="subject-name"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                  >
                    <option>数学</option>
                    <option>英語</option>
                    <option>物理</option>
                    <option>化学</option>
                    <option>哲学</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">
                経験年数
                </label>
                <div className="mt-2">
                  <select
                    id="experience"
                    name="experience"
                    autoComplete="experience"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                  >
                    <option>1年以下</option>
                    <option>1年ー5年</option>
                    <option>5年以上</option>
                    <option>7年以上</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">
                評価点数
                </label>
                <div className="mt-2">
                  <select
                    id="experience"
                    name="experience"
                    autoComplete="experience"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                  >
                    <option>最も高い</option>
                    <option>最も低い</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              キャンセル
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              検索
            </button>
          </div>
          </form>

          <section className="my-14 w-2/3">
            <h2 className='mb-10 text-2xl font-medium'>検索結果</h2>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map(() => (
                <div className="flex flex-col gap-3">
                  <div className="h-60 w-full">
                    <img
                      src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
                      alt="Teacher"
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="font-bold text-xl">先生の名前</div>
                  <div className="font-extralight leading-6 text-gray-600">先生の情報</div>
                </div>
              ))}
            </div>
          </section>
        </div> 
      </div>
    </>
  );
};

export default SearchPage;
