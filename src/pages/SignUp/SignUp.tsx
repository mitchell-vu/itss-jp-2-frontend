import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FEATURES = [
  {
    title: 'Instant edge deploys',
    content: 'Push to git and your website is live. Zero configuration required.',
  },
  {
    title: 'Collaborate with previews',
    content: 'Every pull request gets its own preview URL. Share them togather feedback or run tests.',
  },
  {
    title: 'Turn static to dynamic',
    content: 'Generate blazing fast pages and augment them with rich JavaScript that brings your apps alive.',
  },
  {
    title: 'Ship directly to the edge',
    content: 'Always fast. Always online. Always a hit.',
  },
];

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  // const navigate = useNavigate();
  const [errors, setErrors] = React.useState<string[]>([]);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmedPasswordRef = React.useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const e = [];

    if (
      nameRef.current?.value === '' ||
      emailRef.current?.value === '' ||
      passwordRef.current?.value === '' ||
      confirmedPasswordRef.current?.value === ''
    ) {
      e.push('Please fill all information');
    }
    if (passwordRef.current?.value !== confirmedPasswordRef.current?.value) {
      e.push('Confirmed password must be matched');
    }

    console.log(e);
    if (e.length > 0) {
      setErrors(e);
      return false;
    } else {
      setErrors([]);
      return true;
    }
  };

  const signUpHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // onLogin(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-screen bg-white dark:bg-black">
      <div className="invisible absolute bottom-0 top-0 z-0 h-full w-2/5 border-r border-zinc-200 bg-zinc-50 opacity-75 dark:border-zinc-600 dark:bg-zinc-900 lg:visible"></div>

      <div
        className="relative z-10 mx-auto flex min-h-screen max-w-full flex-col items-center justify-center px-6 text-black dark:text-white lg:flex-row-reverse"
        style={{ width: 'calc(1200px + calc(2*24px))' }}
      >
        <div className="flex w-full flex-row items-center justify-center py-10 lg:w-6/12 lg:justify-start">
          <div className="max-w-sm">
            <div className="mb-12 flex w-full flex-1 items-center justify-center">
              <div className="flex w-full flex-col items-center">
                <h1 className="mb-8 text-5xl font-semibold leading-tight">Join the best frontend teams</h1>

                {errors?.length > 0 && (
                  <div className="mb-5 w-full rounded-md bg-red-600 p-4 text-white">
                    <ul className="ml-3 list-disc text-sm">
                      {errors.map((error, index) => (
                        <li key={`error-${index}`}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <form className="flex w-full flex-col gap-y-4" onSubmit={signUpHandler}>
                  <input
                    ref={nameRef}
                    type="text"
                    name="text"
                    placeholder="Full Name"
                    autoComplete="off"
                    className="rounded-md border border-zinc-200 bg-transparent p-3 text-black outline-none transition focus:border-black dark:border-zinc-800 dark:text-white dark:focus:border-gray-500"
                    // disabled={loading}
                  />
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    autoComplete="off"
                    className="rounded-md border border-zinc-200 bg-transparent p-3 text-black outline-none transition focus:border-black dark:border-zinc-800 dark:text-white dark:focus:border-gray-500"
                    // disabled={loading}
                  />

                  <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="rounded-md border border-zinc-200 bg-transparent p-3 text-black outline-none transition focus:border-black dark:border-zinc-800 dark:text-white dark:focus:border-gray-500"
                    // disabled={loading}
                  />

                  <input
                    ref={confirmedPasswordRef}
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    className="rounded-md border border-zinc-200 bg-transparent p-3 text-black outline-none transition focus:border-black dark:border-zinc-800 dark:text-white dark:focus:border-gray-500"
                    // disabled={loading}
                  />

                  <button
                    className="flex flex-row items-center rounded-md bg-teal-500 p-3 text-white transition hover:bg-teal-600 dark:border-white dark:bg-white dark:text-black hover:dark:text-white"
                    // onClick={signUpHandler}
                    // disabled={loading}
                  >
                    <FiMail />
                    <div className="mx-auto flex-1">Continue with Email</div>
                  </button>
                </form>
              </div>
            </div>

            <hr className="my-7 w-full border-zinc-200 dark:border-zinc-800" />

            <p className="w-full">
              アカウントをお持ちですか？
              <Link to="/login" className="text-primary-600 cursor-pointer hover:underline">
                ログイン
              </Link>
            </p>
          </div>
        </div>

        <div className="lg:w-6/12">
          <div className="flex w-80 flex-col gap-6 py-8">
            <div>バナナ先生</div>

            {FEATURES.map((feature, index) => (
              <div className="flex flex-row" key={index}>
                <BsPatchCheckFill size="1.35rem" className="text-primary-600 mr-3 mt-2 flex-shrink-0" />
                <div className="flex flex-col">
                  <h2 className="mb-2 text-2xl font-semibold">{feature.title}</h2>
                  <p className="text-zinc-500">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
