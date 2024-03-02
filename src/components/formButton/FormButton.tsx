import { useFormStatus } from "react-dom";
import styles from "./formButton.module.css";

interface FormButtonProps {
  title: string;
}

export const FormButton = ({ title }: FormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} disabled={pending}>
      {title}
    </button>
  );
};
