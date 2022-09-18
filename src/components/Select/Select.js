import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledIcon id="chevron-down" size="24px" strokeWidth="2" />
      <StyledSelect
        value={value}
        onChange={onChange}
        displayedValue={displayedValue}
      >
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

const StyledSelect = styled.select`
  appearance: none;
  padding: 12px 16px;
  padding-right: 0px;
  font-size: 16px;
  line-height: 19px;
  color: currentColor;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  width: calc(${(p) => p.displayedValue.length}ex + 52px);
  cursor: pointer;
`;

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  width: fit-content;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-right: 10px;
  pointer-events: none;
`;

export default Select;
