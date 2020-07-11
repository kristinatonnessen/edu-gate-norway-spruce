import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadingAction } from '../actions/loadingAction';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoriFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
  width: 100%;
`;

const ChildFlexWrapper = styled.label`
  width: 48%;
  display: inline-block;
`;

const Wrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #000000;

  @media (min-width: 768px){
    margin: auto;
    width: 350px;
  }
`;

const HeaderTitle = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  line-height: 24px;
  color: ${({ theme }) => theme.pureWhite};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px){
    font-size: 80px;
  }
`;

const InputWrapper = styled.label`
  width: 100%;
  display: inline-block;
`;

const InfoWrapper = styled.label`
  color: ${({ theme }) => theme.pureWhite};
  width: 100%;
  display: inline-block;
`;

const Input = styled.input`
  border-radius: 10px
  display: inline-block;
  font-size: 16px
  height: 31px;
  margin: 10px 0;
  padding: 0 10px;
  width: 100%;

  &[type=text], &[type=email], &[type=password], textarea {
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    margin: 5px 1px 3px 0px;
    border: 1px solid #fefefe;
  };
   
  &[type=text]:focus, &[type=email]:focus, &[type=button]:focus, &[type=password]:focus, textarea:focus {
    box-shadow: 0 0 5px rgba(0, 51, 51, 1);
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(0, 51, 51, 1);
  }
`;

const Button = styled.input`
  background: ${({ theme }) => theme.pureWhite};
  border-radius: 10px;
  border: 1px solid rgb(65,127,126);
  cursor: pointer;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  height: 34px;
  margin: 10px 0;
  width: 77px;
`;

function SignUp({ loading, loadingState }) {
  
  useEffect(() => {
      loading(true);
  }, []);


  return (
    <MainWrapper>
      <Wrapper>
        <HeaderTitle>Sign Up</HeaderTitle>
        <form>
          <InputWrapper>
            Email
            <Input type="email" />
          </InputWrapper>
          <HoriFlexWrapper>
            <ChildFlexWrapper>
              First Name
              <Input type="text" />
            </ChildFlexWrapper>
            <ChildFlexWrapper>
              Surname
              <Input type="text" />
            </ChildFlexWrapper>
          </HoriFlexWrapper>
          <InputWrapper>
            Password
            <Input type="password" />
          </InputWrapper>
          <InputWrapper>
            Confirm Password
            <Input type="password" />
          </InputWrapper>
          <Button type="submit" role="button" value="Submit" />
          <InfoWrapper>Back to <Link to="/login">login</Link></InfoWrapper>
        </form>
      </Wrapper>
    </MainWrapper>
  );
}

const mapStateToProps = (store) => {
    return {
        loadingState: store.loading
    }
}

const mapDispatchToProp = {
    loading: status => loadingAction(status)
}

export default connect(mapStateToProps, mapDispatchToProp)(SignUp);
