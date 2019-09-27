"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
exports.__esModule = true;
var core_1 = require("@actions/core");
var github_1 = require("@actions/github");
function createFile() {
    return __awaiter(this, void 0, void 0, function () {
        var token, repos_1, plugins, requests, profiles, buff, content, path, file, err_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    token = core_1.getInput('GITHUB_TOKEN');
                    core_1.debug('Inside try block');
                    if (!!token) return [3 /*break*/, 1];
                    core_1.warning("Github env with value " + token + " is not provided");
                    throw new Error('Cannot find token');
                case 1:
                    repos_1 = new github_1.GitHub(token).repos;
                    return [4 /*yield*/, repos_1.getContents(__assign(__assign({}, github_1.context.repo), { path: 'plugins' }))];
                case 2:
                    plugins = (_a.sent()).data;
                    requests = plugins.map(function (plugin) { return __awaiter(_this, void 0, void 0, function () {
                        var profile, buff;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, repos_1.getContents(__assign(__assign({}, github_1.context.repo), { path: plugin.path }))];
                                case 1:
                                    profile = (_a.sent()).data;
                                    buff = Buffer.from(profile['content'], 'base64');
                                    return [2 /*return*/, JSON.parse(buff.toString())];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(requests)];
                case 3:
                    profiles = _a.sent();
                    buff = Buffer.from(JSON.stringify(profiles), 'utf8');
                    content = buff.toString('base64');
                    path = 'directory/index.js';
                    return [4 /*yield*/, repos_1.getContents(__assign(__assign({}, github_1.context.repo), { path: path }))];
                case 4:
                    file = _a.sent();
                    return [4 /*yield*/, repos_1.createOrUpdateFile(__assign(__assign({}, github_1.context.repo), { message: '[Action] build plugin list', sha: file.data['sha'], content: content,
                            path: path }))];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    err_1 = _a.sent();
                    core_1.setFailed(err_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
createFile();
