/// <reference types="google-apps-script" />
/**
 * フォルダを取得します。
 * @param path ファイルパス（/区切り）
 * @returns Folder フォルダを返します。
 */
export declare function get_dir(path: string): GoogleAppsScript.Drive.Folder | null;
/**
 * フォルダを取得または作成します。
 * @param path ファイルパス（/区切り）
 * @returns Folder フォルダを返します。
 */
export declare function get_or_create_dir(path: string): GoogleAppsScript.Drive.Folder;
/**
 * フォルダを取得または作成します。すでに存在する場合はエラーを出します
 * @param path ファイルパス（/区切り）
 * @returns Folder フォルダを返します。
 */
export declare function create_dir(path: string): GoogleAppsScript.Drive.Folder;
/**
 * フォルダを削除します。
 * @param path
 */
export declare function delete_dir(path: string): void;
//# sourceMappingURL=FolderUtils.d.ts.map