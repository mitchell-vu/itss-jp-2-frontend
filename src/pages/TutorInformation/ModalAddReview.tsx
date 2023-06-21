import { Rate } from 'antd';
import React, { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { sendCommentAndRate } from '../../services/api/comment';
import { toastError, toastSuccess } from '../../utils/toast';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

interface ModalAddReviewProps {
  handleOK: () => void;
  teacher_id?: string;
}

const ModalAddReview = (props: ModalAddReviewProps) => {
  const { handleOK, teacher_id } = props;
  const [value, setValue] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('コメントは 50 文字以上で、スターの数は 0 より大きいです。');
  const { user } = useAuth();

  console.log(user);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmitForm = () => {
    if (textareaValue.length >= 10 && value > 0) {
      setVisible(false);
      setMessage('');
      teacher_id &&
        user?.id_user &&
        sendCommentAndRate({
          id_teacher: parseInt(teacher_id),
          id_student: user.id_user,
          review: textareaValue,
          star: value,
        })
          .then(() => {
            toastSuccess('レビューを正常に送信しました。');
            handleOK();
          })
          .catch(() => {
            toastError('レビューの送信に失敗しました。');
            handleOK();
          });
    } else {
      if (value == 0 && textareaValue.length < 50) {
        setVisible(true);
        setMessage('コメントは 10 文字以上で、スターの数は 0 より大きいです。');
      } else if (value == 0) {
        setVisible(true);
        setMessage('スターの数は 0 より大きいです。');
      } else {
        setVisible(true);
        setMessage('コメントは 10 文字以上です。');
      }
    }
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
