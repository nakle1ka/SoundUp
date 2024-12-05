'use client'

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import { Search as SearchIcon } from 'lucide-react';

import styles from './search.module.scss';

type Props = {

}

export const Search: FC<Props> = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>('');

    function gotoSearch(event: React.KeyboardEvent<HTMLInputElement>) {
        event?.key == "Enter" && (
            router.push(`/search?q=${encodeURIComponent(value)}`)
        )
    }

    return (
        <div className={styles.container} >
            <Link href={`/search?q=${encodeURIComponent(value)}`}>
                <SearchIcon className={styles.ico} />
            </Link>

            <input
                type="text"
                placeholder="Найти..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => gotoSearch(e)}
                className={styles.input}
            />
        </div>
    );
}