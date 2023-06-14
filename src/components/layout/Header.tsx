import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const isLoggedin = true;

  return (
    <header className="sticky left-0 top-0 z-20 bg-white">
      <div className="container flex flex-row items-center justify-between border-b py-4">
        <Link to="/" className="text-2xl">
          バナナ先生
        </Link>
        <div className="flex flex-row gap-6">
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
          {isLoggedin ? (
            <div id="profile" className="">
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
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm',
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="mr-2 rounded-lg border-2 border-gray-400 p-3 py-2 text-base font-medium hover:bg-gray-50 hover:text-white dark:text-gray-500 dark:hover:bg-gray-400 lg:px-5 lg:py-2.5"
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
