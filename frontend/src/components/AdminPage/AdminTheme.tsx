import {
  AdminVideoWrap,
  AdminSectionWrap,
  AdminSectionTitle,
  AdminTypeButton,
  OnDevelop,
} from 'styles/adminStyle';

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
        <OnDevelop>준비중입니다.</OnDevelop>
      </AdminSectionWrap>
      <AdminSectionWrap>
        <AdminSectionTitle>이미지</AdminSectionTitle>
        <OnDevelop>준비중입니다.</OnDevelop>
      </AdminSectionWrap>
      <AdminSectionWrap>
        <AdminSectionTitle>수정</AdminSectionTitle>
        <OnDevelop>준비중입니다.</OnDevelop>
      </AdminSectionWrap>
    </AdminVideoWrap>
  );
};

export default AdminTheme;
