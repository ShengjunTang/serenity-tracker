const tierLabels = {
  focus: "重点关注",
  watch: "跟踪观察",
  speculative: "观望",
  archive: "暂不纳入",
};

const zhCopy = {
  sive: {
    theme: "CPO / 硅光激光器瓶颈",
    thesis: "Serenity 将 SIVE 视为光子链中的激光器瓶颈，近期最强验证来自其激光器被纳入 GFS 硅光平台参考设计。",
    whyItMatters: "如果 SIVE 成为 GFS 参考设计的默认组成部分，它可能位于 AVGO、MRVL、NVDA、AMD 等公司 CPO / 可插拔光模块项目的上游。",
    catalysts: ["Sivers 与 GlobalFoundries 战略合作", "未来 18 个月 CPO 与可插拔光收发器放量", "JBL 与 GFS 的公开验证"],
    risks: ["CPO 量产节奏可能慢于资格认证节奏", "社交媒体关注后波动很高", "客户关系与收入兑现需要独立核实"],
    nextChecks: ["核实 GFS 原始公告中的参考设计表述", "检查 SIVE 指引是否体现 CPO / 可插拔产品收入", "跟踪客户集中度与量产时间"],
  },
  foci: {
    theme: "CPO FAU / 光学组件",
    thesis: "Serenity 将 FOCI 放在 TSM COUPE 与 CPO 光学组件链条中，具体角色是 FAU 与光学组件。",
    whyItMatters: "这是用台股中小市值公司表达 CPO 光学组件供应链主题的一种方式。",
    catalysts: ["TSM COUPE 与 AI 光学市场报道", "CPO 供应链放量", "光互连带动 FAU 需求"],
    risks: ["实际 COUPE 暴露需要确认", "可能存在散户驱动的价格波动", "台股小盘流动性与估值风险"],
    nextChecks: ["核实 FOCI 客户暴露与 FAU 收入占比", "阅读 UDN 报道和公司公告", "跟踪月营收是否加速"],
  },
  msscorp: {
    theme: "CPO 检测 / 良率",
    thesis: "Serenity 将 MSSCorp 描述为 CPO 供应链里的检测与良率控制环节，并表示自己曾继续摊低成本。",
    whyItMatters: "如果 CPO 放量，检测与良率瓶颈可能成为关键环节，即使它不是最显眼的组件。",
    catalysts: ["未来 18 个月 CPO 放量", "专利 / 检测护城河叙事", "TSM COUPE 光学市场关注度"],
    risks: ["专利护城河说法需要验证", "可能早于真实收入放量", "小盘流动性与社媒拥挤风险"],
    nextChecks: ["检查专利组合与检测产品范围", "验证 TSM / COUPE 关联", "跟踪 CPO 样品放量后的收入和利润率变化"],
  },
  xfab: {
    theme: "欧洲硅光代工平台",
    thesis: "Serenity 将 XFAB 类比早期 TSEM：低于 20 亿美元市值、NVDA / NOK 验证、photonixFAB，以及 EU Chips Act 2 顺风。",
    whyItMatters: "这是一个低估值欧洲光子代工平台重估逻辑，不是单纯的 CPO 组件交易。",
    catalysts: ["EU Chips Act 2 对需求 / 资金的支持", "photonixFAB 验证", "NVDA 与 NOK 在硅光方向的活动"],
    risks: ["商业化前验证未必快速转化为收入", "汽车周期仍可能拖累", "需要区分补贴与确定性需求"],
    nextChecks: ["核实 NVDA / NOK 验证细节", "阅读 photonixFAB 项目披露", "比较 P/B 与资产重置成本假设"],
  },
  mrvl: {
    theme: "AI ASIC / CPO 大盘股验证",
    thesis: "Serenity 持有 MRVL，并强调 Jensen Huang 称其为“下一个万亿美元公司”；但她也承认短期上涨更多来自评论而非基本面。",
    whyItMatters: "MRVL 既是流动性较好的 AI 基建表达，也可能通过 Celestial 激光器链条验证 SIVE。",
    catalysts: ["Jensen Huang 公开背书", "AI ASIC / Celestial 叙事", "潜在 SIVE 激光器供应商关系"],
    risks: ["35% 快速上涨后短期可能透支", "大盘股上行依赖执行与估值", "SIVE 供应关系仍需验证"],
    nextChecks: ["确认 Jensen 引述与活动语境", "验证 MRVL / Celestial 供应链", "区分 AI ASIC 增长与光学 / CPO 逻辑"],
  },
  xintech: {
    theme: "TSM 测试子公司 / COUPE 供应商线索",
    thesis: "Serenity 称 Xintech 是 TSM 的测试子公司，自己有持仓；投资逻辑关键在于它是否与 COUPE 相关。",
    whyItMatters: "如果 COUPE 相关测试需求真实，小型 TSM 关联测试公司可能提供更精准的暴露。",
    catalysts: ["报告确认 TSM / COUPE 关联", "TSM 先进封装 / 光学供应链建设", "测试需求扩张"],
    risks: ["帖子中 COUPE 关联仍不完整", "主题较窄且公开披露有限", "需要独立映射收入来源"],
    nextChecks: ["找到她提到的那份报告", "确认 Xintech 股权关系与对 TSM 的收入依赖", "判断 COUPE 是否会带来测试量增长"],
  },
  aaoi: {
    theme: "光学超级周期 / 产能爬坡",
    thesis: "Serenity 将 AAOI 放入当前风险收益比较靠前的名单，依据是 H1 2027 产能爬坡带来的收入预测。",
    whyItMatters: "AAOI 是她高信心光学周期标的之一，但上行依赖未来产能和收入兑现。",
    catalysts: ["2027 年上半年产能 / 收入爬坡", "光学超级周期关注", "光学同业重估"],
    risks: ["市值目标较激进", "产能爬坡与客户时间需要验证", "光学标的整体波动很大"],
    nextChecks: ["核实 H1 2027 收入预测", "检查产能扩张与客户承诺", "与 SIVE / FOCI 的风险收益对比"],
  },
  shunsin: {
    theme: "台湾光学 / CPO 相邻暴露",
    thesis: "Serenity 将 Shunsin 放在当前光学风险收益名单中，并称它在自己的台湾多头标的里开始走强。",
    whyItMatters: "它属于她的台湾 CPO / 光学组合，但具体供应链角色还需要进一步拆解。",
    catalysts: ["台湾光学供应链动量", "CPO 相关关注", "与 FOCI / MSSCorp 的联动重估"],
    risks: ["已观察帖子中角色归因不够细", "需要公司层面的具体证据", "小盘流动性风险"],
    nextChecks: ["确认其具体 CPO / 光学角色", "检查近期月营收", "与 FOCI / MSSCorp 估值比较"],
  },
  lite: {
    theme: "光学周期历史类比 / CPO 激光器供应商",
    thesis: "Serenity 用 LITE 作为第一轮光学浪潮的历史类比，并称它与 SIVE 是 GFS 相关 CPO 语境下两个公开激光器供应商之一。",
    whyItMatters: "LITE 既是历史参照，也是理解 SIVE / FOCI / MSSCorp 等小盘逻辑的较大市值锚点。",
    catalysts: ["光学周期延续", "CPO 激光器供应商角色", "云厂商 AI capex 扩张"],
    risks: ["光学主题可能已有更多定价", "相对小票弹性较低", "需要新的基本面证据"],
    nextChecks: ["核实 GFS 演示中供应商表述", "比较 LITE 与 SIVE 估值", "跟踪 AI 光学收入贡献"],
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
    catalysts: ["2027 年激光器扩产需求", "台湾光学链关注", "潜在分析师覆盖补涨"],
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
    theme: "既有赢家 / 欧洲半导体背景",
    thesis: "Serenity 称自己在 SOI 上约赚 250%，但观察到的帖子没有足够新的 thesis，暂不作为当前可行动线索。",
    whyItMatters: "可作为她欧洲半导体判断的背景，但没有新证据前不应当成新推荐。",
    catalysts: ["此前市场低估", "欧洲半导体动量"],
    risks: ["新 thesis 不足", "已经大幅上涨", "相对当前 CPO 主线可能偏旧"],
    nextChecks: ["只有 Serenity 发布新的 SOI thesis 时再重看", "确认 SOI 是否与光子或 AI 供应链有关"],
  },
};

const state = {
  ideas: [],
  selectedId: null,
  tier: "all",
  query: "",
  sortDesc: true,
};

const els = {
  sourceWindow: document.querySelector("#source-window"),
  resultCount: document.querySelector("#result-count"),
  body: document.querySelector("#ideas-body"),
  detail: document.querySelector("#detail-panel"),
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
  for (const tier of ["focus", "watch", "speculative", "archive"]) {
    const count = countByTier(state.ideas, tier);
    document.querySelector(`#count-${tier}`).textContent = count;
    document.querySelector(`#summary-${tier}`).textContent = count;
  }
}

function ideaMatches(idea) {
  const tierMatch = state.tier === "all" || idea.tier === state.tier;
  const haystack = [
    idea.ticker,
    idea.name,
    idea.theme,
    idea.thesis,
    idea.stance,
    zh(idea, "theme"),
    zh(idea, "thesis"),
    zh(idea, "whyItMatters"),
    ...(idea.catalysts ?? []),
    ...(idea.risks ?? []),
    ...(zh(idea, "catalysts") ?? []),
    ...(zh(idea, "risks") ?? []),
    ...(zh(idea, "nextChecks") ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return tierMatch && haystack.includes(state.query.toLowerCase());
}

function filteredIdeas() {
  return state.ideas
    .filter(ideaMatches)
    .sort((a, b) => {
      const result = new Date(b.lastUpdated) - new Date(a.lastUpdated);
      return state.sortDesc ? result : -result;
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
          <td>${tierPill(idea.tier)}</td>
          <td>
            <span class="ticker">${escapeHtml(idea.ticker)}</span>
            <span class="company">${escapeHtml(idea.name)}</span>
          </td>
          <td>${bilingualText(idea, "theme")}</td>
          <td>${bilingualText(idea, "thesis")}</td>
          <td><a class="evidence-link" href="${escapeHtml(idea.evidence?.[0]?.url ?? "#")}" target="_blank" rel="noreferrer">${idea.evidence?.length ?? 0} 条来源</a></td>
          <td>${escapeHtml(idea.lastUpdated)}</td>
        </tr>
      `;
    })
    .join("");

  document.querySelectorAll(".idea-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedId = row.dataset.id;
      renderTable();
      renderDetail();
    });
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
}

function render() {
  updateCounts();
  renderTable();
  renderDetail();
}

async function boot() {
  try {
    const response = await fetch("./data/ideas.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.ideas = data.ideas ?? [];
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
  renderTable();
  renderDetail();
});

els.sort.addEventListener("click", () => {
  state.sortDesc = !state.sortDesc;
  els.sort.textContent = state.sortDesc ? "按更新时间排序" : "按旧到新排序";
  renderTable();
});

els.tierButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.tier = button.dataset.tier;
    els.tierButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.selectedId = filteredIdeas()[0]?.id ?? null;
    renderTable();
    renderDetail();
  });
});

boot();
