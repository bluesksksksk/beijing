import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  // 滚动到页面最上方
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button id="back-to-top-box" onClick={scrollToTop}>
      Back to Top
    </button>
  );
}

export default ScrollToTopButton;
