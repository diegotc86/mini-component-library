import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    small: {
      "--padding": "4px",
      "--padding-left": "24px",
      "--icon-size": "16px",
      "--font-size": "14px",
      "--line-height": "16px",
    },
    large: {
      "--padding": "4px",
      "--padding-left": "36px",
      "--icon-size": "24px",
      "--font-size": "18px",
      "--line-height": "21px",
    },
  };

  return (
    <Wrapper style={SIZES[size]}>
      <Input placeholder={placeholder} width={width} />
      <Label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon id={icon} strokeWidth={2} size={size === "small" ? 16 : 24} />
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  line-height: var(--line-height);
`;

const Input = styled.input`
  padding: var(--padding);
  padding-left: var(--padding-left);
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  font-weight: 700;
  font-size: inherit;
  line-height: inherit;
  color: currentColor;

  width: ${(p) => p.width}px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 2px;
  width: min-content;
  height: min-content;
  margin: auto;
  pointer-events: none;

  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
