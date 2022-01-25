import styled from 'styled-components';

export const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
  margin-bottom: 100px;
  background: center / cover no-repeat url("images/login.jpg");
`;

export const LoginInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex: 1;

  max-width: 1130px;
  padding: 0 50px;
`;

export const LoginText = styled.div`
  font-size: 3rem;
  font-weight: 500;
  color: white;
`;

export const LoginForm = styled.div`
  padding: 40px 40px 40px 20px;
  background: #fff;
`