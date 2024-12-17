import { useState, useEffect } from "react";

type QueryKey = string | (string | number)[];

export const useRequest = <T>(
    queryKey: QueryKey,
    queryFn: () => Promise<T | null>
) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const cachedData = localStorage.getItem(JSON.stringify(queryKey));
        if (cachedData && cachedData !== "undefined") {
            setData(JSON.parse(cachedData));
            setLoading(false);
            console.log(cachedData);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await queryFn();

                if (result === null) return;
                // Сохраняем данные в кэш
                localStorage.setItem(
                    JSON.stringify(queryKey),
                    JSON.stringify(result)
                );
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Неизвестная ошибка");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [queryKey, queryFn]);

    return { data, isLoading, error };
};
