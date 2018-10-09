export const validatePhone = phone => {
  const re = /^((\+|00)32\s?|0)(\d\s?\d{3}|\d{2}\s?\d{2})(\s?\d{2}){2}$/;
  return re.test(String(phone).toLowerCase())
}
