import React, { ChangeEvent, useEffect, useState } from 'react';
import { DragDropProps, ICell, ILabel, ITask } from './Calendar.types';
import { DropResult } from 'react-beautiful-dnd';
import { v4 } from 'uuid';
import { INIT_LABELS } from '../../constants';
import { downloadJson } from '../../helpers/fileHelper';
import useFetchPublicHolidays from '../../hooks/useFetchPublicHolidays';
import { COLORS } from '../../styles/colors';

// const initialTasks = [
//   {
//     cellId: '20240304',
//     tasks: [
//       { text: 'axe', id: '1', labels: [] },
//       { text: 'axa', id: '6', labels: [] },
//     ],
//   },
//   { cellId: '20240306', tasks: [{ text: 'cx', id: '3', labels: [] }] },
//   { cellId: '20240305', tasks: [{ text: 'b', id: '2', labels: [] }] },
//   { cellId: '20240307', tasks: [{ text: 'd', id: '4', labels: [] }] },
//   { cellId: '20240308', tasks: [{ text: 'e', id: '5', labels: [] }] },
// ];

export const useCalendarState = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState<number>(
    currentDate.getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    currentDate.getFullYear()
  );
  const [data, setData] = useState<
    { id: string; value: number | null; tasks: ITask[] }[]
  >([]);
  const [tasks, setTasks] = useState<ICell[]>([]);
  const [labels, setLabels] = useState<ILabel[]>(INIT_LABELS);

  const initLabel = { title: '', label: `${COLORS.label}` };
  const initTask = {
    id: v4(),
    text: '',
    labels: [{ title: labels[0].title, label: labels[0].label }],
  };

  const [filteredLables, setFilteredLabels] = useState<ILabel[]>([]);
  const [showLabelsThumb, setShowLabelsThumb] = useState(false);
  const [showHeaderLabelsThumb, setShowHeaderLabelsThumb] = useState(false);
  const [showNewLabel, setShowNewLabel] = useState(false);
  const [labelInputData, setLabelInputData] = useState(initLabel);
  const [editableLabel, setEditableLabel] = useState('');

  const [searchedTasks, setSearchedTasks] = useState('');
  const [editableTask, setEditableTask] = useState('');
  const [taskCell, setTaskCell] = useState('');
  const [showTaskLabelsThumb, setShowTaskLabelsThumb] = useState(false);
  const [taskInputData, setTaskInputData] = useState(initTask);
  const {publicHolidays} = useFetchPublicHolidays(currentYear)

  const filteredTasksByText = tasks.map((cell) => ({
    ...cell,
    tasks: cell.tasks?.filter((task) =>
        task.text.toLowerCase().includes(searchedTasks.toLowerCase())
    ),
}));

const hasExactMatchingLabels = (task: ITask) =>
    filteredLables.every((filteredLabel) =>
        task.labels.some((taskLabel) =>
            taskLabel.title === filteredLabel.title
        )
    );

const filteredTasksWithMatchingLabels = filteredTasksByText.map((cell) => ({
    ...cell,
    tasks: cell.tasks?.filter(hasExactMatchingLabels),
}));

const filteredTasks =
    filteredTasksWithMatchingLabels.filter((cell) => cell.tasks && cell.tasks.length);

  const handleToggleTaskLabels = () => {
    setShowTaskLabelsThumb((i) => !i);
  };

  const handleToggleHeaderLabels = () => {
    setShowHeaderLabelsThumb((i) => !i);
  };

  const handleInputSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedTasks(e.target.value);
  };

  const handleAddNewTask = (id) => {
    setTaskCell(id);
    setTaskInputData(initTask);
  };

  const handleEditTask = (id: string) => {
    setEditableTask(id);

    const editableTask = tasks
      .flatMap((cell) => cell.tasks)
      .find((task) => task?.id === id);

    setTaskInputData(
      editableTask
        ? {
            id: editableTask.id,
            text: editableTask.text,
            labels: editableTask.labels,
          }
        : initTask
    );
  };

  const handleResetNewTask = () => {
    setTaskCell('');
    setTaskInputData(initTask);
  };

  const handleNewTaskSubmit = () => {
    const existingCell = tasks.find((task) => task.cellId === taskCell);

    if (existingCell) {
      const updatedTasks = tasks.map((task) => {
        if (task.cellId === taskCell) {
          const updatedTask = {
            ...task,
            tasks: task.tasks ? [...task.tasks] : [],
          };
          updatedTask.tasks.push(taskInputData);
          return updatedTask;
        }
        return task;
      });

      setTasks(updatedTasks);
    } else {
      setTasks([
        ...tasks,
        {
          cellId: taskCell,
          tasks: [taskInputData],
        },
      ]);
    }
    handleResetNewTask();
  };

  const handleResetEditTask = () => {
    setEditableTask('');
    setTaskInputData(initTask);
  };

  const handleEditTaskSubmit = (id: string, cellId: string) => {
    const updatedCells = tasks.map((cell) => {
      if (cell.cellId === cellId) {
        const updatedTasks = cell.tasks?.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              text: taskInputData.text,
              labels: taskInputData.labels,
            };
          }
          return task;
        });
        return {
          ...cell,
          tasks: updatedTasks,
        };
      }
      return cell;
    });
    setTasks(updatedCells);
    handleResetEditTask();
  };

  const handleTaskInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInputData({ ...taskInputData, text: e.target.value });
  };

  const handleAddTaskLabels = (label: ILabel) => {
    const index = taskInputData.labels.findIndex(
      (item) => item.title === label.title && item.label === label.label
    );

    if (index === -1) {
      setTaskInputData((prevData) => ({
        ...prevData,
        labels: [...prevData.labels, label],
      }));
    } else {
      setTaskInputData((prevData) => ({
        ...prevData,
        labels: prevData.labels.filter((_, idx) => idx !== index),
      }));
    }
  };

  const handleAddFilteredLabels = (label: ILabel) => {
    const index = filteredLables.findIndex(
      (item) => item.title === label.title && item.label === label.label
    );

    if (index === -1) {
      setFilteredLabels((prevData) => [...prevData, label]);
    } else {
      setFilteredLabels((prevData) =>
        prevData.filter((_, idx) => idx !== index)
      );
    }
  };

  //Files Block

  const handleDownloadJson = () => {
    downloadJson(tasks, `${Date.now()}data.json`);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (!content) return;
      const parsedData = JSON.parse(content);
      setTasks(parsedData);
    };

    reader.readAsText(file);
  };

  const handleFileUploadClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.click();
  };

  //Label Block

  const handleToggleLabels = () => {
    setShowLabelsThumb((i) => !i);
  };

  const handleAddNewLabel = () => {
    setShowNewLabel(true);
  };

  const handleLabelInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setLabelInputData({ ...labelInputData, [name]: value });
  };

  const handleResetNewLabel = () => {
    setShowNewLabel(false);
    setLabelInputData(initLabel);
  };

  const handleNewLableSubmit = () => {
    setLabels([...labels, labelInputData]);
    handleResetNewLabel();
  };

  const handleResetEditLabel = () => {
    setEditableLabel('');
    setLabelInputData(initLabel);
  };

  const handleEditLabel = (id: string) => {
    setEditableLabel(id);
    setLabelInputData(
      labels.find((item) => item.title === id) || { title: '', label: '' }
    );
  };

  const handleEditLabelSubmit = () => {
    const updatedLabels = labels.map((item) => {
      if (item.title === editableLabel) {
        return labelInputData;
      } else {
        return item;
      }
    });
    setLabels(updatedLabels);
    handleResetEditLabel();
  };
  //Calendar Block
  
  const handleGenerateCalendarData = () => {
    const getDaysInMonth = (month: number, year: number): number => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number): number => {
        return new Date(year, month, 1).getDay();
    };

    const pad = (num: number): string => num.toString().padStart(2, '0');

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
    const calendarData: { id: string; value: number | null; tasks: ITask[] }[] = [];

    const previousMonthDays = getDaysInMonth(
        currentMonth === 0 ? 11 : currentMonth - 1,
        currentMonth === 0 ? currentYear - 1 : currentYear
    );

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        const id = `${currentYear}${pad(currentMonth)}${pad(previousMonthDays - i)}`;
        const task = filteredTasks.find((task) => task.cellId === id);
        calendarData.push({
            id,
            value: previousMonthDays - i,
            tasks: task?.tasks ?? [],
        });
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const id = `${currentYear}${pad(currentMonth + 1)}${pad(day)}`;
        const task = filteredTasks.find((task) => task.cellId === id);
        calendarData.push({ id, value: day, tasks: task?.tasks ?? [] });
    }

    const totalCells = Math.ceil((daysInMonth + firstDayOfMonth) / 7) * 7;
    const nextMonthDays = totalCells - calendarData.length;
    for (let i = 1; i <= nextMonthDays; i++) {
        const id = `${currentYear}${pad(currentMonth + 2)}${pad(i)}`;
        const task = filteredTasks.find((task) => task.cellId === id);
        calendarData.push({ id, value: i, tasks: task?.tasks ?? [] });
    }
    setData(calendarData);
};

  const handlePreviousYear = () => {
    setCurrentYear(currentYear - 1);
  };
  const handlePreviousMonth = () => setCurrentMonth(currentMonth - 1);
  const handleNextMonth = () => setCurrentMonth(currentMonth + 1);
  const handleNextYear = () => setCurrentYear(currentYear + 1);

  const moveTaskSameCell: DragDropProps = (source, destination) => {
    setData((prev) => {
      const updated = [...prev];
      const [{ tasks }] = updated.filter(({ id }) => id === source.droppableId);
      const [removed] = tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, removed);
      return updated;
    });
    setTasks((prev) => {
      const updated = [...prev];
      const [{ tasks }] = updated.filter(
        ({ cellId }) => cellId === source.droppableId
      );
      let removed: ITask | undefined;
      if (tasks) {
        [removed] = tasks.splice(source.index, 1);
      }
      if (removed && tasks) {
        tasks.splice(destination.index, 0, removed);
      }
      return updated;
    });
  };

  const moveTaskDifferentCell: DragDropProps = (source, destination) => {
    setData((prev) => {
      const updated = [...prev];
      const [sourceCell] = updated.filter(
        ({ id }) => id === source.droppableId
      );
      const [destinationCell] = updated.filter(
        ({ id }) => id === destination.droppableId
      );

      const sourceTask = sourceCell.tasks;
      const destinationTask = destinationCell.tasks;
      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);
      return updated;
    });
    setTasks((prev) => {
      let updated = [...prev];
      const [sourceCell] = updated.filter(
        ({ cellId }) => cellId === source.droppableId
      );
      let [destinationCell] = updated.filter(
        ({ cellId }) => cellId === destination.droppableId
      );
      if (!destinationCell) {
        destinationCell = {
          cellId: destination.droppableId,
          tasks: [],
        };
        updated = [...updated, destinationCell];
      }
      const sourceTask = sourceCell.tasks;
      const destinationTask = destinationCell.tasks;
      let removed: ITask | undefined;
      if (sourceTask) {
        [removed] = sourceTask.splice(source.index, 1);
      }
      if (removed && destinationTask) {
        destinationTask.splice(destination.index, 0, removed);
      }
      return updated;
    });
  };

  const handleTaskMove: DragDropProps = (source, destination) => {
    if (source.droppableId !== destination.droppableId) {
      moveTaskDifferentCell(source, destination);
    } else {
      moveTaskSameCell(source, destination);
    }
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    handleTaskMove(source, destination);
  };

  useEffect(() => {
    handleGenerateCalendarData();
  }, [currentMonth, currentYear, searchedTasks, tasks, filteredLables]);

  return {
    data,
    labels,
    publicHolidays,
    currentMonth,
    currentYear,
    searchedTasks,
    taskCell,
    editableTask,
     taskInputData,
    showLabelsThumb,
    showTaskLabelsThumb,
    showNewLabel,
    labelInputData,
    editableLabel,
    showHeaderLabelsThumb,
    filteredLables,
    handleAddFilteredLabels,
    handleFileUploadClick,
    handleFileUpload,
    handleDownloadJson,
    handleToggleHeaderLabels,
    handleEditTaskSubmit,
    handleNewTaskSubmit,
    handleResetEditTask,
    handleResetNewTask,
    handleAddTaskLabels,
    handleToggleTaskLabels,
    handleEditLabelSubmit,
    handleResetEditLabel,
    handleEditLabel,
    handleResetNewLabel,
    handleLabelInputChange,
    handleNewLableSubmit,
    handleAddNewLabel,
    handleToggleLabels,
    handleEditTask,
    handleTaskInputChange,
    handleAddNewTask,
    handleInputSearchChange,
    handleDragEnd,
    handlePreviousYear,
    handlePreviousMonth,
    handleNextMonth,
    handleNextYear,
  };
};
