'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [69],
  {
    6069: function (e, t, n) {
      n.r(t);
      var r = n(4165),
        a = n(5861),
        u = (n(7313), n(4134)),
        s = n(4814),
        i = n(6031),
        c = n(6417);
      t.default = function () {
        var e = (function () {
          var e = (0, a.Z)(
            (0, r.Z)().mark(function e(t) {
              var n, a, u, c, o, d, p;
              return (0, r.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.page),
                        (u = t.pageSize),
                        (e.next = 3),
                        (0, s.o)({ page: a, pageSize: u })
                      );
                    case 3:
                      return (
                        (c = e.sent),
                        (o = c.code),
                        (d = c.data),
                        (p = c.msg),
                        e.abrupt('return', {
                          success: 200 === o,
                          msg: p,
                          data:
                            (null === d ||
                            void 0 === d ||
                            null === (n = d.posts) ||
                            void 0 === n
                              ? void 0
                              : n.map(function (e) {
                                  return { id: (0, i.uniqueId)(), posts: [e] };
                                })) || [],
                          total: null === d || void 0 === d ? void 0 : d.total,
                        })
                      );
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return (0, c.jsx)(u._z, {
          children: (0, c.jsx)(u.p_, {
            cacheKey: 'saved',
            request: e,
            emptyPlaceholder:
              '\u4f60\u6536\u85cf\u7684\u5e16\u5b50\u4f1a\u663e\u793a\u5728\u8fd9\u91cc\u3002',
            indent: !0,
            ignoreMutingUser: !1,
          }),
        });
      };
    },
  },
]);
