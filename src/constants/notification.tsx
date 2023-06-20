import { ToastOptions } from 'react-toastify';

export const NOTIFICATION_TYPE = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
};

export const TOASTIFY_OPTIONS: ToastOptions = {
  autoClose: 5000,
  position: 'bottom-right',
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
