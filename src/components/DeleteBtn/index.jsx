import { FaTrashAlt } from 'react-icons/fa';
import './DeleteBtn.css';

function DeleteBtn() {
  return (
    <button
      onClick={(e) => {
        e.target.closest('.userListItem').remove();
      }}
      className="deleteBtn"
    >
      <FaTrashAlt className="deleteIcon" />
    </button>
  );
}

export default DeleteBtn;
