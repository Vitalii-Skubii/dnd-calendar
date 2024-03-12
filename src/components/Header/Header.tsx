import React, {  FC } from 'react';
import { HeaderStyles as Styled } from './Header.styles';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { LabelToggler } from '../Labels/LabelToggler/LabelToggler';
import { LabelPicker } from '../Labels/LabelPicker/LabelPicker';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = (props) => {
  const {
    searchedTasks,
    labels,
    showTaskLabelsThumb,
    showLabelsThumb,
    showNewLabel,
    editableLabel,
    labelInputData,
    filteredLables,
    currentMonth,
    currentYear,
    handleAddFilteredLabels,
    handleFileUploadClick,
    handleEditLabelSubmit,
    handleEditLabel,
    handleResetEditLabel,
    handleResetNewLabel,
    handleNewLableSubmit,
    handleLabelInputChange,
    handleAddNewLabel,
    handleToggleLabels,
    handleInputSearchChange,
    handlePreviousYear,
    handlePreviousMonth,
    handleNextMonth,
    handleNextYear,
    handleDownloadJson,
    handleFileUpload,
    onToggleLabels,
  } = props;
  return (
    <Styled.Wrapper>
      <Styled.DateControls>
        <Button
          icon="arrow_back_ios"
          onClick={handlePreviousMonth}
          disabled={false}
        />
        Month
        <Button
          icon="arrow_forward_ios"
          onClick={handleNextMonth}
          disabled={false}
        />
        <Button
          icon="arrow_back_ios"
          onClick={handlePreviousYear}
          disabled={false}
        />
        Year
        <Button
          icon="arrow_forward_ios"
          onClick={handleNextYear}
          disabled={false}
        />
      </Styled.DateControls>

      <Input
        name="search"
        type="text"
        value={searchedTasks}
        onChange={handleInputSearchChange}
      />
      <Styled.Date>{`${currentMonth + 1}/${currentYear}`}</Styled.Date>
      <LabelToggler
        handleAddTaskLabels={handleAddFilteredLabels}
        labels={labels}
        onToggleLabels={onToggleLabels}
        showTaskLabelsThumb={showTaskLabelsThumb}
        filteredLabels={filteredLables}
        isIconed={true}
      />
      <LabelPicker
        isIconed={true}
        onToggleLabels={handleToggleLabels}
        show={showLabelsThumb}
        labels={labels}
        handleAddNewLabel={handleAddNewLabel}
        showNewLabel={showNewLabel}
        labelInputData={labelInputData}
        handleLabelInputChange={handleLabelInputChange}
        handleNewLableSubmit={handleNewLableSubmit}
        handleResetNewLabel={handleResetNewLabel}
        handleResetEditLabel={handleResetEditLabel}
        handleEditLabel={handleEditLabel}
        editableLabel={editableLabel}
        handleEditLabelSubmit={handleEditLabelSubmit}
      />
      <Button icon="download" onClick={handleDownloadJson} disabled={false} />
      <Input
        name="file"
        value=""
        type="file"
        accept=".json"
        id="fileInput"
        display="none"
        onChange={handleFileUpload}
      />
      <Button icon="upload" onClick={handleFileUploadClick} disabled={false} />
    </Styled.Wrapper>
  );
};
