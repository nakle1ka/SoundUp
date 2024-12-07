import { useState, useEffect } from "react";

type QueryKey = string | (string | number)[];

const useRequest = <T>(queryKey: QueryKey, queryFn: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            // Проверяем кэш
            const cachedData = localStorage.getItem(JSON.stringify(queryKey));
            if (cachedData) {
                setData(JSON.parse(cachedData));
                setLoading(false);
            }

            try {
                const result = await queryFn();

                // Сохраняем данные в кэш
                localStorage.setItem(
                    JSON.stringify(queryKey),
                    JSON.stringify(result)
                );
                setData(result);
            } catch (err) {
                if (cachedData) return;

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

    return { data, loading, error };
};
