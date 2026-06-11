const tierLabels = {
  focus: "重点关注",
  watch: "跟踪观察",
  speculative: "观望",
  archive: "暂不纳入",
};

const zhCopy = {
  sive: {
    theme: "CPO / 硅光激光器瓶颈",
    thesis: "Serenity 将 SIVE 从 GFS / Ayar 激光器供应线索扩展为 CPO 加航天国防双重瓶颈。6 月 9 日，Sivers 获得 ALL.SPACE 价值 820 万美元的 Ka-band beamforming IC 量产订单；她同时继续关注 Jabil 等可插拔光模块厂商带来的 photonics 放量。",
    whyItMatters: "这条逻辑现在覆盖两条稀缺技术链：AI 光互连所需的 CW laser，以及 LEO / 多轨卫星通信所需的 beamforming IC。ALL.SPACE 订单是直接量产证据，但更大型国防主承包商的后续订单和 JBL 放量仍是前瞻判断。",
    catalysts: [
      "ALL.SPACE 价值 820 万美元的 Ka-band beamforming IC 量产订单",
      "订单用于 LEO / 多轨卫星通信，验证 SIVE 的航天国防供应链暴露",
      "Serenity 期待 Jabil 等可插拔光模块厂商推动 photonics 端放量",
      "Serenity 称 JP Morgan 对 Sivers 持股从约 0.4% 升至 5%+",
      "Serenity 称 JP Morgan 持股消息后 SIVE 仅涨约 3.36%，她认为市场反应偏弱",
      "Serenity 称 SIVE 是她仅次于 AAOI 的 CPO / photonics 最喜欢标的",
      "BlackRock 因 index listing 成为 SIVE 被动持有人",
      "Fidelity Research 开始建立 Sivers 直接持仓",
      "Serenity 将 JP Morgan、BlackRock、Fidelity 串成美国机构验证 Sivers photonics 暴露的信号",
      "Serenity 称 LITE、AAOI、SIVE 等 optical players 在 selloff 后回升合理",
      "Serenity 6 月 11 日再次简短确认 I like SIVE",
      "Serenity 将 SIVE 类比 NBIS / RKLB 的机构进场周期，认为 retail 先于机构发现架构转变",
      "她称 SIVE 曾几乎没有美国机构持股，现在 JP Morgan、Fidelity Research 等 active institutions 出现在 cap table",
      "Protean Funds 质疑 SIVE CPO 应用后，Serenity 用 GFS reference laser 逻辑反驳",
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
    risks: ["820 万美元订单已公开，但后续国防主承包商订单并不确定", "需要核实订单交付节奏、收入确认与利润率贡献", "JP Morgan、BlackRock、Fidelity 持股变化必须用原始持股文件确认", "BlackRock 持股可能只是被动指数跟踪，不等于主动看多", "短期股价可能不会立即反映机构持股消息", "Serenity 对 retail front-run institutions 的解释属于市场结构判断，需要和公司级证据分开", "I like SIVE 这类短帖只增加信心色彩，不是新增基本面证据", "Protean Funds 的反方观点也需要直接阅读", "H2 2026-2028 的 CPO TAM 数字需要核实来源与口径", "Jabil、Ayar、Marvell Celestial、Lightmatter 的 primary / sole-source 说法仍需原始披露确认", "Win Semi 产能节奏和 2027/2028 精确输出仍未知", "insider selling 需要核对真实公告、时间和持股变化", "空头回补叙事会提高拥挤度和波动", "NASDAQ listing 表述需要独立核实", "CPO 量产节奏可能慢于资格认证节奏", "社交媒体关注后波动很高", "客户关系与收入兑现需要独立核实"],
    nextChecks: [
      "阅读 Sivers / ALL.SPACE 原始公告，核实交付、收入确认和利润率影响",
      "核实 YSS 收购关系以及是否披露更多航天国防项目",
      "核实 JP Morgan 最新 Sivers 持股比例和文件日期",
      "核实 BlackRock 与 Fidelity Research 的最新 Sivers 持股文件，并区分被动持仓和主动建仓",
      "把 SIVE 公司级证据与 Serenity 的 retail / institution cycle 框架分开验证",
      "跟踪 JP Morgan、Fidelity Research 后是否继续出现 active institutional ownership 增加",
      "对比 JP Morgan 过 5% 前后 Sivers 股东名册和流通盘变化",
      "阅读 Protean Funds 对 SIVE 的原始质疑",
      "追溯 91B / 141B CPO TAM 数字的报告来源",
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
    catalysts: ["EU CHIPS Act 2.0 明确支持 photonics、CPO / interconnects 和 silicon photonics", "Serenity 将 XFAB 与 POET 估值对比，认为 XFAB 资产更深但估值更低", "TSM 对自动驾驶 / 机器人增长的评论可能验证 XFAB 等汽车暴露标的", "Serenity 称 XFAB 正在建设相对 TSEM / GFS 的欧洲 silicon photonics foundry alternative", "她提到 XFAB 有欧洲支持和 NVDA evaluations", "她给出的时间线是 2026 年 10 月左右完成 development、2027 production、2028 mass production", "EU Chips Act 2 对需求 / 资金的支持", "Serenity 称 XFAB 与 SIVE 被 EU Industry Policy Blueprints 点名", "photonixFAB 验证", "NVDA 与 NOK 在硅光方向的活动"],
    risks: ["EU 政策支持可能需要 3-15 个月才转化为公司级公告", "即使 TSM 评论暗示底部，XFAB 仍受汽车周期拖累", "商业化前验证未必快速转化为收入", "Serenity 明确把 XFAB 称为较早期，需要对商业化 take a leap of faith", "Tower 是更去风险的相邻路线，可能稀释 XFAB 的风险收益吸引力", "需要区分补贴与确定性需求"],
    nextChecks: ["阅读 EU CHIPS Act 2.0 proposal 和 impact analysis，确认 XFAB / SOI / photonics 原文", "核实 XFAB 2026 年 10 月 development milestone、2027 production 与 2028 mass production 的披露依据", "比较 XFAB 与 Tower 作为 silicon photonics foundry route 的风险收益", "比较 POET 合同经济性与 XFAB foundry 产能及资产重置价值", "跟踪 TSM 自动驾驶 / 机器人评论是否体现在 XFAB 订单趋势", "核实 NVDA / NOK 验证细节", "阅读 photonixFAB 项目披露", "比较 P/B 与资产重置成本假设"],
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
    catalysts: ["Serenity 将 toxic financing structure / float dynamics 放在早期机会筛选第一位", "NBIS 相比 IREN、CRWV 有更好的融资结构", "Avride 与 ClickHouse 暴露带来资产组合重估可能", "AI 基础设施需求仍支撑 Neocloud 主题"],
    risks: ["大涨后的回顾性验证不等于新的买入点", "Neocloud 标的对融资条件和 AI capex 情绪高度敏感", "IREN 这类大规模 ATM 可能在上涨中持续卖出，形成结构性 overhang", "子公司和持股价值需要独立核实"],
    nextChecks: ["核实 NBIS 当前债务、现金和融资结构", "比较 CRWV 利息负担、IREN ATM 稀释与 NBIS 资本结构", "检查 IREN、CRWV、NBIS 当前 ATM 授权、股本变化和 float", "量化 Avride 和 ClickHouse 持股 / 估值贡献"],
  },
  xintech: {
    theme: "TSM 测试子公司 / COUPE 供应商线索",
    thesis: "Serenity 称 Xintec 是 TSMC packaging / test 子公司，自己有持仓；6 月 5 日她进一步说 TSM COUPE H2 2026 量产，如果 TSMC 倾向垂直整合，量可能流向 Xintec。",
    whyItMatters: "如果 COUPE 相关测试 / 封装需求真实，小型 TSM 关联公司可能提供更精准暴露。她短期认为 Xintec 比 VisEra 更有吸引力，但公开 volume 数据仍有限。",
    catalysts: ["TSM COUPE H2 2026 量产时间线", "TSMC 通过子公司积极追求 CPO 机会的表述", "Serenity 认为未来几个月 Xintec 比 VisEra 更有吸引力", "报告确认 TSM / COUPE 关联", "Serenity 称 Xintec 随台湾 CPO 多头启动，当日约涨 10%", "TSM 先进封装 / 光学供应链建设", "测试需求扩张"],
    risks: ["Serenity 承认公开披露中 Xintec 承接 COUPE volume 的数字有限", "帖子中 COUPE 关联仍需原始资料确认", "主题较窄且公开披露有限", "需要独立映射收入来源"],
    nextChecks: ["找到 TSMC 通过 Xintec 等子公司追求 CPO 机会的原始资料", "核实 COUPE H2 2026 量产时间线", "比较 Xintec 与 VisEra 的业务暴露、估值和收入敏感性", "找到她提到的那份报告", "确认 Xintech 股权关系与对 TSM 的收入依赖", "判断 COUPE 是否会带来测试量增长"],
  },
  aaoi: {
    theme: "800G / 1.6T 光模块 / 美国光学产能",
    thesis: "Serenity 将 AAOI 升级为更高信心的光模块线索：她称自己从 28 美元开始持续 averaging up，并认为如果公司执行顺利，可能 double 或 triple。",
    whyItMatters: "AAOI 是 AI 数据中心带宽需求的直接表达。新增重点不是单纯 2027 产能，而是 H1 明年可能出现 800G / 1.6T 光模块瓶颈，从而带来 ASP 和利润率超预期。",
    catalysts: ["市场回调时 Serenity 仍强调看公司 projection，而不是交易 Fed 概率", "她用 AAOI H1 2027 约 471M projection 作为例子", "Serenity 称 LITE、AAOI、SIVE 等 optical players 在 selloff 后回升合理", "Serenity 称自己从 28 美元开始持续加仓 AAOI", "hyperscaler 升级到 1.6T 后，sovereign / Tier-2 AI DC 可能继续吸收 800G 产能", "AMD / NVDA 相关客户对话传闻，仍需核实", "如果 H1 明年光模块成为瓶颈，可能出现涨价和 margin expansion", "2027 年上半年产能 / 收入爬坡", "光学超级周期关注", "光学同业重估"],
    risks: ["加息概率上升和报告驱动的 CPO 时间线担忧仍可能压制高 beta 光学标的", "AMD / NVDA 对话仍是 analyst rumors，需要验证", "美国最大产能和垂直整合执行存在风险", "如果规模化后 ASP 如市场预期下行，利润率上行逻辑会削弱", "市值目标较激进", "产能爬坡与客户时间需要验证", "光学标的整体波动很大"],
    nextChecks: ["核实 AAOI H1 2027 约 471M projection 的来源和口径", "观察 AI 半导体回调中光学标的是否保持相对强势", "跟踪 AAOI 订单、产能、客户和 800G / 1.6T ASP 是否继续验证 optical recovery", "核实 AAOI 产能目标和垂直整合表述", "检查最新客户集中度及 AMD / NVDA 传闻来源", "比较分析师对 800G / 1.6T ASP 的假设", "核实 H1 2027 收入预测", "检查产能扩张与客户承诺", "与 SIVE / FOCI 的风险收益对比"],
  },
  rpi: {
    theme: "AI 需求兑现 / 欧洲硬件",
    thesis: "Serenity 将 Raspberry Pi 当作 AI 需求真实兑现的案例：她称 RPI 从她 thesis post 后由 283 美元涨到 983 美元，并引用 AI 相关需求推动 core profit 显著高于预期。",
    whyItMatters: "RPI 不是 CPO 组件股，但它能验证 Serenity 的 broader AI 需求框架：AI 增量可能流向被忽视的欧洲硬件和非美上市资产，而不仅是美国大盘 AI 股。",
    catalysts: ["公司称强 AI 相关需求可能使核心利润显著高于市场预期", "Serenity 称 RPI 较她 thesis post 后上涨约 247%", "欧洲硬件资产如果继续兑现 AI 需求，可能出现重估"],
    risks: ["这是大涨后的回顾性验证，不是新的买点", "需要区分一次性 AI 需求惊喜和可持续收入增长", "247% 上涨后估值可能已经反映较多预期"],
    nextChecks: ["核实公司关于 AI 需求和利润超预期的原始公告", "检查 RPI 当前估值与更新后利润指引", "判断 AI 需求是持续订单、客户集中，还是一次性拉动"],
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
    catalysts: ["LITE 财报被 Serenity 解读为 CW laser bottleneck 信号", "Serenity 称 Nvidia 与 Lumentum 高管仍看好 CPO，且时间线有加速信号", "Serenity 称 LITE、AAOI、SIVE 等 optical players 在 selloff 后回升合理", "AVGO AI networking 电话会对光学 / networking 需求形成 read-through", "光学周期延续", "CPO 激光器供应商角色", "云厂商 AI capex 扩张"],
    risks: ["光学主题可能已有更多定价", "相对小票弹性较低", "CPO 时间线仍可能被分析师报告和技术障碍反复扰动", "需要新的基本面证据"],
    nextChecks: ["检查 LITE 财报电话会中 CW laser / EML 产能的原文", "核实 Nvidia 与 Lumentum 高管关于 CPO 时间线的原始表述", "核实 GFS 演示中供应商表述", "比较 LITE 与 SIVE 估值", "跟踪 AI 光学收入贡献"],
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
    thesis: "SOI 留在跟踪观察，因为 Serenity 把它与 SIVE 并列为上游硅光瓶颈：SIVE 是 CPO lasers，SOI 是 silicon photonics substrates。6 月 7 日她又把 NVDA CEO 对 silicon photonics / optical networking 的评论视为 SIVE 到 SOI 的正向 read-through。",
    whyItMatters: "如果 AI 基础设施增长真的带来对 silicon photonics 和 optical networking 的“超想象供应量”需求，那么 SOI / Soitec 这类衬底供应商可能与 SIVE 等更直接 CPO 标的一起受益。",
    catalysts: ["NVDA CEO 点名 silicon photonics / optical networking，被 Serenity 解读为 SOI read-through", "Serenity 用 Goldman hyperscaler capex 上调支撑上游瓶颈资产", "EU CHIPS Act 2.0 impact analysis 提到欧洲 SOI wafer 强项", "此前市场低估", "欧洲半导体动量"],
    risks: ["NVDA 对 silicon photonics 的评论是行业 read-through，不是 SOI 直接客户订单", "SOI 逻辑比 SIVE 间接，Serenity 给出的公司级细节较少", "需要确认 Serenity 所指 SOI 对应的具体上市标的", "已经大幅上涨", "相对当前 CPO 主线可能偏旧"],
    nextChecks: ["确认 Serenity 所指 SOI 的具体上市主体 / ticker", "核实 SOI / Soitec 是否明确暴露于 Nvidia 相关 silicon photonics 供应量", "阅读 EU CHIPS Act 2.0 impact analysis 中 Soitec / Siltronic 相关原文", "检查 silicon photonics substrate 需求是否已进入公司指引", "确认 SOI 是否与光子或 AI 供应链有关"],
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
    thesis: "Serenity 引用 NVDA CEO 对 memory shortage 可能持续多年的警告，认为 AI 基础设施需求正在打破传统存储周期；6 月 9 日她又以 KOSPI、Samsung 和 SK Hynix 在早前“极端泡沫”警告后继续上涨，反驳只看机构卖出评级的做法。",
    whyItMatters: "这把她的 AI 基建框架从算力和 CPO 延伸到存储供给。如果 HBM 与高端 DRAM 进入结构性紧缺，领先存储厂商的盈利假设可能需要上修。",
    catalysts: ["NVDA CEO 警告 memory shortage 可能持续多年", "AI infrastructure scaling demand 继续压迫存储供应", "MU、Samsung、SK Hynix 的盈利预测可能上修", "后续 Nvidia 可能继续发布 memory / optical networking 相关信息"],
    risks: ["如果供给扩张快于预期，存储仍可能回到周期波动", "EWY 是韩国 ETF，不是纯 Samsung / SK Hynix 暴露", "NVDA 评论是行业信号，不是 MU 或 EWY 的公司指引", "市场可能已经部分定价 HBM 紧缺"],
    nextChecks: ["核实 NVDA CEO 关于 memory shortage 的原始发言", "比较 MU、Samsung、SK Hynix 的 HBM 产能计划和需求预测", "区分 HBM 紧缺与普通 DRAM / NAND 周期", "检查 EWY 权重，看是否适合作为 Samsung / SK Hynix 利润上修表达"],
  },
  "power-800v-dc": {
    theme: "800V DC / 功率半导体众包名单",
    thesis: "Serenity 汇总了社区众包的 800V DC / power semiconductor 标的名单，背景是 NVDA 推动数据中心向 800V DC 架构迁移；6 月 10 日她又引用 Morgan Stanley 称 NVDA 否认 800V DC 推迟报告，并认为 CPO / 800V selloff 是传闻驱动的过度反应。",
    whyItMatters: "800V DC 是 AI 数据中心供电架构的相邻主题。新增争议说明这条线索会被报告、时间线和技术障碍反复扰动；名单适合当作线索地图，而不是已验证 thesis。",
    catalysts: ["NVDA 推动数据中心供电架构向 800V DC 迁移", "Morgan Stanley 称 NVDA 否认 800V DC 被推迟的报告", "Serenity 认为 SemiAnalysis 相关说法与 Computex 检查相反，CPO / 800V selloff 反应过度", "众包名单包括 IFNNY、ON、Lite-On、VICR、LFUS、VSH、ENPH、NVTS、POWI、AEHR、WOLF、XFAB、300376 等", "300376.SZ 被列入名单后上涨 20%，显示社媒关注会推动短线波动"],
    risks: ["Serenity 再次明确 300376 等标的是粉丝推荐，并非她自己的持仓或荐股", "Serenity 明确说这只是众包名单", "Morgan Stanley 与 SemiAnalysis 说法需要阅读原始报告后再判断", "800V DC 和 CPO 时间线可能因技术障碍、客户导入和报告分歧产生高波动", "名单里很多公司只是相邻暴露，800V DC 纯度不同", "小盘股可能先被注意力推动，而不是基本面兑现", "名单混合功率半导体、储能、燃料电池、设备和相邻标的，纯度较低"],
    nextChecks: ["阅读 Morgan Stanley 与 SemiAnalysis 对 NVDA 800V DC / CPO 时间线的原始表述", "逐一映射名单公司真实 800V DC 数据中心供电暴露", "确认哪些公司有 AI 数据中心客户，而不只是 EV / 工业电源暴露", "区分纯功率半导体受益者和相邻 / 无关标的", "在公司证据核实前，把 300376.SZ 的涨停视为波动提醒"],
  },
  "lpk-spacex": {
    theme: "SpaceX 供应商 / 进口记录线索",
    thesis: "Serenity 称 LPK 是一个不太被注意的 SpaceX supplier，可在 SpaceX US import logs 中看到；她同时披露自己持有 LPK / NFA，但也说明还不确定具体合同内容。",
    whyItMatters: "如果 SpaceX / Starlink 相关供应链在 IPO 关注下被重估，进口记录可能提前暴露一些直接供应商关系。但这类线索必须先确认产品、频率、金额和收入敏感性。",
    catalysts: ["SpaceX US import logs 中出现 LPK 的直接供应关系", "SpaceX IPO 相关关注提升供应链挖掘热度", "Serenity 披露持有 LPK / NFA"],
    risks: ["具体合同内容未知", "进口记录不等于重大收入贡献", "SpaceX IPO 主题可能带来短线拥挤和波动"],
    nextChecks: ["核实 SpaceX import logs 原始记录", "确认 LPK 供货产品、发货频率和金额", "判断 NFA 是否也有直接或相邻暴露"],
  },
  "axti-inp": {
    theme: "InP substrate / AI 光互连上游瓶颈",
    thesis: "Serenity 引用 Reuters 新报告称中国对 InP 的控制威胁 AI data center buildout，并回顾自己此前关于 AXTI / SMTOY 控制全球 InP substrate、可能成为 AI 光互连瓶颈的判断。",
    whyItMatters: "InP substrate 位于激光器和光通信链条上游。如果未来 NVDA、Google TPU、Meta、Microsoft、Amazon 等 AI 集群需要大量 InP-based lasers，上游基板集中度可能成为关键瓶颈。",
    catalysts: ["Reuters 报道把 InP 供应链风险推到台前", "Serenity 此前把 AXTI / SMTOY 视为 InP substrate 关键控制点", "AI optical networking 与 hyperscaler 集群扩张可能拉动 InP 需求"],
    risks: ["Reuters 报道和市占率数字需要原文验证", "AXTI 对 AI 光互连需求的收入弹性还需量化", "中国暴露、出口限制和材料周期会增加复杂度"],
    nextChecks: ["阅读 Reuters 原文并提取 InP 供应链断点", "核实 AXTI / SMTOY InP substrate 市占率", "把 InP substrate 需求映射到 CPO / 光模块 / hyperscaler 时间线"],
  },
  "starlink-suppliers": {
    theme: "Starlink 供应商 / trade records 研究",
    thesis: "Serenity 在 Subs 中尝试用 trade records 做新研究风格，并列出 Eson Precision、Lite-On、Meiko、Lens Technology、Compeq、Chicony Power、Foxconn Interconnect、DISCO、E&R 等可能 Starlink direct suppliers。她明确说噪音很多，属于信息发现。",
    whyItMatters: "贸易记录可能比公司材料更早暴露供应关系。围绕 Starlink / SpaceX 的关注度上升时，这类供应商地图有助于寻找硬件、电源、PCB、精密组件和设备端线索。",
    catalysts: ["Serenity 从 trade records 列出一批 Starlink direct supplier 线索", "SpaceX / Starlink 关注度提升供应链挖掘价值", "名单覆盖电源、PCB、精密组件、电子制造和设备相邻环节"],
    risks: ["Serenity 明确说这类记录噪音很多", "出现在 trade records 不等于收入贡献重大", "部分公司体量较大，Starlink 暴露可能对整体基本面不敏感"],
    nextChecks: ["逐一核实 trade records、交易对手和产品类别", "判断供货是否持续、重复且金额可观", "区分直接供应商、分销商和低价值记录"],
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
