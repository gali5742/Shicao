# 蓍草 v0.1.17 · 基础事实核心 A 补丁

## 基线

- 适用于当前 v0.1.17。
- **不更新版本号。**
- 本补丁只建立第一阶段后的结构化基础事实核心，不修改任何知识正文、页面显示或路由。

## 新增结构

```text
src/knowledge/data/foundation/
├─ types.ts
├─ wuxing.ts
├─ tiangan.ts
├─ dizhi.ts
├─ canggan.ts
├─ ganzhi.ts
├─ changsheng.ts
├─ dizhi-relations.ts
├─ wangxiang.ts
└─ index.ts
```

### 已建立的单一事实/计算来源

- 五行生克：只保存生成、克制两个正向环，反向关系计算得到。
- 天干：只保存次序、阴阳、五行、稳定 Knowledge ID。
- 地支：只保存次序、阴阳、五行、稳定 Knowledge ID。
- 藏干：十二支统一一份 `CANGGAN`。
- 六十甲子：由十干、十二支次序同步循环生成，不手写 60 条。
- 六旬：从六十甲子自动切分为六组十条。
- 十二长生：只保存十二状态顺序 + 十干长生起点；顺逆由天干阴阳计算，120 格全部推导。
- 六合、六冲、相害：保存一份二元配对，可从任一成员取得另一成员。
- 三合、三会：保留完整三成员组合；三合同时保留生/旺/库角色，三会保留方位与五行。
- 相刑：使用有方向的 edge，保留子卯互刑、寅巳申/丑戌未循环方向与四自刑。
- 旺相休囚死：由当令五行 + 五行生克统一计算，不保存 25 个独立结果。

## Public API

`src/knowledge/public-api.ts` 现在导出 `./data/foundation`，因此未来龟甲或其他消费者可以通过知识库公开 API 使用这些稳定事实，不需要读取 Markdown。

## 测试

新增：

```text
tests/data/foundation-facts.test.ts
```

覆盖：

- 六十甲子数量、首尾、唯一性与按干/支查询；
- 六旬分组；
- 十二支藏干；
- 十二长生起点、阳顺阴逆、十干完整行、地支完整列；
- 六合/六冲/相害反向解析；
- 三合/三会完整组合；
- 相刑方向与自刑；
- 旺相休囚死计算。

## 当前刻意不做

本补丁是 A 阶段，只建立事实核心。因此暂时保留旧 `src/knowledge/data/tiangan-facts.json` 和正文中的静态表格。

下一步 B 阶段再逐项把：

1. 十二长生表；
2. 藏干表；
3. 六十甲子；
4. 地支关系；
5. 旺相休囚死与派生生克；

从 Markdown/旧数据迁移到这一事实核心。迁移完成后再删除重复旧数据。

## 已完成验证

在当前构建副本上：

- `vue-tsc --noEmit`：通过；
- `node scripts/static-audit.mjs`：通过（42 entries / 227 referenced Markdown sections / 32 sources）；
- foundation TypeScript 独立编译：通过；
- foundation 运行时断言：通过。

当前容器的 `node_modules` 缺 Linux Rollup optional dependency，因此无法直接启动 Vitest；用户本地环境可执行：

```powershell
npm test
npm run build
```

本补丁没有包含此前已在本地确认的拼音标题类型修复，也不修改 GitHub Pages workflow。
