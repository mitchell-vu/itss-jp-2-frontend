import { Link } from 'react-router-dom';
import { FixMeLater } from '../../vite-env';

function StudentCard(props: FixMeLater) {
  const data = props.data;
  const status = props.status;
  return (
    <Link to={'/student-info/' + data.id_student+"/"+status}>
      <div className="flex flex-col gap-3">
        <div className="h-60 w-full">
          <img
            src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
            alt="Teacher"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="text-xl font-bold">{data.name}</div>
        <div>
          <p className="text-black-900 text-base font-semibold leading-6">
            年齢 :<span className="text-black-300 pl-1 text-base font-extralight leading-6"> {data.age}</span>
          </p>
        </div>
        <div>
          <p className="text-black-900 text-base font-semibold leading-6">
            Eメール:
            <span className="text-black-300 pl-1 text-base font-extralight leading-6"> {data.email} </span>
          </p>
        </div>
        <div>
          <p className="text-black-900 text-base font-semibold leading-6">
            電話 :<span className="text-black-300 pl-1 text-base font-extralight leading-6"> {data.phone}</span>
          </p>
        </div>
        <div>
          <p className="text-black-900 text-base font-semibold leading-6">
            住所 :<span className="text-black-300 pl-1 text-base font-extralight leading-6"> {data.address}</span>
          </p>
        </div>
        <div>
          <p className="text-black-900 text-base font-semibold leading-6">
            説明 :<span className="text-black-300 pl-1 text-base font-extralight leading-6"> {data.description}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default StudentCard;
