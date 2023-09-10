"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_filename_from_path = exports.get_directory_name_from_path = void 0;
/**
 * ファイルパスからフォルダ名を取得します
 * @param path
 * @returns
 */
function get_directory_name_from_path(path) {
    return path.split('/').slice(0, -1).join('/');
}
exports.get_directory_name_from_path = get_directory_name_from_path;
/**
 * ファイルパスからファイル名を取得します
 * @param path
 * @returns
 */
function get_filename_from_path(path) {
    return path.split('/').slice(-1)[0];
}
exports.get_filename_from_path = get_filename_from_path;
//# sourceMappingURL=PathUtils.js.map