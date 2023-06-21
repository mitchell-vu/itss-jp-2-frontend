import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { TOASTIFY_OPTIONS } from '../constants/notification';

export const toastWithAsyncFetch = async (
  messages: { loading: string; success: string; error: string },
  fetchFunc: () => Promise<AxiosResponse>,
  successCallback: (res: AxiosResponse) => void,
  errorCallback?: (e: unknown) => void,
) => {
  const toastId = toast.loading(messages.loading ?? 'Đang cập nhật');

  try {
    const res = await fetchFunc();

    successCallback && successCallback(res);
    toast.update(toastId, {
      ...TOASTIFY_OPTIONS,
      render: messages.success ?? 'Thành công',
      type: toast.TYPE.SUCCESS,
      isLoading: false,
    });

    return true;
  } catch (e) {
    errorCallback && errorCallback(e);
    console.warn(e);
    toast.update(toastId, {
      ...TOASTIFY_OPTIONS,
      render: messages.error ?? 'Không thành công',
      type: toast.TYPE.ERROR,
      isLoading: false,
    });

    return false;
  }
};

export const toastSuccess = (message: string) => {
  toast.success(message, TOASTIFY_OPTIONS);
};

export const toastWarn = (message: string) => {
  toast.warn(message, TOASTIFY_OPTIONS);
};

export const toastError = (message: string) => {
  toast.error(message, TOASTIFY_OPTIONS);
};
