(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?d.credentials="include":t.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(t){if(t.ep)return;t.ep=!0;const d=a(t);fetch(t.href,d)}})();const v=document.getElementById("main-content"),M=document.querySelectorAll(".nav-links a"),b={"":y,"#home":y,"#portfolio":A,"#blog":vs},r={name:"Ahn Sungjin",title:"Enterprise GenAI Architect + Product Lead",description:"대규모 IT/DX 프로젝트 총괄 경험을 바탕으로, 생성형 AI(vLLM · Multi-Agent · RAG · MCP)를 활용해 엔터프라이즈 환경의 복잡한 비즈니스 문제를 해결하는 AI Product Lead입니다. 기술 아키텍처 설계부터 AI 서비스 제품화까지 전 과정을 End-to-End로 리딩합니다.",coreRoles:[{title:"1. GenAI Platform Architecture & Integration Lead",subTitle:"GenAI 플랫폼 아키텍처 설계 및 통합 리딩",bullets:["엔터프라이즈 환경(On-Premise / Cloud)에서 GenAI 플랫폼 아키텍처 설계 및 기술 전략 수립","Kubernetes 기반 인프라 제약을 고려한 생성형 AI 파이프라인 설계 및 운영 이슈 해결 리딩","레거시 및 내부 시스템과의 연계를 포함한 End-to-End 통합 아키텍처 설계","정형/비정형 데이터 통합 처리 기반의 AI 서비스 아키텍처 및 데이터 파이프라인 총괄"]},{title:"2. Agentic AI Workflow & Product Leadership",subTitle:"Agentic AI 워크플로우 및 제품 리딩",bullets:["요구사항 정의부터 설계, 개발, 배포까지 AI 제품 Lifecycle 전반 리딩 (PM 역할)","LLM 및 Agentic AI 구조 이해를 기반으로 Multi-Agent Workflow 설계","단일 챗봇을 넘어 Task 기반 Sub-Agent 협업 구조 및 자동화 파이프라인 설계","도메인 특화 AI 서비스 기획 및 실제 업무 생산성 개선 모델 설계"]},{title:"3. AI-driven Productivity & Rapid Prototyping",subTitle:"AI 기반 생산성 혁신 및 빠른 실행",bullets:["AI 기반 업무 자동화 및 생산성 향상을 위한 실험 및 적용 지속 추진","바이브 코딩 및 AI 도구 활용한 빠른 PoC 및 내부 서비스 프로토타이핑 주도","기획 → 개발 → 배포까지 End-to-End 직접 수행을 통한 실행력 확보","불확실한 환경에서 빠른 검증과 의사결정을 가능하게 하는 프로토타이핑 전략 운영"]},{title:"4. LLM Systems & AI Infrastructure Architecture",subTitle:"LLM 시스템 및 AI 인프라 아키텍처",bullets:["LLM 기반 AI 시스템 아키텍처 설계 및 전체 구축 Lifecycle 리딩","RAG, Tool Calling, Agent Orchestration을 결합한 복합 AI 서비스 구조 설계","GPU 인프라 기반 대규모 추론 환경 설계 및 vLLM 최적화 경험","성능, 비용, 지연시간을 고려한 대규모 AI 서비스 인프라 설계 및 운영"]}]},S=`
  <p class="det-body-text">금융권 특유의 강력한 망분리 규제로 외부 클라우드 AI(ChatGPT 등) 도입이 전면 차단된 환경에서, 단순 Q&A 챗봇을 넘어 애널리스트·PB의 실제 리서치 업무(시황 분석, 종목 비교, 과거 통계 추론)에 깊숙이 개입하는 <strong>사내 구축형(On-Premise) 생성형 AI 플랫폼</strong>을 E2E 설계하고 딜리버리하는 것이 핵심 미션.</p>
  <p class="det-body-text">자사 LLMOps 솔루션 기반으로 K8s + H200 GPU 인프라 위에 모델 서빙·VectorDB·전처리기까지 통합 운영하는 온프레미스 AI 플랫폼을 구축하고, vLLM으로 오픈소스 LLM을 서빙하여 금융 보안 심의를 통과한 안정적인 AI 서비스를 구현 중.</p>
  <div class="psa">
    <div class="psa-col" style="background:rgba(255,77,106,0.02)">
      <span class="psa-tag problem">Problem</span>
      <div class="psa-item">금융 망분리 → 클라우드 AI 서비스 전면 차단</div>
      <div class="psa-item">금융권 인프라 보안 심의 요건 충족 필요</div>
      <div class="psa-item">정형(재무·수치) + 비정형(리포트·뉴스) 혼재 → 수치 환각 리스크</div>
      <div class="psa-item">단순 챗봇으로는 리서치 업무 복잡도 처리 불가</div>
    </div>
    <div class="psa-col" style="background:rgba(52,211,153,0.02)">
      <span class="psa-tag solution">Solution</span>
      <div class="psa-item">자사 LLMOps 기반 100% On-Premise AI 플랫폼 구축</div>
      <div class="psa-item">vLLM 오픈소스 LLM 서빙 + 보안 심의 내재화</div>
      <div class="psa-item">VDB + RDB 하이브리드 데이터 아키텍처</div>
      <div class="psa-item">Master-Sub Multi-Agent + OOD 신뢰성 설계</div>
    </div>
    <div class="psa-col" style="background:rgba(99,102,241,0.02)">
      <span class="psa-tag arch">Architecture</span>
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.25rem">
        <span class="det-chip">자사 LLMOps</span><span class="det-chip">K8s</span>
        <span class="det-chip">H200 GPU</span><span class="det-chip">vLLM</span>
        <span class="det-chip">Weaviate</span><span class="det-chip">PostgreSQL</span>
        <span class="det-chip">Multi-Agent</span><span class="det-chip">OOD 판별</span>
      </div>
    </div>
  </div>
`,R=`
  <p class="det-body-text">아키텍처에 직접 영향을 미친 핵심 문제와 해결 방향 4가지.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_01</div>
        <div class="c-title">VDB 적재 병목</div>
        <div class="c-desc">수만 건 리포트·공시·뉴스를 순차 임베딩·적재<br>DB 반영 지연 → 최신 정보 갱신 지연</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">비동기 배치 파이프라인</div>
        <div class="c-sol-desc">배치 임베딩 + 비동기 적재로 처리량 개선<br>스케줄 기반 자동 갱신 + 증분 업데이트</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_02</div>
        <div class="c-title">수치 환각</div>
        <div class="c-desc">정형(재무·수치) 데이터를 단일 RAG로 처리<br>벡터 유사도 기반 수치 검색 → 환각 불가피</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">하이브리드 RAG (VDB + RDB)</div>
        <div class="c-sol-desc">수치 → PostgreSQL SQL 직접 쿼리<br>비정형 텍스트 → Weaviate 시맨틱 검색 분리</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_03</div>
        <div class="c-title">복합 질의 한계</div>
        <div class="c-desc">단일 Agent + 다수 Tool 구조에서 복합 도메인 질의<br>컨텍스트 폭증 → 응답 품질·속도 저하</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">Master-Sub Multi-Agent + Tool Isolation</div>
        <div class="c-sol-desc">Master가 의도 분석 → 도메인별 Sub-Agent 위임<br>각 Agent 전용 Tool만 접근 → 크로스-오염 차단</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_04</div>
        <div class="c-title">금융 규제 & 신뢰성</div>
        <div class="c-desc">일반 LLM 거절 로직으론 금융 컴플라이언스 불충분<br>OOD 질의 응답 시 신뢰성·추적성 확보 불가</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">5유형 OOD 판별 + 출처 인덱스</div>
        <div class="c-sol-desc">금융 도메인 특화 5유형 분류 체계 설계<br>전 답변 출처 인덱스 의무 부착 → 추적성 확보</div>
      </div>
    </div>
  </div>
`,P=`
  <p class="det-body-text">사용자 자연어 질의 → Master Agent 의도 분석 → 도메인별 Sub-Agent 위임 → Synthesis → 최종 출력</p>
  <div class="diag-wrap">
    <div class="diag-label">// multi-agent tool calling flow</div>
    <svg width="100%" viewBox="0 0 720 530" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="da" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(99,102,241,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
        <marker id="da2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(52,211,153,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>
      <rect x="210" y="10" width="300" height="44" rx="4" fill="#0a0a0b" stroke="rgba(99,102,241,0.3)" stroke-width="1"/>
      <text x="360" y="27" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#f4f4f5" font-weight="500">사용자 질의</text>
      <text x="360" y="44" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">"A 섹터 최근 한 달 국내 뉴스 요약해줘"</text>
      <line x1="360" y1="54" x2="360" y2="78" stroke="rgba(99,102,241,0.4)" stroke-width="1" marker-end="url(#da)"/>
      <rect x="120" y="78" width="480" height="58" rx="4" fill="rgba(99,102,241,0.07)" stroke="rgba(99,102,241,0.4)" stroke-width="1.5"/>
      <text x="360" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#818cf8" font-weight="600">Master Agent</text>
      <text x="360" y="118" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">의도 분석 · 라우팅 결정 · 병렬/순차 판단 · 하위 에이전트 위임</text>
      <rect x="618" y="88" width="84" height="38" rx="4" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.25)" stroke-width="1"/>
      <text x="660" y="104" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#fb923c" font-weight="600">decision</text>
      <text x="660" y="119" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">병렬 / 순차</text>
      <line x1="240" y1="136" x2="100" y2="178" stroke="rgba(255,255,255,0.08)" stroke-width="1" marker-end="url(#da)"/>
      <line x1="310" y1="136" x2="270" y2="178" stroke="rgba(255,255,255,0.08)" stroke-width="1" marker-end="url(#da)"/>
      <line x1="410" y1="136" x2="445" y2="178" stroke="rgba(255,255,255,0.08)" stroke-width="1" marker-end="url(#da)"/>
      <line x1="490" y1="136" x2="605" y2="178" stroke="rgba(255,255,255,0.08)" stroke-width="1" marker-end="url(#da)"/>
      <rect x="20" y="168" width="680" height="162" rx="4" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="360" y="186" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">Sub-Agent layer — 도메인 격리 · 전용 툴만 접근</text>
      <rect x="28" y="194" width="152" height="44" rx="4" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.25)" stroke-width="1"/>
      <text x="104" y="213" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#34d399" font-weight="600">Market Agent</text>
      <text x="104" y="229" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">시황 · 뉴스 · 공시</text>
      <rect x="28" y="246" width="44" height="20" rx="3" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.15)" stroke-width="1"/>
      <text x="50" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">news</text>
      <rect x="78" y="246" width="48" height="20" rx="3" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.15)" stroke-width="1"/>
      <text x="102" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">disclos.</text>
      <rect x="132" y="246" width="44" height="20" rx="3" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.15)" stroke-width="1"/>
      <text x="154" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">script</text>
      <rect x="196" y="194" width="152" height="44" rx="4" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.25)" stroke-width="1"/>
      <text x="272" y="213" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#60a5fa" font-weight="600">Report Agent</text>
      <text x="272" y="229" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">리포트 · 기업 정보</text>
      <rect x="196" y="246" width="44" height="20" rx="3" fill="rgba(96,165,250,0.04)" stroke="rgba(96,165,250,0.15)" stroke-width="1"/>
      <text x="218" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">report</text>
      <rect x="246" y="246" width="44" height="20" rx="3" fill="rgba(96,165,250,0.04)" stroke="rgba(96,165,250,0.15)" stroke-width="1"/>
      <text x="268" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">entity</text>
      <rect x="296" y="246" width="48" height="20" rx="3" fill="rgba(96,165,250,0.04)" stroke="rgba(96,165,250,0.15)" stroke-width="1"/>
      <text x="320" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">sub_bot</text>
      <rect x="364" y="194" width="152" height="44" rx="4" fill="rgba(107,130,168,0.1)" stroke="rgba(107,130,168,0.25)" stroke-width="1"/>
      <text x="440" y="213" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#a1a1aa" font-weight="600">Product Agent</text>
      <text x="440" y="229" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">상품 정보 · 메타</text>
      <rect x="364" y="246" width="56" height="20" rx="3" fill="rgba(107,130,168,0.06)" stroke="rgba(107,130,168,0.15)" stroke-width="1"/>
      <text x="392" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">p_chat</text>
      <rect x="426" y="246" width="56" height="20" rx="3" fill="rgba(107,130,168,0.06)" stroke="rgba(107,130,168,0.15)" stroke-width="1"/>
      <text x="454" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">p_meta</text>
      <rect x="532" y="194" width="152" height="44" rx="4" fill="rgba(255,77,106,0.06)" stroke="rgba(255,77,106,0.2)" stroke-width="1"/>
      <text x="608" y="213" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#ff4d6a" font-weight="600">Quant Agent</text>
      <text x="608" y="229" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">재무 수치 · 매크로</text>
      <rect x="532" y="246" width="40" height="20" rx="3" fill="rgba(255,77,106,0.04)" stroke="rgba(255,77,106,0.15)" stroke-width="1"/>
      <text x="552" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">coder</text>
      <rect x="578" y="246" width="48" height="20" rx="3" fill="rgba(255,77,106,0.04)" stroke="rgba(255,77,106,0.15)" stroke-width="1"/>
      <text x="602" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">fin.data</text>
      <rect x="632" y="246" width="44" height="20" rx="3" fill="rgba(255,77,106,0.04)" stroke="rgba(255,77,106,0.15)" stroke-width="1"/>
      <text x="654" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#a1a1aa">macro</text>
      <line x1="104" y1="330" x2="290" y2="368" stroke="rgba(255,255,255,0.08)" stroke-width="1" marker-end="url(#da2)"/>
      <line x1="272" y1="330" x2="330" y2="368" stroke="rgba(255,255,255,0.08)" stroke-width="1" marker-end="url(#da2)"/>
      <line x1="440" y1="330" x2="395" y2="368" stroke="rgba(255,255,255,0.08)" stroke-width="1" marker-end="url(#da2)"/>
      <line x1="608" y1="330" x2="440" y2="368" stroke="rgba(255,255,255,0.08)" stroke-width="1" marker-end="url(#da2)"/>
      <rect x="120" y="368" width="480" height="58" rx="4" fill="rgba(52,211,153,0.05)" stroke="rgba(52,211,153,0.3)" stroke-width="1.5"/>
      <text x="360" y="390" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#34d399" font-weight="600">Master Agent — Synthesis</text>
      <text x="360" y="408" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">자료 가중치 · 충돌 해결 · Compliance 검토 · 출처 인덱스 부착</text>
      <line x1="360" y1="426" x2="360" y2="454" stroke="rgba(52,211,153,0.4)" stroke-width="1.5" marker-end="url(#da2)"/>
      <rect x="210" y="454" width="300" height="44" rx="22" fill="#020810" stroke="rgba(52,211,153,0.3)" stroke-width="1"/>
      <text x="360" y="472" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#f4f4f5" font-weight="500">최종 답변 출력</text>
      <text x="360" y="489" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">청크 + 메타데이터 + 출처 인덱스</text>
      <rect x="20" y="512" width="8" height="8" rx="1" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.4)" stroke-width="1"/>
      <text x="34" y="521" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">Market</text>
      <rect x="96" y="512" width="8" height="8" rx="1" fill="rgba(96,165,250,0.3)" stroke="rgba(96,165,250,0.4)" stroke-width="1"/>
      <text x="110" y="521" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">Report</text>
      <rect x="172" y="512" width="8" height="8" rx="1" fill="rgba(107,130,168,0.3)" stroke="rgba(107,130,168,0.4)" stroke-width="1"/>
      <text x="186" y="521" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">Product</text>
      <rect x="252" y="512" width="8" height="8" rx="1" fill="rgba(255,77,106,0.3)" stroke="rgba(255,77,106,0.4)" stroke-width="1"/>
      <text x="266" y="521" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">Quant</text>
      <rect x="316" y="512" width="8" height="8" rx="1" fill="rgba(99,102,241,0.3)" stroke="rgba(99,102,241,0.4)" stroke-width="1"/>
      <text x="330" y="521" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">Master</text>
    </svg>
  </div>

  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>하이브리드 파이프라인 채택 이유</h4>
        <p>비정형 텍스트(VDB)와 정형 수치(RDB)는 특성이 극명히 다름. 단일 RAG는 수치를 벡터 유사도로 가져오다 환각 발생. 수치는 SQL 직접 쿼리, 텍스트는 시맨틱 검색으로 역할 분리.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>Master → Sub-Agent 분리 할당</h4>
        <p>Master Agent가 사용자 의도를 분석해 도메인 전문성이 있는 4개 Sub-Agent로 작업을 분리 위임. 도메인 분리로 각 Agent 컨텍스트를 최소화해 품질과 속도를 동시에 개선.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>Tool Isolation(격리) 패턴</h4>
        <p>각 Sub-Agent는 자신의 도메인 툴에만 접근 가능. 잘못된 소스 크로스-참조를 원천 차단. 금융 도메인에서 출처 오염은 신뢰성 붕괴로 직결되기 때문에 격리 패턴이 핵심.</p>
      </div>
    </div>
  </div>

  <div class="terminal">
    <div class="terminal-body">
      <div class="t-line"><span class="t-comment">// 동적 파라미터 추출</span></div>
      <div class="t-line"><span class="t-key">get_news</span>(<span class="t-val">query</span>=<span class="t-str">"..."</span>, <span class="t-val">sector</span>=<span class="t-str">"A"</span>, <span class="t-val">nation</span>=<span class="t-str">"domestic"</span>, <span class="t-val">date_from</span>=<span class="t-str">"T-30d"</span>, <span class="t-val">top_k</span>=<span class="t-str">10</span>)</div>
      <div class="t-line" style="margin-top:8px"><span class="t-comment">// Agent가 질의에서 타입·엔티티·기간·범위를 자동 추론 → 파라미터 구성</span></div>
      <div class="t-line"><span class="t-comment">// Metadata Pre-filter → 탐색 공간 선제 축소 AND 시맨틱 유사도 계산</span></div>
    </div>
  </div>
`,I=`
  <div class="insights">
    <div class="insight">
      <div class="i-num">①</div>
      <div class="i-body">
        <h4>AI Portal UX &amp; Service Design <span style="font-weight:400;color:var(--text-3)">— AI 워크플로우 및 포털 화면 기획</span></h4>
        <p><span class="det-chip">AI Chat</span> <span class="det-chip">Dynamic UI</span> <span class="det-chip">Human-in-the-Loop</span></p>
        <p>복잡한 멀티 에이전트의 추론 과정(뉴스 요약, 실적 비교, 문서 번역 등)을 현업 애널리스트와 PB가 직관적으로 활용할 수 있도록, AI 워크플로우에 최적화된 전사 포털 및 챗 인터페이스(UI/UX) 기획.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">②</div>
      <div class="i-body">
        <h4>AI &amp; Agent Workflow <span style="font-weight:400;color:var(--text-3)">— AI 로직 및 에이전트 설계</span></h4>
        <p><span class="det-chip">vLLM</span> <span class="det-chip">Open-source LLM</span> <span class="det-chip">Multi-Agent</span> <span class="det-chip">Tool Calling</span></p>
        <p>단일 챗봇을 넘어 업무 목적별(시황, 리포트, 재무 등)로 특화된 멀티 에이전트 워크플로우를 기획하고, 13개 이상의 툴(Tool)을 연동하여 복합적인 질문을 처리하는 AI 로직 설계.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">③</div>
      <div class="i-body">
        <h4>Data Pipeline &amp; Hybrid RAG <span style="font-weight:400;color:var(--text-3)">— 데이터 처리 및 검색 아키텍처</span></h4>
        <p><span class="det-chip">Vector DB</span> <span class="det-chip">PostgreSQL (RDB)</span> <span class="det-chip">Hybrid Search</span></p>
        <p>환각(Hallucination) 방지를 위해 정형 수치 데이터(SQL 쿼리)와 비정형 텍스트(시맨틱 검색)를 분리하여 탐색하는 하이브리드 파이프라인 설계 및 대규모 데이터 적재 조율.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">④</div>
      <div class="i-body">
        <h4>Infra &amp; Enterprise Security <span style="font-weight:400;color:var(--text-3)">— 엔터프라이즈 인프라 및 보안 대응</span></h4>
        <p><span class="det-chip">On-Premise</span> <span class="det-chip">Kubernetes (K8s)</span> <span class="det-chip">H200 GPU</span> <span class="det-chip">Compliance</span></p>
        <p>퍼블릭 클라우드가 차단된 금융권 망분리 환경에서 K8s 기반의 고성능 GPU 할당 및 모델 서빙 인프라 구축을 리딩하고, 까다로운 보안성 심의 규제 사전 대응.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">⑤</div>
      <div class="i-body">
        <h4>LLMOps &amp; Performance Optimization <span style="font-weight:400;color:var(--text-3)">— 성능 최적화 및 운영</span></h4>
        <p><span class="det-chip">Batch Processing</span> <span class="det-chip">Scale-out</span> <span class="det-chip">OOD (Out-of-Domain)</span></p>
        <p>대규모 데이터 적재 시 발생하는 속도 병목을 비동기/배치 처리와 GPU 분산 배포(Scale-out)로 해결하고, OOD 판별 로직을 적용하여 금융권 수준의 답변 신뢰성(Zero-Hallucination) 확보.</p>
      </div>
    </div>
  </div>
`,B=`
  <p class="det-body-text">진행 중인 프로젝트 — 모든 기술 의사결정의 기준이 된 원칙들과 현재 상태.</p>
  <div class="det-principles">
    <div class="det-principle">
      <div class="p-idx">01</div>
      <div class="p-content">
        <div class="p-eng">silence_over_hallucination</div>
        <div class="p-title">환각보다 침묵이 낫다</div>
        <div class="p-desc">수치 데이터는 RAG로 생성하지 않고 RDB SQL 직접 조회. 모르면 모른다고 답하는 OOD 설계가 금융 도메인 신뢰성의 핵심.</div>
      </div>
    </div>
    <div class="det-principle">
      <div class="p-idx">02</div>
      <div class="p-content">
        <div class="p-eng">incremental_complexity</div>
        <div class="p-title">단계적 복잡도</div>
        <div class="p-desc">처음부터 Multi-Agent를 강요하지 않음. 단일 Agent + Multi-Tool로 안정성 확보 후 단계적 확장.</div>
      </div>
    </div>
    <div class="det-principle">
      <div class="p-idx">03</div>
      <div class="p-content">
        <div class="p-eng">source_traceability</div>
        <div class="p-title">출처 추적 가능성</div>
        <div class="p-desc">모든 답변에 출처 인덱스 의무 부착. 금융 컴플라이언스 요건 + 사용자 신뢰 확보의 두 목적을 동시에 충족.</div>
      </div>
    </div>
    <div class="det-principle">
      <div class="p-idx">04</div>
      <div class="p-content">
        <div class="p-eng">air_gap_first</div>
        <div class="p-title">폐쇄망 퍼스트 아키텍처</div>
        <div class="p-desc">외부 연결 없음을 제약이 아닌 설계 기준으로 삼음. 자사 LLMOps 솔루션 기반으로 GPU 서빙·VectorDB·전처리기까지 내부 자급자족 구조로 완결.</div>
      </div>
    </div>
  </div>
  <div class="career-box" style="margin-top:1.4rem">
    <span style="color:var(--indigo-hi)">// current_status</span><br>
    금융 보안 심의 진행 중 · 핵심 인프라 구축 완료 (K8s + vLLM + VDB/RDB 파이프라인)<br>
    애널리스트·PB 대상 내부 베타 검증 진행 중<br>
    <span style="color:var(--indigo-hi)">// next</span><br>
    Multi-Agent Phase 2 전환 · 추가 도메인 Agent 확장 예정
  </div>
`,L=`
  <p class="det-body-text">부서별로 분산된 챗봇 구조의 한계를 극복하고, 멀티턴 대화 · 하이브리드 검색 · Multi-Agent 구조를 도입하여 전사 정보 허브로 확장한 AI 어시스턴트 고도화 프로젝트를 PM으로서 총괄 리딩함.</p>
  <div class="psa">
    <div class="psa-col" style="background:rgba(255,77,106,0.02)">
      <span class="psa-tag problem">Problem</span>
      <div class="psa-item">단일 턴 응답 구조 → 대화 맥락 단절</div>
      <div class="psa-item">키워드 검색 한계 → 검색 정밀도 부족</div>
      <div class="psa-item">HR · 사규 · IT 등 부서별 분산 챗봇 구조</div>
      <div class="psa-item">수치 데이터 분석 접근성 낮음 (비개발자)</div>
    </div>
    <div class="psa-col" style="background:rgba(52,211,153,0.02)">
      <span class="psa-tag solution">Solution</span>
      <div class="psa-item">Memory + AgentFlow 기반 멀티턴 대화 구조</div>
      <div class="psa-item">BM25 + 벡터 + 메타필터 하이브리드 검색</div>
      <div class="psa-item">통합 · 실적 · 리서치 3개 도메인 Agent 분화</div>
      <div class="psa-item">Text-to-SQL 자동 변환 + 재시도 루프</div>
    </div>
    <div class="psa-col" style="background:rgba(99,102,241,0.02)">
      <span class="psa-tag arch">Architecture</span>
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.25rem">
        <span class="det-chip">K8s · MSA</span>
        <span class="det-chip">vLLM</span>
        <span class="det-chip">Weaviate</span>
        <span class="det-chip">MariaDB</span>
        <span class="det-chip">Multi-Agent</span>
        <span class="det-chip">GenOS</span>
        <span class="det-chip">Text-to-SQL</span>
      </div>
    </div>
  </div>
`,_=`
  <p class="det-body-text">아키텍처에 직접 영향을 미친 핵심 문제와 해결 방향 4가지.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_01</div>
        <div class="c-title">분산 챗봇 사일로</div>
        <div class="c-desc">HR·사규·IT 부서별 챗봇이 각각 분리<br>복합 질의 시 여러 챗봇을 따로 조회해야 함</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">3개 도메인 Agent + 전사 지식 DB 통합</div>
        <div class="c-sol-desc">통합·실적·리서치 Agent로 역할 분리 후 단일 인터페이스 통합<br>하나의 질문으로 복합 도메인 횡단 응답</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_02</div>
        <div class="c-title">검색 정밀도 한계</div>
        <div class="c-desc">단일 벡터 검색으로는 금융 도메인 특수 표현 정규화 불가<br>키워드 정확도와 의미 검색 유연성을 동시에 확보하기 어려움</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">BM25 + 벡터 + 메타필터 3단 하이브리드</div>
        <div class="c-sol-desc">한글 형태소 분석기 + 금융 동의어 사전으로 도메인 특화<br>로그 기반 동의어 사전 지속 갱신으로 검색 품질 장기 유지</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_03</div>
        <div class="c-title">수치 분석 접근성</div>
        <div class="c-desc">실적·수수료 등 정형 데이터 분석은 개발자만 가능<br>비개발자가 CSV 업로드 후 SQL 직접 작성해야 하는 진입 장벽</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">Text-to-SQL + 최대 3회 재시도 루프</div>
        <div class="c-sol-desc">자연어 → SQL 자동 변환 후 실패 시 원인 추론·재생성<br>비개발자도 자연어로 즉시 데이터 분석 가능</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_04</div>
        <div class="c-title">콘텐츠 신뢰성 & 배포 리스크</div>
        <div class="c-desc">미검증 콘텐츠의 RAG 즉시 노출 → 환각·컴플라이언스 리스크<br>기존 시스템 일괄 전환 시 서비스 단절 위험</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">3단계 승인 프로세스 + 5단계 마일스톤 배포</div>
        <div class="c-sol-desc">검증된 콘텐츠만 RAG 노출 → 금융 오답 원천 차단<br>단계별 검증 후 점진 전환 → 롤백 리스크 최소화</div>
      </div>
    </div>
  </div>
`,D=`
  <p class="det-body-text">전사 AI 인프라 수준의 5가지 핵심 기능.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">feature_01</div>
        <div class="c-title">멀티턴 대화</div>
        <div class="c-desc">단일 턴 응답 구조 → 대화 맥락 단절<br>연속 질문 시 컨텍스트 소실</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">Memory + AgentFlow 멀티턴 구조</div>
        <div class="c-sol-desc">이전 컨텍스트 유지 · 의도 변화 감지<br>명확화 질문 자동 유도 · 대화 흐름 끊김 없음</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">feature_02</div>
        <div class="c-title">하이브리드 검색</div>
        <div class="c-desc">키워드 검색 한계 → 의미 기반 검색 실패<br>금융 도메인 특수 표현 정규화 불가</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">BM25 + 벡터 + 메타필터 3단 구조</div>
        <div class="c-sol-desc">한글 형태소 분석기 + 금융 동의어 사전<br>정밀성과 유연성 동시 확보 · 도메인 특화 표현 정규화</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">feature_03</div>
        <div class="c-title">통합 Agent</div>
        <div class="c-desc">HR · 사규 · IT 부서별 분산 챗봇 사일로<br>복합 질의 시 여러 챗봇을 따로 질문해야 함</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">전사 지식 DB 단일 통합</div>
        <div class="c-sol-desc">도메인 자동 인식 · 멀티 문서 횡단 검색<br>하나의 질문으로 복합 도메인 통합 응답</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">feature_04</div>
        <div class="c-title">실적 Agent (Text-to-SQL)</div>
        <div class="c-desc">수치 데이터 분석 → 개발자만 가능<br>비정형 CSV 업로드 후 분석 진입 장벽</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">자연어 → SQL 자동 변환 + 재시도 루프</div>
        <div class="c-sol-desc">CSV/XLS 업로드 → DB 자동 생성 → SQL 변환·실행<br>실패 시 최대 3회 재시도 · 비개발자도 즉시 분석</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">feature_05</div>
        <div class="c-title">리서치 Agent</div>
        <div class="c-desc">파편화된 투자 정보 수동 수집<br>종목 분석 리포트 작성에 수 시간 소요</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">외부 금융 API 통합 + 리포트 자동 생성</div>
        <div class="c-sol-desc">실시간 실적·재무·뉴스 자동 수집<br>종목 분석 리포트 초안 생성 · 포트폴리오 조정 의견</div>
      </div>
    </div>
  </div>
`,O=`
  <p class="det-body-text">사용자 필요에 따라 선택하는 3개의 독립 챗봇 — 공통 AI 인프라 위에서 동작.</p>
  <div class="diag-wrap">
    <div class="diag-label">// 3 independent chatbots — shared GenOS platform</div>
    <svg width="100%" viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="ma" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(99,102,241,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
        <marker id="ma2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>

      <!-- User selects one chatbot -->
      <rect x="160" y="10" width="400" height="36" rx="4" fill="#0a0a0b" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <text x="360" y="24" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#a1a1aa" font-weight="500">사용자</text>
      <text x="360" y="38" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">업무 목적에 맞는 챗봇을 선택</text>

      <!-- arrows down to 3 chatbots -->
      <line x1="200" y1="46" x2="135" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="1" marker-end="url(#ma2)"/>
      <line x1="360" y1="46" x2="360" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="1" marker-end="url(#ma2)"/>
      <line x1="520" y1="46" x2="585" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="1" marker-end="url(#ma2)"/>

      <!-- ── 통합 AI 어시스턴트 ── -->
      <rect x="20" y="80" width="210" height="54" rx="4" fill="rgba(96,165,250,0.07)" stroke="rgba(96,165,250,0.35)" stroke-width="1.5"/>
      <text x="125" y="101" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#60a5fa" font-weight="600">통합 AI 어시스턴트</text>
      <text x="125" y="117" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">HR · 사규 · IT 전사 지식 검색</text>
      <text x="125" y="130" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#3f3f46">멀티턴 · 하이브리드 검색 · 복합 도메인</text>
      <!-- 통합 tools -->
      <rect x="20" y="146" width="62" height="20" rx="3" fill="rgba(96,165,250,0.04)" stroke="rgba(96,165,250,0.18)" stroke-width="1"/>
      <text x="51" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">knowledge</text>
      <rect x="88" y="146" width="62" height="20" rx="3" fill="rgba(96,165,250,0.04)" stroke="rgba(96,165,250,0.18)" stroke-width="1"/>
      <text x="119" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">hybrid_srch</text>
      <rect x="156" y="146" width="68" height="20" rx="3" fill="rgba(96,165,250,0.04)" stroke="rgba(96,165,250,0.18)" stroke-width="1"/>
      <text x="190" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">cross_domain</text>

      <!-- ── 실적 분석 챗봇 ── -->
      <rect x="255" y="80" width="210" height="54" rx="4" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.35)" stroke-width="1.5"/>
      <text x="360" y="101" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#fb923c" font-weight="600">실적 분석 챗봇</text>
      <text x="360" y="117" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">Text-to-SQL · 재무 데이터 분석</text>
      <text x="360" y="130" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#3f3f46">자연어 → SQL 자동 변환 · 재시도 루프</text>
      <!-- 실적 tools -->
      <rect x="255" y="146" width="58" height="20" rx="3" fill="rgba(251,146,60,0.04)" stroke="rgba(251,146,60,0.18)" stroke-width="1"/>
      <text x="284" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">text2sql</text>
      <rect x="319" y="146" width="58" height="20" rx="3" fill="rgba(251,146,60,0.04)" stroke="rgba(251,146,60,0.18)" stroke-width="1"/>
      <text x="348" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">mariadb</text>
      <rect x="383" y="146" width="58" height="20" rx="3" fill="rgba(251,146,60,0.04)" stroke="rgba(251,146,60,0.18)" stroke-width="1"/>
      <text x="412" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">csv_upload</text>

      <!-- ── 리서치 챗봇 ── -->
      <rect x="490" y="80" width="210" height="54" rx="4" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.35)" stroke-width="1.5"/>
      <text x="595" y="101" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#34d399" font-weight="600">리서치 챗봇</text>
      <text x="595" y="117" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">종목 분석 · 외부 데이터 수집</text>
      <text x="595" y="130" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#3f3f46">외부 API · 리포트 자동 생성 · 포트폴리오</text>
      <!-- 리서치 tools -->
      <rect x="490" y="146" width="58" height="20" rx="3" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.18)" stroke-width="1"/>
      <text x="519" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">ext_api</text>
      <rect x="554" y="146" width="58" height="20" rx="3" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.18)" stroke-width="1"/>
      <text x="583" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">report_gen</text>
      <rect x="618" y="146" width="58" height="20" rx="3" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.18)" stroke-width="1"/>
      <text x="647" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">portfolio</text>

      <!-- shared platform separator -->
      <line x1="20" y1="192" x2="700" y2="192" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="360" y="208" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#3f3f46">// shared AI platform — 3 chatbots above run on same infra</text>

      <!-- GenOS platform box -->
      <rect x="20" y="220" width="680" height="78" rx="4" fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.2)" stroke-width="1" stroke-dasharray="3 2"/>
      <text x="360" y="240" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#818cf8" font-weight="600">GenOS · Agent Studio · Knowledge Studio</text>
      <!-- platform layers -->
      <rect x="36" y="250" width="148" height="34" rx="3" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
      <text x="110" y="264" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#818cf8">vLLM · LLM Serving</text>
      <text x="110" y="278" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#52525b">고처리량 LLM 추론</text>
      <rect x="196" y="250" width="148" height="34" rx="3" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
      <text x="270" y="264" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#818cf8">Weaviate VDB</text>
      <text x="270" y="278" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#52525b">벡터 검색 · BM25</text>
      <rect x="356" y="250" width="148" height="34" rx="3" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
      <text x="430" y="264" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#818cf8">MariaDB · MongoDB</text>
      <text x="430" y="278" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#52525b">정형 · 비정형 데이터</text>
      <rect x="516" y="250" width="168" height="34" rx="3" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
      <text x="600" y="264" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#818cf8">Kubernetes · Istio</text>
      <text x="600" y="278" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#52525b">컨테이너 오케스트레이션</text>

      <!-- legend -->
      <rect x="20" y="314" width="8" height="8" rx="1" fill="rgba(96,165,250,0.3)" stroke="rgba(96,165,250,0.5)" stroke-width="1"/>
      <text x="34" y="323" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">통합 AI 어시스턴트</text>
      <rect x="200" y="314" width="8" height="8" rx="1" fill="rgba(251,146,60,0.3)" stroke="rgba(251,146,60,0.5)" stroke-width="1"/>
      <text x="214" y="323" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">실적 분석 챗봇</text>
      <rect x="370" y="314" width="8" height="8" rx="1" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.5)" stroke-width="1"/>
      <text x="384" y="323" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">리서치 챗봇</text>
      <rect x="510" y="314" width="8" height="8" rx="1" fill="rgba(99,102,241,0.3)" stroke="rgba(99,102,241,0.5)" stroke-width="1"/>
      <text x="524" y="323" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">공유 AI 플랫폼</text>
    </svg>
  </div>

  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>챗봇을 하나로 통합하지 않은 이유</h4>
        <p>통합·실적·리서치는 검색 소스·도구·응답 형식이 모두 다름. 단일 챗봇에 모든 툴을 주면 컨텍스트가 비대해져 처리 정확도 저하. 목적별로 독립 챗봇을 분리해 각 도메인 집중도를 확보.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>하이브리드 검색 3단 구조의 핵심</h4>
        <p>BM25는 키워드 정확 매칭, 벡터는 의미 유사도, 메타필터는 범위 선제 축소. 3단 AND 구조로 탐색 공간을 줄이며 정밀도와 재현율을 동시에 잡음. 금융 동의어 사전은 검색 품질의 장기 유지 장치.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>Text-to-SQL 재시도 루프 패턴</h4>
        <p>LLM이 생성한 SQL은 1회 실행 시 실패 확률 존재. 실패 원인(문법 오류, 컬럼명 불일치 등)을 평가 모듈이 진단 후 수정 지시를 LLM에 재전달. 3회 루프로 성공률 대폭 향상.</p>
      </div>
    </div>
  </div>

  <div class="terminal">
    <div class="terminal-body">
      <div class="t-line"><span class="t-comment">// Text-to-SQL 재시도 루프</span></div>
      <div class="t-line"><span class="t-key">query</span>(<span class="t-str">"최근 3개월 WM 수수료 수익 지점별 비교"</span>)</div>
      <div class="t-line" style="margin-top:8px"><span class="t-comment">// SQL 생성 → 실행 → 실패 시 평가 모듈이 원인 분석 → 재생성 (최대 3회)</span></div>
      <div class="t-line"><span class="t-key">evaluator</span>.<span class="t-val">check</span>(<span class="t-str">sql</span>, <span class="t-str">error</span>) → <span class="t-val">retry</span>(<span class="t-str">max=3</span>)</div>
    </div>
  </div>
`,J=`
  <div class="insights">
    <div class="insight">
      <div class="i-num">①</div>
      <div class="i-body">
        <h4>AI Assistant UX &amp; Multi-turn Design <span style="font-weight:400;color:var(--text-3)">— AI 어시스턴트 UX 및 멀티턴 대화 설계</span></h4>
        <p><span class="det-chip">Memory</span> <span class="det-chip">AgentFlow</span> <span class="det-chip">Human-in-the-Loop</span></p>
        <p>단일 질문·응답에 그치던 챗봇을 대화 맥락을 이어가는 멀티턴 구조로 전환하고, 사용자 의도 변화 감지 및 명확화 질문 자동 유도 흐름을 포함한 AI 어시스턴트 UX 전반을 설계.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">②</div>
      <div class="i-body">
        <h4>Multi-Agent Workflow Design <span style="font-weight:400;color:var(--text-3)">— 멀티 에이전트 워크플로우 설계</span></h4>
        <p><span class="det-chip">Multi-Agent</span> <span class="det-chip">Tool Calling</span> <span class="det-chip">Text-to-SQL</span> <span class="det-chip">MCP</span></p>
        <p>통합·실적·리서치 3개 도메인으로 역할을 분리한 멀티 에이전트 구조를 기획하고, Text-to-SQL 재시도 루프 및 외부 금융 API 연동 로직을 포함한 AI 워크플로우 설계.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">③</div>
      <div class="i-body">
        <h4>Hybrid Search &amp; Knowledge Architecture <span style="font-weight:400;color:var(--text-3)">— 하이브리드 검색 및 지식 아키텍처</span></h4>
        <p><span class="det-chip">Weaviate VDB</span> <span class="det-chip">BM25</span> <span class="det-chip">메타필터</span> <span class="det-chip">금융 동의어 사전</span></p>
        <p>키워드 정밀도(BM25)와 의미 검색 유연성(벡터)을 결합한 3단 하이브리드 구조를 설계하고, 한글 형태소 분석기·금융 동의어 사전 및 3단계 콘텐츠 승인 프로세스로 검색 품질 관리.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">④</div>
      <div class="i-body">
        <h4>Data &amp; Content Pipeline <span style="font-weight:400;color:var(--text-3)">— 데이터 및 콘텐츠 파이프라인</span></h4>
        <p><span class="det-chip">MariaDB</span> <span class="det-chip">MongoDB</span> <span class="det-chip">Redis</span> <span class="det-chip">RabbitMQ</span></p>
        <p>정형(MariaDB)·비정형(MongoDB) 데이터를 분리 관리하고, 메시지 큐(RabbitMQ) 기반 비동기 처리와 캐시(Redis)로 응답 성능을 확보. HR·사규·IT 등 전사 콘텐츠 단일 지식 DB로 통합 조율.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">⑤</div>
      <div class="i-body">
        <h4>AI Platform &amp; LLM Infrastructure <span style="font-weight:400;color:var(--text-3)">— AI 플랫폼 및 인프라 운영</span></h4>
        <p><span class="det-chip">GenOS</span> <span class="det-chip">Kubernetes</span> <span class="det-chip">vLLM</span> <span class="det-chip">MSA</span></p>
        <p>GenOS 플랫폼(Agent Studio · Knowledge Studio) 기반으로 에이전트 개발 환경을 통합하고, K8s MSA 구조 위에서 LLM 서빙·임베딩·검색 각 컴포넌트를 독립적으로 확장 가능하도록 인프라 구성 리딩.</p>
      </div>
    </div>
  </div>
`,z=`
  <p class="det-body-text">실제 미래에셋증권 직원들이 사용하는 시나리오 기반으로 설계된 주요 활용 사례.</p>
  <table class="dtable">
    <thead>
      <tr>
        <th style="width:120px">사용 장면</th>
        <th>질의 예시</th>
        <th>처리 Agent · 효과</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="domain-tag d-agent">WM 상담</span></td>
        <td><span class="decision-main">"ISA 중도해지 시 세금이 얼마야?" / "ELS 가입 필수 서류가 뭐야?"</span></td>
        <td><span class="decision-main">통합 Agent → 사규 검색</span><div class="decision-why">통화 중 즉시 조회 · 상담 처리 시간 단축</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-data">종목 분석</span></td>
        <td><span class="decision-main">"X 종목 투자 보고서 작성해줘"</span></td>
        <td><span class="decision-main">리서치 Agent → 실적·재무·뉴스 자동 수집</span><div class="decision-why">리포트 초안 자동 생성 · 분석 시간 대폭 단축</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-ood">실적 분석</span></td>
        <td><span class="decision-main">"최근 3개월 WM 수수료 수익 지점별 비교"</span></td>
        <td><span class="decision-main">실적 Agent → Text-to-SQL 자동 변환</span><div class="decision-why">비개발자도 자연어로 즉시 데이터 분석</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-infra">복합 질의</span></td>
        <td><span class="decision-main">"육아휴직하면 IT 시스템 접근 권한은 어떻게 돼?"</span></td>
        <td><span class="decision-main">통합 Agent → HR + IT 도메인 횡단 검색</span><div class="decision-why">여러 챗봇 이동 없이 단일 질문으로 통합 응답</div></td>
      </tr>
    </tbody>
  </table>
`,E=`
  <p class="det-body-text">3년간 현대/기아 딜러십 전 세계 20여 개국 동시 배포를 총괄한 글로벌 B2B 플랫폼. Unity 엔진 기반 실시간 3D 렌더링 시스템 기획, 대용량 3D 에셋 경량화 기준 수립, 글로벌 인프라 설계까지 기술 구조를 직접 설계한 경험.</p>
  <p class="det-body-text">전 세계 현대/기아 자동차 매장에서 사용되는 실시간 3D 차량 정보 제공 플랫폼을 유니티 엔진 기반으로 구축. Web API 연동으로 차종별 최신 사양·가격 정보를 실시간 업데이트하고, 색상·휠·인테리어 등 수백 가지 옵션 조합을 인터랙티브한 360° 3D로 시각화. 대용량 3D 모델 경량화 가이드라인을 수립하고 다국어·다기기 최적화 UX를 기획하여 전 세계 20여 개국 딜러십에 성공적으로 배포.</p>

  <div class="psa">
    <div class="psa-col">
      <span class="psa-tag problem">Problem</span>
      <div class="psa-item">차종별 수백 가지 옵션 조합을 실시간으로 시각화할 플랫폼 부재</div>
      <div class="psa-item">대용량 3D 에셋 — 웹/키오스크 환경 실시간 렌더링 성능 한계</div>
      <div class="psa-item">20개국 동시 서비스 — 국가별 차종·사양 차이 + 다국어 대응</div>
      <div class="psa-item">기기별(태블릿·키오스크·PC) 해상도·성능 격차 대응 필요</div>
    </div>
    <div class="psa-col">
      <span class="psa-tag solution">Solution</span>
      <div class="psa-item">Unity 엔진 기반 실시간 360° 3D 렌더링 시스템 구축</div>
      <div class="psa-item">3D 에셋 경량화 가이드라인 수립 (폴리곤·텍스처·LOD 기준 정의)</div>
      <div class="psa-item">옵션별 에셋 모듈화 — 색상·휠·인테리어 독립 교체 구조</div>
      <div class="psa-item">Web API 기반 사양·가격 실시간 동기화 + 다국어(i18n)</div>
    </div>
    <div class="psa-col">
      <span class="psa-tag arch">Key Tech</span>
      <div style="margin-top:6px;">
        <span class="det-chip">Unity Engine</span>
        <span class="det-chip">Real-time 3D</span>
        <span class="det-chip">Web API</span>
        <span class="det-chip">글로벌 CDN</span>
        <span class="det-chip">다국어(i18n)</span>
        <span class="det-chip">LOD 경량화</span>
        <span class="det-chip">옵션 조합 로직</span>
        <span class="det-chip">다기기 UX</span>
      </div>
    </div>
  </div>
`,T=`
  <p class="det-body-text">3년 프로젝트에서 기술 전략부터 글로벌 배포까지 직접 개입한 5가지 핵심 기여.</p>
  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>유니티 기반 실시간 3D 시스템 기획</h4>
        <p>Web API 연동 설계 및 실시간 업데이트 시스템 구축 총괄. 차종별 사양·가격·옵션 데이터의 실시간 동기화 체계 설계. 대용량 3D 모델 데이터 관리 전략 수립.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>3D 에셋 경량화 기준 수립 및 기술 표준화</h4>
        <p>차량 3D 모델의 폴리곤 수·텍스처 해상도·에셋 용량 기준 직접 정의. 옵션별 에셋 모듈화 구조(색상·휠·인테리어 독립 교체) 설계로 수백 가지 조합을 효율적으로 관리. 기준 수립 결과: 원소스 멀티유즈 구조로 AR/Mobile 제작비 각 20% 수준으로 절감.</p>
      </div>
    </div>
  </div>

  <figure style="margin:1.2rem 0;">
    <img src="./hyundai-kia/pipeline.png" alt="3D Configurator 파이프라인" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
    <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">차량 3D 모델 생성 파이프라인 — 에셋 모듈화 및 경량화 기준 적용</figcaption>
  </figure>

  <div class="insights">
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>옵션 조합 비즈니스 룰 엔진 설계</h4>
        <p>수백 가지 옵션 간 종속 관계(특정 색상에서만 선택 가능한 휠 등)를 처리하는 비즈니스 룰 엔진 설계. 국가별 사양 차이 반영 로직까지 요구사항으로 정의.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">04</div>
      <div class="i-body">
        <h4>글로벌 배포 및 다국어·다기기 UX 기획</h4>
        <p>20여 개국 동시 배포를 위한 서버 인프라 구성 기획. 국가별 차종 라인업·사양 차이 대응 및 기기별(태블릿·키오스크·PC) UX 분기 설계.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">05</div>
      <div class="i-body">
        <h4>3년 장기 프로젝트 단계적 확장 관리</h4>
        <p>2020~2023년 차종 추가·국가 확장·기능 고도화를 지속 관리. 초기 설계의 확장성이 3년 운영을 가능하게 한 구조적 기반.</p>
      </div>
    </div>
  </div>
`,C=`
  <p class="det-body-text">글로벌 실시간 3D 플랫폼 구현의 핵심 기술 과제 3가지.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">challenge_01</div>
        <div class="c-title">대용량 3D 에셋 실시간 렌더링 성능</div>
        <div class="c-desc">차량 외장·내장·옵션별 파츠의 고해상도 3D 에셋은 웹/키오스크 환경에서 로딩 지연과 렌더링 성능 저하 발생. 품질과 성능의 트레이드오프.</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">3D 에셋 경량화 기준 수립 + LOD 적용</div>
        <div class="c-sol-desc">폴리곤 수·텍스처 해상도·에셋 용량 기준 정의. LOD 적용으로 거리·기기 성능에 따른 자동 품질 분기. 기기별 최적화 에셋 분리 배포.</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">challenge_02</div>
        <div class="c-title">수백 가지 옵션 조합 동적 교체 로직</div>
        <div class="c-desc">색상·휠·인테리어·트림 수백 가지 조합에서 옵션 간 종속 관계와 국가별 사양 차이를 동시에 처리해야 함.</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">옵션 모듈화 + 비즈니스 룰 엔진</div>
        <div class="c-sol-desc">옵션별 3D 에셋을 독립 모듈로 설계하여 동적 교체. 옵션 간 종속 관계를 비즈니스 룰 엔진으로 처리, 국가별 사양 차이를 데이터 레이어에서 분리 관리.</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">challenge_03</div>
        <div class="c-title">20개국 동시 서비스 글로벌 인프라</div>
        <div class="c-desc">국가별 차종 라인업·가격·사양이 다르고, 언어·기기·네트워크 환경도 상이. 단일 시스템으로 20개국을 동시에 안정적으로 서비스해야 함.</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">CDN 기반 에셋 배포 + 다국어(i18n) 설계</div>
        <div class="c-sol-desc">CDN 기반 에셋 배포로 국가별 로딩 성능 확보. 다국어(i18n) 지원(20개국) + 국가별 차종 데이터 분리 관리. 기기별(태블릿·키오스크·PC) UX 분기 설계.</div>
      </div>
    </div>
  </div>

  <figure style="margin:1.2rem 0;">
    <img src="./hyundai-kia/ux-design.png" alt="화면 설계 기획서" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
    <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">화면 설계 및 UX 기획서 — 시스템·키오스크·태블릿 기기별 분기 설계</figcaption>
  </figure>
`,V=`
  <p class="det-body-text">각 기술 선택의 근거.</p>
  <table class="dtable">
    <thead>
      <tr>
        <th style="width:130px">component</th>
        <th>구현 방식</th>
        <th>선택 근거</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="domain-tag d-infra">Unity Engine</span></td>
        <td><span class="decision-main">실시간 360° 차량 3D 렌더링. 조명·반사·그림자 포함 고품질 비주얼. 색상/옵션 선택 시 즉시 3D 모델 교체 반영.</span></td>
        <td><span class="decision-main">WebGL 직접 구현 대비 실시간 인터랙션 품질 + 개발 생산성 확보</span><div class="decision-why">WebGL 직접 구현 시 렌더링 파이프라인 자체 구축 필요 → 납품 일정 내 불가</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-agent">3D 에셋 경량화</span></td>
        <td><span class="decision-main">폴리곤·텍스처·LOD 기준 수립. 옵션별 에셋 모듈화(색상·휠·인테리어 독립 교체)로 저장소 효율화.</span></td>
        <td><span class="decision-main">원소스 멀티유즈 — PC 기준 AR/Mobile 제작비 각 20% 수준 절감</span><div class="decision-why">기준 없이 개발하면 기기별 성능 편차로 현장 배포 실패</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-data">Web API 연동</span></td>
        <td><span class="decision-main">차종별 최신 사양·가격·옵션 데이터 실시간 동기화. 국가별 사양 차이 및 옵션 종속성 반영 로직.</span></td>
        <td><span class="decision-main">에셋 내 데이터 포함 방식은 업데이트마다 전체 재배포 필요</span><div class="decision-why">하드코딩 방식 대비 국가별 차종 업데이트 유연성 확보</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-ood">글로벌 CDN + i18n</span></td>
        <td><span class="decision-main">20여 개국 동시 운영, 다국어(i18n) 지원. CDN 기반 에셋 배포로 국가별 로딩 성능 확보.</span></td>
        <td><span class="decision-main">국가별 서버 개별 운영 대비 인프라 비용 및 관리 복잡도 절감</span><div class="decision-why">20개국 개별 서버 운영 시 유지보수 비용 선형 증가</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-infra">옵션 조합 로직</span></td>
        <td><span class="decision-main">수백 가지 옵션 조합별 3D 에셋 동적 교체. 옵션 간 종속 관계 비즈니스 룰 엔진.</span></td>
        <td><span class="decision-main">단순 if-else 하드코딩 대비 국가별 예외 케이스 확장 대응</span><div class="decision-why">하드코딩 방식은 국가 추가 시마다 전체 조합 재검증 필요</div></td>
      </tr>
    </tbody>
  </table>
  <div class="pm-scope">
    <div class="pm-scope-label">pm_scope</div>
    <div class="pm-scope-items">
      <span class="pm-chip">실시간 3D 시스템 기획</span>
      <span class="pm-chip">에셋 경량화 기준 수립</span>
      <span class="pm-chip">옵션 조합 로직 설계</span>
      <span class="pm-chip">글로벌 인프라 기획</span>
      <span class="pm-chip">3년 장기 프로젝트 관리</span>
    </div>
  </div>
`,G=`
  <p class="det-body-text">3년 프로젝트(2020~2023) 완료 기준 — 글로벌 배포 및 비즈니스 성과.</p>
  <div class="r-grid">
    <div class="r-card">
      <div class="r-icon">🌍</div>
      <div class="r-title">전 세계 20여 개국 딜러십 배포</div>
      <div class="r-desc">현대/기아 공식 딜러십 글로벌 동시 배포 및 3년간 안정 운영. 다국어·다기기 환경에서 일관된 서비스 품질 유지.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">💰</div>
      <div class="r-title">3D 제작 비용 약 56% 절감</div>
      <div class="r-desc">원소스 멀티유즈 구조 도입으로 기기별 제작비 대폭 절감. 이를 기반으로 3년간 장기 수주 계약 확보.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">⚡</div>
      <div class="r-title">실시간 옵션 교체 시스템 구현</div>
      <div class="r-desc">수백 가지 색상·휠·인테리어·트림 조합을 지연 없이 실시간 3D 시각화. 옵션 간 종속 관계 및 국가별 사양 차이 자동 처리.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">🔄</div>
      <div class="r-title">3년 장기 프로젝트 지속 관리</div>
      <div class="r-desc">차종 추가·국가 확장·기능 고도화를 3년간 연속 총괄. 초기 설계의 확장성이 장기 운영의 구조적 기반.</div>
    </div>
  </div>
`,U=`
  <p class="det-body-text">광학 문자 인식(OCR) 및 증강 현실(AR) 기술을 활용하여 현대글로비스 야적장의 차량 관리 프로세스를 디지털화한 프로젝트입니다. 기존 수작업 점검·위치 확인 업무를 Google Vision API 기반 번호판 자동 인식과 AR 오버레이로 대체하여 현장 운영 효율성을 극대화했습니다.</p>
  <p class="det-body-text">스마트 미러(출입구 고정형)와 모바일 앱(이동형) 이중 디바이스 체계를 설계하여, 대량 차량 자동 인식과 개별 차량 상세 점검 두 가지 시나리오를 모두 커버하는 지능형 차량 관리 플랫폼을 구축했습니다.</p>

  <div class="psa">
    <div class="psa-col">
      <span class="psa-tag problem">Problem</span>
      <div class="psa-item">야적장 야간 차량 → 수작업 위치 확인</div>
      <div class="psa-item">점검 정보 수기 기록 → 인적 오류 빈번</div>
      <div class="psa-item">차량 정보 조회 시 별도 시스템 전환 필요</div>
      <div class="psa-item">현장 작업자 이동 중 실시간 정보 접근 불가</div>
    </div>
    <div class="psa-col">
      <span class="psa-tag solution">Solution</span>
      <div class="psa-item">OCR 번호판 자동 인식 → 즉시 DB 조회</div>
      <div class="psa-item">AR 오버레이로 차량 정보 실시간 시각화</div>
      <div class="psa-item">스마트 미러(고정) + 모바일 앱(이동) 이중 체계</div>
      <div class="psa-item">장갑·야외·한 손 조작 환경 최적화 UX</div>
    </div>
    <div class="psa-col">
      <span class="psa-tag arch">Key Tech</span>
      <div style="margin-top:6px;">
        <span class="det-chip">Google Vision API</span>
        <span class="det-chip">AR Overlay</span>
        <span class="det-chip">OCR Engine</span>
        <span class="det-chip">Smart Mirror</span>
        <span class="det-chip">Mobile App</span>
        <span class="det-chip">3D 차량 렌더링</span>
      </div>
    </div>
  </div>
`,W=`
  <p class="det-body-text">기술 도입 타당성 검토부터 현장 검증, 납품까지 5가지 핵심 의사결정.</p>
  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>신기술 도입 타당성 검토 및 제안</h4>
        <p>Google Vision API 기반 OCR 엔진과 기존 보유 3D 차량 시안·AR 기술을 결합한 솔루션 콘셉트 수립. 기술 조합의 실현 가능성과 현장 적용 ROI를 검토하여 사업성 제안서 작성.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>현장 요구사항 분석 및 UX 설계</h4>
        <p>야적장 현장 작업자 인터뷰를 통해 실제 업무 흐름 파악. 장갑 착용 상태 조작, 야외 시인성, 한 손 조작, 빠른 차량 이동 등 현장 제약 조건을 UX 요구사항으로 정의하고 설계에 반영.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>이중 디바이스 아키텍처 결정</h4>
        <p>단일 디바이스로는 야적장 전체 운영 시나리오를 커버할 수 없다고 판단. 출입구 고정 스마트 미러(대량 차량 자동 인식)와 이동형 모바일 앱(개별 차량 상세 점검)으로 역할 분리한 이중 체계 설계.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">04</div>
      <div class="i-body">
        <h4>현장 PoC 설계 및 인식률 KPI 설정</h4>
        <p>야외 환경(조명 변화·오염·각도)에서의 OCR 번호판 인식률을 핵심 KPI로 설정. 현장 테스트 시나리오를 직접 설계하고, 작업자 대상 PoC 테스트 진행 후 UI 개선 사항 반영.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">05</div>
      <div class="i-body">
        <h4>기획-개발-현장검증-납품 E2E 관리</h4>
        <p>요구사항 정의 → 설계 → 개발 → 현장 테스트 → 배포의 전 사이클을 6개월 내 대기업 B2B 프로젝트로 완료.</p>
      </div>
    </div>
  </div>

  <figure style="margin:1.2rem 0;">
    <img src="./glovis/ar-app.png" alt="AR 앱 구현 결과물" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
    <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">AR 앱 구현 결과물 — 차량 AR 시각화 및 위치 찾기</figcaption>
  </figure>
`,N=`
  <p class="det-body-text">기술 선택과 현장 검증 방식 기반 핵심 과제 3가지.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">challenge_01</div>
        <div class="c-title">야외 환경 OCR 인식률</div>
        <div class="c-desc">야적장 특성상 조명 변화·번호판 오염·차량 각도 편차가 심함. 통제된 환경 기준으로 개발하면 현장 투입 즉시 실패.</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">Google Vision API + 현장 조건 기반 KPI</div>
        <div class="c-sol-desc">자체 구현 대비 인식 정확도 우수한 Google Vision API 채택. 현장 환경 변수를 테스트 시나리오에 직접 반영하여 인식률 KPI 검증.</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">challenge_02</div>
        <div class="c-title">AR 오버레이 실시간성</div>
        <div class="c-desc">번호판 인식 → 차량 DB 조회 → AR 오버레이 표시까지 지연이 발생하면 현장 작업자가 사용을 포기. 체감 속도가 핵심.</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">3D 차량 렌더링 + 실시간 DB 연동 파이프라인</div>
        <div class="c-sol-desc">기존 보유 3D 차량 시안의 AR 시각화에 접목. 번호판 인식 결과를 차량 DB와 실시간 연동하여 상태·이력·식별 정보를 즉시 AR 오버레이로 표시.</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">challenge_03</div>
        <div class="c-title">현장 UX — 극한 조작 환경</div>
        <div class="c-desc">장갑 착용, 야외 밝기, 한 손 조작, 이동 중 사용 등 일반적인 UX 설계 기준이 적용되지 않는 현장 환경.</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">현장 작업자 대상 테스트 + 피드백 루프</div>
        <div class="c-sol-desc">현장 작업자와 직접 대화하며 PoC 테스트 진행. 조작 오류·가시성 문제를 현장에서 직접 수집하고 UI 개선에 반영하는 빠른 피드백 루프 운영.</div>
      </div>
    </div>
  </div>

  <figure style="margin:1.2rem 0;">
    <img src="./glovis/process.png" alt="OCR → AR 시각화 프로세스" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
    <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">OCR 번호판 인식 → AR 시각화 주요 프로세스</figcaption>
  </figure>
`,H=`
  <p class="det-body-text">차량번호 자동 인식 → 정보 조회 → AR 시각화 → 업무 처리까지의 핵심 파이프라인.</p>
  <div class="diag-wrap">
    <div class="diag-label">// ar vehicle management pipeline</div>
    <svg width="100%" viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="ga" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(99,102,241,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
        <marker id="ga2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(52,211,153,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>
      <text x="24" y="26" font-family="JetBrains Mono,monospace" font-size="10" fill="#3f3f46">// device layer</text>
      <text x="24" y="178" font-family="JetBrains Mono,monospace" font-size="10" fill="#3f3f46">// processing layer</text>
      <text x="24" y="298" font-family="JetBrains Mono,monospace" font-size="10" fill="#3f3f46">// output layer</text>
      <line x1="20" y1="34" x2="700" y2="34" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="3 4"/>
      <line x1="20" y1="186" x2="700" y2="186" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="3 4"/>
      <line x1="20" y1="306" x2="700" y2="306" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="3 4"/>
      <!-- Smart Mirror -->
      <rect x="40" y="44" width="280" height="126" rx="4" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.3)" stroke-width="1.5"/>
      <text x="180" y="68" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#818cf8" font-weight="600">Smart Mirror</text>
      <text x="180" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">야적장 출입구 고정 설치</text>
      <text x="180" y="104" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">차량 진입/출차 시 자동 번호판 인식</text>
      <text x="180" y="120" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">연속 차량 처리 · 상시 운영</text>
      <text x="180" y="158" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#3f3f46">// fixed · batch processing</text>
      <!-- Mobile App -->
      <rect x="400" y="44" width="280" height="126" rx="4" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.3)" stroke-width="1.5"/>
      <text x="540" y="68" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#60a5fa" font-weight="600">Mobile App</text>
      <text x="540" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">현장 작업자 이동형</text>
      <text x="540" y="104" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">개별 차량 직접 조회·점검</text>
      <text x="540" y="120" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#71717a">장갑·야외·한 손 조작 UX</text>
      <text x="540" y="158" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#3f3f46">// mobile · field inspection</text>
      <!-- Arrows: devices → OCR -->
      <line x1="180" y1="170" x2="310" y2="202" stroke="rgba(99,102,241,0.3)" stroke-width="1" marker-end="url(#ga)"/>
      <line x1="540" y1="170" x2="420" y2="202" stroke="rgba(96,165,250,0.3)" stroke-width="1" marker-end="url(#ga)"/>
      <!-- OCR Engine -->
      <rect x="180" y="202" width="360" height="58" rx="4" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.35)" stroke-width="1.5"/>
      <text x="360" y="226" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#fb923c" font-weight="600">OCR Engine (Google Vision API)</text>
      <text x="360" y="246" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#52525b">번호판 자동 인식 · 야외 조건 최적화 · DB 실시간 연동</text>
      <!-- Arrows: OCR → outputs -->
      <line x1="280" y1="260" x2="160" y2="304" stroke="rgba(255,255,255,0.1)" stroke-width="1" marker-end="url(#ga2)"/>
      <line x1="360" y1="260" x2="360" y2="304" stroke="rgba(255,255,255,0.1)" stroke-width="1" marker-end="url(#ga2)"/>
      <line x1="440" y1="260" x2="560" y2="304" stroke="rgba(255,255,255,0.1)" stroke-width="1" marker-end="url(#ga2)"/>
      <!-- Output: 차량 DB 조회 -->
      <rect x="40" y="314" width="200" height="40" rx="4" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.25)" stroke-width="1"/>
      <text x="140" y="330" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#34d399" font-weight="600">차량 DB 조회</text>
      <text x="140" y="346" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#52525b">상태·이력·식별 정보</text>
      <!-- Output: AR 오버레이 -->
      <rect x="260" y="314" width="200" height="40" rx="4" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.25)" stroke-width="1"/>
      <text x="360" y="330" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#818cf8" font-weight="600">AR 오버레이</text>
      <text x="360" y="346" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#52525b">3D 차량 + 정보 시각화</text>
      <!-- Output: 업무 처리 -->
      <rect x="480" y="314" width="200" height="40" rx="4" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.25)" stroke-width="1"/>
      <text x="580" y="330" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#a78bfa" font-weight="600">업무 처리</text>
      <text x="580" y="346" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#52525b">점검·출하·상담 요청</text>
    </svg>
  </div>
`,$=`
  <p class="det-body-text">각 기술 선택의 근거.</p>
  <table class="dtable">
    <thead>
      <tr>
        <th style="width:130px">component</th>
        <th>구현 방식</th>
        <th>선택 근거</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="domain-tag d-infra">OCR Engine</span></td>
        <td><span class="decision-main">Google Vision API 기반 번호판 자동 인식</span></td>
        <td><span class="decision-main">자체 구현 대비 인식 정확도 우수 + 빠른 도입</span><div class="decision-why">6개월 납품 일정에서 자체 모델 학습 리스크 회피</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-agent">AR Visualization</span></td>
        <td><span class="decision-main">기존 보유 3D 차량 모델 + AR 오버레이 렌더링</span></td>
        <td><span class="decision-main">기존 보유 기술 자산 활용 → 개발 기간 단축</span><div class="decision-why">리팩토링 경량화로 모바일 렌더링 성능 확보</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-data">Smart Mirror</span></td>
        <td><span class="decision-main">야적장 출입구 고정 설치 → 차량 자동 인식 전용</span></td>
        <td><span class="decision-main">대량 차량 처리와 상시 운영에 고정형 디바이스 분리</span><div class="decision-why">모바일만으로는 출입구 배치 감지 시나리오 불가</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-ood">Mobile App</span></td>
        <td><span class="decision-main">이동형 개별 차량 점검·조회 전용</span></td>
        <td><span class="decision-main">현장 이동 중 개별 차량 상세 점검 시나리오 커버</span><div class="decision-why">장갑·야외·한 손 조작 UX 별도 설계</div></td>
      </tr>
      <tr>
        <td><span class="domain-tag d-infra">Vehicle DB</span></td>
        <td><span class="decision-main">차량 상태·점검 이력·식별 정보 실시간 연동</span></td>
        <td><span class="decision-main">수기 기록 → 디지털 DB 전환으로 인적 오류 제거</span><div class="decision-why">AR 오버레이와 실시간 연동이 핵심 가치</div></td>
      </tr>
    </tbody>
  </table>
  <div class="pm-scope">
    <div class="pm-scope-label">pm_scope</div>
    <div class="pm-scope-items">
      <span class="pm-chip">신기술 타당성 검토</span>
      <span class="pm-chip">현장 요구사항 분석</span>
      <span class="pm-chip">디바이스 아키텍처 결정</span>
      <span class="pm-chip">PoC 기획·검증</span>
      <span class="pm-chip">E2E 납품 관리</span>
    </div>
  </div>
`,j=`
  <p class="det-body-text">6개월 프로젝트 완료 기준 — 대기업 B2B 납품 및 현장 검증 결과.</p>
  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>현장 PoC 검증 완료</h4>
        <p>야외 환경(조명·오염·각도) 조건에서 OCR 번호판 인식률 목표치 달성. 현장 작업자 피드백 반영 후 UI 최종 확정.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>대기업 B2B 납품 완료</h4>
        <p>현대글로비스 야적장 환경 기준 시스템 구축 및 배포. 6개월 일정 내 기획→개발→현장검증→납품 E2E 완료.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>이중 디바이스 운영 체계</h4>
        <p>스마트 미러(출입구 자동 인식)와 모바일 앱(개별 점검)으로 야적장 전체 운영 시나리오 커버.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">04</div>
      <div class="i-body">
        <h4>수작업 → 디지털 전환</h4>
        <p>수기 점검 기록을 디지털 DB 기반 관리 체계로 전환. 차량 이력 자동 누적 및 리포트 자동 생성 구현.</p>
      </div>
    </div>
  </div>
`,Q=`
  <p class="det-body-text">AI 스타트업 내부에서 수십 개 AI 프로젝트가 동시에 진행되는 환경에서, <strong>엑셀 기반으로 파편화된 일정·산출물 관리의 한계를 직접 해결하기 위해 기획하고 풀스택으로 단독 개발한 사내 통합 프로젝트 관리 시스템.</strong></p>
  <p class="det-body-text">Vibe Coding 방식으로 기획부터 배포까지 직접 수행. React 19 SPA + Node.js REST API + PostgreSQL + Docker Compose 풀스택을 단독 구현하고, AI PM 방법론 가이드를 시스템 내에 탑재하여 팀 지식 자산화까지 완결.</p>
  <div class="psa">
    <div class="psa-col" style="background:rgba(255,77,106,0.02)">
      <span class="psa-tag problem">Problem</span>
      <div class="psa-item">수십 개 AI 프로젝트 동시 진행 → 전사 현황 파악 불가</div>
      <div class="psa-item">PM별 엑셀 파편화 → 일정·산출물 추적 방식 제각각</div>
      <div class="psa-item">신규 PM 온보딩에 과도한 시간 소요</div>
      <div class="psa-item">엔터프라이즈 툴은 사내 실시간 요구에 대응 불가</div>
    </div>
    <div class="psa-col" style="background:rgba(52,211,153,0.02)">
      <span class="psa-tag solution">Solution</span>
      <div class="psa-item">WBS 계층 구조 + 인터랙티브 간트 차트 통합 시스템</div>
      <div class="psa-item">진척률 자동 계산 + On Track / At Risk / Delayed 자동 판정</div>
      <div class="psa-item">AI PM 방법론 가이드 내장 → 온보딩 즉시 활용</div>
      <div class="psa-item">Vibe Coding으로 기획→개발→배포 E2E 단독 수행</div>
    </div>
    <div class="psa-col" style="background:rgba(99,102,241,0.02)">
      <span class="psa-tag arch">Architecture</span>
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.25rem">
        <span class="det-chip">React 19</span><span class="det-chip">Node.js</span>
        <span class="det-chip">PostgreSQL</span><span class="det-chip">Docker</span>
        <span class="det-chip">JWT</span><span class="det-chip">Google OAuth</span>
      </div>
    </div>
  </div>
`,K=`
  <p class="det-body-text">직접 기획·개발하며 해결한 핵심 문제 3가지.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_01</div>
        <div class="c-title">파편화된 일정 관리</div>
        <div class="c-desc">PM마다 다른 엑셀 포맷 → 전사 현황 파악 불가<br>다수 프로젝트 동시 진행 시 리소스 배분 불투명</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">WBS + 간트 차트 통합 웹 시스템</div>
        <div class="c-sol-desc">계층형 WBS + 인터랙티브 간트 차트 단일 화면 통합<br>다중 프로젝트 + 팀원 초대 + 프리셋 템플릿 제공</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_02</div>
        <div class="c-title">수작업 진척 보고</div>
        <div class="c-desc">태스크 완료율 수동 집계 → 오류·지연 빈발<br>외부 공유 보고서 작성에 별도 시간 소요</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">자동 진척 계산 + PDF 보고서</div>
        <div class="c-sol-desc">On Track / At Risk / Delayed 상태 자동 판정<br>외부 공유 링크 + Excel·PDF 원클릭 출력</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_03</div>
        <div class="c-title">신규 PM 온보딩 비효율</div>
        <div class="c-desc">사내 AI PM 방법론이 문서 단위로 분산<br>신규 합류자가 맥락 파악에 오랜 시간 소요</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">AI PM 가이드 대시보드 내장</div>
        <div class="c-sol-desc">온보딩 자료 + 지식 관리 시스템 내 탑재<br>댓글 + 관리자 편집으로 지속 업데이트</div>
      </div>
    </div>
  </div>
`,X=`
  <p class="det-body-text">실무 적용을 전제로 설계한 7가지 핵심 기능.</p>
  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>WBS 프로젝트 관리</h4>
        <p>계층형 WBS 구조 기반 다중 프로젝트 관리. 팀원 초대, 프리셋 템플릿으로 셋업 시간 단축.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>인터랙티브 간트 차트</h4>
        <p>드래그 앤 드롭 행 재정렬, 인라인 셀 편집, 패널 리사이저, 스크롤 동기화로 실사용 편의성 극대화.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>진척률 자동 계산</h4>
        <p>On Track / At Risk / Delayed 상태 자동 판정. 가중치 적용 모드로 중요도별 진척률 집계.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">04</div>
      <div class="i-body">
        <h4>데이터 입출력</h4>
        <p>Excel 일괄 업로드·다운로드, PDF 보고서 생성, JSON 백업·복원으로 외부 툴과 연동.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">05</div>
      <div class="i-body">
        <h4>진척 보고 탭</h4>
        <p>주요 Task 테이블, 담당자별 진척 현황, 외부 공유 링크 생성으로 이해관계자 보고 간소화.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">06</div>
      <div class="i-body">
        <h4>AI PM 가이드 대시보드</h4>
        <p>온보딩 자료 + 지식 관리 시스템 내장. 댓글 시스템, 관리자 편집 기능으로 지속 업데이트.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">07</div>
      <div class="i-body">
        <h4>인증 / 접근 제어</h4>
        <p>Google OAuth 2.0 SSO + JWT 세션, RBAC(Admin/User), 프로젝트 공개 범위 3단계 설정.</p>
      </div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:1.2rem;margin:1.5rem 0;">
    <figure style="margin:0;">
      <img src="./wbs-01.png" alt="WBS 대시보드" style="width:100%;border-radius:8px;border:1px solid var(--border-hi);">
      <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">WBS 프로젝트 대시보드</figcaption>
    </figure>
    <figure style="margin:0;">
      <img src="./wbs-02.png" alt="간트 차트" style="width:100%;border-radius:8px;border:1px solid var(--border-hi);">
      <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">인터랙티브 간트 차트</figcaption>
    </figure>
    <figure style="margin:0;">
      <img src="./wbs-03.png" alt="AI PM 가이드" style="width:100%;border-radius:8px;border:1px solid var(--border-hi);">
      <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">AI PM 가이드 대시보드</figcaption>
    </figure>
  </div>
`,F=`
  <div class="r-grid">
    <div class="r-card">
      <div class="r-icon">🏗️</div>
      <div class="r-title">사내 실무 적용</div>
      <div class="r-desc">팀 내 프로젝트 일정 관리 도구로 실제 도입. 엑셀 기반 업무를 웹 시스템으로 완전 전환.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">⚡</div>
      <div class="r-title">풀스택 단독 개발</div>
      <div class="r-desc">React SPA + REST API + PostgreSQL + Docker/Nginx 전 영역을 단독으로 기획·개발·배포.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">🤖</div>
      <div class="r-title">Vibe Coding E2E</div>
      <div class="r-desc">AI 코딩 어시스턴트와의 협업으로 기획·요구사항 정의부터 코드 완성까지 전체 사이클 직접 주도.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">📚</div>
      <div class="r-title">지식 자산화</div>
      <div class="r-desc">AI PM 방법론 가이드를 시스템 내 탑재. 신규 합류자 온보딩에 즉시 활용 가능.</div>
    </div>
  </div>
  <div class="career-box">
    기획 → 설계 → 개발 → 배포 → 운영까지 End-to-End 직접 수행<br>
    Vibe Coding 방식의 실제 제품화 경험 확보 · 사내 실무 검증 완료, 지속 운영 중
  </div>
`,Y=`
  <p class="det-body-text">딥러닝·생성형 AI·Gaussian Splatting 기술을 융합하여, 기존 수작업 3D 제작 대비 획기적인 시간·비용 절감을 실현한 <strong>3D 콘텐츠 자동화 플랫폼 구축 프로젝트.</strong></p>
  <p class="det-body-text">ARIBOX(Photogrammetry 기반 3D 오브젝트 생성 자동화)와 GENGA AI(Gaussian Splatting 기반 실시간 렌더링)의 두 기술을 결합하여 이커머스·브랜드·제조업 대상 B2B SaaS로 상용화. 네이버 브랜드 스토어 공식 3D 솔루션 파트너 선정.</p>
  <div class="psa">
    <div class="psa-col" style="background:rgba(255,77,106,0.02)">
      <span class="psa-tag problem">Problem</span>
      <div class="psa-item">수작업 3D 제작 → 기간 길고 비용 과다</div>
      <div class="psa-item">반사·투명·금속 재질 Photogrammetry 실패율 높음</div>
      <div class="psa-item">기존 렌더링 속도 한계 + 멀티 플랫폼 대응 어려움</div>
    </div>
    <div class="psa-col" style="background:rgba(52,211,153,0.02)">
      <span class="psa-tag solution">Solution</span>
      <div class="psa-item">촬영→3D 복원→텍스처 매핑→후처리 전 과정 자동화</div>
      <div class="psa-item">Vision AI 후처리로 난재질 노이즈 자동 제거</div>
      <div class="psa-item">Gaussian Splatting으로 실시간 고품질 렌더링 + 경량화</div>
    </div>
    <div class="psa-col" style="background:rgba(99,102,241,0.02)">
      <span class="psa-tag arch">Architecture</span>
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.25rem">
        <span class="det-chip">Photogrammetry</span><span class="det-chip">Vision AI</span>
        <span class="det-chip">Gaussian Splatting</span><span class="det-chip">Deep Learning</span>
        <span class="det-chip">Blender</span><span class="det-chip">B2B SaaS</span>
      </div>
    </div>
  </div>
`,q=`
  <p class="det-body-text">3D 자동화 플랫폼 구축 과정에서 해결한 핵심 기술 과제 4가지.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_01</div>
        <div class="c-title">난재질 3D 모델링</div>
        <div class="c-desc">반사·투명·금속 재질은 Photogrammetry 실패율 높음<br>정확한 텍스처 매핑 어려워 수작업 후처리 필수</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">Vision AI 기반 후처리 자동화</div>
        <div class="c-sol-desc">Vision AI 모듈로 노이즈 제거 + 텍스처 자동 보정<br>수작업 없이 상용 품질의 3D 모델 출력</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_02</div>
        <div class="c-title">불완전한 스캔 데이터</div>
        <div class="c-desc">불완전한 메시·노이즈 포인트 클라우드 빈번 발생<br>기존 방식은 고품질 복원에 60~120장 이상 촬영 필요</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">AI 기반 자동 복원 알고리즘</div>
        <div class="c-sol-desc">메시 자동 복원으로 적은 이미지로도 고품질 재구성<br>촬영→복원→매핑→후처리 전 파이프라인 자동화</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_03</div>
        <div class="c-title">렌더링 속도 & 멀티 플랫폼</div>
        <div class="c-desc">기존 렌더링 방식의 처리 속도 한계<br>웹·모바일·키오스크 동시 대응 어려움</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">Gaussian Splatting 경량화 렌더링</div>
        <div class="c-sol-desc">기존 대비 대폭 향상된 속도의 실시간 렌더링 구현<br>웹·모바일·키오스크 크로스 플랫폼 경량 솔루션</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_04</div>
        <div class="c-title">B2B 상용화 전략</div>
        <div class="c-desc">기술력을 고객사가 바로 활용 가능한 서비스 형태로 전환 필요<br>이커머스·브랜드·제조업 다양한 수요 대응</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">SaaS 형태 B2B 서비스 기획·출시</div>
        <div class="c-sol-desc">스크립트 기반 3D 뷰어(이커머스 임베딩), 3D 랜딩 페이지 제작 도구 출시<br>네이버 브랜드 스토어 공식 파트너 선정</div>
      </div>
    </div>
  </div>
`,Z=`
  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>프로젝트 총괄 및 AI 기술 로드맵 수립</h4>
        <p>비즈니스 모델 설계부터 AI 기술 로드맵 수립, 상용화 전략까지 전반 주도. 3D 콘텐츠 시장 분석을 통한 타겟 고객군(이커머스·브랜드·제조업) 정의 및 수익 모델 기획.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>AI 기술 도입 및 솔루션 아키텍처 설계</h4>
        <p>ARIBOX 파이프라인 기술 요구사항 정의 및 검증. GENGA AI(Gaussian Splatting) 도입 타당성 분석 및 기존 렌더링 방식 대비 성능 벤치마크 설계 총괄.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>플랫폼 개발 관리 및 상용화</h4>
        <p>스크립트 기반 3D 뷰어, 3D 랜딩 페이지 제작 도구 등 B2B 서비스 기획·출시. 네이버 브랜드 스토어 3D 파트너 선정을 위한 기술 데모 기획·수행.</p>
      </div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.2rem;">
    <figure style="margin:0;">
      <img src="./aribox/studio.png" alt="다중 카메라 촬영 스튜디오" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
      <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">다중 카메라 자동 촬영 스튜디오</figcaption>
    </figure>
    <figure style="margin:0;">
      <img src="./aribox/pipeline.png" alt="3D 자동화 파이프라인" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
      <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">3D 생성 자동화 파이프라인</figcaption>
    </figure>
  </div>
`,ss=`
  <div class="r-grid">
    <div class="r-card">
      <div class="r-icon">⏱️</div>
      <div class="r-title">제작 기간 75% 단축</div>
      <div class="r-desc">자동화 파이프라인으로 기존 수작업 대비 제작 기간 대폭 단축. 비용 60% 절감.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">🛍️</div>
      <div class="r-title">네이버 공식 파트너</div>
      <div class="r-desc">네이버 브랜드 스토어 공식 3D 솔루션 파트너 선정. 대형 플랫폼 공식 검증 확보.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">🏆</div>
      <div class="r-title">30개+ 글로벌 브랜드</div>
      <div class="r-desc">호카, 언더아머, 로보락 등 국내외 유명 브랜드 30개 이상 서비스 제공.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">🚀</div>
      <div class="r-title">B2B SaaS 상용화</div>
      <div class="r-desc">스크립트 기반 3D 뷰어 + 3D 랜딩 페이지 제작 도구 정식 출시 및 운영.</div>
    </div>
  </div>
`,is=`
  <p class="det-body-text">인스타그램·페이스북·유튜브 등 다중 SNS 채널 데이터를 통합 분석하고, NLP로 마케팅 인사이트를 제공하는 <strong>소셜 미디어 통합 분석 SaaS 플랫폼의 기획 및 상용화.</strong></p>
  <p class="det-body-text">소셜 미디어 API 연동 기반 데이터 수집 → 해시태그 트렌드·연관 키워드·감성 분석 NLP 파이프라인 → RPA 기반 운영 자동화(멀티 플랫폼 예약 발행, 통합 댓글 관리)까지 E2E 기획·상용화. 인스타그램(Meta) 공식 미디어 파트너 API 승인 획득.</p>
  <div class="psa">
    <div class="psa-col" style="background:rgba(255,77,106,0.02)">
      <span class="psa-tag problem">Problem</span>
      <div class="psa-item">플랫폼별 분산 분석 → 멀티 채널 통합 현황 파악 불가</div>
      <div class="psa-item">비정형 텍스트 수동 분석 → 마케팅 인사이트 도출 지연</div>
      <div class="psa-item">멀티 플랫폼 발행·댓글 관리 수작업 반복</div>
      <div class="psa-item">플랫폼별 지표 체계 상이 → 통합 비교 불가</div>
    </div>
    <div class="psa-col" style="background:rgba(52,211,153,0.02)">
      <span class="psa-tag solution">Solution</span>
      <div class="psa-item">멀티 채널 통합 대시보드 + 지표 표준화</div>
      <div class="psa-item">해시태그 트렌드·키워드·감성 분석 NLP 파이프라인</div>
      <div class="psa-item">RPA 기반 예약 발행·댓글 관리·리포트 자동 생성</div>
      <div class="psa-item">Meta 공식 파트너 API 승인 → 안정적 데이터 접근</div>
    </div>
    <div class="psa-col" style="background:rgba(99,102,241,0.02)">
      <span class="psa-tag arch">Architecture</span>
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.25rem">
        <span class="det-chip">Meta Graph API</span><span class="det-chip">YouTube API</span>
        <span class="det-chip">NLP</span><span class="det-chip">AWS Cloud</span>
        <span class="det-chip">RPA</span><span class="det-chip">SaaS</span>
      </div>
    </div>
  </div>
`,ts=`
  <p class="det-body-text">플랫폼 기획·상용화 과정에서 해결한 핵심 문제 4가지.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_01</div>
        <div class="c-title">분산된 채널 데이터</div>
        <div class="c-desc">플랫폼별 데이터 구조·지표 체계가 상이<br>통합 스키마 없이는 크로스 채널 비교 불가</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">통합 스키마 표준화 + 멀티 채널 대시보드</div>
        <div class="c-sol-desc">이기종 플랫폼 데이터를 통합 스키마로 정규화<br>크로스 플랫폼 지표 비교 분석 지원</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_02</div>
        <div class="c-title">비정형 텍스트 인사이트 부재</div>
        <div class="c-desc">한국어 해시태그·댓글·캡션 수동 분석 → 트렌드 파악 지연<br>감성 분류 없이 콘텐츠 반응을 정량화 불가</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">NLP 분석 파이프라인</div>
        <div class="c-sol-desc">해시태그 트렌드(시계열·연관 클러스터링), 키워드 추출, 감성 분석(긍·부·중립)<br>한국어 비정형 텍스트 전처리 파이프라인 구축</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_03</div>
        <div class="c-title">반복 운영 업무 과부하</div>
        <div class="c-desc">멀티 플랫폼 예약 발행·댓글 관리·리포트 생성 수작업 반복<br>운영 리소스 낭비로 기획·분석에 집중 불가</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">RPA 기반 운영 자동화</div>
        <div class="c-sol-desc">멀티 플랫폼 예약 발행 스케줄러, 통합 댓글 관리<br>주간 리포트 PDF 자동 생성 및 메일 발송 자동화</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_04</div>
        <div class="c-title">공식 API 데이터 접근</div>
        <div class="c-desc">비공식 크롤링의 안정성·지속성 리스크<br>공식 API 없이는 데이터 품질·신뢰성 보장 불가</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">Meta 공식 미디어 파트너 API 승인</div>
        <div class="c-sol-desc">Instagram Graph API 공식 파트너 승인 획득 과정 총괄<br>안정적 공식 데이터 접근 권한 확보</div>
      </div>
    </div>
  </div>
`,as=`
  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>멀티 채널 통합 대시보드</h4>
        <p>Instagram·Facebook·YouTube 계정 현황 및 성과 지표를 단일 화면에서 비교 분석. 플랫폼별 지표 표준화로 크로스 채널 인사이트 제공.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>해시태그 트렌드 분석</h4>
        <p>시계열 추이 + 연관 태그 클러스터링으로 해시태그 흥망성쇠 시각화. 데이터 기반 최적 태그 전략 수립.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>감성 분석 & 키워드 추출</h4>
        <p>한국어 댓글·캡션의 긍정/부정/중립 자동 분류 + 연관 키워드 추출. 콘텐츠 반응 정량화.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">04</div>
      <div class="i-body">
        <h4>RPA 멀티 플랫폼 예약 발행</h4>
        <p>Instagram·Facebook·YouTube 3채널 동시 스케줄링. 한 번 예약 설정 → 자동 발행으로 운영 시간 절감.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">05</div>
      <div class="i-body">
        <h4>통합 댓글 관리</h4>
        <p>멀티 채널 댓글을 단일 대시보드에서 수집·응답. 플랫폼 이동 없이 모든 고객 소통을 한 화면에서 처리.</p>
      </div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:1.2rem;margin:1.5rem 0;">
    <figure style="margin:0;">
      <img src="./geondoli/dashboard.png" alt="건돌이닷컴 대시보드" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
      <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">통합 분석 대시보드 — 멀티 채널 계정 현황 및 성과 지표</figcaption>
    </figure>
    <figure style="margin:0;">
      <img src="./geondoli/features.png" alt="주요 기능 화면" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
      <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">프로필 팔로워 분석 · 미디어별 심화분석 · 해시태그 분석</figcaption>
    </figure>
  </div>
`,es=`
  <div class="r-grid">
    <div class="r-card">
      <div class="r-icon">💳</div>
      <div class="r-title">유료 계정 2,500+</div>
      <div class="r-desc">정기 구독 SaaS 모델로 2,500개 이상의 유료 계정 확보.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">📊</div>
      <div class="r-title">6만+ 소셜 데이터 분석</div>
      <div class="r-desc">60,000개 이상의 소셜 데이터를 NLP 파이프라인으로 분석 처리.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">⚙️</div>
      <div class="r-title">운영 리소스 50% 절감</div>
      <div class="r-desc">RPA 자동화(예약 발행·댓글 관리·리포트 생성)로 운영 인력 투입 50% 이상 절감.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">✅</div>
      <div class="r-title">Meta 공식 파트너</div>
      <div class="r-desc">인스타그램(Meta) 공식 미디어 파트너 API 승인 획득.</div>
    </div>
  </div>
`,ds=`
  <p class="det-body-text">기아 남양연구소에 구축한 <strong>국내 최초 Antilatency 기반 무선 다중 접속 VR 디자인 품평 시스템.</strong> 기존 유선 HMD의 이동 범위 제한을 무선 트래킹으로 해결하고, 다수의 디자이너·임원이 동일한 가상 공간에서 실물 스케일의 차량 디자인을 실시간으로 함께 검토.</p>
  <p class="det-body-text">실제 클레이 모델과 VR 디자인 시안을 AR 패스스루로 동시에 비교하는 혼합현실(MR) 품평 환경을 구현하여, 디자인 검토→수정 지시→반영 확인까지의 의사결정 프로세스를 가상 공간 안에서 일원화.</p>
  <div class="psa">
    <div class="psa-col" style="background:rgba(255,77,106,0.02)">
      <span class="psa-tag problem">Problem</span>
      <div class="psa-item">유선 VR — 케이블로 이동 범위 제한, 실물 차량 주변 자유 이동 불가</div>
      <div class="psa-item">단일 사용자 구조 — 디자이너·임원 동시 공동 검토 불가</div>
      <div class="psa-item">실제 클레이 모델과 VR 디자인을 동시 비교하는 환경 부재</div>
      <div class="psa-item">디자인 수정 지시·반영 확인 프로세스 분절</div>
    </div>
    <div class="psa-col" style="background:rgba(52,211,153,0.02)">
      <span class="psa-tag solution">Solution</span>
      <div class="psa-item">Antilatency 무선 대공간 트래킹으로 실물 크기 차량 주변 자유 이동</div>
      <div class="psa-item">다중 사용자 실시간 동기화 — 시점·인터랙션 공유</div>
      <div class="psa-item">AR 패스스루 혼합현실로 클레이 모델 + VR 시안 동시 비교</div>
      <div class="psa-item">VR 내 어노테이션 → 수정 지시 → 확인까지 일원화</div>
    </div>
    <div class="psa-col" style="background:rgba(99,102,241,0.02)">
      <span class="psa-tag arch">Key Tech</span>
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.25rem">
        <span class="det-chip">Antilatency Tracking</span>
        <span class="det-chip">VR / MR</span>
        <span class="det-chip">무선 스트리밍</span>
        <span class="det-chip">다중 접속 동기화</span>
        <span class="det-chip">AR 패스스루</span>
      </div>
    </div>
  </div>
`,ls=`
  <p class="det-body-text">시스템 구축 과정에서 해결한 핵심 기술 과제 3가지.</p>
  <div class="c-list">
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_01</div>
        <div class="c-title">유선 VR의 이동 범위 제한</div>
        <div class="c-desc">기존 유선 HMD는 케이블로 이동 범위가 제한<br>실물 크기 차량(5m급) 주변을 자유롭게 이동하며 관찰 불가</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">Antilatency 무선 대공간 트래킹</div>
        <div class="c-sol-desc">Antilatency 기반 Tracking Area 설계로 정밀 무선 위치 추적<br>실물 스케일 차량 주변 자유 이동 환경 구현</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_02</div>
        <div class="c-title">다중 사용자 실시간 동기화</div>
        <div class="c-desc">다수의 디자이너·임원이 동일 가상 공간에서 동시 검토 필요<br>사용자 간 시점·인터랙션 지연 없이 공유해야 함</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">다중 접속 동기화 시스템</div>
        <div class="c-sol-desc">사용자 간 위치·시점·인터랙션 실시간 동기화<br>지연 시간 최소화 설계로 공동 품평 환경 구현</div>
      </div>
    </div>
    <div class="c-item">
      <div class="c-left">
        <div class="c-num">problem_03</div>
        <div class="c-title">실물 vs VR 비교 품평</div>
        <div class="c-desc">실제 클레이 모델과 VR 디자인 시안을 동시에 비교하는 환경 부재<br>검토→수정 지시→반영 확인 프로세스가 VR 밖에서 분절</div>
      </div>
      <div class="c-arrow"><span>→</span></div>
      <div class="c-right">
        <div class="c-sol-title">AR 패스스루 혼합현실 품평 워크플로우</div>
        <div class="c-sol-desc">클레이 모델 + VR 시안 AR 패스스루 동시 비교<br>VR 내 어노테이션·수정 지시·확인까지 일원화</div>
      </div>
    </div>
  </div>
`,cs=`
  <div class="insights">
    <div class="insight">
      <div class="i-num">01</div>
      <div class="i-body">
        <h4>무선 VR 품평 시스템 기획 총괄</h4>
        <p>Antilatency 기반 Tracking Area 설계 및 개발 총괄. 기존 유선 VR 한계 분석 → 무선 대공간 트래킹 방식 도입으로 실물 스케일 차량 주변 자유 이동 환경 기획.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">02</div>
      <div class="i-body">
        <h4>다중 접속 동기화 아키텍처 설계</h4>
        <p>다수의 디자이너·임원이 동일 가상 공간에서 실물 크기 차량 디자인을 실시간 공동 검토하는 동기화 구조 설계. 사용자 간 시점·인터랙션 실시간 공유 체계 기획.</p>
      </div>
    </div>
    <div class="insight">
      <div class="i-num">03</div>
      <div class="i-body">
        <h4>혼합현실 비교 품평 환경 및 워크플로우 설계</h4>
        <p>실제 클레이 모델과 VR 디자인 시안을 AR 패스스루로 동시 비교하는 MR 품평 워크플로우 기획. 디자인 검토→수정 지시→반영 확인까지의 프로세스 최적화 컨설팅 수행.</p>
      </div>
    </div>
  </div>

  <figure style="margin:1.2rem 0;">
    <img src="./kia-namyang/vr-contents.png" alt="VR 콘텐츠 구성" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
    <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">Multi VR 콘텐츠 · 발표 환경 · 가상 쇼룸</figcaption>
  </figure>
`,ns=`
  <div class="r-grid">
    <div class="r-card">
      <div class="r-icon">🥽</div>
      <div class="r-title">국내 최초 무선 VR 품평</div>
      <div class="r-desc">Antilatency 기반 다중 접속 무선 VR 디자인 품평 시스템 국내 최초 구축 및 성공적 납품.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">⚡</div>
      <div class="r-title">의사결정 시간 60% 단축</div>
      <div class="r-desc">VR 내 일원화된 품평 워크플로우로 디자인 의사결정 프로세스 기존 대비 60% 단축.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">👥</div>
      <div class="r-title">다중 사용자 동시 품평</div>
      <div class="r-desc">여러 디자이너·임원이 동일 가상 공간에서 실물 스케일 차량 디자인을 실시간 공동 검토.</div>
    </div>
    <div class="r-card">
      <div class="r-icon">🔀</div>
      <div class="r-title">실물·VR 동시 비교</div>
      <div class="r-desc">클레이 모델과 VR 시안을 AR 패스스루로 동시 비교. 디자인 A/B 전환 및 수정 지시 즉시 반영.</div>
    </div>
  </div>

  <figure style="margin:1.2rem 0;">
    <img src="./kia-namyang/tracking.png" alt="Antilatency 트래킹 시스템" style="width:100%;border-radius:6px;border:1px solid var(--border-hi);">
    <figcaption style="font-size:0.8rem;color:var(--text-3);margin-top:0.4rem;text-align:center;">Antilatency 위치 추적 · 무선 스트리밍 · 실시간 커버링</figcaption>
  </figure>
`,o=[{id:"proj1",title:"S 증권사 생성형 AI 리서치 포털 구축 (Gen AI Research Assistant)",role:"총괄 AI PM (Architecture Design & Delivery Lead)",period:"2025.12 ~ 진행 중 | GenON AI",tags:["On-Premise","RAG","Multi-Agent","vLLM","K8s","금융권 폐쇄망","AI포탈구축"],coverColor:"linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0e4d7a 100%)",summary:"금융 폐쇄망이라는 가장 까다로운 제약 조건 안에서, 단순 챗봇이 아닌 리서치 업무 전 과정에 AI를 통합한 엔터프라이즈 플랫폼을 PM으로서 총괄 설계하고 구축함.",techStack:["K8s","RHEL 9.6","DMZ Relay","H200","vLLM","VDB","RDB","Multi-Tool","OOD"],sections:[{id:"overview",title:"overview",body:S},{id:"decisions",title:"problem_solving",body:R},{id:"architecture",title:"system_architecture",body:P},{id:"stack",title:"core_architecture_&_technologies",body:I},{id:"principles",title:"핵심_아키텍처_및_시스템_설계_원칙",body:B}]},{id:"proj2",title:"미래에셋증권 전사 통합 AI 어시스턴트 고도화",role:"AI PM 총괄",period:"2025.07 ~ 2025.10 | 미래에셋증권",tags:["AI PM","Multi-Agent","RAG","Text-to-SQL","하이브리드 검색","MSA","GenOS","금융AI"],coverColor:"linear-gradient(135deg, #0f172a 0%, #3b1f5e 50%, #1a0a3d 100%)",summary:"부서별로 분산된 챗봇 구조의 한계를 극복하고, 멀티턴 대화 · 하이브리드 검색 · Multi-Agent 구조를 도입하여 전사 정보 허브로 확장한 AI 어시스턴트 고도화 프로젝트를 PM으로서 총괄 리딩함.",techStack:["Kubernetes","vLLM","Weaviate","MariaDB","GenOS","Multi-Agent","Text-to-SQL"],sections:[{id:"overview",title:"overview",body:L},{id:"decisions",title:"problem_solving",body:_},{id:"features",title:"key_features",body:D},{id:"architecture",title:"system_architecture",body:O},{id:"stack",title:"core_architecture_&_technologies",body:J},{id:"usecases",title:"use_cases",body:z}]},{id:"proj3",title:"WBS 기반 사내 통합 프로젝트 관리 시스템 구축",role:"기획 및 풀스택 프론트/백엔드 완전 개발",period:"2025.12 ~ 2026.03 | 사내 프로젝트",tags:["Vibe Coding","React 19","Node.js","PostgreSQL","Docker","풀스택"],coverColor:"linear-gradient(135deg, #0f172a 0%, #0a2e1a 50%, #1a3d22 100%)",coverIcon:"⚙️",summary:"AI 스타트업 내부에서 사용하는 프로젝트 WBS 관리 시스템과 AI PM 온보딩 가이드 대시보드를 직접 기획하고 Vibe Coding 방식으로 개발하여 실무 적용한 풀스택 웹 애플리케이션.",techStack:["React 19 (Vite)","Node.js / Express.js","PostgreSQL 16","Docker Compose","Nginx","JWT + Google OAuth 2.0"],sections:[{id:"overview",title:"overview",body:Q},{id:"problems",title:"problem_solving",body:K},{id:"features",title:"key_features",body:X},{id:"results",title:"results",body:F}]},{id:"proj4",title:"ARIBOX & GENGA — AI 기반 3D 컨텐츠 자동화 플랫폼",role:"프로젝트 총괄 및 AI 기반 플랫폼 전략 수립",period:"2022.01 ~ 2024.09",tags:["Photogrammetry","Vision AI","Gaussian Splatting","Deep Learning","Generative AI"],coverColor:"linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a1a3e 100%)",coverIcon:"🧊",summary:"딥러닝·생성형 AI·Gaussian Splatting 기술을 융합한 3D 콘텐츠 자동화 플랫폼 구축. 네이버 브랜드 스토어 공식 3D 솔루션 파트너 선정, 30개 이상 글로벌 브랜드 서비스 제공.",techStack:["Photogrammetry","Vision AI","Gaussian Splatting","Deep Learning","Generative AI","Blender"],sections:[{id:"overview",title:"overview",body:Y},{id:"problems",title:"problem_solving",body:q},{id:"contributions",title:"key_contributions",body:Z},{id:"results",title:"results",body:ss}]},{id:"proj5",title:"건돌이닷컴 — AI 기반 소셜 미디어 통합 분석 SaaS 플랫폼",role:"프로젝트 총괄 및 AI 기반 서비스 전략 수립",period:"2019.08 ~ 2021.02",tags:["SNS API","NLP","AWS Cloud","RPA","SaaS"],coverColor:"linear-gradient(135deg, #0a2e1a 0%, #1a3d2a 50%, #0d1f14 100%)",coverIcon:"📊",summary:"Instagram·Facebook·YouTube 다중 SNS 채널 데이터를 통합 분석하고 NLP로 마케팅 인사이트를 제공하는 SaaS 플랫폼 기획 및 상용화. 유료 계정 2,500+, Meta 공식 미디어 파트너 API 승인 획득.",techStack:["Meta Graph API","YouTube Data API","NLP","AWS Cloud","RPA","SaaS"],sections:[{id:"overview",title:"overview",body:is},{id:"problems",title:"problem_solving",body:ts},{id:"features",title:"key_features",body:as},{id:"results",title:"results",body:es}]},{id:"proj6",title:"현대/기아 360° 3D Configurator Platform 구축",role:"프로젝트 총괄 PM 및 유니티 엔진 기반 시스템 기획",period:"2020.02 ~ 2023.09",tags:["Unity","Real-time 3D","Web API","글로벌 배포","다국어","3D 경량화"],coverColor:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",summary:"전 세계 현대/기아 자동차 매장에서 사용되는 실시간 3D 차량 정보 제공 플랫폼을 유니티 엔진 기반으로 구축. 3년간 20여 개국 딜러십 글로벌 배포를 총괄.",techStack:["Unity Engine","Real-time 3D Rendering","Web API","글로벌 CDN","다국어(i18n)"],sections:[{id:"overview",title:"overview",body:E},{id:"contributions",title:"key_contributions",body:T},{id:"challenges",title:"technical_challenges",body:C},{id:"stack",title:"tech_stack",body:V},{id:"results",title:"results",body:G}]},{id:"proj7",title:"현대글로비스 AR 기반 차량 관리 시스템 구축",role:"지능형 차량 관리 시스템 기획 및 PM",period:"2019.06 ~ 2019.11",tags:["AR","Google Vision API","OCR","Smart Mirror","Mobile App"],coverColor:"linear-gradient(135deg, #2d1b0e 0%, #3d2b1e 50%, #1a0f05 100%)",summary:"광학 문자 인식(OCR) 및 증강 현실(AR) 기술을 활용한 지능형 차량 관리 플랫폼 구축. Google Vision API 기반 OCR 엔진으로 번호판을 자동 인식하고, AR 기술로 야적장 내 차량 정보를 실시간 시각화하여 기존 수작업 점검 프로세스를 디지털화. 스마트 미러(고정형)와 모바일 앱(이동형) 이중 디바이스 체계로 현장 운영 효율성을 극대화.",techStack:["AR (Augmented Reality)","Google Vision API (OCR)","Smart Mirror","Mobile App"],sections:[{id:"overview",title:"overview",body:U},{id:"decisions",title:"key_decisions",body:W},{id:"challenges",title:"technical_challenges",body:N},{id:"flow",title:"system_flow",body:H},{id:"stack",title:"tech_stack",body:$},{id:"results",title:"results",body:j}]},{id:"proj8",title:"기아 남양연구소 가상 디자인 품평장 시스템 구축",role:"국내 최초 무선 방식 VR 품평 시스템 기획 및 개발 총괄",period:"2020.05 ~ 2020.11",tags:["VR","Antilatency Tracking","다중 접속","무선 스트리밍","디자인 품평","혼합현실"],coverColor:"linear-gradient(135deg, #0e2d1b 0%, #1e3d2b 50%, #051a0f 100%)",coverIcon:"🥽",summary:"국내 최초 Antilatency 기반 무선 다중 접속 VR 디자인 품평 시스템을 기아 남양연구소에 구축. 실물 클레이 모델과 VR 시안을 AR 패스스루로 동시 비교하는 혼합현실 품평 환경 구현.",techStack:["VR / MR","Antilatency Tracking","Real-time Wireless Streaming","다중 접속 동기화","AR 패스스루"],sections:[{id:"overview",title:"overview",body:ds},{id:"problems",title:"problem_solving",body:ls},{id:"contributions",title:"key_contributions",body:cs},{id:"results",title:"results",body:ns}]}],os={AI플랫폼:["proj1","proj2","proj4","proj5"],시스템개발:["proj3","proj6","proj7","proj8"]};function y(){const i=r.coreRoles.map(s=>{const a=s.bullets?`<ul>${s.bullets.map(l=>`<li>${l}</li>`).join("")}</ul>`:"";return`
      <div class="core-role-card">
        <div class="core-role-title">
          ${s.title}
          ${s.subTitle?`<span class="core-role-subtitle">${s.subTitle}</span>`:""}
        </div>
        ${a}
      </div>
    `}).join("");return`
    <div class="hero-panel">
      <div class="hero-inner">
        <div class="hero-text">
          <span class="hero-badge">AI PM &amp; Product Lead</span>
          <h1 class="hero-name">${r.name}</h1>
          <h2 class="hero-title">${r.title}</h2>
          <p class="hero-desc">${r.description}</p>
          <div class="hero-actions">
            <button class="btn btn-primary" onclick="navigateTo('#portfolio')">포트폴리오 보기</button>
            <button class="btn btn-ghost" onclick="navigateTo('#blog')"><i class="fas fa-book-open"></i> Blog 보기</button>
          </div>
        </div>
        <div class="hero-photo">
          <img src="./profile.jpg" alt="Ahn Sungjin">
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="section-header">
        <div>
          <h2 class="section-title">Core Role &amp; Responsibilities</h2>
          <p class="section-sub">AI PM으로서의 핵심 역할과 책임 영역</p>
        </div>
      </div>
      <div class="core-roles-grid">
        ${i}
      </div>
    </div>
  `}function u(i){return(i==="전체"?o:o.filter(a=>{var l;return(l=os[i])==null?void 0:l.includes(a.id)})).map(a=>{const l=String(o.indexOf(a)+1).padStart(2,"0"),t=a.tags.map(d=>`<span class="port-tag">${d}</span>`).join("");return`
      <article class="port-card" onclick="openPortfolioDetail('${a.id}')">
        <div class="port-card-num">${l}</div>
        <div class="port-card-body">
          <div class="port-tags">${t}</div>
          <h3 class="port-card-title">${a.title}</h3>
          <p class="port-card-role">${a.role} &nbsp;|&nbsp; ${a.period}</p>
          <p class="port-card-summary">${a.summary}</p>
          <span class="port-read-more">자세히 보기 →</span>
        </div>
      </article>
    `}).join("")}window._setPortFilter=function(i){document.querySelectorAll(".port-filter-btn").forEach(s=>{s.classList.toggle("active",s.dataset.cat===i)}),document.getElementById("port-list").innerHTML=u(i)};function A(){return`
    <section class="portfolio panel">
      <div class="portfolio-header">
        <div>
          <h2>Portfolio</h2>
          <p style="color:var(--text-light); font-size:0.85rem; margin-top:0.5rem;">AI PM으로서 리딩한 주요 프로젝트를 소개합니다. 항목을 클릭하면 상세 내용을 확인할 수 있습니다.</p>
        </div>
      </div>
      <div class="port-filter-bar">${["전체","AI플랫폼","시스템개발"].map(s=>`
    <button class="port-filter-btn${s==="전체"?" active":""}" data-cat="${s}" onclick="window._setPortFilter('${s}')">${s}</button>
  `).join("")}</div>
      <div class="port-list" id="port-list">${u("전체")}</div>
    </section>
  `}function rs(i){var h,g,f,x;const s=o.find(e=>e.id===i);if(!s)return A();const a=s.tags.map(e=>`<span class="det-chip">${e}</span>`).join(""),l=((h=s.techStack)==null?void 0:h.map(e=>`<code class="tech-chip">${e}</code>`).join(" "))||"",t=o.map((e,n)=>`
    <button class="det-sidebar-item${e.id===i?" active":""}" onclick="openPortfolioDetail('${e.id}')">
      <span class="det-sidebar-icon">${String(n+1).padStart(2,"0")}</span>
      <span class="det-sidebar-title">${e.title}</span>
    </button>
  `).join("");let d=0;const c=(e,n)=>`
      <div class="det-section">
        <div class="det-sec-header">
          <span class="det-sec-num">${String(++d).padStart(2,"0")}</span>
          <span class="det-sec-title">${e}</span>
          <div class="det-sec-rule"></div>
        </div>
        <div class="det-arch-body">${n}</div>
      </div>
    `;let p;if(s.sections&&s.sections.length>0)p=s.sections.map(e=>c(e.title.replace(/_/g," ").toUpperCase(),e.body)).join("");else{const e=((g=s.results)==null?void 0:g.map(n=>`<li>${n}</li>`).join(""))||"";p=[s.summary&&c("OVERVIEW",`<p>${s.summary}</p>`),s.challenge&&c("CHALLENGE",`<p>${s.challenge}</p>`),s.solution&&c("SOLUTION & ARCHITECTURE",`<p>${s.solution}</p>`),s.architecture&&c("TECHNICAL DETAILS",s.architecture),((f=s.results)==null?void 0:f.length)&&c("RESULTS",`<ul class="detail-results">${e}</ul>`),((x=s.techStack)==null?void 0:x.length)&&c("TECH STACK",`<div class="tech-stack">${l}</div>`)].filter(Boolean).join("")}const k=s.period.includes("진행 중")?'<span class="det-status active"><span class="det-pulse"></span> ACTIVE</span>':'<span class="det-status done">COMPLETED</span>';return`
    <div class="det-layout">
      <aside class="det-sidebar">
        <button class="det-sidebar-back" onclick="navigateTo('#portfolio')">← back</button>
        <div class="det-sidebar-label">PROJECTS</div>
        ${t}
      </aside>
      <div class="det-main">
        <div class="det-header">
          <div class="det-path">${s.id} / detail</div>
          ${k}
          <h1 class="det-title">${s.title}</h1>
          <p class="det-subtitle">${s.role}</p>
          <div class="det-chips">${a}</div>
          <div class="det-meta-row">
            <div class="det-meta-item">
              <span class="det-meta-k">기간</span>
              <span class="det-meta-v">${s.period}</span>
            </div>
            <div class="det-meta-item">
              <span class="det-meta-k">역할</span>
              <span class="det-meta-v">${s.role}</span>
            </div>
          </div>
        </div>
        ${p}
      </div>
    </div>
  `}function vs(){return`
    <section class="blog panel">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2 style="font-size:1.5rem; font-weight:600; margin:0; padding:0; border:none;">Tech & PM Blog</h2>
          <p style="color:var(--text-muted); font-size:0.95rem; margin-top:0.5rem;">AI PM의 생각과 기록 — 생성형 AI, 프로덕트 전략, 실무 인사이트를 공유합니다.</p>
        </div>
      </div>
      <div class="blog-list" style="margin-top: 2rem;">
        <div class="blog-item panel" style="display: flex; align-items: center; justify-content: space-between; padding: 2.5rem; border: 1px solid var(--border-color); background: rgba(255,255,255,0.02);">
          <div>
            <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 0.8rem;">AI PM의 생각과 기록</h3>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.5rem;">생성형 AI 아키텍처 설계, 프로덕트 매니지먼트 방법론, 엔터프라이즈 AI 도입 실무 경험을 기록합니다.</p>
            <a href="https://www.notion.so/d0645ef771e083018b7e01647db13739?v=23e45ef771e082cebc1288366db80c8f" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.5rem 1.2rem; background:var(--accent-primary); color:white; border-radius:8px; font-weight:600; font-size:0.95rem; text-decoration:none;">
              <i class="fas fa-external-link-alt" style="font-size:0.8rem;"></i> 노션 블로그 바로가기
            </a>
          </div>
          <div style="font-size: 3rem; color: var(--accent-primary); margin-left: 2rem; opacity: 0.3;">
            <i class="fas fa-book-open"></i>
          </div>
        </div>
      </div>
    </section>
  `}function w(i){M.forEach(s=>{s.classList.remove("active"),(s.getAttribute("href")===i||i===""&&s.getAttribute("href")==="#home")&&s.classList.add("active")})}function m(){const i=window.location.hash,s=b[i]||b[""];w(i),v.innerHTML="";const a=s();setTimeout(()=>{v.innerHTML=a},10)}window.openPortfolioDetail=function(i){w("#portfolio"),v.innerHTML="",setTimeout(()=>{v.innerHTML=rs(i),window.scrollTo(0,0)},10)};window.navigateTo=function(i){window.location.hash=i,m()};window.addEventListener("hashchange",m);window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".nav-links a").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),window.navigateTo(i.getAttribute("href"))})}),m()});
