import classes from './Main.module.css';
import style from './content/content.module.css';
import NavBar from './NavBar/NavBar';
import React from 'react';
import { Route } from 'react-router-dom';
import UsersContainer from './content/Users/UsersContainer';
import ProfileContainer from './content/Profile/ProfileContainer';
import Login from '../Login/Login';
import { withSuspense } from "../../hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./content/Dialogs/DialogsContainer'));

const Main = () => {

    return (
        <main className={classes.main}>
            <NavBar />
            <div className={style.content}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <Login />} />
            </div>
        </main>
    )
}

export default Main;