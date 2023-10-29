import { QuickPickItem } from 'vscode';

export class FileItem implements QuickPickItem {
	label: string;
	description: string;

	constructor(public path: string, public num: number, public code: string) {
		this.label = code;
		this.description = `${path}:${num}`;
  }
}
