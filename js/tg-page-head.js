const ENABLE_PAGE_REVEALER = !0,
  ENABLE_PAGE_PRELOADER = !0,
  ENABLE_PAGE_REVEALER_USED = "show" === localStorage.getItem("page-revealer");
{
  let b = document.createElement("div");
  b.classList.add("page-revealer"),
    document.documentElement.append(b),
    window.addEventListener("pageshow", () => {
      (b.style.visibility = ""),
        (b.style.transform = ""),
        (b.style.transformOrigin = "");
    }),
    ENABLE_PAGE_REVEALER_USED &&
      (async () => {
        localStorage.removeItem("page-revealer"),
          (b.style.transition = ""),
          (b.style.visibility = "visible"),
          (b.style.transform = "scaleY(1)"),
          (b.style.transformOrigin = "center bottom"),
          await new Promise((a) =>
            document.addEventListener("DOMContentLoaded", a)
          ),
          await new Promise((a) => requestAnimationFrame(a)),
          (b.style.transition = "transform 1.1s cubic-bezier(0.8, 0, 0.2, 1)"),
          (b.style.transform = "scaleY(0)"),
          (b.style.transformOrigin = "center top"),
          await new Promise((a) => setTimeout(a, 1210)),
          (b.style.visibility = ""),
          (b.style.transform = ""),
          (b.style.transformOrigin = "");
      })();
  let c = (b) => {
    let c = location.protocol === b.protocol && location.origin === b.origin;
    if (!c || "_blank" === b.target) return !1;
    let d = location.pathname === b.pathname && location.search === b.search;
    if (!d) return !0;
    let a = b.hash || b.href !== b.origin + b.pathname + b.search + b.hash;
    return !a;
  };
  document.addEventListener("click", async (a) => {
    let d = a.target,
      e = d.closest("a");
    e &&
      e instanceof HTMLAnchorElement &&
      !a.defaultPrevented &&
      c(e) &&
      (a.preventDefault(),
      (b.style.transition = "transform 1.1s cubic-bezier(0.8, 0, 0.2, 1)"),
      (b.style.visibility = "visible"),
      (b.style.transform = "scaleY(1)"),
      (b.style.transformOrigin = "center bottom"),
      await new Promise((a) => setTimeout(a, 1100)),
      localStorage.setItem("page-revealer", "show"),
      (location.href = e.href));
  });
}
if (!ENABLE_PAGE_REVEALER_USED) {
  let a = document.createElement("div");
  a.classList.add("tg-preloader"),
    (a.innerHTML = `
        <div class="tg-loading">
            <div></div><div></div><div></div><div></div>
        </div>
    `),
    document.documentElement.classList.add("show-preloader"),
    document.documentElement.append(a);
  let b = Date.now();
  (async () => {
    await new Promise((a) => document.addEventListener("DOMContentLoaded", a)),
      document.documentElement.classList.remove("show-preloader"),
      await new Promise((a) => requestAnimationFrame(a)),
      await new Promise((a) =>
        setTimeout(a, Math.max(0, 500 - (Date.now() - b)))
      ),
      (a.style.transition = "opacity 1.1s cubic-bezier(0.8, 0, 0.2, 1)"),
      (a.style.opacity = "0"),
      await new Promise((a) => setTimeout(a, 1100)),
      a.remove();
  })();
}
(document.onkeydown = function (a) {
  return (
    123 != event.keyCode &&
    !(a.ctrlKey && a.shiftKey && 73 == a.keyCode) &&
    !(a.ctrlKey && a.shiftKey && 74 == a.keyCode) &&
    !(a.ctrlKey && 85 == a.keyCode) &&
    void 0
  );
}),
  document.addEventListener("contextmenu", (a) => a.preventDefault());
