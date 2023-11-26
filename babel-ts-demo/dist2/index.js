"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userToString = void 0;
var userToString = exports.userToString = function userToString(u) {
  return "".concat(u.id, "/").concat(u.wname);
};