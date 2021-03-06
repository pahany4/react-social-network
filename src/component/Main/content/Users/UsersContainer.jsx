import React from 'react'
import { connect } from "react-redux";
import { compose } from 'redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../../../redux/users-reducer";
import { getPageSize, getTotalItemsCount, getUsers, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../../../redux/users-selectors';
import Preloader from '../../../common/Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props

        this.props.requestUsers(pageNumber, pageSize)
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        console.log("rerender users")
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null}
                <Users totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    })
)(UsersContainer)
