import styles from './button.module.scss';

interface ButtonProps {
    buttonName: string;
    handleLogin?: () => void;
}

const BasicButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className={styles.basicButton} onClick={props.handleLogin}>
            {props.buttonName}
        </button>
    )
}

export default BasicButton;