(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6], {
        49529: function(a, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/chat/[[...chatId]]", function() {
                return e(911)
            }])
        },
        911: function(a, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                __N_SSP: function() {
                    return I
                },
                default: function() {
                    return y
                }
            });
            var i = e(35250),
                t = e(91530),
                o = e.n(t),
                s = e(61432),
                r = e(70079),
                u = e(73925),
                l = e(12762),
                c = e(98943),
                d = e(62676),
                h = e(44982),
                S = "oai/apps/hasSeenReleaseAnnouncement",
                M = "2023-02-10";

            function m(a) {
                var n = a.hasSeenOnboardingDate,
                    e = a.userCountry,
                    t = a.isUserPaid,
                    o = (0, r.useState)(!1),
                    s = o[0],
                    m = o[1];
                (0, r.useEffect)(function() {
                    !t && m(function() {
                        return !Boolean(d.m.getItem("".concat(S, "/").concat(M))) && !!n && n < new Date(M)
                    })
                }, [n, t]);
                var P = (0, r.useCallback)(function() {
                        d.m.setItem("".concat(S, "/").concat(M), !0), m(!1)
                    }, []),
                    C = (0, l.WS)();
                (0, r.useEffect)(function() {
                    s && C(c.s6.announcementViewed, {
                        content: M
                    })
                }, [s, C]);
                var p = (0, h.t)(function(a) {
                        return {
                            setShowAccountPaymentModal: a.setShowAccountPaymentModal,
                            showAccountPaymentModal: a.showAccountPaymentModal
                        }
                    }).setShowAccountPaymentModal,
                    g = (0, r.useCallback)(function() {
                        p(!0, function() {
                            C(c.s6.clickModalAccountPaymentSecondaryButton)
                        })
                    }, [C, p]),
                    G = (0, r.useCallback)(function() {
                        d.m.setItem("".concat(S, "/").concat(M), !0), m(!1), g()
                    }, [g]);
                return (0, i.jsx)(u.Z, {
                    size: "xs",
                    isOpen: s,
                    onModalClose: P,
                    type: "success",
                    title: "",
                    primaryButton: (0, i.jsx)(u.m, {
                        title: "Learn more",
                        color: "primary",
                        onClick: G
                    }),
                    secondaryButton: (0, i.jsx)(u.m, {
                        title: "Close",
                        color: "neutral",
                        onClick: P
                    }),
                    children: (0, i.jsxs)("div", {
                        className: "mb-6 flex flex-col gap-6",
                        children: [(0, i.jsx)("div", {
                            className: "text-gray-800 dark:text-white",
                            children: "Feb 10 update"
                        }), (0, i.jsxs)("div", {
                            className: "text-2xl",
                            children: ["ChatGPT Plus is available in ", (0, i.jsx)("b", {
                                children: e
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "prose text-base dark:prose-invert",
                            children: [(0, i.jsx)("div", {
                                className: "",
                                children: "Subscribers will receive:"
                            }), (0, i.jsxs)("ul", {
                                children: [(0, i.jsx)("li", {
                                    children: "General access to ChatGPT, even during peak times"
                                }), (0, i.jsx)("li", {
                                    children: "Faster response times"
                                }), (0, i.jsx)("li", {
                                    children: "Priority access to new features and improvements"
                                })]
                            })]
                        })]
                    })
                })
            }
            var P = e(91592),
                C = e(44513),
                p = e(74516),
                g = e(32329),
                G = e(49690),
                T = e(66285),
                f = {
                    AD: "Andorra",
                    AE: "United Arab Emirates",
                    AG: "Antigua and Barbuda",
                    AI: "Anguilla",
                    AL: "Albania",
                    AM: "Armenia",
                    AO: "Angola",
                    AQ: "Antarctica",
                    AR: "Argentina",
                    AS: "American Samoa",
                    AT: "Austria",
                    AU: "Australia",
                    AW: "Aruba",
                    AX: "\xc5land Islands",
                    AZ: "Azerbaijan",
                    BA: "Bosnia and Herzegovina",
                    BB: "Barbados",
                    BD: "Bangladesh",
                    BE: "Belgium",
                    BF: "Burkina Faso",
                    BG: "Bulgaria",
                    BJ: "Benin",
                    BL: "Saint Barth\xe9lemy",
                    BM: "Bermuda",
                    BN: "Brunei",
                    BO: "Bolivia",
                    BQ: "Caribbean Netherlands",
                    BR: "Brazil",
                    BS: "The Bahamas",
                    BT: "Bhutan",
                    BV: "Bouvet Island",
                    BW: "Botswana",
                    BZ: "Belize",
                    CA: "Canada",
                    CC: "Cocos (Keeling) Islands",
                    CG: "The Republic of the Congo",
                    CH: "Switzerland",
                    CI: "Ivory Coast",
                    CK: "Cook Islands",
                    CL: "Chile",
                    CO: "Colombia",
                    CR: "Costa Rica",
                    CV: "Cape Verde",
                    CW: "Cura\xe7ao",
                    CX: "Christmas Island",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DJ: "Djibouti",
                    DK: "Denmark",
                    DM: "Dominica",
                    DO: "Dominican Republic",
                    DZ: "Algeria",
                    EC: "Ecuador",
                    EE: "Estonia",
                    EH: "Western Sahara",
                    ES: "Spain",
                    FI: "Finland",
                    FJ: "Fiji",
                    FK: "Falkland Islands",
                    FM: "Micronesia",
                    FO: "Faroe Islands",
                    FR: "France",
                    GA: "Gabon",
                    GB: "United Kingdom",
                    GD: "Grenada",
                    GE: "Georgia",
                    GF: "French Guiana",
                    GG: "Guernsey",
                    GH: "Ghana",
                    GI: "Gibraltar",
                    GL: "Greenland",
                    GM: "Gambia",
                    GN: "Guinea",
                    GP: "Guadeloupe",
                    GR: "Greece",
                    GS: "South Georgia and the South Sandwich Islands",
                    GT: "Guatemala",
                    GU: "Guam",
                    GW: "Guinea-Bissau",
                    GY: "Guyana",
                    HM: "Heard Island and McDonald Islands",
                    HN: "Honduras",
                    HR: "Croatia",
                    HT: "Haiti",
                    HU: "Hungary",
                    ID: "Indonesia",
                    IE: "Ireland",
                    IL: "Israel",
                    IM: "Isle of Man",
                    IO: "British Indian Ocean Territory",
                    IQ: "Iraq",
                    IS: "Iceland",
                    IT: "Italy",
                    JE: "Jersey",
                    JM: "Jamaica",
                    JO: "Jordan",
                    JP: "Japan",
                    KE: "Kenya",
                    KG: "Kyrgyzstan",
                    KI: "Kiribati",
                    KM: "Comoros",
                    KN: "Saint Kitts and Nevis",
                    KR: "South Korea",
                    KW: "Kuwait",
                    KY: "Cayman Islands",
                    KZ: "Kazakhstan",
                    LB: "Lebanon",
                    LC: "Saint Lucia",
                    LI: "Liechtenstein",
                    LK: "Sri Lanka",
                    LR: "Liberia",
                    LS: "Lesotho",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    LV: "Latvia",
                    MA: "Morocco",
                    MC: "Monaco",
                    MD: "Moldova",
                    ME: "Montenegro",
                    MF: "Saint Martin",
                    MG: "Madagascar",
                    MH: "The Marshall Islands",
                    MK: "North Macedonia",
                    ML: "Mali",
                    MM: "Myanmar",
                    MN: "Mongolia",
                    MP: "The Northern Mariana Islands",
                    MQ: "Martinique",
                    MR: "Mauritania",
                    MS: "Montserrat",
                    MT: "Malta",
                    MU: "Mauritius",
                    MV: "Maldives",
                    MW: "Malawi",
                    MX: "Mexico",
                    MY: "Malaysia",
                    MZ: "Mozambique",
                    NA: "Namibia",
                    NC: "New Caledonia",
                    NE: "Niger",
                    NF: "Norfolk Island",
                    NG: "Nigeria",
                    NI: "Nicaragua",
                    NL: "Netherlands",
                    NO: "Norway",
                    NP: "Nepal",
                    NR: "Nauru",
                    NU: "Niue",
                    NZ: "New Zealand",
                    OM: "Oman",
                    PA: "Panama",
                    PE: "Peru",
                    PF: "French Polynesia",
                    PG: "Papua New Guinea",
                    PH: "Philippines",
                    PK: "Pakistan",
                    PL: "Poland",
                    PM: "Saint Pierre and Miquelon",
                    PN: "Pitcairn",
                    PR: "Puerto Rico",
                    PS: "Palestine",
                    PT: "Portugal",
                    PW: "Palau",
                    PY: "Paraguay",
                    QA: "Qatar",
                    RE: "Reunion",
                    RO: "Romania",
                    RS: "Serbia",
                    RW: "Rwanda",
                    SB: "Solomon Islands",
                    SC: "The Seychelles",
                    SE: "Sweden",
                    SG: "Singapore",
                    SH: "Saint Helena, Ascension and Tristan da Cunha",
                    SI: "Slovenia",
                    SJ: "Svalbard and Jan Mayen",
                    SK: "Slovakia",
                    SL: "Sierra Leone",
                    SM: "San Marino",
                    SN: "Senegal",
                    SR: "Suriname",
                    ST: "Sao Tome and Principe",
                    SV: "El Salvador",
                    SX: "Sint Maarten",
                    TC: "Turks and Caicos Islands",
                    TF: "French Southern Territories",
                    TG: "Togo",
                    TH: "Thailand",
                    TK: "Tokelau",
                    TL: "Timor-Leste",
                    TN: "Tunisia",
                    TO: "Tonga",
                    TR: "Turkey",
                    TT: "Trinidad and Tobago",
                    TV: "Tuvalu",
                    TW: "Taiwan",
                    TZ: "Tanzania",
                    UG: "Uganda",
                    UM: "The United States Minor Outlying Islands",
                    US: "The United States",
                    UY: "Uruguay",
                    VA: "Vatican City",
                    VC: "Saint Vincent and the Grenadines",
                    VG: "British Virgin Islands",
                    VI: "U.S. Virgin Islands",
                    VN: "Vietnam",
                    VU: "Vanuatu",
                    WF: "Wallis and Futuna",
                    WS: "Samoa",
                    YT: "Mayotte",
                    ZA: "South Africa",
                    ZM: "Zambia",
                    ZW: "Zimbabwe"
                },
                v = e(27252),
                A = e(500),
                I = !0;

            function y(a) {
                var n, e, t = a.user,
                    d = a.accessToken,
                    h = a.features,
                    S = a.pages,
                    M = a.accountStatusResponse,
                    I = a.isUserInCanPayGroup,
                    y = a.showcasePlusUpdate,
                    B = a.shouldShowPaidAnnouncement,
                    N = a.serviceStatus,
                    b = a.countryCode,
                    w = (0, r.useState)(!1),
                    E = w[0],
                    L = w[1],
                    x = (0, r.useMemo)(function() {
                        return A.TJ
                    }, []),
                    R = (0, s.useRouter)(),
                    k = (0, C.PV)(x.id).getHasSeenOnboardingDate,
                    F = (0, T.nR)(),
                    K = (null === (n = R.query.chatId) || void 0 === n ? void 0 : n[0]) || "",
                    U = (0, g.Z)({
                        threadId: K,
                        accessToken: d
                    }),
                    _ = U.threadData,
                    V = U.isLoading,
                    j = (0, v.g)(function(a) {
                        return a.updateFlagValue
                    }),
                    D = b ? f[b] : void 0;
                (0, r.useEffect)(function() {
                    void 0 !== I && j("isUserInCanPayGroup", I)
                }, [j, I]), (0, r.useEffect)(function() {
                    void 0 !== y && j("highlightPlusUpgrade", y)
                }, [j, y]), (0, r.useEffect)(function() {
                    (null == N ? void 0 : N.type) && void 0 !== F && !F && p.m.warning(N.message, {
                        hasCloseButton: !0,
                        duration: 5
                    })
                }, [F, null == N ? void 0 : N.message, null == N ? void 0 : N.type]);
                var O = (0, r.useMemo)(function() {
                        return {
                            app: c.VY,
                            origin: "chat"
                        }
                    }, []),
                    Z = (0, T.mA)(function(a) {
                        return {
                            accountPlan: a.accountPlan,
                            updateAccountPlanWithResponse: a.updateAccountPlanWithResponse
                        }
                    }),
                    H = Z.accountPlan,
                    W = Z.updateAccountPlanWithResponse;
                return (0, G.Z)("ChatGPT", t, d, O, h, null == M ? void 0 : M.account_plan), (0, r.useEffect)(function() {
                    var a;
                    (null == H ? void 0 : H.hasPaidSubscription) !== (null === (a = M.account_plan) || void 0 === a ? void 0 : a.is_paid_subscription_active) && M && W(M)
                }, [W, M, H]), (0, r.useEffect)(function() {
                    L(!k())
                }, [k]), (0, i.jsx)(A.yP.Provider, {
                    value: x,
                    children: (0, i.jsxs)(l.Af.Provider, {
                        value: O,
                        children: [(0, i.jsx)(u.Z, {
                            isOpen: E,
                            onModalClose: o(),
                            type: "success",
                            title: "",
                            primaryButton: void 0,
                            children: (0, i.jsx)(C.ZP, {
                                onClose: function() {
                                    return L(!1)
                                }
                            })
                        }), B && D && (0, i.jsx)(m, {
                            userCountry: D,
                            isUserPaid: null === (e = M.account_plan) || void 0 === e ? void 0 : e.is_paid_subscription_active,
                            hasSeenOnboardingDate: k()
                        }), (0, i.jsx)(P.Z, {
                            initialData: _,
                            features: new Set(h),
                            pages: S,
                            isLoading: V
                        }, _.threadId || "new")]
                    })
                })
            }
        }
    },
    function(a) {
        a.O(0, [960, 741, 762, 979, 424, 536, 568, 814, 232, 962, 774, 888, 179], function() {
            return a(a.s = 49529)
        }), _N_E = a.O()
    }
]);