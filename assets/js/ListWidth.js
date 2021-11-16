(() => {
  const windowLg = window.matchMedia("(max-width: 1023px)");

  const handleWindowChange = (e) => {
    const list = document.getElementById("list");
    if (e.matches) {
      let listCount = list.childElementCount;
      let listWidth = 135 * listCount;
      list.style.width = `${listWidth}px`;
    } else {
      list.style.width = "auto";
    }
  };

  windowLg.addEventListener("change", handleWindowChange);
  handleWindowChange(windowLg);
})();
