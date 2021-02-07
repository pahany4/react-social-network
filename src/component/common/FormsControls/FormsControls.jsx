import { Field } from "redux-form";
import styles from "./FormsControls.module.css";


const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {props.children}
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl  {...props}>
            <textarea {...input} {...restProps} cols="50" rows="5" />
        </FormControl>
    )
}
export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl  {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export const createField = (placeholder, name, type, validators, component) => (
    <Field
        placeholder={placeholder}
        name={name}
        type={type}
        validate={validators}
        id=""
        component={component}
    />
)