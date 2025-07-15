import  { useState, useEffect } from "react";

export default function NowDate() {
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nowYY = now.getFullYear();
      const nowMM = (now.getMonth() + 1).toString().padStart(2, `0`);
      const nowDD = now.getDate().toString().padStart(2, `0`);
      const youbi = ["日", "月", "火", "水", "木", "金", "土"];
      const nowDay = youbi[now.getDay()];
      const nowHour = now.getHours().toString().padStart(2, `0`);
      const nowMin = now.getMinutes().toString().padStart(2, `0`);
      const nowSec = now.getSeconds().toString().padStart(2, `0`);
      setTimestamp(`${nowYY}-${nowMM}-${nowDD}(${nowDay}) ${nowHour}:${nowMin}:${nowSec}`);
    };

    // 初回レンダリング時に時刻を更新
    updateTime();

    // 1秒ごとに時刻を更新
    const intervalId = setInterval(updateTime, 1000);

    // コンポーネントがアンマウントされたときにclearIntervalを実行してクリーンアップ
    return () => clearInterval(intervalId);
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウントとアンマウント時にのみ効果が実行される

  return (
    <>
      <div>{timestamp}</div>
    </>
  );
}


// export default function nowDate() {

//     const now = new Date()
//     const nowYY = now.getFullYear()
//     const nowMM = (now.getMonth() + 1).toString().padStart(2, `0`)
//     const nowDD = now.getDate().toString().padStart(2, `0`)
//     const youbi = ["日", "月", "火", "水", "木", "金", "土"]
//     const nowDay = youbi[now.getDay()]
//     const nowHour = now.getHours().toString().padStart(2, `0`)
//     const nowMin = now.getMinutes().toString().padStart(2, `0`)
//     const nowSec = now.getSeconds().toString().padStart(2, `0`)
//     const timestamp = `${nowYY}-${nowMM}-${nowDD}(${nowDay}) ${nowHour}:${nowMin}:${nowSec}`

//     // const [update, setUpdate] = useState<boolean>(false)
//     // setUpdate(update?false:true)
//     return (
//         <>
//             <h2>現在時刻：{timestamp}</h2>
//         </>
//     )
// }


