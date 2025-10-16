export interface SDKOptions {
  token?: string;
  language?: string;
  theme?: string;
  onExpiredToken?: () => void;
}

export interface SDKContextType extends SDKOptions {
  // Bạn có thể thêm các trạng thái hoặc hàm liên quan đến SDK ở đây nếu cần
}
