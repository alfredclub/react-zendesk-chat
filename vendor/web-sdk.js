/*!
 * Copyright Zendesk, Inc.
 * 
 * By downloading or accessing this software, You agree to the Zendesk Terms of Service (https://www.zendesk.com/company/terms) and Application Developer and API License Agreement (https://www.zendesk.com/company/application-developer-and-api-license-agreement) and acknowledge that such terms govern Your use of and access to the software.
 * 
 */
!function(e, t) {
"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.zChat = t() : e.zChat = t();
}(this, function() {
return function(e) {
function t(i) {
if (n[i]) return n[i].exports;
var o = n[i] = {
exports: {},
id: i,
loaded: !1
};
e[i].call(o.exports, o, o.exports, t);
o.loaded = !0;
return o.exports;
}
var n = {};
t.c = n;
return t(0);
}([ function(e, t, n) {
(function(t) {
e.exports = function() {
var i = n(2), o = i;
e.exports = o;
t(o, "web_sdk");
return o;
}();
}).call(t, n(1));
}, function(e, t) {
function n(e, t) {
if ("function" == typeof e && e.prototype && !e.__jx__no_fqname) {
e.prototype.__jx__fqname_chain = (e.prototype.__jx__fqname_chain || "") + " " + t;
e.prototype.__jx__fqname = t;
}
}
e.exports = n;
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
if (pe || me) ee(new Error("Zendesk Chat Web SDK has already been initialized. Please ensure that zChat.init() is only called once in your code")); else {
var t = Ve.obj({
account_key: Ve.type("string").ok(),
suppress_console_error: Ve.type("boolean"),
override_proxy: Ve.type("string").ok()
}, {
requiredKeys: [ "account_key" ]
});
if (!te([ t ], [ e ], "init()")) {
var n = new ke("root"), i = new ke("root");
Re() && n.$("livechat").$("ui").$("mobile$bool").update(!0);
o(e, Ae, n, i);
}
}
}
function o(e, t, n, i) {
de = t;
pe = n;
me = i;
G();
ge = function(e) {
Me.fire(e.type, e.detail);
};
Pe.on("data", ge);
_e = function(e) {
var t = e.path ? me.descend(e.path) : me;
t.update(e.update);
};
de.on("message", _e);
Se.ACCOUNT_KEY = e.account_key;
ve = e.suppress_console_error || !1;
Le.init();
de.init({
root: pe,
overrideProxy: e.override_proxy,
isCookieDenied: function() {
return !1;
},
source: je,
lastHost: Le.DOM.getVariable("web_sdk_last_host"),
source_ver: "1.2.0"
});
pe.$("connection").$("server$string").bindValue(function(e) {
e && Le.DOM.saveVariable("web_sdk_last_host", e);
});
Ce.init(pe, de);
Oe.init(pe);
}
function r() {
de.reconnect();
}
function s() {
return Pe;
}
function a() {
return Ye(me.$("livechat").$("profile").getValue());
}
function c(e, t) {
var n = "setVisitorInfo()", i = Ve.obj({
display_name: Ve.any([ Ve.equal(""), Ve.type("string").regex(qe) ]),
email: Ve.any([ Ve.equal(""), Ve.type("string").regex(De.email) ]),
phone: Ve.any([ Ve.equal(""), Ve.type("string").regex(Fe) ])
});
if (!te([ i, We ], [ e, t ], n)) {
var o = {};
t = t || Ue;
"display_name" in e && (o.display_name$string = e.display_name);
"email" in e && (o.email$string = e.email);
"phone" in e && (o.phone$string = e.phone);
pe.$("livechat").$("profile").write(o, oe(t));
}
}
function u(e, t) {
var n = "sendChatMsg()", i = Ve.type("string").regex(qe);
if (!te([ i, We ], [ e, t ], n)) {
t = t || Ue;
Ce.sendChatMsg({
msg: e.trim()
}, null, oe(t));
}
}
function l(e, t) {
var n = "sendFile()", i = Ve.chain(ne);
te([ i, We ], [ e, t ], n) || f(e, t);
}
function f(e, t) {
t = t || Ue;
Ae.reconnectIfServerRetired(function() {
Ce.sendFileWithCallback(e, t);
});
}
function h(e) {
var t = "getDepartment()", n = Ve.type("number");
if (!te([ n ], [ e ], t)) return d(e);
}
function d(e) {
var t = me.$("livechat").$("departments").$(e).getValue();
if (t) return Xe(t, e);
}
function p() {
return Y(me.$("livechat").$("departments").getValue(), Xe);
}
function m() {
var e = me.$("livechat").$("profile").$("department_id$int"), t = e.getValue();
return be(t) ? t : void 0;
}
function g(e, t) {
var n = "setVisitorDefaultDepartment()", i = Ve.type("number").chain(ie);
if (!te([ i, We ], [ e, t ], n)) {
t = t || Ue;
pe.$("livechat").$("profile").write({
department_id$int: e
}, oe(t));
}
}
function _(e) {
var t = "clearVisitorDefaultDepartment()";
if (!te([ We ], [ e ], t)) {
e = e || Ue;
pe.$("livechat").$("profile").write({
department_id$int: null
}, oe(e));
}
}
function v(e, t) {
b("added$string", e, "addTag()", t);
}
function w(e, t) {
b("removed$string", e, "removeTag()", t);
}
function b(e, t, n, i) {
var o = Ve.type("string").regex(qe).regex(/[^,]/);
if (!te([ o, We ], [ t, i ], n)) {
i = i || Ue;
var r = {};
r[e] = t.trim();
pe.$("livechat").$("channel").$("tags").write(r, oe(i));
}
}
function y(e, t) {
var n = "sendVisitorPath()", i = Ve.obj({
title: Ve.type("string").regex(qe),
url: Ve.type("string").regex(ze)
}, {
requiredKeys: [ "title", "url" ]
});
if (!te([ i, We ], [ e, t ], n)) {
t = t || Ue;
pe.$("livechat").$("session").$("page_path").write({
url$string: e.url,
title$string: e.title
}, oe(t));
}
}
function $() {
var e = me.$("livechat").$("channel").$("rating$string").getValue(), t = me.$("livechat").$("channel").$("comment$string").getValue(), n = {};
ye(e) || (n.rating = e);
ye(t) || (n.comment = t);
return n;
}
function E(e, t) {
var n = "sendChatRating()", i = Ve.any([ Ve.equal(null), Ve.equal("good"), Ve.equal("bad") ]);
if (!te([ i, We ], [ e, t ], n)) {
t = t || Ue;
pe.$("livechat").$("channel").write({
rating$string: e
}, oe(t));
}
}
function x(e, t) {
var n = "sendChatComment()", i = Ve.type("string");
if (!te([ i, We ], [ e, t ], n)) {
t = t || Ue;
pe.$("livechat").$("channel").write({
comment$string: e
}, oe(t));
}
}
function k(e) {
var t = "endChat()", n = pe.$("livechat").$("channel");
if (!te([ We ], [ e ], t)) {
e = e || Ue;
n.write({
chatting$bool: !1
}, oe(e));
}
}
function S() {
return me.$("livechat").$("channel").$("chatting$bool").getValue() || !1;
}
function A() {
return Y(me.$("livechat").$("agents").getValue(), Je);
}
function O(e) {
return Je(me.$("livechat").$("agents").$(e).getValue(), e);
}
function C() {
var e = me.$("livechat"), t = e.$("settings"), n = t.$("operating_hours");
if (t.hasKey("operating_hours")) {
var i = n.$("type$string").getValue(), o = {
enabled: n.$("enabled$bool").getValue(),
type: i,
timezone: t.$("timezone$string").getValue() || "UTC"
};
"account" == i ? o.account_schedule = re(n.$("schedule").getValue() || {}) : "department" == i && (o.department_schedule = se(n.$("schedules").getValue(), e.$("departments").getKeys()));
return o;
}
}
function I(e, t) {
var n = "sendOfflineMsg()", i = Ve.obj({
name: Ve.type("string").regex(qe),
email: Ve.type("string").regex(De.email),
message: Ve.type("string").regex(qe)
}, {
requiredKeys: [ "name", "email", "message" ]
});
if (!te([ i, We ], [ e, t ], n)) {
t = t || Ue;
var o = {
name: {
name$string: "name",
value$string: e.name
},
email: {
name$string: "email",
value$string: e.email
},
message: {
name$string: "message",
value$string: e.message
}
};
"department" in e && (o.department = {
name$string: "department_id",
value$string: e.department
});
pe.$("livechat").$("settings").$("forms").$("offline_form").$("form_submitted").write(o, oe(t));
}
}
function T(e, t) {
var n = "sendTyping()", i = Ve.type("boolean");
if (!te([ i, We ], [ e, t ], n)) {
t = t || Ue;
pe.$("livechat").$("channel").$("typing").write({
typing$bool: e
}, oe(t));
}
}
function D(e, t) {
var n = "sendEmailTranscript()", i = Ve.type("string").regex(De.email);
if (!te([ i, We ], [ e, t ], n)) {
t = t || Ue;
pe.$("livechat").$("channel").write({
email_transcript$string: e
}, oe(t));
}
}
function L(e, t) {
return {
id: parseInt(t, 10)
};
}
function N(e) {
var t = e.hasOwnProperty("typing$bool");
return t ? {
type: "typing"
} : null;
}
function R(e) {
var t = e.hasOwnProperty("typing$bool"), n = {
type: "typing",
nick: "agent:trigger"
};
return t ? n : null;
}
function M(e) {
return 0 === e.indexOf("visitor:") ? "visitor" : e;
}
function P(e) {
if (!e.type$string) return null;
if (!e.nick$string) return null;
var t = {
nick: M(e.nick$string),
type: e.type$string
}, n = e.msg$string;
switch (e.type$string) {
case "chat.msg":
if (De.file_upload.test(n)) {
if (e.unverified$bool === !0) return null;
var i = /uploaded: (.+)\nURL: (.+)\nType: (.+)\nSize: (.+)(\nThumb: (.+))?/i, o = i.exec(n);
if (!o) return null;
var r = {
mime_type: o[3],
name: o[1],
size: parseInt(o[4], 10),
url: o[2]
};
return xe.extend(t, {
type: "chat.file",
display_name: e.display_name$string,
attachment: r
});
}
return xe.extend(t, {
display_name: e.display_name$string,
msg: n,
options: e.options$string ? e.options$string.split("/") : []
});

case "chat.rating":
return xe.extend(t, {
display_name: e.display_name$string,
new_rating: e.new_rating$string,
rating: e.rating$string
});

case "chat.comment":
return xe.extend(t, {
display_name: e.display_name$string,
comment: e.comment$string,
new_comment: e.new_comment$string
});

case "chat.memberjoin":
case "chat.memberleave":
case "chat.request.rating":
return xe.extend(t, {
display_name: e.display_name$string
});

case "chat.event":
var s, a = /Please wait while our agents attend to you. There are currently (\d+) visitor\(s\) waiting to be served\./;
return "agent:system" === e.nick$string && (s = a.exec(n)) ? {
type: "chat.wait_queue",
nick: "system.queue",
wait_queue: parseInt(s[1], 10)
} : null;

case "chat.join":
var c = e.history;
if (c && c[0]) {
var u = xe.extend({}, c[0]), l = u.timestamp$int;
u.type$string = u.__type$string;
u.display_name$string = u.name$string;
l *= 1e3;
u.timestamp$int = l;
return P(u);
}
return null;

case "chat.file.update":
return null;

default:
return null;
}
}
function j() {
var e, t, n, i = [ "type$string", "timestamp$int" ], o = me.$("livechat").$("channel").$("log").getValue(), r = [];
for (var s in o) if (o.hasOwnProperty(s)) {
if (o[s].type$string) e = o[s]; else {
e = pe.$("livechat").$("channel").$("log").$(s).getValue();
if ("chat.msg" === e.type$string && (e.unverified$bool === !0 || e.failed$bool === !0)) continue;
}
var a = P(e);
if (null === a) continue;
for (var c = 0; c < i.length; c++) {
t = i[c];
n = Z(t);
n in a || (a[n] = e[t]);
}
r.push(a);
}
return r;
}
function U() {
var e = me.$("connection").$("status$string").getValue();
return He(e)[0];
}
function V() {
var e = me.$("livechat").$("account").$("status$string").getValue();
return Ke(e)[0];
}
function F() {
return me.$("livechat").$("channel").$("queue_position$int").getValue() || 0;
}
function z(e, t, n) {
return function(i, o) {
if (null === i) return {};
for (var r = {}, s = 0, a = e.length; s < a; s++) {
var c = e[s];
c in i && (r[Z(c)] = i[c]);
}
$e(t) && Object.keys(r).length && (r[t] = o);
if (Ee(n)) {
var u = n(i, o);
return null === u ? {} : xe.extend(r, u);
}
return r;
};
}
function q(e, t, n) {
me.descend(t).bindValue(function(t) {
var i = n(t);
i.forEach(function(t) {
W(e, t);
});
});
}
function W(e, t) {
if (t) {
if (t instanceof Error) {
if (!t.message) return;
} else if ("object" == typeof t && !Object.keys(t).length) return;
Pe.fire("data", {
type: e,
detail: t
});
}
}
function G() {
q("connection_update", "connection.status$string", H(Ge));
q("account_status", "livechat.account.status$string", H(Be));
q("visitor_update", "livechat.profile", X([ "email$string", "phone$string", "display_name$string" ], a));
q("department_update", "livechat.departments", J([ "name$string", "status$string" ], d));
q("agent_update", "livechat.agents", J([ "avatar_path$string", "display_name$string", "title$string" ], O));
q("chat", "livechat.channel.log", K(et));
q("chat", "livechat.agents", K(Ze));
q("chat", "livechat.triggers.agents", K(Qe));
q("chat", "livechat.channel.queue_position$int", B);
}
function B(e) {
return [ "number" != typeof e ? null : {
type: "chat.queue_position",
nick: "system.queue",
queue_position: e
} ];
}
function H(e) {
return function(t) {
return void 0 === t ? [ null ] : [ e[t] || null ];
};
}
function K(e) {
return function(t) {
return Y(t, e);
};
}
function Y(e, t) {
var n = [];
for (var i in e) e.hasOwnProperty(i) && n.push(t(e[i], i));
return n;
}
function X(e, t) {
return function(n) {
return e.some(function(e) {
return n && e in n;
}) ? [ t() ] : [ null ];
};
}
function J(e, t) {
return function(n) {
var i = [];
for (var o in n) if (n.hasOwnProperty(o)) {
var r = n[o], s = e.some(function(e) {
return r && e in r;
});
s && i.push(t(o));
}
return i;
};
}
function Z(e) {
return e.split("$")[0];
}
function Q(e) {
if (!e || "object" != typeof e) return e;
var t = {};
for (var n in e) if (e.hasOwnProperty(n)) {
var i = Z(n), o = Q(e[n]);
t[i] = o;
}
return t;
}
function ee(e, t) {
t = t ? t + ": " : "";
e = new Error("Zendesk Chat Web SDK: Error: " + t + e.message);
ve || window.console && window.console.error && console.error(e.message);
W("error", e);
}
function te(e, t, n) {
for (var i = 0; i < e.length; i++) {
var o = e[i], r = o(t[i]);
if (r) {
ee(r, n);
return !0;
}
}
return !1;
}
function ne(e) {
var t = Object.prototype.toString.call(e);
if ("[object File]" !== t) return new Error("Expect a File object");
}
function ie(e) {
var t = h(e);
if (!t) return new Error("Expect a valid department id");
}
function oe(e) {
return function(t) {
var n = "ok" === t.raw.__status ? null : new window.Error("Failed");
e(n);
};
}
function re(e) {
for (var t, n, i = 7, o = {}, r = 0; r < i; r++) {
var s = e[r] || {};
if (s.enabled$bool) {
t = [];
n = s.periods;
for (var a in n) n.hasOwnProperty(a) && t.push({
start: n[a].start$int,
end: n[a].end$int
});
o[r] = ue(t);
} else o[r] = [];
}
return o;
}
function se(e, t) {
var n, i = 7, o = {}, r = ce(e), s = ae(e, t);
t.forEach(function(e) {
var t = s[e];
o[e] = {};
for (n = 0; n < i; n++) o[e][n] = [];
t.forEach(function(t) {
for (var n in r[t]) r[t].hasOwnProperty(n) && Array.prototype.push.apply(o[e][n], r[t][n]);
});
for (n = 0; n < i; n++) {
var a = o[e][n];
a.length > 1 && (o[e][n] = ue(a));
}
});
return o;
}
function ae(e, t) {
var n, i = {};
t.forEach(function(e) {
i[e] = [];
});
for (var o in e) if (e.hasOwnProperty(o)) {
n = e[o];
for (var r in n.departments) if (n.departments.hasOwnProperty(r)) {
if (!n.departments[r]) continue;
var s = Z(r);
if (!i[s]) continue;
i[s].push(o);
}
}
return i;
}
function ce(e) {
var t, n, i = 7, o = {};
for (var r in e) if (e.hasOwnProperty(r)) {
n = e[r];
if (n.hasOwnProperty("deleted_ts$int")) continue;
if (!n.departments) continue;
if (!n.enabled$bool) continue;
t = {};
for (var s = 0; s < i; s++) {
var a = n[s], c = [];
if (a.enabled$bool && a.periods) {
var u = a.periods;
for (var l in u) u.hasOwnProperty(l) && c.push({
start: u[l].start$int,
end: u[l].end$int
});
c.length && (t[s] = c);
}
}
Object.keys(t).length && (o[r] = t);
}
return o;
}
function ue(e) {
function t(e) {
var t, n = [], i = 0;
e.forEach(function(e, o) {
e > 0 && !t && (t = o);
if (e) {
i += e;
if (0 === i) {
n.push({
start: t,
end: o
});
t = void 0;
}
}
});
return n;
}
if (e.length <= 1) return e;
var n = [];
e.forEach(function(e) {
n[e.start] = void 0 !== n[e.start] ? n[e.start] + 1 : 1;
n[e.end] = void 0 !== n[e.end] ? n[e.end] - 1 : -1;
});
return t(n);
}
function le() {
var e = me.$("livechat").$("settings"), t = e.getValue(), n = xe.clone(Ne.livechat.settings), i = Te.fullyExtend(n, t), o = tt(i);
return Q(o);
}
function fe(e) {
return Te.getAuthLoginUrl(e, Se.ACCOUNT_KEY, Le.getIdentity());
}
function he(e) {
e = e || Ue;
pe.$("livechat").$("profile").$("auth").write({
type$string: null
}, oe(e));
}
var de, pe, me, ge, _e, ve, we = n(3), be = n(9), ye = n(8), $e = (n(10), n(17)), Ee = n(7), xe = n(18), ke = n(19), Se = n(20), Ae = n(21), Oe = n(61), Ce = n(47), Ie = n(62), Te = n(29), De = n(59), Le = n(22), Ne = n(46), Re = n(33), Me = we.extend({
init: i,
reconnect: r,
getFirehose: s,
setVisitorInfo: c,
getVisitorInfo: a,
setVisitorDefaultDepartment: g,
getVisitorDefaultDepartment: m,
getAllDepartments: p,
getDepartment: h,
clearVisitorDefaultDepartment: _,
addTag: v,
removeTag: w,
sendChatMsg: u,
sendFile: l,
sendVisitorPath: y,
sendChatComment: x,
sendChatRating: E,
getChatInfo: $,
endChat: k,
isChatting: S,
getServingAgentsInfo: A,
sendOfflineMsg: I,
sendTyping: T,
sendEmailTranscript: D,
getChatLog: j,
getConnectionStatus: U,
getAccountStatus: V,
getOperatingHours: C,
getQueuePosition: F,
_getAccountSettings: le,
_getAuthLoginUrl: fe,
_doAuthLogout: he
}), Pe = we.extend({}), je = "web_sdk", Ue = function() {}, Ve = Ie, Fe = /[0-9]+/, ze = /^(https?|ftps?):\/\//i, qe = /\S/, We = Ve.any([ Ve.equal(void 0), Ve.type("function") ]), Ge = {
reattached: "connected",
connected: "connecting",
registered: null,
idle_disconnect: "closed",
shutdown: "closed",
error: "closed"
}, Be = {
online: "online",
offline: "offline",
away: "away",
invalid_account_key: null,
banned: null
}, He = H(Ge), Ke = H(Be), Ye = z([ "email$string", "phone$string", "display_name$string" ]), Xe = z([ "name$string", "status$string" ], "id", L), Je = z([ "avatar_path$string", "display_name$string", "title$string" ], "nick"), Ze = z([ "typing$bool" ], "nick", N), Qe = z([ "typing$bool" ], "display_name", R), et = z([ "timestamp$int" ], null, P), tt = z([ "banner", "behavior", "bubble", "chat_button", "chat_window", "concierge", "file_sending", "forms", "greetings", "language", "login", "rating", "sound", "theme", "timezone$string" ]);
e.exports = Me;
t(Me, "meshim_widget_controllers_WebSDKAPI");
return Me;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
var n = {}, i = {}, o = function(t) {
return !e.nodeType && e != window && e != document || ("FORM" != e.tagName || "submit" != t) && (!h.isCustomEvents && (h.isFF && h.isFF < 9 ? !document.createEvent("event")[t.toUpperCase()] : "undefined" == typeof e["on" + t]));
}, r = function(t, i, r) {
if (!t && "function" != typeof i) throw "bad arguments to on / addEventListener";
if (!(t in n)) {
n[t] = [];
o(t) || s(t);
}
n[t].push(i);
return e;
}, s = function(t) {
if (!(t in i)) {
i[t] = function(i) {
i && (i.stopPropagation || f(i));
var o, r = n[t], s = r.length, a = !0;
r._active = !0;
for (o = 0; o < s; o++) try {
if (!r[o]) continue;
r[o].call(e, h.isCustomEvents && i instanceof h.CustomEvent ? i.detail : i) === !1 && (a = !1);
} catch (e) {
d.fire("error", e);
}
r._active = !1;
if (r._dirty) {
for (o = 0; o < s; o++) if (!r[o]) {
o == s - 1 ? r.pop() : r[o--] = r.pop();
s--;
}
r._dirty = !1;
}
if (a === !1) {
if (i) {
i.preventDefault();
i.returnValue = !1;
}
return !1;
}
};
e.attachEvent ? e.attachEvent("on" + t, i[t]) : e.addEventListener && e.addEventListener(t, i[t], !1);
}
}, a = function(t) {
var o = i[t];
if (o) {
e.attachEvent ? e.detachEvent("on" + t, o) : e.addEventListener && e.removeEventListener(t, o, !1);
delete i[t];
delete n[t];
}
}, c = function(t, o) {
var r = n[t];
if (r) {
for (var s = 0, c = r.length; s < c; s++) if (r[s] === o) {
1 == r.length ? i[t] ? a(t) : delete n[t] : r._active ? (r[s] = null, r._dirty = !0) : s == c - 1 ? r.pop() : r[s] = r.pop();
break;
}
return e;
}
}, u = function() {
if (n && i) {
for (var e in i) i.hasOwnProperty(e) && a(e);
n = i = null;
}
}, l = function(t, i) {
if (!h.isCustomEvents || o(t)) {
var r = n[t], s = !0;
if (r && r.length) {
r._active = !0;
var a, c, u;
for (a = 0, c = r.length; a < c; a++) try {
if (!r[a]) continue;
u = r[a].call(e, i);
u === !1 && (s = !1);
} catch (e) {
d.fire("error", e);
}
r._active = !1;
if (r._dirty) {
for (a = 0; a < c; a++) if (!r[a]) {
a == c - 1 ? r.pop() : r[a--] = r.pop();
c--;
}
r._dirty = !1;
}
}
return s;
}
return e.dispatchEvent(new h.CustomEvent(t, {
bubbles: !1,
cancelable: !0,
detail: i
}));
}, f = function(e) {
e.preventDefault = f.preventDefault;
e.stopPropagation = f.stopPropagation;
e.target = e.srcElement;
};
f.preventDefault = function() {
this.returnValue = !1;
};
f.stopPropagation = function() {
this.cancelBubble = !0;
};
var p = {
fire: l,
on: r,
un: c,
unextendEvents: u
};
if (t) return p;
for (var m in p) p.hasOwnProperty(m) && (e[m] = p[m]);
h.bugs.leaksMemory && h.bugs.leaksMemory(function() {
for (var t in p) p.hasOwnProperty(t) && (e[t] = null);
});
return e;
}
function o(e) {
a(0, e);
}
function r(e) {
a(1, e);
}
function s(e) {
a(2, e);
}
function a(e, t) {
e <= p ? t() : m[e].push(t);
}
function c(e) {
for (;p < e; ) {
p++;
for (var t = 0; t < m[p].length; t++) m[p][t]();
m[p] = null;
}
}
function u() {
p > 0 || (document.body && document.body.firstChild ? c(1) : window.setTimeout(u, 200));
}
function l() {
c(2);
}
function f() {
var e;
if (h.isSafari) e = window.setInterval(function() {
if (/loaded|complete/i.test(document.readyState)) {
window.clearInterval(e);
l();
}
}, 20); else if (document.addEventListener) /loaded|complete/i.test(document.readyState) ? l() : document.addEventListener("DOMContentLoaded", l, !1); else if (h.isIE) {
window.attachEvent("onload", l);
var t = document.createElement("document:ready");
e = window.setInterval(function() {
if (/loaded|complete/i.test(document.readyState)) {
t = null;
window.clearInterval(e);
l();
} else {
try {
t.doScroll("left");
} catch (e) {
return;
}
t = null;
window.clearInterval(e);
l();
}
}, 200);
}
}
var h = n(4), d = {
extend: i,
body: i(document.body, !0),
window: i(window, !0),
document: i(document, !0),
runAfterScriptReady: o,
runAfterFirstChildReady: r,
runAfterDomReady: s
};
d.extend(d);
var p = 0, m = [ [], [], [], [] ];
u();
f();
e.exports = d;
t(d, "jx_core_Events");
return d;
}();
}).call(t, n(1));
}, function(module, exports, __webpack_require__) {
(function($jxml_extends) {
module.exports = function() {
function sniffBrowser() {
function secureURL(e) {
return e.replace(/^http:/, isSecure ? "https:" : "http:");
}
function getWindowClientHeight() {
if (void 0 !== window.innerHeight) return window.innerHeight;
if (document.documentElement) return document.documentElement.offsetHeight;
var e = document.getElementsByTagName("body");
return e.length ? e[0].clientHeight : 0;
}
function getWindowClientWidth() {
if (void 0 !== window.innerWidth) return window.innerWidth;
if (document.documentElement) return document.documentElement.offsetWidth;
var e = document.getElementsByTagName("body");
return e.length ? e[0].clientWidth : 0;
}
function getFlashVersion() {
var e, t = nav.plugins && nav.plugins[FLASH];
if (t) {
e = nav.mimeTypes && nav.mimeTypes[FLASH_MIME_TYPE];
return e && !e.enabledPlugin ? null : t.description;
}
if (window.ActiveXObject) try {
t = new window.ActiveXObject(FLASH_AX);
t.AllowScriptAccess = "always";
return t.GetVariable("$version");
} catch (e) {}
}
function getJavaVersion() {
var e = nav.mimeTypes;
return isIE ? !isWP7 && ("javaEnabled" in nav && nav.javaEnabled()) : e && (e = e[JAVA_MIME_TYPE]) && (e = e.enabledPlugin) ? e.name : void 0;
}
function getScrollbarSize() {
if (!isUndefined(scrollbar_size)) return scrollbar_size;
var e = document.createElement("div"), t = document.createElement("div"), n = e.style, i = t.style;
n.overflow = "auto";
n.width = n.height = "100px";
n.position = "absolute";
n.top = "-1000px";
i.width = "100%";
i.height = "200px";
e.appendChild(t);
document.body.appendChild(e);
scrollbar_size = e.offsetWidth - e.clientWidth;
document.body.removeChild(e);
return scrollbar_size;
}
function detectCSP() {
try {
return eval("false");
} catch (e) {
return !0;
}
}
function checkIE() {
for (var e = 3, t = document.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->", 
n[0]; ) ;
return e > 4 ? e : document.documentMode;
}
var nav = navigator, ua = nav.userAgent.toLowerCase(), isNewIE = +(/trident.*rv:? *([0-9]+)/.exec(ua) || [])[1] || !1, isIE = checkIE(), isIE8 = 8 === isIE, isIE7 = 7 === isIE, isIE6 = 6 === isIE, isOpera = !!window.opera && "[object Opera]" === Object.prototype.toString.call(window.opera), isEdge = ua.indexOf("edge") > -1, isChrome = "Google Inc." === nav.vendor, isSafari = "Apple Computer, Inc." === nav.vendor, isWebKit = !isEdge && !isIE && !isOpera && (isChrome || isSafari || /webkit|khtml/.test(ua)), isFF = +/\d+/.exec(/firefox\/\d+/i.exec(nav.userAgent) || ""), isIPhone = ua.indexOf("iphone") !== -1, isIPod = ua.indexOf("ipod") !== -1, isIPad = ua.indexOf("ipad") !== -1, isIOS = isIPhone || isIPad || isIPod, isAndroid = ua.indexOf("android") !== -1, isWP7 = ua.indexOf("wp7") !== -1, isMobile = isIOS || isAndroid || isWP7, scrollbar_size, browser = isIE && "msie" || isFF && "firefox" || isOpera && "opera" || isChrome && "chrome" || isSafari && "safari", version, isStrict = "CSS1Compat" === document.compatMode, isQuirks = !isStrict, isIE5Quirks = isIE && isQuirks && document.documentElement && !!document.documentElement.style.setExpression, engineIE = document.documentMode || isIE, isWindows = ua.indexOf("windows") !== -1 || ua.indexOf("win32") !== -1, isMac = ua.indexOf("macintosh") !== -1 || ua.indexOf("mac os x") !== -1, isSecure = "https:" === document.location.protocol, language = nav.language || nav.browserLanguage || nav.userLanguage || nav.systemLanguage, bugs = {
noBoxSizing: engineIE <= 7,
ie: {
cssBottomRight: isIE6,
cssFixed: isIE6 || isIE5Quirks,
buggyCSS: isIE6 || isIE5Quirks
}
}, isTextContent = "textContent" in document.createElement("div"), isCustomEvents = !1, CustomEvent = null;
try {
if (window.CustomEvent && /\[native code\]|\[object CustomEventConstructor\]/.test(window.CustomEvent.toString())) {
new window.CustomEvent("testevent", {
bubbles: !1,
cancelable: !0,
detail: !0
});
isCustomEvents = !0;
CustomEvent = window.CustomEvent;
}
} catch (e) {}
switch (browser) {
case "msie":
case "firefox":
case "chrome":
version = +/\d+/.exec(new RegExp(browser + "[ /]\\d+").exec(ua) || "");
break;

default:
version = +/\d+/.exec(/version[ \/]\d+/.exec(ua) || "");
}
if (isIE6) {
var cleanupCallbacks = [];
bugs.leaksMemory = function(e) {
Assert.isFunction(e);
cleanupCallbacks.push(e);
};
var cleanup = function() {
for (var e = 0; e < cleanupCallbacks.length; e++) cleanupCallbacks[e]();
};
bugs.leaksMemory.remove = function(e) {
for (var t = cleanupCallbacks.length - 1; t >= 0; t--) e == cleanupCallbacks[t] && cleanupCallbacks.splice(t, 1);
};
window.attachEvent("onunload", cleanup);
}
var FLASH = "Shockwave Flash", FLASH_AX = "ShockwaveFlash.ShockwaveFlash", FLASH_MIME_TYPE = "application/x-shockwave-flash", JAVA_MIME_TYPE = "application/x-java-vm";
return {
browser: browser,
version: version,
isStrict: isStrict,
isQuirks: isQuirks,
isOpera: isOpera,
isSafari: isSafari,
isWebKit: isWebKit,
isChrome: isChrome,
isAndroid: isAndroid,
isIPhone: isIPhone,
isIPod: isIPod,
isIPad: isIPad,
isIOS: isIOS,
isWP7: isWP7,
isMobile: isMobile,
isNewIE: isNewIE,
isEdge: isEdge,
isIE: isIE,
isIE6: isIE6,
isIE7: isIE7,
isIE8: isIE8,
isFF: isFF,
isCustomEvents: isCustomEvents,
CustomEvent: CustomEvent,
engineIE: engineIE,
bugs: bugs,
isWindows: isWindows,
isMac: isMac,
isSecure: isSecure,
secureURL: secureURL,
hasFlash: getFlashVersion(),
hasJava: getJavaVersion(),
language: language,
getScrollbarSize: getScrollbarSize,
getWindowClientHeight: getWindowClientHeight,
getWindowClientWidth: getWindowClientWidth,
isTextContent: isTextContent,
hasCSP: detectCSP()
};
}
var indexOf = __webpack_require__(5), Assert = __webpack_require__(6), isFunction = __webpack_require__(7), isUndefined = __webpack_require__(8), Browser = sniffBrowser();
module.exports = Browser;
$jxml_extends(Browser, "jx_core_Browser");
return Browser;
}();
}).call(exports, __webpack_require__(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
"use strict";
if (null == this) throw new TypeError();
var t = Object(this), n = t.length >>> 0;
if (0 === n) return -1;
var i = 0;
if (arguments.length > 0) {
i = Number(arguments[1]);
i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i)));
}
if (i >= n) return -1;
for (var o = i >= 0 ? i : Math.max(n - Math.abs(i), 0); o < n; o++) if (o in t && t[o] === e) return o;
return -1;
}
function i(e, t, n) {
return o.call(t, e, n);
}
var o = Array.prototype.indexOf;
"function" == typeof o && /\[native code\]/.test(o.toString()) || (o = n);
e.exports = i;
t(i, "jx_core_globals_indexOf");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
e || r.log(t);
}
var o = n(7), r = {
ok: i,
isFunction: function(e, t) {
i(o(e), t);
}
};
r.log = function() {};
e.exports = r;
t(r, "jx_core_Assert");
return r;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return "function" == typeof e;
}
e.exports = n;
t(n, "jx_core_globals_isFunction");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = function(e) {
return function(t, n) {
return n ? null == t : t === e;
};
}();
e.exports = n;
t(n, "jx_core_globals_isUndefined");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return "number" == typeof e;
}
e.exports = n;
t(n, "jx_core_globals_isNumber");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
if (isNaN(e)) {
var n = new o();
n.add("_", e);
return n;
}
e == -1 && (e = v.length);
var i = v[e];
i || (v[e] = i = new o());
if ("string" == typeof t) i.add("_", t); else for (var r in t) t.hasOwnProperty(r) && i.add(r, t[r]);
return i;
}
function o() {
function e(e, t) {
l[e] = t;
}
function t(e) {
r(e, h);
}
function n(e) {
f.push(e);
}
function i() {
return s();
}
function s(e) {
return l[e || w] || l._;
}
function a(e) {
var t, n = s(e);
for (t = 0; t < f.length; t++) f[t](n);
}
function c(e, t) {
var n, i = new o();
v[l._] = i;
for (var r in l) if (l.hasOwnProperty(r)) {
n = l[r];
if ("string" != typeof n) continue;
n = n[e].apply(n, t);
i.add(r, n);
}
return i;
}
function u(e) {
return function() {
return c(e, arguments);
};
}
for (var l = {}, f = [], h = {
add: e,
bind: t,
onTranslate: n,
toJSON: i,
toString: s,
update: a
}, d = [ "concat", "replace", "toLowerCase", "toUpperCase" ], p = 0; p < d.length; p++) h[d[p]] = u(d[p]);
return h;
}
function r(e, t) {
for (var n = 0; n < b.length; n++) if (b[n] == e) {
y[n] = t;
return;
}
b.push(e);
y.push(t);
}
function s(e) {
for (var t = 0; t < b.length; t++) if (b[t] == e) {
b.splice(t, 1);
y.splice(t, 1);
return;
}
}
function a(e) {
e = e.split(/-|_/).slice(0, 2);
var t = e[0] = e[0].toLowerCase();
e[1] && (e[1] = e[1].toUpperCase());
e = e.join("_");
return m.languages ? e in m.languages ? e : t in m.languages ? t : null : null;
}
function c(e) {
var t, n, o, r, s, c;
e = a(e);
if (e) {
s = m.languages[e];
if (s) {
c = g[m.languages[e]];
if (c) {
i.language = w = e;
_.ensureLoaded(c, function(i) {
i && u(e);
if (e == w) {
for (t = 0, n = v.length; t < n; t++) v[t].update instanceof Function && v[t].update(e);
for (t = 0, n = b.length; t < n; t++) {
o = b[t];
r = y[t].toString();
if (E) o.textContent = r; else if ("string" == typeof o.innerText) o.innerText = r; else if ("string" == typeof o.nodeValue) try {
o.data = r;
} catch (e) {}
}
$._active = !0;
n = $.length;
for (t = 0; t < n; t++) try {
$[t] && $[t](e);
} catch (e) {}
$._active = !1;
if ($._dirty) {
for (t = 0; t < n; t++) if (!$[t]) {
t == n - 1 ? $.pop() : $[t--] = $.pop();
n--;
}
$._dirty = !1;
}
}
});
}
}
}
}
function u(e) {
var t, n = g[m.languages[e]];
for (t = 0; t < n.length; t++) 0 !== n[t] && v[t].add(e, n[t]);
}
function l(e) {
$.push(e);
}
function f(e) {
for (var t = 0, n = $.length; t < n; t++) if ($[t] == e) {
$._active ? ($[t] = null, $._dirty = !0) : t == n - 1 ? $.pop() : $[t] = $.pop();
break;
}
}
function h() {
return !(w.search(x) == -1);
}
function d(e) {
return h() ? e.replace(/left/, "%left%").replace(/right/, "left").replace(/%left%/, "right").replace(/ltr/, "%ltr%").replace(/rtl/, "ltr").replace(/%ltr%/, "rtl") : e;
}
var p = n(4), m = n(11), g = n(12), _ = n(13), v = [], w = "_", b = [], y = [], $ = [], E = p.isTextContent, x = /^ar|^fa|^he|^ku|^ur/, k = m.strings;
if (k) for (var S = 0; S < k.length; S++) i(S, k[S]);
i.bind = r;
i.flip = d;
i.onLanguage = l;
i.unLanguage = f;
i.update = c;
i.unbind = s;
i.rtl = h;
i.findClosestLanguage = a;
e.exports = i;
t(i, "jx_core__");
return i;
}();
}).call(t, n(1));
}, function(e, t) {
var n = {
build_number: "20171017.032443",
git_commit: "25b58b08c91fb91636b6cf302a4f4c524ab84ed7",
release_tag: "!ERR"
};
e.exports = n;
}, function(e, t, n) {
var i = n(11), o = {};
o.$Data = i;
e.exports = o;
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
var n = a[e];
n.module_function = new Function("$Modules", t.toString().replace(f, "$1"));
n.ready();
}
function o(e) {
var t, n, i, o;
for (t = l.length - 1; t >= 0; t--) {
i = l[t];
o = i.dependencies;
for (n = o.length - 1; n >= 0; n--) if (o[n] == e) {
o.splice(n, 1);
break;
}
i.ready();
}
}
function r() {
var e = Array.prototype.slice.call(arguments), t = e.shift();
this.fqname = t;
this.name = t.split(".").pop();
this.callbacks = [];
this.dependencies = e;
l.push(this);
}
function s(e) {
e();
}
var a = n(12), c = n(11), u = n(14), l = [], f = /^function *\( *\) *{ *([\s\S]*) *}$/;
r.ensureLoaded = function(e, t) {
e instanceof r ? e.ensureLoaded(t) : t();
};
r.prototype.ensureLoaded = function(e) {
this.ifLoaded(e);
this.load();
};
r.prototype.ifLoaded = function(e) {
this.callbacks.push(e);
};
r.prototype.load = function() {
function e(e) {
i(e[0], e[1]);
}
var t, n, o = this.getDependencies();
for (t = 0; t < o.length; t++) {
n = o[t];
n.loader || (n.loader = new u(c.baseURL + "/lib/" + c.build_number + "/" + n.fqname + ".js", a, e));
}
};
r.prototype.getDependencies = function() {
var e, t = this.dependencies, n = [ this ];
for (e = 0; e < t.length; e++) {
var i = a[t[e]];
n = n.concat(i.getDependencies());
}
return n;
};
r.prototype.ready = function() {
if (!this.dependencies.length && this.module_function) {
for (e = l.length - 1; e >= 0; e--) if (l[e] == this) {
l.splice(e, 1);
break;
}
this.module_function(a);
var e, t = a[this.fqname];
t.ifLoaded = t.ensureLoaded = s;
for (e = 0; e < this.callbacks.length; e++) this.callbacks[e](t);
o(this.fqname);
delete this.callbacks;
delete this.fqname;
delete this.name;
delete this.dependencies;
delete this.loader;
}
};
a.Module = r;
e.exports = r;
t(r, "jx_core_Module");
return r;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n) {
var i = this;
o.extend(i);
var s = new r();
t = t || {};
s.setScope(t);
s.on("success", n);
s.on("error", function(e) {
i.onError(e);
});
s.load(e);
}
var o = n(3), r = n(15);
i.prototype.onError = function(e) {};
e.exports = i;
t(i, "jx_io_ScriptLoader");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
var t, n, i = r.extend(this);
try {
t = new window.ActiveXObject("htmlfile");
t.open();
t.write("<script>document.win = window</script>");
t.close();
n = t.win;
} catch (e) {}
if (!n) {
var o = this.iframe = document.createElement("iframe"), a = o.style;
i.allowTransparency = "true";
i.frameBorder = "0";
a.backgroundColor = "transparent";
a.position = "absolute";
a.width = a.height = "1px";
a.left = a.top = "-9999px";
a.border = 0;
document.body.appendChild(o);
try {
n = o.contentWindow;
t = n.document;
t.open();
t.close();
} catch (e) {
i.fire("error");
i.destroy();
return;
}
}
i.doc = t;
i.win = n;
i.$Loader = {
cleanup: function() {
s(function() {
i.$Loader.payload ? i.fire("success", i.$Loader.payload) : i.fire("error");
i.$Loader.payload = null;
e || i.destroy();
});
}
};
i.reusable = e;
}
function o(e) {
return e && e.replace(a, function(e) {
return "&#" + e.charCodeAt(0) + ";";
});
}
var r = n(3), s = n(16);
i.prototype.setScope = function(e) {
this.scope = e;
};
var a = /[&<>"']/g;
i.prototype.load = function(e) {
var t = /^(?:https?:)?\/\//i;
if (t.test(e)) {
e = o(e);
try {
this.doc.open();
this.win.$Loader = this.$Loader;
this.win.$Loader.scope = this.scope || {};
this.doc.write('<html><head><script src="' + e + '"></script></head><body onload="try { $Loader.cleanup() } catch(e) {}"></body></html>');
this.doc.close();
} catch (e) {
this.$Loader.cleanup();
}
} else this.$Loader.cleanup();
};
i.prototype.destroy = function() {
try {
this.iframe && document.body.removeChild(this.iframe);
this.doc = this.win = this.iframe = this.win.$Loader = null;
} catch (e) {}
};
e.exports = i;
t(i, "jx_io_DataIFrame");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n) {
s.ok("function" == typeof e, "1st argument to nextTick must be a function");
if (n) for (var i = u.length; i-- > 0; ) if (u[i][0] === e && u[i][1] === t) return;
u.push([ e, t ]);
r || (r = setTimeout(o, 0));
}
function o() {
var e = +new Date() + c, t = u;
u = [];
r && (r = clearTimeout(r));
for (var n = 0, i = t.length; n < i; n++) {
try {
t[n][0].apply(t[n][1]);
} catch (e) {
a.fire("error", e);
}
if (+new Date() > e) {
if (n < i - 1) {
t.splice(0, n + 1);
if (u.length) u = t.concat(u); else {
u = t;
r = setTimeout(o, 0);
}
}
break;
}
}
}
var r, s = n(6), a = n(3), c = 100, u = [];
i.tick = o;
e.exports = i;
t(i, "jx_core_globals_nextTick");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return "string" == typeof e;
}
e.exports = n;
t(n, "jx_core_globals_isString");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = function(e, t) {
return e === t || e && t && "object" == typeof e && "object" == typeof t && i(e, t);
}, i = function(e, t) {
var i;
for (i in e) if (!n(e[i], t[i])) return !1;
for (i in t) if (!n(e[i], t[i])) return !1;
return !0;
}, o = function(e) {
if ("object" != typeof e || !e) return e;
var t = {};
for (var n in e) e.hasOwnProperty(n) && (t[n] = o(e[n]));
return t;
}, r = function(e) {
if (e) for (var t = 1, n = arguments.length; t < n; t++) {
var i = arguments[t];
if (i) for (var o in i) i.hasOwnProperty(o) && (e[o] = i[o]);
}
return e;
}, s = {
equal: n,
clone: o,
extend: r
};
e.exports = s;
t(s, "jx_core_ObjectUtil");
return s;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(n) {
e.exports = function() {
function e(e, t) {
this.name = e;
this.leaf = /\$[a-z]+$/.test(e);
this.parentNode = t;
this.listeners_value = [];
this.listeners_write = [];
if (!this.leaf) {
this.deleted = !1;
this.listeners_keys = [];
this.childNodes = {};
this.keys = {};
}
}
function i(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
function o(e) {
for (var t = "", n = 0; n < e.length; n++) t += /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(e[n]) ? "." + e[n] : "[" + JSON.stringify(e[n]) + "]";
return t.substr(1);
}
e.prototype.fqname = function() {
return o(this.path());
};
e.prototype.path = function() {
for (var e = this, t = [ this.name ]; e = e.parentNode; ) t.unshift(e.name);
return t;
};
e.prototype.descend = function(t) {
var n, o, r, s = this;
"string" == typeof t && (t = t.split("."));
for (o = 0, r = t.length; o < r; o++) {
n = t[o];
i(s.childNodes, n) || (s.childNodes[n] = new e(n, s));
s = s.childNodes[n];
}
return s;
};
e.prototype.$$ = e.prototype.descend;
e.prototype.$ = function(t, n, o, r, s, a, c, u, l) {
var f = i(this.childNodes, t) ? this.childNodes[t] : this.childNodes[t] = new e(t, this);
return n ? f.$(n, o, r, s, a, c, u, l) : f;
};
e.prototype.update = function(e, t) {
var n, i, o, r, s;
null != e && this.undeleteParents();
if (this.leaf) {
if (this.value !== e) {
this.value = e;
r = !0;
this.notifyListeners(e, t);
}
} else if (null == e) {
if (!this.deleted) {
r = null;
this.deleted = !0;
for (n in this.childNodes) this.childNodes.hasOwnProperty(n) && this.childNodes[n].update(null, !0);
this.notifyListeners(r, t);
}
} else {
if (this.deleted) {
this.deleted = !1;
r = e;
for (n in e) e.hasOwnProperty(n) && this.$(n).update(e[n], !0);
} else for (n in e) if (e.hasOwnProperty(n)) {
o = this.$(n);
i = e[n];
if (o.leaf) {
if (o.update(i, !0)) {
r || (r = {});
r[n] = i;
}
} else if (void 0 !== (s = o.update(i, !0))) {
r || (r = {});
r[n] = s;
}
}
r && this.notifyListeners(r, t);
}
return r;
};
e.prototype.replace = function(e, t) {
var n, o, r, s, a;
null != e && this.undeleteParents();
if (this.leaf) {
if (this.value !== e) {
this.value = e;
s = !0;
this.notifyListeners(e, t);
}
} else if (null == e) {
if (!this.deleted) {
s = null;
this.deleted = !0;
for (n in this.childNodes) this.childNodes.hasOwnProperty(n) && this.childNodes[n].replace(null, !0);
this.notifyListeners(s, t);
}
} else {
if (this.deleted) {
this.deleted = !1;
s = e;
for (n in e) e.hasOwnProperty(n) && this.$(n).replace(e[n], !0);
} else {
for (n in this.childNodes) if (this.childNodes.hasOwnProperty(n)) {
if (i(e, n)) continue;
r = this.childNodes[n];
if (r.leaf) {
if (r.replace(null, !0)) {
s || (s = {});
s[n] = null;
}
} else if (void 0 !== (a = r.replace(null, !0))) {
s || (s = {});
s[n] = null;
}
}
for (n in e) if (e.hasOwnProperty(n)) {
r = this.$(n);
o = e[n];
if (r.leaf) {
if (r.replace(o, !0)) {
s || (s = {});
s[n] = o;
}
} else if (void 0 !== (a = r.replace(o, !0))) {
s || (s = {});
s[n] = a;
}
}
}
s && this.notifyListeners(s, t);
}
return s;
};
e.prototype.undeleteParents = function() {
for (var e = this.parentNode; e && e.deleted; ) {
e.deleted = !1;
e = e.parentNode;
}
};
e.prototype.write = function(e, t, n) {
if ("function" == typeof t) {
n = t;
t = !1;
}
var i = {
path: this.path(),
value: e
};
"function" == typeof n && (i.func = n);
this.update(e, t || !1);
for (var o = this; o.parentNode; ) o = o.parentNode;
o.notifyWriteListeners(i);
};
e.prototype.bindWrite = function(e) {
this.listeners_write.push(e);
};
e.prototype.bindValue = function(e) {
this.listeners_value.push(e);
try {
e.call(this, this.getValue());
} catch (e) {}
};
e.prototype.bindKeys = function(e) {
if (!this.leaf) {
this.listeners_keys.push(e);
try {
e.call(this, this.getKeys(), []);
} catch (e) {}
}
};
e.prototype.unbindValue = function(e) {
for (var t = 0; t < this.listeners_value.length; t++) if (this.listeners_value[t] == e) {
this.listeners_value.splice(t, 1);
return;
}
};
e.prototype.unbindKeys = function(e) {
if (!this.leaf) for (var t = 0; t < this.listeners_keys.length; t++) if (this.listeners_keys[t] == e) {
this.listeners_keys.splice(t, 1);
return;
}
};
e.prototype.on = function(e, t) {
switch (e) {
case "value":
this.bindValue(t);
break;

case "keys":
this.bindKeys(t);
}
};
e.prototype.un = function(e, t) {
switch (e) {
case "value":
this.unbindValue(t);
break;

case "keys":
this.unbindKeys(t);
}
};
e.prototype.addListener = function(e, t) {
this.listeners[e].push(t);
};
e.prototype.removeListener = function(e, t) {
for (var n = this.listeners[e], i = n.length; i-- > 0; ) n[i] == t && n.splice(i, 1);
};
e.prototype.notifyListeners = function(e, t) {
var n, o, r, s;
if (!this.leaf) if (e) {
for (n in e) if (e.hasOwnProperty(n)) if (null != e[n]) {
if (!i(this.keys, n)) {
this.keys[n] = 1;
o || (o = []);
o.push(n);
}
} else if (i(this.keys, n)) {
delete this.keys[n];
r || (r = []);
r.push(n);
}
} else for (n in this.keys) if (this.keys.hasOwnProperty(n)) {
delete this.keys[n];
r || (r = []);
r.push(n);
}
s = this.listeners_value.concat();
for (var a = 0, c = s.length; a < c; a++) try {
s[a](e);
} catch (e) {}
if (!this.leaf) {
if (o || r) {
s = this.listeners_keys.concat();
for (a = 0, c = s.length; a < c; a++) try {
s[a](o || [], r || []);
} catch (e) {}
}
if (!t && this.parentNode) {
var u = {};
u[this.name] = e;
this.parentNode.notifyListeners(u, t);
}
}
};
e.prototype.notifyWriteListeners = function(e) {
for (var t = this.listeners_write.concat(), n = 0; n < this.listeners_write.length; n++) try {
t[n].call(this, e);
} catch (e) {}
};
e.prototype.getValue = function(e) {
if (e) return this.descend(e).getValue();
if (this.leaf) return this.value;
if (this.deleted) return null;
var t, n, i = {};
for (var o in this.childNodes) if (this.childNodes.hasOwnProperty(o) && null != (n = this.childNodes[o].getValue())) {
i[o] = n;
t = !0;
}
return t ? i : null;
};
e.prototype.hasKey = function(e) {
return i(this.keys, e);
};
e.prototype.getKeys = function() {
if (this.leaf) return null;
var e = [];
for (var t in this.keys) this.keys.hasOwnProperty(t) && e.push(t);
return e;
};
e.prototype.gc = function() {
if (this.leaf) throw new TypeError("Leaf nodes cannot be collected");
var e = !0;
for (var t in this.childNodes) if (this.childNodes.hasOwnProperty(t)) {
var n = this.childNodes[t];
e = n.leaf ? !n.listeners_value.length && null == n.value && (delete this.keys[t], 
delete this.childNodes[t]) && e : n.gc() && (delete this.keys[t], delete this.childNodes[t]) && e;
}
return e && this.deleted && !this.listeners_keys.length && !this.listeners_value.length;
};
t.DataNode = e;
n(e, "jx_data_DataNode");
return e;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
for (var e = o(), t = [ /\/?[?]/, /\/livechat\// ], n = [], i = 0; i < t.length; i++) {
n = e.split(t[i]);
if (n.length) break;
}
var r = n[1], s = n[0], a = /^(https?:)?\/\/[^\/]+/.exec(s), c = s.replace(/^(https?:)?\/\//i, "").split("/")[0], u = c.replace(/(.+\.)(?=.+\..+)/, ""), l = n[0].split("/");
l = l.pop() == c ? n[0] : l.join("/");
a = a && "zopim.com" !== c ? a[0] : "https://v2.zopim.com";
return {
accountKey: r,
brandDomain: u,
baseURL: l,
rootURL: a
};
}
function o() {
if (window.$zopim && window.$zopim.s) return window.$zopim.s.src;
for (var e, t = document.getElementsByTagName("script"), n = /.*zopim.(com|net)\//, i = 0, o = t.length; i < o; i++) {
e = t[i].src || "";
if (n.test(e)) return e;
}
return "";
}
function r() {
var e = '<!--# echo var="http_cf_ipcountry" default="geo" -->'.toUpperCase();
"<" == e.charAt(0) && (e = "geo");
return e;
}
var s = n(8), a = n(11), c = n(4), u = i(), l = "https://v2.zopim.com/widget", f = l + "/images", h = l + "/sounds", d = l + "/fonts";
s(a.baseURL, !0) && (a.baseURL = c.secureURL(u.baseURL));
var p = {
ASSETS_URL: l,
IMAGES_URL: f,
SOUNDS_URL: h,
FONTS_URL: d,
ASSETS_LEGACY: document.location.protocol + "//cdn.zopim.com/assets",
BRANDING_URL: "https://www.zopim.com",
AVATARS: {
CONCIERGE: f + "/avatar_simple_agent.png",
AGENT: f + "/avatar_simple_agent.png",
VISITOR: f + "/avatar_simple_visitor.png",
DEFAULT: f + "/avatar_simple_visitor.png"
},
ACCOUNT_KEY: u.accountKey,
BRAND_DOMAIN: u.brandDomain,
COUNTRY_CODE: r(),
AUTH_URL: "https://www.zopim.com/auth/$NAME/$KEY-$MID",
AUTH_LOGOUT_URL: "https://www.zopim.com/auth/logout/$KEY-$MID",
IS_POPOUT: window.$zopim_popout,
POPOUT_WINDOW_PREFIX: "zlivechatpopout_",
POPOUT_URL: u.rootURL + "/widget/livechat.html",
CALLBACK_FILE_UPLOAD_PATH: "/client/widget/upload",
FILE_UPLOAD_PATH: "/client/widget/uploads",
FILE_UPLOAD_MAX: 20971520,
RESEND_MSG_TIMEOUT: 5e3,
FILE_REPLACE_SOURCE: /^(\s*https?\:\/\/v2(?:assets|uploads)\.zopim\.)com(\/)/i,
FILE_REPLACE_RESULT: "$1io$2",
CHAT_LOG_REMEMBER_COUNT: 10
};
e.exports = p;
t(p, "meshim_widget_Config");
return p;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
function t() {
if ("prerender" != document.visibilityState) {
document.removeEventListener("visibilitychange", t);
Te.connect();
}
}
ee = e.isCookieDenied;
te = e.overrideProxy;
ne = e.source;
ie = e.lastHost;
oe = e.source_ver;
z = e.root;
B = z.$("tmp").$("api_settings");
H = z.$("tmp").$("server_settings");
K = z.$("livechat").$("settings").$("cached$bool");
q = z.$("connection");
Y = q.$("server_retired$bool");
J = q.$("server_ready$bool");
J.bindValue(a);
Y.bindValue(s);
G = z.$("livechat").$("ui").$("mockup$bool").getValue();
if (G) q.$("status$string").update("reattached"); else {
z.$("livechat").$("profile").bindValue(r);
q.$("status$string").bindValue(o);
q.$("socket_status$string").bindValue(O);
z.bindWrite(R);
q.$("reconnect$bool").bindValue(g);
if (window.__z_sdk) V = !0; else {
V = !1;
"visibilityState" in document && "prerender" == document.visibilityState ? document.addEventListener("visibilitychange", t) : Te.connect();
}
}
}
function o(e) {
xe = "reattached" == e;
xe && R();
xe && V === !1 && C();
if ("idle_disconnect" == e || "shutdown" == e || "error" == e) {
var t = z.$("livechat").$("account").$("status$string").getValue(), n = z.$("connection").$("backoff"), i = n.$("active$int").getValue() || 0, o = n.$("max_seconds$int").getValue();
"invalid_account_key" == t ? de.warnBadEmbed() : "widget_v2" == ne && "shutdown" == e && i && o && p(o);
h();
}
O();
}
function r(e) {
e && (ee() || le.IS_POPOUT || e.mid$string && fe.setIdentity(e.mid$string));
}
function s(e) {
X = e === !0;
}
function a(e) {
Z = e !== !1;
if (Z) {
Ae = !1;
c();
}
}
function c() {
for (var e = 0, t = Se.length; e < t; e++) {
var n = Se[e];
se(n) && n();
}
Se = [];
}
function u(e) {
if (!Z || X) {
q.update({
server_ready$bool: !1
});
Se.push(e);
if (!Ae) {
Ae = !0;
W.reconnect();
}
} else e();
}
function l(e) {
W && W.send(e);
}
function f(e) {
for (var t = -1, n = 0; n < $e.length; n++) if ($e[n].socket == e) {
t = n;
break;
}
if (t !== -1) {
var i = $e[t].expiryTimer;
e.close();
clearTimeout(i);
}
}
function h(e) {
W && f(W);
F = !e;
W = null;
Ee = "";
}
function d() {
window.clearTimeout(Te.reconnectTimer);
h(!0);
Te.connect();
}
function p(e) {
window.clearTimeout(Te.reconnectTimer);
Te.reconnectTimer = window.setTimeout(function() {
Te.reconnect();
}, 1e3 * e);
}
function m() {
q.update({
status$string: "idle_disconnect"
});
}
function g(e) {
e && d();
}
function _(e) {
var t = re || new pe(e, "W", null, ve);
t.on("open", function() {
y(e, t);
});
return t;
}
function v() {
var e = w();
try {
Q = ye.getGeoAccess(te, e, 3, 2);
} catch (e) {
window.console && window.console.log("Unable to compute host list");
return;
}
b(we);
}
function w() {
return ie || q.$("server$string").getValue() || "";
}
function b(e) {
function t() {
clearTimeout(o);
i.un("close", t);
b(e);
}
if (!W && !F) {
var n = Q.getNextHost();
if (n) {
Oe++;
var i = _(n);
$e.push({
socket: i,
expiryTimer: setTimeout(function() {
i != W && i.close();
}, be)
});
if (Q.hasNext()) {
var o = setTimeout(t, e);
i.on("close", t);
}
}
}
}
function y(e, t) {
if (!G) if (W) f(t); else {
q.update({
socket_status$string: null
});
Ee = e;
he.increment("conn", [ "tries:" + Oe ]);
Oe = 0;
he.start("conn_open", t.starttime);
he.end("conn_open", .25, [ "proxy:" + e ]);
W = t;
W.on("break", E);
W.on("message", $);
W.on("reopen", k);
W.on("resume", x);
W.on("error", function() {
var e = this.connect_attempts, t = this.recv_messages;
if (e > 3 && 0 == t) {
h(!0);
b(we);
}
});
S();
}
}
function $(e) {
if (e) {
if (e.raw && e.raw.__messageID in Ie) {
var t = Ie[e.raw.__messageID];
delete Ie[e.raw.__messageID];
t(e);
}
var n = z;
if ("update" in e) {
if (/^livechat.account/.test(e.path)) {
var i = e.path.split(".");
i.splice(0, 2);
i = i.join(".");
(i ? H.$("account").descend(i) : H.$("account")).update(e.update);
de.fullyExtend(e.update, B.getValue("account"));
}
if (/^livechat/.test(e.path) && "account" in e.update) {
H.$("account").update(e.update.account);
de.fullyExtend(e.update.account, B.getValue("account"));
}
if (/^livechat.settings/.test(e.path)) {
var o = e.path.split(".");
o.splice(0, 2);
o = o.join(".");
(o ? H.$("settings").descend(o) : H.$("settings")).update(e.update);
de.fullyExtend(e.update, B.getValue("settings"));
}
e.path && (n = n.descend(e.path));
n.update(e.update);
Te.fire("message", e);
}
}
}
function E() {
q.update({
socket_status$string: "break"
});
}
function x() {
q.update({
socket_status$string: "resume"
});
}
function k() {
q.update({
socket_status$string: "reconnect"
});
xe = !1;
S();
}
function S() {
if (le.ACCOUNT_KEY) {
W || Te.connect();
var e = fe.getIdentity(), t = ee(), n = z.$("livechat").$("ui").getValue("mobile$bool") ? "mobile" : "desktop", i = z.$("livechat").$("settings").$("theme").getValue("name$string"), o = {
__type: "register",
accountKey: le.ACCOUNT_KEY,
mID: e,
ua: window.navigator.userAgent,
dt: n,
theme: i,
cookie_law: t,
rev: ae.git_commit,
source: ne,
source_ver: oe
};
if (z.$("livechat").$("ui").$("popout$bool").getValue()) o.popout = !0; else {
o.title = document.title;
o.url = window.location.href;
o.ref = window.document.referrer;
}
var r = Te._register;
if (r) for (var s in r) r.hasOwnProperty(s) && (o[s] = r[s]);
W.send(o);
}
}
function A() {
return !!K.getValue();
}
function O() {
var e = q.getValue("status$string"), t = q.getValue("socket_status$string");
window.clearTimeout(I.timer);
if ("error" != e) if ("break" == t) if ("idle_disconnect" == e) q.update({
message$string: "idle_disconnect"
}); else {
q.update({
message$string: "reconnecting"
});
I.timer = window.setTimeout(I, 6e4);
} else if (null === t && "registered" == e) q.update({
message$string: "resuming"
}); else if (ce(e) && ce(t)) {
var n = A() ? "fast_init" : "first_init";
q.update({
message$string: n
});
} else q.update({
message$string: null
}); else I.timer = window.setTimeout(I, 5e3);
}
function C() {
W && z.$("livechat").$("profile").write({
disconnect_timeout$int: P(W.rtt)
});
}
function I() {
q.update({
message$string: "disconnected"
});
}
function T() {
var e = W;
return e ? {
connect_attempts: e.connect_attempts,
connections: e.connections,
disconnects: e.disconnects,
timeout_server: e.timeout_server,
timeout_response_soft: e.timeout_response_soft,
timeout_response_hard: e.timeout_response_hard,
sent_bytes: e.sent_bytes,
recv_bytes: e.recv_bytes,
sent_messages: e.sent_messages,
recv_messages: e.recv_messages,
sent_frames: e.sent_frames,
recv_frames: e.recv_frames,
lost_frames: e.lost_frames,
ooo_frames: e.ooo_frames,
bytes_at_connect: e.bytes_at_connect,
rtt: e.rtt,
clock_skew: e.clock_skew,
reconnect_delay: e.reconnect_delay,
quality: e.quality,
host: e.host,
status: e.status,
zone: window.__$__GEO,
last_frame_time: e.last_frame_time,
local_time: +new Date()
} : {
status: "not connected"
};
}
function D() {
return Ee;
}
function L() {
return +new Date() - (W ? W.clock_skew : 0);
}
function N(e) {
Ce += 1;
Ie[Ce] = e;
return Ce;
}
function R(e) {
if (e) {
var t = {};
t.path = e.path;
t.value = e.value;
se(e.func) && (t.__messageID = N(e.func));
ke.push(t);
}
if (W && xe) for (;ke.length; ) W.send(ke.shift());
}
function M(e) {
return e ? H.getValue(e) : H.getValue();
}
function P(e) {
function t(e) {
return e;
}
var n, i, o = 10 * _e.SECOND, r = 1 * _e.SECOND, s = 120 * _e.SECOND, a = 20 * _e.SECOND;
e = Math.round(e) || 0;
e = Math.max(r, Math.min(e, o));
n = (e - r) / (o - r);
i = a + t(n) * (s - a);
return Math.floor(i / 1e3);
}
function j(e) {
re = e;
}
function U() {
J.unbindValue(a);
Y.unbindValue(s);
z.$("livechat").$("profile").unbindValue(r);
q.$("status$string").unbindValue(o);
q.$("socket_status$string").unbindValue(O);
q.$("reconnect$bool").unbindValue(g);
h();
$e.forEach(function(e) {
f(e.socket);
e.socket.fire("close");
});
I.timer = clearTimeout(I.timer);
$e = [], Ee = "", xe = !1, ke = [], Se = [], Ae = !1, Oe = 0, Ce = 0, Ie = {}, V = F = z = q = W = G = B = H = K = Y = X = J = Z = Q = ee = te = ne = ie = oe = re = null;
}
var V, F, z, q, W, G, B, H, K, Y, X, J, Z, Q, ee, te, ne, ie, oe, re, se = n(7), ae = n(11), ce = n(8), ue = n(3), le = n(20), fe = n(22), he = n(30), de = n(29), pe = n(50), me = n(55), ge = n(56), _e = n(60), ve = {
FLUSH_DELAY_MS: 0,
RECONNECT_DELAY_MS: 1e4
}, we = 3e3, be = 6e4, ye = new ge(me), $e = [], Ee = "", xe = !1, ke = [], Se = [], Ae = !1, Oe = 0, Ce = 0, Ie = {}, Te = ue.extend({
init: i,
send: l,
connect: v,
reconnect: d,
disconnect: m,
getConnectionStats: T,
getHost: D,
getServerTime: L,
getServerSettings: M,
reconnectIfServerRetired: u,
registerCallback: N,
getDCTimeoutValue: P,
setSocket: j,
reset: U
});
e.exports = Te;
t(Te, "meshim_widget_controllers_ConnectionController");
return Te;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
E = b.ACCOUNT_KEY;
}
function o() {
if (b.IS_POPOUT) return w.get(S) || _().get("mid");
var e = l();
return e ? e : w.get(k) || "";
}
function r(e) {
w.set(k, e, {
path: "/",
ttl: 365,
domain: m
});
}
function s() {
var e = f();
if ("boolean" == typeof e) return e;
var t = w.get(A);
t = parseInt(t, 10);
return 0 !== t && (1 === t || void 0);
}
function a() {
w.remove(A, {
path: "/",
domain: m
});
}
function c(e) {
e = g(e);
e = e ? 1 : 0;
w.set(A, e, {
path: "/",
ttl: 365,
domain: m
});
}
function u() {
w.remove(k, {
path: "/",
domain: m
});
v.remove(x);
}
function l() {
var e = w.getJSONCookie("__zlcid");
w.remove("__zlcid", {
path: "/"
});
if (e.mID) return e.mID;
var t = h("__zlcstore");
w.remove("__zlcstore", {
path: "/",
domain: m
});
return t && t.mID ? t.mID : void 0;
}
function f() {
var e, t = h("__zlcprivacy");
if ("boolean" == typeof t) {
e = t;
c(t);
}
return e;
}
function h(e) {
var t = w.getJSONCookie(e);
return t[E];
}
function d(e, t) {
var n = v.get(x) || {};
n[E] || (n[E] = {});
var i = n[E];
i[e] = t;
i.timestamp = +new Date();
v.set(x, n);
}
function p(e) {
var t = v.get(x) || {};
if (!t[E]) return {};
var n = t[E];
if (!n.timestamp) return n[e] || {};
var i = +new Date();
return i - n.timestamp > $ ? {} : n[e];
}
var m, g = n(23), _ = n(24), v = n(26), w = n(28), b = n(20), y = n(29), $ = 48e4, E = b.ACCOUNT_KEY, x = "__zlcstore", k = "__zlcmid", S = "__zlcpomid", A = "__zlcprivacy", O = window.location.hostname;
m = /\b(?:\d{1,3}\.){3}\d{1,3}/.test(O) ? O : y.getEffectiveTLD(O);
var C = {
init: i,
DOM: {
saveVariable: d,
getVariable: p
},
Cookie: w,
clearAll: u,
setIdentity: r,
getIdentity: o,
clearAllowCookieLaw: a,
getAllowCookieLaw: s,
setAllowCookieLaw: c
};
e.exports = C;
t(C, "meshim_widget_controllers_StorageController");
return C;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return !!e && "false" != e;
}
e.exports = n;
t(n, "jx_core_globals_parseBoolean");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
if (!(this instanceof i)) {
c || i._initSingleton(window);
return c;
}
if (e) return i.parseQuery(e);
this.store = {};
}
function o(e, t, n) {
if (void 0 === t && void 0 === n) return e;
void 0 === t && (t = "string");
if (!(t in a)) throw "invalid type requested";
return void 0 === e ? void 0 !== n ? n : a[t] : "boolean" === t ? s.test(e) : "integer" === t ? e === !0 ? 1 : parseInt(e, 10) : "float" === t ? e === !0 ? 1 : parseFloat(e) : e;
}
var r = n(25), s = /^(1|on|true)$/i, a = {
boolean: !1,
integer: 0,
float: 0,
string: ""
}, c = null;
i._initSingleton = function(e) {
c = new i(e.location.search);
};
i.buildQuery = function(e) {
var t, n, i, o, s, a, c = [], u = [];
for (s in e) e.hasOwnProperty(s) && c.push(s);
c.sort();
for (t = 0, i = c.length; t < i; t++) {
s = c[t];
a = e[s];
s = window.encodeURIComponent(s);
if (r(a)) if (1 !== a.length || a[0] !== !0) for (n = 0, o = a.length; n < o; n++) u.push(s + "=" + window.encodeURIComponent(a[n] + "")); else u.push(s); else u.push(s + "=" + window.encodeURIComponent(a + ""));
}
return u.join("&");
};
i.parseQuery = function(e) {
var t, n, o = new i();
e = e.replace(/^\?|\/+$/g, "");
var r, s, a = e.split("&");
for (t = 0, n = a.length; t < n; t++) {
var c = a[t];
if (c.length) {
var u = c.indexOf("=");
if (u <= -1) {
r = c;
s = !0;
} else {
r = c.slice(0, u);
s = window.decodeURIComponent(c.slice(u + 1));
}
o.add(window.decodeURIComponent(r), s);
}
}
return o;
};
i.getHash = function(e, t) {
var n = t || window.location.hash;
return i.parseQuery(n.replace(/^#/, "")).get(e);
};
var u = i.prototype;
u.add = function(e, t) {
this.has(e) ? this.store[e].push(t) : this.store[e] = [ t ];
};
u.has = function(e) {
return this.store.hasOwnProperty(e);
};
u.getLast = function(e, t, n) {
return this.has(e) ? this.getAt(e, this.store[e].length - 1, t, n) : o(void 0, t, n);
};
u.getFirst = function(e, t, n) {
return this.getAt(e, 0, t, n);
};
u.getAt = function(e, t, n, i) {
return o(this.has(e) ? this.store[e][t] : void 0, n, i);
};
u.getRaw = function(e) {
return this.has(e) ? this.store[e].concat() : [];
};
u.get = u.getLast;
u.toString = function() {
return i.buildQuery(this.store);
};
e.exports = i;
t(i, "meshim_common_QueryString");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return "[object Array]" == Object.prototype.toString.call(e);
}
e.exports = n;
t(n, "jx_core_globals_isArray");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
try {
return f in u && u[f];
} catch (e) {
return !1;
}
}
function o(e) {
return function() {
try {
var t = Array.prototype.slice.call(arguments, 0);
t.unshift(s);
d.appendChild(s);
s.addBehavior("#default#userData");
s.load(f);
var n = e.apply(c, t);
d.removeChild(s);
return n;
} catch (e) {}
};
}
function r(e) {
return e.replace(m, "___");
}
var s, a = n(27), c = {}, u = window, l = u.document, f = "localStorage", h = "__storejs__";
c.disabled = !1;
c.set = function() {};
c.get = function() {};
c.remove = function() {};
c.clear = function() {};
c.transact = function(e, t, n) {
var i = c.get(e);
if (null == n) {
n = t;
t = null;
}
"undefined" == typeof i && (i = t || {});
n(i);
c.set(e, i);
};
c.getAll = function() {};
c.serialize = function(e) {
return a.stringify(e);
};
c.deserialize = function(e) {
if ("string" == typeof e) try {
return a.parse(e);
} catch (t) {
return e || void 0;
}
};
if (i()) {
s = u[f];
c.set = function(e, t) {
if (void 0 === t) return c.remove(e);
s.setItem(e, c.serialize(t));
return t;
};
c.get = function(e) {
return c.deserialize(s.getItem(e));
};
c.remove = function(e) {
s.removeItem(e);
};
c.clear = function() {
s.clear();
};
c.getAll = function() {
for (var e = {}, t = 0; t < s.length; ++t) {
var n = s.key(t);
e[n] = c.get(n);
}
return e;
};
} else if (l.documentElement.addBehavior) {
var d, p;
try {
p = new window.ActiveXObject("htmlfile");
p.open();
p.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>');
p.close();
d = p.w.frames[0].document;
s = d.createElement("div");
} catch (e) {
s = l.createElement("div");
d = l.body;
}
var m = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
c.set = o(function(e, t, n) {
t = r(t);
if (void 0 === n) return c.remove(t);
e.setAttribute(t, c.serialize(n));
e.save(f);
return n;
});
c.get = o(function(e, t) {
t = r(t);
return c.deserialize(e.getAttribute(t));
});
c.remove = o(function(e, t) {
t = r(t);
e.removeAttribute(t);
e.save(f);
});
c.clear = o(function(e) {
var t = e.XMLDocument.documentElement.attributes;
e.load(f);
for (var n, i = 0; n = t[i]; i++) e.removeAttribute(n.name);
e.save(f);
});
c.getAll = o(function(e) {
for (var t, n = e.XMLDocument.documentElement.attributes, i = {}, o = 0; t = n[o]; ++o) {
var s = r(t.name);
i[t.name] = c.deserialize(e.getAttribute(s));
}
return i;
});
}
try {
c.set(h, h);
c.get(h) != h && (c.disabled = !0);
c.remove(h);
} catch (e) {
c.disabled = !0;
}
c.enabled = !c.disabled;
var g = c;
e.exports = g;
t(g, "meshim_common_DOMStorage");
return g;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
return '"' + e.replace(f, o) + '"';
}
function o(e) {
return h[e] || "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}
function r(e) {
switch (typeof e) {
case "string":
return i(e);

case "number":
return isFinite(e) ? e.toString() : "null";

case "boolean":
return String(e);

case "object":
if (!e) return "null";
var t, n, o = [];
if (u(e)) {
for (t = 0, n = e.length; t < n; t++) o[t] = r(e[t]) || "null";
return "[" + o.join(",") + "]";
}
var s, a, c = [];
for (s in e) e.hasOwnProperty(s) && c.push(s);
c.sort();
for (t = 0, n = c.length; t < n; t++) {
s = c[t];
a = r(e[s]);
a && o.push(i(s) + ":" + a);
}
if (o.length) return "{" + o.join(",") + "}";
}
}
function s(e, t, n) {
return t ? v[t] : String.fromCharCode(parseInt(n, 16));
}
function a(e) {
var t, n, i, o, r, a = e.match(g), c = a.length, u = a[0];
"{" == u ? (t = {}, r = 1) : "[" == u ? (t = [], r = 1) : (t = [], r = 0, n = !0);
var l = [ t ];
for (c = a.length; r < c; ++r) {
u = a[r];
switch (u.charCodeAt(0)) {
case 91:
o = l[0];
l.unshift(o[i || o.length] = []);
i = void 0;
break;

case 93:
l.shift();
break;

case 123:
o = l[0];
l.unshift(o[i || o.length] = {});
i = void 0;
break;

case 125:
l.shift();
break;

case 102:
o = l[0];
o[i || o.length] = !1;
i = void 0;
break;

case 110:
o = l[0];
o[i || o.length] = null;
i = void 0;
break;

case 116:
o = l[0];
o[i || o.length] = !0;
i = void 0;
break;

case 34:
u = u.substring(1, u.length - 1);
u.indexOf(b) !== -1 && (u = u.replace(_, s));
o = l[0];
if (void 0 == i) {
if (!(o instanceof Array)) {
i = u || w;
break;
}
i = o.length;
}
o[i] = u;
i = void 0;
break;

default:
o = l[0];
o[i || o.length] = +u;
i = void 0;
}
}
if (n) {
if (1 == l.length) return t[0];
} else if (!l.length) return t;
throw "error";
}
var c = n(8), u = n(25), l = (n(5), !c(window) && window.JSON || {
parse: a,
stringify: r
}), f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, h = {
"\b": "\\b",
"\t": "\\t",
"\n": "\\n",
"\f": "\\f",
"\r": "\\r",
"\\": "\\\\",
'"': '\\"'
}, d = "(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)", p = '(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))', m = '(?:"' + p + '*")', g = new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|" + d + "|" + m + ")", "g"), _ = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), v = {
'"': '"',
"/": "/",
"\\": "\\",
b: "\b",
f: "\f",
n: "\n",
r: "\r",
t: "\t"
}, w = new String(""), b = "\\";
e.exports = l;
t(l, "jx_data_JSON");
return l;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
return "string" == typeof e && "" != e;
}
function o() {
var e, t, n, i, o = document.cookie, r = {};
if (!o || "string" != typeof o) return {};
o = o.split(/;\s/);
for (e = o.length; e--; ) try {
t = o[e].match(/^([^=]+)(=(.*))?$/);
if (!t) continue;
n = d(t[1]);
i = d(t[3] || "");
r[n] = i;
} catch (e) {}
return r;
}
function r(e) {
return i(e) ? o()[e] || null : null;
}
function s(e) {
var t = r(e), n = {};
try {
n = l.parse(t);
} catch (e) {}
return n && "object" == typeof n ? n : {};
}
function a(e, t, n) {
n = n || {};
var i = h(e) + "=" + h(t);
if ("ttl" in n) {
var o = new Date(), r = 24 * n.ttl * 60 * 60 * 1e3;
o.setTime(o.getTime() + r);
i += "; expires=" + o.toGMTString();
}
"path" in n && (i += "; path=" + n.path);
"domain" in n && (i += "; domain=" + n.domain);
n.secure && (i += "; secure");
document.cookie = i;
}
function c(e, t, n) {
"object" != typeof t && (t = {});
a(e, l.stringify(t), n);
}
function u(e, t) {
t = t || {};
t.ttl = -1;
a(e, "", t);
}
var l = n(27), f = {
set: a,
get: r,
getJSONCookie: s,
setJSONCookie: c,
remove: u
}, h = window.encodeURIComponent, d = window.decodeURIComponent;
e.exports = f;
t(f, "meshim_common_Cookie");
return f;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
var e = document.documentElement;
return e.compareDocumentPosition ? function(e, t) {
e = e.dom || e;
t = t.dom || t;
return !!(16 & e.compareDocumentPosition(t));
} : e.contains ? function(e, t) {
e = e.dom || e;
t = t.dom || t;
var n = 9 === e.nodeType ? e.documentElement : e, i = t.parentNode;
return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i));
} : function(e, t) {
e = e.dom || e;
t = t.dom || t;
for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
};
}
function o(e, t) {
for (var n, i = document.createElement("div"), o = 0, r = j.length; o < r; o++) if (void 0 !== i.style[j[o]]) {
n = t[o];
break;
}
return n ? e ? function(e, t, i) {
e.autobind(t, n, i);
} : function(e, t, i) {
U && e.autounbind(t, n, i);
} : function() {};
}
function r() {
function e(e) {
for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + P.join(t + " ") + t).split(" "), o = 0; o < i.length; o++) if (void 0 !== n[i[o]]) return !0;
return !1;
}
var t = document.createElement("div"), n = t.style;
return e;
}
function s(e, t) {
for (var n = {}, i = 0, o = t.length; i < o; i++) {
var r = t[i];
r in e && (n[r] = e[r]);
}
return n;
}
function a() {
for (var e, t, n = arguments.length, i = 1, o = arguments[0] || {}; i < n; i++) if (null != (e = arguments[i])) for (t in e) e.hasOwnProperty(t) && o !== e[t] && (o[t] = e[t]);
return o;
}
function c(e, t) {
for (var n in t) if (t.hasOwnProperty(n)) if (t[n] && t[n].constructor && t[n].constructor === Object) {
e[n] = e[n] || {};
c(e[n], t[n]);
} else e[n] = t[n];
return e;
}
function u(e, t) {
for (var n in t) if (t.hasOwnProperty(n)) {
if (!(n in e)) continue;
t[n] && t[n].constructor && t[n].constructor === Object ? u(e[n], t[n]) : delete e[n];
}
return e;
}
function l() {
if (void 0 === I) try {
I = f();
} catch (e) {}
return I;
}
function f() {
if (!window.getComputedStyle) return !1;
var e = document.createElement("div"), t = "border-box";
document.body.appendChild(e);
e.style.height = "10px";
e.style.padding = "5px";
e.style.boxSizing = t;
e.style.webkitBoxSizing = t;
e.style.mozBoxSizing = t;
var n = parseInt(window.getComputedStyle(e).height, 10);
document.body.removeChild(e);
return 10 != n;
}
function h(e) {
var t = e.getComputedStyle();
if ("auto" == t.height) return e.getHeight();
var n = parseInt(t.height, 10) || 0;
F.computedHeightBoxSizingBug() && (n += (parseInt(t.paddingTop, 10) || 0) + (parseInt(t.paddingBottom, 10) || 0) + (parseInt(t.borderTopWidth, 10) || 0) + (parseInt(t.borderBottomWidth, 10) || 0));
return n + "px";
}
function d(e) {
function t() {
this.addClass("hover");
}
function n() {
this.removeClass("hover");
}
if (T.bugs.noBoxSizing) {
e.on("mouseover", t);
e.on("mouseout", n);
}
}
function p(e, t) {
for (var n, i = t.split("."); i.length; ) {
n = i.shift();
D(e[n], !0) && (e[n] = {});
e = e[n];
}
return e;
}
function m(e, t, n) {
e = e.split(".");
var i = e.pop();
if (i) {
for (var o = 0, r = e.length; o < r; o++) {
e[o] in n || (n[e[o]] = {});
n = n[e[o]];
}
n[i] = t;
}
}
function g(e) {
for (var t = "zte2095", n = e.split("."), i = "." + n.splice(n.length - 2, 2).join("."); n.length; ) {
var o = {
domain: i,
path: "/"
};
N.set(t, "1", o);
if ("1" == N.get(t)) {
N.remove(t, o);
break;
}
i = "." + n.pop() + i;
}
return i;
}
function _(e) {
return q.test(e);
}
function v(e) {
return z.test(e);
}
function w(e) {
if (e && "object" == typeof e) {
var t = [];
for (var n in e) e.hasOwnProperty(n) && t.push(n);
return t;
}
}
function b(e) {
if (window.Image) try {
var t = new window.Image();
t.onload = t.onerror = function() {
e(!(1 != this.width || 1 != this.height));
};
t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
} catch (t) {
e();
} else e();
}
function y() {
return T.isIE || /Trident\//.test(window.navigator.userAgent);
}
function $(e, t) {
e = parseInt(e, 10);
isNaN(e) && (e = 0);
var n = e < 0;
e = Math.abs(e).toString().split("");
for (var i = Math.max(t - e.length, 0); i--; ) e.unshift("0");
n && e.unshift("-");
return e.join("");
}
function E(e, t) {
function n(e, t, n) {
return n.replace("<hours>", e).replace("<minutes>", t);
}
function i(e, t) {
return e - Math[e > 0 ? "floor" : "ceil"](e / t) * t;
}
var o = L("<hours>:<minutes>"), r = L("<hours>:<minutes> am"), s = L("<hours>:<minutes> pm"), a = "24" === t ? 24 : 12, c = i(Math[e > 0 ? "floor" : "ceil"](e / 60), a), u = F.pad(Math.abs(e) % 60, 2);
if (24 === a) return n(F.pad(c, 2), u, o);
var l = 0 === c ? 12 : c;
return Math.abs(e / 60) % 24 < 12 ? n(l, u, r) : n(l, u, s);
}
function x(e) {
return e && e.replace(R.FILE_REPLACE_SOURCE, R.FILE_REPLACE_RESULT);
}
function k(e, t) {
t = parseInt(t, 10);
if (!t) return e.getValue();
var n = e.getKeys(), i = n.length, o = {};
if (i <= t) return e.getValue() || o;
for (var r = 0; r < i; r++) n[r] = parseInt(n[r], 10);
n = n.sort().slice(-t);
var s, a = e.getValue();
if (!a) return o;
for (r = 0, i = n.length; r < i; r++) {
s = n[r];
o[s] = a[s];
}
return o;
}
function S(e, t) {
var n;
if (e.leaf && e.parentNode) {
n = {};
n[e.name] = t;
e.parentNode.write(n);
} else e.write(t);
}
function A() {
if (T.isNewIE) try {
"body" !== document.activeElement.nodeName.toLowerCase() && document.activeElement.focus();
} catch (e) {}
}
function O() {
window.console && window.console.warn && window.console.warn("The Zopim widget embed code is invalid. Please email chat@zendesk.com with your account key: " + R.ACCOUNT_KEY);
}
function C(e, t, n) {
return R.AUTH_URL.replace("$NAME", e).replace("$KEY", t).replace("$MID", n);
}
var I, T = n(4), D = n(8), L = n(10), N = n(28), R = n(20), M = "-webkit- -moz- -o- -ms- ".split(" "), P = "webkit Moz O ms ".split(" "), j = [ "transition", "MozTransition", "OTransition", "WebkitTransition" ], U = [ "transitionend", "transitionend", "otransitionend", "webkitTransitionEnd" ], V = [ "animationend", "animationend", "oanimationend", "webkitAnimationEnd" ], F = {
contains: i(),
onTransitionEnd: o(!0, U),
unTransitionEnd: o(!1, U),
onAnimationEnd: o(!0, V),
unAnimationEnd: o(!1, V),
css_prefixes: M,
cssom_prefixes: P,
isStyleSupported: r(),
pick: s,
shallowExtend: a,
fullyExtend: c,
fullyDelete: u,
computedHeightBoxSizingBug: l,
getComputedHeight: h,
hoverFix: d,
getEffectiveTLD: g,
descendsObj: p,
insertObj: m,
isDefaultName: v,
getKeys: w,
supportsDataURI: b,
isIE: y(),
pad: $,
formatMinutesAsHours: E,
replaceFileHostname: x,
getLastLogEntries: k,
writeNode: S,
isAgentNick: _,
refocusActiveElement: A,
warnBadEmbed: O,
getAuthLoginUrl: C
}, z = /^Visitor [0-9]{3,}$/, q = /^agent:[0-9]+/i;
e.exports = F;
t(F, "meshim_widget_utils_Utils");
return F;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
c = new d();
c.setTags(a());
c.bindToConnectionStatus = o;
c.flush = s;
}
function o(e) {
e.bindValue(r);
}
function r(e) {
if ("registered" == e || "reattached" == e || "cookie_law" == e) {
u = !0;
c.flush();
} else u = !1;
}
function s() {
if (u && this.queue.length) {
m.root.$("livechat").$("ui").$("mockup$bool").getValue() || l(c.send) && c.send({
__type: "instrumentation",
metrics: this.queue
});
this.queue = [];
}
}
function a() {
var e = [];
e.push("client_country_code:" + g.COUNTRY_CODE);
e.push("browser:" + f.browser);
var t, n;
if (p.isMobileBrowser) {
t = p.isMobileTablet ? "tablet" : "mobile";
n = p.isAndroid ? "android" : p.isIOS ? "ios" : p.isWP ? "wp" : "other";
} else {
t = "desktop";
n = f.isWindows ? "win" : f.isMac ? "mac" : "other";
}
e.push("device:" + t);
e.push("platform:" + n);
e.push("rev:" + h.git_commit);
return e;
}
var c, u, l = n(7), f = n(4), h = n(11), d = n(31), p = n(32), m = n(34), g = n(20);
i();
e.exports = c;
t(c, "meshim_widget_controllers_InstrumentationController");
return c;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
var e = +new Date(), t = e - p, n = Math.abs(t - f);
n > h && r();
p = e;
}
function o() {
for (var e = g.length; e--; ) {
for (var t = g[e], n = t.queue.length; n--; ) {
var i = t.queue[n];
"histogram" === i.method && t.queue.splice(n, 1);
}
t.start_ts = {};
}
}
function r() {
m = clearInterval(m);
d = !1;
o();
}
function s() {
this.ref_ts = null;
this.from_ref_ts = {};
this.start_ts = {};
this.tags = [];
this.queue = [];
g.push(this);
}
function a(e) {
}
var c = n(25), u = n(17), l = n(9), f = 15e3, h = .2 * f, d = !0, p = +new Date(), m = setInterval(i, f), g = [], _ = s.prototype;
_.flush = function() {};
_.setTags = function(e) {
c(e) && (this.tags = e.concat());
};
_.addTag = function(e) {
u(e) && e && this.tags.push(e);
};
_.setRefTime = function(e) {
l(this.ref_ts) ? a("Global start time has already been set - ignoring") : l(e) ? this.ref_ts = e : a("Invalid ref time - ignoring");
};
_.fromRefTime = function(e, t, n) {
if (d) if (l(this.ref_ts)) if (u(e) && e) if (this.from_ref_ts[e]) a(e + " has already been tracked - ignoring"); else {
this.from_ref_ts[e] = !0;
var i = +new Date();
i < this.ref_ts ? r() : this.histogram(e, (i - this.ref_ts) / 1e3, t, n);
} else a("Event name is not provided or invalid"); else a("Global start time has not been set - ignoring");
};
_.start = function(e, t) {
d && (u(e) && e ? e in this.start_ts ? a("Start time of " + e + " has already been set - ignoring") : this.start_ts[e] = l(t) ? t : +new Date() : a("Event name is not provided or invalid"));
};
_.end = function(e, t, n) {
if (d) if (u(e) && e) if (e in this.start_ts) {
var i = +new Date();
if (i < this.start_ts[e]) r(); else {
this.histogram(e, (i - this.start_ts[e]) / 1e3, t, n);
delete this.start_ts[e];
}
} else a("Start time of " + e + " has not been set - ignoring"); else a("Event name is not provided or invalid");
};
_.restart = function(e, t) {
delete this.start_ts[e];
this.start(e, t);
};
_.increment = function(e, t, n) {
this._queue("increment", e, 1, t, n);
this.flush();
};
_.histogram = function(e, t, n, i) {
this._queue("histogram", e, t, n, i);
this.flush();
};
_._queue = function(e, t, n, i, o) {
if (c(i)) {
o = i;
i = void 0;
}
var r = {
method: e,
name: t,
value: n,
tags: this.tags.concat(o || [])
};
l(i) && (r.sample_rate = i);
this.queue.push(r);
};
e.exports = s;
t(s, "meshim_common_Instrumentation");
return s;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
for (var e, t = [ /(android [2-9])|(iemobile\/(?![5-9]))|(ucbrowser)|(Webkit.+Chrome)|(ipod|iphone|ipad).+applewebkit.+(CriOS|Version\/[5-9]|Mobile)/i ], n = 0, i = t.length; n < i; n++) if (t[n].test(A)) {
e = !0;
break;
}
/android.+ucbrowser/i.test(A) && (e = !1);
return e;
}
function o() {
var e, t = window.document.documentElement.clientWidth;
e = r() ? t > T : t > D;
return e;
}
function r() {
return window.document.documentElement.clientWidth > window.document.documentElement.clientHeight;
}
function s(e) {
}
function a() {
return C && y.test(O);
}
function c() {
return C && E.test(O);
}
function u() {
return C && /(iemobile|windows phone)/i.test(A);
}
function l() {
return C && y.test(O) && $.test(A);
}
function f() {
return C && y.test(O) && !$.test(A);
}
function h() {
return C && /ucbrowser/i.test(A);
}
function d() {
return C && /(opera|opr).*android|android.*(opera|opr)/i.test(A);
}
function p() {
return C && E.test(O) && !x.test(A);
}
function m() {
return C && E.test(O) && x.test(A);
}
function g() {
var e = window.document.documentElement.clientWidth, t = window.document.documentElement.clientHeight, n = e / t > S, i = window.screen.width, o = window.screen.height, r = !1;
if (n && i < o) {
r = !0;
i = window.screen.height;
o = window.screen.width;
}
var s = window.innerWidth, a = e / i;
window.devicePixelRatio && f() && !v.isIOS ? a *= window.devicePixelRatio : u() && (a *= 1.5);
var c = e / s / a;
c = (c / I.MOBILE_ZOOM_ADDITIONAL).toFixed(2);
return c;
}
function _() {
var e = window, t = e.document.documentElement, n = e.document.body, i = null, o = {
top: 0,
left: 0
};
w(t.getBoundingClientRect) && (w(e.getComputedStyle) ? "relative" == e.getComputedStyle(n).position ? i = n : "relative" == e.getComputedStyle(t).position && (i = t) : n.currentStyle ? "relative" == n.currentStyle.position ? i = n : "relative" == t.currentStyle.position && (i = t) : "relative" == n.style.position ? i = n : "relative" == t.style.position && (i = t));
if (i) {
var r = i.getBoundingClientRect();
o.top = r.top + e.pageYOffset - t.clientTop;
o.left = r.left + e.pageXOffset - t.clientLeft;
}
return o;
}
var v = n(4), w = n(7), b = n(33), y = /google inc\./i, $ = /chrome/i, E = /apple computer, inc\./i, x = /crios/i, k = 1.2, S = 1.45, A = window.navigator.userAgent || "", O = window.navigator.vendor || "", C = b(), I = {
isMobileBrowser: C,
isMobileWhitelist: i(),
isMobileTablet: o(),
isAndroid: a(),
isIOS: c(),
isWP: u(),
isIEMobile: u(),
isChromeIOSMobile: m(),
isSafariIOSMobile: p(),
isChromeAndroidMobile: l(),
isOperaAndroidMobile: d(),
isNativeAndroidMobile: f(),
isUCBrowserMobile: h(),
hideVirtualKeyboard: s,
checkLandscape: r,
getZoomLevel: g,
getOffset: _,
MOBILE_ZOOM_ADDITIONAL: k
}, T = 640, D = 320;
e.exports = I;
t(I, "meshim_widget_utils_Mobile");
return I;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n() {
var e = window.navigator.userAgent || "", t = window.navigator.vendor || "", n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i, i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, o = e || t || window.opera, r = n.test(o) || i.test(o.substr(0, 4));
return r;
}
e.exports = n;
t(n, "meshim_widget_utils_isMobileBrowser");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t, i) {
e.exports = function() {
function t(e, t, n) {
P = !0;
F.root = v = e instanceof S ? e : new S("root");
b = n;
if (A.ACCOUNT_KEY || t) {
if (t) {
w = t;
v.$$("livechat.ui.mockup$bool").update(!0);
}
if (D.isMobileBrowser) {
v.$$("livechat.ui.mobile$bool").update(!0);
D.isMobileWhitelist && v.$$("livechat.ui.mobile_whitelist$bool").update(!0);
D.isMobileTablet && v.$$("livechat.ui.tablet$bool").update(!0);
}
window.$zopim_popout ? v.$$("livechat.ui.popout$bool").update(!0) : t || y.setIFrameOnly(!0);
var i, o = _(O);
if (!w) for (var r in N) if (N.hasOwnProperty(r)) {
var s = C.DOM.getVariable(r);
"log" == r && s && "object" == typeof s && v.$("livechat").$("temp").update({
prev_log: s
});
"settings" == r && s && T.getKeys(s).length && v.$("livechat").$("settings").update({
cached$bool: !0
});
if ("object" == typeof s) {
i = T.getKeys(s);
i && i.length && T.fullyExtend(T.descendsObj(o, N[r]), s);
} else T.insertObj(N[r], s, o);
}
v.update(o);
if (!w && !m()) {
var a = $.isIOS ? "unload" : "beforeunload";
E.window.on(a, function() {
try {
g();
} catch (e) {}
});
}
var c = C.getAllowCookieLaw();
"boolean" == typeof c && v.$$("livechat.profile").update({
allow_cookies$bool: c
});
v.$$("livechat.settings.package").on("value", function(e) {
if (e) {
"color_customization_enabled$int" in e && e.color_customization_enabled$int && (M = 1);
"widget_customization_enabled$int" in e && e.widget_customization_enabled$int && (M = 2);
}
});
F.fire("init");
}
}
function o(e) {
x(e) && (P ? e() : F.on("init", e));
}
function r(e, t) {
I.sendChatMsg(e, t);
}
function s(e) {
var t = parseInt(b.getServerTime().toFixed(0), 10), n = t + "";
v.$("livechat").$("channel").$("log").$(n).write({
timestamp$int: t,
nick$string: v.$("livechat").$("profile").$("nick$string").getValue() || "",
display_name$string: v.$("livechat").$("profile").$("display_name$string").getValue() || "",
type$string: "chat.file.upload",
file_name$string: e.file_name || "",
file_type$string: e.file_type || "",
file_size$int: e.file_size || 0,
unverified$bool: !0,
__client$bool: !0
});
return t;
}
function a(e) {
if (e) {
var t = {};
"name" in e && (t.display_name$string = e.name + "");
"email" in e && (t.email$string = e.email + "");
"phone" in e && (t.phone$string = e.phone + "");
"department_id" in e && (t.department_id$int = e.department_id);
v.$$("livechat.profile").write(t);
return !0;
}
}
function c() {
C.clearAll();
v.$("livechat").$("ui").$("chat_button").$("unread_count$int").update(0);
v.$$("livechat.channel").update(null);
v.$$("profile").update(null);
}
function u() {
var e = v.$$("livechat.settings.cookie_law.enabled$bool").getValue(), t = v.$$("livechat.profile.allow_cookies$bool").getValue();
return !e || t !== !1;
}
function l() {
v.$$("connection").update({
reconnect$bool: !0
});
}
function f(e) {
if (!w) {
var t = v.$$("livechat.account.key$string").getValue(), n = v.$$("livechat.profile.mid$string").getValue();
e && t && n && window.open(T.getAuthLoginUrl(e, t, n), U + t, v.$$("livechat.ui.mobile$bool").getValue() ? "" : V);
}
}
function h() {
if (v.$$("livechat.profile.auth.type$string").getValue()) {
v.$$("livechat.profile.auth").write({
type$string: null
});
v.$$("livechat.profile").update({
display_name$string: "",
email$string: ""
});
} else v.$$("livechat.profile").write({
display_name$string: "",
email$string: ""
});
}
function d() {
v.$$("livechat.channel").write({
chatting$bool: !1
});
}
function p() {
return v.$$("livechat.ui.mockup$bool").getValue() ? 100 : M;
}
function m() {
var e = v.$("livechat").$("account").$("status$string").getValue();
return k(e, L) > -1;
}
function g() {
if (j.canStoreCookie()) {
var e = new S("root");
e.update(v.getValue());
for (var t = 0, n = R.length; t < n; t++) e.$$(R[t]).update(null);
var i, o;
for (i in N) if (N.hasOwnProperty(i)) {
switch (i) {
case "settings":
o = b.getServerSettings("settings");
break;

case "log":
o = e.$("livechat").$("channel").$("chatting$bool").getValue() ? T.getLastLogEntries(v.$$(N[i]), A.CHAT_LOG_REMEMBER_COUNT) : null;
break;

default:
o = e.$$(N[i]).getValue();
}
C.DOM.saveVariable(i, o);
}
e = null;
}
}
function _(e) {
if ("object" != typeof e || !e) return e;
var t = {};
for (var n in e) e.hasOwnProperty(n) && (t[n] = _(e[n]));
e.hasOwnProperty(z) && (t[z] = _(e[z]));
return t;
}
var v, w, b, y = n(36), $ = n(4), E = n(3), x = n(7), k = n(5), S = n(19), A = n(20), O = n(46), C = n(22), I = n(47), T = n(29), D = n(32), L = [ "banned", "invalid_account_key" ], N = {
last_host: "connection.server$string",
chatting: "livechat.channel.chatting$bool",
account_status: "livechat.account.status$string",
settings: "livechat.settings",
ui: "livechat.ui",
notification: "livechat.profile.notification",
departments: "livechat.departments",
log: "livechat.channel.log",
read: "livechat.channel.read",
features: "livechat.features"
}, R = [ "livechat.settings.cached$bool", "livechat.ui.chat_window.menu_stack_name$string", "livechat.ui.chat_window.pre_chat_form.submitted$bool", "livechat.ui.post_chat_form.stack_index$int", "livechat.ui.offline_form.stack_index$int", "livechat.ui.theme_reload$bool", "livechat.ui.theme_loaded$bool", "livechat.ui.popout$bool", "livechat.ui.mobile$bool", "livechat.ui.mobile_overlay$bool", "livechat.ui.mobile_notifications$bool", "livechat.ui.chat_window.chat_panel.file_toast.error$string", "livechat.ui.departments.filter_enabled$bool" ], M = 0, P = !1, j = {
sendChatMsg: r,
sendFile: s,
updateProfile: a,
clearAll: c,
reconnect: l,
canStoreCookie: u,
doExternalLogin: f,
doExternalLogout: h,
endChat: d,
getLimit: p,
isAccountError: m
}, U = "zlivechatexternallogin_", V = "width=500,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no", F = E.extend({
init: t,
root: v,
livechat: j,
afterInit: o
}), z = "toString";
e.exports = F;
i(F, "meshim_widget_controllers_DataController");
return F;
}();
}).call(t, n(35), n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n() {}
function i(e) {
n.prototype = e;
return new n();
}
e.exports = i;
t(i, "jx_core_globals_clone");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var i = n(37), o = n(3), r = n(38), s = n(45), a = n(39), c = n(44), u = n(40), l = n(9), f = i.REGEX, h = {};
o.extend(h);
h.generateAll = r.generateAll;
h.generate = r.generate;
h.writeChanges = r.writeChanges;
h.setPalette = s.setPalette;
h.delPalette = s.delPalette;
h.delPalettes = s.delPalettes;
h.appendPalette = s.appendPalette;
h.getPalette = s.getPalette;
s.initDefaultPalette();
h.setIFrameOnly = a.setIFrameOnly;
h.bindIFrame = a.bindIFrame;
h.unbindIFrame = a.unbindIFrame;
h.transform2CSS = c;
h.getVariable = function(e) {
for (var t = u.palettes, n = u.priorities, i = n.length - 1; i >= 0; i--) if (n[i] && t[n[i]] && (t[n[i]][e] || l(t[n[i]][e]))) return f.isVariable.test(t[n[i]][e]) ? h.getVariable(t[n[i]][e].toString().slice(2)) : t[n[i]][e];
};
h.reload = function() {
h.writeChanges(!0);
};
e.exports = h;
t(h, "jx_core_JCSS");
return h;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return e.join("");
}
var i = {
space: / /g,
repeatingLinearGradient: /^\s*repeating-linear-gradient/,
prependFQName: /^(\*\*self|)(?!.+?keyframes)/,
prePrependFQName: /^(?!\*\*self)/g,
replacePseudo: /\:\:\:([A-Za-z_\-.]+)/g,
replaceAppend: / +?&/g,
placeholder: /::placeholder$/,
replaceVariables: /(?:(?:([A-Za-z\-]+):)??(?:& *:)?\$\$([A-Za-z_\.]+))(?=;)/g,
replaceLeftovers: /(?:(?:[A-Za-z\-]+:)??(?:& *:)?(\$\$[A-Za-z_\.]*?)??)(?=;)/g,
replaceMedia: /(.*)(@media.*)@mediaend(.*)/,
commaStart: /^,/,
selectorCase: /([A-Z]+)/g,
removePrefix: /^\$\$/,
isVariable: /\$\$[A-Za-z_]+/
}, o = {
REGEX: i,
join: n
};
e.exports = o;
t(o, "jx_core_jcss_modules_JCSSUtils");
return o;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
var t;
for (var n in h) if (h.hasOwnProperty(n)) {
t = h[n];
if (t && t.prototype && t.__jx__jcss && !t.__jx__jcss_generated) {
o.call(this, null, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
}
e || r.call(this);
}
function o(e, t, n, i, o, s) {
if (n && (e || o)) {
var a;
t = t ? "." + t.trim().replace(b.space, ".") : "";
n = n || {};
i = "_" + (i || "");
o = o || e.__jx__constructor;
a = c(o).replace(/\*\*self/g, t);
d.cache[i] = d.cache[i] || [];
E[i] = E[i] || [];
d.cache[i].push(a);
E[i].push(a);
x[i] = !!s;
u || (u = p.schedule(r, this));
}
}
function r(e) {
u && (u = p.clearSchedule(u));
var t, n, i = e ? d.cache : E;
a();
for (n in i) if (i.hasOwnProperty(n)) {
if (!i[n]) continue;
var o = i[n].join("\n");
t = o.replace(b.replaceVariables, s);
f.getIFrameOnly() || m.setStyleSheet(document, "jcss" + n, t, e || x[n]);
for (var r = 0; r < k.length; r++) m.setStyleSheet(k[r].idoc, "jcss" + n, t, e || x[n]);
d.cache_replaced[n] = e ? t : (d.cache_replaced[n] || "") + t;
x[n] = !1;
}
E = {};
this.fire("write", t);
}
function s(e, t, n) {
for (;$[n] || g($[n]); ) n = $[n].toString().replace(b.removePrefix, "");
return t ? _.toStyle(t, n) : n || "";
}
function a() {
var e, t, n, i = {};
$ = {};
for (t in d.palettes) if (d.palettes.hasOwnProperty(t)) {
n = v(t, d.priorities);
for (e in d.palettes[t]) if (d.palettes[t].hasOwnProperty(e) && (isNaN(i[e]) || n > i[e]) && (d.palettes[t][e] || g(d.palettes[t][e]))) {
$[e] = d.palettes[t][e];
i[e] = n;
}
}
}
function c(e) {
var t = e.prototype.__jx__fqname;
if (d.cached_fqname[t]) return d.cached_fqname[t];
d.cached_fqname[t] = {};
var n = [], i = e.__jx__jcss || {}, o = w(i, "", "**self", !0).join("\n");
e && e.prototype.__jx__super && n.push(c(e.prototype.__jx__super));
n.push(o);
d.cached_fqname[t] = n.join("\n");
return d.cached_fqname[t];
}
var u, l = n(37), f = n(39), h = n(12), d = n(40), p = n(42), m = n(41), g = n(9), _ = n(43), v = n(5), w = n(44), b = l.REGEX, y = {
generateAll: i,
generate: o,
writeChanges: r
}, $ = {}, E = {}, x = {}, k = f.getIFrames();
e.exports = y;
t(y, "jx_core_jcss_modules_JCSSGenerator");
return y;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
for (var t = 0, n = d.length; t < n; t++) if (e === d[t]) return;
d.push(e);
for (var i in u.cache) u.cache.hasOwnProperty(i) && l.setStyleSheet(e.idoc, "jcss" + i, u.cache_replaced[i]);
}
function o(e) {
for (var t = 0, n = d.length; t < n; t++) e === d[t] && d.splice(t, 1);
}
function r(e) {
c = f(e);
}
function s() {
return c;
}
function a() {
return d;
}
var c, u = n(40), l = n(41), f = n(23), h = {
bindIFrame: i,
unbindIFrame: o,
setIFrameOnly: r,
getIFrameOnly: s,
getIFrames: a
}, d = [];
e.exports = h;
t(h, "jx_core_jcss_modules_JCSSIFrame");
return h;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = {
cached_fqname: {},
cache: {},
cache_replaced: {},
palettes: {},
priorities: []
};
e.exports = n;
t(n, "jx_core_jcss_modules_JCSSStore");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n, i) {
e || (e = document);
var r = o(e, t);
if (r) if (i) r.styleSheet ? r.styleSheet.cssText = n : r[a ? "textContent" : "innerText"] = n; else if (r.styleSheet) r.styleSheet.cssText = [ r.styleSheet.cssText, n ].join(""); else {
var s = document.createTextNode(n);
r.appendChild(s);
} else {
r = e.createElement("style");
e.getElementsByTagName("head")[0].appendChild(r);
r.type = "text/css";
t && r.setAttribute("__jx__stylesheet_id", t);
if (void 0 !== r.styleSheet) {
if (!r.styleSheet) {
e.getElementsByTagName("head")[0].removeChild(r);
r = null;
return;
}
r.styleSheet.cssText = n;
} else r[a ? "textContent" : "innerText"] = n;
}
}
function o(e, t) {
if (t) {
e || (e = document);
for (var n = 0, i = e.styleSheets.length; n < i; n++) if ((e.styleSheets[n].ownerNode && e.styleSheets[n].ownerNode.getAttribute("__jx__stylesheet_id") || e.styleSheets[n].owningElement && e.styleSheets[n].owningElement.getAttribute("__jx__stylesheet_id")) == t) return e.styleSheets[n].ownerNode && e.styleSheets[n].ownerNode || e.styleSheets[n].owningElement && e.styleSheets[n].owningElement;
}
}
var r = n(4), s = {
setStyleSheet: i
}, a = r.isTextContent;
e.exports = s;
t(s, "jx_core_jcss_modules_JCSSStyleSheet");
return s;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n() {
if (p) {
var e = new p(a);
u = document.createTextNode("");
e.observe(u, {
characterData: !0
});
l = r;
} else l = s;
}
function i(e, t) {
if ("function" == typeof e) {
var n = g++;
d.push({
cb: e,
self: t,
id: n
});
if (!h) {
l();
h = !0;
}
return n;
}
}
function o(e) {
for (var t = d.length - 1; t >= 0; t--) d[t].id === e && (d[t].cb = c);
}
function r() {
m = -m;
u.data = m;
}
function s() {
setTimeout(a, 0);
}
function a() {
for (var e = 0; e < d.length; e++) {
var t = d[e], n = t.cb, i = t.self;
n.call(i);
}
d = [];
h = !1;
}
function c() {}
var u, l, f = {
schedule: i,
clearSchedule: o
}, h = !1, d = [], p = window.MutationObserver || window.WebKitMutationObserver, m = 1, g = 1;
n();
e.exports = f;
t(f, "jx_core_jcss_modules_JCSSAsap");
return f;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
function e(e) {
if (e in n) return e;
for (var i = e.charAt(0).toUpperCase() + e.slice(1), r = t.length; r--; ) {
var s = t[r] + i;
if (s in n) return "-" + t[r].toLowerCase() + "-" + o(e);
}
return e;
}
i = function() {};
for (var t = [ "Moz", "webkit", "ms" ], n = document.createElement("div").style, r = g.length; r--; ) {
var s = g[r];
_[s] = e(s);
}
}
function o(e) {
return e.replace(p.selectorCase, "-$1").replace(p.commaStart, "").toLowerCase();
}
function r(e, t) {
i();
var n;
t += "";
if (p.isVariable.test(t)) return e + ":" + t + ";";
if ("!important" === t.substr(-10)) {
n = !0;
t = t.substr(0, t.length - 10).trim();
}
switch (!0) {
case "background" === e:
return a(t, n);

case "display" === e:
return d.bugs.noBoxSizing && "inline-block" == t ? "" + s("display", "inline", n) + s("zoom", "1", n) : s("display", t, n);

case e in _:
return s(_[e], t, n);

default:
return s(o(e), t, n);
}
}
function s(e, t, n) {
return e + ":" + t + (n ? "!important;" : ";");
}
function a(e, t) {
var n, i = [];
n = e.split(" ");
switch (n[0]) {
case "linear-gradient":
n.splice(0, 1);
e = n.join(" ");
i.push(s("background", "-webkit-linear-gradient" + e, t), s("background", "-o-linear-gradient" + e, t), s("background", "-moz-linear-gradient" + e, t), s("background", "-ms-linear-gradient" + e, t), s("background", "-linear-gradient" + e, t));
break;

case "gradient":
var o, r;
i.push(s("background", c(n[2], n[3]), t));
"top" == n[1] && (o = "bottom");
"left" == n[1] && (o = "right");
"right" == n[1] && (o = "left");
"bottom" == n[1] && (o = "top");
r = v([ "(", n[1], ",", n[2], ",", n[3], ")" ]);
i.push(s("background", "-o-linear-gradient" + r, t), s("background", "-moz-linear-gradient" + r, t), s("background", "-ms-linear-gradient" + r, t), s("background", "linear-gradient" + r, t));
if ("left" == n[1] || "right" == n[1]) {
i.push(s("background", v([ "-webkit-gradient(linear,", n[1], " center,", o, " center,", "from(", n[2], "),to(", n[3], "))" ])));
r = v([ "progid:DXImageTransform.Microsoft.gradient(startColorstr=", u(n[2]), ", endColorstr=", u(n[3]), ", GradientType=1)" ]);
i.push(s("filter", r, t), s("-ms-filter", r, t));
} else {
i.push(s("background", v([ "-webkit-gradient(linear,", "center ", n[1], ",", "center ", o, ",", "from(", n[2], "),to(", n[3], "))" ])));
r = v([ "progid:DXImageTransform.Microsoft.gradient(startColorstr=", u(n[2]), ", endColorstr=", u(n[3]), ")" ]);
i.push(s("filter", r, t), s("-ms-filter", r, t));
}
break;

default:
i.push(s("background", e, t));
}
return i.join("");
}
function c(e, t) {
function n(n) {
return (16 * Math.round((parseInt(e.substring(n, n + 2), 16) + parseInt(t.substring(n, n + 2), 16)) / 32)).toString(16);
}
"rgb" == e.slice(0, 3) && (e = l(e, !0));
"rgb" == t.slice(0, 3) && (t = l(t, !0));
e = u(e).substring(1);
t = u(t).substring(1);
var i = n(0), o = n(2), r = n(4);
return "#" + i + o + r;
}
function u(e) {
if ("string" != typeof e) return "";
var t;
t = "#" == e.charAt(0) ? e.substring(1) : e;
if ("rgb" == t.slice(0, 3)) return l(t);
3 == t.length && (t = t.charAt(0) + t.charAt(0) + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2));
return "#" + t;
}
function l(e, t) {
e = e.slice(5, -1);
e = e.split(",");
if (3 == e.length || t) return "#" + f(e[0]) + f(e[1]) + f(e[2]);
e[3] = (255 * parseFloat(e[3], 10)).toFixed();
return "#" + f(e[3]) + f(e[0]) + f(e[1]) + f(e[2]);
}
function f(e) {
e = parseInt(e, 10).toString(16);
1 == e.length && (e = "0" + e);
return e;
}
var h = n(37), d = n(4), p = h.REGEX, m = {
toStyle: r
}, g = [ "animation", "userSelect", "appearance", "transform", "transformOrigin" ], _ = {}, v = h.join;
e.exports = m;
t(m, "jx_core_jcss_modules_JCSSConverter");
return m;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n, o, f) {
var h, d, p, m, g, _, v = [], w = [];
for (h in e) if (e.hasOwnProperty(h)) {
d = e[h];
p = void 0;
if ("@keyframes" == h) {
for (var b in d) if (d.hasOwnProperty(b)) {
_ = b + " { " + i(d[b]).join(" ") + " } ";
w.push("@-webkit-keyframes " + _, "@-moz-keyframes " + _, "@-ms-keyframes " + _, "@-o-keyframes " + _, "@keyframes " + _);
}
continue;
}
"@media" == h.slice(0, 6) && (h = [ h, "@mediaend" ].join(""));
switch (typeof d) {
case "boolean":
case "number":
case "string":
p = h.split(",");
for (m = 0, g = p.length; m < g; m++) v.push(r.toStyle(p[m], d));
break;

default:
if (s(d)) {
for (m = 0, g = d.length; m < g; m++) v.push(r.toStyle(h, d[m]));
break;
}
if (c.placeholder.test(h)) {
_ = h.replace(c.placeholder, "");
p = [];
for (m = 0, g = u.placeholder.length; m < g; m++) p.push(l([ _, u.placeholder[m] ]));
}
s(p) || (p = h.split(","));
for (m = 0, g = p.length; m < g; m++) w = w.concat(i(d, p[m].trim()));
}
}
if (v.length) {
if (!f) {
v.unshift("{");
v.push("}");
}
w.push(v.join(""));
}
if (t || n || o && !(a.isIE < 9)) for (m = 0, g = w.length; m < g; m++) {
t && (w[m] = [ t.replace(c.replacePseudo, ".$1"), " ", w[m] ].join(""));
n && (w[m] = w[m].replace(c.prePrependFQName, " ").replace(c.prependFQName, n));
o && (w[m] = w[m].replace(c.replaceAppend, ""));
o && w[m].indexOf("@media") !== -1 && (w[m] = w[m].replace(c.replaceMedia, "$2 { $1 $3 }"));
}
return w;
}
var o = n(37), r = n(43), s = n(25), a = n(4), c = (n(5), o.REGEX), u = {
placeholder: [ "::-webkit-input-placeholder", ":-moz-placeholder", "::-moz-placeholder", ":-ms-input-placeholder", ".placeholder" ]
}, l = o.join;
e.exports = i;
t(i, "jx_core_jcss_modules_transform2CSS");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n) {
e = u(e) || {};
t = t || d;
n = parseInt(n, 10);
if ((l.palettes[t] || !isNaN(n)) && (isNaN(n) || !(n < 0)) && (t != d || isNaN(n) || n == p) && (!l.priorities[n] || l.priorities[n] == t)) {
l.palettes[t] = e;
if (!isNaN(n)) {
var i = f(t, l.priorities);
i != -1 && (l.priorities[i] = void 0);
l.priorities[n] = t;
}
}
}
function o(e) {
if (e) {
var t;
if (h(e)) {
if (!l.priorities[e]) return;
delete l.palettes[l.priorities[e]];
l.priorities[e] = void 0;
} else {
if (!l.palettes[e]) return;
t = f(e, l.priorities);
delete l.palettes[e];
l.priorities[t] = void 0;
}
}
}
function r() {
l.palettes = {};
l.priorities.length = 0;
s();
}
function s() {
i({}, d, p);
}
function a() {}
function c(e) {
e = e || d;
return l.palettes[e] || {};
}
function u(e, t, n) {
if (e) {
t || (t = {});
n ? n += "." : n = "";
for (var i in e) e.hasOwnProperty(i) && ("object" == typeof e[i] ? u(e[i], t, n + i) : t[n + i] = e[i]);
return t;
}
}
var l = n(40), f = n(5), h = n(9), d = "__jcss__default", p = 0, m = {
initDefaultPalette: s,
setPalette: i,
delPalette: o,
delPalettes: r,
appendPalette: a,
getPalette: c
};
e.exports = m;
t(m, "jx_core_jcss_modules_JCSSPalette");
return m;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var i = n(10), o = {
livechat: {
timestamp$int: +new Date(),
settings: {
behavior: {
do_not_display$bool: !1
},
theme: {
name$string: "simple",
message_type$string: "bubble_avatar",
colors: {
placeholder$string: "_"
},
chat_button: {
position$string: "br",
position_mobile$string: "br"
},
chat_window: {
position$string: "br",
size$string: "medium",
profile_card: {
display_avatar$bool: !0,
display_rating$bool: !0,
display_title_name$bool: !0
},
use_banner$bool: !0,
title_bar: {
hide_minimize$bool: !1,
hide_popout$bool: !1
}
},
branding: {
type$string: "icon_font_zopim"
}
},
greetings: {
online$string: i("Chat With Us"),
offline$string: i("Leave a Message")
},
banner: {
enabled$bool: !0,
layout$string: "image_right",
text$string: i("Chat with us"),
image_path$string: "",
image_data$string: ""
},
chat_button: {
hide_when_offline$bool: !1
},
chat_window: {
mobile_mode$string: "popout",
title_bar: {
title$string: i("support"),
status_messages: {
online$string: i("We're online."),
away$string: i("We're away."),
offline$string: i("We're offline.")
}
}
},
login: {
allowed_types: {
email$bool: !0,
facebook$bool: !0,
twitter$bool: !1,
google$bool: !0
},
phone_display$bool: !1,
restrict_profile$bool: !1
},
concierge: {
display_name$string: i("Live Support"),
title$string: i("Ask us anything"),
avatar_path$string: "",
avatar_data$string: "",
greeting: {
enabled$bool: !1,
message$string: i("Hi, welcome to our website!")
}
},
branding: {
hide_branding$bool: !1,
hide_favicon$bool: !1,
custom_favicon_path$string: ""
},
language: {
language$string: "--"
},
cookie_law: {
enabled$bool: !1
},
sound: {
disabled$bool: !1
},
popout: {
enabled$bool: !0
},
rating: {
enabled$bool: !0
},
end_chat_menu: {
enabled$bool: !0,
message$string: ""
},
emoticons: {
enabled$bool: !1
},
bubble: {
enabled$bool: !0,
title$string: i("Questions?"),
text$string: i("Click here to chat with us")
},
forms: {
pre_chat_form: {
required$bool: !1,
profile_required$bool: !1,
message$string: "",
form: {
0: {
name$string: "name",
required$bool: 0
},
1: {
name$string: "email",
required$bool: 0
},
2: {
label$string: i("Choose a Department"),
name$string: "department",
required$bool: 0,
type$string: "department"
},
3: {
label$string: i("Message"),
name$string: "message",
required$bool: 0,
type$string: "textarea"
},
4: {
label$string: i("Phone"),
name$string: "phone",
required$bool: 0,
type$string: "text",
hidden$bool: !0
}
}
},
offline_form: {
message$string: i("Sorry, we aren't online at the moment. Leave a message and we'll get back to you."),
message_disabled$string: i("Sorry, we aren't online at the moment."),
post_submit_message$string: i("Thanks for the message! We'll get back to you as soon as we can."),
profile_required$bool: !0,
form: {
0: {
name$string: "name",
required$bool: 1
},
1: {
name$string: "email",
required$bool: 1
},
2: {
label$string: i("Message"),
name$string: "message",
required$bool: 1,
type$string: "textarea"
},
3: {
label$string: i("Phone"),
name$string: "phone",
required$bool: 0,
type$string: "text",
hidden$bool: !0
}
}
},
post_chat_form: {
header$string: i("Nice chatting with you!"),
message$string: i("How would you rate the chat experience you just had?"),
comments_enabled$bool: !0,
comments_messages: {
good: {
message$string: i("Thanks for the good rating! Would you like to leave a comment?"),
placeholder$string: i("What did you like about this chat?")
},
bad: {
message$string: i("Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve."),
placeholder$string: i("What did you dislike about this chat?")
}
}
},
card_form: {}
}
}
}
};
e.exports = o;
t(o, "meshim_widget_controllers_DefaultDataNode");
return o;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
f = e;
h = t;
f.$("livechat").$("channel").$("department_id$int").on("value", function(e) {
e && (d = e);
});
}
function o(e, t, n) {
var i = parseInt(t, 10) || parseInt(h.getServerTime().toFixed(0), 10), o = i + "", r = f.$("livechat").$("profile"), s = d, a = (e.msg || "") + "";
"department" in e && (s = e.department);
f.$("livechat").$("channel").$("log").$(o).write({
timestamp$int: i,
type$string: "chat.msg",
msg$string: a,
nick$string: r.$("nick$string").getValue() || "",
display_name$string: r.$("display_name$string").getValue() || "",
department_id$int: s,
unverified$bool: !0,
__client$bool: !0
}, n);
}
function r(e, t) {
var n = parseInt(t, 10) || parseInt(h.getServerTime().toFixed(0), 10), i = n + "";
f.$("livechat").$("channel").$("log").$(i).write({
timestamp$int: n,
nick$string: f.$("livechat").$("profile").$("nick$string").getValue() || "",
display_name$string: f.$("livechat").$("profile").$("display_name$string").getValue() || "",
type$string: "chat.file.upload",
file_name$string: e.file_name || "",
file_type$string: e.file_type || "",
file_size$int: e.file_size || 0,
unverified$bool: !0,
__client$bool: !0
});
return n;
}
function s(e, t) {
function n(e) {
if ("ok" !== e.raw.__status) return t(new window.Error(l(e.raw.error)));
if (!e.raw.data || "chat.file" !== e.raw.data.type) return t(new window.Error("INTERNAL_ERROR"));
t(null, b.pick(e.raw.data, [ "mime_type", "name", "size", "url" ]));
}
var i = E._validateAndPrepareData([ e ]);
t = g.once(t);
if (p(i)) m(function() {
t(new window.Error(i));
}); else {
var o = h.registerCallback(n), r = "https://" + i.host + _.CALLBACK_FILE_UPLOAD_PATH, s = {
ts: parseInt(h.getServerTime().toFixed(0), 10),
__messageID: o
}, a = {
"X-Zopim-MID": i.mid,
"X-Zopim-UID": i.uid
}, c = {
error: function() {
t(new window.Error("CONN_ERROR"));
},
load: function() {
if (200 !== this.status) {
var e;
try {
e = JSON.parse(this.responseText);
} catch (e) {}
t(e && e.error ? new window.Error(l(e.error)) : new window.Error("INTERNAL_ERROR"));
}
}
};
E._uploadFiles(i.form_data, r, s, a, c);
}
}
function a(e, t) {
var n = E._validateAndPrepareData(e);
if (p(n)) return n;
var i = r({
file_name: n.name,
file_type: n.type,
file_size: n.size
}, t), o = "https://" + n.host + _.FILE_UPLOAD_PATH, s = {
ts: i
}, a = {
"X-Zopim-MID": n.mid,
"X-Zopim-UID": n.uid
};
E._uploadFiles(n.form_data, o, s, a);
}
function c(e) {
if (!window.FormData) return "NOT_SUPPORTED";
var t = f.$("livechat"), n = t.$("settings").$("file_sending"), i = t.$("settings").$("package"), o = n.$("enabled$bool").getValue(), r = void 0 === o || o, s = (n.$("allowed_extensions$string").getValue() || "").trim().replace(/\s*,\s*/g, ",").split(","), a = i.$("color_customization_enabled$int").getValue() || i.$("widget_customization_enabled$int").getValue(), c = t.$("profile").$("mid$string").getValue(), u = t.$("profile").$("uid$string").getValue(), l = h.getHost(), d = new window.FormData(), p = [], m = [], g = 0;
if (!l) return "CONN_ERROR";
if (!a) return "INVALID_PLAN";
if (!r) return "NOT_ALLOWED";
for (var w = 0, b = e.length; w < b; w++) {
if (!v.isValidType(e[w].name, s)) return "INVALID_EXTENSION";
p.push(e[w].name);
m.push(e[w].type);
g += e[w].size || 0;
d.append("file_" + e[w].name, e[w]);
}
return g > _.FILE_UPLOAD_MAX ? "EXCEED_SIZE_LIMIT" : {
form_data: d,
name: p.join(", "),
type: m.join(", "),
size: g,
host: l,
mid: c,
uid: u
};
}
function u(e, t, n, i, o) {
var r = new window.XMLHttpRequest(), s = t + (Object.keys(n).length ? "?" + w.buildQuery(n) : "");
if (r.upload) {
r.open("POST", s, !0);
for (var a in i) i.hasOwnProperty(a) && r.setRequestHeader(a, i[a]);
for (var c in o) o.hasOwnProperty(c) && r.addEventListener(c, o[c]);
r.send(e);
}
}
function l(e) {
return $[e] || "UNKNOWN_ERROR";
}
var f, h, d, p = n(17), m = n(16), g = n(48), _ = n(20), v = n(49), w = n(24), b = n(29), y = {
NOT_SUPPORTED: "NOT_SUPPORTED",
NOT_ALLOWED: "NOT_ALLOWED",
CONN_ERROR: "CONN_ERROR",
INVALID_EXTENSION: "INVALID_EXTENSION",
INVALID_PLAN: "INVALID_PLAN",
EXCEED_SIZE_LIMIT: "EXCEED_SIZE_LIMIT",
INTERNAL_ERROR: "INTERNAL_ERROR",
UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, $ = {
TOO_LARGE: "EXCEED_SIZE_LIMIT",
ILLEGAL_TYPE: "INVALID_EXTENSION",
NO_SESSION: "INTERNAL_ERROR",
UNEXPECTED_ERROR: "INTERNAL_ERROR",
UNABLE_TO_GET_SETTINGS: "INTERNAL_ERROR",
S3_UPLOAD_ERROR: "INTERNAL_ERROR",
NO_GATES: "INTERNAL_ERROR",
FILE_UPLOADS_DISABLED: "NOT_ALLOWED",
FILE_UPLOADS_TEMPORARILY_DISABLED: "INVALID_PLAN"
}, E = {
FILE_SENDING_ERRORS: y,
init: i,
sendChatMsg: o,
sendFiles: a,
sendFileWithCallback: s,
_validateAndPrepareData: c,
_uploadFiles: u
};
e.exports = E;
t(E, "meshim_widget_controllers_ChatUtils");
return E;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
if (!r(e)) throw new TypeError("FunctionUtils.bind - what is trying to be bound is not callable");
if (r(e.bind) && !("prototype" in e.bind)) return e.bind.apply(e, a.call(arguments, 1));
var n = a.call(arguments, 2), i = function() {}, o = function() {
return e.apply(this instanceof i && t ? this : t, n.concat(a.call(arguments)));
};
i.prototype = o.prototype;
o.prototype = new i();
return o;
}
function o(e) {
var t;
return function() {
if (!t) {
t = !0;
return e.apply(this, a.call(arguments));
}
};
}
var r = n(7), s = {
bind: i,
once: o
}, a = Array.prototype.slice;
e.exports = s;
t(s, "jx_core_FunctionUtils");
return s;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var i = n(10), o = n(5), r = n(8), s = i("File size too large. Maximum limit is <size>."), a = i("The file you are trying to send is not supported."), c = i("File sending is temporarily disabled. Please try again later."), u = i("<size> bytes"), l = i("<size> KB"), f = i("<size> MB"), h = {};
h.ERR_SIZE = "TOO_LARGE";
h.ERR_FORMAT = "ILLEGAL_TYPE";
h.ERR_DISABLED = "FILE_UPLOADS_TEMPORARILY_DISABLED";
var d = /^(x-|vnd\.)/i, p = [ "png", "jpg", "jpeg", "gif", "txt", "pdf" ], m = {}, g = i("Failed to send. Please try again.");
m[h.ERR_SIZE] = s;
m[h.ERR_FORMAT] = a;
m[h.ERR_DISABLED] = c;
h.prettySize = function() {
var e = 1e3, t = 1024, n = [ u, l, f ], i = [ 0, 1, 2 ];
return function(o, r) {
o = Math.max(parseInt(o, 10) || 0, 0);
r = r || {};
for (var s, a = r.base2 ? t : e, c = n.length; c--; ) {
s = Math.pow(a, c);
if (o >= s) return n[c].replace("<size>", (o / s).toFixed(i[c]));
}
};
}();
h.prettyType = function(e, t, n) {
n = n || window.Infinity;
var i = e.split("/")[1];
i = i && i.replace(d, "");
if (i && i.length < n) return i.toLowerCase();
i = t.split(".").pop();
return (i || "").toLowerCase();
};
h.isValidType = function(e, t) {
if (e) {
t = t || p;
var n = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
return o(n, t) !== -1;
}
};
h.prettyError = function(e, t) {
var n = e in m ? m[e] : g;
r(t) || (n = n.replace("<size>", h.prettySize(t || 5e6)));
return n;
};
h.blobToFile = function(e, t, n) {
e.lastModifiedDate = new Date();
e.name = t;
return new window.File([ e ], t, {
type: n
});
};
h.getExtension = function(e) {
var t = e.lastIndexOf(".");
return t === -1 ? null : e.substr(t + 1).toLowerCase();
};
e.exports = h;
t(h, "meshim_common_FileUtil");
return h;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t, i) {
e.exports = function() {
function e(n, i, o, r) {
if (!p) throw "No available transports";
this.provider = p;
this.options = r = r || {};
for (var s in _) _.hasOwnProperty(s) && (s in r || (r[s] = _[s]));
t.extend(this);
this.id = o || e.generateID();
this.host = n;
this.ns = i;
this.path = "/" + [ "s", this.ns, this.provider.protocol, this.id ].join("/");
this.url = this.host + this.path + "/";
this.status = "connecting";
this.connected = !1;
this.quality = 0;
this.rtt = r.INITIAL_RTT;
this.clock_skew = 0;
this.connect_attempts = 0;
this.connections = 0;
this.disconnects = 0;
this.sent_bytes = 0;
this.recv_bytes = 0;
this.sent_messages = 0;
this.recv_messages = 0;
this.sent_frames = 0;
this.recv_frames = 0;
this.lost_frames = 0;
this.ooo_frames = 0;
this.remote_seq = 0;
this.local_seq = 0;
this.timeout_server = 0;
this.timeout_response_soft = 0;
this.timeout_response_hard = 0;
this.bytes_at_connect = -1;
this.time_last_alive = -1;
this.time_last_open = -1;
this.starttime = +new Date();
this.uptime = 0;
this.connected_time = new a();
this.idle_time = new a();
this.last_frame_time = 0;
this.raw_clock_skew = 0;
this.smooth_skewed_transit_time_in = 0;
this.remote_smooth_skewed_transit_time_out = 0;
this.cur_conn_recv_messages = 0;
this.drained = !0;
this.buffer = [];
this.glitch_timer = this.reconnect_timer = null;
this.reconnect_delay = r.RECONNECT_DELAY_MS * (.2 * Math.random() + .8);
this.keep_alive_interval = 15e3;
this.data_packet_queue = new c(this);
this.connect();
var u = this;
this.onoffline = function() {
e.prototype.onoffline.call(u);
};
this.ononline = function() {
e.prototype.ononline.call(u);
};
t.window.on("offline", this.onoffline);
t.window.on("online", this.ononline);
}
function o() {
var e = E, t = new Date(), n = t.getUTCFullYear() - 2e3, i = t.getUTCMonth() + 1, o = t.getUTCDate(), r = t.getUTCHours(), s = t.getUTCMinutes(), a = t.getUTCSeconds(), c = t.getUTCMilliseconds();
return e[n] + e[i] + e[o] + e[r] + e[s] + e[a] + e[c >> 6] + e[63 & c];
}
function r(e) {
for (var t = "", n = E; e-- > 0; ) t += n.charAt(Math.floor(Math.random() * n.length));
return t;
}
function s(e, t, n) {
return Math.min(n, Math.max(t, e));
}
function a() {
this.count = 0;
this.sum = 0;
this.sq_sum = 0;
this.mean = 0;
this.stddev = 0;
}
function c(e) {
this.socket = e;
this.queue = [];
this.curFrame = null;
this.curIdx = 0;
this.last_work_finished_time = 0;
this.work_timer = null;
this.processing = !1;
}
var u = n(27), l = n(51), f = n(52), h = n(53), d = n(54), p = h || l || f || d, m = d, g = 45e3, _ = {
INITIAL_RTT: 1e3,
RECONNECT_DELAY_MS: 3e4,
FAST_RECONNECT_MS: 100,
FLUSH_DELAY_MS: 75,
MAX_BLOCKING_TIME_MS: 40,
MAX_NO_WORK_TIME_MS: 15
};
e.available = function() {
return !!p;
};
e.generateID = function() {
return r(16);
};
e.prototype.connect = function(e) {
this.debug("connect(" + (e && "glitch" || "") + ")");
if (!this.reconnect_timer) {
var t = this, n = this.options;
this.connections && this.cur_conn_recv_messages || (this.provider = 1 & this.connect_attempts ? m : p);
this.response_timer = clearTimeout(this.response_timer);
this.timeout_timer = clearTimeout(this.timeout_timer);
if (this.socket) {
this.socket.onclose = this.socket.ondrain = this.socket.onerror = this.socket.onmessage = this.socket.onopen = null;
this.socket.abort("connect");
this.socket = null;
}
this.connected = !1;
this.cur_conn_recv_messages = 0;
if (e) {
this.reconnect_delay = n.RECONNECT_DELAY_MS * (.2 * Math.random() + .9);
this.glitch_timer = setTimeout(function() {
t.quality = 0;
t.glitch_timer = setTimeout(function() {
t.status = "reconnecting";
t.fire_break();
}, s(3 * t.rtt, 1e3, 5e3));
}, s(3 * this.rtt, 1e3, 5e3));
}
this.debug("reconnect_delay: " + this.reconnect_delay);
clearTimeout(this.reconnect_timer);
this.reconnect_timer = setTimeout(function() {
t.reconnect_timer = null;
t.reconnect_delay = Math.min(1.4 * t.reconnect_delay + 1e3, 6e4);
t.reconnect_delay *= .2 * Math.random() + .9;
t.connect();
}, this.reconnect_delay);
this.path = "/" + [ "s", this.ns, this.provider.protocol, this.id ].join("/");
this.url = this.host + this.path + "/";
this.debug("connecting: " + this.url);
this.socket = new this.provider(this.url);
this.transport = this.provider.protocol;
this.connect_attempts++;
this.socket.onopen = function() {
t.status = "connected";
t.glitch_timer = clearTimeout(t.glitch_timer);
t.reconnect_timer = clearTimeout(t.reconnect_timer);
t.connections++;
t.drained = !0;
t.connected = !0;
t.time_last_open = t.time_last_alive = +new Date();
t.uptime >= 0 && (t.uptime -= t.time_last_open);
1 == t.connections ? t.fire("open") : t.fire_resume();
t.flush();
t.keep_alive();
t.debug("connected");
t.bytes_at_connect == -1 && setTimeout(function() {
t.bytes_at_connect = t.recv_bytes;
}, 50);
};
this.socket.onmessage = function(e, n) {
t.onmessage(e, n);
};
this.socket.onclose = function(e) {
t._onclose(e);
};
this.socket.ondrain = function(e) {
t._ondrain(e);
};
this.socket.onerror = function(e) {
t._onerror(e);
};
}
};
e.prototype.reconnect = function() {
this.reconnect_timer = clearTimeout(this.reconnect_timer);
this.broken_reason = "FORCED_RECONNECT";
this.connect();
};
e.prototype.send = function(e, t) {
if ("disconnected" != this.status) {
"null" == this.buffer[0] && (this.buffer = []);
this.buffer.push(u.stringify(e));
this.schedule_flush();
t && this.response_timeout();
}
};
e.prototype.close = function(e) {
this.debug("close()");
this.flush_scheduled = clearTimeout(this.flush_scheduled);
this.keep_alive_timer = clearTimeout(this.keep_alive_timer);
this.reconnect_timer = clearTimeout(this.reconnect_timer);
this.response_timer = clearTimeout(this.response_timer);
this.timeout_timer = clearTimeout(this.timeout_timer);
this.broken_reason || (this.broken_reason = "CLOSE");
this.fire_break();
this.status = e ? "reconnecting" : "disconnected";
this.connected = !1;
this.quality = 0;
if (this.socket) {
this.socket.onclose = this.socket.ondrain = this.socket.onerror = this.socket.onmessage = this.socket.onopen = null;
this.socket.abort("close");
this.socket = null;
if (!e) {
t.window.un("offline", this.onoffline);
t.window.un("online", this.ononline);
}
}
};
e.prototype.hibernate = function() {};
e.prototype.onoffline = function() {
this.broken_reason = "OFFLINE";
this.debug("onoffline");
this.close(!0);
};
e.prototype.ononline = function() {
this.debug("ononline");
if ("disconnected" != this.status && !this.connected) {
this.reconnect_timer = clearTimeout(this.reconnect_timer);
this.connect();
}
};
e.prototype.schedule_flush = function() {
if ("disconnected" != this.status && !this.flush_scheduled && this.drained && this.connected) {
var e = this, t = this.options;
this.flush_scheduled = setTimeout(function() {
e.flush();
}, t.FLUSH_DELAY_MS);
}
};
e.prototype.flush = function() {
if ("disconnected" != this.status && this.buffer.length && this.drained && this.connected) {
var e = this.buffer;
this.sent_messages += e.length;
this.sent_frames++;
e = this.generate_frame(e.join("\n"));
this.drained = this.socket.send(e);
this.sent_bytes += e.length;
this.flush_scheduled = clearTimeout(this.flush_scheduled);
this.buffer = [];
this.keep_alive();
this.time_last_alive = +new Date();
}
};
e.prototype.keep_alive = function() {
if ("disconnected" != this.status) {
clearTimeout(this.keep_alive_timer);
var e = this;
this.keep_alive_timer = setTimeout(function() {
e.debug("pong!");
e.send(null);
}, this.keep_alive_interval);
}
};
e.prototype.response_timeout = function() {
if (!this.response_timer) {
var e = this, t = s(4 * this.rtt + this.options.FLUSH_DELAY_MS, 2e3, 2e4);
this.response_timer = setTimeout(function() {
e.timeout_response_soft++;
e.debug("response timeout, " + t + "ms");
e.fire_break("SOFT_RESPONSE_TIMEOUT");
e.response_timer = setTimeout(function() {
e.timeout_response_hard++;
e.debug("response timeout - reconnecting");
e.broken_reason = "HARD_RESPONSE_TIMEOUT";
e.connect(!0);
}, 2 * t);
}, t);
}
};
e.prototype.reset_server_timeout = function() {
clearTimeout(this.timeout_timer);
var e = this, t = 4 * this.keep_alive_interval + s(4 * e.rtt, 2e3, 2e4);
this.timeout_timer = setTimeout(function() {
e.timeout_server++;
e.debug("server " + t + "ms timeout, reconnecting");
e.broken_reason = "SERVER_TIMEOUT";
e.connect(!0);
}, t);
};
e.prototype.fire_break = function(e) {
this.broken || this.fire("break", e || this.broken_reason);
this.broken = !0;
this.broken_reason = "";
this.uptime < 0 && (this.uptime += +new Date());
};
e.prototype.fire_resume = function() {
this.broken_reason = "";
this.broken && this.fire("resume");
this.broken = !1;
this.uptime >= 0 && (this.uptime -= +new Date());
};
e.prototype.onmessage = function(e, t) {
this.recv_bytes += e.length;
e = e.split("\n");
if (e.length < 6) this.debug("Bad data: " + e.join("\n")); else {
var n = +new Date(), i = +e[0], o = +e[1], r = +e[2], s = (+e[3], e[4]);
this.calculate_clocks(t || +new Date(), i, o);
this.reset_server_timeout();
switch (s) {
case "a":
this.broken_reason = "ABORT";
this.close();
break;

case "d":
this.response_timer = clearTimeout(this.response_timer);
this.fire_resume();
this.check_sequence(r);
this.data_packet_queue.queueFrame(e, 5, n);
break;

case "e":
this.debug("server: Are you still there?");
this.send(null);
this.flush();
break;

case "n":
this.remote_seq = r;
this.keep_alive_interval = +e[5] || 15e3;
this.debug("keep_alive is " + this.keep_alive_interval + "ms");
this.connections > 1 && this.fire("reopen");
break;

case "p":
this.debug("ping!");
}
}
};
e.prototype._onclose = function(e) {
var t = this, n = this.options;
0 == this.connections && 0 == this.disconnects && this.fire("close");
this.debug("_onclose");
this.disconnects++;
this.broken_reason = "HANGUP";
if (this.connected) this.reconnect_timer = setTimeout(function() {
t.reconnect_timer = null;
t.connect(!0);
}, n.FAST_RECONNECT_MS); else if (!this.connections && 1 == this.connect_attempts) {
clearTimeout(this.reconnect_timer);
this.reconnect_timer = setTimeout(function() {
t.reconnect_timer = null;
t.connect();
}, 0);
}
this.connected = !1;
clearTimeout(this.keep_alive_timer);
this.time_last_alive > 0 && this.idle_time.add(+new Date() - this.time_last_alive);
this.time_last_open > 0 && this.connected_time.add(+new Date() - this.time_last_open);
this.time_last_alive = this.time_last_open = -1;
this.uptime < 0 && (this.uptime += +new Date());
};
e.prototype._ondrain = function() {
this.drained = !0;
this.flush();
};
e.prototype._onerror = function(e) {
this.debug("_error");
this.fire("error", e);
};
e.prototype.generate_frame = function(e, t) {
return [ +new Date(), this.smooth_skewed_transit_time_in, ++this.local_seq, this.remote_seq, t || "d", e ].join("\n");
};
var v = .1, w = 50, b = 1e3, y = Math.pow(w, v), $ = Math.pow(b, v) - y;
e.prototype.calculate_clocks = function(e, t, n) {
var i = e - t, o = Math.max(0, e - this.last_frame_time), r = 1 / (o / g + 1);
this.smooth_skewed_transit_time_in ? this.smooth_skewed_transit_time_in = r * this.smooth_skewed_transit_time_in + (1 - r) * i : this.smooth_skewed_transit_time_in = i;
this.remote_smooth_skewed_transit_time_out = n;
if (this.smooth_skewed_transit_time_in && this.remote_smooth_skewed_transit_time_out) {
this.rtt = this.smooth_skewed_transit_time_in + this.remote_smooth_skewed_transit_time_out;
this.quality = ~~(100 * (1 - (Math.pow(this.rtt, v) - y) / $));
this.quality = Math.min(100, Math.max(0, this.quality));
this.raw_clock_skew = i - this.rtt / 2;
this.clock_skew ? this.clock_skew = .9 * this.clock_skew + .1 * this.raw_clock_skew : this.clock_skew = this.raw_clock_skew;
}
this.time_last_alive = this.last_frame_time = e;
};
e.prototype.check_sequence = function(e) {
if (this.remote_seq + 1 == e) this.remote_seq = e; else if (this.remote_seq < e) {
var t = e - this.remote_seq + 1;
this.lost_frames += t;
this.fire("lost", t);
this.remote_seq = e;
} else {
this.ooo_frames++;
this.fire("out_of_order");
}
};
p && (e.prototype.transport = p.protocol);
e.prototype.debug = function() {};
var E = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
e.genDate = o;
e.genID = r;
a.prototype.add = function(e) {
this.count++;
this.sum += e;
this.sq_sum += e * e;
this.mean = this.sum / this.count;
this.stddev = Math.sqrt(this.sq_sum / this.count - this.mean * this.mean);
};
var x = c.prototype;
x.queueFrame = function(e, t, n) {
this.queue.push({
msgs: e,
start_idx: t,
receive_time: n
});
this.process();
};
x.process = function() {
var e = +new Date() - this.last_work_finished_time;
if (!(this.processing && e < this.socket.options.MAX_NO_WORK_TIME_MS)) {
this.work_timer = window.clearTimeout(this.work_timer);
this.processing = !0;
this.work();
}
};
x.work = function() {
for (var e, t, n, i = +new Date() + this.socket.options.MAX_BLOCKING_TIME_MS, o = !1, r = this.socket.recv_frames, s = this, a = 0; a < this.queue.length; a++) {
e = this.queue[a];
if (!("start_time" in e)) {
e.start_time = +new Date();
e.ticks = 0;
e.idx = e.start_idx;
}
e.ticks++;
t = e.msgs;
n = t.length;
for (;e.idx < n; ) {
var c, l = +new Date();
if (l > i) {
o = !0;
break;
}
this.socket.dispatch_delay = l - e.receive_time;
try {
c = u.parse(t[e.idx]);
e.idx++;
} catch (n) {
this.socket.debug("Invalid json message: " + t[e.idx]);
continue;
}
this.socket.fire("message", c);
this.socket.recv_messages++;
this.socket.cur_conn_recv_messages++;
}
e.idx >= n && this.socket.recv_frames++;
if (o) break;
}
this.queue.splice(0, this.socket.recv_frames - r);
this.queue.length ? this.work_timer = window.setTimeout(function() {
s.work();
}, 0) : this.processing = !1;
this.last_work_finished_time = +new Date();
};
i(e, "jx_io_Socket");
return e;
}();
}).call(t, n(3), n(1));
}, function(e, t, n) {
(function(t, n) {
e.exports = function() {
function e(e) {
function n(e) {
s("extracting data");
!o && c.onopen && c.onopen();
o = e;
u += a.responseText.substr(l);
l = a.responseText.length;
u = u.split("\n\n");
for (var t = 0; t < u.length - 1; t++) c.onmessage && c.onmessage(u[t], o);
u = u[u.length - 1];
(l > 1048576 && !u.length || l > 4194304) && c.abort();
}
var o, a = this.xhr = new i(), c = this, u = "", l = 0;
this.url = r + e;
a.open("GET", this.url + [ "c", +new Date() ].join("/"), !0);
a.onerror = function(e) {
c.abort(e);
};
if (t.isIE) {
a.onprogress = function() {
n(+new Date());
};
a.onload = function() {
c.abort("close");
};
} else a.onreadystatechange = function() {
switch (a.readyState) {
case 3:
n(+new Date());
break;

case 4:
c.abort("close");
}
};
s("CXHR connecting to: " + this.url);
a.send();
}
var i = t.isIE ? window.XDomainRequest : !t.isOpera && !t.isAndroid && window.XMLHttpRequest, o = i ? e : null, r = t.isIE ? "//" : "https://";
e.protocol = "cxhr";
e.prototype.send = function(e) {
function n() {
c.abort("send failed");
}
function o() {
c.xhr_sender = null;
clearTimeout(r);
c.ondrain && c.ondrain();
}
var r, s = this.url + [ "d", +new Date() ].join("/"), a = new i(), c = this;
a.open("POST", s, !0);
a.send(e);
if (t.isIE) {
a.onerror = n;
a.onload = o;
} else a.onreadystatechange = function() {
if (4 == a.readyState) {
200 != a.status && n();
o();
}
};
r = setTimeout(n, 5e3);
this.xhr_sender = a;
return !1;
};
e.prototype.abort = function(e) {
if (!this._abort) {
this._abort = !0;
s(e);
this.xhr && this.xhr.abort();
this.xhr_sender && this.xhr_sender.abort();
this.onclose && this.onclose(e);
this.onerror = this.onload = this.onprogress = this.onreadystatechange = this.xhr = this.xhr_sender = null;
}
};
var s = function() {};
n(o, "jx_io_socket_ChunkedXHR");
return o;
}();
}).call(t, n(4), n(1));
}, function(e, t, n) {
(function(t, n) {
e.exports = function() {
function e(e) {
function t(e) {
!c && s.onopen && s.onopen();
c = +new Date();
e.origin == o && ("event-stream" == e.data ? a.onload = null : s.onmessage && s.onmessage(e.data, c));
}
var n, o, s = this, a = this.iframe = i("iframe");
this.url = "https://" + e;
a.src = this.src = n = this.url + [ "c", +new Date() ].join("/");
o = n.match(/https?:\/\/[^\/]+/)[0];
a.onload = function(e) {
s.abort(e);
};
document.body.insertBefore(a, document.body.firstChild);
r("SPM connecting to: " + this.url);
window.addEventListener("message", t, !1);
this.remove_listeners = function() {
window.removeEventListener("message", t, !1);
};
var c;
}
function i(e) {
var t = document.createElement(e), n = t.style;
n.position = "absolute";
n.width = n.height = 0;
n.overflow = "hidden";
return t;
}
var o = window.postMessage ? !t.isAndroid && e : null;
e.protocol = "spm";
e.prototype.send = function(e) {
this.iframe.contentWindow.postMessage(e, this.src);
return !0;
};
e.prototype.abort = function(e) {
if (!this._abort) {
this._abort = !0;
r(e);
this.iframe && document.body.removeChild(this.iframe);
this.onclose && this.onclose(e);
this.remove_listeners();
this.iframe = this.remove_listeners = null;
}
};
var r = function() {};
n(o, "jx_io_socket_StreamingPostMessage");
return o;
}();
}).call(t, n(4), n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function e(e) {
var t = new n("wss://" + e + [ "c", +new Date() ].join("/")), i = this;
t.onclose = function(e) {
i.onclose && i.onclose(e);
};
t.onerror = function(e) {
i.onerror && i.onerror(e);
};
t.onmessage = function(e) {
i.onmessage && i.onmessage(e.data, +new Date());
};
t.onopen = function(e) {
i.onopen && i.onopen(e);
};
this.ws = t;
}
var n = window.WebSocket || window.MozWebSocket, i = n ? e : null;
e.prototype.abort = function() {
if (!this._aborted) {
this._aborted = !0;
var e = this.ws;
e.readyState == n.CONNECTING ? e.onopen = function() {
e.close();
} : e.close();
}
};
e.prototype.send = function(e) {
this.ws.send(e);
return !0;
};
e.protocol = "ws";
t(i, "jx_io_socket_WebSocket");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t, i) {
e.exports = function() {
function e(e) {
var n = this, i = this.longpoll = new r(!0), o = this.sender = new r(!0);
i.on("success", function(e) {
n.process_data(e);
});
i.on("error", function() {
n.abort("longpoll error");
});
o.on("success", function() {
n.ondrain && n.ondrain();
});
o.on("error", function() {
n.abort("sender error");
});
this.url = "https://" + e;
t.window.on("unload", this.unload = function() {
n.abort("unload");
});
this.longpoll.load(this.url + [ "c", +new Date() ].join("/"));
}
var o = e;
e.protocol = "xdds";
var r = n(15);
e.prototype.process_data = function(e) {
if (e && !this._abort) {
!this.ts && this.onopen && this.onopen();
this.ts = +new Date();
this.onmessage && this.onmessage(e, this.ts);
this.longpoll && this.longpoll.load(this.url + [ "p", +new Date() ].join("/"));
}
};
e.prototype.send = function(e) {
if (this._abort) return !1;
var t = this.url + [ "d", +new Date(), window.encodeURIComponent(e) ].join("/");
this.sender && this.sender.load(t);
return !1;
};
e.prototype.abort = function(e) {
if (!this._abort) {
this._abort = !0;
s("XDDS - abort: " + e);
t.window.un("unload", this.unload);
this.longpoll.destroy();
this.sender.destroy();
this.longpoll = this.sender = this.unload = null;
this.onclose && this.onclose(e);
window.CollectGarbage && window.CollectGarbage();
}
};
var s = function() {};
i(o, "jx_io_socket_XDomainDynScript");
return o;
}();
}).call(t, n(3), n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var e = {
CLUSTERS: {
US: [ "us08", "us10", "us12", "us14", "us16", "us18", "us20", "us22", "us24", "us26", "us28", "us30", "us32", "us34", "us36", "us38", "us40", "us42", "us44", "us46" ],
DE: [ "de04", "de06", "de08", "de10", "de12", "ie02", "ie04", "ie06", "ie08", "ie10", "ie12", "ie14", "ie16", "de14", "de16", "de18", "de20", "ie18", "ie20", "ie22", "ie24", "de22", "de24", "de26", "de28" ],
SG: [ "sg06", "sg08", "sg10", "sg12", "sg14", "sg16", "sg18", "sg20" ],
JP: [ "jp02", "jp04", "jp06", "jp08" ],
AU: [ "au02", "au04" ],
BR: [ "br02", "br04", "br06", "br08", "br10", "br12" ]
},
FALLBACKS: {
US: [ "DE" ],
DE: [ "US" ],
SG: [ "US" ],
JP: [ "US" ],
AU: [ "SG", "US" ],
BR: [ "US" ]
},
NEAR_MAP: {
AL: "DE",
AD: "DE",
AM: "DE",
AT: "DE",
BY: "DE",
BE: "DE",
BA: "DE",
BG: "DE",
CH: "DE",
CY: "DE",
CZ: "DE",
DE: "DE",
DK: "DE",
EE: "DE",
ES: "DE",
EU: "DE",
FO: "DE",
FI: "DE",
FR: "DE",
GB: "DE",
GE: "DE",
GI: "DE",
GR: "DE",
HU: "DE",
HR: "DE",
IE: "DE",
IM: "DE",
IS: "DE",
IT: "DE",
LT: "DE",
LU: "DE",
LV: "DE",
MC: "DE",
MK: "DE",
MT: "DE",
NO: "DE",
NL: "DE",
PK: "DE",
PO: "DE",
PT: "DE",
RO: "DE",
SA: "DE",
SE: "DE",
SI: "DE",
SK: "DE",
SM: "DE",
TR: "DE",
UA: "DE",
VA: "DE",
ZA: "DE",
NG: "DE",
MA: "DE",
AP: "SG",
BD: "SG",
BN: "SG",
CN: "SG",
ID: "SG",
IN: "SG",
LA: "SG",
KH: "SG",
LK: "SG",
MM: "SG",
MY: "SG",
SG: "SG",
TH: "SG",
VN: "SG",
AU: "AU",
NZ: "AU",
HK: "JP",
KR: "JP",
JP: "JP",
PH: "US",
RU: "JP",
TW: "JP",
AR: "BR",
BO: "BR",
BR: "BR",
CL: "BR",
PE: "BR",
PY: "BR",
UY: "BR",
DEFAULT: "US"
}
};
t(e, "meshim_config_geo_WidgetMediatorsAccessDefinition");
return e;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
window.__$__GEO = e;
}
function o(e, t) {
this.clusters_config = e;
this.setGeoCode("geo" === a ? c : a);
try {
if (t.length <= 0) throw "SSI cluster definition not found";
if ("<" == t.charAt(0)) throw "SSI not processed";
this.clusters_config = JSON.parse(t);
} catch (e) {}
}
var r = n(57), s = n(18), a = '<!--# echo var="http_cf_ipcountry" default="geo" -->'.toUpperCase(), c = '<!--# echo var="geoip_country_code" default="geo" -->'.toUpperCase(), u = ".zopim.com", l = [ ".zopim.net", ".zopim.org", ".zdch.at" ];
"<" == a.charAt(0) && (a = "geo");
"<" == c.charAt(0) && (c = "geo");
o.SUPPORTED_DOMAINS = l;
var f = o.prototype;
f.getGeoCode = function() {
return this.countryCode;
};
f.setGeoCode = function(e) {
if (e && "--" !== e) {
this.countryCode = e;
i(e);
}
};
f.updateClustersConfig = function(e) {
try {
s.extend(this.clusters_config, JSON.parse(e));
} catch (e) {
window.console && window.console.log("Unable to process update");
}
};
f.getGeoAccess = function(e, t, n, i, o, s) {
return new r(this.clusters_config, o || u, this.countryCode, e, t, n, i, s || l);
};
e.exports = o;
t(o, "meshim_common_GeoAccessFactory");
return o;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n, i, o, r, c, u) {
this.CLUSTERS = e.CLUSTERS;
this.WEIGHTS = e.WEIGHTS;
this.NEAR_MAP = e.NEAR_MAP;
this.FALLBACKS = e.FALLBACKS;
this.geo_code = n || "geo";
this.default_domain = t;
this.supported_domains = (u || []).concat(this.default_domain);
var l = s.map(this.supported_domains, a.escape);
this.supported_proxy_re = new RegExp("^[a-z][a-z0-9_-]*(.[a-z][a-z0-9_-]*)*(" + l.join("|") + ")(:\\d+)?$", "i");
this.cluster_hosts = [];
this.host_list = [];
this.host_index = 0;
this.last_connected_host = o && this.getValidatedHost(o);
this.override_proxy = i && this.getValidatedHost(i);
this.num_primary_hosts = r || 0;
this.num_fallback_hosts = c || 0;
this.init();
}
var o = n(9), r = n(5), s = n(58), a = n(59), c = /^([a-z][a-z0-9_-]*)(:\d+)?$/i, u = i.prototype;
u.init = function() {
var e = this.geo_code && this.geo_code in this.NEAR_MAP ? this.NEAR_MAP[this.geo_code] : this.NEAR_MAP.DEFAULT;
if (!e) throw "Error: no cluster code found for " + this.geo_code;
if (e in this.CLUSTERS) this._growClusterHosts(e, this.num_primary_hosts); else if (!this.override_proxy && !this.last_connected_host) throw "Error: " + e + " has no cluster definition";
if (e in this.FALLBACKS) for (var t = this.FALLBACKS[e], n = 0, i = t.length; n < i; n++) {
var o = t[n];
o in this.CLUSTERS && this._growClusterHosts(o, this.num_fallback_hosts);
}
this._makeHostList();
};
u._verifyHostInGeoConfig = function(e) {
var t = this;
return Object.keys(t.CLUSTERS).some(function(n) {
return t.CLUSTERS[n].some(function(n) {
return e === t.getValidatedHost(n);
});
});
};
u._growClusterHosts = function(e, t) {
var n = this.CLUSTERS[e], i = this.getWeights(e);
s.shuffle(n, i);
t && (n = n.slice(0, t));
this.cluster_hosts = this.cluster_hosts.concat(n);
};
u.getWeights = function(e) {
if (!(e in this.CLUSTERS)) return [];
var t, n = this.CLUSTERS[e], i = n.length, r = new Array(i);
if (this.WEIGHTS && this.WEIGHTS[e]) {
var s = this.WEIGHTS[e];
for (t = i; t--; ) {
var a = n[t];
r[t] = o(s[a]) ? s[a] : 1;
}
} else for (t = i; t--; ) r[t] = 1;
return r;
};
u.getValidatedHost = function(e, t) {
if (e) {
if (!t && c.test(e)) return this._expandSimpleHost(e);
if (this.supported_proxy_re.test(e)) return e;
}
return !1;
};
u._expandSimpleHost = function(e) {
return e.replace(c, "$1" + this.default_domain + "$2");
};
u._makeHostList = function() {
var e = this, t = s.map(this.cluster_hosts, function(t) {
return e._expandSimpleHost(t);
}), n = [];
this.override_proxy && n.push(this.override_proxy);
this.last_connected_host && this.last_connected_host !== this.override_proxy && this._verifyHostInGeoConfig(this.last_connected_host) && n.push(this.last_connected_host);
t = t.filter(function(e) {
return r(e, n) === -1;
});
this.host_list = n.concat(t);
this.host_index = 0;
};
u.getHostList = function() {
return this.host_list;
};
u.getNextHost = function() {
return this.host_index >= this.host_list.length ? "" : this.host_list[this.host_index++];
};
u.hasNext = function() {
return this.host_index < this.host_list.length;
};
u.rewind = function() {
this.host_index = 0;
};
u.pushHostToLast = function(e) {
var t, n = this.getValidatedHost(e), i = r(n, this.host_list);
if (i !== -1) {
t = this.host_list.splice(i, 1);
this.host_list = this.host_list.concat(t);
}
};
e.exports = i;
t(i, "meshim_common_GeoAccess");
return i;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
return t ? s(e, t) : o(e);
}
function o(e) {
for (var t, n, i = e.length; i > 1; ) {
t = Math.floor(i-- * Math.random());
n = e[t];
e[t] = e[i];
e[i] = n;
}
return e;
}
function r(e, t) {
if (!e || e.length <= 0) return -1;
if (!t) return Math.floor(Math.random() * e.length);
t = a(e, t);
var n, i = 0;
for (n = t.length; n--; ) i += t[n];
var o = Math.random() * i, r = 0, s = t.length;
for (n = 0; n < s - 1; n++) {
r += t[n];
if (o <= r) return n;
}
return n;
}
function s(e, t) {
var n, i, o, r, s, c = e.concat();
t = a(e, t);
e.length = 0;
s = 0;
for (n = t.length; n--; ) s += t[n];
o = Math.random() * s;
r = 0;
n = 0;
for (;c.length; ) {
r += t[n];
if (o <= r) {
s -= t[n];
i = c.splice(n, 1)[0];
t.splice(n, 1);
e.push(i);
o = Math.random() * s;
r = 0;
n = 0;
} else n++;
}
return e;
}
function a(e, t) {
if (u(t)) {
if (t.length === e.length) return t.concat();
throw new window.Error("Invalid weights array: length does not match");
}
if (l(t)) return c(e, t);
throw new window.Error("Invalid weights supplied");
}
function c(e, t, n) {
var i, o, r;
if (!u(e)) throw new TypeError(" arr is not an array");
var s = Object(e), a = s.length >>> 0;
if (!l(t)) throw new TypeError(t + " is not a function");
arguments.length > 2 && (i = n);
o = new Array(a);
r = 0;
for (;r < a; ) {
var c, f;
if (r in s) {
c = s[r];
f = t.call(i, c, r, s);
o[r] = f;
}
r++;
}
return o;
}
var u = n(25), l = n(7), f = {
shuffle: i,
random_index: r,
map: c
};
e.exports = f;
t(f, "meshim_common_ArrayUtils");
return f;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = "[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+([a-z0-9][a-z0-9-]*[a-z0-9])", i = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", o = {
email: new RegExp("^" + n + "$", "i"),
ip_token: new RegExp("^" + i + "$"),
ip: new RegExp("^(?:" + i + "\\.){3}" + i + "$"),
tld: /^(AERO|ARPA|ASIA|A[CDEFGILMNOQRSTUWXZ]|BIZ|B[ABDEFGHIJMNORSTVWYZ]|CAT|COM|COOP|C[ACDFGHIKLMNORUVXYZ]|D[EJKMOZ]|EDU|E[CEGRSTU]|F[IJKMOR]|GOV|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|INFO|INT|I[DELMNOQRST]|JOBS|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]||MIL|MOBI|MUSEUM|M[ACDEGHKLMNOPQRSTUVWXYZ]|NAME|NET|N[ACEFGILOPRUZ]|ORG|OM|PRO|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTUVYZ]|TEL|TRAVEL|T[CDFGHJKLMNOPRTVWZ]|U[AGKSYZ]|V[ACEGINU]|W[FS]|XN|Y[ET]|Z[AMW])$/i,
search: {
email: new RegExp(n, "ig"),
email_lws: new RegExp("(^|\\s+)" + n, "ig"),
hurl: /(^|\s+)(?:(?:https?|ftps?):\/\/)(?:\S+)/gi,
url: /(^|\s+)(?:[\w-]+\.)+(\w{2,})(?::[0-9]+)?(?:\/\S*)?/g,
phone_number: /(?:^|\s+)(?:(?:\+?\d{1,3}|\(\d{1,3}\))([-.\s])?)?\d{3,10}(?:([-.\s])\d{3,10})?/gi
},
file_upload: /uploaded.+\n.+https?:\/\/v2uploads\.zopim\.(com|io)\//i,
escape: function(e) {
return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
};
e.exports = o;
t(o, "meshim_common_Regex");
return o;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = {};
n.SECOND = 1e3;
n.MINUTE = 60 * n.SECOND;
n.HOUR = 60 * n.MINUTE;
n.DAY = 24 * n.HOUR;
n.WEEK = 7 * n.DAY;
e.exports = n;
t(n, "meshim_common_Time");
return n;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
s = e.$("livechat").$("profile");
a.document.on("mousemove", o);
a.window.on("click", o);
a.window.on("scroll", o);
a.window.on("keypress", o);
r();
}
function o() {
u++;
}
function r() {
u && s.write({
active$int: +new Date()
});
u = 0;
window.setTimeout(r, l);
}
var s, a = n(3), c = {
init: i
}, u = 1, l = 2e4;
e.exports = c;
t(c, "meshim_widget_controllers_Tracker");
return c;
}();
}).call(t, n(1));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
var e = this;
this.arr = [];
this.validate = m.bind(this.validate, this);
v.concat([ "validateAndThrow", "validateAndLog" ]).forEach(function(t) {
e.validate[t] = e[t].bind(e);
});
return this.validate;
}
function o(e) {
return function(t) {
if (0 === e.length) return !1;
for (var n = 0, i = e.length; n < i; n++) {
var o = e[n], r = o(t);
if (!r) return !1;
}
return new g('Expect "' + t + '" to fulfill at least one condition');
};
}
function r(e) {
return function(t) {
if (t !== e) return new g('expect "' + t + '" to equal "' + e + '"');
};
}
function s(e, t) {
return function(n) {
if ("object" != typeof n || !n) return new g('Expect "' + n + '" to be an object');
if (t && t.requiredKeys) for (var i = 0, o = t.requiredKeys.length; i < o; i++) {
var r = t.requiredKeys[i];
if (!(r in n)) return new g('Expect key "' + r + '" to be defined');
}
for (var s in n) if (n.hasOwnProperty(s)) {
var a, c = n[s], u = e[s];
if (!u) continue;
a = u(c);
if (a) return a;
}
};
}
function a(e) {
return function(t) {
var n = typeof t;
if (n !== e) return new g('Expect "' + t + '" to have type "' + e + '"');
};
}
function c() {
return function(e) {
if (!e) return new g('Expect "' + e + '" to be truthty');
};
}
function u(e) {
return function(t) {
e.lastIndex = 0;
if (!e.test(t)) return new g('Expect "' + t + '" to match predefined format');
};
}
function l() {
return function(e) {
if (!p(e)) return new g('Expect "' + e + '" to be an Array');
};
}
function f(e) {
return function(t) {
var n;
if (!p(t)) return new g('Expect "' + t + '" to be an Array');
for (var i = 0, o = t.length; i < o; i++) {
n = e(t[i]);
if (n) return n;
}
};
}
function h(e) {
return e;
}
function d(e) {
var t = window.console;
t.error ? t.error(e) : t.log && t.log(e);
}
var p = n(25), m = n(48), g = window.Error, _ = {
any: o,
equal: r,
obj: s,
type: a,
ok: c,
chain: h,
regex: u,
array: l,
each: f
}, v = Object.keys(_), w = i.prototype;
v.forEach(function(e) {
var t = _[e];
i[e] = w[e] = function() {
if (!(this instanceof i)) {
var n = new i();
return n[e].apply(n, arguments);
}
var o = t.apply(null, arguments);
this.arr.push(o);
return this.validate;
};
});
w.validate = function(e) {
for (var t, n, i = 0, o = this.arr.length; i < o; i++) {
t = this.arr[i];
n = t(e);
if (n) return n;
}
};
w.validateAndThrow = function(e, t) {
var n = this.validate(e);
t = t ? t + " - " : "";
if (n) throw new g(t + n.message);
};
w.validateAndLog = function(e, t) {
var n = this.validate(e);
t = t ? t + " - " : "";
if (n) {
d(new g(t + n.message));
return n;
}
};
e.exports = i;
t(i, "meshim_widget_utils_Validator");
return i;
}();
}).call(t, n(1));
} ]);
});
//# sourceMappingURL=web_sdk.map