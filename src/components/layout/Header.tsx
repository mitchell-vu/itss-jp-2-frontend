import * as React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="sticky left-0 top-0 z-20 bg-white">
      <div className="container flex flex-row items-center justify-between border-b py-4">
        <Link to="/" className="text-2xl">
          バナナ先生
        </Link>
        <div className="flex flex-row gap-3">
          <button className="p-3">サイアップ</button>
          <Link to="/auth/login" className="rounded-lg bg-orange-400  p-3 text-white">
            ログイン
          </Link>
          <Link to="/search-teacher" className="flex rounded-lg bg-red-500 p-3 text-white">
            先生を検索
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
