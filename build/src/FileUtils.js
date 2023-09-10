"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_file = exports.create_file = exports.get_or_create_file = exports.get_file = void 0;
var FolderUtils_1 = require("./FolderUtils");
var PathUtils_1 = require("./PathUtils");
/**
 * ファイルを取得します
 * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない)
 * @param document_cls ドキュメント取得オブジェクト。openByIdメソッドが必要で、file id を渡してオブジェクトが返せるクラス
 * @returns document_clsにより取得したファイルオブジェクトを返します
 */
function get_file(path, document_cls) {
    var dir = (0, FolderUtils_1.get_dir)((0, PathUtils_1.get_directory_name_from_path)(path));
    if (!dir) {
        throw "\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002".concat(path);
    }
    var files = dir.getFilesByName((0, PathUtils_1.get_filename_from_path)(path));
    if (files.hasNext()) {
        return document_cls.openById(files.next().getId());
    }
    else {
        throw "\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002".concat(path);
    }
}
exports.get_file = get_file;
/**
 * ファイルを取得します。存在しない場合は作成します。
 * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない)
 * @param document_cls ドキュメント取得オブジェクト。openByIdメソッドとcreateメソッドが必要で、ファイル名を渡してオブジェクトを生成し、返せるクラス
 * @returns document_clsにより生成または取得したファイルオブジェクトを返します
 */
function get_or_create_file(path, document_cls) {
    var dir_name = (0, PathUtils_1.get_directory_name_from_path)(path);
    var file_name = (0, PathUtils_1.get_filename_from_path)(path);
    var dir = (0, FolderUtils_1.get_dir)(dir_name) || (0, FolderUtils_1.create_dir)(dir_name);
    var files = dir.getFilesByName(file_name);
    if (files.hasNext()) {
        return document_cls.openById(files.next().getId());
    }
    else {
        var doc = document_cls.create(file_name);
        var file = DriveApp.getFileById(doc.getId());
        file.moveTo(dir);
        return doc;
    }
}
exports.get_or_create_file = get_or_create_file;
/**
 * ファイルを取得します。存在しない場合は作成します。
 * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない)
 * @param document_cls ドキュメント取得オブジェクト。createメソッドが必要で、ファイル名を渡してオブジェクトを生成し、返せるクラス
 * @returns document_clsにより生成したファイルオブジェクトを返します
 */
function create_file(path, document_cls) {
    var dir_name = (0, PathUtils_1.get_directory_name_from_path)(path);
    var file_name = (0, PathUtils_1.get_filename_from_path)(path);
    var dir = (0, FolderUtils_1.get_dir)(dir_name) || (0, FolderUtils_1.create_dir)(dir_name);
    var files = dir.getFilesByName(file_name);
    if (!dir) {
        throw "\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002".concat(path);
    }
    if (files.hasNext()) {
        throw "\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306F\u3059\u3067\u306B\u5B58\u5728\u3057\u3066\u3044\u307E\u3059\u3002".concat(path);
    }
    else {
        var doc = document_cls.create(file_name);
        var file = DriveApp.getFileById(doc.getId());
        file.moveTo(dir);
        return doc;
    }
}
exports.create_file = create_file;
/**
 * 指定されたファイルを削除します
 * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない)
 */
function delete_file(path) {
    var dir_name = (0, PathUtils_1.get_directory_name_from_path)(path);
    var file_name = (0, PathUtils_1.get_filename_from_path)(path);
    var dir = (0, FolderUtils_1.get_dir)(dir_name);
    if (!dir) {
        throw "\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002".concat(path);
    }
    var files = dir.getFilesByName(file_name);
    if (files.hasNext()) {
        files.next().setTrashed(true);
    }
    else {
        throw "\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002".concat(path);
    }
}
exports.delete_file = delete_file;
//# sourceMappingURL=FileUtils.js.map