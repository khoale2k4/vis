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
    User.prototype.signup = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Error: ", error_1.response.data);
                        return [2 /*return*/, error_1.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.updateUser = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/update"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error: ", error_2.response.data);
                        return [2 /*return*/, error_2.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.getMyinfo = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/myInfo"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_3 = _a.sent();
                        console.log("Error: ", error_3.response.data);
                        return [2 /*return*/, error_3.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.getUserById = function (userId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get/").concat(userId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_4 = _a.sent();
                        console.log("Error: ", error_4.response.data);
                        return [2 /*return*/, error_4.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.getAllUser = function (currentPage, pageSize, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/getAll?current=").concat(currentPage, "&pageSize=").concat(pageSize), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_5 = _a.sent();
                        console.log("Error: ", error_5.response.data);
                        return [2 /*return*/, error_5.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.changePassword = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/changePassword"))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_6 = _a.sent();
                        console.log("Error: ", error_6.response.data);
                        return [2 /*return*/, error_6.response.data];
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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/login"), info)];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success, status: response.status }];
                    case 2:
                        error_7 = _a.sent();
                        // console.log("Error: ", error.response.data);
                        return [2 /*return*/, error_7.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Authentication.prototype.logout = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/logout"), {
                                withCredentials: true,
                                headers: { Authorization: "Bearer ".concat(token) }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.succes, status: response.status }];
                    case 2:
                        error_8 = _a.sent();
                        console.log("Error: ", error_8.response.data);
                        return [2 /*return*/, error_8.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Authentication.prototype.refreshToken = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/refresh"), info, {
                                withCredentials: true,
                                headers: { Authorization: "Bearer ".concat(token) }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success, status: response.status }];
                    case 2:
                        error_9 = _a.sent();
                        console.log("Error: ", error_9.response.data);
                        return [2 /*return*/, error_9.response.data];
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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/add"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_10 = _a.sent();
                        console.log("Error: ", error_10.response.data);
                        return [2 /*return*/, error_10.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfCompany.prototype.getAllUserBelongToComapny = function (companyId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get/").concat(companyId, "/employees"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_11 = _a.sent();
                        console.log("Error: ", error_11.response.data);
                        return [2 /*return*/, error_11.response.data];
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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_12 = _a.sent();
                        console.log("Error: ", error_12.response.data);
                        return [2 /*return*/, error_12.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Department.prototype.getDepartment = function (departmentId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get/").concat(departmentId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_13 = _a.sent();
                        console.log("Error: ", error_13.response.data);
                        return [2 /*return*/, error_13.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Department.prototype.updateDepartmentName = function (departmentId, info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/update/").concat(departmentId), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_14 = _a.sent();
                        console.log("Error: ", error_14.response.data);
                        return [2 /*return*/, error_14.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Department.prototype.deleteDepartment = function (departmentId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(departmentId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_15 = _a.sent();
                        console.log("Error: ", error_15.response.data);
                        return [2 /*return*/, error_15.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Department.prototype.getAllDepartment = function (currentPage, pageSize, companyId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/getAllDepartment/").concat(companyId, "?current=").concat(currentPage, "&pageSize=").concat(pageSize), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_16 = _a.sent();
                        console.log("Error: ", error_16.response.data);
                        return [2 /*return*/, error_16.response.data];
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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_17 = _a.sent();
                        console.log("Error creating patient: ", error_17.response.data);
                        return [2 /*return*/, error_17.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.updateInfoCompany = function (companyId, info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/update/").concat(companyId), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_18 = _a.sent();
                        console.log("Error: ", error_18.response.data);
                        return [2 /*return*/, error_18.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.upgradeInfoCompany = function (companyId, info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/upgrade/").concat(companyId), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_19 = _a.sent();
                        console.log("Error: ", error_19.response.data);
                        return [2 /*return*/, error_19.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.getCompanyProperties = function (pageSize, currentPage, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/getOwn?current=").concat(currentPage, "&pageSize=").concat(pageSize), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_20 = _a.sent();
                        console.log("Error: ", error_20.response.data);
                        return [2 /*return*/, error_20.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.getOneCompanyProperties = function (companyId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_21;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get/").concat(companyId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_21 = _a.sent();
                        console.log("Error: ", error_21.response.data);
                        return [2 /*return*/, error_21.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Company.prototype.deleteCompany = function (companyId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(companyId), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_22 = _a.sent();
                        console.log("Error: ", error_22.response.data);
                        return [2 /*return*/, error_22.response.data];
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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/add"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_23 = _a.sent();
                        console.log("Error: ", error_23.response.data);
                        return [2 /*return*/, error_23.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfDepartment.prototype.getAll = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_24;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/getByUserIdAndDepartmentId"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_24 = _a.sent();
                        console.log("Error: ", error_24.response.data);
                        return [2 /*return*/, error_24.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfDepartment.prototype.getAllUserOfDepartment = function (currentPage, pageSize, departmentId, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_25;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/getAllUserOfDepartment/").concat(departmentId, "?current=").concat(currentPage, "&pageSize=").concat(pageSize), {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_25 = _a.sent();
                        console.log("Error: ", error_25.response.data);
                        return [2 /*return*/, error_25.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfDepartment.prototype.updateUserOfDepartment = function (companyId, info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_26;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.patch("".concat(this.baseUrl, "/update/").concat(companyId), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_26 = _a.sent();
                        console.log("Error: ", error_26.response.data);
                        return [2 /*return*/, error_26.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserOfDepartment.prototype.deleteUserOfDepartment = function (info, token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_27;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/delete"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { result: data.result, success: data.success }];
                    case 2:
                        error_27 = _a.sent();
                        console.log("Error: ", error_27.response.data);
                        return [2 /*return*/, error_27.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserOfDepartment;
}());
exports.UserOfDepartment = UserOfDepartment;
