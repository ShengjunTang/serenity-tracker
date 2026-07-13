const tierLabels = {
  focus: "重点关注",
  watch: "跟踪观察",
  speculative: "观望",
  archive: "暂不纳入",
};

const zhCopy = {
  sive: {
    theme: "CPO / 硅光激光器瓶颈",
    thesis: "Serenity 现在把 SIVE 看成已经扛过一轮 panic test、且同时得到管理层和外部渠道强化的 photonics chokepoint。7 月 10 日的 insider buy 与“roadmap 未坏”先打底；接着 7 月 11 日到 12 日，Rosenblatt 又把近期 optical selloff 定性为更多来自 CPO delay / China capacity 恐慌，而不是 fundamentals 真被打穿，并继续把 ultra-high-power CW 视作长期 CPO 的理想架构；订阅读到的 channel check 也说中国在 200G EML 与 high-power CW 上仍明显落后。到 7 月 12 日，Serenity 甚至直接点名这种靠供应链细节制造恐慌的 bear-post 激励结构，说明她认为 thesis 还在、只是情绪被来回博弈。",
    whyItMatters: "这让 SIVE 不再只是“CEO 抄底 + 融资完成”的一段式 rerating，而更像 scarcity + architecture 被反复验证的组合。若西方 CW 激光器产能确实仍稀缺，且 analyst / channel checks 都指向“没有真正的 CPO process delay”，那么 SIVE 更有机会从社媒高信念票走向机构重新建仓；反过来，若 VCSEL 过渡路径、国产替代或量产节奏变化快于预期，波动依然会很大。",
    catalysts: [
      "7 月 10 日出现三笔 insider buys，其中 CEO 场内买入约 100 万 SEK",
      "完成 7 亿 SEK、57 SEK 定价且超额多倍认购的机构融资",
      "未来数个季度内完成 Nasdaq 上市流程的正式时间线",
      "Serenity 强调 photonics 主线未坏，LITE 仍接近未来两年售罄，SIVE 仍沿 GFS / JBL / POET / Ayar 路径推进",
      "Rosenblatt 认为即便单颗 XPU 所需 transceiver 数下降，只要 XPU 数量增长更快，总光学需求仍会上升",
      "Rosenblatt 把 VCSEL 视作 NPO / 短距阶段的 bridge，但仍把 ultra-high-power CW 视作长期 CPO 理想架构",
      "订阅 channel check 称中国仍缺少可工作的 200G EML，并离 NPO / CPO 所需 high-power CW 仍有距离",
      "Serenity 认为近期围绕 NVDA / TSM 供应链的延迟噪音，更多是在打 sentiment，而不是在证伪 photonics 主线",
      "GFS reference laser、JBL 量产 read-through 与 Ayar / Nvidia 生态映射仍是放大器",
      "她继续把 AAOI 与 SIVE 列为最喜欢的激光公司，认为收入空间可从激光器扩展到模块、引擎和 ELS",
      "photonics 主题仍被视作极早期，大部分 revenue ramp 可能在 2027 H1/H2 才开始"
    ],
    risks: [
      "融资虽然超额认购，但仍有稀释，且必须转成真实激光器/放大器产能与收入",
      "CEO/管理层买入能改善信号，但并不自动等于客户放量和 2027 收入兑现",
      "Nasdaq 时间线仍需正式 milestones、filings 和交易所步骤确认",
      "围绕供应链的 bear-post / rumor 交易能在很长时间内压过 fundamentals，因为公司往往无法公开反驳保密细节",
      "若 VCSEL 过渡路径或中国激光器追赶速度快于预期，西方 CW scarcity premium 可能被压缩",
      "更现实的风险可能不是 process 被推翻，而是 volume ramp 一再后移、导致收入确认继续延后",
      "GFS / JBL / Ayar / Lightmatter 等客户映射大多仍需一手资料确认",
      "2027 ramp 时间线意味着市场预期可能领先收入几个季度",
      "光学主线即便方向没坏，SIVE 仍很容易受宏观、流动性和短线情绪冲击",
      "仍需要看到 SIVE 具体订单、模块 / 光引擎收入或 margin 证据"
    ],
    nextChecks: [
      "阅读 7 月 10 日 insider filing，确认 CEO 与另外两笔增持的金额、价格和持股变化",
      "跟踪 Nasdaq 上市的正式时间点、顾问和公司披露",
      "阅读 Rosenblatt 关于 AAOI / AMZN RNG / MRC / VCSEL 的原始材料，拆开 sell-side 模型和 Serenity 的再演绎",
      "核实中国激光器在 200G EML 与 high-power CW 上的 channel-check 说法，尽量找产业或供应商一手旁证",
      "跟踪所谓 CPO timing stretch 是否真的体现在客户 capex、产能或 production guidance 中，而不是变成 process delay",
      "核实 GFS reference design、JBL read-through 与 Ayar 供应关系是否在一手资料中被直接点名",
      "跟踪 SIVE 是否披露光模块、光引擎或 ELS 组件收入",
      "核实 2027 H1/H2 ramp 是否被客户项目、产能指引或 filings 支持"
    ]
  },
  foci: {
    theme: "CPO FAU / 光学组件",
    thesis: "Serenity 将 FOCI 放在 TSM COUPE 与 CPO 光学组件链条中，具体角色是 FAU 与光学组件。",
    whyItMatters: "这是用台股中小市值公司表达 CPO 光学组件供应链主题的一种方式。6 月 19 日她也承认 FOCI 等台湾 CPO 多头在虚假 CPO delay 报告冲击后仍明显亏损，说明 timing 和流动性风险很大。",
    catalysts: ["TSM COUPE 与 AI 光学市场报道", "Serenity 称 FOCI 随台湾 CPO 多头启动，当日约涨 10%", "CPO 供应链放量", "光互连带动 FAU 需求", "Nvidia 已反驳 CPO delay 说法，但相关台股仍受报告冲击"],
    risks: ["实际 COUPE 暴露需要确认", "可能存在散户驱动的价格波动", "台股小盘流动性与估值风险", "Serenity 6 月 19 日确认 FOCI 等 Taiwan CPO longs 短期仍 heavily red"],
    nextChecks: ["核实 FOCI 客户暴露与 FAU 收入占比", "阅读 UDN 报道和公司公告", "跟踪月营收是否加速", "观察公司级订单能否修复 CPO delay 报告造成的 drawdown"],
  },
  msscorp: {
    theme: "CPO 检测 / 良率",
    thesis: "Serenity 将 MSSCorp 描述为 CPO 供应链里的检测与良率控制环节，并表示自己曾继续摊低成本。",
    whyItMatters: "如果 CPO 放量，检测与良率瓶颈可能成为关键环节。6 月 19 日她把 MSSCorp 放入被虚假 CPO delay 报告重创的台湾 CPO longs，说明 thesis 未坏不等于短期价格能修复。",
    catalysts: ["未来 18 个月 CPO 放量", "Serenity 称仍在等待 MSSCorp 跟随台湾 CPO 多头补涨", "专利 / 检测护城河叙事", "TSM COUPE 光学市场关注度", "Nvidia refuted CPO-delay report 后，若订单数据跟上可能修复估值"],
    risks: ["专利护城河说法需要验证", "可能早于真实收入放量", "小盘流动性与社媒拥挤风险", "虚假报告和 timing 仍可造成较大 drawdown"],
    nextChecks: ["检查专利组合与检测产品范围", "验证 TSM / COUPE 关联", "跟踪 CPO 样品放量后的收入和利润率变化", "观察是否有订单 / 月营收修复市场对 delay 的担忧"],
  },
  xfab: {
    theme: "欧洲硅光代工平台",
    thesis: "7 月 6 日这轮更新让 XFAB 不再只是“欧洲 sovereign AI / PhotonixFab 叙事”里的潜在错配。Serenity 转述 Kepler 将 X-FAB 上调至 Buy，理由包括 Melexis 需求持续走强、AI 带来 SiC/GaN/photonics 的结构性增长，以及公司 2027 年 EV/EBITDA 仅约 4.8 倍、明显低于 specialty foundry 同业中位数约 14.5 倍。她仍保留 silicon photonics 的长期可选性框架，但现在多了一层更接近 sell-side rerating 的现实抓手。",
    whyItMatters: "这让 XFAB 从单纯的“市场没看懂”故事，变成一条双引擎逻辑：短期如果汽车/特色代工基本面触底，估值有相对修复空间；中长期若 photonixFAB 和 silicon photonics 暴露转成真实客户/项目，光学可选性才会进一步放大。换句话说，证明门槛比纯政策故事低了一些，但公司级订单和利用率改善仍是关键。",
    catalysts: [
      "Kepler 在 7 月 6 日将 X-FAB 上调至 Buy",
      "Melexis 需求被描述为 week-after-week、day-after-day 持续走强",
      "AI 被视为新增 SiC/GaN/photonics 结构性增长腿，可部分对冲 auto 周期波动",
      "X-FAB 约 4.8 倍 2027 EV/EBITDA 对比同业中位数约 14.5 倍，提供估值重定空间",
      "SILEX 等稀缺西方 specialty foundry 被用作比较框架",
      "PhotonixFab 与欧洲 silicon photonics 仍是更长期的上行可选性",
      "Serenity 继续把 XFAB 放在欧洲 silicon photonics alternative foundry 路径里",
      "潜在 NVDA / hyperscaler-adjacent photonics 需求仍是中长期放大器"
    ],
    risks: [
      "Kepler 升级仍是 read-through，不是 X-FAB 自己披露的新订单或客户",
      "近端业绩仍可能被 auto / industrial 暴露主导，photonics 贡献太小而难以立刻反映",
      "估值折价若没有利用率、利润率或客户里程碑改善，可能继续存在",
      "silicon photonics 商业化节奏仍可能推迟到 2027-2028 之后",
      "汽车周期和 foundry utilization 压力仍可能压过 optical optionality",
      "Nvidia 或 photonixFAB 的评估 / 参与不等于量产收入"
    ],
    nextChecks: [
      "阅读 Kepler 报告原文，拆出 Buy upgrade 的核心假设",
      "量化 XFAB 近端逻辑里有多少来自 Melexis/auto 修复，多少来自 photonics optionality",
      "跟踪 PhotonixFab 里程碑与 X-FAB 的 silicon photonics 客户披露",
      "核实 NVDA 或其他 hyperscaler-adjacent evaluation 是否能在一手资料中找到",
      "把 X-FAB 与 TSEM、SILEX 等 specialty foundry 的估值和利用率放在同一框架比较",
      "继续观察 margin、order、utilization 是否开始把这条 rerating 逻辑变成公司级证据"
    ]
  },
  mrvl: {
    theme: "AI ASIC / CPO 大盘股验证",
    thesis: "Serenity 仍把 MRVL 作为流动性较好的 AI interconnect / ASIC 验证标的，但 7 月 3 日订阅者帖把逻辑从 Jensen 的口号推进到“份额迁移”框架：她认为 MRVL、Mediatek、Alchip、GUC 这类更贴近 Nvidia 生态的 challengers，未来两年可能逐步蚕食 Broadcom 在部分 hyperscaler-adjacent ASIC 项目里的份额。与此同时，MRVL 仍和 SIVE 的 Celestial 激光器推演相连。",
    whyItMatters: "这让 MRVL 不再只是情绪代理，而更像一个可能受益于 Nvidia 生态重新分配 ASIC 经济性的标的。但这条新逻辑本身带有明显推断色彩，仍需要 design win 和收入证据。",
    catalysts: ["7 月 3 日订阅者帖提出 MRVL 等 Nvidia 盟友型 ASIC 挑战者可能逐步蚕食 AVGO 份额", "AVGO 电话会显示 AI networking demand 强、订单可见度延伸到 2028", "OpenAI custom silicon late-2026 production 与 Meta H2 2027 项目时间线支持 ASIC 周期", "Jensen Huang 公开背书", "AI ASIC / Celestial 叙事", "潜在 SIVE 激光器供应商关系"],
    risks: ["7 月 3 日这条 AVGO 份额受压逻辑被 Serenity 自己称为 conspiracy theory，仍需一手验证", "AVGO 需求强不等于 MRVL 自动拿到份额", "35% 快速上涨后短期可能透支", "大盘股上行依赖执行与估值", "SIVE 供应关系仍需验证"],
    nextChecks: ["比较 MRVL、AVGO、Alchip、GUC 的 custom-ASIC design wins", "比较 AVGO 客户时间线与 MRVL AI ASIC pipeline 披露", "确认 Jensen 引述与活动语境", "验证 MRVL / Celestial 供应链", "区分 AI ASIC 增长与光学 / CPO 逻辑"],
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
    thesis: "Serenity 现在把 NBIS 放在一轮更硬的 Meta capex reset 之下，而不再只是发言人口径修复。7 月 8 日她先引用 Meta 发言人说公司仍渴求更多算力；随后又补上加拿大 100 亿美元数据中心，以及一份内部 memo 所列的 Samsung / SNDK memory LTAs、Sumitomo fiber LTAs、今年约 7GW 算力部署和 2027 再翻倍等信息。对她来说，这让 NBIS 更像 Meta overflow compute 没有消失时的 cleaner neocloud read-through。",
    whyItMatters: "NBIS 不再只是“资本结构比同行好”的对照组，而是被放进一个更扎实的 hyperscaler demand-duration 框架里。若 Meta 真的同时锁 memory、fiber、datacenter 和 chip cadence，融资结构更干净的 neocloud 玩家理论上更值得重估；反之，若这些更新最后证明只是 PR / 媒体口径而非直接需求传导，NBIS 仍会退回到高 beta 情绪资产。",
    catalysts: ["Meta 发言人称仍在推进昂贵数据中心并已与 $CRWV、Google、$ORCL 等签下重大算力协议", "Serenity 转述的内部 memo 增加了 Samsung、$SNDK 和 Sumitomo Electric LTAs，以及今年约 7GW 算力部署与 2027 再翻倍口径", "Meta 加拿大 100 亿美元数据中心进一步反驳了 capex 收缩叙事", "Meta 拟建立云业务、出售 excess AI compute，为 AI capacity intermediation 提供新叙事", "Serenity 认为 Meta 已签下 480 亿美元以上 neocloud 合同，说明 overflow demand 仍在", "NBIS 相比 IREN、CRWV 有更好的融资结构", "Avride 与 ClickHouse 暴露带来资产组合重估可能"],
    risks: ["Neocloud 标的对融资条件和 AI capex 情绪依旧高度敏感", "即便总需求增长，Meta 等 hyperscaler 也可能压缩 reseller / neocloud 的利润空间", "加拿大数据中心、LTA 和 1450 亿美元 capex 口径仍需更强的一手验证", "Meta 供应链扩张并不自动等于 NBIS 直接受益", "IREN 这类 ATM overhang 仍可能拖累整条板块", "子公司和持股价值需要独立核实", "若这轮更新更多只是 damage control，修复线会迅速降温"],
    nextChecks: ["核实 NBIS 当前债务、现金和融资结构", "比较 CRWV 利息负担、IREN ATM 稀释与 NBIS 资本结构", "核实 Meta 云业务方案、480 亿美元以上合同说法以及 NBIS 是否直接受益", "核实加拿大数据中心、Samsung / SNDK / Sumitomo LTAs 与 7GW / 2027 翻倍口径是否在一手资料中成立", "检查 IREN、CRWV、NBIS 当前 ATM 授权、股本变化和 float", "量化 Avride 和 ClickHouse 持股 / 估值贡献"],
  },
  xintech: {
    theme: "TSM 测试子公司 / COUPE 供应商线索",
    thesis: "Serenity 称 Xintec 是 TSMC packaging / test 子公司，自己有持仓；6 月 5 日她进一步说 TSM COUPE H2 2026 量产，如果 TSMC 倾向垂直整合，量可能流向 Xintec。",
    whyItMatters: "如果 COUPE 相关测试 / 封装需求真实，小型 TSM 关联公司可能提供更精准暴露。6 月 19 日她承认 Xintec 与 FOCI、MSSCorp 一样仍被虚假 CPO delay 报告拖累，说明需要公司级数据修复市场信心。",
    catalysts: ["TSM COUPE H2 2026 量产时间线", "TSMC 通过子公司积极追求 CPO 机会的表述", "Serenity 认为未来几个月 Xintec 比 VisEra 更有吸引力", "报告确认 TSM / COUPE 关联", "Serenity 称 Xintec 随台湾 CPO 多头启动，当日约涨 10%", "TSM 先进封装 / 光学供应链建设", "测试需求扩张"],
    risks: ["Serenity 承认公开披露中 Xintec 承接 COUPE volume 的数字有限", "帖子中 COUPE 关联仍需原始资料确认", "主题较窄且公开披露有限", "需要独立映射收入来源", "虚假 CPO delay 报告仍可造成较大短期 drawdown"],
    nextChecks: ["找到 TSMC 通过 Xintec 等子公司追求 CPO 机会的原始资料", "核实 COUPE H2 2026 量产时间线", "比较 Xintec 与 VisEra 的业务暴露、估值和收入敏感性", "找到她提到的那份报告", "确认 Xintech 股权关系与对 TSM 的收入依赖", "判断 COUPE 是否会带来测试量增长", "跟踪订单 / 月营收是否修复 delay 报告影响"],
  },
  "wus-pcb": {
    theme: "AI switch PCB / activist NAV discount",
    thesis: "WUS / 2316 继续放在 activist / NAV discount idea 中。6 月 20 日 Serenity 在个人研究笔记里再次把 WUS 与 ACMR 放在一起，称二者可能有 H-share 子公司上市催化，是她看到的最大 NAV discount + independent growth 组合之一。",
    whyItMatters: "这条线索不只看 AI switch PCB，也看管理层是否愿意释放被锁住的资产价值。新增重点是 possible H-share subsidiary listing 和 activist middle-ground：如果上市或部分解锁发生，WUS parent 的 NAV discount 可能被重新定价。",
    catalysts: [
      "6 月 18 日公开帖继续认同 Palliser 对 WUS 的 NAV discount 框架",
      "Serenity 称出售四分之一左右 Kunshan stake 可能带来约 11 亿美元税前现金",
      "AI PCB 增长拐点下，现金可用于扩大 PCB growth",
      "管理层愿意处理 locked-up assets 本身可能带来重估",
      "6 月 20 日她再次把 WUS 与 ACMR 列为最大 NAV discount + independent growth 线索之一",
      "她提到可能的 H-share subsidiary listing，并认为 WUS activist 可能推动某种 middle ground"
    ],
    risks: [
      "该 thesis 高度依赖 Palliser 报告，需要原文核实",
      "家族或管理层可能继续抵抗 activist，NAV discount 可长期存在",
      "Kunshan 估值、Nvidia PCB 份额、税后价值和股权结构都要用 filings 验证",
      "台湾 / 中国 PCB 标的有流动性、治理、汇率和地缘风险",
      "H-share listing 和 activist compromise 都是 catalyst watch，不是已确认公司行动"
    ],
    nextChecks: [
      "阅读 Palliser WUS 报告原文",
      "核实 WUS Taiwan 对 WUS Kunshan 的持股和税后价值假设",
      "验证 Kunshan 的 Nvidia AI switch PCB 份额",
      "跟踪管理层是否回应 Palliser 或披露资本动作",
      "核实可能 H-share subsidiary listing 是否真实存在时间表",
      "跟踪 activist 是否推动 partial sale、资本动作或治理 compromise"
    ]
  },
  "acmr-nav-ai": {
    theme: "NAV discount / standalone AI growth screen",
    thesis: "ACMR 继续作为 NAV discount + standalone AI growth 的代表线索。6 月 20 日 Serenity 说 ACMR 与 WUS 可能都有 H-share 子公司上市催化，是她看到的最大 NAV discount + independent growth 组合之一，并可能考虑增加集中度。",
    whyItMatters: "这是 WUS 逻辑的扩展版。吸引力在于资产折价可能提供 downside support，而 standalone AI growth 与潜在 H-share catalyst 提供重估弹性；但 ACMR China 资产、可变现性、治理和税务都必须独立核实。",
    catalysts: [
      "Serenity 认为 NAV discount + standalone AI growth 主题正在被注意到",
      "ACMR 与 WUS 被她列为较极端例子",
      "如果独立 AI vertical 起量，市场可能重新评估 parent 估值",
      "她提到 ACMR / WUS 可能有 H-share subsidiary listing",
      "她表示可能在继续研究后增加已有 exposure 的集中度"
    ],
    risks: [
      "这是新的宽筛选线索，不是完整公司 thesis",
      "ACMR China 资产、股权结构、流动性、法律和税务限制需要 filings 核实",
      "NAV discount 即使真实，也可能因治理或资产无法变现而长期存在",
      "H-share listing 仍需确认，不应直接当成已发生催化"
    ],
    nextChecks: [
      "核实 ACMR corporate structure 与 ACMR China look-through value",
      "评估 parent 是否有独立 AI growth，而不是只有持股折价",
      "比较 ACMR、WUS、SK Square 的 NAV discount、资产变现路径和治理风险",
      "验证 H-share subsidiary listing 时间表和对 parent NAV discount 的影响"
    ]
  },
  "wistron-wiwynn": {
    theme: "NAV discount / AI server growth / Wiwynn stake",
    thesis: "Serenity 在 6 月 20 日个人笔记中把 Wistron 作为当前看到的最好 NAV discount + AI growth 线索之一。她提到 Wistron 持有 Wiwynn 35.46%，Q1 revenue growth 很强，并把 SIVE + Ayar + Wiwynn 称为自己喜欢的 trio。",
    whyItMatters: "Wistron 可能同时具备 parent discount、AI server growth、Wiwynn look-through value 三层逻辑。它把 ACMR / WUS 的 NAV-discount screen 延伸到台湾 AI server infrastructure，但目前仍是研究笔记，不是 formal conclusion。",
    catalysts: [
      "Serenity 称 Wistron 是当前 research set 里最好的 NAV discount idea",
      "她提到 Wistron 持有 Wiwynn 35.46%",
      "Q1 revenue growth 很强，且她预计 Wiwynn 继续增长",
      "SIVE + Ayar + Wiwynn 被她称为 favorite trio"
    ],
    risks: [
      "这是个人研究笔记，不是正式 thesis",
      "Wistron market cap、Wiwynn stake value、Q1 growth 和客户暴露需要 filings 核实",
      "市场可能继续把 Wistron 当 EMS / holding company 而不是 AI server growth 标的"
    ],
    nextChecks: [
      "核实 Wistron 对 Wiwynn 的持股比例和 stake value",
      "检查 Wistron Q1 revenue growth、AI server exposure 与 margin trend",
      "比较 Wistron parent market cap、standalone business 和 Wiwynn look-through value",
      "验证 SIVE + Ayar + Wiwynn 关系是否有 primary-source 支撑"
    ]
  },
  aaoi: {
    theme: "800G / 1.6T 光模块 / 美国光学产能",
    thesis: "Serenity 继续把 AAOI 放在高信心 AI optical 主线中。6 月 18 日她再次用中文强调 AAOI 与 SIVE 是她最喜欢的激光公司，因为它们不只能卖激光器，还可能扩展到完整光模块、光引擎和 ELS 组件。",
    whyItMatters: "AAOI 仍是 AI 数据中心带宽需求里更流动的美国光学表达。新增重点是 subsystem expansion 和 2027 ramp：如果公司能从激光器走向更完整的 optical stack，TAM 与 margin 想象会高于普通 transceiver / laser 供应商。",
    catalysts: [
      "Serenity 再次说 AAOI 与 SIVE 是她最喜欢的激光公司",
      "可从激光器扩展到完整光模块、光引擎和 ELS 组件",
      "她认为大部分 photonics 收入放量仍在 2027 H1/H2 之后",
      "COHR 式上游整合被用作 margin / TAM 提升参照",
      "此前 AAOI 仍在稀缺西方 CW laser 产能框架里"
    ],
    risks: [
      "6 月 18 日更新是主题强化，不是 AAOI 新客户披露",
      "如果 2027 ramp 延后，当前 optical 预期可能太早",
      "高 beta 光学股仍容易受报告、宏观和 timing 情绪拖累"
    ],
    nextChecks: [
      "看 AAOI 是否披露 module、engine 或 ELS component 收入",
      "核实公司指引是否支持 2027 H1/H2 ramp",
      "继续跟踪 CW laser 产能、客户 allocation 与 margin"
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
    thesis: "Serenity 将 Shunsin 放在台湾 CPO / 光学组合中。6 月 19 日她提到，虽然 FOCI、MSSCorp、Xintec 等 Taiwan CPO longs 因虚假 CPO delay 报告仍明显亏损，但 Shunsin 与 Win Semi 表现相对更抗跌。",
    whyItMatters: "Shunsin 仍需要拆具体供应链角色，但相对抗跌说明市场可能区分不同台湾光学 / CPO 环节。它不是公司级订单验证，但有助于排序 Taiwan CPO basket 内部强弱。",
    catalysts: ["台湾光学供应链动量", "Serenity 称 Shunsin 随台湾 CPO 多头启动，当日约涨 10%", "CPO 相关关注", "与 FOCI / MSSCorp 的联动重估", "6 月 19 日被她列为较抗跌的 Taiwan CPO / optical names"],
    risks: ["已观察帖子中角色归因不够细", "需要公司层面的具体证据", "小盘流动性风险", "相对抗跌不等于订单或 revenue 已验证"],
    nextChecks: ["确认其具体 CPO / 光学角色", "检查近期月营收", "与 FOCI / MSSCorp / Xintec 的估值和价格强弱比较"],
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
    thesis: "Serenity 此前等待 AEHR 的批量订单兑现；6 月 17 日 AEHR 收到 major silicon photonics customer 的 wafer-level burn-in systems follow-on production order，她把它视作此前 mass-order timeline 的验证。",
    whyItMatters: "AEHR 从单纯等待量产订单，变成 silicon photonics 测试设备订单转换的跟踪标的。若后续订单继续出现，wafer-level burn-in 可能成为 AI optical / silicon photonics 放量的一条设备链。",
    catalysts: ["主要 silicon photonics 客户的 wafer-level burn-in follow-on production order", "Serenity 认为这符合此前 AEHR mass-order timeline", "silicon photonics 客户从 pilot / initial order 转向 production system demand"],
    risks: ["需要核实订单金额、客户身份、系统数量、毛利率和收入确认节奏", "股价已大幅重估，可能提前反映一部分订单转换"],
    nextChecks: ["阅读 AEHR 原始订单公告", "跟踪下一次财报中 silicon photonics backlog 和 follow-on order cadence", "与 LPK 和其他测试设备同业估值比较"],
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
    thesis: "Serenity 称 Win Semi 很少出现在光子分析报告里，但可能成为激光器扩产的重要瓶颈。6 月 19 日她补充说，在台湾 CPO longs 中，Win Semi 与 Shunsin 比 FOCI、MSSCorp、Xintec 等受虚假 CPO delay 报告冲击的标的更抗跌。",
    whyItMatters: "这是二阶激光制造瓶颈线索，比 SIVE / GFS 逻辑更早期、确定性更低。相对强势可以作为跟踪信号，但最终仍要看产能、客户和 revenue。",
    catalysts: ["2027 年激光器扩产需求", "Serenity 称仍在等待 Win Semi 跟随台湾 CPO 多头补涨", "台湾光学链关注", "潜在分析师覆盖补涨", "6 月 19 日她称 Win Semi 在 Taiwan CPO basket 中表现相对更好"],
    risks: ["观察到的讨论较少", "具体角色和收入需要确认", "可能仍然太早", "相对抗跌不能替代公司级订单和产能证据"],
    nextChecks: ["梳理 Win Semi 与激光相关的制程角色", "检查客户是否与 SIVE / LITE 生态重叠", "监控分析师提及与资本开支", "比较 Win Semi 与其他台湾 CPO 标的在 false-delay report 后的修复速度"],
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
    thesis: "Serenity 再次称绿的谐波是中国人形机器人里突出的 component leader，不只是谐波减速器公司；她强调其覆盖高壁垒减速器、行星滚柱丝杠、电机 / 关节等高 BOM 价值部件，并明确 688017 是长线持有框架，不是几天内完成的短线交易。7 月 3 日的历史新高与涨停，也让这条更长期的 BOM thesis 再次被市场连接到当前 Agility 与 Unitree 驱动的人形机器人热度上。",
    whyItMatters: "这是一个直接的 Physical AI 硬件零部件 thesis，而且现在出现了新的市场确认。如果人形机器人从原型走向数百万台量产，绿的谐波可能通过多个运动控制核心部件获得可观 BOM 份额，而中国供应链可能主导低成本量产。",
    catalysts: ["Serenity 称绿的谐波是中国机器人板块突出的 component leader", "她提到 Goldman 等西方机构也多次提及其高技术壁垒和 BOM 价值捕获", "暴露于谐波减速器、旋转关节减速器、直线执行器、电机 / 关节和行星滚柱丝杠", "她框架中潜在相关客户包括优必选、智元机器人、Tesla、Figure 等", "Physical AI 与人形机器人规模化量产", "7 月 3 日再创历史新高并涨停，Serenity 将其归因于 Agility + Unitree 驱动的人形机器人情绪扩散", "中国证券报报道提升机构关注度"],
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
    thesis: "Serenity 仍把 glass substrate 视为先进封装的新材料瓶颈，但 7 月 3 日的新帖把 Samsung 这条线从时间表推进到更具体的执行框架：Sumitomo Chemical 与 Samsung Electro-Mechanics 正式设立 GlaSSEM JV，并给出约 4821 亿韩元资本开支与 2027 年下半年 full scale commercialization 目标。",
    whyItMatters: "玻璃基板是 AI 加速器先进封装的相邻瓶颈。一旦时间线、资金和 JV 结构都更明确，这个主题就不再只是远期材料故事，也会更快传导到良率工具、TGV/LIDE 设备和可能提前下单的供应商。",
    catalysts: ["SKC Absolics H2 2026 first mover 时间线", "Serenity 提到 AMAT / AMD customers 相关线索", "GlaSSEM JV 正式落地", "Samsung Electro-Mechanics 给出 H2 2027 full-scale commercialization 与约 4821 亿韩元资本开支框架", "潜在关联 Apple、AVGO 与 hyperscalers", "Serenity 点名 $LPK、E&R、Onto 可能因订单前置而提前受益"],
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
    thesis: "Serenity 现在明确把 Memory 与 Photonics 并列为两大 top themes，而 7 月 7 日的 Samsung 新帖又把 memory 这条线推进到更具体的公司级验证：市场原先质疑存储提价难以持续，但她指出 Samsung 仍把 DRAM 提价约 20%，并录得 operating profits 同比约 1803% 增长。对她而言，这说明市场仍低估了 memory 紧张和盈利持续性的韧性。",
    whyItMatters: "这让 memory thesis 不再只是回顾涨幅或宏观供需，而是多了一层更硬的 pricing-power + earnings validation。若 Samsung 与同业在市场仍偏怀疑时继续提价并上修盈利，memory 标的的 profit revision 可能继续累积；反过来，如果财报后的卖出是在提前交易 peak-cycle 风险，那么 timing 与拥挤度仍要小心。",
    catalysts: [
      "Serenity 称 Micron + memory 预测正在兑现",
      "Samsung / SK Hynix 是她 2025 年开始跟踪的 memory 主线",
      "SNDK 是今年 1 月以来更集中表达 memory theme 的名字",
      "EWY 多头受韩国 memory 走强带动",
      "AI capex 框架中她认为 SK Hynix 等上游半导体不像泡沫",
      "6 月 19 日她称 Memory 与 Photonics 是两大 top themes",
      "7 月 7 日她把 Samsung 的 DRAM 提价约 20% 与 operating profits 同比约 1803% 增长当作新的 memory 验证"
    ],
    risks: [
      "大幅上涨后估值和拥挤度风险增加",
      "如果供给扩张快于需求，存储仍可能回到周期波动",
      "EWY 不是纯 memory 暴露",
      "这条更新主要是回顾性验证，不保证 memory 后续仍有同样弹性",
      "即便财报和提价很强，市场仍可能提前交易 peak-cycle 风险并压制股价"
    ],
    nextChecks: [
      "核实 MU 市值、盈利修正和 HBM / DRAM 产能计划",
      "比较 Samsung / SK Hynix 存储价格和 capex 与 2028 hyperscaler 需求",
      "量化 SNDK 和 EWY 对 AI memory 的纯度",
      "把 memory 的 2027 / 2028 projections 与 optical projections 放在同一框架比较",
      "核实 Samsung 最新 DRAM 提价和 operating profit 数据与卖方一致预期的偏差"
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
    thesis: "LPK 现在仍是 Serenity 最偏好的 glass-core-substrate / LIDE advanced-packaging equipment 线索。7 月 3 日她把 GlaSSEM 正式落地、4821 亿韩元资本开支和 H2 2027 full-scale commercialization 视为外部 read-through：若 Samsung 这条线真的开始加速，那么 LPK 先前关于 80% validation、70% 目标份额和 HVM readiness 的说法就不再只是孤立 meeting notes，而更像是产业链真实推进的一部分。",
    whyItMatters: "这把 LPK 从 validation 线索进一步推进到 volume-production / market-structure 线索，而且多了新的时间锚点。如果 qualification 转成 HVM orders，并叠加 Nasdaq listing 预期，估值可能重估；关键仍是 meeting notes 原文、订单客户和 revenue timing。",
    catalysts: [
      "80% 主要全球玩家选择 LPKF equipment 的说法被 Serenity 继续强化",
      "glass substrate 被她称为下一代 packaging shift",
      "Absolics H2 2026 ramp 与 Samsung Electro Mechanics 2027 被列为时间线",
      "TSM CoPoS 2028 潜在上游暴露仍是未确认但值得跟踪的线索",
      "LPK meeting notes 显示 Nasdaq listing 正在讨论 / radar 上",
      "Serenity 提到 70% targeted market share 和 TAM 超过旧预测",
      "她称今年 base case 可能有 4-5 个 players 下单，industry 已 ready for high-volume ramps",
      "GlaSSEM JV 正式落地并配套资本开支与 H2 2027 商业化目标，强化了 LPK 订单时点的想象空间"
    ],
    risks: [
      "TSM CoPoS 上游暴露仍未确认",
      "80% validation 不等于量产订单规模或时间",
      "LPK 股价已动，市场可能先于基本面确认定价",
      "Nasdaq listing、70% share、4-5 orders 等 meeting-note 信息需要原文验证"
    ],
    nextChecks: [
      "找 LPK / LIDE 关于 80% validation 的原始来源",
      "核实 Absolics H2 2026 和 Samsung Electro Mechanics 2027 ramp 时间线",
      "确认 TSM CoPoS 是否有 LPKF / LIDE 工具连接",
      "跟踪 validation 是否转成 backlog、客户名和收入指引",
      "找到 LPK meeting notes / transcript，核实 Nasdaq、70% share、TAM 和 4-5 order-player 表述"
    ]
  },
  "axti-inp": {
    theme: "InP substrate / AI 光互连上游瓶颈",
    thesis: "AXTI 仍是 Serenity 上游 InP substrate 方法论的代表案例，但 7 月 3 日终于出现了更明确的公司级 datapoint：AXTI 与 Coherent 签署 3 年晶圆供货协议，并由 Coherent 向 AXT-Tongmei 预付 2228.85 万美元以换取承诺产能。这样一来，这张卡不再只是“上游瓶颈研究方法正确”的回顾，也开始具备真实合同和产能锁定信号。",
    whyItMatters: "这条更新不再只是方法论验证。预付款加 committed capacity 的结构，至少说明下游光学客户愿意提前锁供，这比单纯社媒叙事更接近 Serenity 所强调的 chokepoint economics。",
    catalysts: [
      "AXTI 与 Coherent 的 3 年晶圆供货协议，以及 2228.85 万美元预付款锁定承诺产能",
      "Serenity 称自己仍持有 AXTI",
      "Reuters 后续报道 InP substrates 可能影响 AI buildout，被她视为 thesis 验证",
      "研究输入包括 InP 供应链、市占率、高纯铟价格、出口管制和光学公司收购",
      "AAOI/LITE/AXTI 被一起作为 2025 optical rerating 成功案例"
    ],
    risks: [
      "Coherent 预付款和 committed capacity 仍需转化为持续收入、利润率和发货节奏", "这是回顾性研究验证向公司级催化过渡，但不等于风险消失",
      "still holding 增加信心色彩，但不消除估值、稀释、中国暴露和材料周期风险"
    ],
    nextChecks: ["重读 Reuters InP substrate 报道，并和 AXTI filing、出货、价格对应", "继续跟踪高纯铟价格对 AXTI substrate 毛利和需求的影响", "阅读 AXTI 与 Coherent 的正式协议或披露，区分预付款叙事和实际出货节奏"]
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
    theme: "Anthropic 数据中心租赁 / 主权 Neocloud colocation",
    thesis: "Serenity 对 Anthropic 租赁算力的 read-through 已从“美国开发商 LOI”扩展到更具体的 sovereign compute 地理线索。7 月 5 日她把泄露文件中约 1.4GW、约合 216 亿美元的澳洲算力计划，与 $IREN、$SHAZ 等 neocloud 在澳洲建设 sovereign DC 的动作联系起来，认为前沿模型公司的租赁需求与主权算力布局开始在同一张需求地图上汇合。",
    whyItMatters: "如果 frontier AI lab 不只是租算力，而且把需求集中到具备主权、地缘和电力条件的区域站点，那么受益者可能从泛 colo 篮子扩展到真正拥有合适 geography、power 与 financing 的 neocloud 运营商。这条线仍是间接 read-through，但比早先纯 LOI 叙事更具体。",
    catalysts: ["Anthropic 正在寻求首批数据中心 leases", "据她引用，Anthropic 已与美国开发商签署十多份 LOI", "泄露文件显示 Anthropic 计划在澳洲锁定约 1.4GW、约合 216 亿美元算力", "Serenity 把这条需求与 $IREN、$SHAZ 等在澳洲建设 sovereign DC 的 neocloud 线索连接起来"],
    risks: ["她也说明具体受益公司尚未被点名", "LOI 不等于最终 lease 或收入确认", "colo 标的受融资、电力接入和 crypto beta 影响很大", "需要区分真正的 Anthropic 交易对手和板块情绪上涨", "澳洲 1.4GW 说法来自泄露文件，仍需一手确认", "主权数据中心建设不等于上市公司一定拿到 Anthropic 或其他 frontier lab 合同"],
    nextChecks: ["阅读 The Information 原文，看是否点名开发商或地点", "核实 WULF、CIFR、WYFI、HUT 的电力、机房、融资和租赁 pipeline", "核实 IREN、SHAZ 或其他澳洲运营商是否具备匹配 Anthropic 级别需求的站点、电力和时间表", "检查这些公司是否公开提到 sovereign AI、政府相关 compute 或 frontier lab 对手方"],
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
  cbrs: {
    theme: "AI 推理加速 / OpenAI 部署",
    thesis: "Serenity 在 OpenAI 选择 Cerebras 承载 GPT-5.6 Sol 后建立了 $CBRS 起始仓位。6 月 30 日她又引用社区个案，称 OpenAI 可能锁定了大量高速推理产能，令需要 1-2K tokens/s 的较小客户面临很长等待。",
    whyItMatters: "前沿模型部署加上产能稀缺，进一步支持 Cerebras 的技术和需求，但也暴露客户集中风险。社区反馈仍需用 backlog、利用率、合同期限、定价和扩产经济性来验证。",
    catalysts: ["OpenAI GPT-5.6 Sol 部署在 Cerebras 基础设施", "最高约 750 tokens/s 的推理性能声明", "公开市场 OpenAI 基础设施暴露的稀缺性溢价"],
    risks: ["相对 JBL 等盈利硬件同行估值偏高", "厂商 benchmark 和吞吐声明需要真实工作负载验证", "客户集中度与 OpenAI 领先地位是主要依赖", "个人起始仓位不等于公司收入指引"],
    nextChecks: ["核实 OpenAI 部署范围、合同周期与商业条款", "比较真实延迟、吞吐和成本与 GPU 方案", "检查收入集中度、毛利率及相对估值"],
  },
  "ccxi-aglt": {
    theme: "人形机器人 IPO / 仓储自动化",
    thesis: "Serenity 仍把 Agility Robotics 视为自己最喜欢的人形机器人仓位，但“美国追赶”这条线现在开始出现更具体的产业映射。原有的 75% 美国零部件、约 1 万台 RoboFab、低于 3 万美元 BOM 目标和 enterprise commercialization 逻辑都还在；7 月 10 日早上她先用中国 humanoid 量产占优、1X 最新手部演示和 Elon 的“for now”回应强化紧迫感；到 7 月 10 日晚间，她又把 Highlanders x Mitsubishi 加入 auto/humanoid pairing 清单；7 月 12 日对 Boston Dynamics 的 IBK 摘要，则把 actuator capacity 提升为判断 2028-2030 放量是否真实的更硬指标。在这整条 OEM 绑定与量产竞速框架里，她仍通过 $CCXI / $AGLT 表达 Agility。",
    whyItMatters: "这让 Agility 不再只靠 SPAC 和 national champion 情绪支撑。若行业真的越来越依赖车厂/制造业伙伴、并且 actuator output 成为最关键的放量瓶颈指标，投资者就有了比口号更具体的跟踪抓手；反过来，若这些 supplier map 仍主要停留在 OSINT，且 Agility 没把产业热度转成自己的订单、throughput 和 economics，它仍只是高波动代理票。",
    catalysts: ["拟议交易后预计由 CCXI 变更为 AGLT", "BlueCrest Capital Management 披露持有 CCXI 5.6%", "约 75% 零部件来自美国的 deck 说法", "Serenity 认为量产 BOM 目标可能低于 3 万美元，而非外界只盯着约 14.5 万美元单机成本", "RoboFab 年产能约 1 万台、Salem / Pittsburgh / Fremont 的美国制造足迹", "多年订单与 30 多家客户 pipeline 线索", "Serenity 继续强调 Agility 是美国 humanoid 中偏 enterprise commercialization 的代表", "1X 最新手部演示与 Elon 的“for now”回应，为美国 humanoid 追赶叙事增加了新的技术催化", "Serenity 以中国 humanoid 年产量或占全球约 90% 为锚，强化美国本土机器人 champion 的追赶叙事"],
    catalysts: ["拟议交易后预计由 CCXI 变更为 AGLT", "BlueCrest Capital Management 披露持有 CCXI 5.6%", "约 75% 零部件来自美国的 deck 说法", "Serenity 认为量产 BOM 目标可能低于 3 万美元，而非外界只盯着约 14.5 万美元单机成本", "RoboFab 年产能约 1 万台、Salem / Pittsburgh / Fremont 的美国制造足迹", "多年订单与 30 多家客户 pipeline 线索", "Serenity 继续强调 Agility 是美国 humanoid 中偏 enterprise commercialization 的代表", "1X 最新手部演示与 Elon 的“for now”回应，为美国 humanoid 追赶叙事增加了新的技术催化", "Serenity 以中国 humanoid 年产量或占全球约 90% 为锚，强化美国本土机器人 champion 的追赶叙事", "Mitsubishi x Highlanders 让 auto/humanoid pairing 清单再扩一层，和 Agility / Foxconn / Toyota、Apptronik / Mercedes、Figure / BMW 并列出现", "IBK 对 Boston Dynamics 的 supplier map 和 actuator-capacity 观察，为 2028-2030 放量增加了更可量化的跟踪指标"],
    risks: ["SPAC 交易可能延期、重定价或取消", "当前 BOM 较高，降本目标尚未证明", "75% 美国零部件与低于 3 万美元 BOM 的说法仍需一手 deck / filing 核实", "“劳动力替代”与“国家追赶”更多是主题外推，不等于部署经济性和客户采用速度已经被证明", "订单 pipeline 必须转化为交付、收入和可持续毛利", "估值与稀释需要以正式文件核实", "中美量产竞速的宏大叙事并不自动等于 Agility 会拿到补贴、订单或规模优势", "行业里越来越多 auto/OEM pairing，并不自动代表 Agility 会拿到最好的订单、供应商条款或资本支持", "IBK 的 supplier map 和线性放量假设仍可能有误，actuator bottleneck 也可能暴露行业离规模经济还很远"],
    nextChecks: ["阅读合并文件、锁定期、稀释与时间表", "核实订单金额、客户承诺与收入确认", "核实 75% 美国零部件、低于 3 万美元 BOM 目标和 1 万台 RoboFab 产能", "跟踪 BOM 降本、年产能和单机毛利", "检查 Amazon、NVIDIA、Google 相关生态说法是否在一手合作材料中出现", "核实中国 10 万台 / 90% humanoid 相关口径及其是否引发任何会实质利好 Agility 的美国政策响应", "检查 1X、Tesla、Agility 的技术进展是否真正改变客户或政策预期", "跟踪 Agility 是否披露可对标 Boston Dynamics 的 actuator 数量、supplier stack 或制造 bottleneck", "比较 Agility 与 Boston Dynamics、Figure、Apptronik、1X 的放量假设，避免只看 narrative peers", "核实 auto-manufacturer tie-ups 是否真的给 Agility 带来 procurement、capital 或 production 优势"],
  },
  "asts-rakuten": {
    theme: "日本 LEO 卫星直连网络",
    thesis: "Serenity 关注 Rakuten 与 AST SpaceMobile 拟在日本建立 LEO 卫星网络合资公司的报道，并把它视为应对 Starlink 在日本影响力上升的战略动作，以及 ASTS 区域商业化的新验证。",
    whyItMatters: "Rakuten 支持的日本网络可验证 ASTS 在成熟市场的渠道、频谱和准入能力，但仍取决于正式合资条款、监管审批、资金、部署时间、卫星容量和收入经济性。",
    catalysts: ["Rakuten 与 AST SpaceMobile 正式公布合资公司", "日本频谱、通信与卫星网络审批", "商业服务与 Rakuten 用户接入", "Starlink 扩张带来的竞争需求"],
    risks: ["报道仍需公司和监管机构确认", "合资股权、资本承诺与经济性尚不清楚", "卫星部署、覆盖和服务时间可能延迟", "Starlink 与地面运营商竞争可能压缩回报"],
    nextChecks: ["查找 Rakuten 与 ASTS 一手公告或 filing", "核实股权、资金、频谱权利和部署计划", "估算用户、容量、定价与收入贡献"],
  },
  "schaeffler-robotics": {
    theme: "汽车零部件向人形机器人迁移",
    thesis: "Serenity 把 Schaeffler 作为汽车供应链拥有广泛 humanoid 可选性的代表，覆盖轴承、齿轮箱、传感器/ECU、执行器和功率电子，并称公司与约 45 家 humanoid 玩家合作；同时承认机器人目前只占很小收入比例。",
    whyItMatters: "传统汽车供应商可能在机器人收入真正放量前，以相对较低估值提供 humanoid BOM 和制造规模暴露。Schaeffler 部件覆盖广，但负债、汽车周期拖累和近期机器人收入偏低会限制 thesis 的即时性。",
    catalysts: ["humanoid 客户项目转为正式订单", "多类机器人 BOM 暴露", "2027 年后 humanoid 与 AI 汽车需求加速", "机器人业务成为可见报告分部"],
    risks: ["机器人当前收入占比很低", "高负债和汽车周期可抵消机器人上行", "45 家合作关系和 BOM 占比需要一手核实", "2030 年收入指引可能仍较温和"],
    nextChecks: ["核实 humanoid 客户数量与部件范围", "区分正式订单与开发合作", "检查负债、汽车业务暴露和 2030 机器人目标"],
  },
  "rf-materials-pump-laser": {
    theme: "泵浦激光封装瓶颈 / 韩国光学材料",
    thesis: "Serenity 将泵浦激光与封装列为潜在光学瓶颈，并称韩国 RF Materials 可能在特定受限部件上是 Lumentum 的单一来源供应商，部分背景来自中国供应链排除。",
    whyItMatters: "受限泵浦激光封装材料若确有 sole-source 地位，可能在光学需求放量中获得价格和销量杠杆。但 Serenity 也提醒，只服务一两个客户的窄瓶颈未必获得大幅重估，而且她因韩国市场波动没有持仓。",
    catalysts: ["确认与 Lumentum 的单一来源关系", "泵浦激光和封装短缺反映在交期或价格", "客户扩展到更多光学供应商", "AI 光学需求推动收入和利润率加速"],
    risks: ["单一来源和客户说法尚未独立确认", "窄瓶颈可能只带来有限收入而非大幅重估", "韩国小盘股波动与流动性风险较高", "Serenity 明确没有持仓"],
    nextChecks: ["从 filings 核实产品、客户和 sole-source 说法", "确认具体泵浦激光封装部件及竞争供应商", "跟踪光学收入、产能利用率、毛利与客户集中度"],
  },
  alrib: {
    theme: "MBE 设备 / quantum dot 与硅光工具链",
    thesis: "ALRIB / Riber 从早期 OSINT 线索升级为更具体的跟踪项。6 月 18 日 Serenity 提到股东会纪要：第二套 ROSIE system 预计很快交付给美国 leading quantum computing player，同时公司正加强 BTO / STO photonics 产品 BD，并记录到 strong interest。",
    whyItMatters: "这给 Riber thesis 增加了公司级进展。如果 Riber 与 Veeco 构成 MBE duopoly，ROSIE 交付美国量子客户、BTO/STO photonics BD 升温，都可能把它接到 quantum、quantum dot laser 和 silicon photonics capex 周期上。",
    catalysts: [
      "第二套 ROSIE system 预计近期交付美国 leading quantum computing player",
      "BTO / STO photonics 产品 BD 正在加强，并记录到 strong interest",
      "Serenity 将 Riber 与 Veeco 放在 MBE duopoly 框架里",
      "Veeco 已大幅重估，成为 Riber 的可比参照",
      "quantum、quantum dot 与 silicon photonics capex 周期可选性"
    ],
    risks: [
      "需要阅读 Riber 股东会纪要原文确认交付时间和客户表述",
      "US quantum customer 身份仍未公开确认",
      "BD strong interest 不等于订单和收入",
      "Veeco 可比估值和 duopoly 框架需要 backlog / margin 对比"
    ],
    nextChecks: [
      "阅读 Riber 股东会纪要和 ROSIE 交付相关原文",
      "用 filings、LinkedIn 或 procurement 线索验证 US quantum player",
      "跟踪 BTO / STO photonics interest 是否转成 backlog",
      "对比 Riber 与 Veeco 的 MBE 市占率、订单和估值"
    ]
  },
};

const state = {
  ideas: [],
  latestUpdates: [],
  selectedId: null,
  detailOpen: false,
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
      const related = [...(item.related ?? []), ...(item.tickers ?? [])].map(normalizeSearch);
      return tokens.some((token) => related.some((tag) => tag.includes(token) || token.includes(tag)));
    })
    .flatMap((item) => [
      item.type,
      item.headline,
      item.impactZh,
      item.original,
      item.severity,
      ...(item.related ?? []),
      ...(item.tickers ?? []),
    ]);
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

function latestImpact(item) {
  return item.impactZh ?? item.headline ?? item.summary ?? "";
}

function latestOriginal(item) {
  return item.original ?? item.note ?? "";
}

function latestTags(item) {
  return [...(item.related ?? []), ...(item.tickers ?? [])].filter(Boolean);
}

function latestImportance(item) {
  const level = item.importance ?? item.severity;
  const label = item.importanceLabel ?? {
    high: "重点",
    medium: "关注",
    low: "轻量",
  }[level];
  return { level: level ?? "medium", label };
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
  els.latestCount.textContent = `${updates.length} 条`;
  if (!updates.length) {
    els.latestList.innerHTML = `
      <div class="empty-state">
        <strong>暂无最新消息</strong>
        <p>下一次数据更新后，这里会按时间展示 Serenity 的新增发言。</p>
      </div>
    `;
    return;
  }

  els.latestList.innerHTML = updates
    .map((item) => {
      const impact = latestImpact(item);
      const original = latestOriginal(item);
      const tags = latestTags(item);
      const importance = latestImportance(item);
      return `
        <article class="latest-card">
          <div class="latest-meta">
            <time class="latest-date" datetime="${escapeHtml(item.publishedAt ?? item.date)}">${escapeHtml(formatDateTime(item.publishedAt ?? item.date))}</time>
            <span class="latest-zone">北京时间</span>
            ${importance.label ? `<span class="importance-badge ${escapeHtml(importance.level)}">${escapeHtml(importance.label)}</span>` : ""}
            <span class="latest-type">${escapeHtml(item.type)}</span>
          </div>
          <div>
            ${impact ? `<p class="latest-impact">${escapeHtml(impact)}</p>` : ""}
            ${original ? `<p class="latest-original">${escapeHtml(original)}</p>` : ""}
            <div class="latest-tags">
              ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
              ${item.url ? `<a class="latest-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">打开来源</a>` : ""}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
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
