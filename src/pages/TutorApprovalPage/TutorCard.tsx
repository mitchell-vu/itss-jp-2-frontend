import { FixMeLater } from '../../vite-env';

function TutorCard(props: FixMeLater) {
  const details = props.details;
  // const { user } = useAuth();

  // const handleApprove = () => {
  //   sendRequest({
  //     id_teacher: details.id_teacher,
  //     id_student: user?.id_user,
  //   }).then(() => {
  //     console.log('success');
  //   });
  // };

  // const handleCancel = () => {};

  return (
    <div className="mt-8 max-w-sm overflow-hidden rounded bg-white p-8 shadow-2xl">
      <div>
        <div className=" relative mb-3 h-40 w-40 sm:mb-0">
          <img
            src="https://iowacapitaldispatch.com/wp-content/uploads/2023/03/math-teacher-at-blackboard-1024x680.jpg"
            alt="aji"
            className=" h-40 w-40 rounded-2xl object-cover"
          />
        </div>
        <h3 className="mt-3 text-3xl font-semibold">{details.name}</h3>
      </div>
      <div>
        <div className="mt-4">宛先</div>
        <p>{details['address'] ? details['address'] : 'なし'}</p>
        <div className="mt-2">メール</div>
        <p>{details['email'] ? details['email'] : 'なし'}</p>
        <div className="mt-2">電話番号</div>
        <p>{details['phone'] ? details['phone'] : 'なし'}</p>
      </div>
    </div>
  );
}

export default TutorCard;
