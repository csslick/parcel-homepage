function Header() {
  var title = document.querySelector("title").innerHTML;
  console.log(title);
  return `
    <header>
      <h1>${title}</h1>
      <nav id="gnb">
        <a href="./">home</a>
        <a href="./about.html">about</a>
      </nav>
    <header>
  `;
}

export default Header;
