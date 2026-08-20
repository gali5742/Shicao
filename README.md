# 蓍草 v0.1.17 显示层迁移 B3 补丁

基线：已应用“基础事实核心 A + 显示层迁移 B1 + B2”的 v0.1.17。

本补丁不更新版本号，不修改 Knowledge ID，不改正文解释方向。

## 本次迁移

1. 旺相休囚死
   - 新增春、夏、秋、冬与当令五行的稳定映射。
   - 四时“旺、相、休、囚、死”结果不再由 Markdown 手工维护，统一调用 `getSeasonalStates()` 推导。
   - `seasons.md` 改为 `[[fact:wangxiang.seasons-table]]`。

2. 地支五行生克
   - 新增 `selectors.ts`，统一由天干/地支基础五行属性与五行生克规则派生同五行成员及生克对象。
   - 十二个地支 `relations.md` 中原有四行静态生克表与重复总结句，改为：
     - `[[fact:dizhi.wuxing-relations.table-by-branch|子]]`
     - `[[fact:dizhi.wuxing-relations.summary-by-branch|子]]`
   - 保持原页面显示习惯，其中土支仍按“辰、戌、丑、未”顺序展示。

3. 天干
   - 当前十个天干单条页面没有重复维护与地支页同型的五行生克表，因此本次不为追求形式对称而新增显示层内容。
   - `selectors.ts` 已同时提供 `getTianganByElement()` 与 `getTianganWuxingRelations()`，供后续十神等知识层复用。

## 验证

在打包环境已完成：
- `vue-tsc --noEmit`：通过（按当前仓库已修正的 PinyinTitle 类型口径验证）
- `node scripts/static-audit.mjs`：通过
  - 42 entries
  - 227 referenced Markdown sections
  - 32 sources
- 静态检查：十二地支关系页已无手工维护的四行五行生克表。

当前打包环境的 node_modules 来自 Windows 基线，Linux 缺少 Rollup optional native dependency，因此无法在此环境正常启动 Vitest/Vite。请在本地覆盖后执行：

```powershell
npm test
npm run build
```

两项通过后，B3 可封口。下一步建议单独进行“旧重复数据清理”，重点确认并移除已无消费者的 `tiangan-facts.json` 等历史事实文件。
