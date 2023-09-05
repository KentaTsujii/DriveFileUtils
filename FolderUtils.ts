
namespace FolderUtils {

  /**
   * フォルダを取得します。
   * @param path ファイルパス（/区切り）
   * @returns Folder フォルダを返します。
   */
  export function get_dir(path: string) {
    const split_path: string[] = path.split("/");
    const root_drive = DriveApp.getRootFolder();
    let ret = root_drive;

    for(let d of split_path){
      let tmp_d = ret.getFoldersByName(d);
      if (tmp_d.hasNext()) {
          ret = tmp_d.next();
      }else{
          return null;
      }
    }

    return ret;
  }

  /**
   * フォルダを取得または作成します。
   * @param path ファイルパス（/区切り）
   * @returns Folder フォルダを返します。
   */
  export function get_or_create_dir(path: string){
    const split_path: string[] = path.split("/");
    const root_drive = DriveApp.getRootFolder();
    let ret = root_drive;

    for(let d of split_path){
      let tmp_d = ret.getFoldersByName(d);
      if (tmp_d.hasNext()) {
          ret = tmp_d.next();
      }else{
          ret = ret.createFolder(d);
      }
    }

    return ret;
  }

  /**
   * フォルダを取得または作成します。すでに存在する場合はエラーを出します
   * @param path ファイルパス（/区切り）
   * @returns Folder フォルダを返します。
   */
  export function create_dir(path: string) {

    if(get_dir(path)){
      throw "すでにフォルダが存在しています。";
    }
    else {
      return get_or_create_dir(path)
    }
  }

  /**
   * フォルダを削除します。
   * @param path 
   */
  export function delete_dir(path: string){
      const dir = get_dir(path);

      if(dir){
        dir.setTrashed(true);
      }
      else{
        throw `指定されたフォルダは存在しません。${path}`;
      }
  }
}
