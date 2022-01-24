import {
  ShortcutWrap,
  ShortcutTitle,
  ShortcutImg,
  ShortcutDescription,
  Button,
  FlexDiv,
  FlexItemDiv,
  LeftMargin,
} from 'styles/mainStyle';
import { Fade, Zoom } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { message } from 'antd';

const Shortcut = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const shortcutHandler = (path: string) => {
    if (path === '/admin' && !user.admin) {
      message.warn({
        content: `관리자 계정만 접근할 수 있습니다.`,
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <ShortcutWrap>
      <FlexDiv>
        <FlexItemDiv>
          <LeftMargin>
            <Fade direction="down">
              <ShortcutTitle>테마</ShortcutTitle>
            </Fade>
            <ShortcutDescription>다양한 테마 정보에 대해 알아보세요.</ShortcutDescription>
            <Button onClick={() => shortcutHandler('/theme')}>테마 탭 바로가기</Button>
          </LeftMargin>
          <Zoom>
            <ShortcutImg src="escape" />
          </Zoom>
        </FlexItemDiv>
        <FlexItemDiv>
          <LeftMargin>
            <Fade direction="down">
              <ShortcutTitle>관리</ShortcutTitle>
            </Fade>
            <ShortcutDescription>영상 및 테마 정보를 관리할 수 있어요.</ShortcutDescription>
            <Button onClick={() => shortcutHandler('/admin')}>관리 탭 바로가기</Button>
          </LeftMargin>
          <Zoom>
            <ShortcutImg src="admin" />
          </Zoom>
        </FlexItemDiv>
      </FlexDiv>
    </ShortcutWrap>
  );
};

export default Shortcut;
