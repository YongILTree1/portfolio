import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const MyButton = ({ onClick, type, label, disabled }) => {
  return (
    <StyledButtonBox>
      <button className={`button-${type}`} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </StyledButtonBox>
  );
};

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .button-primary {
    color: #fff;
    border: none;
    border-radius: 10px;
    background-color: #0091ff;

    height: 3.25rem;
    max-width: 14rem;
    width: 100%;

    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;

    &:hover{
      filter: brightness(0.83);
    }
  }
`;

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
};

MyButton.defaultProps = {
  type: "primary", // 기본 버튼 타입은 primary
  disabled: false, // 기본으로 활성화된 상태
};
export default MyButton;
