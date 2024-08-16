import styles from "./field.module.scss"
import React from "react";

interface BasicFieldProps {
    label: string;
    type: string;
    name: string;
    handleField?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicField: React.FC<BasicFieldProps> = (props) => {
    return (
        <div className={styles.basicField}>
            <label>{props.label}</label>
            <input name={props.name} type={props.type} onChange={props.handleField} />
        </div>
    );
}

export default BasicField;