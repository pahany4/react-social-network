import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/auth-reducer"
import { required } from "../../utils/validators/validators"
import { createField, Input } from "../common/FormsControls/FormsControls"
import styles from "./Login.module.css"

const LoginForm = ({ handleSubmit, error }) => {
    return (

        <form onSubmit={handleSubmit}>
            <div className={styles.inputWrap}>
                {createField("Email", "email", "text", [required], Input)}
            </div>

            <div className={styles.inputWrap}>
                {createField("Password", "password", "password", [required], Input)}
            </div>

            <div className={styles.inputWrap}>
                <Field type={"checkbox"} name={"rememberMe"} id="rememberMe"
                    component={"input"} />
                <label for="rememberMe">remember me </label>
            </div>

            { error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login); 