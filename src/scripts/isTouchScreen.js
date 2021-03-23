function isTouchScreen() {
  if ("ontouchstart" in document.documentElement)
  {
  return true
  }
  else
  {
   return false
  }
};

export default isTouchScreen;