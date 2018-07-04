import React from 'react';
import styled from 'styled-components';

export default function FormInput({ value, label, onChange }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper>
        <Input
          value={value}
          onChangeText={(text) => onChange(label, text)}
          underlineColorAndroid="rgba(255, 255, 255, 0)"
          selectionColor="#303030"
        />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-color: #999;
`;
const Input = styled.TextInput`
  flex: 1;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  color: #4c90ff;
`;
const InputWrapper = styled.View`
  flex: 1;
`;
const Label = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: #202020;
  margin-right: 10px;
`;
