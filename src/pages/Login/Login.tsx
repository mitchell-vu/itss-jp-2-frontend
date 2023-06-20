import * as React from 'react';
import { FiMail } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import { loginWithEmail } from '../../services/api/auth';
import { validateEmail } from '../../utils/helpers';
import { toastError, toastSuccess } from '../../utils/toast';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errors, setErrors] = React.useState<string[]>([]);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const e: string[] = [];
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email === '') {
      e.push('メールを入力する必要があります');
    }
    if (password === '') {
      e.push('パスワードを入力する必要があります');
    }

    if (email && !validateEmail(email)) {
      // e.push('無効な電子メール');
    }

    if (e.length > 0) {
      setErrors(e);
      return false;
    }

    setErrors([]);
    return true;
  };

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await loginWithEmail({ username: emailRef.current!.value, password: passwordRef.current!.value });
        const { access_token, expires_in, user } = res.data;
        toastSuccess('ログインに成功しました');
        login(access_token, expires_in, user);
        navigate('/');
      } catch (_e) {
        toastError('ログインに失敗しました');
      }
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)]">
      <div className="flex w-full grow flex-col bg-white">
        <div className="flex grow items-center justify-center px-6 py-10">
          <div className="flex flex-col items-center">
            <h1 className="mb-8 text-4xl font-semibold text-black">ログイン</h1>

            <div className="w-80">
              {errors?.length > 0 && (
                <div className="mb-5 w-full rounded-md bg-red-600 p-4 text-white">
                  <ul className="ml-3 list-disc text-sm">
                    {errors.map((error, index) => (
                      <li key={`error-${index}`}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <form className="flex w-full flex-col gap-y-4" onSubmit={loginHandler}>
                <input
                  ref={emailRef}
                  type="text"
                  name="email"
                  placeholder="ユーザー名 / E-メール"
                  autoComplete="off"
                  className="rounded-md border border-zinc-200 bg-transparent p-3 text-black outline-none transition focus:border-black disabled:opacity-50"
                  // disabled={loading}
                />

                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="パスワード"
                  autoComplete="off"
                  className="rounded-md border border-zinc-200 bg-transparent p-3 text-black outline-none transition focus:border-black disabled:opacity-50"
                  // disabled={loading}
                />

                <button
                  className="flex flex-row items-center rounded-md border bg-teal-500 p-3 text-white transition disabled:opacity-50"
                  // onClick={loginHandler}
                  // disabled={loading}
                >
                  <FiMail />
                  <div className="mx-auto flex-1">ログイン</div>
                </button>

                <div className="w-100 flex justify-center">
                  <div
                    className="text-primary-600 cursor-pointer hover:underline"
                    // onClick={onClose}
                  >
                    パスワードを忘れた？
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-t border-zinc-200 p-8">
          <Link to="/auth/sign-up" className="text-primary-600 cursor-pointer hover:underline">
            アカウントをお持ちでない場合は、登録して
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
