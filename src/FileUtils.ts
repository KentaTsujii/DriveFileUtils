
namespace FileUtils {

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

  /**
   * ファイルを取得します
   * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない) 
   * @param document_cls ドキュメント取得オブジェクト。openByIdメソッドが必要で、file id を渡してオブジェクトが返せるクラス
   * @returns document_clsにより取得したファイルオブジェクトを返します
   */
  export function get_file(path: string, document_cls) {
    const dir = FolderUtils.get_dir(get_directory_name_from_path(path));
    
    if(!dir){
      throw `指定されたディレクトリは存在しません。${path}`;
    }

    const files = dir.getFilesByName(get_filename_from_path(path));

    if(files.hasNext()){
        return document_cls.openById(files.next().getId());
    }
    else {
        throw `指定されたファイルは存在しません。${path}`;
    }
  }

  /**
   * ファイルを取得します。存在しない場合は作成します。
   * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない) 
   * @param document_cls ドキュメント取得オブジェクト。openByIdメソッドとcreateメソッドが必要で、ファイル名を渡してオブジェクトを生成し、返せるクラス
   * @returns document_clsにより生成または取得したファイルオブジェクトを返します
   */
  export function get_or_create_file(path: string, document_cls): object {
    const dir_name = get_directory_name_from_path(path);
    const file_name = get_filename_from_path(path);
    const dir = FolderUtils.get_dir(dir_name) || FolderUtils.create_dir(dir_name);
    const files = dir.getFilesByName(file_name);

    if(files.hasNext()){
        return document_cls.openById(files.next().getId());
    }
    else {
      const doc = document_cls.create(file_name);
      const file = DriveApp.getFileById(doc.getId());
      file.moveTo(dir);
      return doc;
    }
  }

  /**
   * ファイルを取得します。存在しない場合は作成します。
   * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない) 
   * @param document_cls ドキュメント取得オブジェクト。createメソッドが必要で、ファイル名を渡してオブジェクトを生成し、返せるクラス
   * @returns document_clsにより生成したファイルオブジェクトを返します
   */
  export function create_file(path: string, document_cls): object {
    const dir_name = get_directory_name_from_path(path);
    const file_name = get_filename_from_path(path);
    const dir = FolderUtils.get_dir(dir_name) || FolderUtils.create_dir(dir_name);
    const files = dir.getFilesByName(file_name);

    if(!dir){
      throw `指定されたディレクトリは存在しません。${path}`;
    }

    if(files.hasNext()){
        throw `指定されたファイルはすでに存在しています。${path}`;
    }
    else {
      const doc = document_cls.create(file_name);
      const file = DriveApp.getFileById(doc.getId());
      file.moveTo(dir);
      return doc;
    }
  }

  /**
   * 指定されたファイルを削除します
   * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない) 
   */
  export function delete_file(path: string) {
    const dir_name = get_directory_name_from_path(path);
    const file_name = get_filename_from_path(path);
    const dir = FolderUtils.get_dir(dir_name);

    if(!dir){
      throw `指定されたディレクトリは存在しません。${path}`;
    }

    const files = dir.getFilesByName(file_name);

    if(files.hasNext()){
      files.next().setTrashed(true);
    }
    else {
      throw `指定されたファイルは存在しません。${path}`;
    }
  }
}
