const useFocusToElement = async (id: string) => {
  nextTick(() => {
    const element = document.getElementById(id);
    if (element) {
      element.focus();
    }
  });
};
