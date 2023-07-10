import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky left-0 top-0 z-20 bg-white">
      <div className="container flex h-20 flex-row items-center justify-between border-b py-4">
        <Link to="/" className="text-2xl">
          バナナ先生
        </Link>
        <div className="flex flex-row gap-6">
          {isLoggedIn ? (
            <>
              {user?.role === 0 && (
                <Link
                  to="/teachers/search"
                  className="flex items-center justify-center gap-2 rounded-lg bg-red-500 p-3 text-white"
                >
                  先生を検索
                  <FiArrowRight />
                </Link>
              )}
              <div id="profile">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="Avatar user"
                        className="mx-auto w-10 rounded-full md:w-12"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {user?.role === 0 && (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={`/students/${user?.id_user}/list-teacher`}
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                  )}
                                >
                                  教師一覧を見る
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={`/students/${user?.id_user}/edit`}
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                  )}
                                >
                                  自分のプロフィール
                                </Link>
                              )}
                            </Menu.Item>
                          </>
                        )}
                        {user?.role === 1 && (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={`/teachers/${user?.id_user}/edit`}
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                  )}
                                >
                                  自分のプロフィール
                                </Link>
                              )}
                            </Menu.Item>
                            {/* <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/administration"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                  )}
                                >
                                  Administration
                                </Link>
                              )}
                            </Menu.Item> */}
                          </>
                        )}
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogout}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm',
                              )}
                            >
                              ログアウト
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/teachers/search"
                className="flex items-center justify-center gap-2 rounded-lg bg-red-500 p-3 text-white"
              >
                先生を検索
                <FiArrowRight />
              </Link>
              <Link
                to="/auth/login"
                className="mr-2 rounded-lg bg-teal-500 p-3 py-2 text-base font-medium text-white hover:bg-teal-600 lg:px-5 lg:py-2.5"
              >
                ログイン
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
