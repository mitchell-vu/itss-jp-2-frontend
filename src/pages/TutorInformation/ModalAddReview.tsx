import { Rate } from 'antd';
import React, { FunctionComponent, useState } from 'react';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

interface ModalAddReviewProps {
  handleOK: FunctionComponent;
}

const ModalAddReview = (props: ModalAddReviewProps) => {
  const { handleOK } = props;
  const [value, setValue] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('コメントは 50 文字以上で、スターの数は 0 より大きいです。');

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmitForm = () => {
    if (textareaValue.length >= 50 && value > 0) {
      setVisible(false);
      setMessage('');
    } else {
      if (value == 0 && textareaValue.length < 50) {
        setVisible(true);
        setMessage('コメントは 50 文字以上で、スターの数は 0 より大きいです。');
      } else if (value == 0) {
        setVisible(true);
        setMessage('スターの数は 0 より大きいです。');
      } else {
        setVisible(true);
        setMessage('コメントは 50 文字以上です。');
      }
    }
    console.log(value, textareaValue);
    handleOK();
    // createNewUser({
    //     ...value,
    //     dateOfBirth: ISO_dateOfBirth,
    //     password: AES.encrypt(value.password, process.env.REACT_APP_ENCODE_PWD_KEY!).toString()
    // })
    //     .then((res) => {
    //         pushNotification("Thành công", "Bạn vừa tạo thành công một người dùng mới", NOTIFICATION_TYPE.SUCCESS);
    //         handleOK()
    //     })
    //     .catch((_) => {
    //         pushNotification("Thất bại", "Thất bại", NOTIFICATION_TYPE.ERROR);
    //         handleOK()
    //         return;
    //     })
  };

  return (
    <div className="min-w-1xl flex flex-col rounded-xl bg-white">
      <div className="flex flex-col items-center px-12 py-5">
        <h2 className="text-4xl font-semibold text-red-700">教師を評価する</h2>
      </div>
      <div className="flex w-full flex-col items-center bg-gray-200">
        <div className="flex flex-col items-center space-y-3 py-6">
          <span className="text-base font-semibold text-slate-600">講師の質はどうですか？</span>
          <div className="flex space-x-3">
            <Rate tooltips={desc} onChange={setValue} value={value} style={{ color: '#ef4444', fontSize: 24 }} />
          </div>
        </div>
        <div className="flex w-3/4 flex-col items-center">
          <textarea
            className="h-50 mb-8 w-full resize-none rounded-xl p-4 text-gray-500"
            rows={4}
            placeholder="少なくとも 50 文字を追加してください"
            onChange={handleTextareaChange}
          ></textarea>
          {visible ? <span className="mb-5 text-xs text-red-600">{message}</span> : <></>}
          <button
            className="mb-8 w-full rounded-xl bg-gradient-to-r from-rose-400 to-rose-700 py-3 text-lg text-white"
            onClick={handleSubmitForm}
          >
            Rate now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddReview;
