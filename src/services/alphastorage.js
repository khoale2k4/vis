"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOfDepartment = exports.Company = exports.Department = exports.UserOfCompany = exports.Authentication = exports.User = void 0;
var axios_1 = require("axios");
var User = /** @class */ (function () {
    function User() {
        this.baseUrl = 'http://113.161.103.139/alphastorage/user';
    }
    User.prototype.signup = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_1;
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info)];
                    case 1:
                        response = _e.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success, status: response.status }];
                    case 2:
                        error_1 = _e.sent();
                        console.log("Error: ", { success: (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data.success, message: (_b = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _b === void 0 ? void 0 : _b.data.message, status: error_1.response ? error_1.response.status : null });
                        return [2 /*return*/, {
                                success: (_c = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _c === void 0 ? void 0 : _c.data.success,
                                message: (_d = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _d === void 0 ? void 0 : _d.data.message,
                                status: error_1.response ? error_1.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.updateUser = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_2;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/update"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success, status: response.status }];
                    case 2:
                        error_2 = _d.sent();
                        console.log("Error: ", { success: (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data, status: error_2.response ? error_2.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_2.response ? error_2.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.getMyinfo = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_3;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/myInfo"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success, status: response.status }];
                    case 2:
                        error_3 = _d.sent();
                        console.log("Error: ", { success: (_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _a === void 0 ? void 0 : _a.data, status: error_3.response ? error_3.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_3.response ? error_3.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.getUserById = function (userId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_4;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get/").concat(userId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_4 = _d.sent();
                        console.log("Error: ", { success: (_a = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _a === void 0 ? void 0 : _a.data, status: error_4 });
                        return [2 /*return*/, {
                                success: (_b = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_4.response ? error_4.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.getAllUser = function (currentPage, pageSize, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_5;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/getAll?current=").concat(currentPage, "&pageSize=").concat(pageSize), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_5 = _d.sent();
                        console.log("Error: ", { success: (_a = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _a === void 0 ? void 0 : _a.data, status: error_5.response ? error_5.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_5.response ? error_5.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.changePassword = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_6;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/changePassword"))];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_6 = _d.sent();
                        console.log("Error: ", { success: (_a = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _a === void 0 ? void 0 : _a.data, status: error_6.response ? error_6.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_6.response ? error_6.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return User;
}());
exports.User = User;
var Authentication = /** @class */ (function () {
    function Authentication() {
        this.baseUrl = 'http://113.161.103.139/alphastorage/auth';
    }
    Authentication.prototype.login = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_7;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/login"), info)];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success, status: response.status }];
                    case 2:
                        error_7 = _c.sent();
                        // console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
                        return [2 /*return*/, {
                                success: (_a = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _a === void 0 ? void 0 : _a.data.success,
                                message: (_b = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _b === void 0 ? void 0 : _b.data.message,
                                status: error_7.response ? error_7.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Authentication.prototype.logout = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_8;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/logout"), {
                                withCredentials: true,
                                headers: { Authorization: "Bearer ".concat(token) }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.succes, status: response.status }];
                    case 2:
                        error_8 = _d.sent();
                        console.log("Error: ", { success: (_a = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _a === void 0 ? void 0 : _a.data, status: error_8.response ? error_8.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_8.response ? error_8.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Authentication.prototype.refreshToken = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_9;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/refresh"), info, {
                                withCredentials: true,
                                headers: { Authorization: "Bearer ".concat(token) }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success, status: response.status }];
                    case 2:
                        error_9 = _d.sent();
                        console.log("Error: ", { success: (_a = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _a === void 0 ? void 0 : _a.data, status: error_9.response ? error_9.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_9.response ? error_9.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Authentication;
}());
exports.Authentication = Authentication;
var UserOfCompany = /** @class */ (function () {
    function UserOfCompany() {
        this.baseUrl = 'http://113.161.103.139/alphastorage/user_company';
    }
    UserOfCompany.prototype.addUserToCompany = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_10;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/add"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_10 = _d.sent();
                        console.log("Error: ", { success: (_a = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _a === void 0 ? void 0 : _a.data, status: error_10.response ? error_10.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_10.response ? error_10.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfCompany.prototype.getAllUserBelongToComapny = function (companyId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_11;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get/").concat(companyId, "/employees"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_11 = _d.sent();
                        console.log("Error: ", { success: (_a = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _a === void 0 ? void 0 : _a.data, status: error_11.response ? error_11.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_11.response ? error_11.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserOfCompany;
}());
exports.UserOfCompany = UserOfCompany;
var Department = /** @class */ (function () {
    function Department() {
        this.baseUrl = 'http://113.161.103.139/alphastorage/department';
    }
    Department.prototype.createDepartment = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_12;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_12 = _d.sent();
                        console.log("Error: ", { success: (_a = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _a === void 0 ? void 0 : _a.data, status: error_12.response ? error_12.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_12.response ? error_12.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Department.prototype.getDepartment = function (departmentId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_13;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get/").concat(departmentId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_13 = _d.sent();
                        console.log("Error: ", { success: (_a = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _a === void 0 ? void 0 : _a.data, status: error_13.response ? error_13.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_13.response ? error_13.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Department.prototype.updateDepartmentName = function (departmentId, info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_14;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/update/").concat(departmentId), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_14 = _d.sent();
                        console.log("Error: ", { success: (_a = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _a === void 0 ? void 0 : _a.data, status: error_14.response ? error_14.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_14.response ? error_14.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Department.prototype.deleteDepartment = function (departmentId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_15;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(departmentId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_15 = _d.sent();
                        console.log("Error: ", { success: (_a = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _a === void 0 ? void 0 : _a.data, status: error_15.response ? error_15.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_15.response ? error_15.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Department.prototype.getAllDepartment = function (currentPage, pageSize, companyId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_16;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/getAllDepartment/").concat(companyId, "?current=").concat(currentPage, "&pageSize=").concat(pageSize), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_16 = _d.sent();
                        console.log("Error: ", { success: (_a = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _a === void 0 ? void 0 : _a.data, status: error_16.response ? error_16.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_16.response ? error_16.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Department;
}());
exports.Department = Department;
var Company = /** @class */ (function () {
    function Company() {
        this.baseUrl = 'http://113.161.103.139/alphastorage/company';
    }
    Company.prototype.createCompany = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_17;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_17 = _d.sent();
                        console.log("Error creating patient: ", { success: (_a = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _a === void 0 ? void 0 : _a.data, status: error_17.response ? error_17.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_17.response ? error_17.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.updateInfoCompany = function (companyId, info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_18;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/update/").concat(companyId), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_18 = _d.sent();
                        console.log("Error: ", { success: (_a = error_18 === null || error_18 === void 0 ? void 0 : error_18.response) === null || _a === void 0 ? void 0 : _a.data, status: error_18.response ? error_18.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_18 === null || error_18 === void 0 ? void 0 : error_18.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_18 === null || error_18 === void 0 ? void 0 : error_18.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_18.response ? error_18.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.upgradeInfoCompany = function (companyId, info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_19;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/upgrade/").concat(companyId), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_19 = _d.sent();
                        console.log("Error: ", { success: (_a = error_19 === null || error_19 === void 0 ? void 0 : error_19.response) === null || _a === void 0 ? void 0 : _a.data, status: error_19.response ? error_19.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_19 === null || error_19 === void 0 ? void 0 : error_19.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_19 === null || error_19 === void 0 ? void 0 : error_19.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_19.response ? error_19.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.getCompanyProperties = function (pageSize, currentPage, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_20;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/getOwn?current=").concat(currentPage, "&pageSize=").concat(pageSize), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_20 = _d.sent();
                        console.log("Error: ", { success: (_a = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _a === void 0 ? void 0 : _a.data, status: error_20.response ? error_20.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_20.response ? error_20.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.getOneCompanyProperties = function (companyId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_21;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get/").concat(companyId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_21 = _d.sent();
                        console.log("Error: ", { success: (_a = error_21 === null || error_21 === void 0 ? void 0 : error_21.response) === null || _a === void 0 ? void 0 : _a.data, status: error_21.response ? error_21.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_21 === null || error_21 === void 0 ? void 0 : error_21.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_21 === null || error_21 === void 0 ? void 0 : error_21.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_21.response ? error_21.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.deleteCompany = function (companyId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_22;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(companyId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_22 = _d.sent();
                        console.log("Error: ", { success: (_a = error_22 === null || error_22 === void 0 ? void 0 : error_22.response) === null || _a === void 0 ? void 0 : _a.data, status: error_22.response ? error_22.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_22 === null || error_22 === void 0 ? void 0 : error_22.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_22 === null || error_22 === void 0 ? void 0 : error_22.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_22.response ? error_22.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Company;
}());
exports.Company = Company;
var UserOfDepartment = /** @class */ (function () {
    function UserOfDepartment() {
        this.baseUrl = 'http://113.161.103.139/alphastorage/userOfDepartment';
    }
    UserOfDepartment.prototype.addUserToDepartment = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_23;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/add"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_23 = _d.sent();
                        console.log("Error: ", { success: (_a = error_23 === null || error_23 === void 0 ? void 0 : error_23.response) === null || _a === void 0 ? void 0 : _a.data, status: error_23.response ? error_23.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_23 === null || error_23 === void 0 ? void 0 : error_23.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_23 === null || error_23 === void 0 ? void 0 : error_23.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_23.response ? error_23.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfDepartment.prototype.getAll = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_24;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/getByUserIdAndDepartmentId"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_24 = _d.sent();
                        console.log("Error: ", { success: (_a = error_24 === null || error_24 === void 0 ? void 0 : error_24.response) === null || _a === void 0 ? void 0 : _a.data, status: error_24.response ? error_24.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_24 === null || error_24 === void 0 ? void 0 : error_24.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_24 === null || error_24 === void 0 ? void 0 : error_24.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_24.response ? error_24.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfDepartment.prototype.getAllUserOfDepartment = function (currentPage, pageSize, departmentId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_25;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/getAllUserOfDepartment/").concat(departmentId, "?current=").concat(currentPage, "&pageSize=").concat(pageSize), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_25 = _d.sent();
                        console.log("Error: ", { success: (_a = error_25 === null || error_25 === void 0 ? void 0 : error_25.response) === null || _a === void 0 ? void 0 : _a.data, status: error_25.response ? error_25.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_25 === null || error_25 === void 0 ? void 0 : error_25.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_25 === null || error_25 === void 0 ? void 0 : error_25.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_25.response ? error_25.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfDepartment.prototype.updateUserOfDepartment = function (companyId, info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_26;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/update/").concat(companyId), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_26 = _d.sent();
                        console.log("Error: ", { success: (_a = error_26 === null || error_26 === void 0 ? void 0 : error_26.response) === null || _a === void 0 ? void 0 : _a.data, status: error_26.response ? error_26.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_26 === null || error_26 === void 0 ? void 0 : error_26.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_26 === null || error_26 === void 0 ? void 0 : error_26.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_26.response ? error_26.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfDepartment.prototype.deleteUserOfDepartment = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_27;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/delete"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _d.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_27 = _d.sent();
                        console.log("Error: ", { success: (_a = error_27 === null || error_27 === void 0 ? void 0 : error_27.response) === null || _a === void 0 ? void 0 : _a.data, status: error_27.response ? error_27.response.status : null });
                        return [2 /*return*/, {
                                success: (_b = error_27 === null || error_27 === void 0 ? void 0 : error_27.response) === null || _b === void 0 ? void 0 : _b.data.success,
                                message: (_c = error_27 === null || error_27 === void 0 ? void 0 : error_27.response) === null || _c === void 0 ? void 0 : _c.data.message,
                                status: error_27.response ? error_27.response.status : null
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserOfDepartment;
}());
exports.UserOfDepartment = UserOfDepartment;
