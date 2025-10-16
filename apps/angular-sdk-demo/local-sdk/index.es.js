import f, { createContext as h, useState as m, useEffect as g, useContext as k } from "react";
let l = {};
const T = async (r) => (l = { ...r }, console.log("SDK configured with initial options:", l), l), b = () => l;
var d = { exports: {} }, u = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S = f, y = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, v = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
function i(r, e, o) {
  var t, s = {}, a = null, c = null;
  o !== void 0 && (a = "" + o), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (c = e.ref);
  for (t in e) j.call(e, t) && !w.hasOwnProperty(t) && (s[t] = e[t]);
  if (r && r.defaultProps) for (t in e = r.defaultProps, e) s[t] === void 0 && (s[t] = e[t]);
  return { $$typeof: y, type: r, key: a, ref: c, props: s, _owner: v.current };
}
u.Fragment = _;
u.jsx = i;
u.jsxs = i;
d.exports = u;
var n = d.exports;
const D = async () => {
  try {
    const e = await (await fetch("https://api.example.com/exchange-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        /* some_data */
      })
    })).json();
    return console.log("Token obtained from API:", e.token), e.token;
  } catch (r) {
    console.error("Error exchanging token:", r);
    return;
  }
}, x = h(void 0), p = () => {
  const r = k(x);
  if (!r)
    throw new Error("useSDK must be used within an SDKProvider");
  return r;
}, E = ({ children: r, options: e }) => {
  const [o, t] = m({
    language: e == null ? void 0 : e.language,
    theme: e == null ? void 0 : e.theme,
    token: e == null ? void 0 : e.token
  });
  return g(() => {
    (async () => {
      if (!(e != null && e.token)) {
        const a = await D();
        t((c) => ({ ...c, token: a }));
      }
    })();
  }, [e == null ? void 0 : e.token]), /* @__PURE__ */ n.jsx(x.Provider, { value: o, children: r });
}, K = ({ token: r, language: e, theme: o }) => /* @__PURE__ */ n.jsxs("div", { className: "p-4 bg-white rounded shadow-md", children: [
  /* @__PURE__ */ n.jsx("h2", { className: "text-xl font-bold mb-4", children: "SDK Widget Content" }),
  /* @__PURE__ */ n.jsxs("p", { children: [
    /* @__PURE__ */ n.jsx("strong", { children: "Token:" }),
    " ",
    r || "N/A"
  ] }),
  /* @__PURE__ */ n.jsxs("p", { children: [
    /* @__PURE__ */ n.jsx("strong", { children: "Language:" }),
    " ",
    e || "default"
  ] }),
  /* @__PURE__ */ n.jsxs("p", { children: [
    /* @__PURE__ */ n.jsx("strong", { children: "Theme:" }),
    " ",
    o || "default"
  ] })
] });
export {
  E as SDKProvider,
  K as Widget,
  b as getSDKOptions,
  T as initGapoSDK,
  p as useSDK
};
