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
var fs = require("fs-extra");
var util = require("util");
var child_process = require("child_process");
var promisifyExec = util.promisify(child_process.exec);
var buildProfiles = function () {
    return new Promise(function (resolve, reject) {
        try {
            var path = './plugins';
            fs.readdir(path, function (error, files) { return __awaiter(void 0, void 0, void 0, function () {
                var profilesPromises, profiles, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (error)
                                return [2 /*return*/, reject(error)];
                            console.log('profiles', files);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            profilesPromises = files.map(function (path) { return __awaiter(void 0, void 0, void 0, function () {
                                var jsonProfile, e_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, readFile("./plugins/" + path + "/profile.json")];
                                        case 1:
                                            jsonProfile = _a.sent();
                                            return [2 /*return*/, JSON.parse(jsonProfile)];
                                        case 2:
                                            e_2 = _a.sent();
                                            reject(e_2);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [4 /*yield*/, Promise.all(profilesPromises)];
                        case 2:
                            profiles = _a.sent();
                            console.log('built', JSON.stringify(profiles, null, '\t'));
                            resolve(profiles);
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            reject(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (e) {
            reject(e);
        }
    });
};
var readFile = function (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf8', function (error, data) {
            error ? reject(error) : resolve(data);
        });
    });
};
console.log('branch', process.env.CIRCLE_BRANCH);
console.log('pull request', process.env.CIRCLE_PULL_REQUEST);
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var profiles, target_1, profileAsString, currentMetadata, e_3;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, buildProfiles()];
                case 1:
                    profiles = _a.sent();
                    if (!(process.env.CIRCLE_BRANCH === 'master')) return [3 /*break*/, 3];
                    target_1 = "./build/metadata.json";
                    profileAsString = JSON.stringify(profiles, null, '\t');
                    return [4 /*yield*/, readFile("./build/metadata.json")
                        // check if we need to update it
                    ];
                case 2:
                    currentMetadata = _a.sent();
                    // check if we need to update it
                    if (!currentMetadata || currentMetadata !== profileAsString) {
                        console.log('building and pushing metadata.json');
                        fs.writeFile(target_1, profileAsString, 'utf8', function (error) { return __awaiter(_this, void 0, void 0, function () {
                            var rev, revHash;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (error)
                                            return [2 /*return*/, console.error(error)];
                                        console.log('done', target_1);
                                        return [4 /*yield*/, promisifyExec('git rev-parse --short --verify HEAD')];
                                    case 1:
                                        rev = _a.sent();
                                        revHash = rev.stdout.replace('\n', '');
                                        return [4 /*yield*/, promisifyExec('git add ./build/metadata.json')];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, promisifyExec("git commit -m \"Built profiles from " + revHash + "\" --allow-empty")];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, promisifyExec('git push origin master')];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    else
                        console.log('no need to rebuild metadata.json');
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_3 = _a.sent();
                    console.error(e_3);
                    process.exit(1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
run();
