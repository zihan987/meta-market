System.register("chunks:///_virtual/FollowCamera.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./MathUtil.ts"], (function(t) {
    "use strict";
    var e, o, i, r, s, n, a, l, c, d, u;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            o = t.inheritsLoose,
            i = t.initializerDefineProperty,
            r = t.assertThisInitialized,
            s = t.createClass
        },
        function(t) {
            n = t.cclegacy,
            a = t._decorator,
            l = t.Vec3,
            c = t.Node,
            d = t.Component
        },
        function(t) {
            u = t.MathUtil
        }],
        execute: function() {
            var p, h, g, P, f, y;
            n._RF.push({},
            "db75bbNJnxHYIdxo63CSRnv", "FollowCamera", void 0);
            var w = a.ccclass,
            _ = a.property,
            m = new l;
            t("FollowCamera", (p = _(c), w((P = e((g = function(t) {
                function e() {
                    for (var e, o = arguments.length,
                    s = new Array(o), n = 0; n < o; n++) s[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(s)) || this,
                    i(e, "focusTarget", P, r(e)),
                    i(e, "speedFactor", f, r(e)),
                    i(e, "_distance", y, r(e)),
                    e.enableLimit = !0,
                    e.minX = -1 / 0,
                    e.maxX = 1 / 0,
                    e.minZ = -1 / 0,
                    e.maxZ = 1 / 0,
                    e._tweenFollow = void 0,
                    e._targetWorldPos = new l,
                    e._lastTargetPos = new l,
                    e
                }
                o(e, t);
                var n = e.prototype;
                return n.start = function() {
                    this._lastTargetPos.set(this.focusTarget.worldPosition),
                    this._updateTargetWorldPos(),
                    this.node.setWorldPosition(this._targetWorldPos)
                },
                n._updateTargetWorldPos = function() {
                    this._targetWorldPos.set(this.focusTarget.worldPosition),
                    this.enableLimit && (this._targetWorldPos.x = u.limit(this._targetWorldPos.x, this.minX, this.maxX), this._targetWorldPos.z = u.limit(this._targetWorldPos.z, this.minZ, this.maxZ)),
                    this._targetWorldPos.add(this.node.forward.multiplyScalar( - 1 * this.distance))
                },
                n.update = function() {
                    this._lastTargetPos.equals(this.focusTarget.worldPosition) || (this._lastTargetPos.set(this.focusTarget.worldPosition), this._updateTargetWorldPos()),
                    m.set(this._targetWorldPos);
                    var t = m.subtract(this.node.worldPosition);
                    t.lengthSqr() > .01 && (this.node.worldPosition.add(t.multiplyScalar(this.speedFactor)), this.node.setWorldPosition(this.node.worldPosition))
                },
                n.resetPos = function() {
                    this._updateTargetWorldPos(),
                    this.node.setWorldPosition(this._targetWorldPos)
                },
                s(e, [{
                    key: "distance",
                    get: function() {
                        return this._distance
                    },
                    set: function(t) {
                        this._distance = t,
                        this._updateTargetWorldPos()
                    }
                },
                {
                    key: "preview",
                    get: function() {
                        return ! 1
                    },
                    set: function(t) {
                        this.resetPos()
                    }
                },
                {
                    key: "autoSetDistance",
                    get: function() {
                        return ! 1
                    }
                },
                {
                    key: "autuSetDistance",
                    set: function(t) {
                        this.distance = this.node.worldPosition.clone().subtract(this.focusTarget.worldPosition).length()
                    }
                }]),
                e
            } (d)).prototype, "focusTarget", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), f = e(g.prototype, "speedFactor", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.05
                }
            }), y = e(g.prototype, "_distance", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 25
                }
            }), e(g.prototype, "distance", [_], Object.getOwnPropertyDescriptor(g.prototype, "distance"), g.prototype), e(g.prototype, "preview", [_], Object.getOwnPropertyDescriptor(g.prototype, "preview"), g.prototype), e(g.prototype, "autoSetDistance", [_], Object.getOwnPropertyDescriptor(g.prototype, "autoSetDistance"), g.prototype), h = g)) || h));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FrontConfig.ts", ["cc"], (function(t) {
    "use strict";
    var n;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }],
        execute: function() {
            n._RF.push({},
            "9b31dlbR/dAGpwz5c1j8I2g", "FrontConfig", void 0);
            t("FrontConfig", {
                matchServer: "https://online-market.cella.fun/"
            });
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/index.ts", ["cc", "./index.mjs"], (function() {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        },
        null],
        execute: function() {
            t._RF.push({},
            "115c3PlpSRIMItt+iA+5s/T", "index", void 0),
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Joystick.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./MathUtil.ts"], (function(t) {
    "use strict";
    var i, o, s, e, n, r, c, a, u, h, l, p;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor,
            o = t.inheritsLoose,
            s = t.initializerDefineProperty,
            e = t.assertThisInitialized,
            n = t.createClass
        },
        function(t) {
            r = t.cclegacy,
            c = t._decorator,
            a = t.Vec3,
            u = t.Node,
            h = t.Vec2,
            l = t.Component
        },
        function(t) {
            p = t.MathUtil
        }],
        execute: function() {
            var d, y, v, _, f, k, T, P;
            r._RF.push({},
            "ccc7fTjElVEQqB07I1JvC+N", "Joystick", void 0);
            var g = c.ccclass,
            b = c.property,
            E = new a;
            t("Joystick", (d = g("Joystick"), y = b(u), v = b(u), d((k = i((f = function(t) {
                function i() {
                    for (var i, o = arguments.length,
                    n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(n)) || this,
                    s(i, "radius", k, e(i)),
                    s(i, "disk", T, e(i)),
                    s(i, "stick", P, e(i)),
                    i._touchStartPos = void 0,
                    i._value = new h,
                    i
                }
                o(i, t);
                var r = i.prototype;
                return r.onLoad = function() {
                    this.node.on(u.EventType.TOUCH_START, this.onTouch, this),
                    this.node.on(u.EventType.TOUCH_MOVE, this.onTouch, this),
                    this.node.on(u.EventType.TOUCH_END, this.onTouchEnd, this)
                },
                r.onTouch = function(t) {
                    if (t.touch) {
                        this.disk.active = !0;
                        var i = t.touch.getUILocation();
                        this._touchStartPos || (this._touchStartPos = i.clone(), this.disk.setPosition(i.x, i.y, 0));
                        var o = this.disk.position,
                        s = E.set(i.x - o.x, i.y - o.y, 0),
                        e = s.length();
                        if (0 !== e) {
                            var n = p.limit(e, 0, this.radius);
                            s.multiplyScalar(n / e),
                            this.stick.setPosition(s),
                            s.normalize(),
                            this._value.set(s.x || 0, s.y || 0)
                        } else this.stick.setPosition(0, 0, 0)
                    }
                },
                r.update = function() {
                    this._touchStartPos && 0 !== this._value.x && 0 !== this._value.y && this.options.onOperate({
                        x: this._value.x,
                        y: this._value.y
                    })
                },
                r.onTouchEnd = function() {
                    var t;
                    this._touchStartPos && (this._options.alwaysActive ? (this.disk.position = this._diskInitPos, this.disk.getChildByName("stick").setPosition(0, 0, 1)) : this.disk.active = !1, this._touchStartPos = void 0, this._value.set(0, 0), null == (t = this.options) || t.onOperateEnd())
                },
                n(i, [{
                    key: "options",
                    get: function() {
                        return this._options
                    },
                    set: function(t) {
                        this._options = t,
                        this._diskInitPos = this.disk.position.clone(),
                        t.alwaysActive && (this.node.active = !0)
                    }
                }]),
                i
            } (l)).prototype, "radius", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 128
                }
            }), T = i(f.prototype, "disk", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = i(f.prototype, "stick", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = f)) || _));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Loding.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var n, o, e, r;
    return {
        setters: [function(t) {
            n = t.inheritsLoose
        },
        function(t) {
            o = t.cclegacy,
            e = t._decorator,
            r = t.Component
        }],
        execute: function() {
            var i;
            o._RF.push({},
            "28874bqJIFMdo52/W0k5Jx5", "Loding", void 0);
            var s = e.ccclass;
            e.property,
            t("lo_ding", s("lo_ding")(i = function(t) {
                function o() {
                    return t.apply(this, arguments) || this
                }
                n(o, t);
                var e = o.prototype;
                return e.start = function() {},
                e.update = function(t) {
                    var n = this.node.eulerAngles;
                    n.z += -90 * t,
                    this.node.setRotationFromEuler(n)
                },
                o
            } (r)) || i);
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/main", ["./Loding.ts", "./WeChat.ts", "./webview.ts", "./FollowCamera.ts", "./Joystick.ts", "./Manager.ts", "./FrontConfig.ts", "./MathUtil.ts", "./NetUtil.ts", "./SceneUtil.ts", "./uuid.ts", "./Player.ts", "./PlayerName.ts", "./index.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}));

System.register("chunks:///_virtual/Manager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Player.ts", "./PlayerName.ts", "./Joystick.ts", "./FollowCamera.ts", "./uuid.ts"], (function(e) {
    "use strict";
    var t, i, a, o, n, r, l, s, c, u, d, p, m, f, h, y, w, g, S, v, b, C, P;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            a = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            n = e.createForOfIteratorHelperLoose
        },
        function(e) {
            r = e.cclegacy,
            l = e._decorator,
            s = e.Quat,
            c = e.Vec2,
            u = e.Node,
            d = e.WebView,
            p = e.Prefab,
            m = e.instantiate,
            f = e.Camera,
            h = e.TweenSystem,
            y = e.tween,
            w = e.Collider,
            g = e.Component
        },
        function(e) {
            S = e.Player
        },
        function(e) {
            v = e.PlayerName
        },
        function(e) {
            b = e.Joystick
        },
        function(e) {
            C = e.FollowCamera
        },
        function(e) {
            P = e.uuid
        }],
        execute: function() {
            var N, k, V, O, I, M, z, T, B, L, A, J, _, F, x, E, D, U, j;
            r._RF.push({},
            "9dfe63auMVLFamVsoweEnmP", "Manager", void 0);
            var R = l.ccclass,
            H = l.property,
            Y = new s,
            Q = new c;
            e("Manager", (N = R("Manager"), k = H(b), V = H(u), O = H(C), I = H(d), M = H(u), z = H(u), T = H(p), B = H(p), N((J = t((A = function(e) {
                function t() {
                    for (var t, i = arguments.length,
                    n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(n)) || this).socket = null,
                    t.selfPlayer = void 0,
                    t.PlayerAniState = void 0,
                    t.OtherList = [],
                    a(t, "joyStick", J, o(t)),
                    a(t, "players", _, o(t)),
                    a(t, "followCamera", F, o(t)),
                    a(t, "netView", x, o(t)),
                    a(t, "playerNames", E, o(t)),
                    a(t, "BackModel", D, o(t)),
                    a(t, "prefabPlayer", U, o(t)),
                    a(t, "prefabPlayerName", j, o(t)),
                    t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    var e = this;
                    this.socket = io.connect("https://online-market.cella.fun/"),
                    this._initSocket(),
                    this.joyStick.options = {
                        onOperate: function(t) {
                            e.selfPlayer && (e.selfPlayer.aniState = "walking", e.selfPlayer.node.position = e.selfPlayer.node.position.add3f(.15 * t.x, 0, .15 * -t.y), e.selfPlayer.node.rotation = s.rotateY(Y, s.IDENTITY, c.UNIT_X.signAngle(Q.set(t.x, t.y)) + .5 * Math.PI))
                        },
                        onOperateEnd: function() {
                            e.selfPlayer && (e.selfPlayer.aniState = "idle")
                        },
                        alwaysActive: !0
                    };
                    var t = JSON.parse(localStorage.getItem("Self"));
                    this.schedule((function() {
                        e.selfPlayer && (t.pos = e.selfPlayer.node.position, t.aniState = e.selfPlayer.aniState, t.rotation = e.selfPlayer.node.rotation, e.socket.emit("online", {
                            userState: t
                        }))
                    }), .1)
                },
                r._initSocket = function() {
                    var e = this,
                    t = P.uuid(16, 16),
                    i = JSON.parse(localStorage.getItem("Code"));
                    console.log(i);
                    var a = {
                        uid: t,
                        name: i.nickname,
                        pos: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        rotation: {
                            x: 0,
                            y: 0,
                            z: 0,
                            w: 0
                        },
                        aniState: this.PlayerAniState
                    };
                    this.socket.on("connect", (function() {
                        e._updateUserState(a),
                        e.socket.emit("online", {
                            userState: a
                        })
                    })),
                    localStorage.setItem("Self", JSON.stringify(a)),
                    this.socket.on("online", (function(t) {
                        var i = JSON.parse(localStorage.getItem("Self"));
                        if (t.userState.uid !== i.uid) {
                            var a;
                            e._updateUserState(t.userState);
                            var o = null == (a = e.playerNames.getChildByName(t.userState.name)) ? void 0 : a.getComponent(v);
                            o && o.showChatMsg(t.userState.name)
                        }
                    })),
                    this.socket.on("offline", (function(t) {
                        for (var i, a = JSON.parse(localStorage.getItem("OtherList")), o = n(a); ! (i = o()).done;) {
                            var r = i.value;
                            if (r.uid === t) {
                                var l, s;
                                null == (l = e.playerNames.getChildByName(t)) || l.removeFromParent(),
                                null == (s = e.players.getChildByName(t)) || s.removeFromParent();
                                var c = a.splice(a.indexOf(r), 1);
                                localStorage.setItem("OtherList", JSON.stringify(c))
                            }
                        }
                    }))
                },
                r._updateUserState = function(e) {
                    var t = this.players.getChildByName(e.uid),
                    i = JSON.parse(localStorage.getItem("Self"));
                    JSON.parse(localStorage.getItem("Code"));
                    if (!t) { (t = m(this.prefabPlayer)).name = e.uid,
                        this.players.addChild(t),
                        t.setPosition(e.pos.x, e.pos.y, e.pos.z),
                        t.setRotation(e.rotation.x, e.rotation.y, e.rotation.z, e.rotation.w);
                        var a = t.getComponent(S);
                        a.aniState = e.aniState;
                        var o = m(this.prefabPlayerName);
                        return o.name = e.uid,
                        this.playerNames.addChild(o),
                        o.getComponent(v).options = {
                            namePosNode: t.getChildByName("namePos"),
                            camera3D: this.followCamera.getComponent(f),
                            nickname: e.name
                        },
                        e.uid === i.uid && (this.selfPlayer = a, this.followCamera.focusTarget = t.getChildByName("focusTarget")),
                        this.OtherList.push(e),
                        void localStorage.setItem("OtherList", JSON.stringify(this.OtherList))
                    }
                    if (e.uid !== i.uid) {
                        t.getComponent(S).aniState = e.aniState,
                        h.instance.ActionManager.removeAllActionsFromTarget(t.position);
                        var n = t.rotation.clone();
                        y(t.position).to(.1, e.pos, {
                            onUpdate: function(i, a) {
                                t.position = t.position,
                                t.rotation = s.slerp(t.rotation, n, e.rotation, a)
                            }
                        }).tag(99).start()
                    }
                },
                r.onDestroy = function() {
                    h.instance.ActionManager.removeAllActionsByTag(99)
                },
                r.start = function() {
                    var e = this;
                    this.netView.node.active = !1,
                    this.BackModel.active = !1,
                    setTimeout((function() {
                        var t = e.selfPlayer.getComponent(w);
                        t.on("onTriggerEnter", e.onCollisionEnter, e),
                        t.on("onTriggerEnter", e.onTriggerStage, e)
                    }), 1e3)
                },
                r.onCollisionEnter = function(e) {
                    "1" == e.otherCollider.node.name && (this.BackModel.active = !0, this.netView.node.active = !0, this.netView.url = "https://www.baidu.com"),
                    "2" == e.otherCollider.node.name && (this.netView.node.active = !0, this.netView.url = "http://www.baidu.com"),
                    "3" == e.otherCollider.node.name && (this.netView.node.active = !0, this.netView.url = "http://www.baidu.com"),
                    "4" == e.otherCollider.node.name && (this.netView.node.active = !0, this.netView.url = "http://www.baidu.com"),
                    "5" == e.otherCollider.node.name && (this.netView.node.active = !0, this.netView.url = "http://www.baidu.com"),
                    "6" == e.otherCollider.node.name && (this.netView.node.active = !0, this.netView.url = "http://www.baidu.com"),
                    "7" == e.otherCollider.node.name && (this.netView.node.active = !0, this.netView.url = "http://www.baidu.com")
                },
                r.onTriggerStage = function(e) {
                    "stage" == e.otherCollider.node.name && (confirm("你即将离开当前场景前往舞台直播间") && window.open("http://www.baidu.com"))
                },
                r.onCollisionLeave = function(e) {
                    this.netView.node.active = !1,
                    this.BackModel.active = !1
                },
                r.update = function(e) {},
                t
            } (g)).prototype, "joyStick", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), _ = t(A.prototype, "players", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), F = t(A.prototype, "followCamera", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), x = t(A.prototype, "netView", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), E = t(A.prototype, "playerNames", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), D = t(A.prototype, "BackModel", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), U = t(A.prototype, "prefabPlayer", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), j = t(A.prototype, "prefabPlayerName", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), L = A)) || L));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MathUtil.ts", ["cc"], (function(t) {
    "use strict";
    var i;
    return {
        setters: [function(t) {
            i = t.cclegacy
        }],
        execute: function() {
            i._RF.push({},
            "6fde6fFDQlDiYxRm1e86H7h", "MathUtil", void 0);
            t("MathUtil",
            function() {
                function t() {}
                return t.limit = function(t, i, n) {
                    return Math.min(n, Math.max(i, t))
                },
                t
            } ());
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/NetUtil.ts", ["cc", "./FrontConfig.ts"], (function(t) {
    "use strict";
    var e, n;
    return {
        setters: [function(t) {
            e = t.cclegacy
        },
        function(t) {
            n = t.FrontConfig
        }],
        execute: function() {
            e._RF.push({},
            "fd370Me9EdDB6FIiP2nYNCS", "NetUtil", void 0);
            var i = t("NetUtil", (function() {
                this.socket = io.connect(n.matchServer)
            }));
            window.NetUtil = i,
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Player.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, i, n, a, r, l, o, s, c, u, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            a = e.assertThisInitialized,
            r = e.createClass
        },
        function(e) {
            l = e.cclegacy,
            o = e._decorator,
            s = e.Vec3,
            c = e.SkeletalAnimation,
            u = e.SkinnedMeshRenderer,
            h = e.Node,
            p = e.Component
        }],
        execute: function() {
            var f, y, d, m, b, S, g, P, v;
            l._RF.push({},
            "6321ff57MxLS418yYxAxbqJ", "Player", void 0);
            var _ = o.ccclass,
            k = o.property;
            new s,
            e("Player", (f = _("Player"), y = k(c), d = k(u), m = k(h), f((g = t((S = function(e) {
                function t() {
                    for (var t, i = arguments.length,
                    r = new Array(i), l = 0; l < i; l++) r[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    n(t, "ani", g, a(t)),
                    n(t, "mesh", P, a(t)),
                    n(t, "namePos", v, a(t)),
                    t._aniState = "idle",
                    t
                }
                return i(t, e),
                t.prototype.onLoad = function() {},
                r(t, [{
                    key: "aniState",
                    get: function() {
                        return this._aniState
                    },
                    set: function(e) {
                        var t = this;
                        this._aniState !== e && (this._aniState = e, this.unscheduleAllCallbacks(), this.ani.crossFade(e, .5), "wave" === e && this.scheduleOnce((function() {
                            t.aniState = "idle"
                        }), 4.73), "punch" === e && this.scheduleOnce((function() {
                            t.aniState = "idle"
                        }), 2.27), "dance" === e && this.scheduleOnce((function() {
                            t.aniState = "idle"
                        }), 12.37))
                    }
                },
                {
                    key: "color",
                    get: function() {
                        return this.mesh.material.getProperty("mainColor")
                    },
                    set: function(e) {
                        this.mesh.material.setProperty("mainColor", e)
                    }
                }]),
                t
            } (p)).prototype, "ani", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), P = t(S.prototype, "mesh", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), v = t(S.prototype, "namePos", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), b = S)) || b));
            l._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayerName.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./MathUtil.ts"], (function(t) {
    "use strict";
    var e, i, a, n, s, o, r, c, l, h, g, p, u, m, d, y;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            a = t.initializerDefineProperty,
            n = t.assertThisInitialized,
            s = t.createClass
        },
        function(t) {
            o = t.cclegacy,
            r = t._decorator,
            c = t.Vec3,
            l = t.Node,
            h = t.Label,
            g = t.view,
            p = t.UITransform,
            u = t.TweenSystem,
            m = t.tween,
            d = t.Component
        },
        function(t) {
            y = t.MathUtil
        }],
        execute: function() {
            var f, M, b, v, w, P, _;
            o._RF.push({},
            "e268fARbZxCxKyfQcb5kYkG", "PlayerName", void 0);
            var C = r.ccclass,
            N = r.property,
            k = new c;
            t("PlayerName", (f = C("PlayerName"), M = N(l), b = N(h), f((P = e((w = function(t) {
                function e() {
                    for (var e, i = arguments.length,
                    s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(s)) || this,
                    a(e, "chatMsg", P, n(e)),
                    a(e, "labelChatMsg", _, n(e)),
                    e
                }
                i(e, t);
                var o = e.prototype;
                return o.update = function() {
                    this._options.camera3D.convertToUINode(this._options.namePosNode.worldPosition, this.node.parent, k);
                    var t = g.getVisibleSize(),
                    e = k.x < .5 * -t.width || k.x > .5 * t.width || k.y < .5 * -t.height + 123;
                    k.x = y.limit(k.x, .5 * -t.width + 30, .5 * t.width - 30),
                    k.y = y.limit(k.y, .5 * -t.height + 130, .5 * t.height),
                    this.node.setPosition(k),
                    c.transformMat4(k, this._options.namePosNode.worldPosition, this._options.camera3D.camera.matView);
                    var i = e ? .8 : y.limit(10 / Math.abs(k.z) + .5, .5, 1.2);
                    this.node.setScale(i, i, 1)
                },
                o.showChatMsg = function(t) {
                    var e = this;
                    this.labelChatMsg.string = t,
                    this.chatMsg.active = !0,
                    this.chatMsg.setScale(0, 0, 0),
                    this.chatMsg.setPosition(0, this.node.getComponent(p).height + 10, 0),
                    u.instance.ActionManager.removeAllActionsFromTarget(this.chatMsg),
                    m(this.chatMsg).to(.2, {
                        scale: c.ONE
                    },
                    {
                        easing: "backOut"
                    }).delay(10).to(.2, {
                        scale: c.ZERO
                    },
                    {
                        easing: "backIn"
                    }).call((function() {
                        e.chatMsg.active = !1
                    })).start()
                },
                s(e, [{
                    key: "options",
                    get: function() {
                        return this._options
                    },
                    set: function(t) {
                        this._options = t,
                        this.getComponent(h).string = t.nickname
                    }
                }]),
                e
            } (d)).prototype, "chatMsg", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), _ = e(w.prototype, "labelChatMsg", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), v = w)) || v));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SceneUtil.ts", ["cc"], (function(e) {
    "use strict";
    var c, n;
    return {
        setters: [function(e) {
            c = e.cclegacy,
            n = e.director
        }],
        execute: function() {
            c._RF.push({},
            "9cf28WbaIZKB6jBuj80gEKP", "SceneUtil", void 0),
            e("SceneUtil",
            function() {
                function e() {}
                return e.loadScene = function(e, c) {
                    this.sceneParams = c,
                    n.loadScene(e)
                },
                e
            } ()).sceneParams = void 0,
            c._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/uuid.ts", ["cc"], (function(t) {
    "use strict";
    var u;
    return {
        setters: [function(t) {
            u = t.cclegacy
        }],
        execute: function() {
            u._RF.push({},
            "e9acf2LgTBNlJTOZRDVkN3l", "uuid", void 0);
            t("uuid", {
                uuid: function(t, u) {
                    var e, i, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                    r = [];
                    if (u = u || n.length, t) for (e = 0; e < t; e++) r[e] = n[0 | Math.random() * u];
                    else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", e = 0; e < 36; e++) r[e] || (i = 0 | 16 * Math.random(), r[e] = n[19 == e ? 3 & i | 8 : i]);
                    return r.join("")
                }
            });
            u._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/webview.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, i, r, n, o, c, l, a;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            r = e.initializerDefineProperty,
            n = e.assertThisInitialized
        },
        function(e) {
            o = e.cclegacy,
            c = e._decorator,
            l = e.WebView,
            a = e.Component
        }],
        execute: function() {
            var s, u, w, p, v;
            o._RF.push({},
            "59496ZMS1ZP2odlfQPBf0i2", "webview", void 0);
            var b = c.ccclass,
            f = c.type;
            e("WebViewCtrl", (s = b("WebViewCtrl"), u = f(l), s((v = t((p = function(e) {
                function t() {
                    for (var t, i = arguments.length,
                    o = new Array(i), c = 0; c < i; c++) o[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    r(t, "webview", v, n(t)),
                    t.url = void 0,
                    t
                }
                i(t, e);
                var o = t.prototype;
                return o.start = function() {
                    this.webview.node.on(l.EventType.LOADED, this.callback, this),
                    this.webview.node.on(l.EventType.ERROR, this.error, this),
                    this.webview.evaluateJS("Test( )")
                },
                o.callback = function(e) {
                    this.webview.url = "http://127.0.0.1:3000"
                },
                o.error = function(e) {
                    alert("加载失败" + e.error)
                },
                o.Text = function() {},
                t
            } (a)).prototype, "webview", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = p)) || w));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/WeChat.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, o, n, i, r, c, a, s, l;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized
        },
        function(e) {
            r = e.cclegacy,
            c = e._decorator,
            a = e.Node,
            s = e.director,
            l = e.Component
        }],
        execute: function() {
            var u, f, p, h, d, g, b;
            r._RF.push({},
            "f712eUJGs1Nfbumda7EWRNo", "WeChat", void 0);
            var w = c.ccclass,
            v = c.property;
            e("WeChat", (u = w("WeChat"), f = v(a), p = v(a), u((g = t((d = function(e) {
                function t() {
                    for (var t, o = arguments.length,
                    r = new Array(o), c = 0; c < o; c++) r[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    n(t, "beforeLogin", g, i(t)),
                    n(t, "afterLogin", b, i(t)),
                    t.code = "",
                    t.isWechat = function() {
                        return "micromessenger" === String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i))
                    },
                    t
                }
                o(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    s.preloadScene("main", (function() {
                        console.log("Next scene preloaded")
                    })),
                    this.afterLogin.active = !1
                },
                r.start = function() {
                    var e = this;
                    this.node.on(a.EventType.TOUCH_START, this.getwxUserInfo, this),
                    setTimeout((function() {
                        e.getWechatCode()
                    }), 3e3)
                },
                r.getwxUserInfo = function() {
                    window.open("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8b0affba0db491bc&response_type=code&scope=snsapi_userinfo&redirect_uri=http%3A%2F%2Fzihan.cel-la.store%2F"),
                    this.beforeLogin.active = !1
                },
                r.getWxCode = function() {
                    fetch("https://online-market.cella.fun/wechat/userinfo?code=" + this.code, {
                        method: "get"
                    }).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        void 0 !== e && (s.loadScene("Main"), localStorage.setItem("Code", JSON.stringify(e)))
                    })).
                    catch((function(e) {
                        return console.log("Oops, error", e)
                    }))
                },
                r.getUrlCode = function() {
                    var e = location.search,
                    t = new Object;
                    if ( - 1 != e.indexOf("?")) for (var o = e.substr(1).split("&"), n = 0; n < o.length; n++) t[o[n].split("=")[0]] = o[n].split("=")[1];
                    return console.log(t),
                    t
                },
                r.getWechatCode = function() {
                    if (this.isWechat) {
                        var e = this.getUrlCode().code,
                        t = window.location.href;
                        null == e || "" === e ? (this.beforeLogin.active = !1, window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8b0affba0db491bc&response_type=code&redirect_uri=" + encodeURIComponent(t) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect") : (this.afterLogin.active = !0, this.code = e, this.getWxCode())
                    }
                },
                r.onDestroy = function() {},
                t
            } (l)).prototype, "beforeLogin", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), b = t(d.prototype, "afterLogin", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), h = d)) || h));
            r._RF.pop()
        }
    }
}));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function(mid, cid) {
    System.register(mid, [cid],
    function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }],
            execute: function() {}
        };
    });
});