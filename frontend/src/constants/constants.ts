// AI STUIDOS 입력용 정보
export const CLIENT = {
  appId: "aistudios.com",
  uuid: "6443234b-77d5-4013-bfd6-bb9399f317d9",
  clientHostname: "aistudios.com",
  platform: 'web',
  sdk_v: '1.0',
  isClientToken: true,
};

// AI 영상 종류
export const VIDEO_TYPE = {
  introduction: 'introduction',
  awards: 'awards'
}

// API 주소 목록

export const API = 'http://ec2-3-36-85-61.ap-northeast-2.compute.amazonaws.com:8080'
// export const API = 'http://localhost:8080';
export const STUDIO_API='http://ec2-3-36-85-61.ap-northeast-2.compute.amazonaws.com:3000/api/odin'
// export const STUDIO_API='http://localhost:3000/api/odin'

// 어드민 수정 플래그
export const MODIFY_FLAG = {
  video: 'video',
  theme: 'theme'
}