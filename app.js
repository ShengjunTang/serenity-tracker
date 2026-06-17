const tierLabels = {
  focus: "重点关注",
  watch: "跟踪观察",
  speculative: "观望",
  archive: "暂不纳入",
};

const zhCopy = {
  sive: {
    theme: "CPO / 硅光激光器瓶颈",
    thesis: "Serenity 继续把 SIVE 放在最高信心的欧洲 AI / photonics 主线中。6 月 17 日她进一步把 AMD CW laser 采购理解成 hyperscaler 锁产能博弈的第一张牌：Nvidia 已锁住 Lumentum / Coherent，多数西方独立产能所剩不多，SIVE 与 AAOI、可能的 Macom 成为稀缺选择。",
    whyItMatters: "这次更新让 SIVE 逻辑从单一 AMD 订单传闻，升级为 CW laser 产能博弈。如果 AMD、Nvidia 和其他 CSP 都要提前锁容量，独立激光器产能的战略价值会继续上升；但 SIVE 仍需要公司级订单、LTA 或客户披露来确认。",
    catalysts: [
      "AMD 据称正在用多笔大采购锁定 CW laser 供应",
      "Serenity 认为这可能是 hyperscaler 锁产能博弈的第一张牌",
      "Lumentum / Coherent 被描述为已被 Nvidia 多年协议锁住",
      "西方独立 CW laser 产能被她压缩到 SIVE、AAOI、可能的 Macom",
      "Lumentum 可能还要从 Sumitomo / Furukawa 等日本公司买产能，显示链条 spare capacity 有限"
    ],
    risks: [
      "AMD 采购逻辑仍是 TrendForce / Serenity read-through，不是 SIVE 已披露订单",
      "如果其他供应商扩产更快，CW laser scarcity 可能先被消化",
      "SIVE 需要把 reference laser 和 GFS 关系转成收入、LTA 或客户确认"
    ],
    nextChecks: [
      "跟踪 AMD、GFS、Sivers、AAOI、Macom 是否披露 CW laser LTA 或产能预留",
      "比较 SIVE 产能路线与 Lumentum、Coherent、Sumitomo、Furukawa 的紧张程度",
      "查 TrendForce 原文和后续产业链确认"
    ]
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
    thesis: "Serenity 继续认为 XFAB 是欧洲 silicon photonics foundry 的潜在错配，但 6 月 17 日她明确说没有新的公司新闻。她的重点是市场没有把 XFAB 和 optical AI datacenter / power semi adjacent exposure、PhotonixFab、EU sovereign AI supply-chain 连接起来。",
    whyItMatters: "这次更新更像认知差和政策框架提醒。如果 Fable 出口管制后欧洲继续强化 sovereign AI supply chain，XFAB 可能和 IMEC、Ligentec 一起被重新理解；但如果缺少客户、项目里程碑或订单，市场可能继续把它当普通周期 foundry。",
    catalysts: [
      "Serenity 称 XFAB 没有新新闻，但公司营销材料做得不好",
      "她认为市场低估 XFAB 的 optical AI datacenter / power semi adjacent exposure",
      "PhotonixFab 与欧洲 silicon photonics value chain 仍是核心线索",
      "Fable 出口管制后 EU sovereign AI supply-chain 讨论升温",
      "潜在与 IMEC、Ligentec 等欧洲 sovereign AI 供应链节点同框"
    ],
    risks: [
      "这条更新明确不是新公司新闻，短期仍可能只是 narrative",
      "公司营销和信息披露弱会拖慢市场认知",
      "sovereign AI policy 必须转化为订单、grant 或客户 milestone 才能验证"
    ],
    nextChecks: [
      "跟踪 PhotonixFab 里程碑和 XFAB silicon photonics 客户披露",
      "核实 EU sovereign AI supply-chain 文件是否点名 XFAB、IMEC、Ligentec",
      "把 XFAB 的硅光暴露和汽车 / 工业周期拖累分开估值"
    ]
  },
  mrvl: {
    theme: "AI ASIC / CPO 大盘股验证",
    thesis: "Serenity 仍把 MRVL 作为 AI interconnect / ASIC 大盘验证标的；新增 AVGO 电话会 read-through 强化了 AI networking 需求、利润率和 2028 年可见度，同时 MRVL 仍与 SIVE 的 Celestial 激光器推演有关。",
    whyItMatters: "MRVL 既是流动性较好的 AI 基建表达，也可能通过 Celestial 激光器链条验证 SIVE。",
    catalysts: ["AVGO 电话会显示 AI networking demand 强、订单可见度延伸到 2028", "OpenAI custom silicon late-2026 production 与 Meta H2 2027 项目时间线支持 ASIC 周期", "Jensen Huang 公开背书", "AI ASIC / Celestial 叙事", "潜在 SIVE 激光器供应商关系"],
    risks: ["AVGO 需求强不等于 MRVL 自动拿到份额", "35% 快速上涨后短期可能透支", "大盘股上行依赖执行与估值", "SIVE 供应关系仍需验证"],
    nextChecks: ["比较 AVGO 客户时间线与 MRVL AI ASIC pipeline 披露", "确认 Jensen 引述与活动语境", "验证 MRVL / Celestial 供应链", "区分 AI ASIC 增长与光学 / CPO 逻辑"],
  },
  jbl: {
    theme: "1.6T LRO 可插拔光模块 / 美国光学制造",
    thesis: "Serenity 把 JBL 提为可能尚未充分定价的长线光通信线索：Jabil 接手 Intel 可插拔光模块产线，已有 hyperscaler 认证供应链和大规模制造能力，并可能通过 SIVE 与其他晶圆厂获得外部激光器供给。",
    whyItMatters: "如果 1.6T 需求已经出现，而 H1 2027 的主要限制转向激光器产能，Jabil 可能在仍以综合电子制造商估值的情况下获得光学业务重估。",
    catalysts: ["H1 2027 前后的 1.6T LRO 放量", "接手 Intel 可插拔光模块产线", "已有 hyperscaler 认证供应链", "SIVE 与多家晶圆厂可能支持激光器扩产", "美国本土光学供应链可能获得估值溢价"],
    risks: ["Serenity 明确表示当前没有 JBL 持仓，只是研究线索", "JBL 光学机会可能已被部分定价", "SIVE 关系和 1.6T 客户项目需要原始资料确认", "综合业务体量可能稀释光学增长对整体盈利的影响", "H1 2027 时间和约 40% 重估只是推测"],
    nextChecks: ["核实 Jabil 接手 Intel 可插拔光模块产线的原始披露", "查找 1.6T LRO 产能、客户和量产时间信息", "确认 JBL 是否公开点名 SIVE 或其他激光器供应商", "估算光学收入对 JBL 总收入与利润率的敏感性", "与 AAOI、Innolight 等光模块厂商比较估值和业务纯度"],
  },
  nbis: {
    theme: "Neocloud / AI 基础设施融资结构",
    thesis: "Serenity 重新强调 NBIS 是更干净的 Neocloud 表达，这次重点放在 financing structure 和 float dynamics：她批评 IREN 有大规模 ATM 和持续稀释风险，而 NBIS 的结构更好。",
    whyItMatters: "这把 Neocloud 主题从单纯 AI 基础设施需求，进一步转成资本结构质量筛选。在她框架里，早期机会能否加大仓位，首先要避开持续稀释和融资 overhang。",
    catalysts: ["Serenity 将 toxic financing structure / float dynamics 放在早期机会筛选第一位", "NBIS 相比 IREN、CRWV 有更好的融资结构", "Avride 与 ClickHouse 暴露带来资产组合重估可能", "AI 基础设施需求仍支撑 Neocloud 主题", "NBIS 与 ALAB、RKLB 一起被加入 Nasdaq 100，成为她早期成长框架的验证事件"],
    risks: ["大涨后的回顾性验证不等于新的买入点", "Neocloud 标的对融资条件和 AI capex 情绪高度敏感", "IREN 这类大规模 ATM 可能在上涨中持续卖出，形成结构性 overhang", "Nasdaq 100 纳入提升流动性的同时也会增加指数资金波动", "子公司和持股价值需要独立核实"],
    nextChecks: ["核实 NBIS 当前债务、现金和融资结构", "比较 CRWV 利息负担、IREN ATM 稀释与 NBIS 资本结构", "检查 IREN、CRWV、NBIS 当前 ATM 授权、股本变化和 float", "跟踪 Nasdaq 100 纳入日期、被动资金需求和 float 变化", "量化 Avride 和 ClickHouse 持股 / 估值贡献"],
  },
  xintech: {
    theme: "TSM 测试子公司 / COUPE 供应商线索",
    thesis: "Serenity 称 Xintec 是 TSMC packaging / test 子公司，自己有持仓；6 月 5 日她进一步说 TSM COUPE H2 2026 量产，如果 TSMC 倾向垂直整合，量可能流向 Xintec。",
    whyItMatters: "如果 COUPE 相关测试 / 封装需求真实，小型 TSM 关联公司可能提供更精准暴露。她短期认为 Xintec 比 VisEra 更有吸引力，但公开 volume 数据仍有限。",
    catalysts: ["TSM COUPE H2 2026 量产时间线", "TSMC 通过子公司积极追求 CPO 机会的表述", "Serenity 认为未来几个月 Xintec 比 VisEra 更有吸引力", "报告确认 TSM / COUPE 关联", "Serenity 称 Xintec 随台湾 CPO 多头启动，当日约涨 10%", "TSM 先进封装 / 光学供应链建设", "测试需求扩张"],
    risks: ["Serenity 承认公开披露中 Xintec 承接 COUPE volume 的数字有限", "帖子中 COUPE 关联仍需原始资料确认", "主题较窄且公开披露有限", "需要独立映射收入来源"],
    nextChecks: ["找到 TSMC 通过 Xintec 等子公司追求 CPO 机会的原始资料", "核实 COUPE H2 2026 量产时间线", "比较 Xintec 与 VisEra 的业务暴露、估值和收入敏感性", "找到她提到的那份报告", "确认 Xintech 股权关系与对 TSM 的收入依赖", "判断 COUPE 是否会带来测试量增长"],
  },
  "wus-pcb": {
    theme: "AI switch PCB / activist NAV discount",
    thesis: "Subs 新增 WUS / 2316：Serenity 读了 Palliser activist report 后认为很有说服力，并表示自己跟随买入；她同时强调这不是自己的原创 idea。核心是 WUS Taiwan 持有 WUS Kunshan 11.3%，后者据报告估算在 Nvidia AI switch PCB 份额约 45%，因此 WUS Taiwan 可能存在明显 NAV discount。",
    whyItMatters: "这是今天新的 AI 基建非光学线索：PCB 暴露叠加 activist unlock。她认为 Kunshan 持股税后价值可能是当前 WUS Taiwan 业务价值的数倍，但能否兑现取决于管理层、Palliser 推动和资本动作。",
    catalysts: [
      "Palliser activist report 被 Serenity 认为很有说服力",
      "Serenity 表示自己已跟随买入，但不是原创 idea",
      "WUS Taiwan 持有 WUS Kunshan 11.3% 的 look-through 价值",
      "Palliser 估算 WUS Kunshan 在 Nvidia AI switch PCB 份额约 45%",
      "潜在出售部分 Kunshan stake 或其他价值释放方案"
    ],
    risks: [
      "该 thesis 高度依赖 Palliser 报告，需要原文核实",
      "管理层可能完全无视 activist，NAV discount 可长期存在",
      "Kunshan 估值、Nvidia PCB 份额、税后价值和股权结构都要用 filings 验证",
      "台湾 / 中国 PCB 标的有流动性、治理、汇率和地缘风险"
    ],
    nextChecks: [
      "阅读 Palliser WUS 报告原文",
      "核实 WUS Taiwan 对 WUS Kunshan 的持股和税后价值假设",
      "验证 Kunshan 的 Nvidia AI switch PCB 份额",
      "跟踪管理层是否回应 Palliser 或披露资本动作",
      "拆分 standalone PCB 业务价值与 Kunshan stake 价值"
    ]
  },
  aaoi: {
    theme: "800G / 1.6T 光模块 / 美国光学产能",
    thesis: "Serenity 继续把 AAOI 放在 AI 光学主线中；6 月 17 日她把 AAOI 与 SIVE、可能的 Macom 一起放进稀缺西方独立 CW laser 产能框架。如果 AMD 和其他 hyperscaler 都开始抢容量，AAOI 可能受益于 Lumentum / Coherent 被 Nvidia 锁住后的替代需求。",
    whyItMatters: "AAOI 仍是 AI 数据中心带宽需求里更流动的美国光学表达。新重点是 capacity scarcity：如果 CW laser 采购从 AMD 扩散到其他 CSP，AAOI 的战略价值可能提升；但它仍需要公司级需求、产能和客户确认。",
    catalysts: [
      "Serenity 点名 AAOI 是少数西方独立 CW laser 产能候选之一",
      "AMD 锁定 CW laser 可能带动其他 hyperscaler 跟进",
      "Lumentum / Coherent 被 Nvidia 多年协议锁住，使替代供应商更重要",
      "AAOI 继续与 SIVE 一起被她放在 optical bottleneck 框架里"
    ],
    risks: [
      "AAOI 受益逻辑仍是 read-through，不是直接客户披露",
      "如果 AAOI 不能扩产或拿到客户 allocation，板块紧张不一定转成业绩",
      "高 beta 光学股仍容易受报告、宏观和 timing 情绪拖累"
    ],
    nextChecks: [
      "看 AAOI 是否披露 CW laser、AMD/CSP 需求或产能预留",
      "比较 AAOI 与 SIVE、Macom、Lumentum / Coherent 的产能和 margin",
      "继续核实 Rosenblatt / TrendForce 对 AAOI 的 read-through"
    ]
  },
  rpi: {
    theme: "AI 需求兑现 / 欧洲硬件",
    thesis: "RPI 继续留在 Serenity 欧洲核心多头中，作为 AI edge hardware 的需求验证案例。她半开玩笑地说，如果 Raspberry Pi 最终成了低端 edge AI 的 mini-Nvidia 会很有意思。",
    whyItMatters: "RPI 不属于 CPO，但能验证 AI 需求从数据中心扩散到 edge hardware。现在重点是这种需求能否持续，而不是一次性订单惊喜。",
    catalysts: [
      "Serenity 将 RPI 列为欧洲核心多头",
      "低端 edge AI 的 mini-Nvidia 想象",
      "此前 AI demand 已经带来业绩验证"
    ],
    risks: [
      "mini-Nvidia 表述偏想象，不是公司指引",
      "RPI 已经明显重估，估值风险上升"
    ],
    nextChecks: [
      "跟踪 RPI 是否把 AI 需求转成持续订单增长",
      "对比低端 edge AI 机会和当前估值"
    ]
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
    thesis: "Serenity 继续用 LITE 作为光学周期锚点，并新增产能信号：她称 Lumentum / Coherent 产能已排到 2028，Lumentum 尤其受 EML 合约约束；在 AI capex 框架里，她认为从 LITE 到 SK Hynix 的上游半导体不像泡沫。",
    whyItMatters: "LITE 既是较大市值参照，也是 SIVE / AAOI 等小票激光瓶颈逻辑的验证锚。如果大厂产能排满，较小的 laser / photonics 供应商更容易被市场重估。",
    catalysts: [
      "Lumentum / Coherent 被 Serenity 描述为产能排到 2028",
      "Lumentum 因 EML 合约导致 CW capacity 更紧",
      "她认为从 LITE 到 SK Hynix 的上游半导体不像 AI 泡沫",
      "LITE 仍是 2025 optical rerating 的成功参照"
    ],
    risks: [
      "产能排到 2028 的说法需要 Lumentum / Coherent 原始资料验证",
      "大市值 optical 标的弹性可能低于 SIVE / AAOI 等小票"
    ],
    nextChecks: [
      "检查 Lumentum / Coherent 对 backlog 和 2028 产能的原文",
      "区分 LITE 公司级订单和 CW laser 板块稀缺 read-through"
    ]
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
    theme: "西方光学供应链 / InP epiwafer",
    thesis: "IQE 继续留在 Serenity 欧洲核心多头里。她认为 Tower / TSEM 的长期 InP epiwafer 协议仍是关键验证，并提到 Macom 相关链条；如果 latent capacity 转化，IQE 仍可能像 Landmark 一样重估。",
    whyItMatters: "IQE 是 SIVE、LPK 等欧洲 photonics 上游链条的一环。现在重点是 Tower LTA 和 Macom 需求能否转成 volume、pricing power 和 margin。",
    catalysts: [
      "Serenity 将 IQE 列为欧洲核心多头",
      "Tower / TSEM 长协仍是 IQE 关键验证",
      "Macom 相关 photonics 暴露提供额外 read-through",
      "latent capacity 转化可能支持 Landmark 式重估"
    ],
    risks: [
      "Tower LTA 和 Macom read-through 仍需 volume、margin、timing 证明",
      "类比 Landmark 是重估想象，不是已披露订单"
    ],
    nextChecks: [
      "检查 IQE 是否披露 latent capacity 转化或 InP epiwafer utilization",
      "验证 Macom linkage 是否能转成 IQE 收入"
    ]
  },
  soi: {
    theme: "硅光衬底 / 欧洲政策受益",
    thesis: "SOI 留在 Serenity 欧洲核心多头里，是 silicon photonics SOI substrate pure-monopoly 方向；但她也说 SOI 可能已经重估最多，自己仍然继续持有。",
    whyItMatters: "这是组合定位更新，不是新公司催化。SOI 仍在欧洲 photonics 基建篮子中，但相对 SIVE、LPK、ALRIB，弹性可能没那么明显。",
    catalysts: [
      "Serenity 将 SOI 列为欧洲核心多头",
      "她把 SOI 描述为 silicon photonics SOI substrate pure-monopoly",
      "她表示虽然 SOI 可能已重估最多，自己仍持有"
    ],
    risks: [
      "SOI 可能已经比其他欧洲 photonics 标的重估更多",
      "本次没有新增订单或客户披露"
    ],
    nextChecks: [
      "比较 SOI 与 SIVE、LPK、IQE、ALRIB、XFAB 的估值和重估幅度",
      "等待 SOI-specific 的客户或 demand 证据"
    ]
  },
  "tsm-visera": {
    theme: "CoPoS 先进封装 / TSM 子公司暴露",
    thesis: "Serenity 提到 TSM chairman 称 CoPoS 在 2-3 年内会有很大 volume，当前已有 pilot lines；同时她把 Visera 作为 TSM 子公司重暴露、已开始 re-rate 的明年 long idea 观察。",
    whyItMatters: "这是新的跟踪线索。如果 CoPoS 从 pilot 走向 volume 的时间早于市场预期，TSM 相邻的光学 / 封装子公司可能提前重估。",
    catalysts: ["TSM chairman 称 CoPoS 2-3 年内 volume 很大", "CoPoS pilot lines 已经存在", "Serenity 观察到 Visera 已有一定 re-rating", "Serenity 在 Subs 中列出 Favite、GMM、V5、Gudeng、Scientech、Ta Liang、C Sun、GPTC、APT、Chroma 等 CoPoS 外部供应商线索", "这些角色覆盖 inspection / metrology、panel-level alignment、AOI、carriers、wet process、thermal、automation", "TSM 将 autonomous vehicles / robots 视为增长方向"],
    risks: ["需要确认 Visera 的 ticker、市值和 TSM 暴露", "CoPoS 从 pilot 到 volume 仍可能延迟", "CoPoS 外部供应商清单只是研究地图，不等于确认订单或 volume allocation", "多个台股供应商需要逐一核实公司级暴露", "Serenity 将其称为明年 long idea，当前不是最高信心主线"],
    nextChecks: ["确认 Visera 上市主体、ticker、TSM 持股和业务暴露", "找到 TSM chairman 关于 CoPoS 的原始评论", "逐一映射 Favite、GMM、V5、Gudeng、Scientech、Ta Liang、C Sun、GPTC、APT、Chroma 的 CoPoS 暴露和收入敏感性", "梳理 CoPoS 除 TSM 外的供应链受益者", "判断自动驾驶 / 机器人评论是否影响 XFAB 等汽车暴露标的"],
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
    thesis: "Serenity 再次称绿的谐波是中国人形机器人里突出的 component leader，不只是谐波减速器公司；她强调其覆盖高壁垒减速器、行星滚柱丝杠、电机 / 关节等高 BOM 价值部件，并明确 688017 是长线持有框架，不是几天内完成的短线交易。",
    whyItMatters: "这是一个直接的 Physical AI 硬件零部件 thesis。如果人形机器人从原型走向数百万台量产，绿的谐波可能通过多个运动控制核心部件获得可观 BOM 份额，而中国供应链可能主导低成本量产。",
    catalysts: ["Serenity 称绿的谐波是中国机器人板块突出的 component leader", "她提到 Goldman 等西方机构也多次提及其高技术壁垒和 BOM 价值捕获", "暴露于谐波减速器、旋转关节减速器、直线执行器、电机 / 关节和行星滚柱丝杠", "她框架中潜在相关客户包括优必选、智元机器人、Tesla、Figure 等", "Physical AI 与人形机器人规模化量产", "中国证券报报道提升机构关注度"],
    risks: ["市场份额和客户数量需要原始资料确认", "人形机器人量产节奏高度不确定，难以精确建模", "新兴中国公司可能抢占单一零部件份额", "量产后零部件价格和利润率可能下降", "A 股估值和流动性与美股 AI 硬件标的不同", "Tesla / Figure 只是潜在客户框架，不是确认供应关系"],
    nextChecks: ["核实 60% 国内份额和 1800+ 客户说法", "查找 Goldman 等机构对 LeaderDrive 技术壁垒和 BOM 捕获的原文", "估算每台人形机器人中减速器 / 执行器 / 电机的 BOM 价值", "核对 Universal Robots、优必选、智元机器人以及 Tesla / Figure 证据", "查看 688017 估值、收入结构和扩产计划", "跟踪媒体关注是否转化为订单、机构持仓或公司披露"],
  },
  rddt: {
    theme: "AI 时代互联网平台 / 网络效应护城河",
    thesis: "Serenity 重新强调 RDDT，认为它有强劲 earnings beat、FCF、69% 同比收入增长、91.5% gross margin，以及对抗 AI vibe coding 的网络效应护城河。6 月 11 日她又引用 WSB / retail trading 研究，认为社区讨论本身也可能具备早期发现 alpha 的价值。",
    whyItMatters: "RDDT 不是 AI 基建供应链标的，但属于 AI 时代平台型资产：社区网络效应、数据深度、高毛利率和投资讨论数据如果持续，可能被市场低估。",
    catalysts: ["横盘数月后重新获得市场关注", "Serenity 引用 69% YoY revenue growth", "91.5% gross margin 和强 FCF", "她认为 Reddit 网络效应能对抗 AI vibe coding", "她引用 160 万条 WSB 评论研究，称 WSB 在发现 top-performing stocks 方面表现强", "她认为 WSB 早于 RKLB、HOOD 等名字，但期权择时常错"],
    risks: ["财务数据需要用最新 filing 核实", "如果增长放缓，平台估值可能压缩", "不属于 Serenity 当前 CPO / Physical AI 硬件主线", "WSB alpha 研究不等于 RDDT 商业化价值能完全兑现", "社区发现能力强不代表普通用户实际收益稳定"],
    nextChecks: ["核实 RDDT 最新收入增长、毛利率和 FCF", "比较估值、收入增长和利润率", "评估 AI 数据授权、用户增长和广告变现是否可持续", "阅读 Democratization of Retail Trading 原文，区分投资信号质量和 Reddit 公司基本面"],
  },
  "glass-substrate": {
    theme: "先进封装玻璃基板 / AI 加速器材料",
    thesis: "Serenity 引用 TrendForce 时间线，把 glass substrate 作为新的先进封装材料线索：SKC Absolics 预计 H2 2026 first mover，Samsung Electro-Mechanics 预计 H2 2027 进入。",
    whyItMatters: "玻璃基板是 AI 加速器先进封装的相邻瓶颈。如果从 pilot 走向客户 ramp，上游基板与设备公司可能成为除 CPO 之外的另一条 AI 硬件供应链表达。",
    catalysts: ["SKC Absolics H2 2026 first mover 时间线", "Serenity 提到 AMAT / AMD customers 相关线索", "Samsung Electro-Mechanics H2 2027 与 Sumitomo Chemical 合作", "潜在关联 Apple、AVGO 与 hyperscalers"],
    risks: ["时间线来自报告解读，需要原始来源确认", "客户关系可能是潜在或间接暴露，不一定是确认收入", "INTC 2030 路径在她表述中不够确定", "玻璃基板量产可能受良率、成本和封装认证拖累"],
    nextChecks: ["阅读 Serenity 引用的 TrendForce 报告或图表", "确认 SKC Absolics H2 2026 ramp 与 AMAT 设备关系", "核实 Samsung Electro-Mechanics / Sumitomo Chemical 的 H2 2027 计划", "区分 AMD、Apple、AVGO、hyperscaler 线索是披露还是推断"],
  },
  "hbf-tc-bonders": {
    theme: "HBF 存储封装 / TC bonders",
    thesis: "Serenity 在 Subs 中提到 HBF memory wars 可能启动，并把 TC bonders 作为可能立即受益的设备环节；她点名 Hanmi、Hanwha 为 first movers，ASMPT 和 K&S 为 entry players。",
    whyItMatters: "这是存储先进封装设备的新线索。如果 HBF 商业化需要 thermal compression bonding，设备供应商可能早于下游存储放量受益。",
    catalysts: ["HBF 商业化可能拉动 TC bonders", "Hanmi Semiconductor 与 Hanwha Semiconductor 被她称为 first movers", "ASMPT 与 K&S 被她称为 entry players", "相关报告称 TC bonders 可能立即受益"],
    risks: ["HBF 的定义、商业化时间和客户采用仍需确认", "first mover 说法来自报告 / Serenity 框架，需要独立验证", "设备订单节奏可能早于或滞后真实存储量产", "如果报告已广泛传播，部分预期可能已被定价"],
    nextChecks: ["找到 Serenity 引用的 HBF 报告和术语定义", "比较 Hanmi、Hanwha、ASMPT、K&S 的 TC bonder 产品暴露", "检查存储客户认证和订单披露", "把 HBF 与 HBM / 先进存储封装路线图对应起来"],
  },
  "ai-memory": {
    theme: "AI 存储短缺 / HBM 周期",
    thesis: "Serenity 把 MU / AI memory 从短缺观察进一步提升为验证线：她称 MU 像下一个 NVDA，现在市值约 1.23T；同时把 Samsung、SK Hynix、SNDK、EWY 放在同一条 memory theme 里。",
    whyItMatters: "这强化了她“AI 打破传统存储周期”的判断。如果 hyperscaler capex 延续到 2028，高端 DRAM / HBM 的盈利假设可能继续上修。",
    catalysts: [
      "Serenity 称 Micron + memory 预测正在兑现",
      "Samsung / SK Hynix 是她 2025 年开始跟踪的 memory 主线",
      "SNDK 是今年 1 月以来更集中表达 memory theme 的名字",
      "EWY 多头受韩国 memory 走强带动",
      "AI capex 框架中她认为 SK Hynix 等上游半导体不像泡沫"
    ],
    risks: [
      "大幅上涨后估值和拥挤度风险增加",
      "如果供给扩张快于需求，存储仍可能回到周期波动",
      "EWY 不是纯 memory 暴露"
    ],
    nextChecks: [
      "核实 MU 市值、盈利修正和 HBM / DRAM 产能计划",
      "比较 Samsung / SK Hynix 存储价格和 capex 与 2028 hyperscaler 需求",
      "量化 SNDK 和 EWY 对 AI memory 的纯度"
    ]
  },
  "power-800v-dc": {
    theme: "800V DC / 功率半导体众包名单",
    thesis: "Serenity 汇总了社区众包的 800V DC / power semiconductor 标的名单，背景是 NVDA 推动数据中心向 800V DC 架构迁移。6 月 15 日她在 risk-on 讨论中说 WOLF 所在 power semi basket 可能受益于 800VDC acceleration。",
    whyItMatters: "800V DC 是 AI 数据中心供电架构的相邻主题。今天新增的是情绪和主题扩散，不是 WOLF 公司级买入信号；她随后还明确说自己当前没有 WOLF 持仓，仍认为其财务有压力。",
    catalysts: ["Serenity 称 WOLF power semi basket 应受益于 800VDC acceleration", "NVDA 推动数据中心供电架构向 800V DC 迁移", "Morgan Stanley 称 NVDA 否认 800V DC 被推迟的报告", "众包名单包括 IFNNY、ON、Lite-On、VICR、LFUS、VSH、ENPH、NVTS、POWI、AEHR、WOLF、XFAB、300376 等", "市场 risk-on 情绪可能放大功率半导体主题"],
    risks: ["Serenity 明确说自己当前没有 WOLF 持仓，且仍认为其 financials 有 toxic 部分", "Serenity 再次明确部分标的是粉丝推荐，并非她自己的持仓或荐股", "800V DC 和 CPO 时间线可能因技术障碍、客户导入和报告分歧产生高波动", "名单里很多公司只是相邻暴露，800V DC 纯度不同"],
    nextChecks: ["区分 WOLF 自身资产负债表 / 补贴风险和整个 800VDC power semi basket", "阅读 Morgan Stanley 与 SemiAnalysis 对 NVDA 800V DC / CPO 时间线的原始表述", "逐一映射名单公司真实 800V DC 数据中心供电暴露", "确认哪些公司有 AI 数据中心客户，而不只是 EV / 工业电源暴露"],
  },
  "lpk-spacex": {
    theme: "LPK Laser / 玻璃核心基板设备 / LIDE advanced packaging",
    thesis: "Serenity 现在主要把 LPK 看作 glass-core-substrate 设备和 AI advanced packaging 线索，而不只是 SpaceX import-log 供应商。6 月 17 日她再次引用 80% 主要全球玩家选择 LPKF equipment 的说法，并把 Absolics H2 2026、Samsung Electro Mechanics 2027、TSM CoPoS 2028 潜在上游暴露作为 HVM 时间线观察点。",
    whyItMatters: "LPK 的逻辑已经从单一 SpaceX 线索升级到下一代封装设备。关键是 LIDE 工具能不能从 validation 进入 HVM，并转化为 backlog、订单和收入；TSM CoPoS 暴露她也明确说仍未确认。",
    catalysts: [
      "80% 主要全球玩家选择 LPKF equipment 的说法被 Serenity 继续强化",
      "glass substrate 被她称为下一代 packaging shift",
      "Absolics H2 2026 ramp 与 Samsung Electro Mechanics 2027 被列为时间线",
      "TSM CoPoS 2028 潜在上游暴露仍是未确认但值得跟踪的线索",
      "她认为市场可能只是随着 HVM 时间线接近而逐渐定价"
    ],
    risks: [
      "TSM CoPoS 上游暴露仍未确认",
      "80% validation 不等于量产订单规模或时间",
      "LPK 股价已动，市场可能先于基本面确认定价"
    ],
    nextChecks: [
      "找 LPK / LIDE 关于 80% validation 的原始来源",
      "核实 Absolics H2 2026 和 Samsung Electro Mechanics 2027 ramp 时间线",
      "确认 TSM CoPoS 是否有 LPKF / LIDE 工具连接",
      "跟踪 validation 是否转成 backlog、客户名和收入指引"
    ]
  },
  "axti-inp": {
    theme: "InP substrate / AI 光互连上游瓶颈",
    thesis: "AXTI 仍是 Serenity 上游 InP substrate 方法论的代表案例。6 月 16 日她说自己仍持有 AXTI，并回顾当初如何通过供应链映射、市占率资料、高纯铟价格、出口管制和瓶颈博弈推导该 thesis。",
    whyItMatters: "这条更新不是新的 AXTI 买点，而是验证她寻找上游 chokepoint 的研究方法：很多 AI 供应链机会会先出现在 substrate、epiwafer、laser 这类冷门环节，而不是主流 AI 叙事里。",
    catalysts: [
      "Serenity 称自己仍持有 AXTI",
      "Reuters 后续报道 InP substrates 可能影响 AI buildout，被她视为 thesis 验证",
      "研究输入包括 InP 供应链、市占率、高纯铟价格、出口管制和光学公司收购",
      "AAOI/LITE/AXTI 被一起作为 2025 optical rerating 成功案例"
    ],
    risks: [
      "这是回顾性研究验证，不是新的公司级催化",
      "still holding 增加信心色彩，但不消除估值、稀释、中国暴露和材料周期风险"
    ],
    nextChecks: [
      "重读 Reuters InP substrate 报道，并和 AXTI filing、出货、价格对应",
      "继续跟踪高纯铟价格对 AXTI substrate 毛利和需求的影响"
    ]
  },
  "starlink-suppliers": {
    theme: "Starlink 供应商 / trade records 研究",
    thesis: "Serenity 在 Subs 中尝试用 trade records 做新研究风格，并列出 Eson Precision、Lite-On、Meiko、Lens Technology、Compeq、Chicony Power、Foxconn Interconnect、DISCO、E&R 等可能 Starlink direct suppliers。她明确说噪音很多，属于信息发现。",
    whyItMatters: "贸易记录可能比公司材料更早暴露供应关系。围绕 Starlink / SpaceX 的关注度上升时，这类供应商地图有助于寻找硬件、电源、PCB、精密组件和设备端线索。",
    catalysts: ["Serenity 从 trade records 列出一批 Starlink direct supplier 线索", "SpaceX / Starlink 关注度提升供应链挖掘价值", "名单覆盖电源、PCB、精密组件、电子制造和设备相邻环节"],
    risks: ["Serenity 明确说这类记录噪音很多", "出现在 trade records 不等于收入贡献重大", "部分公司体量较大，Starlink 暴露可能对整体基本面不敏感"],
    nextChecks: ["逐一核实 trade records、交易对手和产品类别", "判断供货是否持续、重复且金额可观", "区分直接供应商、分销商和低价值记录"],
  },
  "wf6-peric": {
    theme: "WF6 前驱体气体 / 钨出口管制 / 存储供应链",
    thesis: "Serenity 在 Subs 中把 WF6 作为 TSM、Samsung、SK Hynix、SMIC 相关的潜在瓶颈研究，并称 Peric Special Gases（688146）可能是中国侧主要受益者。6 月 13 日她又把这条线扩展到韩国 Foosung（093370）：日本 WF6 供应受中国钨出口管制冲击，可能影响全球约 25-35% 供应链，外部替代供应商的战略价值上升。",
    whyItMatters: "WF6 是非常上游、很冷门的半导体材料。如果日本相关供应因钨出口管制、Kanto Denka / Central Glass 等产能变化而受扰动，Peric 与 Foosung 这类替代供应商可能获得定价权、认证稀缺性和供应安全溢价。",
    catalysts: ["中国钨出口管制影响 WF6 成本", "WF6 用于 DRAM / NAND", "Serenity 称 Peric 已进入 TSM、Samsung、SMIC 等供应链", "Kanto Denka / Central Glass 相关供应扰动可能造成缺口", "Foosung（093370）约 21% 单日反应为 Serenity 的 WF6 bottleneck thesis 提供市场验证", "Serenity 称前驱体短缺和成本上升可能影响全球 25-35% 供应链", "AI memory 与 foundry 供应链安全提升上游气体关注度"],
    risks: ["Foosung 的价格验证不等于 Peric 的收入弹性已经确定", "WF6 供应扰动、ChemNet 和产能停产信息需要原文验证", "Peric 与 Foosung 的产能、市占率、客户认证和收入弹性需要量化", "Serenity 明确说自己没有 Foosung 持仓，只是发布早期 idea", "出口管制和供应链替代路径变化很快"],
    nextChecks: ["核实 Kanto Denka / Central Glass 是否真的从 2026 年 7 月起永久停产或减少 WF6", "确认 Peric 对 TSM、Samsung、SMIC 的认证和供货范围", "核实 Foosung 的价格反应是否伴随公司公告或行业确认", "比较 Peric 与 Foosung 的产能、原料获取、客户结构和定价权", "估算 WF6 产能份额、价格弹性和收入敏感性"],
  },
  "foosung-wf6": {
    theme: "WF6 前驱体气体 / 韩国存储供应链",
    thesis: "Serenity 新提出 Foosung（093370，约 12 亿美元市值）可能是 WF6 瓶颈的韩国侧重要受益者。她的逻辑是中国对日本钨出口管制扰动日本 WF6 供应，可能影响 SK Hynix、Samsung、TSM 所需供应，而 Foosung 可能成为非中国侧相对纯的替代受益标的。",
    whyItMatters: "Foosung 是 WF6 链条里更偏韩国存储供应链的表达。如果 WF6 供给跟不上存储需求，合格韩国供应商可能获得更强定价权和战略价值。",
    catalysts: ["Serenity 回顾 Foosung 是中国对日本出口管制造成 WF6 瓶颈的主要受益者", "她提到 Foosung 相关线索一天出现约 21% 的价格反应", "中国钨出口管制冲击日本 WF6 供应", "Serenity 称可能影响 SK Hynix、Samsung、TSM 所需的约 25% 供应", "她认为 Foosung 可能是非中国侧最纯的受益标的之一"],
    risks: ["21% 单日反应说明关注度和 timing 正确，不等于可持续利润已经验证", "Serenity 明确说自己没有 Foosung 持仓，只是发布早期 idea", "Foosung 的产能份额、产品结构和客户认证需要原始资料验证", "原材料成本上升不一定全部转化为利润", "韩国中小市值标的存在流动性、汇率和信息披露差异"],
    nextChecks: ["核实 Foosung 的 WF6 产品、产能和客户", "确认 SK Hynix、Samsung 是否依赖 Foosung 或相关特气", "检查 21% 价格反应后是否出现公司公告或行业验证", "对比 Foosung 与 Peric 的产能、原料、认证和定价权", "估算 WF6 价格上涨对 Foosung 收入和利润的敏感性"],
  },
  "anthropic-neocloud-colo": {
    theme: "Anthropic 数据中心租赁 / Neocloud colocation",
    thesis: "Serenity 认为 Anthropic 寻求首批数据中心 leases 的消息可能利好 Neocloud colo sector，并点名 WULF、CIFR、WYFI、HUT 等潜在相关标的。她引用 The Information 称 Anthropic 已与美国开发商签署十多份 LOI。",
    whyItMatters: "如果 frontier AI lab 开始直接锁定大规模数据中心容量，具备电力和机房资源的 neocloud / colo 公司可能获得需求验证，不再只是 crypto 或泛 hosting 叙事。",
    catalysts: ["Anthropic 正在寻求首批数据中心 leases", "据她引用，Anthropic 已与美国开发商签署十多份 LOI", "WULF、CIFR、WYFI、HUT 等可能获得 sector read-through"],
    risks: ["她也说明具体受益公司尚未被点名", "LOI 不等于最终 lease 或收入确认", "colo 标的受融资、电力接入和 crypto beta 影响很大", "需要区分真正的 Anthropic 交易对手和板块情绪上涨"],
    nextChecks: ["阅读 The Information 原文，看是否点名开发商或地点", "核实 WULF、CIFR、WYFI、HUT 的电力、机房、融资和租赁 pipeline", "判断哪些公司可能真正匹配 Anthropic 需求"],
  },
  "spcx-liquidity": {
    theme: "SpaceX / SPCX mega-IPO 流动性与 AI 软件可选项",
    thesis: "Serenity 继续把 SPCX / SpaceX 当成未来感资产、流动性和估值事件。6 月 16 日她提到 SPCX 市值约 2.5T，又转发/评论 SPCX 以 600 亿美元收购 Cursor 的消息，猜测 AI coding 网络效应和训练数据价值可能被高估值定价。",
    whyItMatters: "SPCX 不是供应链 thesis，而是市场结构和 sentiment 观察。Cursor 角度把 SpaceX/SPCX 的未来资产叙事延伸到 AI 软件和数据，但交易和估值需要独立确认。",
    catalysts: [
      "Serenity 称 SPCX 约 2.5T 市值",
      "Cursor 600 亿美元收购消息带来 AI coding / 数据价值叙事",
      "网络效应和模型改进数据可能成为估值理由",
      "美国市场追逐未来感资产的情绪继续支撑 SPCX 框架"
    ],
    risks: [
      "Cursor 交易和 600 亿美元估值需要原始来源确认",
      "SPCX 市值、流通盘和交易结构需市场数据核实",
      "未来感资产情绪可能放大上行和回撤"
    ],
    nextChecks: [
      "确认 SPCX 是否真的收购 Cursor、条款和战略理由",
      "核实 SPCX 市值、float 和流动性",
      "观察 SPCX 情绪是否外溢到 AI 软件、space 和高 beta futurism 交易"
    ]
  },
  alrib: {
    theme: "MBE 设备 / quantum dot 与硅光工具链",
    thesis: "Serenity 新把 ALRIB / Riber 列入欧洲核心多头，称其在 MBE 设备上近似 monopoly，并暴露于 quantum、quantum dot 和 silicon photonics。",
    whyItMatters: "这是本次新增的早期欧洲硬件卡片。如果 MBE 在量子点或硅光产能中变得关键，低关注度的设备供应商可能被重估；但公司级证据还很薄。",
    catalysts: [
      "Serenity 将 ALRIB 列为欧洲核心多头",
      "她称 Riber 在 MBE 领域近似 monopoly",
      "暴露于 quantum / quantum dot / silicon photonics",
      "她称该线索来自 Microsoft Quantum 采购机器的 OSINT",
      "她认为当前市值下相对 de-risked"
    ],
    risks: [
      "新线索，证据仍薄",
      "Riber 市占率、产品角色和客户集中度需要验证",
      "Microsoft Quantum 采购线索来自 OSINT，需独立确认",
      "quantum 和 silicon photonics 需求转化为设备订单可能较慢"
    ],
    nextChecks: [
      "核实 Riber ticker、市值和 MBE 产品线",
      "检查订单、客户和市场份额原始披露",
      "验证 Microsoft Quantum 或其他 hyperscaler 采购线索",
      "映射 MBE 工具与 quantum dot / silicon photonics 生产关系"
    ]
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

function ideaSearchScore(idea, query) {
  if (!query) return 0;
  const primaryFields = [idea.id, idea.ticker, idea.name].map(normalizeSearch);
  const relatedTags = (idea.evidence ?? []).flatMap((item) => [item.quote, item.url]).map(normalizeSearch);
  if (primaryFields.some((field) => field === query || field.split(" ").includes(query))) return 100;
  if (primaryFields.some((field) => field.includes(query))) return 80;
  if ((idea.catalysts ?? []).map(normalizeSearch).some((field) => field.includes(query))) return 60;
  if (relatedTags.some((field) => field.includes(query))) return 40;
  return 0;
}

function filteredIdeas() {
  const query = normalizeSearch(state.query);
  return state.ideas
    .filter(ideaMatches)
    .sort((a, b) => {
      if (query) {
        const score = ideaSearchScore(b, query) - ideaSearchScore(a, query);
        if (score) return score;
      }
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

function renderEvidence(idea) {
  const evidence = idea.evidence ?? [];
  if (!evidence.length) return "";
  const hasMany = evidence.length > 3;
  return `
    <section class="detail-section evidence-section${hasMany ? " collapsed" : ""}">
      <div class="section-title-row">
        <h4>来源依据</h4>
        ${hasMany ? `<button class="section-toggle evidence-toggle" type="button">展开全部 ${evidence.length} 条</button>` : ""}
      </div>
      <div class="detail-list evidence-list">
        ${evidence
          .map(
            (item, index) => `
              <article class="evidence-card${index >= 3 ? " extra-evidence" : ""}">
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
    ${renderEvidence(idea)}
  `;
  els.detail.querySelector(".detail-close").addEventListener("click", closeDetailSheet);
  els.detail.querySelector(".evidence-toggle")?.addEventListener("click", (event) => {
    const section = event.currentTarget.closest(".evidence-section");
    const collapsed = section.classList.toggle("collapsed");
    event.currentTarget.textContent = collapsed ? `展开全部 ${idea.evidence.length} 条` : "收起来源";
  });
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
