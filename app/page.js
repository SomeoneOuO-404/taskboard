'use client';

import Image from "next/image";
import { useState } from "react";
import TaskList from "../components/TaskList"

// 主頁面組件
export default function Home() {

// 使用 useState 設置狀態
const [tasks, setTasks] =  useState([]); // 儲存所有任務的陣列
const [newTask, setNewTask] = useState(''); // 儲存新任務的輸入值

// 添加新任務的函數
const addTask = () => {
  console.log("Before ", tasks); // 打印添加前的任務列表
  console.log("newTask ", newTask); // 打印新任務內容
  const updatedTasks = [...tasks, newTask]; // 使用展開運算符創建新的任務陣列
  setTasks(updatedTasks); // 更新任務狀態
  console.log("After ", updatedTasks); // 打印添加後的任務列表
  setNewTask(''); // 清空輸入框
};

  return (
   <main className="p-4">
    <h1 className="text-2x1 font-bold">Task Board</h1>

    {/* 輸入區域 */}
    <div className="flex gap-2 mb-4">
      <input
      className="border p-2 flex-1"
      placeholder="Enter a task!"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)} // 處理輸入變化
      />
      <button
        className="bg-blue-500 text-white px-4"
        onClick={addTask} // 點擊時添加新任務
      >
        Add
      </button>
    </div>

    {/* 渲染任務列表組件 */}
    <TaskList tasks={tasks} />
    
   </main>
  );
}
