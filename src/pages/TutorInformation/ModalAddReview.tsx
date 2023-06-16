import {Rate} from "antd";
import React, { useState } from "react";

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const ModalAddReview = (props: any) => {
    const {handleOK} = props;
    const [value, setValue] = useState(0);
    const [textareaValue, setTextareaValue] = useState("");
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("コメントは 50 文字以上で、スターの数は 0 より大きいです。")


    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
    };

    const handleSubmitForm = () => {
        if(textareaValue.length >= 50 && value > 0){
            setVisible(false);
            setMessage("");
        }
        else{
            if(value == 0 && textareaValue.length < 50){
                setVisible(true);
                setMessage("コメントは 50 文字以上で、スターの数は 0 より大きいです。");    
            }
            else if(value == 0){
                setVisible(true);
                setMessage("スターの数は 0 より大きいです。");
            }
            else{
                setVisible(true)
                setMessage("コメントは 50 文字以上です。")
            }
        }
        console.log(value, textareaValue)
        handleOK()
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
    }


    return (
        <div className="bg-white min-w-1xl flex flex-col rounded-xl">
            <div className="px-12 py-5 flex flex-col items-center">
                <h2 className="text-red-700 text-4xl font-semibold">教師を評価する</h2>
            </div>
            <div className="bg-gray-200 w-full flex flex-col items-center">
                <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-base text-slate-600 font-semibold">講師の質はどうですか？</span>
                <div className="flex space-x-3">
                    <Rate tooltips={desc} onChange={setValue} value={value} style={{ color: '#ef4444', fontSize: 24}}/>
                </div>
                </div>
                <div className="w-3/4 flex flex-col items-center">
                    <textarea className="w-full mb-8 h-50 p-4 text-gray-500 rounded-xl resize-none" rows={4} placeholder="少なくとも 50 文字を追加してください" onChange={handleTextareaChange}>
                    </textarea>
                    {visible?
                    <span className="mb-5 text-red-600 text-xs">{message}</span>:<></>}
                    <button className="w-full py-3 mb-8 text-lg bg-gradient-to-r from-rose-400 to-rose-700 rounded-xl text-white" onClick={handleSubmitForm}>Rate now</button>
                </div>
            </div>
        </div>
    );
}

export default ModalAddReview;