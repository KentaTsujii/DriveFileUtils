function folder_util_test(){
  FolderUtils.create_dir('folder_utils_test/sub1/sub2/sub3');
  FolderUtils.get_or_create_dir('folder_utils_test/sub1/sub2/sub4');
  FolderUtils.get_dir('folder_utils_test/sub1/sub2/sub3');
}

function folder_util_test_delete() {
  FolderUtils.delete_dir('folder_utils_test/sub1/sub2/sub3');
}

function folder_util_test_after() {
  FolderUtils.delete_dir('folder_utils_test');
}

function file_util_test(){
  FolderUtils.create_dir('file_utils_test');
  FileUtils.create_file('file_utils_test/test_file.txt', DocumentApp);
  FileUtils.create_file('file_utils_test/test_file.xlsx', SpreadsheetApp);
  try {
    FileUtils.create_file('file_utils_test/test_file.xlsx', SpreadsheetApp);
  } catch (error) {
    console.warn(error) 
  }
  FileUtils.get_file('file_utils_test/test_file.txt', DocumentApp);
  FileUtils.get_file('file_utils_test/test_file.xlsx', SpreadsheetApp);
  FileUtils.get_or_create_file('file_utils_test/test_file.txt', DocumentApp);
  FileUtils.get_or_create_file('file_utils_test/test_file2.xlsx', SpreadsheetApp);
}

function file_util_test_delete(){
  FileUtils.delete_file('file_utils_test/test_file.txt');
  FileUtils.delete_file('file_utils_test/test_file.xlsx');
}

function file_util_test_after() {
  FolderUtils.delete_dir('file_utils_test');
}
