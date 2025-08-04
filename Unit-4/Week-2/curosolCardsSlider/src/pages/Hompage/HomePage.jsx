import React, { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

const HomePage = () => {
  const toast = useToast();

  const totalItems = 6;
  const [currentPosition, setCurrentPosition] = useState(0);
  const [tasks, setTasks] = useState([
    { name: "Task 1", status: 'not-started' },
    { name: "Task 2", status: 'not-started' },
    { name: "Task 3", status: 'not-started' },
    { name: "Task 4", status: 'not-started' },
    { name: "Task 5", status: 'not-started' },
    { name: "Task 6", status: 'not-started' },
  ]);
  const [userTasks, setUserTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [selectedItem, setSelectedItem] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    if (userTasks.length > 0) {
      setTasks(userTasks);
    }
  }, [userTasks]);

  useEffect(() => {
    updateCarouselPosition();
  }, [currentPosition, tasks]);

  const updateCarouselPosition = () => {
    const newItems = tasks.map((task, index) => {
      const angle = (360 / totalItems) * (index - currentPosition);
      return { ...task, angle };
    });
    setTasks(newItems);
  };

  const handleClickTask = (task) => {
    setSelectedItem(task);
    setPopupVisible(true);
    setSelectedStatus(task.status);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleSetStatus = () => {
    if (selectedItem) {
      const updatedTasks = tasks.map(task => 
        task.name === selectedItem.name ? { ...task, status: selectedStatus } : task
      );
      setTasks(updatedTasks);
      setPopupVisible(false);
      saveTasksToLocalStorage(updatedTasks);
    }
  };

  const handleSubmitTask = () => {
    const taskInput = document.getElementById('task-input').value.trim();
    if (taskInput !== "") {
      const updatedTasks = [...tasks, { name: taskInput, status: 'not-started' }];
      setTasks(updatedTasks);
      document.getElementById('task-input').value = "";
      saveTasksToLocalStorage(updatedTasks);
    } else {
      alert("Please enter a task.");
    }
  };

  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'not-started':
        return '#F61C24';
      case 'pending':
        return '#F5BF0F';
      case 'complete':
        return '#5CB855';
      default:
        return 'gray';
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-around sm:justify-center mt-12 relative sm:mt-12">
        <div className="relative flex justify-center items-center w-[280px] sm:w-[300px] md:w-[350px] h-[280px] sm:h-[300px] md:h-[350px]">
          {/* Carousel Container */}
          <div id="carousel" className="relative top-[100px] w-full h-full flex justify-center items-center">
            {/* Carousel items */}
            {tasks.map((task, index) => (
              <div
                key={index}
                className="carousel-image text-black shadow-lg absolute flex justify-center items-center border w-[100px] sm:w-[130px] md:w-[150px] h-[100px] sm:h-[130px] md:h-[150px] rounded-full text-center cursor-pointer"
                style={{
                  transform: `rotate(${task.angle}deg) translate(150px) rotate(-${task.angle}deg)`,
                  backgroundColor: getStatusColor(task.status),
                }}
                onClick={() => handleClickTask(task)}
              >
                {task.name}
              </div>
            ))}
          </div>
        </div>

        {/* Task Input Fields */}
        <div className="text-center flex flex-col items-center justify-center mt-12 sm:mt-32 sm:w-[300px] md:w-[350px]">
          <h3 className="text-3xl font-semibold mt-10">Define Tasks</h3>
          <div className="task-inputs mb-4 w-full">
            <label htmlFor="task-input" className="block text-xl mb-2">Enter Task</label>
            <input
              type="text"
              id="task-input"
              className="p-2 rounded text-black text-center w-3/5 border outline-1 outline-yellow"
              placeholder="Enter a task"
            />
          </div>
          <button
            id="submit-task"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 w-1/2 sm:w-auto"
            onClick={handleSubmitTask}
          >
            Submit Task
          </button>
        </div>
      </div>

      {/* Popup to set the status */}
      {popupVisible && selectedItem && (
        <div className="popup absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 shadow-lg p-2 rounded gap-4 space-y-6 w-2/5">
          <h2>{`Task: ${selectedItem.name}`}</h2>
          <div className="flex justify-around">
            <label>
              <input
                type="radio"
                name="status"
                id="status-not-started"
                checked={selectedStatus === 'not-started'}
                onChange={() => setSelectedStatus('not-started')}
                className="text-red-400"
              />
              Not Started
            </label>
            <label>
              <input
                type="radio"
                name="status"
                id="status-pending"
                checked={selectedStatus === 'pending'}
                onChange={() => setSelectedStatus('pending')}
                className="text-yellow-400 ml-2"
              />
              Pending
            </label>
            <label>
              <input
                type="radio"
                name="status"
                id="status-complete"
                checked={selectedStatus === 'complete'}
                onChange={() => setSelectedStatus('complete')}
                className="text-green-400 ml-2"
              />
              Complete
            </label>
          </div>
          <button className="border mr-10 bg-blue-700 text-white p-2 rounded-md" onClick={handleSetStatus}>Set Status</button>
          <button className="border mr-10 bg-gray-300 text-black p-2 rounded-md" onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
