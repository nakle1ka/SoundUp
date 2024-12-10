import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

import styles from "./submitBtn.module.scss"

export const SubmitBtn: FC = () => {
    return (
        <Button className={styles.formSubmit} type="submit">
            <span className={styles.btnText}>Далее</span>

            <MoveRight
                className={styles.right}
            />
        </Button>
    );
}