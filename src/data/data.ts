export function generatePassword(
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean,
  charLength: number,
) {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*-_=+[]{};:<>?/|";

  let allChars = "";
  let password = "";

  if (uppercase) allChars += upperCaseLetters;
  if (lowercase) allChars += lowerCaseLetters;
  if (numbers) allChars += numberChars;
  if (symbols) allChars += symbolChars;

  for (let i = 0; i < charLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}
