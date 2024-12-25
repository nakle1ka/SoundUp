import { FC } from 'react';

type Props = {
	className?: string;
}

export const Play: FC<Props> = ({ className = "" }) => {
	return (
		<svg viewBox="0 0 24 24" className={className}>
			<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z" />
		</svg>
	);
}
