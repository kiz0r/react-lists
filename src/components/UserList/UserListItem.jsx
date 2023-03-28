import DeleteBtn from '../DeleteBtn';
import './UserList.css';

const UserListItem = (props) => {
  const {
    selectUser,
    user: { id, imgSrc, isSelected, firstName, lastName, age },
  } = props;

  console.log(firstName);

  const shadowColor = isSelected ? '#9E00FF' : 'transparent';

  const inlineStyles = {
    transform: isSelected ? 'scale(110%)' : 'none',
    boxShadow: `-5px 20px 40px -20px ${shadowColor}`,
  };

  return (
    <li
      key={id}
      style={inlineStyles}
      onClick={() => {
        selectUser(id);
      }}
      className="userListItem"
    >
      <div className="infoContainer">
        <img src={imgSrc} alt="User Avatar" className="userImage" />
        <div className="userInfo">
          <p className="userName">
            {firstName} {lastName}
          </p>
          <p className="userAge">Age : {age}</p>
        </div>
      </div>
      <div className="btns">
        <DeleteBtn />
      </div>
    </li>
  );
};

export default UserListItem;
