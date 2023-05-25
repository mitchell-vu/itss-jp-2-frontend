import * as React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="sticky left-0 top-0 bg-white">
      <div className="container flex flex-row items-center justify-between border-b py-4">
        <Link to="/" className="text-2xl">
          バナナ先生
        </Link>

        <div className="flex flex-row gap-3">
          <button className="p-3">サイアップ</button>
          <Link to="/auth/login" className="rounded-lg bg-teal-500 p-3 text-white">
            ログイン
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
