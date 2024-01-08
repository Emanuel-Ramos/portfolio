const useThemes = (theme: string) => {
  const page = document.querySelector(".theme");
  if (page) {
    const classList = page.classList;
    classList.replace(classList[classList.length - 1], theme);
  }
  return;
};
export default useThemes;
