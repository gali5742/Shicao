# v0.1.0 实施记录

本版本首次把架构规范落实为独立工程。

## 已完成

- Vue 3 + Vite + TypeScript 独立工程骨架。
- schema 分拆：entry / category / section / relation / source / reference。
- `import.meta.glob` 自动发现条目、分类、关系类型、来源与 Markdown 正文。
- Registry 统一索引。
- Validator 对重复 ID、缺失分类、缺失正文、无效关系、无效来源、死 Knowledge ID 做启动时校验。
- 正向关系只录入一次，Backlink 运行时自动产生反向关系。
- `[[knowledge.id|显示文字]]` 内部引用语法。
- `public-api.ts` 作为外部唯一入口。
- URL 由 `knowledgeRouteAdapter.ts` 负责，不进入知识核心。
- 最小首页 / 分类页 / 详情页 / 搜索。
- 木火土金水五个最小样板条目。
- Vitest 测试骨架。
- 不依赖第三方包的 `npm run audit` 静态审计脚本。
- 构建后生成 `404.html`，便于静态托管直接访问 SPA 深层路由。

## 有意未做

- 不接龟甲。
- 不写八字或六爻判断逻辑。
- 不做正式五行教材扩写。
- 不做知识图谱、AI 解释、收藏、账号、CMS、全文语义搜索。

## 下一步建议

先在实际环境执行 `npm install && npm test && npm run build`，确认依赖安装与浏览器运行无误。随后再进入“五行正式内容结构”设计，而不是马上扩展到天干。
