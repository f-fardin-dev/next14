import { FormButton } from "../formButton/FormButton";
import styles from "./listItem.module.css";
import Image from "next/image";

interface ListItemProps {
  img: string;
  title: string;
  filedName: string;
  filedValue: string;
  btnTitle?: string;
  action: (formData: FormData) => Promise<{ error: string } | undefined>;
}

export const ListItem = ({
  img,
  title,
  filedName,
  filedValue,
  action,
  btnTitle,
}: ListItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.details}>
        <Image src={img} className={styles.img} alt="" width={50} height={50} />
        <span>{title}</span>
      </div>
      <form className={styles.form} action={action}>
        <input type="hidden" name={filedName} value={filedValue} />
        <FormButton title={btnTitle ?? "Delete"} />
      </form>
    </div>
  );
};
