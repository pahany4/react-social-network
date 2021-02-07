import Preloader from '../../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
//import ProfileStatus from './ProfileStatus';
import ava from './../../../../../img/ava.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || ava} alt='ava' />
                {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> */}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;
