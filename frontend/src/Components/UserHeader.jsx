import { useDispatch, useSelector } from 'react-redux';
import { edit } from "../services/actionReducer/UserReducer";
import ProfileEditor from './ProfileEditor';

 const UserHeader = () => {
    const dispatch = useDispatch()
    const {firstname, lastname, editName} = useSelector(state => state.user);

    const edition = () => {
        dispatch(edit())
    }

    return editName ? (
        <ProfileEditor firstname={firstname} lastname={lastname}/>
      ) : (
        <div className="header">
          <h1 className="title">Welcome back<br />{firstname} {lastname}!</h1>
          <button onClick={edition} className="edit-button">Edit Name</button>
        </div>
      );
     
}

export default UserHeader;