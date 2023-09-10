"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FolderUtils_1 = require("../src/FolderUtils");
var FileUtils_1 = require("../src/FileUtils");
function folder_util_test() {
    (0, FolderUtils_1.create_dir)('folder_utils_test/sub1/sub2/sub3');
    (0, FolderUtils_1.get_or_create_dir)('folder_utils_test/sub1/sub2/sub4');
    (0, FolderUtils_1.get_dir)('folder_utils_test/sub1/sub2/sub3');
}
function folder_util_test_delete() {
    (0, FolderUtils_1.delete_dir)('folder_utils_test/sub1/sub2/sub3');
}
function folder_util_test_after() {
    (0, FolderUtils_1.delete_dir)('folder_utils_test');
}
function file_util_test_() {
    (0, FolderUtils_1.create_dir)('file_utils_test');
    (0, FileUtils_1.create_file)('file_utils_test/test_file.txt', DocumentApp);
    (0, FileUtils_1.create_file)('file_utils_test/test_file.xlsx', SpreadsheetApp);
    try {
        (0, FileUtils_1.create_file)('file_utils_test/test_file.xlsx', SpreadsheetApp);
    }
    catch (error) {
        console.warn(error);
    }
    (0, FileUtils_1.get_file)('file_utils_test/test_file.txt', DocumentApp);
    (0, FileUtils_1.get_file)('file_utils_test/test_file.xlsx', SpreadsheetApp);
    (0, FileUtils_1.get_or_create_file)('file_utils_test/test_file.txt', DocumentApp);
    (0, FileUtils_1.get_or_create_file)('file_utils_test/test_file2.xlsx', SpreadsheetApp);
}
function file_util_test_delete() {
    (0, FileUtils_1.delete_file)('file_utils_test/test_file.txt');
    (0, FileUtils_1.delete_file)('file_utils_test/test_file.xlsx');
}
function file_util_test_after() {
    (0, FolderUtils_1.delete_dir)('file_utils_test');
}
//# sourceMappingURL=gas_index.js.map