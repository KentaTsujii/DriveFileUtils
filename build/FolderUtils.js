"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_dir = exports.create_dir = exports.get_or_create_dir = exports.get_dir = void 0;
/**
 * フォルダを取得します。
 * @param path ファイルパス（/区切り）
 * @returns Folder フォルダを返します。
 */
function get_dir(path) {
    var split_path = path.split("/");
    var root_drive = DriveApp.getRootFolder();
    var ret = root_drive;
    for (var _i = 0, split_path_1 = split_path; _i < split_path_1.length; _i++) {
        var d = split_path_1[_i];
        var tmp_d = ret.getFoldersByName(d);
        if (tmp_d.hasNext()) {
            ret = tmp_d.next();
        }
        else {
            return null;
        }
    }
    return ret;
}
exports.get_dir = get_dir;
/**
 * フォルダを取得または作成します。
 * @param path ファイルパス（/区切り）
 * @returns Folder フォルダを返します。
 */
function get_or_create_dir(path) {
    var split_path = path.split("/");
    var root_drive = DriveApp.getRootFolder();
    var ret = root_drive;
    for (var _i = 0, split_path_2 = split_path; _i < split_path_2.length; _i++) {
        var d = split_path_2[_i];
        var tmp_d = ret.getFoldersByName(d);
        if (tmp_d.hasNext()) {
            ret = tmp_d.next();
        }
        else {
            ret = ret.createFolder(d);
        }
    }
    return ret;
}
exports.get_or_create_dir = get_or_create_dir;
/**
 * フォルダを取得または作成します。すでに存在する場合はエラーを出します
 * @param path ファイルパス（/区切り）
 * @returns Folder フォルダを返します。
 */
function create_dir(path) {
    if (get_dir(path)) {
        throw "すでにフォルダが存在しています。";
    }
    else {
        return get_or_create_dir(path);
    }
}
exports.create_dir = create_dir;
/**
 * フォルダを削除します。
 * @param path
 */
function delete_dir(path) {
    var dir = get_dir(path);
    if (dir) {
        dir.setTrashed(true);
    }
    else {
        throw "\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002".concat(path);
    }
}
exports.delete_dir = delete_dir;
//# sourceMappingURL=FolderUtils.js.map