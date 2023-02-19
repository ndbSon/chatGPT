"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [962], {
        46275: function(e, n, t) {
            t.d(n, {
                bG: function() {
                    return v
                },
                ZP: function() {
                    return y
                },
                Vq: function() {
                    return b
                }
            });
            var r = t(14806),
                a = t(35250),
                o = t(87093),
                s = t(40638),
                i = t(19841),
                l = t(70079),
                u = t(34303),
                c = t(62676),
                d = t(39690),
                m = t(6004);

            function f(e) {
                var n = e.onChange,
                    t = e.enabled,
                    r = e.size,
                    o = e.Icon,
                    s = (0, l.useCallback)(function() {
                        n(!t)
                    }, [t, n]),
                    u = !t && "translate-x-0";
                return (0, a.jsxs)(m.r, {
                    checked: t,
                    onChange: s,
                    className: (0, i.Z)(t ? "!bg-indigo-600" : "!bg-gray-200", "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0", "large" === r ? "h-6 w-11" : "h-4 w-8"),
                    children: [(0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Use setting"
                    }), (0, a.jsxs)("span", {
                        className: (0, i.Z)("pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", t && "large" === r ? "translate-x-5" : u, t && "small" === r ? "translate-x-4" : u, "large" === r ? "h-5 w-5" : "h-3 w-3"),
                        children: [(0, a.jsx)("span", {
                            className: (0, i.Z)(t ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
                            "aria-hidden": "true"
                        }), (0, a.jsx)("span", {
                            className: (0, i.Z)(t ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
                            "aria-hidden": "true",
                            children: o && (0, a.jsx)(o, {
                                className: "h-3 w-3 text-indigo-600"
                            })
                        })]
                    })]
                })
            }
            var h = t(44819);

            function x() {
                var e = (0, r.Z)(["block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 outline-none border-none"]);
                return x = function() {
                    return e
                }, e
            }

            function g() {
                var e = (0, r.Z)(["mt-1 outline-none border-0"]);
                return g = function() {
                    return e
                }, e
            }

            function p() {
                var e = (0, r.Z)(["text-right"]);
                return p = function() {
                    return e
                }, e
            }
            var v = "oai/apps/autoexpandCode";

            function b(e) {
                return e && (e.startsWith("http") || "custom" === e)
            }

            function y(e) {
                var n = e.children,
                    t = e.temperature,
                    r = e.onRestoreDefaults,
                    u = e.onChangeModelSetting,
                    m = e.position,
                    x = e.modelSettings,
                    g = e.features,
                    p = (0, l.useState)(Boolean(c.m.getItem(v))),
                    b = p[0],
                    y = p[1],
                    k = (0, l.useCallback)(function(e) {
                        u(h.G3.Temperature, e.target.value)
                    }, [u]),
                    Z = (0, l.useCallback)(function(e) {
                        y(e), c.m.setItem(v, e)
                    }, []);
                return (0, a.jsxs)(o.J, {
                    className: "relative",
                    children: [n, (0, a.jsx)(s.u, {
                        as: l.Fragment,
                        enter: "transition ease-out duration-200",
                        enterFrom: (0, i.Z)("opacity-0", "top-right" === m ? "translate-x-1" : "translate-y-1"),
                        enterTo: (0, i.Z)("opacity-100", "top-right" === m ? "translate-x-0" : "translate-y-0"),
                        leave: "transition ease-in duration-150",
                        leaveFrom: (0, i.Z)("opacity-100", "top-right" === m ? "translate-x-0" : "translate-y-0"),
                        leaveTo: (0, i.Z)("opacity-0", "top-right" === m ? "translate-x-1" : "translate-y-1"),
                        children: (0, a.jsx)(o.J.Panel, {
                            className: (0, i.Z)("absolute z-20 mt-3 w-screen max-w-xs px-2 sm:px-0", "bottom-center" === m && "right-0 top-6", "bottom-right" === m && "left-2 top-8", "top-right" === m && "left-full top-1/2 ml-6 -translate-y-full"),
                            children: (0, a.jsx)("div", {
                                className: "overflow-hidden rounded-lg text-left text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600",
                                children: (0, a.jsxs)("div", {
                                    className: "relative grid gap-6 bg-white px-2 py-1 dark:bg-gray-800 sm:gap-4 sm:p-4",
                                    children: [x.has(h.G3.Temperature) && (0, a.jsxs)("div", {
                                        className: "rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",
                                        children: [(0, a.jsx)("label", {
                                            htmlFor: "temperature",
                                            className: "block text-xs font-medium text-gray-800",
                                            children: "Temperature"
                                        }), (0, a.jsxs)("div", {
                                            className: "mt-1",
                                            children: [(0, a.jsx)(j, {
                                                type: "number",
                                                name: "temperature",
                                                id: "temperature",
                                                onChange: k,
                                                value: t,
                                                className: "form-input"
                                            }), (0, a.jsx)(w, {
                                                name: "temperature",
                                                type: "range",
                                                min: "0",
                                                max: "1",
                                                value: t,
                                                className: "range w-full",
                                                step: "0.05",
                                                onChange: k
                                            })]
                                        })]
                                    }), g.has("tools2") && (0, a.jsxs)("div", {
                                        className: "flex items-center gap-2 text-white",
                                        children: [(0, a.jsx)("div", {
                                            children: "Auto-expand code"
                                        }), (0, a.jsx)(f, {
                                            size: "small",
                                            enabled: b,
                                            onChange: Z
                                        })]
                                    }), (0, a.jsx)(C, {
                                        children: (0, a.jsx)(d.z, {
                                            as: "button",
                                            color: "neutral",
                                            onClick: r,
                                            children: "Restore defaults"
                                        })
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
            var j = u.Z.input(x()),
                w = u.Z.input(g()),
                C = u.Z.div(p())
        },
        1744: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return u
                }
            });
            var r = t(14806),
                a = t(35250),
                o = t(1454),
                s = t(34303);

            function i() {
                var e = (0, r.Z)(["animate-spin text-center"]);
                return i = function() {
                    return e
                }, e
            }
            var l = (0, s.Z)(o.dAq)(i());

            function u(e) {
                var n = e.className;
                return (0, a.jsx)(l, {
                    className: n
                })
            }
        },
        91592: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return ra
                }
            });
            var r, a = t(61706),
                o = t(33861),
                s = t(31501),
                i = t(61079),
                l = t(89874),
                u = t(14806),
                c = t(64705),
                d = t(25769),
                m = t(45813),
                f = t(35250),
                h = t(87093),
                x = t(6128),
                g = t(19841),
                p = t(91530),
                v = t.n(p),
                b = t(26649),
                y = t.n(b),
                j = t(61432),
                w = t(11253),
                C = t.n(w),
                k = t(70079),
                Z = t(2827),
                N = t(1454),
                P = t(34303),
                I = t(12762),
                S = t(98943),
                M = t(82018),
                T = t(62676),
                D = t(36613),
                R = t(68619),
                A = t(60814),
                F = t(66285),
                E = t(27252),
                L = t(500),
                O = t(11699),
                U = t(80836);

            function B(e) {
                var n = e.id,
                    t = e.label;
                return (0, f.jsxs)("div", {
                    className: "form-check",
                    children: [(0, f.jsx)("input", {
                        className: "form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
                        type: "checkbox",
                        value: "",
                        id: n
                    }), (0, f.jsx)("label", {
                        className: "form-check-label inline-block text-gray-800 dark:text-gray-100",
                        htmlFor: n,
                        children: t
                    })]
                })
            }
            var z = t(35025),
                _ = t(42928),
                q = t(60612);

            function H(e) {
                var n = e.text,
                    t = e.onDone,
                    r = (0, q.Z)(),
                    a = (0, k.useState)(!0),
                    o = a[0],
                    s = a[1],
                    i = (0, k.useState)(0),
                    l = i[0],
                    u = i[1],
                    c = (0, k.useMemo)(function() {
                        return new $().humanTypingDelaysQuertyDistance(n)
                    }, [n]);
                return (0, k.useEffect)(function() {
                    n && o && (s(!0), c.forEach(function(e, n) {
                        setTimeout(function() {
                            r() && (u(n), n === c.length - 1 && (s(!1), null == t || t()))
                        }, e)
                    }))
                }, [c, r, o, t, n]), (0, f.jsxs)(f.Fragment, {
                    children: [n.substring(0, l + 1), o && "▋"]
                })
            }
            var $ = function() {
                    function e() {
                        (0, z.Z)(this, e)
                    }
                    var n = e.prototype;
                    return n.qwertyDistance = function(e, n) {
                        var t, r, a, o = {
                                q: [0, 0],
                                w: [1, 0],
                                e: [2, 0],
                                r: [3, 0],
                                t: [4, 0],
                                y: [5, 0],
                                u: [6, 0],
                                i: [7, 0],
                                o: [8, 0],
                                p: [9, 0],
                                a: [0, 1],
                                s: [1, 1],
                                d: [2, 1],
                                f: [3, 1],
                                g: [4, 1],
                                h: [5, 1],
                                j: [6, 1],
                                k: [7, 1],
                                l: [8, 1],
                                z: [0, 2],
                                x: [1, 2],
                                c: [2, 2],
                                v: [3, 2],
                                b: [4, 2],
                                n: [5, 2],
                                m: [6, 2]
                            },
                            s = (0, _.Z)(null !== (t = o[e.toLowerCase()]) && void 0 !== t ? t : [0, 0], 2),
                            i = s[0],
                            l = s[1],
                            u = (0, _.Z)(null !== (r = o[n.toLowerCase()]) && void 0 !== r ? r : [0, 0], 2);
                        return Math.abs(i - u[0]) + Math.abs(l - u[1])
                    }, n.humanTypingDelaysQuertyDistance = function(e) {
                        for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = 0, a = [], o = 0; o < e.length; ++o) {
                            var s = void 0;
                            if (o > 0) {
                                var i = this.qwertyDistance(e[o - 1], e[o]);
                                s = 0 === i ? this.getRandomInt(n, Math.floor(t / 2)) : 1 === i ? this.getRandomInt(n, Math.floor(2 * t / 3)) : this.getRandomInt(n, t)
                            } else s = this.getRandomInt(n, t);
                            a.push(s + r), r += s
                        }
                        return a
                    }, n.getRandomInt = function(e, n) {
                        return Math.floor(Math.random() * (n - e + 1)) + e
                    }, e
                }(),
                W = t(39690),
                G = t(79876),
                V = t(1744);

            function J() {
                var e = (0, u.Z)(["flex flex-col gap-2 text-gray-100 text-sm\n", ""]);
                return J = function() {
                    return e
                }, e
            }

            function Y() {
                var e = (0, u.Z)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n", "\n"]);
                return Y = function() {
                    return e
                }, e
            }

            function X() {
                var e = (0, u.Z)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n", "\n"]);
                return X = function() {
                    return e
                }, e
            }

            function K() {
                var e = (0, u.Z)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
                return K = function() {
                    return e
                }, e
            }

            function Q() {
                var e = (0, u.Z)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative "]);
                return Q = function() {
                    return e
                }, e
            }

            function ee() {
                var e = (0, u.Z)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
                return ee = function() {
                    return e
                }, e
            }

            function en() {
                var e = (0, u.Z)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
                return en = function() {
                    return e
                }, e
            }

            function et() {
                var e = (0, u.Z)(["p-1 hover:text-white"]);
                return et = function() {
                    return e
                }, e
            }

            function er(e) {
                var n = e.items,
                    t = e.activeId,
                    r = e.onNextPage,
                    a = e.hasNextPage,
                    o = e.onNewThread,
                    s = e.onRefetchHistory,
                    i = e.onUpdateUserModifiedTitle,
                    l = e.userModifiedTitle,
                    u = e.newChatName,
                    c = e.isLoading,
                    d = e.isError,
                    m = (0, k.useRef)(null),
                    h = (0, k.useState)(!1),
                    x = h[0],
                    g = h[1],
                    p = (0, k.useCallback)(function() {
                        g(!0), s()
                    }, [s]),
                    v = 0 === n.length;
                return (0, k.useEffect)(function() {
                    m.current && m.current.scrollIntoView()
                }, []), (0, f.jsxs)(ea, {
                    $centered: c || d && v,
                    children: [v && c && (0, f.jsx)(V.Z, {
                        className: "m-auto"
                    }), v && d && (0, f.jsxs)("div", {
                        className: "p-3 italic text-gray-500",
                        children: ["Unable to load history", !x && (0, f.jsx)(W.z, {
                            as: "button",
                            color: "dark",
                            size: "small",
                            className: "m-auto mt-2",
                            onClick: p,
                            children: "Retry"
                        })]
                    }), n.map(function(e) {
                        var n = t === e.id;
                        return (0, f.jsx)(eo, {
                            id: e.id,
                            title: e.title,
                            newChatName: n ? u : void 0,
                            userModifiedTitle: n ? l : "",
                            onUpdateUserModifiedTitle: i,
                            active: n,
                            forwardRef: n ? m : void 0,
                            onNewThread: o,
                            onRefetchHistory: s
                        }, "Entry-".concat(e.id))
                    }), a && (0, f.jsx)(W.z, {
                        as: "button",
                        onClick: r,
                        color: "dark",
                        className: "m-auto mb-2",
                        size: "small",
                        children: "Show more"
                    })]
                })
            }
            var ea = P.Z.div(J(), function(e) {
                return e.$centered && "h-full justify-center items-center"
            });

            function eo(e) {
                var n = e.id,
                    t = e.title,
                    r = e.active,
                    a = e.onNewThread,
                    o = e.onRefetchHistory,
                    s = e.onUpdateUserModifiedTitle,
                    i = e.newChatName,
                    l = e.userModifiedTitle,
                    u = e.forwardRef,
                    c = (0, O.dD)(),
                    d = (0, I.WS)(),
                    m = (0, j.useRouter)(),
                    h = (0, k.useState)(!1),
                    x = h[0],
                    p = h[1],
                    b = (0, k.useRef)(null),
                    y = (0, k.useState)(!1),
                    w = y[0],
                    C = y[1],
                    Z = (0, k.useContext)(L.yP).href,
                    P = (0, k.useState)(),
                    M = P[0],
                    T = P[1],
                    D = (0, k.useCallback)(function(e) {
                        var r, a;
                        if (null == e || e.preventDefault(), p(!1), (null === (r = b.current) || void 0 === r ? void 0 : r.value) && (null === (a = b.current) || void 0 === a ? void 0 : a.value) !== t) {
                            var i = b.current.value;
                            A.ZP.patchConversation(n, {
                                title: i
                            }), s(i), d(S.s6.renameThread, {
                                threadId: n,
                                content: i
                            }), o()
                        }
                    }, [d, n, o, s, t]),
                    R = (0, k.useCallback)(function(e) {
                        "Enter" === e.key && D()
                    }, [D]),
                    F = (0, k.useCallback)(function() {
                        A.ZP.patchConversation(n, {
                            is_visible: !1
                        }).then(function() {
                            o()
                        }), m.asPath === Z ? a() : m.replace({
                            pathname: Z
                        })
                    }, [Z, n, a, o, m]),
                    E = (0, k.useCallback)(function(e) {
                        e.preventDefault(), d(S.s6.loadThread, {
                            threadId: n
                        }), m.push({
                            pathname: m.pathname,
                            query: {
                                chatId: n
                            }
                        }, void 0, {
                            shallow: !0
                        })
                    }, [d, n, m]),
                    U = l || r && i || t;
                if ((0, k.useEffect)(function() {
                        r && i && i !== M && T(i)
                    }, [r, i, U, M, l]), x) return (0, f.jsxs)(ei, {
                    $active: r,
                    children: [(0, f.jsx)(G.ZP, {
                        icon: N.IC0,
                        className: "flex-shrink-0"
                    }), (0, f.jsx)(el, {
                        ref: b,
                        type: "text",
                        defaultValue: U,
                        autoFocus: !0,
                        onKeyDown: R,
                        className: "mr-0",
                        onBlur: D
                    }), (0, f.jsxs)(ed, {
                        $active: !0,
                        children: [(0, f.jsx)(em, {
                            onClick: D,
                            children: (0, f.jsx)(G.ZP, {
                                icon: N.UgA
                            })
                        }), (0, f.jsx)(em, {
                            onClick: function(e) {
                                e.preventDefault(), p(!1)
                            },
                            children: (0, f.jsx)(G.ZP, {
                                icon: N.q5L
                            })
                        })]
                    })]
                });
                var B = M && r && !c && !l,
                    z = 'Delete "'.concat(U, '"?');
                return (0, f.jsxs)(es, {
                    onClick: r ? v() : E,
                    $active: r,
                    className: (0, g.Z)("group", B && "animate-flash"),
                    ref: u,
                    children: [(0, f.jsx)(G.ZP, {
                        icon: w ? N.Ybf : N.IC0
                    }), (0, f.jsxs)(eu, {
                        children: [B ? (0, f.jsx)(H, {
                            text: U,
                            onDone: o
                        }) : w ? z : U, (!M || !r) && (0, f.jsx)(ec, {
                            $active: r
                        })]
                    }), w && (0, f.jsxs)(ed, {
                        $active: !0,
                        children: [(0, f.jsx)(em, {
                            onClick: F,
                            children: (0, f.jsx)(G.ZP, {
                                icon: N.UgA
                            })
                        }), (0, f.jsx)(em, {
                            onClick: function() {
                                C(!1)
                            },
                            children: (0, f.jsx)(G.ZP, {
                                icon: N.q5L
                            })
                        })]
                    }), r && !w && (0, f.jsxs)(ed, {
                        $active: r,
                        children: [(0, f.jsx)(em, {
                            onClick: function(e) {
                                e.preventDefault(), p(!0)
                            },
                            children: (0, f.jsx)(G.ZP, {
                                icon: N.Nte
                            })
                        }), (0, f.jsx)(em, {
                            onClick: function() {
                                return C(!0)
                            },
                            children: (0, f.jsx)(G.ZP, {
                                icon: N.Ybf
                            })
                        })]
                    })]
                })
            }
            var es = P.Z.a(Y(), function(e) {
                    return e.$active ? "pr-14 bg-gray-800 hover:bg-gray-800" : "hover:pr-4"
                }),
                ei = P.Z.div(X(), function(e) {
                    return e.$active && "pr-14 bg-gray-800 hover:bg-gray-800"
                }),
                el = P.Z.input(K()),
                eu = P.Z.div(Q()),
                ec = P.Z.div(ee(), function(e) {
                    return e.$active ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"
                }),
                ed = P.Z.div(en(), function(e) {
                    return e.$active ? "visible" : "invisible group-hover:visible"
                }),
                em = P.Z.button(et()),
                ef = t(73925),
                eh = t(40638),
                ex = t(29634),
                eg = t(15762),
                ep = t(54721),
                ev = t.n(ep),
                eb = t(7137);

            function ey() {
                var e = (0, u.Z)(["flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"]);
                return ey = function() {
                    return e
                }, e
            }

            function ej() {
                var e = (0, u.Z)(["flex-col flex-1 overflow-y-auto border-b border-white/20\n", ""]);
                return ej = function() {
                    return e
                }, e
            }
            var ew = P.Z.a(ey()),
                eC = P.Z.div(ej(), function(e) {
                    return e.$offsetScrollbar && "-mr-2"
                });

            function ek(e) {
                var n = e.onClickAccountPayment,
                    t = e.showAccountPaymentMenuItem,
                    r = e.onClickCustomerPortal,
                    a = e.showCustomerPortalMenuItem,
                    o = e.onDeleteHistory,
                    s = e.showDeleteHistory,
                    i = e.onNewThread,
                    l = e.onOpenDebugPanel,
                    u = e.pages,
                    c = e.settings,
                    d = e.children,
                    m = (0, I.WS)(),
                    h = (0, eg.F)(),
                    x = h.theme,
                    g = h.setTheme,
                    p = (0, q.Z)(),
                    v = (0, F.hz)(),
                    b = (0, j.useRouter)(),
                    y = b.pathname,
                    w = (0, k.useContext)(L.yP),
                    C = w.id,
                    Z = w.href,
                    P = (0, k.useRef)(null),
                    T = (0, k.useState)(!1),
                    D = T[0],
                    R = T[1],
                    A = (0, k.useState)(!1),
                    O = A[0],
                    U = A[1],
                    B = (0, k.useMemo)(function() {
                        var e;
                        return (null === (e = b.query.chatId) || void 0 === e ? void 0 : e[0]) ? (0, f.jsx)(ev(), {
                            href: Z,
                            children: (0, f.jsxs)(ew, {
                                className: "mb-2 flex-shrink-0 border border-white/20",
                                children: [(0, f.jsx)(G.ZP, {
                                    icon: N.OvN
                                }), "New chat"]
                            })
                        }, "Page-reset") : (0, f.jsxs)(ew, {
                            onClick: i,
                            className: "mb-2 flex-shrink-0 border border-white/20",
                            children: [(0, f.jsx)(G.ZP, {
                                icon: N.OvN
                            }), "New chat"]
                        })
                    }, [Z, i, b.query.chatId]),
                    z = u.filter(function(e) {
                        return y.indexOf(e.href)
                    }),
                    _ = (0, k.useCallback)(function() {
                        m(S.s6.clickDiscordLink)
                    }, [m]),
                    H = (0, k.useCallback)(function() {
                        m(S.s6.clickFaqLink)
                    }, [m]);
                (0, k.useEffect)(function() {
                    if (P.current) {
                        var e;
                        R((e = P.current).scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
                    }
                }, [d]);
                var $ = (0, E.g)(function(e) {
                        return e.flags.highlightPlusUpgrade
                    }),
                    W = (0, k.useCallback)(function() {
                        U(!1), o()
                    }, [o]);
                return (0, f.jsx)("div", {
                    className: "scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20",
                    children: (0, f.jsxs)("nav", {
                        className: "flex h-full flex-1 flex-col space-y-1 p-2",
                        children: [B, (0, f.jsx)(eC, {
                            ref: P,
                            $offsetScrollbar: D,
                            children: d
                        }), s && (0, f.jsxs)(ew, {
                            onClick: function() {
                                return O ? W() : U(!0)
                            },
                            children: [(0, f.jsx)(G.ZP, {
                                icon: O ? N.UgA : N.Ybf
                            }), O ? "Confirm clear conversations" : "Clear conversations"]
                        }), v.has("debug") && (0, f.jsxs)(ew, {
                            onClick: function() {
                                return l(!0)
                            },
                            children: [(0, f.jsx)(G.ZP, {
                                icon: N.cDN
                            }), "Debug"]
                        }), "chat" === C && t && n && (0, f.jsx)(ew, {
                            onClick: n,
                            children: (0, f.jsxs)("span", {
                                className: "flex w-full flex-row justify-between",
                                children: [(0, f.jsxs)("span", {
                                    className: "gold-new-button flex items-center gap-3",
                                    children: [(0, f.jsx)(G.ZP, {
                                        icon: N.fzv
                                    }), "Upgrade to Plus"]
                                }), $ && (0, f.jsx)("span", {
                                    className: "rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800",
                                    children: "NEW"
                                })]
                            })
                        }), p() && (0, f.jsxs)(ew, {
                            onClick: function() {
                                return g("dark" === x ? "light" : "dark")
                            },
                            children: [(0, f.jsx)(G.ZP, {
                                icon: "dark" === x ? N.kXG : N.wOW
                            }), "dark" === x ? "Light" : "Dark", " mode"]
                        }), "chat" === C && (0, f.jsxs)(ew, {
                            href: "https://discord.gg/openai",
                            target: "_blank",
                            onClick: _,
                            children: [(0, f.jsx)(G.ZP, {
                                icon: eb.j2d
                            }), "OpenAI Discord"]
                        }), "chat" === C && a && r && (0, f.jsxs)(ew, {
                            onClick: r,
                            children: [(0, f.jsx)(G.ZP, {
                                icon: N.fzv
                            }), "My account"]
                        }), "chat" === C && (0, f.jsxs)(ew, {
                            href: "https://help.openai.com/en/collections/3742473-chatgpt",
                            target: "_blank",
                            onClick: H,
                            children: [(0, f.jsx)(G.ZP, {
                                icon: N.AlO
                            }), "Updates & FAQ"]
                        }), c, z.length > 1 && (0, f.jsx)(ev(), {
                            href: "/",
                            children: (0, f.jsxs)(ew, {
                                children: [(0, f.jsx)(G.ZP, {
                                    icon: N.m6D
                                }), "Home"]
                            })
                        }, "Page-home"), (0, f.jsxs)(ew, {
                            onClick: function() {
                                m(S.s6.clickLogOut, {
                                    eventSource: "mouse"
                                }), (0, M.w7)()
                            },
                            children: [(0, f.jsx)(G.ZP, {
                                icon: N.xqh
                            }), "Log out"]
                        })]
                    })
                })
            }
            var eZ = function(e) {
                    var n = e.onClickAccountPayment,
                        t = e.showAccountPaymentMenuItem,
                        r = e.onClickCustomerPortal,
                        a = e.showCustomerPortalMenuItem,
                        o = e.onDeleteHistory,
                        s = e.showDeleteHistory,
                        i = e.onNewThread,
                        l = e.onOpenDebugPanel,
                        u = e.pages,
                        c = e.settings,
                        d = e.children;
                    return (0, f.jsx)("div", {
                        className: "dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col",
                        children: (0, f.jsx)("div", {
                            className: "flex h-full min-h-0 flex-col ",
                            children: (0, f.jsx)(ek, {
                                onClickAccountPayment: n,
                                showAccountPaymentMenuItem: t,
                                onClickCustomerPortal: r,
                                showCustomerPortalMenuItem: a,
                                onDeleteHistory: o,
                                showDeleteHistory: s,
                                onNewThread: i,
                                onOpenDebugPanel: l,
                                pages: u,
                                settings: c,
                                children: d
                            })
                        })
                    })
                },
                eN = function(e) {
                    var n = e.onClickAccountPayment,
                        t = e.showAccountPaymentMenuItem,
                        r = e.onClickCustomerPortal,
                        a = e.showCustomerPortalMenuItem,
                        o = e.onDeleteHistory,
                        s = e.onSidebarOpen,
                        i = e.sidebarOpen,
                        l = e.showDeleteHistory,
                        u = e.onNewThread,
                        c = e.onOpenDebugPanel,
                        d = e.pages,
                        m = e.children,
                        h = e.settings;
                    return (0, f.jsx)(eh.u.Root, {
                        show: i,
                        as: k.Fragment,
                        children: (0, f.jsxs)(ex.V, {
                            as: "div",
                            className: "relative z-40 md:hidden",
                            onClose: s,
                            children: [(0, f.jsx)(eh.u.Child, {
                                as: k.Fragment,
                                enter: "transition-opacity ease-linear duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, f.jsx)("div", {
                                    className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                                })
                            }), (0, f.jsxs)("div", {
                                className: "fixed inset-0 z-40 flex",
                                children: [(0, f.jsx)(eh.u.Child, {
                                    as: k.Fragment,
                                    enter: "transition ease-in-out duration-300 transform",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transition ease-in-out duration-300 transform",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: (0, f.jsxs)(ex.V.Panel, {
                                        className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                                        children: [(0, f.jsx)(eh.u.Child, {
                                            as: k.Fragment,
                                            enter: "ease-in-out duration-300",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leave: "ease-in-out duration-300",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: (0, f.jsx)("div", {
                                                className: "absolute top-0 right-0 -mr-12 pt-2",
                                                children: (0, f.jsxs)("button", {
                                                    type: "button",
                                                    className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                                    onClick: function() {
                                                        return s(!1)
                                                    },
                                                    children: [(0, f.jsx)("span", {
                                                        className: "sr-only",
                                                        children: "Close sidebar"
                                                    }), (0, f.jsx)(G.ZP, {
                                                        icon: N.q5L,
                                                        size: "medium",
                                                        className: "text-white",
                                                        "aria-hidden": "true"
                                                    })]
                                                })
                                            })
                                        }), (0, f.jsx)(ek, {
                                            onClickAccountPayment: n,
                                            showAccountPaymentMenuItem: t,
                                            onClickCustomerPortal: r,
                                            showCustomerPortalMenuItem: a,
                                            onDeleteHistory: o,
                                            showDeleteHistory: l,
                                            onNewThread: u,
                                            onOpenDebugPanel: c,
                                            pages: d,
                                            settings: h,
                                            children: m
                                        })]
                                    })
                                }), (0, f.jsx)("div", {
                                    className: "w-14 flex-shrink-0"
                                })]
                            })]
                        })
                    })
                },
                eP = function(e) {
                    var n = e.onSidebarOpen,
                        t = e.onNewThread,
                        r = e.title,
                        a = e.newChatName,
                        o = (0, k.useState)(),
                        s = o[0],
                        i = o[1],
                        l = (0, j.useRouter)(),
                        u = (0, k.useContext)(L.yP).href,
                        c = (0, k.useMemo)(function() {
                            var e;
                            return (null === (e = l.query.chatId) || void 0 === e ? void 0 : e[0]) ? (0, f.jsx)(ev(), {
                                href: u,
                                children: (0, f.jsx)("button", {
                                    type: "button",
                                    className: "px-3",
                                    children: (0, f.jsx)(G.ZP, {
                                        icon: N.OvN,
                                        size: "medium"
                                    })
                                })
                            }, "Page-reset") : (0, f.jsx)("button", {
                                type: "button",
                                className: "px-3",
                                onClick: t,
                                children: (0, f.jsx)(G.ZP, {
                                    icon: N.OvN,
                                    size: "medium"
                                })
                            })
                        }, [u, t, l.query.chatId]);
                    return (0, k.useEffect)(function() {
                        a !== s && i(a)
                    }, [a, s]), (0, f.jsxs)("div", {
                        className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
                        children: [(0, f.jsxs)("button", {
                            type: "button",
                            className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                            onClick: function() {
                                return n(!0)
                            },
                            children: [(0, f.jsx)("span", {
                                className: "sr-only",
                                children: "Open sidebar"
                            }), (0, f.jsx)(G.ZP, {
                                icon: N.cur,
                                "aria-hidden": "true",
                                size: "medium"
                            })]
                        }), (0, f.jsx)("h1", {
                            className: "flex-1 text-center text-base font-normal",
                            children: s && a ? (0, f.jsx)(H, {
                                text: a
                            }) : r || "New chat"
                        }), c]
                    })
                };

            function eI() {
                var e = (0, u.Z)(["flex flex-row gap-2 mb-4"]);
                return eI = function() {
                    return e
                }, e
            }

            function eS() {
                var e = (0, u.Z)(["bg-gray-200 rounded-md text-gray-500 text-xs flex flex-row items-center gap-1 px-2 py-1"]);
                return eS = function() {
                    return e
                }, e
            }

            function eM() {
                var e = (0, u.Z)(["flex items-center gap-1"]);
                return eM = function() {
                    return e
                }, e
            }

            function eT() {
                var e = (0, u.Z)([""]);
                return eT = function() {
                    return e
                }, e
            }
            var eD = function(e) {
                    var n = e.urls,
                        t = e.onRemoveUrl,
                        r = e.clickable,
                        a = e.className;
                    return 0 === n.size ? null : (0, f.jsx)(eR, {
                        className: a,
                        children: Array.from(n).map(function(e) {
                            return (0, f.jsxs)(eA, {
                                children: [(0, f.jsx)(N.XKb, {}), (0, f.jsxs)(eF, (0, i.Z)((0, s.Z)({}, r ? {
                                    href: e,
                                    target: "_blank",
                                    disabled: !1
                                } : {
                                    disabled: !0
                                }), {
                                    children: [new URL(e).hostname, r && (0, f.jsx)(N.AlO, {})]
                                })), t && (0, f.jsx)(eE, {
                                    onClick: function() {
                                        return t(e)
                                    },
                                    children: (0, f.jsx)(N.q5L, {})
                                })]
                            }, e)
                        })
                    })
                },
                eR = P.Z.div(eI()),
                eA = P.Z.div(eS()),
                eF = P.Z.a(eM()),
                eE = P.Z.button(eT()),
                eL = k.memo(eD);

            function eO() {
                var e = (0, u.Z)(["\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n", "\n"]);
                return eO = function() {
                    return e
                }, e
            }

            function eU() {
                var e = (0, u.Z)(["\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n", ""]);
                return eU = function() {
                    return e
                }, e
            }

            function eB() {
                var e = (0, u.Z)(["flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"]);
                return eB = function() {
                    return e
                }, e
            }

            function ez(e) {
                var n = e.onAbortCompletion,
                    t = e.onCreateNewCompletion,
                    r = e.onUpdateArtifactStatus,
                    o = e.onRequestMoreCompletions,
                    l = e.onContinueGenerating,
                    u = e.artifact,
                    c = e.currentLeafId,
                    d = e.currentRequestId,
                    h = e.threadId,
                    x = e.isCompletionInProgress,
                    p = e.className,
                    v = e.placeholder,
                    b = e.currentPrompt,
                    y = e.onChangeCurrentPrompt,
                    j = e.clearOnSubmit,
                    w = void 0 === j || j,
                    C = e.disabled,
                    P = void 0 !== C && C,
                    M = e.shouldRetry,
                    T = e.canPause,
                    D = void 0 !== T && T,
                    R = e.canContinue,
                    A = void 0 !== R && R,
                    F = "root" === c,
                    E = (0, O.dD)(),
                    U = (0, I.WS)(),
                    B = (0, k.useContext)(L.gt).serviceStatus,
                    z = (0, k.useMemo)(function() {
                        return new Set([])
                    }, []),
                    _ = (0, k.useRef)(null),
                    q = (0, k.useState)(""),
                    H = q[0],
                    $ = q[1],
                    V = (0, k.useCallback)(function(e) {
                        r({
                            state: "pasted",
                            url: e,
                            id: e,
                            contents: ""
                        }), $("")
                    }, [r]),
                    J = (0, k.useCallback)(function(e) {
                        y(e.currentTarget.value)
                    }, [y]),
                    Y = (0, k.useCallback)(function(e) {
                        if (null == e || e.preventDefault(), !P) {
                            var n, a, o = null === (n = _.current) || void 0 === n ? void 0 : n.value,
                                l = "".concat(null === (a = _.current) || void 0 === a ? void 0 : a.dataset.id, "-nextPrompt");
                            if (o || (null == u ? void 0 : u.url)) {
                                var c = (null == u ? void 0 : u.url) || "";
                                (null == u ? void 0 : u.state) === "pasted" && r(function(e) {
                                    return (0, i.Z)((0, s.Z)({}, e), {
                                        state: "static"
                                    })
                                });
                                var d = (null == u ? void 0 : u.state) === "pasted" ? {
                                    artifacts: [null == u ? void 0 : u.url]
                                } : {};
                                t(l, (0, s.Z)({
                                    value: o || ""
                                }, d), {
                                    eventSource: e ? "mouse" : "keyboard"
                                }, c), w && y(""), $(""), (0, Z.SI)(1, _.current)
                            }
                        }
                    }, [null == u ? void 0 : u.state, null == u ? void 0 : u.url, w, P, t, r, y, ]),
                    X = (0, k.useCallback)((0, a.Z)(function() {
                        var e, n, t, r;
                        return (0, m.__generator)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!z.has("link") || "root" !== c) return [2];
                                    return [4, navigator.clipboard.readText()];
                                case 1:
                                    return n = a.sent(), t = /^https?:\/\/[^\s]+/g, (r = null === (e = n.match(t)) || void 0 === e ? void 0 : e[0]) && $(r), [2]
                            }
                        })
                    }), [z, c]),
                    K = (0, k.useCallback)(function() {
                        r(null)
                    }, [r]),
                    Q = (0, k.useCallback)(function() {
                        n("", d), o(c, {
                            eventSource: "mouse"
                        })
                    }, [c, d, n, o, ]),
                    ee = (0, k.useCallback)(function() {
                        n("", d), U(S.s6.pauseCompletion, {
                            threadId: h,
                            eventSource: "mouse"
                        })
                    }, [d, h, U, n]),
                    en = (0, k.useMemo)(function() {
                        return {
                            Enter: {
                                validator: function() {
                                    return !P
                                },
                                handler: function(e) {
                                    E || e.shiftKey || e.isComposing || (e.preventDefault(), x || Y())
                                }
                            },
                            Escape: {
                                validator: function() {
                                    return D && x
                                },
                                handler: function() {
                                    n("", d), U(S.s6.pauseCompletion, {
                                        threadId: h,
                                        eventSource: "keyboard"
                                    })
                                }
                            }
                        }
                    }, [P, E, x, Y, D, n, d, U, h, ]);
                (0, k.useEffect)(function() {
                    var e = _.current,
                        n = function(e) {
                            var n;
                            (null === (n = en[e.key]) || void 0 === n ? void 0 : n.validator(e)) && en[e.key].handler(e)
                        };
                    return e && e.addEventListener("keydown", n),
                        function() {
                            e && e.removeEventListener("keydown", n)
                        }
                }, [en]), (0, k.useEffect)(function() {
                    var e = _.current,
                        n = function(n) {
                            !(null == e ? void 0 : e.value) && H && F && (n.preventDefault(), V(H))
                        };
                    return z.has("link") && e && F && e.addEventListener("paste", n),
                        function() {
                            e && e.removeEventListener("paste", n)
                        }
                }, [V, c, F, r, H, z, ]), (0, k.useEffect)(function() {
                    return window.addEventListener("focus", X),
                        function() {
                            window.removeEventListener("focus", X)
                        }
                }, [X]), (0, k.useEffect)(function() {
                    var e;
                    null === (e = _.current) || void 0 === e || e.focus()
                }, []);
                var et = !F && !x && !(null == B ? void 0 : B.oof),
                    er = (0, k.useCallback)(function() {
                        l(c)
                    }, [c, l]),
                    ea = (0, k.useMemo)(function() {
                        return (0, f.jsxs)(e$, {
                            className: (0, g.Z)(M && "m-auto flex-col items-center"),
                            children: [M && (0, f.jsx)("span", {
                                className: "mb-3 block text-xs md:mb-auto",
                                children: "There was an error generating a response"
                            }), et && (0, f.jsxs)(W.z, {
                                as: "button",
                                color: M ? "primary" : "neutral",
                                onClick: Q,
                                className: (0, g.Z)(M ? "m-auto" : "border-0 md:border"),
                                children: [(0, f.jsx)(G.ZP, {
                                    icon: N.Qxo,
                                    size: E ? "small" : "xsmall"
                                }), (!E || M) && "Regenerate response"]
                            }), A && (0, f.jsxs)(W.z, {
                                as: "button",
                                color: "neutral",
                                onClick: er,
                                className: "border-0 md:border",
                                children: [(0, f.jsx)(G.ZP, {
                                    icon: N.lV_,
                                    className: "-rotate-180",
                                    size: E ? "small" : "xsmall"
                                }), !E && "Continue generating"]
                            }), D && x && (0, f.jsxs)(W.z, {
                                as: "button",
                                color: "neutral",
                                onClick: ee,
                                className: "border-0 md:border",
                                children: [(0, f.jsx)(G.ZP, {
                                    icon: N.jxP,
                                    size: E ? "small" : "xsmall"
                                }), !E && "Stop generating"]
                            })]
                        })
                    }, [A, D, et, ee, Q, er, x, E, M, ]);
                return (0, f.jsx)("form", {
                    className: p,
                    onSubmit: Y,
                    children: (0, f.jsxs)("div", {
                        className: "relative flex h-full flex-1 md:flex-col",
                        children: [!E && ea, !M && (0, f.jsxs)(eq, {
                            $disabled: M,
                            children: [(null == u ? void 0 : u.state) === "pasted" && (0, f.jsx)(eL, {
                                urls: new Set([u.url]),
                                onRemoveUrl: K,
                                className: "ml-2"
                            }), (0, f.jsx)(Z.ZP, {
                                tabIndex: 0,
                                onFocus: X,
                                value: b,
                                "data-id": c,
                                ref: _,
                                style: {
                                    maxHeight: "200px"
                                },
                                rows: 1,
                                onChange: J,
                                placeholder: v,
                                className: "m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0",
                                disabled: M
                            }), (0, f.jsx)(eH, {
                                disabled: x || M || P,
                                $nudgeBottom: x,
                                children: x ? (0, f.jsx)("div", {
                                    className: "text-2xl",
                                    children: (0, f.jsx)(e_, {})
                                }) : (0, f.jsx)(G.ZP, {
                                    icon: N.LbG,
                                    size: "small",
                                    className: "mr-1"
                                })
                            })]
                        }), E && ea]
                    })
                })
            }

            function e_() {
                var e = (0, k.useState)(0),
                    n = e[0],
                    t = e[1];
                (0, k.useEffect)(function() {
                    var e = setInterval(function() {
                        t(function(e) {
                            return (e + 1) % 3
                        })
                    }, 350);
                    return function() {
                        return clearInterval(e)
                    }
                }, []);
                for (var r = [], a = 0; a < 3; a++) r.push((0, f.jsx)("span", {
                    className: a <= n ? "" : "invisible",
                    children: "\xb7"
                }, a));
                return (0, f.jsx)(f.Fragment, {
                    children: r
                })
            }
            var eq = P.Z.div(eO(), function(e) {
                    return e.$disabled && "bg-gray-100"
                }),
                eH = P.Z.button(eU(), function(e) {
                    return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1"
                }),
                e$ = P.Z.div(eB()),
                eW = t(46275);

            function eG(e) {
                var n = e.children,
                    t = e.title,
                    r = e.icon,
                    a = e.sidebarOpen,
                    o = e.onSidebarOpen;
                return (0, f.jsx)(eh.u.Root, {
                    show: a,
                    as: k.Fragment,
                    children: (0, f.jsxs)(ex.V, {
                        as: "div",
                        className: "relative z-10",
                        onClose: o,
                        children: [(0, f.jsx)("div", {
                            className: "fixed inset-0"
                        }), (0, f.jsx)("div", {
                            className: "fixed inset-0 overflow-hidden",
                            children: (0, f.jsx)("div", {
                                className: "absolute inset-0 overflow-hidden",
                                children: (0, f.jsx)("div", {
                                    className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                                    children: (0, f.jsx)(eh.u.Child, {
                                        as: k.Fragment,
                                        enter: "transform transition ease-in-out duration-100 sm:duration-300",
                                        enterFrom: "translate-x-full",
                                        enterTo: "translate-x-0",
                                        leave: "transform transition ease-in-out duration-300 sm:duration-500",
                                        leaveFrom: "translate-x-0",
                                        leaveTo: "translate-x-full",
                                        children: (0, f.jsx)(ex.V.Panel, {
                                            className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                                            children: (0, f.jsxs)("div", {
                                                className: "flex h-full flex-col overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                                                children: [(0, f.jsx)("div", {
                                                    className: "",
                                                    children: (0, f.jsxs)("div", {
                                                        className: "flex items-start justify-between",
                                                        children: [(0, f.jsxs)(ex.V.Title, {
                                                            className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                                                            children: [(0, f.jsx)(G.ZP, {
                                                                icon: r
                                                            }), t]
                                                        }), (0, f.jsx)("div", {
                                                            className: "mr-2 mt-2 flex h-7 items-center",
                                                            children: (0, f.jsxs)("button", {
                                                                type: "button",
                                                                className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                                                                onClick: function() {
                                                                    return o(!1)
                                                                },
                                                                children: [(0, f.jsx)("span", {
                                                                    className: "sr-only",
                                                                    children: "Close panel"
                                                                }), (0, f.jsx)(G.ZP, {
                                                                    icon: N.q5L,
                                                                    size: "medium",
                                                                    "aria-hidden": "true"
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, f.jsx)("div", {
                                                    className: "relative flex-1",
                                                    children: n
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var eV = t(1215);

            function eJ() {
                var e = (0, u.Z)(["bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"]);
                return eJ = function() {
                    return e
                }, e
            }
            var eY = P.Z.span(eJ()),
                eX = t(97374),
                eK = t.n(eX),
                eQ = t(23119),
                e0 = t(95182),
                e1 = t.n(e0);

            function e2() {
                var e = (0, u.Z)(["text-xs flex items-center justify-center gap-1"]);
                return e2 = function() {
                    return e
                }, e
            }

            function e3() {
                var e = (0, u.Z)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
                return e3 = function() {
                    return e
                }, e
            }

            function e6() {
                var e = (0, u.Z)(["flex-grow flex-shrink-0"]);
                return e6 = function() {
                    return e
                }, e
            }

            function e5(e) {
                var n = e.currentPage,
                    t = e.onChangeIndex,
                    r = e.length,
                    a = e.className,
                    o = function(e) {
                        t(e1()(n + e, 0, r - 1))
                    };
                return (0, f.jsxs)(e4, {
                    className: a,
                    children: [(0, f.jsx)(e7, {
                        onClick: function() {
                            return o(-1)
                        },
                        disabled: 0 === n,
                        children: (0, f.jsx)(G.ZP, {
                            size: "xsmall",
                            icon: N.YFh
                        })
                    }), (0, f.jsx)(e8, {
                        children: "".concat(n + 1, " / ").concat(r)
                    }), (0, f.jsx)(e7, {
                        onClick: function() {
                            return o(1)
                        },
                        disabled: n === r - 1,
                        children: (0, f.jsx)(G.ZP, {
                            size: "xsmall",
                            icon: N.Tfp
                        })
                    })]
                })
            }
            var e4 = P.Z.div(e2()),
                e7 = P.Z.button(e3()),
                e8 = P.Z.span(e6()),
                e9 = t(38886);

            function ne(e) {
                var n = e.messages,
                    t = e.isCompletionInProgress,
                    r = n.reduce(function(e, n) {
                        return n.err ? e : e + U.Cv.getTextFromMessage(n.message)
                    }, ""),
                    a = n.filter(function(e) {
                        return e.errCode === D.Dd
                    }),
                    o = a.some(function(e) {
                        return "danger" === e.errType
                    });
                return (0, f.jsx)(e9.C, {
                    text: r,
                    format: !0,
                    flag: a.length > 0 && (o ? "danger" : "warning"),
                    isCompletionInProgress: t,
                    showContentPolicyViolation: a.length > 0
                })
            }

            function nn() {
                var e = (0, u.Z)(["w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100"]);
                return nn = function() {
                    return e
                }, e
            }

            function nt() {
                var e = (0, u.Z)(["flex flex-grow flex-col gap-3"]);
                return nt = function() {
                    return e
                }, e
            }

            function nr() {
                var e = (0, u.Z)(["text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"]);
                return nr = function() {
                    return e
                }, e
            }

            function na() {
                var e = (0, u.Z)(["w-[30px] flex flex-col relative items-end"]);
                return na = function() {
                    return e
                }, e
            }

            function no() {
                var e = (0, u.Z)(["p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"]);
                return no = function() {
                    return e
                }, e
            }

            function ns() {
                var e = (0, u.Z)(["text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n", ""]);
                return ns = function() {
                    return e
                }, e
            }
            var ni, nl = eK()(function() {
                    return t.e(328).then(t.bind(t, 63328))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [63328]
                        }
                    },
                    ssr: !1
                }),
                nu = eK()(function() {
                    return t.e(736).then(t.bind(t, 98736))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [98736]
                        }
                    },
                    ssr: !1
                }),
                nc = eK()(function() {
                    return t.e(24).then(t.bind(t, 6024))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [6024]
                        }
                    },
                    ssr: !1
                }),
                nd = eK()(function() {
                    return t.e(672).then(t.bind(t, 37672))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [37672]
                        }
                    },
                    ssr: !1
                });

            function nm(e) {
                var n;
                return (null === (n = e.message.recipient) || void 0 === n ? void 0 : n.slice(2, 3)) === "n"
            }

            function nf(e) {
                var n, t;
                return (null === (n = e.message.recipient) || void 0 === n ? void 0 : n.slice(2, 3)) === "o" || (null === (t = e.message.recipient) || void 0 === t ? void 0 : t.slice(2, 3)) === "s"
            }

            function nh(e) {
                var n;
                return "o" === e.message.content.content_type.slice(1, 2) || (null === (n = e.message.recipient) || void 0 === n ? void 0 : n.slice(2, 3)) === "t" && "text" === e.message.content.content_type
            }

            function nx(e) {
                return "e" === e.message.content.content_type.slice(2, 3)
            }

            function ng(e) {
                var n, t, r;
                return (null === (n = e.message.user) || void 0 === n ? void 0 : n.name.slice(2, 3)) === "n" || (null === (t = e.message.user) || void 0 === t ? void 0 : t.name.slice(2, 3)) === "o" || (null === (r = e.message.user) || void 0 === r ? void 0 : r.name.slice(2, 3)) === "s"
            }(ni = r || (r = {}))[ni.Text = 0] = "Text", ni[ni.MultiText = 1] = "MultiText", ni[ni.SB = 2] = "SB", ni[ni.B = 3] = "B", ni[ni.C = 4] = "C", ni[ni.CEO = 5] = "CEO";
            var np = k.memo(function(e) {
                    var n = e.turn,
                        t = e.threadId,
                        a = e.treeRef,
                        o = e.onChangeItemInView,
                        i = e.onChangeRating,
                        l = e.onCreateNewNode,
                        u = e.onDeleteNode,
                        c = e.onRequestCompletion,
                        d = e.onUpdateNode,
                        m = e.activeRequests,
                        h = n.role,
                        x = n.messages,
                        p = n.variantIds,
                        v = (0, k.useState)(x),
                        b = v[0],
                        y = v[1],
                        j = (0, k.useContext)(L.yP).theme,
                        w = j.color,
                        C = j.icon,
                        Z = (0, M.kP)().session,
                        P = (0, O.Ui)(),
                        T = (0, I.WS)(),
                        D = (0, k.useState)(!1),
                        A = D[0],
                        E = D[1],
                        B = (0, k.useMemo)(function() {
                            return p.findIndex(function(e) {
                                return e === b[0].nodeId
                            })
                        }, [p, b]),
                        z = b[b.length - 1],
                        _ = (0, k.useState)(z.rating),
                        q = _[0],
                        H = _[1],
                        $ = (0, F.hz)(),
                        W = (0, k.useCallback)(function() {
                            1 === b.length && (T(h === R.uU.User ? S.s6.editPrompt : S.s6.editCompletion, {
                                id: b[0].message.id,
                                threadId: t
                            }), E(!0))
                        }, [b, T, h, t]),
                        V = (0, k.useCallback)(function() {
                            E(!1)
                        }, []),
                        J = (0, k.useCallback)(function(e) {
                            i(z.nodeId, z.message.id, e), H(e)
                        }, [z, i]);
                    (0, k.useEffect)(function() {
                        H(z.rating)
                    }, [z]), (0, k.useEffect)(function() {
                        y(x)
                    }, [x]);
                    var Y = (0, k.useMemo)(function() {
                            return U.Cv.getRequestIdFromConversationTurn(n)
                        }, [n]),
                        X = "CompletionUpdated:".concat(b[b.length - 1].nodeId),
                        K = (0, k.useCallback)(function(e, n) {
                            var t = n.nodeId;
                            y(function(e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done); r = !0) {
                                        var c = l.value;
                                        if (c.nodeId === t) {
                                            var d = a.current.getNode(t);
                                            n.push((0, s.Z)({
                                                nodeId: t,
                                                parentId: d.parentId,
                                                message: d.message
                                            }, d.metadata))
                                        } else n.push(c)
                                    }
                                } catch (m) {
                                    o = !0, i = m
                                } finally {
                                    try {
                                        r || null == u.return || u.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return n
                            })
                        }, [a]);
                    (0, k.useEffect)(function() {
                        return PubSub.subscribe(X, K),
                            function() {
                                PubSub.unsubscribe(X)
                            }
                    }, [K, X]);
                    var Q = (0, k.useMemo)(function() {
                            return m.has(Y)
                        }, [m, Y]),
                        ee = (0, k.useMemo)(function() {
                            var e = !0,
                                n = !1,
                                t = void 0;
                            try {
                                for (var r, a = b[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                                    var o = r.value;
                                    if (o.errType) return o.errType
                                }
                            } catch (s) {
                                n = !0, t = s
                            } finally {
                                try {
                                    e || null == a.return || a.return()
                                } finally {
                                    if (n) throw t
                                }
                            }
                            return !1
                        }, [b]),
                        en = (0, k.useMemo)(function() {
                            if (!$.has("tools") && !$.has("tools2")) return [C, w];
                            if (Q && b.length > 0) {
                                var e, n = b[b.length - 1];
                                if (nm(n) || nf(n) || ng(n)) return ["s", L.JX];
                                if (nh(n) || nx(n)) return ["c", L.JX];
                                if ("text" === (e = n).message.content.content_type && (U.Cv.getTextFromMessage(n.message).length > 0 || b.length > 1)) return ["t", L.JX]
                            }
                            return [C, w]
                        }, [Q, C, w, b, $, ]),
                        et = en[0],
                        er = en[1],
                        ea = h !== R.uU.User,
                        eo = (0, k.useMemo)(function() {
                            var e = [];
                            return b.forEach(function(n, t) {
                                var a = null == b ? void 0 : b[t - 1],
                                    o = a && (U.Cv.getIsIncompleteFromMessage(a.message) || U.Cv.getIsContinuedFromMessage(a.message)),
                                    s = U.Cv.getIsContinuedFromMessage(n.message),
                                    i = U.Cv.getIsTextTypeFromMessage(n.message) && U.Cv.getTextFromMessage(n.message);
                                if (o && s && i) {
                                    var l = e.pop();
                                    (null == l ? void 0 : l.type) === r.MultiText ? (l.messages.push(n), e.push(l)) : (null == l ? void 0 : l.type) === r.Text && e.push({
                                        type: r.MultiText,
                                        messages: [l.message, n]
                                    })
                                } else if (nm(n) || nf(n) || ng(n)) {
                                    var u = e[e.length - 1];
                                    (null == u ? void 0 : u.type) === r.SB || (null == u ? void 0 : u.type) === r.B ? u.messages.push(n) : e.push({
                                        type: nm(n) ? r.SB : r.B,
                                        messages: [n]
                                    })
                                } else {
                                    var c = r.Text;
                                    nh(n) ? c = r.C : nx(n) && (c = r.CEO), e.push({
                                        type: c,
                                        message: n
                                    })
                                }
                            }), e.map(function(n, a) {
                                var s = a === e.length - 1;
                                switch (n.type) {
                                    case r.Text:
                                        return (0, f.jsx)(e9.Z, {
                                            className: "min-h-[20px]",
                                            message: n.message,
                                            isEditing: A,
                                            format: ea,
                                            isCompletionInProgress: s && Q,
                                            onCreateNewNode: l,
                                            threadId: t,
                                            onUpdateNode: d,
                                            onDeleteNode: u,
                                            onChangeItemInView: o,
                                            onRequestCompletion: c,
                                            onExitEdit: V,
                                            disabled: 0 !== m.size
                                        }, n.message.nodeId);
                                    case r.MultiText:
                                        return (0, f.jsx)(ne, {
                                            messages: n.messages,
                                            isCompletionInProgress: s && Q
                                        }, a);
                                    case r.SB:
                                        if (!$.has("tools")) return null;
                                        return (0, f.jsx)(nl, {
                                            messages: n.messages
                                        }, n.messages[0].nodeId);
                                    case r.B:
                                        if (!$.has("tools")) return null;
                                        return (0, f.jsx)(nu, {
                                            messages: n.messages,
                                            isComplete: !s
                                        }, n.messages[0].nodeId);
                                    case r.C:
                                        if (!$.has("tools2")) return null;
                                        var i = e[a + 1],
                                            h = i && i.type === r.CEO ? i.message : void 0;
                                        return (0, f.jsx)(nc, {
                                            message: n.message,
                                            outputMessage: h
                                        }, n.message.nodeId);
                                    case r.CEO:
                                        if (!$.has("tools2")) return null;
                                        return (0, f.jsx)(nd, {
                                            message: n.message,
                                            isCollapsed: !1
                                        }, n.message.nodeId);
                                    default:
                                        return null
                                }
                            })
                        }, [m.size, V, ea, A, Q, b, o, l, u, c, d, t, $, ]);
                    return (0, f.jsx)(nv, {
                        className: (0, g.Z)("group", ea ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"),
                        children: (0, f.jsxs)(ny, {
                            children: [(0, f.jsxs)(nj, {
                                children: [ea ? (0, f.jsx)(eQ.k, {
                                    background: er,
                                    iconName: et,
                                    notice: ee || void 0
                                }) : (0, f.jsx)(eQ.Y, {
                                    user: null == Z ? void 0 : Z.user,
                                    notice: ee || void 0
                                }), p.length > 1 && !P && (0, f.jsx)(e5, {
                                    currentPage: B,
                                    onChangeIndex: function(e) {
                                        return o(p[e])
                                    },
                                    length: p.length,
                                    className: "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible"
                                })]
                            }), (0, f.jsxs)("div", {
                                className: "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]",
                                children: [(0, f.jsx)(nb, {
                                    children: eo
                                }), !ea && 1 === b.length && !A && (0, f.jsx)(nC, {
                                    $hidden: 0 !== m.size,
                                    children: (0, f.jsx)(nw, {
                                        onClick: W,
                                        className: "md:invisible md:group-hover:visible",
                                        children: (0, f.jsx)(G.ZP, {
                                            icon: N.vPQ
                                        })
                                    })
                                }), (0, f.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [p.length > 1 && P && (0, f.jsx)(e5, {
                                        currentPage: B,
                                        onChangeIndex: function(e) {
                                            return o(p[e])
                                        },
                                        length: p.length,
                                        className: "self-center pt-2"
                                    }), ea && (0, f.jsxs)(nC, {
                                        $hidden: Q,
                                        children: ["thumbsDown" !== q && (0, f.jsx)(nw, {
                                            onClick: function() {
                                                return J("thumbsUp")
                                            },
                                            disabled: "thumbsUp" === q,
                                            className: (0, g.Z)("thumbsUp" === q && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
                                            children: (0, f.jsx)(G.ZP, {
                                                icon: N.fmn
                                            })
                                        }, "thumbsUp:".concat(z.nodeId)), "thumbsUp" !== q && (0, f.jsx)(nw, {
                                            onClick: function() {
                                                return J("thumbsDown")
                                            },
                                            disabled: "thumbsDown" === q,
                                            className: (0, g.Z)("thumbsDown" === q && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
                                            children: (0, f.jsx)(G.ZP, {
                                                icon: N.oLd
                                            })
                                        }, "thumbsDown:".concat(z.nodeId))]
                                    })]
                                })]
                            })]
                        })
                    })
                }),
                nv = P.Z.div(nn()),
                nb = P.Z.div(nt()),
                ny = P.Z.div(nr()),
                nj = P.Z.div(na()),
                nw = P.Z.button(no()),
                nC = P.Z.div(ns(), function(e) {
                    return e.$hidden ? "invisible" : "visible"
                }),
                nk = t(35888),
                nZ = t(44819),
                nN = ["confidential", "plus"];

            function nP(e) {
                var n = e.onChangeModelSetting,
                    t = e.availableModels,
                    r = e.modelBackend,
                    a = (0, I.WS)(),
                    o = (0, k.useCallback)(function(e) {
                        n(nZ.G3.Model, e.id), a(S.s6.toggleModel, {
                            model: e.id
                        })
                    }, [a, n]),
                    s = t.find(function(e) {
                        return e.id === r
                    }) || t[0];
                return (0, f.jsx)(nk.R, {
                    value: s,
                    onChange: o,
                    children: function(e) {
                        var n, r = e.open;
                        return (0, f.jsx)(f.Fragment, {
                            children: (0, f.jsxs)("div", {
                                className: "relative w-full md:m-auto md:w-1/2 lg:w-1/3 xl:w-1/4",
                                children: [(0, f.jsxs)(nk.R.Button, {
                                    className: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm",
                                    children: [(0, f.jsx)(nk.R.Label, {
                                        className: "block text-xs text-gray-700 dark:text-gray-500",
                                        children: "Model"
                                    }), (0, f.jsx)("span", {
                                        className: "inline-flex w-full truncate",
                                        children: (0, f.jsxs)("span", {
                                            className: "flex h-6 items-center gap-1 truncate",
                                            children: [null == s ? void 0 : s.title, null == s ? void 0 : null === (n = s.tags) || void 0 === n ? void 0 : n.map(function(e) {
                                                return nS(e)
                                            })]
                                        })
                                    }), (0, f.jsx)("span", {
                                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                        children: (0, f.jsx)(G.ZP, {
                                            icon: N.bTu,
                                            className: " text-gray-400",
                                            "aria-hidden": "true"
                                        })
                                    })]
                                }), (0, f.jsx)(eh.u, {
                                    show: r,
                                    as: k.Fragment,
                                    leave: "transition ease-in duration-100",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, f.jsx)(nk.R.Options, {
                                        className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-white/20 dark:last:border-0 sm:text-sm md:w-[200%] md:-translate-x-1/4",
                                        children: t.map(function(e) {
                                            return (0, f.jsx)(nk.R.Option, {
                                                className: function(e) {
                                                    var n = e.active;
                                                    return (0, g.Z)(n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900", "relative cursor-pointer select-none border-b border-gray-100 py-2 pl-3 pr-9 last:border-0 dark:border-white/20")
                                                },
                                                value: e,
                                                children: function(n) {
                                                    var t = n.selected,
                                                        r = n.active;
                                                    return (0, f.jsxs)(f.Fragment, {
                                                        children: [(0, f.jsxs)("div", {
                                                            className: "flex flex-col",
                                                            children: [(0, f.jsxs)("span", {
                                                                className: (0, g.Z)("font-semibold", "flex h-6 items-center gap-1 truncate text-gray-800 dark:text-gray-100"),
                                                                children: [e.title, e.tags.map(function(e) {
                                                                    return nS(e)
                                                                })]
                                                            }), (0, f.jsx)("span", {
                                                                className: (0, g.Z)(r ? "" : "text-gray-500", "text-xs"),
                                                                children: e.description
                                                            })]
                                                        }), t ? (0, f.jsx)("span", {
                                                            className: (0, g.Z)("absolute inset-y-0 right-0 flex items-center pr-4 text-gray-800 dark:text-gray-100"),
                                                            children: (0, f.jsx)(G.ZP, {
                                                                icon: N.UgA,
                                                                className: "h-5 w-5",
                                                                "aria-hidden": "true"
                                                            })
                                                        }) : null]
                                                    })
                                                }
                                            }, e.id)
                                        })
                                    })
                                })]
                            })
                        })
                    }
                })
            }
            var nI = function(e) {
                    var n = e.modelBackend,
                        t = e.availableModels,
                        r = t.find(function(e) {
                            return e.id === n
                        }) || t[0],
                        a = r.tags.filter(function(e) {
                            return nN.includes(e)
                        }).map(function(e) {
                            return nS(e)
                        });
                    return (0, f.jsxs)("div", {
                        className: "w-full border-b border-black/10 bg-gray-50 p-3 text-center text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
                        children: ["Model: ", r.title, a.length > 0 && (0, f.jsxs)(f.Fragment, {
                            children: [" ", (0, f.jsx)("span", {
                                className: "px-2",
                                children: "•"
                            }), " ", a]
                        })]
                    })
                },
                nS = function(e) {
                    return nN.includes(e) && (0, f.jsx)("span", {
                        className: (0, g.Z)("rounded-md px-1 py-0.5 text-xs font-semibold uppercase", "confidential" === e && "bg-red-200 text-red-800", "plus" === e && "bg-yellow-200 text-yellow-900"),
                        children: e
                    }, e)
                },
                nM = t(75318);

            function nT() {
                var e = (0, u.Z)(["text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
                return nT = function() {
                    return e
                }, e
            }

            function nD() {
                var e = (0, u.Z)(["text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"]);
                return nD = function() {
                    return e
                }, e
            }

            function nR() {
                var e = (0, u.Z)(["md:flex items-start text-center gap-3.5"]);
                return nR = function() {
                    return e
                }, e
            }

            function nA() {
                var e = (0, u.Z)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
                return nA = function() {
                    return e
                }, e
            }

            function nF() {
                var e = (0, u.Z)(["flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
                return nF = function() {
                    return e
                }, e
            }

            function nE() {
                var e = (0, u.Z)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
                return nE = function() {
                    return e
                }, e
            }

            function nL() {
                var e = (0, u.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
                return nL = function() {
                    return e
                }, e
            }

            function nO() {
                var e = (0, u.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
                return nO = function() {
                    return e
                }, e
            }

            function nU() {
                var e = (0, u.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
                return nU = function() {
                    return e
                }, e
            }
            var nB = P.Z.div(nT()),
                nz = P.Z.h1(nD()),
                n_ = P.Z.div(nR()),
                nq = P.Z.div(nA()),
                nH = P.Z.h2(nF()),
                n$ = P.Z.ul(nE()),
                nW = P.Z.li(nL()),
                nG = P.Z.li(nO()),
                nV = P.Z.button(nU());

            function nJ(e) {
                var n = e.text,
                    t = e.onChangeCurrentPrompt,
                    r = (0, k.useCallback)(function() {
                        t(n)
                    }, [n, t]);
                return (0, f.jsxs)(nV, {
                    onClick: r,
                    children: ['"', n, '" →']
                })
            }

            function nY(e) {
                var n = e.onChangeCurrentPrompt,
                    t = (0, F.nR)();
                return (0, f.jsxs)(nB, {
                    children: [(0, f.jsxs)(nz, {
                        children: ["ChatGPT", t && (0, f.jsx)(eY, {
                            children: "Plus"
                        })]
                    }), (0, f.jsxs)(n_, {
                        children: [(0, f.jsxs)(nq, {
                            children: [(0, f.jsxs)(nH, {
                                children: [(0, f.jsx)(G.ZP, {
                                    icon: N.kXG,
                                    size: "medium"
                                }), "Examples"]
                            }), (0, f.jsxs)(n$, {
                                children: [(0, f.jsx)(nJ, {
                                    text: "Explain quantum computing in simple terms",
                                    onChangeCurrentPrompt: n
                                }), (0, f.jsx)(nJ, {
                                    text: "Got any creative ideas for a 10 year old’s birthday?",
                                    onChangeCurrentPrompt: n
                                }), (0, f.jsx)(nJ, {
                                    text: "How do I make an HTTP request in Javascript?",
                                    onChangeCurrentPrompt: n
                                })]
                            })]
                        }), (0, f.jsxs)(nq, {
                            children: [(0, f.jsxs)(nH, {
                                children: [(0, f.jsx)(G.ZP, {
                                    icon: nM.Z,
                                    size: "medium"
                                }), "Capabilities"]
                            }), (0, f.jsxs)(n$, {
                                children: [(0, f.jsx)(nW, {
                                    children: "Remembers what user said earlier in the conversation"
                                }), (0, f.jsx)(nW, {
                                    children: "Allows user to provide follow-up corrections"
                                }), (0, f.jsx)(nW, {
                                    children: "Trained to decline inappropriate requests"
                                })]
                            })]
                        }), (0, f.jsxs)(nq, {
                            children: [(0, f.jsxs)(nH, {
                                children: [(0, f.jsx)(G.ZP, {
                                    icon: N.BJv,
                                    size: "medium"
                                }), "Limitations"]
                            }), (0, f.jsxs)(n$, {
                                children: [(0, f.jsx)(nW, {
                                    children: "May occasionally generate incorrect information"
                                }), (0, f.jsx)(nW, {
                                    children: "May occasionally produce harmful instructions or biased content"
                                }), (0, f.jsx)(nW, {
                                    children: "Limited knowledge of world and events after 2021"
                                })]
                            })]
                        })]
                    })]
                })
            }
            var nX = t(40053);

            function nK() {
                return (0, f.jsxs)(nB, {
                    children: [(0, f.jsx)(nz, {
                        children: "Workspace"
                    }), (0, f.jsxs)(n_, {
                        children: [(0, f.jsxs)(nq, {
                            children: [(0, f.jsx)(G.ZP, {
                                icon: N.kXG,
                                size: "medium",
                                className: "m-auto"
                            }), (0, f.jsx)(nH, {
                                children: "Learn about anything"
                            }), (0, f.jsxs)(n$, {
                                children: [(0, f.jsx)(nG, {
                                    children: "Explain quantum computing, in layman's terms"
                                }), (0, f.jsx)(nG, {
                                    children: "What the heck is a Kubernetes cluster?"
                                }), (0, f.jsx)(nG, {
                                    children: "Quiz me on the Boston Tea Party"
                                })]
                            })]
                        }), (0, f.jsxs)(nq, {
                            children: [(0, f.jsx)(G.ZP, {
                                icon: nM.Z,
                                size: "medium",
                                className: "m-auto"
                            }), (0, f.jsx)(nH, {
                                children: "Synthesize information"
                            }), (0, f.jsxs)(n$, {
                                children: [(0, f.jsx)(nG, {
                                    children: "Pull out memorable quotes from this blog post"
                                }), (0, f.jsx)(nG, {
                                    children: "Summarize this meeting transcript as a poem"
                                }), (0, f.jsx)(nG, {
                                    children: "Compare and contrast these two articles"
                                })]
                            })]
                        }), (0, f.jsxs)(nq, {
                            children: [(0, f.jsx)(G.ZP, {
                                icon: nX.Z,
                                size: "medium",
                                className: "m-auto"
                            }), (0, f.jsx)(nH, {
                                children: "Create things together"
                            }), (0, f.jsxs)(n$, {
                                children: [(0, f.jsx)(nG, {
                                    children: "Plan an itinerary for a weekend trip to Big Sur"
                                }), (0, f.jsx)(nG, {
                                    children: "Create an alien-themed browser game, full code"
                                }), (0, f.jsx)(nG, {
                                    children: "Write a critical analysis on the current state of AI"
                                })]
                            })]
                        })]
                    })]
                })
            }
            var nQ = t(24066);

            function n0() {
                var e = (0, u.Z)(["w-full px-6 md:px-0 md:max-w-2xl lg:max-w-3xl md:h-full md:flex text-gray-600 dark:text-white gap-10 items-center justify-between"]);
                return n0 = function() {
                    return e
                }, e
            }

            function n1() {
                var e = (0, u.Z)(["font-mono font-normal text-6xl flex gap-6 flex-col items-center py-10 border-b-2 border-gray-700 md:items-start md:border-0 md:py-0"]);
                return n1 = function() {
                    return e
                }, e
            }

            function n2() {
                var e = (0, u.Z)(["flex flex-col items-center justify-evenly h-full"]);
                return n2 = function() {
                    return e
                }, e
            }

            function n3() {
                var e = (0, u.Z)(["flex flex-col items-center gap-2"]);
                return n3 = function() {
                    return e
                }, e
            }

            function n6() {
                var e = (0, u.Z)(["text-xl font-normal"]);
                return n6 = function() {
                    return e
                }, e
            }

            function n5() {
                var e = (0, u.Z)(["text-base dark:text-gray-300"]);
                return n5 = function() {
                    return e
                }, e
            }

            function n4() {
                return (0, f.jsxs)(n7, {
                    children: [(0, f.jsx)(n8, {
                        children: "Codespace"
                    }), (0, f.jsxs)(n9, {
                        children: [(0, f.jsxs)(te, {
                            children: [(0, f.jsx)(G.ZP, {
                                className: "text-gray-400",
                                icon: nQ.Z,
                                size: "medium"
                            }), (0, f.jsx)(tn, {
                                children: "Ask anything"
                            }), (0, f.jsx)(tt, {
                                children: "No matter how simple or complex"
                            })]
                        }), (0, f.jsxs)(te, {
                            children: [(0, f.jsx)(G.ZP, {
                                className: "text-gray-400",
                                icon: N.cDN,
                                size: "medium"
                            }), (0, f.jsx)(tn, {
                                children: "Write code"
                            }), (0, f.jsx)(tt, {
                                children: "From one line of code to full-fledged apps"
                            })]
                        }), (0, f.jsxs)(te, {
                            children: [(0, f.jsx)(G.ZP, {
                                className: "text-gray-400",
                                icon: N.U0j,
                                size: "medium"
                            }), (0, f.jsx)(tn, {
                                children: "Debug faster"
                            }), (0, f.jsx)(tt, {
                                children: "Paste in a code of just an error statement"
                            })]
                        })]
                    })]
                })
            }
            var n7 = P.Z.div(n0()),
                n8 = P.Z.h1(n1()),
                n9 = P.Z.div(n2()),
                te = P.Z.div(n3()),
                tn = P.Z.h2(n6()),
                tt = P.Z.p(n5());

            function tr() {
                var e = (0, u.Z)(["flex flex-col items-center text-sm  dark:bg-gray-800\n", ""]);
                return tr = function() {
                    return e
                }, e
            }

            function ta() {
                var e = (0, u.Z)(["w-full h-32 md:h-48 flex-shrink-0"]);
                return ta = function() {
                    return e
                }, e
            }

            function to() {
                var e = (0, u.Z)(["cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"]);
                return to = function() {
                    return e
                }, e
            }

            function ts() {
                var e = (0, u.Z)(["px-2 py-10 relative w-full flex flex-col h-full"]);
                return ts = function() {
                    return e
                }, e
            }

            function ti() {
                var e = (0, u.Z)(["text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"]);
                return ti = function() {
                    return e
                }, e
            }

            function tl(e) {
                var n = e.conversationTurns,
                    t = e.onChangeItemInView,
                    r = e.onCreateNewNode,
                    a = e.onUpdateNode,
                    o = e.onChangeRating,
                    s = e.onDeleteNode,
                    i = e.onRequestCompletion,
                    l = e.onChangeCurrentPrompt,
                    u = e.threadId,
                    c = e.treeRef,
                    d = e.activeRequests,
                    m = e.isProcessingArtifact,
                    h = e.isLoading,
                    x = e.onChangeModelSetting,
                    g = e.availableModels,
                    p = e.currentThreadModel,
                    v = e.canShowThreadSettings,
                    b = (0, k.useContext)(L.yP).id,
                    y = (0, eV.useScrollToBottom)(),
                    j = (0, _.Z)((0, eV.useSticky)(), 1)[0],
                    w = (0, q.Z)(),
                    C = n.length < 2,
                    Z = C && !h && !v,
                    P = v && C && !h,
                    I = (0, F.nR)(),
                    S = (0, k.useState)(!1),
                    M = S[0],
                    T = S[1],
                    D = (0, nZ.ZP)(g, p).modelBackend;
                (0, k.useEffect)(function() {
                    h ? setTimeout(function() {
                        w() && T(!0)
                    }, 1e3) : T(!1)
                }, [h, w]);
                var A = (0, k.useMemo)(function() {
                    switch (b) {
                        case "chat":
                            return "ChatGPT";
                        case "programming":
                            return "Codespace";
                        case "default":
                            return "Workspace"
                    }
                }, [b]);
                return (0, f.jsxs)(f.Fragment, {
                    children: [P && (0, f.jsxs)(tm, {
                        children: [(0, f.jsx)(nP, {
                            onChangeModelSetting: x,
                            availableModels: g,
                            modelBackend: D
                        }), (0, f.jsxs)(tf, {
                            children: [A, I && (0, f.jsx)(eY, {
                                children: "Plus"
                            })]
                        })]
                    }), (0, f.jsxs)(tu, {
                        $fullHeight: "programming" === b && Z,
                        children: ["programming" === b && Z && (0, f.jsx)(n4, {}), "chat" === b && Z && (0, f.jsx)(nY, {
                            onChangeCurrentPrompt: l
                        }), "default" === b && Z && (0, f.jsx)(nK, {}), M && h && (0, f.jsx)(V.Z, {
                            className: "mx-auto mt-4"
                        }), !C && !h && v && (0, f.jsx)(nI, {
                            availableModels: g,
                            modelBackend: D
                        }), n.map(function(e, n) {
                            return e.role === R.uU.Unknown ? null : (0, f.jsx)(np, {
                                turn: e,
                                threadId: u,
                                treeRef: c,
                                onChangeItemInView: t,
                                onChangeRating: o,
                                onCreateNewNode: r,
                                onDeleteNode: s,
                                onRequestCompletion: i,
                                onUpdateNode: a,
                                activeRequests: d
                            }, n)
                        }), !P && (0, f.jsx)(tc, {})]
                    }), m && (0, f.jsx)(V.Z, {
                        className: "mx-auto mt-4"
                    }), !j && (0, f.jsx)(td, {
                        onClick: y,
                        children: (0, f.jsx)(G.ZP, {
                            icon: N.tv1,
                            className: "m-1"
                        })
                    })]
                })
            }
            var tu = P.Z.div(tr(), function(e) {
                    return e.$fullHeight && "h-full"
                }),
                tc = P.Z.div(ta()),
                td = P.Z.button(to()),
                tm = P.Z.div(ts()),
                tf = P.Z.h1(ti()),
                th = eK()(function() {
                    return Promise.resolve().then(t.bind(t, 1215))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [1215]
                        }
                    },
                    ssr: !1
                });

            function tx(e) {
                var n = e.children;
                return (0, f.jsx)(th, {
                    className: (0, g.Z)("h-full dark:bg-gray-800"),
                    followButtonClassName: "scroll-convo",
                    initialScrollBehavior: "auto",
                    children: n
                })
            }
            var tg = t(44513),
                tp = t(74516);

            function tv() {
                var e = (0, u.Z)(["flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);
                return tv = function() {
                    return e
                }, e
            }
            var tb = function(e) {
                    var n = e.children,
                        t = e.isOpen,
                        r = e.onClose,
                        a = e.focusRef;
                    return (0, f.jsx)(ef.Z, {
                        size: "fullscreen",
                        isOpen: t,
                        onModalClose: r,
                        type: "success",
                        title: "",
                        className: "bg-transparent dark:bg-transparent",
                        initialFocusRef: a,
                        children: (0, f.jsx)("div", {
                            className: "flex h-full flex-col items-center justify-start",
                            children: (0, f.jsx)("div", {
                                className: "relative",
                                children: (0, f.jsx)(ty, {
                                    children: n
                                })
                            })
                        })
                    })
                },
                ty = P.Z.div(tv());

            function tj() {
                var e = (0, u.Z)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);
                return tj = function() {
                    return e
                }, e
            }

            function tw() {
                var e = (0, u.Z)(["gap-2 flex flex-row justify-start items-center text-sm"]);
                return tw = function() {
                    return e
                }, e
            }

            function tC() {
                var e = (0, u.Z)(["text-xl font-semibold justify-between items-center flex"]);
                return tC = function() {
                    return e
                }, e
            }
            var tk = function(e) {
                    var n = e.rowElements;
                    return (0, f.jsx)(tM, {
                        children: n.map(function(e) {
                            return e
                        })
                    })
                },
                tZ = function(e) {
                    var n = e.className,
                        t = e.text,
                        r = e.children;
                    return (0, f.jsxs)(tD, {
                        className: n,
                        children: [(0, f.jsx)("span", {
                            children: t
                        }), r]
                    })
                },
                tN = {
                    "primary-disabled": "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
                    primary: "border-none py-3 font-semibold",
                    disabled: "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"
                },
                tP = function(e) {
                    var n = e.isLoading,
                        t = e.disabled,
                        r = e.onClick,
                        a = (e.className, e.variant),
                        o = void 0 === a ? "primary" : a,
                        s = e.text,
                        i = e.ref;
                    return (0, f.jsxs)(W.z, {
                        disabled: void 0 !== t && t,
                        onClick: r,
                        openNewTab: !0,
                        ref: i,
                        as: "button",
                        className: (0, g.Z)(tN[o]),
                        children: [(0, f.jsx)("span", {
                            className: (0, g.Z)({
                                "text-gray-700": "primary-disabled" === o,
                                "text-white": "primary" === o
                            }),
                            children: s
                        }), void 0 !== n && n && (0, f.jsx)(G.ZP, {
                            className: "animate-spin",
                            icon: N.dAq
                        })]
                    })
                },
                tI = function(e) {
                    var n = e.variant,
                        t = void 0 === n ? "primary" : n,
                        r = e.className,
                        a = e.text;
                    return (0, f.jsxs)(tT, {
                        className: r,
                        children: [(0, f.jsx)(G.ZP, {
                            icon: N._rq,
                            className: (0, g.Z)("h-5 w-5", {
                                "text-green-700": "primary" == t,
                                "text-gray-400": "secondary" == t
                            })
                        }), (0, f.jsx)("span", {
                            children: a
                        })]
                    })
                },
                tS = function(e) {
                    var n = e.className,
                        t = e.text,
                        r = e.isLoading,
                        a = e.onClick;
                    return (0, f.jsx)(tT, {
                        className: n,
                        children: (0, f.jsxs)("button", {
                            onClick: a,
                            className: "flex flex-row items-center space-x-1 underline",
                            children: [(0, f.jsx)("span", {
                                children: t
                            }), r && (0, f.jsx)(G.ZP, {
                                className: "animate-spin",
                                icon: N.dAq
                            })]
                        })
                    })
                },
                tM = P.Z.div(tj()),
                tT = P.Z.div(tw()),
                tD = P.Z.div(tC()),
                tR = {
                    free: {
                        name: "Free Plan",
                        callToAction: {
                            active: "Your Current Plan",
                            inactive: "Your Current Plan"
                        },
                        costInDollars: "",
                        demandAccess: "Available when demand is low",
                        responseSpeed: "Standard response speed",
                        modelFeatures: "Regular model updates"
                    },
                    plus: {
                        name: "ChatGPT Plus",
                        callToAction: {
                            active: "Your current plan",
                            inactive: "I'm Interested",
                            inactivePayment: "Upgrade plan"
                        },
                        costInDollars: "$20/mo",
                        demandAccess: "Available even when demand is high",
                        responseSpeed: "Faster response speed",
                        modelFeatures: "Priority access to new features"
                    },
                    manageSubscription: {
                        callToAction: "Manage my subscription"
                    }
                };

            function tA(e) {
                var n = e.isOpen,
                    t = e.onClose,
                    r = (0, k.useRef)(null),
                    o = (0, I.WS)(),
                    s = (0, k.useState)(!1),
                    i = s[0],
                    l = s[1],
                    u = (0, j.useRouter)(),
                    c = (0, k.useCallback)(function() {
                        o(S.s6.closeAccountPaymentModal), t()
                    }, [t, o]),
                    d = (0, k.useCallback)((0, a.Z)(function() {
                        var e;
                        return (0, m.__generator)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    l(!0), o(S.s6.clickAccountCustomerPortal), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), [4, A.ZP.fetchCustomerPortalUrl()];
                                case 2:
                                    return e = n.sent(), u.push(e.url), [3, 5];
                                case 3:
                                    return n.sent(), tp.m.warning("The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.", {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return l(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [u, o, l]);
                return (0, f.jsxs)(tb, {
                    isOpen: n,
                    onClose: t,
                    focusRef: r,
                    children: [(0, f.jsxs)("div", {
                        className: "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
                        children: [(0, f.jsx)("span", {
                            className: "text-base font-semibold sm:text-base",
                            children: "Your Account"
                        }), (0, f.jsx)("button", {
                            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                            onClick: c,
                            children: (0, f.jsx)(N.q5L, {
                                className: "h-6 w-6"
                            })
                        })]
                    }), (0, f.jsx)("div", {
                        className: "grid",
                        children: (0, f.jsx)("div", {
                            className: "relative order-1 col-span-1 sm:order-2",
                            children: (0, f.jsx)(tk, {
                                rowElements: [(0, f.jsx)(tZ, {
                                    text: tR.plus.name,
                                    children: (0, f.jsx)("span", {
                                        className: "font-semibold text-gray-500",
                                        children: tR.plus.costInDollars
                                    })
                                }, "row-plus-plan-name"), (0, f.jsx)(tP, {
                                    disabled: !0,
                                    variant: "primary-disabled",
                                    ref: r,
                                    text: tR.plus.callToAction.active
                                }, "row-plus-plan-button"), (0, f.jsx)(tI, {
                                    text: tR.plus.demandAccess
                                }, "row-plus-plan-demand"), (0, f.jsx)(tI, {
                                    text: tR.plus.responseSpeed
                                }, "row-plus-plan-speed"), (0, f.jsx)(tI, {
                                    className: "sm:pb-1",
                                    text: tR.plus.modelFeatures
                                }, "row-plus-plan-feathers"), (0, f.jsx)(tS, {
                                    className: "sm:pb-1",
                                    isLoading: i,
                                    text: tR.manageSubscription.callToAction,
                                    onClick: d
                                }, "row-plus-plan-manage"), ]
                            })
                        })
                    })]
                })
            }

            function tF(e) {
                var n = e.isOpen,
                    t = e.onClose,
                    r = (0, k.useRef)(null),
                    o = (0, I.WS)(),
                    s = (0, k.useState)(!1),
                    i = s[0],
                    l = s[1],
                    u = (0, j.useRouter)(),
                    c = (0, k.useCallback)(function() {
                        o(S.s6.closeAccountPaymentModal), t()
                    }, [t, o]),
                    d = (0, k.useCallback)((0, a.Z)(function() {
                        var e;
                        return (0, m.__generator)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    l(!0), o(S.s6.clickAccountPaymentCheckout), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), [4, A.ZP.submitCheckoutForm()];
                                case 2:
                                    return e = n.sent(), u.push(e.url), [3, 5];
                                case 3:
                                    return n.sent(), tp.m.warning("The payments page encountered an error. Please try again. If the problem continues, please email support@openai.com.", {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return l(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [u, o, l]);
                return (0, f.jsxs)(tb, {
                    isOpen: n,
                    onClose: t,
                    focusRef: r,
                    children: [(0, f.jsxs)("div", {
                        className: "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
                        children: [(0, f.jsx)("span", {
                            className: "text-base font-semibold sm:text-base",
                            children: "Your Account"
                        }), (0, f.jsx)("button", {
                            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                            onClick: c,
                            children: (0, f.jsx)(N.q5L, {
                                className: "h-6 w-6"
                            })
                        })]
                    }), (0, f.jsxs)("div", {
                        className: "grid sm:grid-cols-2",
                        children: [(0, f.jsx)("div", {
                            className: "relative order-2 col-span-1 border-t border-r-0 dark:border-gray-700 sm:order-1 sm:border-t-0 sm:border-r",
                            children: (0, f.jsx)(tk, {
                                rowElements: [(0, f.jsx)(tZ, {
                                    text: "Free Plan"
                                }, "row-free-plan-name"), (0, f.jsx)(tP, {
                                    variant: "disabled",
                                    disabled: !0,
                                    text: tR.free.callToAction.active
                                }, "row-free-plan-button"), (0, f.jsx)(tI, {
                                    variant: "secondary",
                                    text: tR.free.demandAccess
                                }, "row-free-plan-demand"), (0, f.jsx)(tI, {
                                    variant: "secondary",
                                    text: tR.free.responseSpeed
                                }, "row-free-plan-speed"), (0, f.jsx)(tI, {
                                    className: "sm:pb-2",
                                    variant: "secondary",
                                    text: tR.free.modelFeatures
                                }, "row-free-plan-updates"), ]
                            })
                        }), (0, f.jsx)("div", {
                            className: "relative order-1 col-span-1 sm:order-2",
                            children: (0, f.jsx)(tk, {
                                rowElements: [(0, f.jsx)(tZ, {
                                    text: tR.plus.name,
                                    children: (0, f.jsx)("span", {
                                        className: "font-semibold text-gray-500",
                                        children: tR.plus.costInDollars
                                    })
                                }, "row-plus-plan-title"), (0, f.jsx)(tP, {
                                    variant: "primary",
                                    disabled: i,
                                    isLoading: i,
                                    ref: r,
                                    onClick: d,
                                    text: tR.plus.callToAction.inactivePayment
                                }, "row-plus-plan-button"), (0, f.jsx)(tI, {
                                    variant: "primary",
                                    text: tR.plus.demandAccess
                                }, "row-plus-plan-demand"), (0, f.jsx)(tI, {
                                    variant: "primary",
                                    text: tR.plus.responseSpeed
                                }, "row-plus-plan-speed"), (0, f.jsx)(tI, {
                                    className: "sm:pb-2",
                                    variant: "primary",
                                    text: tR.plus.modelFeatures
                                }, "row-plus-plan-updates"), ]
                            })
                        })]
                    })]
                })
            }
            var tE = t(44982),
                tL = t(35873),
                tO = t(77064);

            function tU() {
                var e = (0, u.Z)(["h-[37px] py-2.5 px-6 text-xs uppercase text-gray-700 font-medium border-y relative"]);
                return tU = function() {
                    return e
                }, e
            }

            function tB() {
                var e = (0, u.Z)(["relative py-1 px-6 text-xs uppercase text-gray-700 font-medium bg-gray-100 border-y"]);
                return tB = function() {
                    return e
                }, e
            }
            P.Z.h3(tU());
            var tz = P.Z.h3(tB());

            function t_() {
                var e = (0, u.Z)(["overflow-y-auto h-full"]);
                return t_ = function() {
                    return e
                }, e
            }

            function tq() {
                var e = (0, u.Z)(["whitespace-pre-wrap text-sm"]);
                return tq = function() {
                    return e
                }, e
            }

            function tH() {
                var e = (0, u.Z)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer"]);
                return tH = function() {
                    return e
                }, e
            }

            function t$() {
                var e = (0, u.Z)(["absolute top-1/2 -translate-y-1/2 right-6"]);
                return t$ = function() {
                    return e
                }, e
            }

            function tW(e) {
                var n = e.treeRef,
                    t = e.currentLeafId,
                    r = (0, k.useState)(),
                    a = r[0],
                    o = r[1],
                    s = (0, k.useMemo)(function() {
                        return n.current.getBranchFromLeaf(t).filter(function(e) {
                            return e.type !== R.Jq.Root && e.type !== R.Jq.System
                        }).map(function(e) {
                            return e.message
                        })
                    }, [n, t]),
                    i = (0, k.useCallback)(function() {
                        o(void 0)
                    }, []),
                    l = (0, k.useCallback)(function() {
                        navigator.clipboard.writeText(n.current.getTextFromThread(t))
                    }, [n, t]),
                    u = s.map(function(e, n) {
                        return (0, f.jsxs)(tJ, {
                            role: "button",
                            onClick: function() {
                                return o(n)
                            },
                            children: [(0, f.jsx)("div", {
                                className: "text-xs font-medium uppercase text-gray-400",
                                children: e.role
                            }), (0, f.jsx)("div", {
                                children: U.Cv.getTextFromMessage(e)
                            })]
                        }, e.id)
                    });
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsxs)(tG, {
                        children: [(0, f.jsxs)(tz, {
                            children: ["Conversation messages", (0, f.jsx)(tY, {
                                children: (0, f.jsx)(tO.$, {
                                    label: (0, f.jsx)(tO.u, {
                                        text: "Copy conversation text to clipboard"
                                    }),
                                    children: (0, f.jsx)(tL.Z, {
                                        onCopy: l
                                    })
                                })
                            })]
                        }), (0, f.jsx)(tV, {
                            children: u
                        })]
                    }), void 0 !== a && (0, f.jsx)(ef.Z, {
                        isOpen: !0,
                        onModalClose: i,
                        type: "success",
                        children: (0, f.jsx)("pre", {
                            className: "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                            children: JSON.stringify(s[a], null, 2)
                        })
                    }, "DebugMessageModal-".concat(a))]
                })
            }
            var tG = P.Z.div(t_()),
                tV = P.Z.pre(tq()),
                tJ = P.Z.div(tH()),
                tY = P.Z.div(t$()),
                tX = t(30331),
                tK = t(87762),
                tQ = t(32329),
                t0 = t(89678),
                t1 = t.n(t0),
                t2 = t(39400),
                t3 = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i, /\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i, /\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i, ];

            function t6() {
                var e = (0, u.Z)(["overflow-hidden w-full h-full relative"]);
                return t6 = function() {
                    return e
                }, e
            }

            function t5() {
                var e = (0, u.Z)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
                return t5 = function() {
                    return e
                }, e
            }

            function t4() {
                var e = (0, u.Z)(["grow flex-1 overflow-hidden"]);
                return t4 = function() {
                    return e
                }, e
            }

            function t7() {
                var e = (0, u.Z)(["absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient"]);
                return t7 = function() {
                    return e
                }, e
            }
            var t8 = "oai/apps/hasSeenHistoryRestored",
                t9 = function(e) {
                    var n, t, r, u, p, b, w, P, z, _, q, H, $, W, V, J, Y, X, K, Q, ee, en, et, ea, eo, es, ei, el, eu, ec, ed, em, eh, ex, eg, ep, ev, eb, ey, ej = e.initialData,
                        eC = e.features,
                        ek = e.pages,
                        eI = e.isLoading,
                        eS = (0, j.useRouter)(),
                        eM = (0, O.dD)(),
                        eT = (0, k.useContext)(L.yP),
                        eD = eT.id,
                        eR = eT.href,
                        eA = (0, I.WS)(),
                        eF = (0, tQ.n)(),
                        eE = (0, k.useState)(),
                        eL = eE[0],
                        eO = eE[1],
                        eU = (0, k.useState)(),
                        eB = eU[0],
                        e_ = eU[1],
                        eq = (0, k.useRef)(null),
                        eH = (0, k.useRef)(ej.threadId || ""),
                        e$ = (0, F.nR)(),
                        eV = (0, E.g)(function(e) {
                            return e.flags.isUserInCanPayGroup
                        }),
                        eJ = (0, M.kP)().session,
                        eY = null == eJ ? void 0 : eJ.accessToken,
                        eX = (t = (n = {
                            enabled: "chat" === eD && Boolean(A.ZP.accessToken || eY),
                            accessToken: A.ZP.accessToken || eY
                        }).enabled, r = n.accessToken, u = (0, k.useContext)(L.yP).id, w = (b = (0, t2.N)({
                            queryKey: ["conversations", u],
                            queryFn: function(e) {
                                var n = e.pageParam;
                                return A.ZP.getConversations(n || 0, 20, A.ZP.accessToken || r)
                            },
                            getNextPageParam: function(e) {
                                var n = e.offset + e.limit;
                                return n < e.total ? n : void 0
                            },
                            enabled: t
                        })).data, P = b.fetchNextPage, z = b.hasNextPage, _ = b.refetch, q = b.isInitialLoading, H = b.isError, (0, k.useMemo)(function() {
                            return {
                                conversations: null == w ? void 0 : w.pages.reduce(function(e, n) {
                                    if (n) {
                                        var t = n.items;
                                        e.push.apply(e, (0, c.Z)(void 0 === t ? [] : t))
                                    }
                                    return e
                                }, []),
                                hasNextPage: z,
                                fetchNextPage: P,
                                refetch: function() {
                                    return t && _()
                                },
                                isLoading: q,
                                isError: t && H
                            }
                        }, [null == w ? void 0 : w.pages, t, P, z, H, q, _, ])),
                        eK = eX.conversations,
                        eQ = eX.hasNextPage,
                        e0 = eX.fetchNextPage,
                        e1 = eX.refetch,
                        e2 = eX.isLoading,
                        e3 = eX.isError,
                        e6 = (0, k.useState)(!1),
                        e5 = e6[0],
                        e4 = e6[1],
                        e7 = (W = ($ = {
                            exempt: !1,
                            onRestrictedTermFound: (0, k.useCallback)(function(e) {
                                e4(!0), eA(S.s6.promptUsedRestrictedWords, {
                                    threadId: eH.current,
                                    content: e
                                })
                            }, [eA])
                        }).exempt, V = $.onRestrictedTermFound, Y = (J = (0, k.useState)(!1))[0], X = J[1], {
                            hasRestrictedTerms: Y,
                            checkRestrictedTerms: (0, k.useCallback)(function(e) {
                                var n;
                                return (t3.some(function(t) {
                                    var r = t.exec(e);
                                    return r && (n = r[0]), r
                                }), !W && n) ? (X(!0), null == V || V(n), !0) : (X(!1), !1)
                            }, [W, V])
                        }),
                        e8 = e7.hasRestrictedTerms,
                        e9 = e7.checkRestrictedTerms,
                        ne = (0, k.useState)(!0),
                        nn = ne[0],
                        nt = ne[1],
                        nr = (0, k.useState)(!1),
                        na = nr[0],
                        no = nr[1],
                        ns = (0, k.useState)(!1),
                        ni = ns[0],
                        nl = ns[1],
                        nu = (0, k.useState)(!1),
                        nc = nu[0],
                        nd = nu[1],
                        nm = (K = (0, M.kP)().session, Q = (0, tK.a)(["models"], function() {
                            return A.ZP.getModels(null == K ? void 0 : K.accessToken)
                        }, {
                            enabled: !!(null == K ? void 0 : K.accessToken),
                            placeholderData: {
                                models: [{
                                    slug: "text-davinci-002-render",
                                    max_tokens: 4097,
                                    title: "Default",
                                    description: "",
                                    tags: []
                                }, ]
                            },
                            onError: function(e) {
                                try {
                                    tX.Tb(e)
                                } catch (n) {}
                            }
                        }).data, (0, k.useMemo)(function() {
                            var e;
                            return {
                                availableModels: Q ? (e = Q.models).map(function(e) {
                                    return {
                                        id: e.slug,
                                        maxTokens: e.max_tokens,
                                        title: e.title,
                                        description: e.description,
                                        tags: e.tags
                                    }
                                }) : []
                            }
                        }, [Q])).availableModels,
                        nf = (0, nZ.ZP)(nm, ej.lastModelUsed),
                        nh = nf.temperature,
                        nx = nf.modelBackend,
                        ng = nf.onChangeModelSetting,
                        np = (0, k.useRef)(new U.Cv(ej.thread)),
                        nv = (0, k.useState)(ej.currentLeafId),
                        nb = nv[0],
                        ny = nv[1],
                        nj = (0, k.useState)(!1),
                        nw = nj[0],
                        nC = nj[1],
                        nk = (0, k.useMemo)(function() {
                            return {
                                appId: "programming" === eD ? "codeqa" : "",
                                model: nx
                            }
                        }, [eD, nx]),
                        nN = (0, k.useState)(null),
                        nP = nN[0],
                        nI = nN[1],
                        nS = (0, k.useState)({}),
                        nM = nS[0],
                        nT = nS[1],
                        nD = (0, k.useState)(new Set),
                        nR = nD[0],
                        nA = nD[1],
                        nF = (0, k.useCallback)(function(e) {
                            nT(function(n) {
                                return n[e], (0, l.Z)(n, [e].map(d.Z))
                            })
                        }, []),
                        nE = (0, k.useCallback)(function() {
                            "chat" === eD && (e1(), nU(""), nC(!1)), eA(S.s6.newThread)
                        }, [eD, eA, e1]),
                        nL = (0, k.useState)(""),
                        nO = nL[0],
                        nU = nL[1],
                        nB = (0, k.useState)(""),
                        nz = nB[0],
                        n_ = nB[1],
                        nq = nz || nO || ej.title,
                        nH = (0, k.useCallback)(function(e) {
                            "chat" === eD && A.ZP.generateTitle(eH.current, e, nx).then(function(e) {
                                var n = e.title;
                                nU(n), eA(S.s6.renameThread, {
                                    threadId: eH.current,
                                    content: n,
                                    model: nx
                                })
                            }).catch(function(e) {
                                console.error(e)
                            })
                        }, [eD, eA, nx]),
                        n$ = (ee = eH, eu = ej.lastModelUsed, ec = (0, k.useId)(), ed = (0, I.WS)(), em = (0, nZ.ZP)(nm, eu).modelBackend, ex = (eh = (0, k.useState)(0))[0], eg = eh[1], ep = (0, k.useRef)({}), ev = (0, k.useCallback)(function(e, n, t) {
                            var r, o = t.eventSource,
                                s = function() {
                                    setTimeout(function() {
                                        nF(n), nA(function(e) {
                                            var t = new Set(e);
                                            return t.delete(n), t
                                        }), delete ep.current[n]
                                    }, 0)
                                },
                                i = np.current,
                                l = n,
                                u = i.getParentId(l),
                                c = "CompletionUpdated:".concat(n),
                                d = "CompletionUpdated:".concat(u),
                                f = e === R.Os.Continue,
                                h = !0,
                                x = !1,
                                g = i.getMessage(l),
                                p = i.getIsBlockedFromNode(u),
                                v = !1,
                                b = !1,
                                y = t1()(function() {
                                    p || v || (i.updateNodeMessage(l, g), C().publish(c, {
                                        nodeId: l
                                    }))
                                }, 50, {
                                    leading: !0,
                                    maxWait: 50
                                });

                            function j(e, n, t) {
                                return w.apply(this, arguments)
                            }

                            function w() {
                                return (w = (0, a.Z)(function(e, n, t) {
                                    var r, a, o, s, l, u = arguments;
                                    return (0, m.__generator)(this, function(m) {
                                        switch (m.label) {
                                            case 0:
                                                r = u.length > 3 && void 0 !== u[3] && u[3], m.label = 1;
                                            case 1:
                                                return m.trys.push([1, 3, , 4]), [4, (0, D._I)(t, !1, ee.current, i.getMessageId(n))];
                                            case 2:
                                                return o = (a = m.sent()).isBlocked, s = a.isFlagged, (o || s) && (b = !0), o ? (v = !0, r || (p = !0), i.updateNode(n, {
                                                    message: {
                                                        content: {
                                                            parts: {
                                                                $set: [""]
                                                            }
                                                        }
                                                    },
                                                    metadata: {
                                                        $set: D.sK
                                                    }
                                                }), C().publish(r ? c : d, {
                                                    nodeId: n
                                                }), ed(r ? S.s6.completionBlockedByModeration : S.s6.promptBlockedByModeration, {
                                                    threadId: e,
                                                    id: n
                                                })) : s ? (i.updateNode(n, {
                                                    metadata: {
                                                        $set: D.Mf
                                                    }
                                                }), C().publish(r ? c : d, {
                                                    nodeId: n
                                                }), ed(r ? S.s6.completionFlaggedByModeration : S.s6.promptFlaggedByModeration, {
                                                    threadId: e,
                                                    id: n
                                                })) : r && p && (i.updateNodeMessage(n, g), C().publish(c, {
                                                    nodeId: n
                                                })), [3, 4];
                                            case 3:
                                                return l = m.sent(), v = !0, i.updateNode(n, {
                                                    metadata: {
                                                        $set: {
                                                            err: "An error occured",
                                                            errType: "danger"
                                                        }
                                                    }
                                                }), ed(S.s6.moderationError, {
                                                    threadId: e,
                                                    content: JSON.stringify(l || "")
                                                }), C().publish(r ? c : d, {
                                                    nodeId: n
                                                }), C().publish("UnrecoverableError"), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })).apply(this, arguments)
                            }
                            return r = (0, a.Z)(function(t) {
                                    var r, a, d, w, k, Z, N;
                                    return (0, m.__generator)(this, function(m) {
                                        return (r = t.err, a = t.finish_reason, d = t.message, w = t.threadId, !r && d || a) ? (d && (g = d), h ? (h = !1, x = i.isFirstCompletion, w && (ee.current = w), i.updateNodeMessage(l, d), x && nE(), f || j(ee.current, u, i.getTextFromLastNMessages(u, 1), !1), ed(S.s6.generateCompletion, {
                                            id: n,
                                            threadId: w,
                                            completionType: e,
                                            eventSource: o,
                                            model: em
                                        }), C().publish("PublishAborter", {
                                            id: n,
                                            aborter: ep.current[n]
                                        })) : d && !f && d.id !== i.getMessageId(l) && (i.addNode(d.id, d, l, R.Jq.Completion), ny(l = d.id), c = "CompletionUpdated:".concat(l)), y(), "stop" === a && (p || v || (y.flush(), !b && x && nH(i.getMessageId(l))), Z = U.Cv.getTextFromMessage(g), N = i.getTextFromLastNMessages(u, 3) + "\n\n" + Z, j(ee.current, l, N, !0), v || C().publish(c, {
                                            nodeId: l
                                        }), s()), [2]) : (r && console.error(r), k = (null == r ? void 0 : r.message) || "Something went wrong", i.updateNode(l, {
                                            message: {
                                                $set: g
                                            },
                                            metadata: {
                                                $set: {
                                                    err: k,
                                                    errType: "danger"
                                                }
                                            }
                                        }), C().publish(c, {
                                            nodeId: l
                                        }), s(), [2])
                                    })
                                }),
                                function(e) {
                                    return r.apply(this, arguments)
                                }
                        }, [ed, em, nE, nH, nF, nA, ny, ee, np, ]), (0, k.useCallback)((eb = (0, a.Z)(function(e, n, t, r) {
                            var a, o, s, i, l, u, c, d;
                            return (0, m.__generator)(this, function(m) {
                                switch (m.label) {
                                    case 0:
                                        return a = np.current, eg(function(e) {
                                            return e + 1
                                        }), o = "request-".concat(ec, "-").concat(ex), nA(function(e) {
                                            var n = new Set(e);
                                            return n.add(o), n
                                        }), a.addNode(o, "", n, R.Jq.Completion), ny(o), i = [], l = a.getNode(n), e === R.Os.Next || e === R.Os.Variant ? (s = (null === (u = (c = a.getNode(l.parentId)).message) || void 0 === u ? void 0 : u.id) || c.id, i.push(l.message)) : s = l.message.id, [4, A.ZP.publicApiCompletionStream({
                                            model: em,
                                            appId: t.appId
                                        }, {
                                            completionType: e,
                                            threadId: ee.current || void 0,
                                            parentMessageId: s,
                                            messages: i
                                        }, ev(e, o, r))];
                                    case 1:
                                        return d = m.sent(), ep.current[o] = d, [2]
                                }
                            })
                        }), function(e, n, t, r) {
                            return eb.apply(this, arguments)
                        }), [np, ec, ex, nA, ny, em, ee, ev, ])),
                        nW = (0, k.useCallback)(function() {
                            eS.replace({
                                pathname: eS.basePath,
                                query: {}
                            }, void 0, {
                                shallow: !0
                            })
                        }, [eS]),
                        nG = (0, k.useCallback)(function() {
                            if (nb) {
                                var e = np.current.getBranchFromLeaf(nb);
                                nT(function(n) {
                                    var t = (0, s.Z)({}, n);
                                    return e.forEach(function(e) {
                                        e.id in t && (t[e.id].abort(), delete t[e.id])
                                    }), t
                                }), nA(function(n) {
                                    var t = new Set(n);
                                    return e.forEach(function(e) {
                                        t.delete(e.id)
                                    }), t
                                })
                            }
                        }, [nb]),
                        nV = (0, k.useCallback)((ey = (0, a.Z)(function(e, n, t, r) {
                            return (0, m.__generator)(this, function(a) {
                                return r && nG(), e !== R.Os.Continue && e9(np.current.getTextFromNode(n)) || (eF(eH.current), n$(e, n, nk, t)), [2]
                            })
                        }), function(e, n, t, r) {
                            return ey.apply(this, arguments)
                        }), [e9, eF, n$, nk, nG, ]),
                        nJ = (0, k.useCallback)(function(e, n, t, r) {
                            np.current.addNode(e, r, n, R.Jq.Prompt)
                        }, []),
                        nY = (0, k.useCallback)(function(e, n, t) {
                            var r = n.value;
                            nJ(e, nb, R.Jq.Prompt, r), nV(R.Os.Next, e, t, !0)
                        }, [nb, nJ, nV]),
                        nX = (0, k.useMemo)(function() {
                            var e, n, t = np.current.getNode(nb),
                                r = t.type === R.Jq.Prompt,
                                a = (null === (e = t.metadata) || void 0 === e ? void 0 : e.err) && (null === (n = t.metadata) || void 0 === n ? void 0 : n.errCode) !== D.Dd;
                            return Boolean(r || a) && 0 === nR.size
                        }, [nR.size, nb]),
                        nK = (0, k.useCallback)(function(e) {
                            var n = np.current.getParentPromptNode(e).id;
                            nX && (n = e), nV(R.Os.Variant, n, {
                                eventSource: "mouse"
                            }, !1)
                        }, [nV, nX]),
                        nQ = (0, k.useCallback)(function(e) {
                            nV(R.Os.Continue, e, {
                                eventSource: "mouse"
                            }, !1)
                        }, [nV]),
                        n0 = (0, k.useCallback)(function(e) {
                            ny(np.current.getLeafFromNode(e).id), eA(S.s6.changeNode)
                        }, [eA, ny]),
                        n1 = (0, k.useCallback)(function(e, n) {
                            np.current.updateNodeText(e, n)
                        }, []),
                        n2 = (0, k.useCallback)(function(e, n, t) {
                            eA(S.s6.thumbRating, {
                                id: n,
                                threadId: eH.current,
                                rating: t,
                                model: nx
                            }), eH.current && A.ZP.submitMessageFeedback({
                                message_id: n,
                                conversation_id: eH.current,
                                rating: t
                            }), eO(t), e_(n);
                            var r = np.current.getMetadata(e);
                            np.current.updateNode(e, {
                                metadata: {
                                    $set: (0, i.Z)((0, s.Z)({}, r), {
                                        rating: t
                                    })
                                }
                            })
                        }, [eA, nx]),
                        n3 = (0, k.useCallback)(function() {
                            var e, n = null === (e = eq.current) || void 0 === e ? void 0 : e.elements,
                                t = (0, c.Z)(n || []).filter(function(e) {
                                    return e.checked
                                }).map(function(e) {
                                    return e.id
                                }),
                                r = (null == n ? void 0 : n["feedback-other"].value) || "";
                            eL && eB && (r || t.length > 0) && (eA(S.s6.reportResult, {
                                id: eB,
                                threadId: eH.current,
                                content: r,
                                model: nx,
                                rating: eL,
                                tags: t
                            }), eH.current && A.ZP.submitMessageFeedback({
                                message_id: eB,
                                conversation_id: eH.current,
                                rating: eL,
                                text: r,
                                tags: t.map(function(e) {
                                    return e.replace("feedback-", "")
                                })
                            })), eO(void 0)
                        }, [eA, nx, eB, eL]),
                        n6 = (0, k.useCallback)(function(e) {
                            np.current.deleteNode(e)
                        }, []),
                        n5 = (0, k.useCallback)(function(e) {
                            switch (null == e ? void 0 : e.state) {
                                case "pending":
                                    nJ("artifact", "root", R.Jq.Prompt, e.url), nJ("artifact-summary", "artifact", R.Jq.Completion, "loading..."), ny("artifact"), nI(e);
                                    break;
                                case "success":
                                    n1("artifact-summary", e.contents), ny("artifact-summary"), nI(e);
                                    break;
                                default:
                                    nI(e)
                            }
                        }, [nJ, n1, ny]),
                        n4 = (0, k.useCallback)(function() {
                            nd(function(e) {
                                return "debug" !== e && "debug"
                            })
                        }, []),
                        n7 = (0, k.useCallback)(function() {
                            eA(S.s6.clickSidebarAccountPortalMenuItem), nl(!0)
                        }, [eA, nl]),
                        n8 = (0, k.useCallback)(function() {
                            nl(!1)
                        }, [nl]),
                        n9 = (0, tE.t)(function(e) {
                            return {
                                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                                showAccountPaymentModal: e.showAccountPaymentModal
                            }
                        }),
                        te = n9.showAccountPaymentModal,
                        tn = n9.setShowAccountPaymentModal,
                        tt = (0, k.useCallback)(function() {
                            tn(!0, function() {
                                eA(S.s6.clickSidebarAccountPaymentMenuItem)
                            })
                        }, [eA, tn]),
                        tr = (0, k.useCallback)(function() {
                            tn(!1)
                        }, [tn]),
                        ta = (0, k.useCallback)(function() {
                            nd(function(e) {
                                return "navigation" !== e && "navigation"
                            })
                        }, []),
                        to = (0, k.useCallback)(function(e, n) {
                            if (np.current.isFirstCompletion) {
                                var t, r = np.current.getParent(n);
                                (null === (t = r.metadata) || void 0 === t ? void 0 : t.errCode) !== D.Dd && setTimeout(function() {
                                    nH(r.message.id)
                                }, 500)
                            }
                            nT(function(e) {
                                var t = e[n],
                                    r = (0, l.Z)(e, [n].map(d.Z));
                                return null == t || t.abort(), r
                            }), nA(function(e) {
                                var t = new Set(e);
                                return t.delete(n), t
                            })
                        }, [nH]),
                        ts = (0, k.useCallback)(function(e, n) {
                            var t = n.id,
                                r = n.aborter;
                            r && nT(function(e) {
                                return (0, i.Z)((0, s.Z)({}, e), (0, o.Z)({}, t, r))
                            })
                        }, []),
                        ti = (0, k.useCallback)(function() {
                            nT(function(e) {
                                return Object.values(e).forEach(function(e) {
                                    return e.abort()
                                }), {}
                            }), nA(new Set), ny("root"), nI(null), np.current = new U.Cv, eH.current = "", nC(!0), e1()
                        }, [e1]),
                        tu = (0, k.useCallback)(function() {
                            A.ZP.deleteConversations().then(function() {
                                e1()
                            }), eS.asPath !== eR ? eS.replace({
                                pathname: eR
                            }) : ti()
                        }, [ti, eR, e1, eS]),
                        tc = (0, k.useCallback)(function() {
                            no(!0)
                        }, []);
                    (0, k.useEffect)(function() {
                        return C().subscribe("AbortCompletion", to), C().subscribe("PublishAborter", ts), C().subscribe("UnrecoverableError", tc),
                            function() {
                                C().unsubscribe("AbortCompletion"), C().unsubscribe("PublishAborter"), C().unsubscribe("UnrecoverableError")
                            }
                    }, [to, ts, tc]);
                    var td = (0, k.useMemo)(function() {
                            return np.current.getConversationTurns(nb || "root")
                        }, [nb]),
                        tm = (0, k.useMemo)(function() {
                            return 0 === td.length ? nb : U.Cv.getRequestIdFromConversationTurn(td[td.length - 1])
                        }, [td, nb]),
                        tf = (0, k.useState)(""),
                        th = tf[0],
                        tv = tf[1],
                        tb = (0, k.useCallback)(function() {
                            nt(!0), T.m.setItem("oai/librarian/hasSeenWarning", "true")
                        }, []),
                        ty = (0, k.useCallback)(function() {
                            e4(!1)
                        }, []),
                        tj = (0, k.useMemo)(function() {
                            return eC.has("debug") ? new Set([nZ.G3.Model]) : new Set
                        }, [eC]),
                        tw = (0, k.useMemo)(function() {
                            return !!eC.has("can_continue") && !nM[nb] && np.current.isMessageIncomplete(nb)
                        }, [nM, nb, eC]),
                        tC = void 0 !== e$ && e$,
                        tk = (0, (0, tg.PV)(eD).getHasSeenOnboardingDate)(),
                        tZ = "chat" === eD && tk && new Date("2023-01-11") > tk && !localStorage.getItem(t8);
                    (0, k.useEffect)(function() {
                        tZ && (tp.m.success("Your previously unavailable conversation history has been restored! Your previous conversations can now be viewed and continued as normal. We apologize for any inconvenience caused by the recent outage. Thank you for your patience and understanding.", {
                            hasCloseButton: !0,
                            duration: 0
                        }), localStorage.setItem(t8, "true"))
                    }, [tZ]);
                    var tN = (0, k.useMemo)(function() {
                        return (0, f.jsx)(er, {
                            items: eK || [],
                            activeId: nw ? "" : eH.current,
                            hasNextPage: Boolean(eQ),
                            onNextPage: e0,
                            onNewThread: ti,
                            onRefetchHistory: e1,
                            onUpdateUserModifiedTitle: n_,
                            userModifiedTitle: nz,
                            newChatName: nO,
                            isLoading: e2,
                            isError: e3
                        })
                    }, [eK, nw, eQ, e0, ti, e1, nz, nO, e2, e3, ]);
                    return (0, f.jsxs)(re, {
                        children: [(0, f.jsx)(y(), {
                            children: (0, f.jsx)("title", {
                                children: nq
                            })
                        }), !nn && (0, f.jsx)(ef.Z, {
                            isOpen: !0,
                            onModalClose: tb,
                            icon: x.Z,
                            title: "Do not share sensitive materials with this application",
                            primaryButton: (0, f.jsx)(ef.m, {
                                onClick: tb,
                                title: "Acknowledge"
                            }),
                            type: "danger"
                        }, "OnboardingModal"), e8 && e5 && (0, f.jsx)(ef.Z, {
                            isOpen: !0,
                            onModalClose: ty,
                            icon: N.U0j,
                            title: "This prompt may violate our content policy.",
                            primaryButton: (0, f.jsx)(ef.m, {
                                onClick: ty,
                                title: "Acknowledge"
                            }),
                            type: "danger"
                        }, "RestrictedTerms"), Boolean(eL) && (0, f.jsx)(ef.Z, {
                            isOpen: !0,
                            onModalClose: function() {
                                return eO(void 0)
                            },
                            type: "thumbsUp" === eL ? "success" : "danger",
                            icon: "thumbsUp" === eL ? N.fmn : N.oLd,
                            title: "Provide additional feedback",
                            primaryButton: (0, f.jsx)(ef.m, {
                                title: "Submit feedback",
                                onClick: n3
                            }),
                            children: (0, f.jsxs)("form", {
                                ref: eq,
                                children: [(0, f.jsx)(Z.ZP, {
                                    id: "feedback-other",
                                    placeholder: "What would the ideal answer have been?",
                                    rows: 3,
                                    className: "mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                                }), "thumbsDown" === eL && (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(B, {
                                        id: "feedback-harmful",
                                        label: "This is harmful / unsafe"
                                    }), (0, f.jsx)(B, {
                                        id: "feedback-false",
                                        label: "This isn't true"
                                    }), (0, f.jsx)(B, {
                                        id: "feedback-not-helpful",
                                        label: "This isn't helpful"
                                    })]
                                })]
                            })
                        }, "RatingModal-".concat(eB)), (0, f.jsxs)("div", {
                            className: "flex h-full flex-1 flex-col md:pl-[260px]",
                            children: [eM && (0, f.jsx)(eP, {
                                onNewThread: ti,
                                onSidebarOpen: ta,
                                title: ej.title,
                                newChatName: nO
                            }), (0, f.jsxs)(rn, {
                                className: "flex-1 ",
                                children: [(0, f.jsx)(rt, {
                                    children: (0, f.jsx)(tx, {
                                        children: (0, f.jsx)(tl, {
                                            isLoading: eI,
                                            onChangeItemInView: n0,
                                            onCreateNewNode: nJ,
                                            onUpdateNode: n1,
                                            onChangeRating: n2,
                                            onDeleteNode: n6,
                                            onRequestCompletion: nV,
                                            onChangeCurrentPrompt: tv,
                                            threadId: eH.current,
                                            treeRef: np,
                                            conversationTurns: td,
                                            activeRequests: nR,
                                            isProcessingArtifact: (null == nP ? void 0 : nP.state) === "pending",
                                            onChangeModelSetting: ng,
                                            availableModels: nm,
                                            currentThreadModel: ej.lastModelUsed,
                                            canShowThreadSettings: eC.has("model_switcher") && nm.length > 1
                                        })
                                    })
                                }), (0, f.jsxs)(rr, {
                                    children: [(0, f.jsx)(ez, {
                                        currentLeafId: nb,
                                        currentRequestId: tm,
                                        threadId: eH.current,
                                        currentPrompt: th,
                                        onChangeCurrentPrompt: tv,
                                        onRequestMoreCompletions: nK,
                                        onCreateNewCompletion: nY,
                                        onAbortCompletion: to,
                                        onContinueGenerating: nQ,
                                        isCompletionInProgress: nR.has(tm),
                                        onUpdateArtifactStatus: n5,
                                        artifact: nP,
                                        className: (0, g.Z)("stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"),
                                        placeholder: "programming" === eD ? "How do I..." : "",
                                        shouldRetry: nX,
                                        canContinue: tw,
                                        disabled: !nm.length,
                                        canPause: Boolean(nM[tm])
                                    }), "chat" === eD && (0, f.jsxs)("div", {
                                        className: "px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
                                        children: [(0, f.jsx)("a", {
                                            href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "underline",
                                            children: "ChatGPT Jan 30 Version"
                                        }), !e$ && ". Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve."]
                                    })]
                                })]
                            })]
                        }), eM && (0, f.jsx)(eN, {
                            onSidebarOpen: ta,
                            sidebarOpen: "navigation" === nc,
                            onClickAccountPayment: tt,
                            showAccountPaymentMenuItem: !tC && eV,
                            onClickCustomerPortal: n7,
                            showCustomerPortalMenuItem: tC,
                            onDeleteHistory: tu,
                            showDeleteHistory: Boolean(null == eK ? void 0 : eK.length),
                            onNewThread: ti,
                            onOpenDebugPanel: n4,
                            pages: ek,
                            children: tN
                        }), !eM && (0, f.jsx)(eZ, {
                            onClickAccountPayment: tt,
                            showAccountPaymentMenuItem: !tC && eV,
                            onClickCustomerPortal: n7,
                            showCustomerPortalMenuItem: tC,
                            onDeleteHistory: tu,
                            showDeleteHistory: Boolean(null == eK ? void 0 : eK.length),
                            onNewThread: ti,
                            onOpenDebugPanel: n4,
                            pages: ek,
                            settings: tj.size > 0 && (0, f.jsx)(eW.ZP, {
                                temperature: nh,
                                onRestoreDefaults: nW,
                                onChangeModelSetting: ng,
                                position: "top-right",
                                modelSettings: tj,
                                features: eC,
                                children: (0, f.jsxs)(h.J.Button, {
                                    as: ew,
                                    children: [(0, f.jsx)(G.ZP, {
                                        icon: N.nbt
                                    }), "Settings"]
                                })
                            }),
                            children: tN
                        }), (0, f.jsx)(eG, {
                            icon: N.cDN,
                            title: "Debug",
                            sidebarOpen: "debug" === nc,
                            onSidebarOpen: ta,
                            children: (0, f.jsx)(tW, {
                                treeRef: np,
                                currentLeafId: nb
                            })
                        }), eV && (0, f.jsx)(tF, {
                            isOpen: te,
                            onClose: tr
                        }), tC && (0, f.jsx)(tA, {
                            isOpen: ni,
                            onClose: n8
                        }), na && (0, f.jsx)(ef.Z, {
                            onModalClose: v(),
                            isOpen: !0,
                            icon: x.Z,
                            title: "Something went wrong",
                            description: "We're sorry, but something went wrong. Please try again later.",
                            primaryButton: (0, f.jsx)(ef.m, {
                                onClick: function() {
                                    ti(), no(!1)
                                },
                                title: "Reset thread"
                            }),
                            type: "danger"
                        }, "UnrecoverableErrorModal")]
                    })
                },
                re = P.Z.div(t6()),
                rn = P.Z.main(t5()),
                rt = P.Z.div(t4()),
                rr = P.Z.div(t7()),
                ra = t9
        },
        44513: function(e, n, t) {
            t.d(n, {
                ZP: function() {
                    return I
                },
                PV: function() {
                    return P
                }
            });
            var r = t(14806),
                a = t(35250),
                o = t(70079),
                s = t(34303),
                i = t(62676),
                l = t(500),
                u = t(39690);

            function c() {
                var e = (0, r.Z)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
                return c = function() {
                    return e
                }, e
            }

            function d() {
                var e = (0, r.Z)(["w-10 text-2xl text-center"]);
                return d = function() {
                    return e
                }, e
            }

            function m() {
                var e = (0, r.Z)(["flex-1 leading-5"]);
                return m = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, r.Z)(["flex gap-4 mt-6"]);
                return f = function() {
                    return e
                }, e
            }

            function h(e) {
                var n = e.icon,
                    t = e.children;
                return (0, a.jsxs)(x, {
                    children: [(0, a.jsx)(g, {
                        children: n
                    }), (0, a.jsx)(p, {
                        children: t
                    })]
                })
            }
            var x = s.Z.div(c()),
                g = s.Z.div(d()),
                p = s.Z.div(m());

            function v(e) {
                var n = e.onBack,
                    t = e.onNext,
                    r = e.onSubmit;
                return (0, a.jsxs)(b, {
                    children: [n && (0, a.jsx)(u.z, {
                        as: "button",
                        color: "neutral",
                        onClick: n,
                        children: "Back"
                    }), t && (0, a.jsx)(u.z, {
                        as: "button",
                        onClick: t,
                        color: "neutral",
                        className: "ml-auto",
                        children: "Next"
                    }), r && (0, a.jsx)(u.z, {
                        as: "button",
                        onClick: r,
                        color: "primary",
                        className: "ml-auto",
                        children: "Done"
                    })]
                })
            }
            var b = s.Z.div(f());

            function y() {
                var e = (0, r.Z)(["prose dark:prose-invert"]);
                return y = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, r.Z)(["!mt-4 font-normal !mb-2"]);
                return j = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, r.Z)(["mb-4"]);
                return w = function() {
                    return e
                }, e
            }

            function C() {
                var e = (0, r.Z)(["w-full h-[1px] bg-gray-300 opacity-20"]);
                return C = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, r.Z)(["flex gap-4 flex-col text-sm"]);
                return k = function() {
                    return e
                }, e
            }

            function Z() {
                var e = (0, r.Z)(["text-xs leading-5 mt-4 flex items-center"]);
                return Z = function() {
                    return e
                }, e
            }
            var N = "oai/apps/hasSeenOnboarding",
                P = function(e) {
                    var n = (0, o.useCallback)(function() {
                            i.m.setItem("".concat(N, "/").concat(e), new Date().toLocaleDateString("en-CA", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit"
                            }))
                        }, [e]),
                        t = (0, o.useState)(null),
                        r = t[0],
                        a = t[1];
                    (0, o.useEffect)(function() {
                        a(i.m.getItem("".concat(N, "/").concat(e)))
                    }, [a, e]);
                    var s = (0, o.useCallback)(function() {
                        return r ? new Date(!0 === r ? "2022-12-14" : r) : r
                    }, [r]);
                    return (0, o.useMemo)(function() {
                        return {
                            setHasSeenOnboarding: n,
                            getHasSeenOnboardingDate: s
                        }
                    }, [s, n])
                };

            function I(e) {
                var n = e.onClose,
                    t = P((0, o.useContext)(l.yP).id).setHasSeenOnboarding,
                    r = (0, o.useState)(0),
                    s = r[0],
                    i = r[1],
                    u = (0, o.useCallback)(function() {
                        n(!0), t()
                    }, [n, t]);
                return (0, a.jsxs)(R, {
                    children: [0 === s && (0, a.jsx)(M, {
                        onChangePage: i
                    }), 1 === s && (0, a.jsx)(T, {
                        onChangePage: i
                    }), 2 === s && (0, a.jsx)(D, {
                        onChangePage: i,
                        onSubmit: u
                    })]
                })
            }
            var S = function() {
                    var e = (0, o.useContext)(l.yP),
                        n = e.id,
                        t = e.name;
                    return "chat" === n ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mb-5",
                            children: (0, a.jsx)(A, {
                                children: (0, a.jsx)("b", {
                                    children: t
                                })
                            })
                        }), (0, a.jsx)(E, {})]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(A, {
                            children: ["Welcome to ", (0, a.jsx)("b", {
                                children: t
                            })]
                        }), (0, a.jsx)("p", {
                            children: "Here are a few things to keep in mind before we get started:"
                        }), (0, a.jsx)(E, {})]
                    })
                },
                M = function(e) {
                    var n = e.onChangePage;
                    return "chat" === (0, o.useContext)(l.yP).id ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(S, {}), (0, a.jsx)(F, {
                            children: "This is a free research preview."
                        }), (0, a.jsxs)(L, {
                            children: [(0, a.jsx)(h, {
                                icon: "\uD83D\uDD2C",
                                children: "Our goal is to get external feedback in order to improve our systems and make them safer."
                            }), (0, a.jsx)(h, {
                                icon: "\uD83D\uDEA8",
                                children: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice."
                            })]
                        }), (0, a.jsx)(v, {
                            onNext: function() {
                                return n(1)
                            }
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(S, {}), (0, a.jsx)(F, {
                            children: "Confidentiality"
                        }), (0, a.jsxs)(L, {
                            children: [(0, a.jsx)(h, {
                                icon: "\uD83E\uDD2B",
                                children: "This private preview is strictly for testing purposes only"
                            }), (0, a.jsxs)(h, {
                                icon: "\uD83D\uDCC3",
                                children: ["Please do not share info about this product with anyone. Use of this product is subject to our", " ", (0, a.jsx)("a", {
                                    href: "https://openai.com/api/policies/terms/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Terms of Service"
                                })]
                            })]
                        }), (0, a.jsx)(v, {
                            onNext: function() {
                                return n(1)
                            }
                        })]
                    })
                },
                T = function(e) {
                    var n = e.onChangePage,
                        t = (0, o.useContext)(l.yP).id;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(S, {}), (0, a.jsx)(F, {
                            children: "How we collect data"
                        }), (0, a.jsxs)(L, {
                            children: [(0, a.jsx)(h, {
                                icon: "\uD83E\uDDBE",
                                children: "Conversations may be reviewed by our AI trainers to improve our systems."
                            }), (0, a.jsx)(h, {
                                icon: "\uD83D\uDD10",
                                children: "Please don't share any sensitive information in your conversations."
                            })]
                        }), "chat" !== t && (0, a.jsx)(O, {
                            children: "If you think you've mentioned sensitive information, please reach out to chat@openai.com"
                        }), (0, a.jsx)(v, {
                            onBack: function() {
                                return n(0)
                            },
                            onNext: function() {
                                return n(2)
                            }
                        })]
                    })
                },
                D = function(e) {
                    var n = e.onChangePage,
                        t = e.onSubmit,
                        r = (0, o.useContext)(l.yP).id,
                        s = (0, o.useRef)(null);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(S, {}), (0, a.jsx)(F, {
                            children: "We'd love your feedback!"
                        }), (0, a.jsxs)(L, {
                            children: [(0, a.jsx)(h, {
                                icon: "\uD83D\uDC4D",
                                children: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful."
                            }), (0, a.jsx)(h, {
                                icon: "\uD83D\uDCAC",
                                children: "chat" === r ? (0, a.jsxs)(a.Fragment, {
                                    children: ["Share your feedback in our", " ", (0, a.jsx)("a", {
                                        href: "https://discord.gg/openai",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Discord server"
                                    }), "."]
                                }) : "Share your ideas and feedback with us directly"
                            })]
                        }), (0, a.jsx)(v, {
                            onBack: function() {
                                return n(1)
                            },
                            onSubmit: function() {
                                return null == t ? void 0 : t(s)
                            }
                        })]
                    })
                },
                R = s.Z.div(y()),
                A = s.Z.h2(j()),
                F = s.Z.h4(w()),
                E = s.Z.div(C()),
                L = s.Z.div(k()),
                O = s.Z.div(Z())
        },
        44982: function(e, n, t) {
            t.d(n, {
                t: function() {
                    return u
                }
            });
            var r = t(31501),
                a = t(61079),
                o = t(91530),
                s = t.n(o),
                i = t(59268),
                l = {
                    showAccountPaymentModal: !1
                },
                u = (0, i.ZP)()(function(e) {
                    return (0, a.Z)((0, r.Z)({}, l), {
                        setShowAccountPaymentModal: function(n) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s();
                            e({
                                showAccountPaymentModal: n
                            }), t && t()
                        }
                    })
                })
        },
        32329: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return h
                },
                n: function() {
                    return x
                }
            });
            var r = t(87762),
                a = t(62906),
                o = t(61432),
                s = t(70079),
                i = t(31501),
                l = t(61079),
                u = t(89874),
                c = t(60814),
                d = t(80836),
                m = t(36613);
            t(24638);
            var f = t(74516);

            function h(e) {
                var n = e.threadId,
                    t = e.accessToken,
                    a = (0, o.useRouter)(),
                    h = (0, r.a)(["conversation", n], function() {
                        return c.ZP.getConversation(n, t, !1)
                    }, {
                        enabled: Boolean(n),
                        onError: function() {
                            a.replace("/chat"), f.m.danger("Unable to load conversation ".concat(n))
                        }
                    }),
                    x = h.data,
                    g = h.isLoading,
                    p = (0, s.useMemo)(function() {
                        if (!x) return {
                            thread: d.Cv.createTree(),
                            currentLeafId: "root",
                            threadId: null,
                            title: "New chat",
                            lastModelUsed: null
                        };
                        var e, n, t, r, o, s, c = (t = null === (n = Object.values(x.mapping).find(function(e) {
                            return null === e.parent
                        })) || void 0 === n ? void 0 : n.id, r = new Set, o = new Set, (x.moderation_results || []).forEach(function(e) {
                            e.blocked ? o.add(e.message_id) : e.flagged && r.add(e.message_id)
                        }), {
                            rootId: t,
                            mapping: Object.keys(x.mapping).reduce(function(e, n) {
                                var t, a = x.mapping[n],
                                    s = a.parent,
                                    c = a.children,
                                    f = (0, u.Z)(a, ["parent", "children"]),
                                    h = x.mapping[n].message || d.Cv.createRootMessage();
                                return o.has(h.id) ? t = m.sK : r.has(h.id) && (t = m.Mf), e[n] = (0, i.Z)((0, l.Z)((0, i.Z)({}, f), {
                                    message: h,
                                    children: c || [],
                                    parentId: s || "",
                                    type: d.uV[h.role]
                                }), t && {
                                    metadata: t
                                }), e
                            }, {}),
                            currentLeafId: x.current_node
                        });
                        return {
                            thread: c.mapping || d.Cv.createTree(),
                            currentLeafId: c.currentLeafId || c.rootId || "root",
                            threadId: null === (s = a.query.chatId) || void 0 === s ? void 0 : s[0],
                            title: x.title || null,
                            lastModelUsed: function e(n, t) {
                                var r, a, o = n[t];
                                return (null == o ? void 0 : null === (r = o.message) || void 0 === r ? void 0 : null === (a = r.metadata) || void 0 === a ? void 0 : a.model_slug) ? o.message.metadata.model_slug : (null == o ? void 0 : o.parentId) ? e(n, o.parentId) : (console.log("No model found in conversation tree"), null)
                            }(c.mapping, c.currentLeafId)
                        }
                    }, [x, a.query.chatId]);
                return (0, s.useMemo)(function() {
                    return {
                        threadData: p,
                        isLoading: Boolean(n && g)
                    }
                }, [g, p, n])
            }

            function x() {
                var e = (0, a.NL)();
                return (0, s.useCallback)(function(n) {
                    e.removeQueries(["conversation", n])
                }, [e])
            }
        },
        44819: function(e, n, t) {
            t.d(n, {
                G3: function() {
                    return r
                },
                ZP: function() {
                    return f
                }
            });
            var r, a, o = t(33861),
                s = t(31501),
                i = t(61079),
                l = t(61432),
                u = t(70079),
                c = t(500),
                d = t(46275);

            function m(e) {
                return e.includes("text-davinci")
            }

            function f(e, n) {
                var t, a, f = (0, u.useContext)(c.yP).id,
                    h = (0, l.useRouter)(),
                    x = h.query,
                    g = n || decodeURIComponent(x[r.Model] || ""),
                    p = (0, u.useMemo)(function() {
                        if (g || e.length) {
                            var n, t = g || (null === (n = e.find(function(e) {
                                    return "chat" === f ? m(e.id) : !m(e.id)
                                })) || void 0 === n ? void 0 : n.id) || e[0].id,
                                r = (0, d.Vq)(g) ? "custom" : t;
                            return e.find(function(e) {
                                return e.id === r
                            })
                        }
                    }, [e, f, g]),
                    v = parseFloat(x[r.Temperature] || "1"),
                    b = (0, u.useCallback)(function(e, n) {
                        h.replace({
                            pathname: h.basePath,
                            query: (0, i.Z)((0, s.Z)({}, x), (0, o.Z)({}, e, encodeURIComponent(n)))
                        }, void 0, {
                            shallow: !0
                        })
                    }, [x, h]);
                return (0, u.useMemo)(function() {
                    return {
                        temperature: v,
                        modelBackend: (null == p ? void 0 : p.id) || "",
                        onChangeModelSetting: b
                    }
                }, [b, null == p ? void 0 : p.id, v])
            }(a = r || (r = {})).Model = "model", a.Temperature = "temperature", a.Context = "context"
        },
        49690: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(70079),
                a = t(12762),
                o = t(98943),
                s = t(82018),
                i = t(60814);

            function l(e, n, t, l, u, c) {
                var d = (0, s.kP)().session,
                    m = (0, a.WS)(l);
                (0, r.useEffect)(function() {
                    i.ZP.setAccessToken(t), a.ZP.setUser(n, u, c), m(o.s6.pageLoad)
                }, []), (0, r.useEffect)(function() {
                    (null == d ? void 0 : d.accessToken) && i.ZP.setAccessToken(d.accessToken), (null == d ? void 0 : d.error) === "RefreshAccessTokenError" && (console.error(d.error), window._oaiHandleSessionExpired("page load", d.error))
                }, [d]), (0, r.useEffect)(function() {
                    document.title = e
                }, [e])
            }
        },
        66285: function(e, n, t) {
            t.d(n, {
                hz: function() {
                    return c
                },
                mA: function() {
                    return l
                },
                nR: function() {
                    return u
                }
            });
            var r = t(31501),
                a = t(61079),
                o = t(70079),
                s = t(59268),
                i = {
                    lastUpdated: Date.now()
                },
                l = (0, s.ZP)()(function(e) {
                    return (0, a.Z)((0, r.Z)({}, i), {
                        resetAccount: function() {
                            e(i)
                        },
                        updateAccountPlanWithResponse: function(n) {
                            var t, r, a;
                            e({
                                accountPlan: {
                                    hasPaidSubscription: (null == n ? void 0 : null === (t = n.account_plan) || void 0 === t ? void 0 : t.is_paid_subscription_active) || !1,
                                    subscriptionPlan: (null == n ? void 0 : null === (r = n.account_plan) || void 0 === r ? void 0 : r.subscription_plan) || "chatgptplusfreeplan",
                                    accountUserRole: (null == n ? void 0 : null === (a = n.account_plan) || void 0 === a ? void 0 : a.account_user_role) || "account-owner"
                                },
                                features: (null == n ? void 0 : n.features) || []
                            })
                        }
                    })
                }),
                u = function() {
                    return l(function(e) {
                        var n;
                        return null === (n = e.accountPlan) || void 0 === n ? void 0 : n.hasPaidSubscription
                    })
                },
                c = function() {
                    var e = l(function(e) {
                        return e.features
                    });
                    return (0, o.useMemo)(function() {
                        return new Set(e)
                    }, [e])
                }
        },
        27252: function(e, n, t) {
            t.d(n, {
                g: function() {
                    return l
                }
            });
            var r = t(33861),
                a = t(31501),
                o = t(61079),
                s = t(59268),
                i = {
                    flags: {
                        isUserInCanPayGroup: !1,
                        projectWish: !1,
                        highlightPlusUpgrade: !1,
                        failwhaleBypassEnabled: !1
                    }
                },
                l = (0, s.ZP)()(function(e, n) {
                    return (0, o.Z)((0, a.Z)({}, i), {
                        updateFlagValue: function(t, s) {
                            var i = n().flags;
                            e({
                                flags: (0, o.Z)((0, a.Z)({}, i), (0, r.Z)({}, t, s))
                            })
                        }
                    })
                })
        },
        11699: function(e, n, t) {
            t.d(n, {
                Ui: function() {
                    return d
                },
                dD: function() {
                    return c
                }
            });
            var r, a, o, s = t(33861),
                i = t(70079);
            (o = r || (r = {})).Small = "small", o.Medium = "medium", o.Large = "large", o.XLarge = "xlarge", o.Full = "full";
            var l = (a = {}, (0, s.Z)(a, r.Small, 640), (0, s.Z)(a, r.Medium, 768), (0, s.Z)(a, r.Large, 1024), (0, s.Z)(a, r.XLarge, 1280), (0, s.Z)(a, r.Full, 1536), a);

            function u(e) {
                var n = function() {
                        o(t(e))
                    },
                    t = function(e) {
                        return window.matchMedia(e).matches
                    },
                    r = (0, i.useState)(t(e)),
                    a = r[0],
                    o = r[1];
                return (0, i.useEffect)(function() {
                    var t = window.matchMedia(e);
                    return n(), t.addListener ? t.addListener(n) : t.addEventListener("change", n),
                        function() {
                            t.removeListener ? t.removeListener(n) : t.removeEventListener("change", n)
                        }
                }, [e]), a
            }

            function c() {
                return u("(max-width: ".concat(l[r.Medium], "px)"))
            }

            function d() {
                return u("(max-width: ".concat(l[r.Large], "px)"))
            }
        },
        62676: function(e, n, t) {
            t.d(n, {
                m: function() {
                    return o
                }
            });
            var r = t(35025);
            t(70079);
            var a = window.localStorage,
                o = function() {
                    function e() {
                        (0, r.Z)(this, e)
                    }
                    return e.setItem = function(e, n) {
                        if (!a) throw Error("You cannot set localStorage server-side");
                        a.setItem(e, JSON.stringify(n))
                    }, e.getItem = function(e) {
                        if (a) {
                            var n = a.getItem(e);
                            return "string" == typeof n ? JSON.parse(n) : n
                        }
                        return null
                    }, e.removeItem = function(e) {
                        if (a) return a.removeItem(e)
                    }, e
                }()
        }
    }
]);