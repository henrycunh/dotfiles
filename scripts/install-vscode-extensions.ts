import { $, file } from 'bun'

const extensions = (await file('vscode.extensions').text())
    .split('\n')
    .slice(1)
    .filter(Boolean)

for (const extension of extensions) {
    await $`code --install-extension ${extension}`
}