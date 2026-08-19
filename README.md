# 蓍草 v0.1.17 · 三会（方合）注音修复补丁

基线：v0.1.17

本补丁**不更新版本号**，直接覆盖项目根目录即可。

## 修复内容

1. 《三会（方合）》拼音由 `sān huì` 补全为 `sān huì fāng hé`。
2. `PinyinTitle.vue` 调整标题与拼音的对齐方式：
   - 汉字消耗一个拼音音节；
   - 全角括号等非汉字标点原样显示，不占拼音音节；
   - 因此 `三会（方合）` 会正确渲染 `sān / huì / fāng / hé`，括号保持原样。
3. 新增 `tests/ui/pinyin-title.test.ts` 回归测试，并同步旧的 frontend boundary 测试断言。

## 文件

- `src/components/knowledge/PinyinTitle.vue`
- `src/components/knowledge/pinyin-title.ts`
- `src/knowledge/entries/dizhi/sanhui/entry.ts`
- `tests/ui/frontend-boundary.test.ts`
- `tests/ui/pinyin-title.test.ts`

## 校验

当前容器中由于 v0.1.17 基线携带的 `node_modules` 缺少 Linux Rollup optional dependency，无法启动 Vitest/Vite；已完成：

- 4 个新增/修改 TypeScript 文件 transpile/syntax 检查通过；
- `PinyinTitle.vue` 经 `@vue/compiler-sfc` 解析、script 编译与 template 编译通过。

你本地覆盖后运行：

```bash
npm test
npm run build
```
