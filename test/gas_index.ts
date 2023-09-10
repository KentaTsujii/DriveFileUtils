import {create_dir, get_or_create_dir, get_dir, delete_dir} from '../src/FolderUtils'
import {create_file, get_or_create_file, get_file, delete_file} from '../src/FileUtils'

function folder_util_test(){
  create_dir('folder_utils_test/sub1/sub2/sub3');
  get_or_create_dir('folder_utils_test/sub1/sub2/sub4');
  get_dir('folder_utils_test/sub1/sub2/sub3');
}

function folder_util_test_delete() {
  delete_dir('folder_utils_test/sub1/sub2/sub3');
}

function folder_util_test_after() {
  delete_dir('folder_utils_test');
}

function file_util_test_(){
  create_dir('file_utils_test');
  create_file('file_utils_test/test_file.txt', DocumentApp);
  create_file('file_utils_test/test_file.xlsx', SpreadsheetApp);
  try {
    create_file('file_utils_test/test_file.xlsx', SpreadsheetApp);
  } catch (error) {
    console.warn(error) 
  }
  get_file('file_utils_test/test_file.txt', DocumentApp);
  get_file('file_utils_test/test_file.xlsx', SpreadsheetApp);
  get_or_create_file('file_utils_test/test_file.txt', DocumentApp);
  get_or_create_file('file_utils_test/test_file2.xlsx', SpreadsheetApp);
}

function file_util_test_delete(){
  delete_file('file_utils_test/test_file.txt');
  delete_file('file_utils_test/test_file.xlsx');
}

function file_util_test_after() {
  delete_dir('file_utils_test');
}
