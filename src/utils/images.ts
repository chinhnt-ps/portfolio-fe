/**
 * Image paths helper
 * 
 * Có 2 cách sử dụng:
 * 1. Local images: Đặt ảnh trong public/images/projects/ và dùng getImagePath()
 * 2. External URLs: Dùng trực tiếp URL từ internet
 */

// Local images path helper
export const getImagePath = (category: string, filename: string): string => {
  return `/images/${category}/${filename}`;
};

// Project images - có thể dùng local hoặc external URLs
export const projectImages = {
  sapoGo: 'https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/function/chatmultichannel/ung-dung-chat-da-kenh-tap-trung.png?v=4',
  facebookShopping: 'https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/landingsite/ld-livefacebook-shopping/facebook-live-shopping.png',
  sapoMobile: 'https://play-lh.googleusercontent.com/R1OFvOA_kETo-oCy-hC1Zvc6_LdmSXfFgyhoAt4eCK4eYDNFrlJYfMqin8sU3INL3g=w240-h480-rw',
  hospital: '/images/projects/hospital.jpg', // Placeholder - có thể thay bằng URL thực tế
};

// Helper để get image URL cho project
export const getProjectImage = (projectKey: keyof typeof projectImages): string => {
  return projectImages[projectKey];
};

