/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <BarWrapper>
        <Bar value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const sizeStyles = {
  small: `
    --height: 8px;
    --padding: 0px;
    --radius: 4px;
  `,
  medium: `
    --height: 12px;
    --padding: 0px;
    --radius: 4px;
  `,
  large: `
    --height: 16px;
    --padding: 4px;
    --radius: 8px;
  `,
};

const Wrapper = styled.div`
  ${(p) => sizeStyles[p.size]}
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--radius);
`;

const Bar = styled.div`
  width: ${(p) => p.value}%;
  height: var(--height);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
