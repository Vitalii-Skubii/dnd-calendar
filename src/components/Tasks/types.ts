import { ChangeEvent } from 'react';
import { ILabel, ITask } from '../Calendar/Calendar.types';
import { Holiday } from '../../hooks/useFetchPublicHolidays';

type MainTaskProps = {
  labels: ILabel[];
  taskInputData: ITask;
  editableTask: string;
  showTaskLabelsThumb: boolean;
  handleToggleTaskLabels: () => void;
  handleResetEditTask: () => void;
  handleEditTask: (id: string) => void;
  handleAddTaskLabels: (label: ILabel) => void;
  handleTaskInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type MainTaskLabelsProps = {
  taskInputData?: ITask;
  filteredLabelData?: ILabel[];
  handleAddTaskLabels: (label: ILabel) => void;
};

export interface TaskProps extends MainTaskProps {
  task: ITask;
  index: number;
  cellId: string;
  handleTaskSubmit: (id: string, cellId: string) => void;
  handleTaskInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ITasksCells extends MainTaskProps {
  id: string;
  index: number;
  value: number | null;
  tasks: ITask[];
  taskCell: string | number;
  publicHolidays: Holiday[];
  onAddTask: (id: string | number) => void;
  handleEditTaskSubmit: (id: string, cellId: string) => void;
  handleResetNewTask: () => void;
  handleNewTaskSubmit: () => void;
}

export interface TaskLabelItemProps extends MainTaskLabelsProps {
  item: ILabel;
}

export interface TaskLabelListProps extends MainTaskLabelsProps {
  labels: ILabel[];
}
