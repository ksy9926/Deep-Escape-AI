import { useState } from 'react';
import {
  AdminWrap,
  AdminMenuWrap,
  AdminMenuText,
  AdminTitle,
  AdminSubTitle,
  AdminMenuButtonWrap,
  AdminMenuButton,
  Div,
} from 'styles/adminStyle';
import AdminTheme from 'components/AdminPage/AdminTheme';
import AdminVideo from 'components/AdminPage/AdminVideo';
import { MODIFY_FLAG } from 'constants/constants';

const AdminPage = () => {
  const [modifyFlag, setModifyFlag] = useState(MODIFY_FLAG.video);

  return (
    <AdminWrap>
      <AdminMenuWrap>
        <AdminMenuText>
          <AdminTitle>관리자 페이지</AdminTitle>
          <AdminSubTitle>영상 AI 제작 및 테마 관리</AdminSubTitle>
          <Div>방탈출 소개 영상과 어워즈 영상을 제작하고 테마를 등록해 정보를 수정해보세요.</Div>
        </AdminMenuText>
        <AdminMenuButtonWrap>
          <AdminMenuButton
            bgColor={modifyFlag === MODIFY_FLAG.video}
            onClick={() => setModifyFlag('video')}
          >
            영상 관리
          </AdminMenuButton>
          <AdminMenuButton
            bgColor={modifyFlag === MODIFY_FLAG.theme}
            onClick={() => setModifyFlag('theme')}
          >
            테마 관리
          </AdminMenuButton>
        </AdminMenuButtonWrap>
      </AdminMenuWrap>
      {modifyFlag === 'video' ? <AdminVideo /> : <AdminTheme />}
    </AdminWrap>
  );
};

export default AdminPage;
