// 任務列表組件：接收 tasks 陣列作為 props
'use client';
import Link from 'next/link';
export default function TasskList({ tasks, onDelete  }){
    return (
        // 使用 ul 元素創建任務列表，設置間距樣式
        <ul className="space-y-2">
            {/* 使用 map 函數遍歷所有任務並渲染 */}
            {tasks.map((task) => (
                <li
                    key={task.id} // 使用索引作為 key（在實際應用中最好使用唯一ID）
                    className="border p-2 rounded flex justify-between items-center" // 設置列表項的邊框和圓角樣式
                >
                    <Link 
                        href={`/task/${task.id}`}
                        className="text-blue-600 hover:underline"

                    >{task.title}</Link> {/* 顯示任務內容 */}
                    <button
                       className="text-red-500"
                       onClick={() => onDelete(index)}
                    >
                       Delete

                    </button>
                </li>

            ))}
        </ul>
    )
}