function ValidateEmail(email) {
  if (/^\w+([.-]\w+)*@\w+([.-][^\W_]+)*\.[a-zA-Z]{2,}$/.test(email)) {
    return true;
  }
  return false;
}

module.exports = ValidateEmail;