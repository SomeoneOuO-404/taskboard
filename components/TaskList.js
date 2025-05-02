// 任務列表組件：接收 tasks 陣列作為 props
export default function TasskList({ tasks }){
    return (
        // 使用 ul 元素創建任務列表，設置間距樣式
        <ul className="space-y-2">
            {/* 使用 map 函數遍歷所有任務並渲染 */}
            {tasks.map((task, index) => (
                <li
                    key={index} // 使用索引作為 key（在實際應用中最好使用唯一ID）
                    className="border p-2 rounder" // 設置列表項的邊框和圓角樣式
                >
                    {task} {/* 顯示任務內容 */}
                </li>

            ))}
        </ul>
    )
}