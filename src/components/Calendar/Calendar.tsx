import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { TasksCells } from '../Tasks/TasksCells/TasksCells';
import { useCalendarState } from './Calendar.state';
import { Header } from '../Header/Header';
import { WEEK_DAYS } from '../../constants';
import { CalendarStyles as Styled } from './Calendar.styles';

function Calendar() {
  const {
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
    handleResetEditTask,
    handleNewTaskSubmit,
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
    handleNextMonth,
    handleNextYear,
    handlePreviousMonth,
    handlePreviousYear,
  } = useCalendarState();

  return (
    <Styled.Container>
      <Header
        handleNextMonth={handleNextMonth}
        handleNextYear={handleNextYear}
        handlePreviousMonth={handlePreviousMonth}
        handlePreviousYear={handlePreviousYear}
        searchedTasks={searchedTasks}
        handleInputSearchChange={handleInputSearchChange}
        labels={labels}
        onToggleLabels={handleToggleHeaderLabels}
        showTaskLabelsThumb={showHeaderLabelsThumb}
        showLabelsThumb={showLabelsThumb}
        showNewLabel={showNewLabel}
        labelInputData={labelInputData}
        editableLabel={editableLabel}
        filteredLables={filteredLables}
        currentMonth={currentMonth}
        currentYear={currentYear}
        handleAddFilteredLabels={handleAddFilteredLabels}
        handleEditLabelSubmit={handleEditLabelSubmit}
        handleResetEditLabel={handleResetEditLabel}
        handleEditLabel={handleEditLabel}
        handleResetNewLabel={handleResetNewLabel}
        handleLabelInputChange={handleLabelInputChange}
        handleNewLableSubmit={handleNewLableSubmit}
        handleAddNewLabel={handleAddNewLabel}
        handleToggleLabels={handleToggleLabels}
        handleDownloadJson={handleDownloadJson}
        handleFileUpload={handleFileUpload}
        handleFileUploadClick={handleFileUploadClick}
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Styled.Calendar>
          <Styled.Week>
            {WEEK_DAYS.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </Styled.Week>

          <Styled.Days>
            {data.map((day, index) => (
              <TasksCells
                key={day.id}
                index={index}
                value={day.value}
                id={day.id}
                tasks={day.tasks}
                publicHolidays={publicHolidays}
                showTaskLabelsThumb={showTaskLabelsThumb}
                onAddTask={handleAddNewTask}
                taskCell={taskCell}
                editableTask={editableTask}
                handleResetEditTask={handleResetEditTask}
                handleTaskInputChange={handleTaskInputChange}
                handleEditTask={handleEditTask}
                handleToggleTaskLabels={handleToggleTaskLabels}
                handleAddTaskLabels={handleAddTaskLabels}
                handleResetNewTask={handleResetNewTask}
                labels={labels}
                taskInputData={taskInputData}
                handleNewTaskSubmit={handleNewTaskSubmit}
                handleEditTaskSubmit={handleEditTaskSubmit}
              />
            ))}
          </Styled.Days>
        </Styled.Calendar>
      </DragDropContext>
    </Styled.Container>
  );
}
export default Calendar;
