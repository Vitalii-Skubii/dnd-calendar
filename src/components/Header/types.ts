import { ChangeEvent } from 'react';
import { ILabel } from '../Calendar/Calendar.types';
import { LabelListProps } from '../Labels/types';

export interface HeaderProps extends LabelListProps {
  searchedTasks: string;
  showTaskLabelsThumb: boolean;
  showLabelsThumb: boolean;
  filteredLables: ILabel[];
  currentMonth: number;
  currentYear: number;
  handleAddFilteredLabels: (label: ILabel) => void;
  handleInputSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePreviousYear: () => void;
  handlePreviousMonth: () => void;
  handleNextMonth: () => void;
  handleNextYear: () => void;
  onToggleLabels: () => void;
  handleToggleLabels: () => void;
  handleDownloadJson: () => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUploadClick: () => void;
}
