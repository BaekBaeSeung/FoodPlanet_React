import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [receivedData, setReceivedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const FetchFunction = () => {
        const fetchData = async () => {
            try {
                setReceivedData(null);
                setError(null);

                // 인텔리제이 - 마이스트링부트 - ForReactController
                const url = 'http://localhost:8888/react/data/exam01';

                const config = {
                    headers: {
                      'Authorization': 'Bearer <token>',
                      'Cache-Control': 'no-cache'
                      // 다른 필요한 헤더도 추가할 수 있습니다.
                    }
                  };

                const response = await axios.get(url, config);

                setReceivedData(response.data);
                console.log(response.data);

                setLoading(true);

            } catch (err) {
                console.log(err)
                setError(err);
            }

            setLoading(false);

        };

        fetchData(); // 함수 호출
    };

    // 두번째 매개변수가 빈 배열이면 한 번만 렌더링
    useEffect(FetchFunction, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생</div>;
    if (!receivedData) return null;

    return (
        <>
            <div>
                {receivedData}
            </div>
        </>

    );
}
export default App;