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
