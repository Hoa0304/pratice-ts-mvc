function auth() {
  var path = window.location.pathname;
  var acc = sessionStorage.getItem('acc');
  console.log(acc);
  if (!acc) {
    if (window.location.pathname !== '/') {
      if (window.location.pathname === '/register') {
        return;
      } else {
        window.location.href = '/';
        return;
      }
    }
  }
}
export default auth;
