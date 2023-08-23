import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const FormAddContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled(Field)`
  border: 0;
  outline: 1px solid #4e0963;
  border-radius: 3px;
  min-width: 130px;
  height: 24px;
  margin: 8px;
  padding-left: 5px;
`;

export const Label = styled.label`
  display: block;
  color: #4e0963;
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonAddContact = styled.button`
  background: #d93bd6;
  border: 1px solid #d93bd6;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #fce803;
  display: inline-block;
  outline: 0;
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

  &:hover,
  &:active {
    background-color: initial;
    color: #4e0963;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const ErrorMessageWrapper = styled(ErrorMessage)`
  color: red;
  font-weight: 500;
`;
