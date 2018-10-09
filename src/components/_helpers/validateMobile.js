export const validatePhone = mobile => {
  const re = /^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/;
  return re.test(String(mobile).toLowerCase())
}
