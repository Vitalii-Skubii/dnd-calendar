import { DraggableLocation } from 'react-beautiful-dnd';

export interface ICell {
  cellId: string;
  tasks?: ITask[];
}

export interface ITask {
  id: string;
  text: string;
  labels: ILabel[];
}

export interface ILabel {
  title: string;
  label: string;
}

export interface ILabelInputData {
  title: string;
  label: string;
}

export type DragDropProps = (
  source: DraggableLocation,
  destination: DraggableLocation
) => void;
