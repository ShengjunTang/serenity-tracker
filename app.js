const tierLabels = {
  focus: "重点关注",
  watch: "跟踪观察",
  speculative: "观望",
  archive: "暂不纳入",
};

const zhCopy = {
  sive: {
    theme: "CPO / 硅光激光器瓶颈",
    thesis: "Serenity 将 SIVE 升级为当前最强 CPO 主线：她认为 SIVE 同时是 ASIC / merchant CPO 路线的瓶颈和卡点，并可能深度暴露于 Jabil、Gen-1 Ayar、Marvell Celestial、Lightmatter 与 GFS 相关生态。",
    whyItMatters: "这已经不是单一客户验证逻辑。按她的框架，SIVE 一方面通过 Win Semi 等产能控制稀缺 CW laser 输出，另一方面又嵌入多个 CPO 路线架构；如果成立，弹性来自 2027/2028 CPO 放量的生态级杠杆。",
    catalysts: [
      "Serenity 称 SIVE 是明年 CPO 的 chokepoint + bottleneck",
      "LITE 财报被她解读为 CW laser 供给紧张信号",
      "Win Semi private placement 扩产，可能支持 SIVE 放量",
      "GFS 或 JBL 在 6 月 vote 后入股 SIVE 的可能性，仍属推测",
      "Serenity 明确表示自己不卖出任何 SIVE 持仓",
      "Serenity 称 SIVE 是 Ayar 的 100% confirmed laser supplier",
      "Serenity 称 SIVE 与 Marvell Celestial / Lightmatter 有高信心供应关系",
      "后续客户或合作伙伴公告可能引发空头回补",
      "潜在 NASDAQ listing 可能缩小瑞典交易所估值折价",
      "类似 JBL 或 Innolight 的潜在 surprise announcement 仍属推测",
      "Sivers 与 GlobalFoundries 战略合作",
      "Serenity 将 SIVE 与 Ayar 加入 Nvidia NVLink Fusion 关联起来",
      "Serenity 称 SIVE 是 NVDA NVLink Fusion 生态的激光器供应商",
      "潜在串联 Marvell Celestial、Lightmatter 与 Ayar",
      "未来 18 个月 CPO 与可插拔光收发器放量",
      "JBL 与 GFS 的公开验证",
      "欧洲 Tech Sovereignty Package / Chips Act 2.0 对 photonics 的政策优先级",
    ],
    risks: ["Jabil、Ayar、Marvell Celestial、Lightmatter 的 primary / sole-source 说法仍需原始披露确认", "Win Semi 产能节奏和 2027/2028 精确输出仍未知", "insider selling 需要核对真实公告、时间和持股变化", "空头回补叙事会提高拥挤度和波动", "NASDAQ listing 表述需要独立核实", "CPO 量产节奏可能慢于资格认证节奏", "社交媒体关注后波动很高", "客户关系与收入兑现需要独立核实"],
    nextChecks: [
      "核实 Win Semi private placement 是否与 SIVE 相关 CW laser 产能有关",
      "确认 Jabil 1.6T LRO 架构是否公开指向 SIVE",
      "跟踪 6 月 vote 后是否出现 GFS / JBL 战略入股文件",
      "核对 insider selling 的公告日期、出售人职位和剩余持股",
      "核实 SIVE 是否在文件、演示或客户材料中被明确列为 Ayar 激光器供应商",
      "核实 Marvell Celestial / Lightmatter 关系是直接供应、推断关系，还是仅来自 GFS 参考设计",
      "核实 SIVE 是否披露 NASDAQ listing 计划或时间表",
      "跟踪可获得的 short interest / borrow 动态",
      "关注是否出现 JBL 类似或 Innolight 相关公告",
      "核实 GFS 原始公告中的参考设计表述",
      "核实 Ayar 的 NVLink Fusion 公告，以及 SIVE 是否有明确或间接连接",
      "核实 SIVE 与 NVDA NVLink Fusion 激光器供应关系的原始来源",
      "梳理 Marvell Celestial、Lightmatter、Ayar 的激光器供应依赖",
      "检查 SIVE 指引是否体现 CPO / 可插拔产品收入",
      "跟踪客户集中度与量产时间",
    ],
  },
  foci: {
    theme: "CPO FAU / 光学组件",
    thesis: "Serenity 将 FOCI 放在 TSM COUPE 与 CPO 光学组件链条中，具体角色是 FAU 与光学组件。",
    whyItMatters: "这是用台股中小市值公司表达 CPO 光学组件供应链主题的一种方式。",
    catalysts: ["TSM COUPE 与 AI 光学市场报道", "Serenity 称 FOCI 随台湾 CPO 多头启动，当日约涨 10%", "CPO 供应链放量", "光互连带动 FAU 需求"],
    risks: ["实际 COUPE 暴露需要确认", "可能存在散户驱动的价格波动", "台股小盘流动性与估值风险"],
    nextChecks: ["核实 FOCI 客户暴露与 FAU 收入占比", "阅读 UDN 报道和公司公告", "跟踪月营收是否加速"],
  },
  msscorp: {
    theme: "CPO 检测 / 良率",
    thesis: "Serenity 将 MSSCorp 描述为 CPO 供应链里的检测与良率控制环节，并表示自己曾继续摊低成本。",
    whyItMatters: "如果 CPO 放量，检测与良率瓶颈可能成为关键环节，即使它不是最显眼的组件。",
    catalysts: ["未来 18 个月 CPO 放量", "Serenity 称仍在等待 MSSCorp 跟随台湾 CPO 多头补涨", "专利 / 检测护城河叙事", "TSM COUPE 光学市场关注度"],
    risks: ["专利护城河说法需要验证", "可能早于真实收入放量", "小盘流动性与社媒拥挤风险"],
    nextChecks: ["检查专利组合与检测产品范围", "验证 TSM / COUPE 关联", "跟踪 CPO 样品放量后的收入和利润率变化"],
  },
  xfab: {
    theme: "欧洲硅光代工平台",
    thesis: "Serenity 继续把 XFAB 定义为被低估的欧洲硅光 foundry：低于 20 亿美元市值、NVDA / NOK pre-commercial SiPH 验证、EU / US CHIPS Act 支持，以及 EU CHIPS Act 2.0 明确纳入 photonics 的政策顺风。",
    whyItMatters: "XFAB 是欧洲 photonics 政策交易中的 foundry 端表达。新增信息包括相对 POET 的欧洲上市折价，以及 TSM 对 autonomous vehicles / robots 的评论可能验证汽车暴露类公司的底部。",
    catalysts: ["EU CHIPS Act 2.0 明确支持 photonics、CPO / interconnects 和 silicon photonics", "Serenity 将 XFAB 与 POET 估值对比，认为 XFAB 资产更深但估值更低", "TSM 对自动驾驶 / 机器人增长的评论可能验证 XFAB 等汽车暴露标的", "EU Chips Act 2 对需求 / 资金的支持", "Serenity 称 XFAB 与 SIVE 被 EU Industry Policy Blueprints 点名", "photonixFAB 验证", "NVDA 与 NOK 在硅光方向的活动"],
    risks: ["EU 政策支持可能需要 3-15 个月才转化为公司级公告", "即使 TSM 评论暗示底部，XFAB 仍受汽车周期拖累", "商业化前验证未必快速转化为收入", "需要区分补贴与确定性需求"],
    nextChecks: ["阅读 EU CHIPS Act 2.0 proposal 和 impact analysis，确认 XFAB / SOI / photonics 原文", "比较 POET 合同经济性与 XFAB foundry 产能及资产重置价值", "跟踪 TSM 自动驾驶 / 机器人评论是否体现在 XFAB 订单趋势", "核实 NVDA / NOK 验证细节", "阅读 photonixFAB 项目披露", "比较 P/B 与资产重置成本假设"],
  },
  mrvl: {
    theme: "AI ASIC / CPO 大盘股验证",
    thesis: "Serenity 仍把 MRVL 作为 AI interconnect / ASIC 大盘验证标的；新增 AVGO 电话会 read-through 强化了 AI networking 需求、利润率和 2028 年可见度，同时 MRVL 仍与 SIVE 的 Celestial 激光器推演有关。",
    whyItMatters: "MRVL 既是流动性较好的 AI 基建表达，也可能通过 Celestial 激光器链条验证 SIVE。",
    catalysts: ["AVGO 电话会显示 AI networking demand 强、订单可见度延伸到 2028", "OpenAI custom silicon late-2026 production 与 Meta H2 2027 项目时间线支持 ASIC 周期", "Jensen Huang 公开背书", "AI ASIC / Celestial 叙事", "潜在 SIVE 激光器供应商关系"],
    risks: ["AVGO 需求强不等于 MRVL 自动拿到份额", "35% 快速上涨后短期可能透支", "大盘股上行依赖执行与估值", "SIVE 供应关系仍需验证"],
    nextChecks: ["比较 AVGO 客户时间线与 MRVL AI ASIC pipeline 披露", "确认 Jensen 引述与活动语境", "验证 MRVL / Celestial 供应链", "区分 AI ASIC 增长与光学 / CPO 逻辑"],
  },
  nbis: {
    theme: "Neocloud / AI 基础设施融资结构",
    thesis: "Serenity 重新强调 NBIS 是她最高信心的 Neocloud 标的，并称从约 84 美元到 260 美元已验证 thesis；她认为 NBIS 相比 CRWV 和 IREN 有更好的融资结构和资产组合价值。",
    whyItMatters: "这让 Neocloud 重新进入盘前观察名单：在她的框架里，NBIS 可能是更干净的 AI 基础设施股权表达，同时还有 Avride、ClickHouse 等 sum-of-parts 价值。",
    catalysts: ["NBIS 盘前价格在约 260 美元附近保持强势", "Serenity 称 NBIS 是 IREN 到 CRWV 整个 Neocloud 板块中表现最好的名字", "她认为 NBIS 融资结构好于 CRWV 债务负担和 IREN ATM 稀释", "Avride 与 ClickHouse 暴露带来资产组合重估可能"],
    risks: ["大涨后的回顾性验证不等于新的买入点", "Neocloud 标的对融资条件和 AI capex 情绪高度敏感", "子公司和持股价值需要独立核实"],
    nextChecks: ["核实 NBIS 当前债务、现金和融资结构", "比较 CRWV 利息负担、IREN ATM 稀释与 NBIS 资本结构", "量化 Avride 和 ClickHouse 持股 / 估值贡献", "跟踪 NBIS 与相关 Neocloud 标的盘前和开盘反应"],
  },
  xintech: {
    theme: "TSM 测试子公司 / COUPE 供应商线索",
    thesis: "Serenity 称 Xintech 是 TSM 的测试子公司，自己有持仓；投资逻辑关键在于它是否与 COUPE 相关。",
    whyItMatters: "如果 COUPE 相关测试需求真实，小型 TSM 关联测试公司可能提供更精准的暴露。",
    catalysts: ["报告确认 TSM / COUPE 关联", "Serenity 称 Xintec 随台湾 CPO 多头启动，当日约涨 10%", "TSM 先进封装 / 光学供应链建设", "测试需求扩张"],
    risks: ["帖子中 COUPE 关联仍不完整", "主题较窄且公开披露有限", "需要独立映射收入来源"],
    nextChecks: ["找到她提到的那份报告", "确认 Xintech 股权关系与对 TSM 的收入依赖", "判断 COUPE 是否会带来测试量增长"],
  },
  aaoi: {
    theme: "800G / 1.6T 光模块 / 美国光学产能",
    thesis: "Serenity 将 AAOI 升级为更高信心的光模块线索：她称自己从 28 美元开始持续 averaging up，并认为如果公司执行顺利，可能 double 或 triple。",
    whyItMatters: "AAOI 是 AI 数据中心带宽需求的直接表达。新增重点不是单纯 2027 产能，而是 H1 明年可能出现 800G / 1.6T 光模块瓶颈，从而带来 ASP 和利润率超预期。",
    catalysts: ["Serenity 称自己从 28 美元开始持续加仓 AAOI", "hyperscaler 升级到 1.6T 后，sovereign / Tier-2 AI DC 可能继续吸收 800G 产能", "AMD / NVDA 相关客户对话传闻，仍需核实", "如果 H1 明年光模块成为瓶颈，可能出现涨价和 margin expansion", "2027 年上半年产能 / 收入爬坡", "光学超级周期关注", "光学同业重估"],
    risks: ["AMD / NVDA 对话仍是 analyst rumors，需要验证", "美国最大产能和垂直整合执行存在风险", "如果规模化后 ASP 如市场预期下行，利润率上行逻辑会削弱", "市值目标较激进", "产能爬坡与客户时间需要验证", "光学标的整体波动很大"],
    nextChecks: ["核实 AAOI 产能目标和垂直整合表述", "检查最新客户集中度及 AMD / NVDA 传闻来源", "比较分析师对 800G / 1.6T ASP 的假设", "核实 H1 2027 收入预测", "检查产能扩张与客户承诺", "与 SIVE / FOCI 的风险收益对比"],
  },
  shunsin: {
    theme: "台湾光学 / CPO 相邻暴露",
    thesis: "Serenity 将 Shunsin 放在当前光学风险收益名单中，并称它在自己的台湾多头标的里开始走强。",
    whyItMatters: "它属于她的台湾 CPO / 光学组合，但具体供应链角色还需要进一步拆解。",
    catalysts: ["台湾光学供应链动量", "Serenity 称 Shunsin 随台湾 CPO 多头启动，当日约涨 10%", "CPO 相关关注", "与 FOCI / MSSCorp 的联动重估"],
    risks: ["已观察帖子中角色归因不够细", "需要公司层面的具体证据", "小盘流动性风险"],
    nextChecks: ["确认其具体 CPO / 光学角色", "检查近期月营收", "与 FOCI / MSSCorp 估值比较"],
  },
  lite: {
    theme: "光学周期历史类比 / CPO 激光器供应商",
    thesis: "Serenity 现在不仅把 LITE 当作第一轮光学浪潮类比，也把 LITE 财报当成 CW laser 产能已经紧张的证据，用来支撑 SIVE 和 CPO 激光器供应链逻辑。",
    whyItMatters: "LITE 既是历史参照，也是理解 SIVE / FOCI / MSSCorp 等小盘逻辑的较大市值锚点。",
    catalysts: ["LITE 财报被 Serenity 解读为 CW laser bottleneck 信号", "AVGO AI networking 电话会对光学 / networking 需求形成 read-through", "光学周期延续", "CPO 激光器供应商角色", "云厂商 AI capex 扩张"],
    risks: ["光学主题可能已有更多定价", "相对小票弹性较低", "需要新的基本面证据"],
    nextChecks: ["检查 LITE 财报电话会中 CW laser / EML 产能的原文", "核实 GFS 演示中供应商表述", "比较 LITE 与 SIVE 估值", "跟踪 AI 光学收入贡献"],
  },
  aehr: {
    theme: "AI ASIC 测试 / 批量订单弹性",
    thesis: "Serenity 在 AEHR 涨到约 35 亿美元市值后重新提到它，并表示下一步主要是等待 AEHR、LPK 等同类玩家的批量订单。",
    whyItMatters: "AEHR 是 AI ASIC 测试设备方向的表达，但 Serenity 明确说最新没有太多新东西，核心在订单兑现。",
    catalysts: ["AI ASIC 相关测试设备潜在批量订单", "从约 11 亿美元到 35 亿美元市值的重估", "LPK 等测试设备同业关注"],
    risks: ["已从此前 call 大幅重估", "最新帖子没有新的基本面细节", "升级信心前需要看到真实批量订单"],
    nextChecks: ["核实 AEHR 订单积压与 AI ASIC 客户暴露", "跟踪送样 / 试产后是否转成批量订单", "与 LPK 和其他测试设备同业估值比较"],
  },
  alchip: {
    theme: "AI ASIC 设计服务 / M&A TAM 扩张",
    thesis: "Serenity 提到一份 ASIC 研究报告，并称如果 AlChip 像 Marvell 一样做 M&A，可能有较大的 TAM 扩张机会。",
    whyItMatters: "AlChip 是 AI ASIC 设计服务方向的潜在线索，但当前只是报告和 M&A 可选项，不是完整新 thesis。",
    catalysts: ["AI ASIC 设计服务需求", "通过 M&A 扩大 TAM 的可能性", "与 Marvell 战略路径的类比"],
    risks: ["可见内容来自订阅语境，细节有限", "M&A 是可选项，不是已确认执行", "需要读原始报告并做估值核实"],
    nextChecks: ["阅读她提到的 ASIC 研究报告", "梳理 AlChip 客户结构与 AI ASIC 暴露", "确认管理层是否有可信 M&A 能力或意图"],
  },
  nextronics: {
    theme: "台湾 CPO 补涨候选",
    thesis: "Serenity 将 Nextronics 列为她等待补涨的台湾 CPO 相关多头之一，排在 Shunsin、FOCI、Xintec 已启动之后。",
    whyItMatters: "这是她台湾 CPO 组合中的新增名字，但当前帖子还没有给出具体供应链角色。",
    catalysts: ["台湾 CPO 多头内部的潜在补涨", "与 Shunsin、FOCI、Xintec 动量共振", "CPO 供应链关注度提升"],
    risks: ["观察到的帖子没有详细角色归因", "可能只是动量提及而非完整 thesis", "需要先核实 ticker、业务角色、客户和流动性"],
    nextChecks: ["确认对应上市主体与 ticker", "梳理其在 CPO 或光互连供应链中的位置", "确认收入暴露后再考虑升入 watchlist"],
  },
  "advanced-opto": {
    theme: "Computex CPO 暴露 / PMLA 与 FAU",
    thesis: "Serenity 在 Computex Taiwan 中提到 Advanced Optoelectronic 是新的 CPO 暴露线索，关联 PMLA 与 FAU。",
    whyItMatters: "它可能是覆盖度更低的早期 CPO 组件线索。",
    catalysts: ["Computex Taiwan 曝光", "PMLA 与 FAU 关注度", "与 HIMX / FOCI 的类比"],
    risks: ["她明确提醒 demo / sample 不等于 production", "证据弱于 SIVE / FOCI / MSSCorp", "需要确认客户与量产"],
    nextChecks: ["确认是展示、送样还是量产", "验证与 Largan Precision 的关系", "跟踪光学组件收入贡献"],
  },
  "win-semi": {
    theme: "激光器扩产瓶颈",
    thesis: "Serenity 称 Win Semi 很少出现在光子分析报告里，但明年可能成为激光器扩产的重要瓶颈。",
    whyItMatters: "这是二阶激光制造瓶颈线索，比 SIVE / GFS 逻辑更早期、确定性更低。",
    catalysts: ["2027 年激光器扩产需求", "Serenity 称仍在等待 Win Semi 跟随台湾 CPO 多头补涨", "台湾光学链关注", "潜在分析师覆盖补涨"],
    risks: ["观察到的讨论较少", "具体角色和收入需要确认", "可能仍然太早"],
    nextChecks: ["梳理 Win Semi 与激光相关的制程角色", "检查客户是否与 SIVE / LITE 生态重叠", "监控分析师提及与资本开支"],
  },
  iqe: {
    theme: "欧洲光子 / 既有多头案例",
    thesis: "Serenity 提到 IQE 是她从 12-13 美元做多到 54 美元的成功案例，但当前帖子更像回顾而非新的 thesis。",
    whyItMatters: "它能证明她此前的光子供应链框架，但当前中心度不如 SIVE / XFAB / FOCI。",
    catalysts: ["欧洲光子供应链重估", "此前成功 call 的动量", "可能与 XFAB / SOI 共振"],
    risks: ["更多是回顾性提及", "可能已经大幅上涨", "需要重新确认当前基本面"],
    nextChecks: ["检查大涨后的当前估值", "识别现有光子收入暴露", "与更新鲜的 XFAB thesis 对比"],
  },
  soi: {
    theme: "硅光衬底 / 欧洲政策受益",
    thesis: "SOI 从暂不纳入提升为跟踪观察，因为 Serenity 明确把它与 SIVE 并列为上游小型瓶颈：SIVE 是 CPO lasers，SOI 是 silicon photonics substrates，同时 EU CHIPS Act 2.0 impact analysis 提到欧洲 SOI wafer 强项。",
    whyItMatters: "如果 hyperscaler AI capex 向 photonics substrate 上游传导，SOI 可能成为比 SIVE 更间接、但仍有结构相关性的欧洲 photonics 供应链表达。",
    catalysts: ["Serenity 用 Goldman hyperscaler capex 上调支撑上游瓶颈资产", "EU CHIPS Act 2.0 impact analysis 提到欧洲 SOI wafer 强项", "此前市场低估", "欧洲半导体动量"],
    risks: ["SOI 逻辑比 SIVE 间接，Serenity 给出的公司级细节较少", "需要确认 Serenity 所指 SOI 对应的具体上市标的", "已经大幅上涨", "相对当前 CPO 主线可能偏旧"],
    nextChecks: ["确认 Serenity 所指 SOI 的具体上市主体 / ticker", "阅读 EU CHIPS Act 2.0 impact analysis 中 Soitec / Siltronic 相关原文", "检查 silicon photonics substrate 需求是否已进入公司指引", "确认 SOI 是否与光子或 AI 供应链有关"],
  },
  "tsm-visera": {
    theme: "CoPoS 先进封装 / TSM 子公司暴露",
    thesis: "Serenity 提到 TSM chairman 称 CoPoS 在 2-3 年内会有很大 volume，当前已有 pilot lines；同时她把 Visera 作为 TSM 子公司重暴露、已开始 re-rate 的明年 long idea 观察。",
    whyItMatters: "这是新的跟踪线索。如果 CoPoS 从 pilot 走向 volume 的时间早于市场预期，TSM 相邻的光学 / 封装子公司可能提前重估。",
    catalysts: ["TSM chairman 称 CoPoS 2-3 年内 volume 很大", "CoPoS pilot lines 已经存在", "Serenity 观察到 Visera 已有一定 re-rating", "TSM 将 autonomous vehicles / robots 视为增长方向"],
    risks: ["需要确认 Visera 的 ticker、市值和 TSM 暴露", "CoPoS 从 pilot 到 volume 仍可能延迟", "Serenity 将其称为明年 long idea，当前不是最高信心主线"],
    nextChecks: ["确认 Visera 上市主体、ticker、TSM 持股和业务暴露", "找到 TSM chairman 关于 CoPoS 的原始评论", "梳理 CoPoS 除 TSM 外的供应链受益者", "判断自动驾驶 / 机器人评论是否影响 XFAB 等汽车暴露标的"],
  },
  "crypto-platforms": {
    theme: "Crypto 政策压力 / 短线估值修复",
    thesis: "Serenity 提到 COIN、HOOD、CRCL 等 crypto 平台股重新受到政策压力，但估值对 swing trading 又开始有吸引力。",
    whyItMatters: "这不是她的 AI / CPO 核心主线，而是围绕政策、流动性和估值回落的短线风险收益观察。",
    catalysts: ["Clarity Act / 银行游说相关法案消息", "Crypto beta 或流动性回暖", "COIN、HOOD、CRCL 回调后的估值修复"],
    risks: ["高度依赖政策变化，且不是长期高信心 thesis", "Crypto beta 可能压过公司基本面", "需要区分交易平台收入暴露和币价波动"],
    nextChecks: ["阅读相关法案条文，确认 yield / stablecoin 受影响部分", "比较 COIN、HOOD、CRCL 对交易量和 crypto beta 的敏感性", "观察 Serenity 是否继续给出后续，而不是只停留在 swing-trade 表述"],
  },
  leaderdrive: {
    theme: "人形机器人 / 谐波减速器 / Physical AI 零部件",
    thesis: "Serenity 称绿的谐波是她最青睐的中国上市人形机器人标的，核心暴露包括谐波减速器、旋转关节减速器、直线执行器、电机 / 关节，以及行星滚柱丝杠。",
    whyItMatters: "这是一个直接的 Physical AI 硬件零部件 thesis。如果人形机器人量产放大，绿的谐波可能通过多个运动控制核心部件获得可观 BOM 份额，而不是只依赖单一产品。",
    catalysts: ["Serenity 称绿的谐波是她最喜欢的中国上市人形机器人标的", "她提到国内谐波减速器份额超过 60%、全球客户超过 1800 家", "暴露于旋转关节减速器、直线执行器、电机 / 关节和行星滚柱丝杠", "她框架中潜在相关客户包括优必选、智元机器人、Tesla、Figure 等", "Physical AI 与人形机器人规模化量产"],
    risks: ["市场份额和客户数量需要原始资料确认", "人形机器人量产节奏高度不确定，难以精确建模", "A 股估值和流动性与美股 AI 硬件标的不同", "Tesla / Figure 只是潜在客户框架，不是确认供应关系"],
    nextChecks: ["核实 60% 国内份额和 1800+ 客户说法", "估算每台人形机器人中减速器 / 执行器 / 电机的 BOM 价值", "核对 Universal Robots、优必选、智元机器人以及 Tesla / Figure 证据", "查看 688017 估值、收入结构和扩产计划"],
  },
  rddt: {
    theme: "AI 时代互联网平台 / 网络效应护城河",
    thesis: "Serenity 重新强调 RDDT，认为它有强劲 earnings beat、FCF、69% 同比收入增长、91.5% gross margin，以及对抗 AI vibe coding 的网络效应护城河。",
    whyItMatters: "RDDT 不是 AI 基建供应链标的，但属于 AI 时代平台型资产：社区网络效应、数据深度和高毛利率如果持续，可能被市场低估。",
    catalysts: ["横盘数月后重新获得市场关注", "Serenity 引用 69% YoY revenue growth", "91.5% gross margin 和强 FCF", "她认为 Reddit 网络效应能对抗 AI vibe coding"],
    risks: ["财务数据需要用最新 filing 核实", "如果增长放缓，平台估值可能压缩", "不属于 Serenity 当前 CPO / Physical AI 硬件主线"],
    nextChecks: ["核实 RDDT 最新收入增长、毛利率和 FCF", "比较估值、收入增长和利润率", "评估 AI 数据授权、用户增长和广告变现是否可持续"],
  },
};

const state = {
  ideas: [],
  latestUpdates: [],
  selectedId: null,
  detailOpen: false,
  latestExpanded: false,
  tier: "all",
  query: "",
  sortDesc: true,
};

const els = {
  sourceWindow: document.querySelector("#source-window"),
  heroTotal: document.querySelector("#hero-total"),
  heroFocus: document.querySelector("#hero-focus"),
  latestCount: document.querySelector("#latest-count"),
  latestList: document.querySelector("#latest-list"),
  resultCount: document.querySelector("#result-count"),
  body: document.querySelector("#ideas-body"),
  detail: document.querySelector("#detail-panel"),
  backdrop: document.querySelector("#detail-backdrop"),
  search: document.querySelector("#search-input"),
  sort: document.querySelector("#sort-button"),
  tierButtons: document.querySelectorAll(".tier-button"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function tierPill(tier) {
  return `<span class="tier-pill ${tier}">${tierLabels[tier] ?? tier}</span>`;
}

function zh(idea, field) {
  return zhCopy[idea.id]?.[field];
}

function bilingualText(idea, field) {
  const cn = zh(idea, field);
  const en = idea[field];
  if (!cn) return escapeHtml(en ?? "");
  return `
    <span class="zh-line">${escapeHtml(cn)}</span>
    <span class="en-line">${escapeHtml(en ?? "")}</span>
  `;
}

function bilingualParagraph(idea, field) {
  const cn = zh(idea, field);
  const en = idea[field];
  if (!cn) return `<p>${escapeHtml(en ?? "")}</p>`;
  return `
    <p class="zh-copy">${escapeHtml(cn)}</p>
    <p class="en-copy">${escapeHtml(en ?? "")}</p>
  `;
}

function bilingualItems(idea, field) {
  const cnItems = zh(idea, field) ?? [];
  const enItems = idea[field] ?? [];
  return enItems.map((item, index) => ({
    zh: cnItems[index],
    en: item,
  }));
}

function countByTier(ideas, tier) {
  return ideas.filter((idea) => idea.tier === tier).length;
}

function updateCounts() {
  document.querySelector("#count-all").textContent = state.ideas.length;
  els.heroTotal.textContent = state.ideas.length;
  for (const tier of ["focus", "watch", "speculative", "archive"]) {
    const count = countByTier(state.ideas, tier);
    document.querySelector(`#count-${tier}`).textContent = count;
    if (tier === "focus") els.heroFocus.textContent = count;
  }
}

function normalizeSearch(value) {
  return String(value ?? "")
    .toLowerCase()
    .replaceAll("$", "")
    .replace(/[^\p{L}\p{N}\u4e00-\u9fff]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function relatedLatestText(idea) {
  const tokens = [idea.id, idea.ticker, idea.name]
    .map(normalizeSearch)
    .filter(Boolean);
  return state.latestUpdates
    .filter((item) => {
      const related = (item.related ?? []).map(normalizeSearch);
      return tokens.some((token) => related.some((tag) => tag.includes(token) || token.includes(tag)));
    })
    .flatMap((item) => [item.type, item.impactZh, item.original, ...(item.related ?? [])]);
}

function ideaMatches(idea) {
  const tierMatch = state.tier === "all" || idea.tier === state.tier;
  const query = normalizeSearch(state.query);
  if (!query) return tierMatch;
  const haystack = [
    idea.id,
    idea.ticker,
    normalizeSearch(idea.ticker),
    idea.name,
    tierLabels[idea.tier],
    idea.theme,
    idea.thesis,
    idea.whyItMatters,
    idea.stance,
    idea.lastUpdated,
    zh(idea, "theme"),
    zh(idea, "thesis"),
    zh(idea, "whyItMatters"),
    ...(idea.catalysts ?? []),
    ...(idea.risks ?? []),
    ...(idea.nextChecks ?? []),
    ...(idea.evidence ?? []).flatMap((item) => [item.date, item.quote, item.url]),
    ...relatedLatestText(idea),
    ...(zh(idea, "catalysts") ?? []),
    ...(zh(idea, "risks") ?? []),
    ...(zh(idea, "nextChecks") ?? []),
  ]
    .map(normalizeSearch)
    .join(" ");
  return tierMatch && haystack.includes(query);
}

function filteredIdeas() {
  return state.ideas
    .filter(ideaMatches)
    .sort((a, b) => {
      const result = new Date(b.lastUpdated) - new Date(a.lastUpdated);
      return state.sortDesc ? result : -result;
    });
}

function formatDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(date)
    .replaceAll("/", "-");
}

function isMobileView() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function syncDetailSheet() {
  els.detail.classList.toggle("open", state.detailOpen);
  els.backdrop.classList.toggle("open", state.detailOpen);
  els.detail.setAttribute("aria-hidden", String(isMobileView() && !state.detailOpen));
}

function openDetailSheet() {
  state.detailOpen = true;
  syncDetailSheet();
}

function closeDetailSheet() {
  state.detailOpen = false;
  syncDetailSheet();
}

function scrollSearchResultsIntoView({ force = false } = {}) {
  if (!force && !state.query) return;
  requestAnimationFrame(() => {
    document.querySelector(".table-panel")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function renderTable() {
  const rows = filteredIdeas();
  els.resultCount.textContent = `${rows.length} 条`;
  els.body.innerHTML = rows
    .map((idea) => {
      const selected = idea.id === state.selectedId ? " selected" : "";
      return `
        <tr class="idea-row${selected}" data-id="${escapeHtml(idea.id)}">
          <td data-label="分级"><div class="cell-content">${tierPill(idea.tier)}</div></td>
          <td data-label="标的">
            <div class="cell-content">
              <span class="ticker">${escapeHtml(idea.ticker)}</span>
              <span class="company">${escapeHtml(idea.name)}</span>
            </div>
          </td>
          <td data-label="主题"><div class="cell-content">${bilingualText(idea, "theme")}</div></td>
          <td data-label="Thesis"><div class="cell-content">${bilingualText(idea, "thesis")}</div></td>
          <td data-label="来源"><div class="cell-content"><a class="evidence-link" href="${escapeHtml(idea.evidence?.[0]?.url ?? "#")}" target="_blank" rel="noreferrer">${idea.evidence?.length ?? 0} 条来源</a></div></td>
          <td data-label="更新"><div class="cell-content">${escapeHtml(idea.lastUpdated)}</div></td>
        </tr>
      `;
    })
    .join("");

  document.querySelectorAll(".idea-row").forEach((row) => {
    row.addEventListener("click", () => {
      const nextId = row.dataset.id;
      const shouldClose = isMobileView() && state.detailOpen && state.selectedId === nextId;
      state.selectedId = nextId;
      renderTable();
      renderDetail();
      if (shouldClose) {
        closeDetailSheet();
      } else if (isMobileView()) {
        openDetailSheet();
      }
    });
  });
}

function renderLatestUpdates() {
  const latestBatch = state.latestUpdates.find((item) => item.batch)?.batch;
  const scopedUpdates = latestBatch ? state.latestUpdates.filter((item) => item.batch === latestBatch) : state.latestUpdates;
  const updates = [...scopedUpdates].sort((a, b) => new Date(b.publishedAt ?? b.date) - new Date(a.publishedAt ?? a.date));
  const visibleUpdates = state.latestExpanded ? updates : updates.slice(0, 3);
  els.latestCount.textContent = state.latestExpanded ? `${updates.length} 条` : `显示 ${visibleUpdates.length}/${updates.length} 条`;
  if (!updates.length) {
    els.latestList.innerHTML = `
      <div class="empty-state">
        <strong>暂无最新消息</strong>
        <p>下一次数据更新后，这里会按时间展示 Serenity 的新增发言。</p>
      </div>
    `;
    return;
  }

  els.latestList.innerHTML =
    visibleUpdates
    .map(
      (item) => `
        <article class="latest-card">
          <div class="latest-meta">
            <time class="latest-date" datetime="${escapeHtml(item.publishedAt ?? item.date)}">${escapeHtml(formatDateTime(item.publishedAt ?? item.date))}</time>
            <span class="latest-zone">北京时间</span>
            ${item.importanceLabel ? `<span class="importance-badge ${escapeHtml(item.importance ?? "medium")}">${escapeHtml(item.importanceLabel)}</span>` : ""}
            <span class="latest-type">${escapeHtml(item.type)}</span>
          </div>
          <div>
            <p class="latest-impact">${escapeHtml(item.impactZh)}</p>
            <p class="latest-original">${escapeHtml(item.original)}</p>
            <div class="latest-tags">
              ${(item.related ?? []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
              <a class="latest-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">打开来源</a>
            </div>
          </div>
        </article>
      `,
    )
      .join("") +
    (updates.length > 3
      ? `
        <button class="latest-toggle" id="latest-toggle" type="button">
          ${state.latestExpanded ? "收起最新消息" : `展开全部 ${updates.length} 条最新消息`}
        </button>
      `
      : "");
  document.querySelector("#latest-toggle")?.addEventListener("click", () => {
    state.latestExpanded = !state.latestExpanded;
    renderLatestUpdates();
  });
}

function renderList(title, items) {
  return `
    <section class="detail-section">
      <h4>${escapeHtml(title)}</h4>
      <ul class="detail-list">
        ${(items ?? [])
          .map(
            (item) => `
              <li>
                ${item.zh ? `<span class="zh-line">${escapeHtml(item.zh)}</span>` : ""}
                <span class="en-line">${escapeHtml(item.en)}</span>
              </li>
            `,
          )
          .join("")}
      </ul>
    </section>
  `;
}

function renderDetail() {
  const idea = state.ideas.find((item) => item.id === state.selectedId) ?? filteredIdeas()[0];
  if (!idea) {
    els.detail.innerHTML = `
      <div class="empty-state">
        <strong>没有匹配结果</strong>
        <p>换一个关键词或分级再试。</p>
      </div>
    `;
    return;
  }

  state.selectedId = idea.id;
  els.detail.innerHTML = `
    <div class="detail-title">
      <div>
        <h3>${escapeHtml(idea.ticker)} · ${escapeHtml(idea.name)}</h3>
        <p>${zh(idea, "theme") ? `${escapeHtml(zh(idea, "theme"))} / ` : ""}${escapeHtml(idea.theme)}</p>
      </div>
      ${tierPill(idea.tier)}
      <button class="detail-close" type="button" aria-label="关闭详情">关闭</button>
    </div>

    <section class="detail-section">
      <h4>投资判断</h4>
      <p class="zh-copy">${escapeHtml(idea.stance)}。${escapeHtml(zh(idea, "whyItMatters") ?? idea.whyItMatters)}</p>
      <p class="en-copy">${escapeHtml(idea.whyItMatters)}</p>
    </section>

    <section class="detail-section">
      <h4>核心 thesis</h4>
      ${bilingualParagraph(idea, "thesis")}
    </section>

    ${renderList("催化 / Catalysts", bilingualItems(idea, "catalysts"))}
    ${renderList("风险 / Risks", bilingualItems(idea, "risks"))}
    ${renderList("下一步核实 / Next checks", bilingualItems(idea, "nextChecks"))}

    <section class="detail-section">
      <h4>来源依据</h4>
      <div class="detail-list">
        ${(idea.evidence ?? [])
          .map(
            (item) => `
              <article class="evidence-card">
                <time>${escapeHtml(item.date)}</time>
                <span class="evidence-label">Serenity 原文 / Original</span>
                <p>${escapeHtml(item.quote)}</p>
                <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">打开 X 来源</a>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
  els.detail.querySelector(".detail-close").addEventListener("click", closeDetailSheet);
  syncDetailSheet();
}

function render() {
  updateCounts();
  renderLatestUpdates();
  renderTable();
  renderDetail();
}

async function boot() {
  try {
    const response = await fetch(`./data/ideas.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.ideas = data.ideas ?? [];
    state.latestUpdates = data.latestUpdates ?? [];
    state.selectedId = state.ideas[0]?.id ?? null;
    els.sourceWindow.textContent = `${data.sourceWindow} · 数据更新时间 ${data.generatedAt}`;
    render();
  } catch (error) {
    els.sourceWindow.textContent = "数据读取失败，请确认已通过本地服务器打开页面。";
    els.detail.innerHTML = `
      <div class="empty-state">
        <strong>读取 data/ideas.json 失败</strong>
        <p>${escapeHtml(error.message)}</p>
      </div>
    `;
  }
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  state.selectedId = filteredIdeas()[0]?.id ?? null;
  closeDetailSheet();
  renderTable();
  renderDetail();
  scrollSearchResultsIntoView();
});

els.sort.addEventListener("click", () => {
  state.sortDesc = !state.sortDesc;
  els.sort.textContent = state.sortDesc ? "按更新时间排序" : "按旧到新排序";
  state.selectedId = filteredIdeas()[0]?.id ?? null;
  renderTable();
  renderDetail();
  scrollSearchResultsIntoView();
});

els.tierButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.tier = button.dataset.tier;
    els.tierButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.selectedId = filteredIdeas()[0]?.id ?? null;
    closeDetailSheet();
    renderTable();
    renderDetail();
    scrollSearchResultsIntoView({ force: true });
  });
});

els.backdrop.addEventListener("click", closeDetailSheet);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetailSheet();
});

window.addEventListener("resize", syncDetailSheet);

boot();
