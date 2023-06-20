export const validateEmail = (email?: string) => {
  if (!email) return false;
  // Kiểm tra format có @ và tên miền
  if (!/@/.test(email)) {
    return false;
  }

  // Tách địa chỉ email thành tên miền và chuỗi đằng trước @
  const [localPart, domain] = email.split('@');

  // Kiểm tra chuỗi đằng trước @
  // Phải chứa các chữ cái, số, dấu chấm và dấu gạch dưới
  // Không bắt đầu hoặc kết thúc bằng dấu chấm
  // Không được phép có các dấu chấm liên tiếp
  const localPartRegex = /^[A-Za-z0-9]+([._]?[A-Za-z0-9]+)*$/;
  if (
    !localPartRegex.test(localPart) ||
    localPart.startsWith('.') ||
    localPart.endsWith('.') ||
    localPart.includes('..')
  ) {
    return false;
  }

  // Kiểm tra tên miền
  // Phải chứa các chữ cái và dấu chấm
  // Không bắt đầu hoặc kết thúc bằng dấu chấm
  // Không được phép có các dấu chấm liên tiếp
  const domainRegex = /^[A-Za-z.]+$/;
  if (!domainRegex.test(domain) || domain.startsWith('.') || domain.endsWith('.') || domain.includes('..')) {
    return false;
  }

  return true;
};
