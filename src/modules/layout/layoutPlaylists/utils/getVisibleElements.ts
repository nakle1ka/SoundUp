export const getVisibleElements = (ref: React.RefObject<HTMLElement>): number => {
    const containerRef = ref;

    if (containerRef && containerRef.current) {
        const height = containerRef?.current.clientHeight
        const playListIconSize = 50;
        const count = Math.floor(height / playListIconSize);

        return Math.floor((height - (count * 5)) / playListIconSize);
    }
    return 0;
}