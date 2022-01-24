import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { getUserinfoAsync, resetUserinfoAsync } from 'redux/actions/userAction';
import { HeaderWrap, HeaderInnerWrap, LinkNav, LinkBold, Div } from 'styles/headerStyle';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUserinfoAsync.request());
  }, []);

  const logout = () => {
    if (!sessionStorage.getItem('accessToken')) {
      return;
    }

    sessionStorage.removeItem('accessToken');
    message.success({
      content: `${user.nickname}님 안녕히 가세요!`,
      className: 'custom-class',
      style: {
        marginTop: '10vh',
      },
    });
    dispatch(resetUserinfoAsync.request());
  };

  const adminHandler = (path: string) => {
    if (!user.admin) {
      message.warn({
        content: `관리자 계정만 접근할 수 있습니다.`,
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    } else {
      routeChange(path);
    }
  };

  const routeChange = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <Div>
          <LinkBold onClick={() => routeChange('/')}>DEEPESCAPE AI</LinkBold>
        </Div>
        <Div>
          <LinkNav onClick={() => routeChange('/')} style={{ padding: 0 }}>
            서비스 소개
          </LinkNav>
          <LinkNav onClick={() => routeChange('/theme')}>테마정보</LinkNav>
          <LinkNav onClick={() => adminHandler('/admin')}>관리</LinkNav>
          {user.nickname ? (
            <LinkNav
              onClick={() => {
                routeChange('/');
                logout();
              }}
            >
              로그아웃
            </LinkNav>
          ) : (
            <LinkNav onClick={() => routeChange('/login')}>로그인</LinkNav>
          )}
        </Div>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

export default Header;
