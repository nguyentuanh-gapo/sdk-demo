import k, { createContext as f, useState as s, useEffect as x, useContext as j } from "react";
var h = { exports: {} }, u = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T = k, y = Symbol.for("react.element"), S = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, v = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
function g(r, e, a) {
  var t, d = {}, c = null, l = null;
  a !== void 0 && (c = "" + a), e.key !== void 0 && (c = "" + e.key), e.ref !== void 0 && (l = e.ref);
  for (t in e) _.call(e, t) && !b.hasOwnProperty(t) && (d[t] = e[t]);
  if (r && r.defaultProps) for (t in e = r.defaultProps, e) d[t] === void 0 && (d[t] = e[t]);
  return { $$typeof: y, type: r, key: c, ref: l, props: d, _owner: v.current };
}
u.Fragment = S;
u.jsx = g;
u.jsxs = g;
h.exports = u;
var n = h.exports;
const i = async (r) => {
  try {
    const a = await (await fetch("https://api.example.com/exchange-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: r
      })
    })).json();
    return console.log("Token obtained from API:", a.token), a.token;
  } catch (e) {
    console.error("Error exchanging token:", e);
    return;
  }
}, m = f(void 0), w = () => {
  const r = j(m);
  if (!r)
    throw new Error("useSDK must be used within an SDKProvider");
  return r;
}, E = ({ children: r, options: e }) => {
  const [a, t] = s({
    language: e == null ? void 0 : e.language,
    theme: e == null ? void 0 : e.theme,
    token: e == null ? void 0 : e.token
  });
  return x(() => {
    (async () => {
      if (!(e != null && e.token)) {
        const c = await i();
        t((l) => ({ ...l, token: c }));
      }
    })();
  }, [e == null ? void 0 : e.token]), x(() => {
    t((d) => ({
      ...d,
      language: e == null ? void 0 : e.language,
      theme: e == null ? void 0 : e.theme
    }));
  }, [e == null ? void 0 : e.language, e == null ? void 0 : e.theme]), /* @__PURE__ */ n.jsx(m.Provider, { value: a, children: r });
}, D = () => {
  const { token: r, language: e, theme: a } = w();
  return /* @__PURE__ */ n.jsxs("div", { className: "p-4 bg-white rounded shadow-md", children: [
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
      a || "default"
    ] })
  ] });
}, N = ({ options: r }) => {
  const e = () => {
    r != null && r.onExpiredToken && r.onExpiredToken();
  };
  return /* @__PURE__ */ n.jsxs(E, { options: r, children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        style: {
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "20px"
        },
        children: [
          /* @__PURE__ */ n.jsx("h3", { children: "SDK Widget Content" }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            "Token: ",
            (r == null ? void 0 : r.token) || "N/A"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            "Language: ",
            (r == null ? void 0 : r.language) || "N/A"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            "Theme: ",
            (r == null ? void 0 : r.theme) || "N/A"
          ] }),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: e,
              style: {
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              },
              children: "Trigger Expired Token"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n.jsx(D, {})
  ] });
};
export {
  N as DemoSDK
};
