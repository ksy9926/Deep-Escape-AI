import styled from 'styled-components';

// 어드민 공통
export const AdminWrap = styled.div`
  margin: 60px auto 0;
  max-width: 1130px;
`;

export const AdminMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 110px 0 50px;
`;

export const AdminMenuText = styled.div`
`

export const AdminTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 2.5rem;
  font-weight: 900;
`

export const AdminSubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`

// 관리 섹션
export const AdminMenuButtonWrap = styled.div`
`

export const AdminMenuButton = styled.button<{bgColor: boolean}>`
  border: none;
  padding: 10px 30px;
  background: ${props => props.bgColor ? '#ff3e3e' : '#ebebeb' };
  font-size: 1.1rem;
  color: ${props => props.bgColor ? '#fff' : '#000' };
  cursor: pointer;

  &:last-child {
    margin-left: 10px;
  }
`

export const AdminVideoWrap = styled.div`
  display: flex;
  margin-bottom: 80px;
`

export const AdminSectionWrap = styled.div`
  flex: 1;
  margin-right: 20px;
  &:last-child {
    margin: 0;
  }
`

export const AdminSectionTitle = styled.div`
  width: 100%;
  border: 1px solid #000;
  padding: 10px 0;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`

export const AdminTypeButton = styled.button<{bgColor: boolean}>`
  width: 100%;
  border: none;
  padding: 10px 0;
  margin-bottom: 10px;
  background: ${props => props.bgColor ? '#ff3e3e' : '#ebebeb' };
  font-size: 1.1rem;
  color: ${props => props.bgColor ? '#fff' : '#000' };
  cursor: pointer;
`

export const AdminVideoText = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.1rem;
`

export const AdminModifyButton = styled.button<{bgColor: boolean}>`
  width: 100%;
  border: none;
  padding: 10px 0;
  margin-bottom: 10px;
  background: ${props => props.bgColor ? '#ff3e3e' : '#ebebeb' };
  font-size: 1.1rem;
  color: ${props => props.bgColor ? '#fff' : '#000' };
  cursor: pointer;
`

export const MakeVideoWrap = styled.div`
  margin-bottom: 20px;
`

export const ModifyTextArea = styled.textarea`
  width: 100%;
  font-size: 1.1rem;
  height: 300px;
  resize: none;
  &:focus {
    border: none;
  }
`

export const SynthesizeButton = styled.button<{bgColor: boolean}>`
  width: 100%;
  border: none;
  padding: 10px 0;
  margin-bottom: 10px;
  background: ${props => props.bgColor ? '#ff3e3e' : '#ebebeb' };
  font-size: 1.1rem;
  color: ${props => props.bgColor ? '#fff' : '#000' };
  cursor: pointer;
`

export const CompleteButton = styled.button<{bgColor: boolean}>`
  width: 100%;
  border: none;
  padding: 10px 0;
  margin-bottom: 10px;
  background: ${props => props.bgColor ? '#ff3e3e' : '#ebebeb' };
  font-size: 1.1rem;
  color: ${props => props.bgColor ? '#fff' : '#000' };
  cursor: pointer;
`

export const ProgressBackground = styled.div`
  position: relative;
  width: 100%;
  height: 15px;
  border-radius: 15px;
  margin-bottom: 20px;
  background: #ebebeb;
`

export const Progress = styled.div<{progress: number | string}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.progress}%;
  height: 15px;
  border-radius: 15px;
  background: #1890ff;
`

export const AdminThemeInput = styled.input`
  width: 100%; 
  border: none; 
  padding: 20px;
  background: #ebebeb; 
`

export const Div = styled.div``

export const OnDevelop = styled.div`
  width: 100%;
  height: 400px;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`