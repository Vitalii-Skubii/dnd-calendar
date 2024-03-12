import { ChangeEvent } from 'react';
import { ILabel, ILabelInputData } from '../Calendar/Calendar.types';

type LabelMainProps = {
  labels: ILabel[];
  labelInputData: ILabelInputData;
  editableLabel: string;
  handleEditLabelSubmit: () => void;
  handleLabelInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export interface LabelItemProps extends LabelMainProps {
  item: ILabel;
  handleResetEditLabel: () => void;
  handleEditLabel: (id: string) => void;
}

export interface LabelListProps extends LabelMainProps {
  showNewLabel: boolean;
  handleAddNewLabel: () => void;
  handleNewLableSubmit: () => void;
  handleResetNewLabel: () => void;
  handleResetEditLabel: () => void;
  handleEditLabel: (id: string) => void;
}

export interface ILabelPicker extends LabelMainProps, LabelListProps {
  isIconed?: boolean;
  show: boolean;
  onToggleLabels: () => void;
}

export interface LabelTogglerProps {
  isIconed?: boolean;
  filteredLabels: ILabel[];
  showTaskLabelsThumb: boolean;
  labels: ILabel[];
  onToggleLabels: () => void;
  handleAddTaskLabels: (label: ILabel) => void;
}
