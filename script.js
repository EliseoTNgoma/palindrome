const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

checkBtn.addEventListener("click", () => {
  const originalInput = textInput.value;

  if (originalInput.trim() === "") {
    alert("Please input a value.");
    return;
  }

 
  if (isPalindrome(originalInput)) {
    resultDiv.textContent = `${originalInput} is a palindrome.`;
  } else {
    resultDiv.textContent = `${originalInput} is not a palindrome.`;
  }
});
