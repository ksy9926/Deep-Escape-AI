import {
  AdminVideoWrap,
  AdminSectionWrap,
  AdminSectionTitle,
  AdminTypeButton,
  AdminThemeInput,
} from 'styles/adminStyle';
import { message } from 'antd';

const AdminTheme = () => {
  return (
    <AdminVideoWrap>
      <AdminSectionWrap>
        <AdminSectionTitle>어워드</AdminSectionTitle>
        <AdminTypeButton bgColor={true}>올해의 테마</AdminTypeButton>
        <AdminTypeButton bgColor={false}>올해의 공포 테마</AdminTypeButton>
        <AdminTypeButton bgColor={false}>올해의 감성 테마</AdminTypeButton>
      </AdminSectionWrap>
      <AdminSectionWrap>
        <AdminSectionTitle>테마 정보</AdminSectionTitle>
        테마명: <AdminThemeInput />
        매장명: <AdminThemeInput />
        지역 <AdminThemeInput />
      </AdminSectionWrap>
      <AdminSectionWrap>
        <AdminSectionTitle>이미지</AdminSectionTitle>
      </AdminSectionWrap>
      <AdminSectionWrap>
        <AdminSectionTitle>수정</AdminSectionTitle>
      </AdminSectionWrap>
    </AdminVideoWrap>
  );
};

export default AdminTheme;
