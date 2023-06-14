import { notification } from 'antd';

export const pushNotification = (message: string, description: string, type: string) => {
  if (type === 'success')
    notification['success']({
      className: 'bg-teal-50 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md',
      style: { backgroundColor: '#f0fdfa' },
      message: <h3 className="text-xl font-bold text-teal-600">{message}</h3>,
      description: <div className="text-sm font-medium text-teal-700">{description}</div>,
      placement: 'topRight',
      icon: (
        <svg className="mr-4 h-6 w-6 fill-current text-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
        </svg>
      ),
    });
  else {
    if (type === 'info')
      notification['info']({
        message: `${message}`,
        description: `${description}`,
        placement: 'topRight',
      });
    else
      notification['error']({
        message: `${message}`,
        description: `${description}`,
        placement: 'topRight',
      });
  }
};
