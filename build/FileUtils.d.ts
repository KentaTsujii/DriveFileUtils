/**
 * ファイルを取得します
 * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない)
 * @param document_cls ドキュメント取得オブジェクト。openByIdメソッドが必要で、file id を渡してオブジェクトが返せるクラス
 * @returns document_clsにより取得したファイルオブジェクトを返します
 */
export declare function get_file(path: string, document_cls: any): any;
/**
 * ファイルを取得します。存在しない場合は作成します。
 * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない)
 * @param document_cls ドキュメント取得オブジェクト。openByIdメソッドとcreateメソッドが必要で、ファイル名を渡してオブジェクトを生成し、返せるクラス
 * @returns document_clsにより生成または取得したファイルオブジェクトを返します
 */
export declare function get_or_create_file(path: string, document_cls: any): object;
/**
 * ファイルを取得します。存在しない場合は作成します。
 * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない)
 * @param document_cls ドキュメント取得オブジェクト。createメソッドが必要で、ファイル名を渡してオブジェクトを生成し、返せるクラス
 * @returns document_clsにより生成したファイルオブジェクトを返します
 */
export declare function create_file(path: string, document_cls: any): object;
/**
 * 指定されたファイルを削除します
 * @param path ファイルのフルパス(絶対パスのみ有効。また、ルートディレクトリは/で指定しない)
 */
export declare function delete_file(path: string): void;
//# sourceMappingURL=FileUtils.d.ts.map