/**
 * ファイルパスからフォルダ名を取得します
 * @param path 
 * @returns 
 */
export function get_directory_name_from_path(path: string): string {
  return path.split('/').slice(0, -1).join('/');
}

/**
 * ファイルパスからファイル名を取得します
 * @param path 
 * @returns 
 */
export function get_filename_from_path(path: string): string {
  return path.split('/').slice(-1)[0];
}
