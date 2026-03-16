(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}})();const l=document.getElementById("main-content"),I=document.querySelectorAll(".nav-links a"),u={"":y,"#home":y,"#portfolio":v,"#blog":D},s={name:"Ahn Sungjin",title:"Generative AI Project Manager",description:"Driving practical innovation by integrating large-scale IT/DX project leadership with cutting-edge Generative AI technologies (vLLM, Multi-Agent, RAG, MCP) to solve complex enterprise challenges.",coreRoles:[{title:"1. Gen AI 서비스 아키텍처 설계 및 시스템 통합 총괄",desc:"",bullets:["엔터프라이즈 환경(On-Premise/Cloud)을 고려한 Gen AI 서비스 아키텍처 수립 및 기술 이행 전략 리딩","K8s 기반 인프라 환경의 기술적 제약사항 조율 및 생성형 AI 파이프라인 전 과정의 이슈 해결 주도","레거시 및 타 시스템과의 연계를 고려한 시스템 통합 아키텍처 설계 및 검토","정형/비정형 데이터 수집부터 RAG 기반 서비스 오픈까지 생성형 AI 데이터 파이프라인 전 과정 총괄"]},{title:"2. Agentic AI 워크플로우 기획 및 프로덕트 생애주기(E2E) 리딩",desc:"",bullets:["제품 목표 설정부터 요구사항 분석, 개발, 출시, 운영까지 PM으로서 AI 프로덕트 생애주기 직접 리딩","LLM 및 Agentic AI에 대한 기술적 이해를 바탕으로 비즈니스 목적에 부합하는 Multi-Agent 워크플로우 기획","단순 챗봇을 넘어선 목적별 서브 에이전트 간 협력 및 Task 자동화 파이프라인 구축 리딩","특정 도메인(금융 등)의 이해를 바탕으로 실질적인 업무 생산성을 제고하는 AI 비즈니스 모델 발굴 및 적용"]},{title:"3. AI 기반 업무 생산성 혁신 및 Full-Cycle 프로토타이핑",desc:"",bullets:["AI를 활용한 실질적인 업무 생산성 제고에 지속적인 관심을 두고, 바이브 코딩 등 다양한 방법론을 실무에 적극 도입 및 시도","AI 바이브 코딩을 활용하여 기획 단계부터 사내 프로젝트 관리(WBS) 시스템을 직접 기획, 구축 및 배포한 경험 보유","제안 단계 및 신규 서비스 기획 시, PoC 데모 페이지 제작부터 서버 구축, 배포까지 전 과정을 직접 수행하여 제품 방향성 및 인사이트 빠른 검증","불확실성이 높은 AI 비즈니스 환경에서 프로토타이핑 툴을 활용한 빠른 아이디어 실체화로 의사결정 가속화"]},{title:"4. LLM & Agentic AI 기반 시스템 구축 및 인프라 아키텍처 총괄",desc:"",bullets:["LLM, Agentic AI 등 최신 기술 이해도를 바탕으로 한 AI 모델 기반 시스템 구축 전 주기 리딩","RAG 파이프라인 설계 및 Tool Calling, 워크플로우 오케스트레이션을 연계한 복합 AI 서비스 구현","대규모 AI 학습·추론을 위한 GPU 인프라 아키텍처 설계 및 vLLM 서빙 최적화를 통한 AI HPC급 환경 구축","성능, 비용, 지연시간을 종합적으로 고려하여 대용량 트래픽 처리가 가능한 인프라 환경 구축 경험 보유"]}]},b=[{id:"proj1",title:"S 증권사 생성형 AI 리서치 포털 구축 (Gen AI Research Assistant)",role:"총괄 AI PM (Architecture Design & Delivery Lead)",period:"2025.07 ~ 진행 중 | GenON AI",tags:["On-Premise","RAG","Multi-Agent","vLLM","K8s","금융권 폐쇄망"],coverColor:"linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0e4d7a 100%)",coverIcon:"🏦",summary:"금융 폐쇄망이라는 가장 까다로운 제약 조건 안에서, 단순 챗봇이 아닌 리서치 업무 전 과정에 AI를 통합한 엔터프라이즈 플랫폼을 PM으로서 총괄 설계하고 구축함.",challenge:"",solution:"",results:[],techStack:["K8s","RHEL 9.6","DMZ Relay","H200","vLLM","VDB","RDB","Multi-Tool","OOD"],architecture:`
      <div class="panel" style="background:#1e293b; padding:1.5rem; border-radius:12px; margin-bottom:3rem; border:1px solid #334155;">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1.5rem; align-items:stretch;">
          
          <!-- 1. Problem -->
          <div>
            <h4 style="color:var(--accent-primary); margin-top:0; margin-bottom:0.8rem; font-size:1.1rem; border-bottom:1px solid #334155; padding-bottom:0.5rem;"><span style="display:inline-block; background:rgba(56,189,248,0.1); padding:0.2rem 0.6rem; border-radius:4px; margin-right:0.4rem;">1</span> Problem</h4>
            <ul style="margin:0; padding-left:1.2rem; color:#e2e8f0; font-size:0.95rem; line-height:1.7;">
              <li>증권사 내부 데이터 활용 어려움</li>
              <li>리서치 / RDB / 문서 분산</li>
            </ul>
          </div>

          <!-- 2. Solution -->
          <div>
            <h4 style="color:#10b981; margin-top:0; margin-bottom:0.8rem; font-size:1.1rem; border-bottom:1px solid #334155; padding-bottom:0.5rem;"><span style="display:inline-block; background:rgba(16,185,129,0.1); padding:0.2rem 0.6rem; border-radius:4px; margin-right:0.4rem;">2</span> Solution</h4>
            <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.2); padding:1rem; border-radius:8px; height:calc(100% - 3rem);">
              <p style="margin:0; color:#d1fae5; font-weight:600; font-size:1rem; text-align:center; display:flex; align-items:center; justify-content:center; height:100%;">온프레미스 GenAI 플랫폼 구축</p>
            </div>
          </div>

          <!-- 3. Architecture -->
          <div>
            <h4 style="color:#a855f7; margin-top:0; margin-bottom:0.8rem; font-size:1.1rem; border-bottom:1px solid #334155; padding-bottom:0.5rem;"><span style="display:inline-block; background:rgba(168,85,247,0.1); padding:0.2rem 0.6rem; border-radius:4px; margin-right:0.4rem;">3</span> Architecture</h4>
            <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
              <span style="background:#334155; color:#e2e8f0; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.85rem;">Kubernetes LLMops</span>
              <span style="background:#334155; color:#e2e8f0; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.85rem;">GPU cluster (H200)</span>
              <span style="background:#334155; color:#e2e8f0; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.85rem;">vLLM</span>
              <span style="background:#334155; color:#e2e8f0; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.85rem;">RAG (Weaviate)</span>
              <span style="background:#334155; color:#e2e8f0; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.85rem;">SQL Tool agent</span>
            </div>
          </div>

        </div>
      </div>

      <div style="margin-bottom:3rem;">
        <h4 style="color:var(--text-main); font-size:1.4rem; margin-bottom:0.5rem;">PM으로서 내가 한 것</h4>
        <p style="color:var(--text-muted); font-size:1rem; margin-bottom:1.5rem;">단순히 개발팀을 관리한 게 아니라, 기술 구조 자체를 설계하는 의사결정을 주도함.</p>
        <table style="width:100%; text-align:left; border-collapse:collapse;">
          <thead>
            <tr style="border-bottom:2px solid #334155;">
              <th style="padding:1rem; color:#94a3b8; font-weight:600; width:15%;">의사결정 영역</th>
              <th style="padding:1rem; color:#94a3b8; font-weight:600; width:45%;">결정 내용</th>
              <th style="padding:1rem; color:#94a3b8; font-weight:600; width:40%;">이유</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #1e293b;">
              <td style="padding:1.2rem 1rem; color:#e2e8f0;">LLMOps 및 모델 서빙</td>
              <td style="padding:1.2rem 1rem; color:white; font-weight:500;">LLMOps 기반 GenAI 플랫폼 구축 및 K8s 자원/GPU 부하 관리</td>
              <td style="padding:1.2rem 1rem; color:#cbd5e1;">엔터프라이즈급 처리량 확보 및 안정적인 내부 서비스 운영</td>
            </tr>
            <tr style="border-bottom:1px solid #1e293b;">
              <td style="padding:1.2rem 1rem; color:#e2e8f0;">데이터 아키텍처</td>
              <td style="padding:1.2rem 1rem; color:white; font-weight:500;">VDB + RDB 하이브리드 분리</td>
              <td style="padding:1.2rem 1rem; color:#cbd5e1;">수치 환각 차단 + 비정형 검색 정밀도 동시 확보</td>
            </tr>
            <tr style="border-bottom:1px solid #1e293b;">
              <td style="padding:1.2rem 1rem; color:#e2e8f0;">에이전트 구조</td>
              <td style="padding:1.2rem 1rem; color:white; font-weight:500;">단일 Agent + Multi-Tool 우선 구성</td>
              <td style="padding:1.2rem 1rem; color:#cbd5e1;">속도·안정성 확보 후 Multi-Agent 전환 검토</td>
            </tr>
            <tr>
              <td style="padding:1.2rem 1rem; color:#e2e8f0;">OOD 설계</td>
              <td style="padding:1.2rem 1rem; color:white; font-weight:500;">5유형 판별 체계 + 유형별 대응 방식 차별화</td>
              <td style="padding:1.2rem 1rem; color:#cbd5e1;">금융 도메인 특화 신뢰성 확보</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-bottom:3rem;">
        <h4 style="color:var(--text-main); font-size:1.4rem; margin-bottom:1.5rem;">핵심 도전 과제 3가지와 해결 방식</h4>
        <div style="display:flex; flex-direction:column; gap:1.2rem;">
          <!-- Row 1 -->
          <div style="display:flex; gap:1rem; align-items:center;">
            <div style="flex:1; background:#1e293b; padding:1.5rem; border-radius:8px; border:1px solid #334155;">
              <div style="color:white; font-weight:600; margin-bottom:0.6rem; font-size:1.1rem;">① 폐쇄망에서 LLM 구동</div>
              <div style="color:#94a3b8; font-size:0.95rem; line-height:1.6;">외부 API 차단 → 클라우드 LLM 사용 불가<br>DMZ 릴레이 + GPU 클러스터 + vLLM 서빙</div>
            </div>
            <div style="color:#475569; font-size:1.5rem;"><i class="fas fa-arrow-right"></i></div>
            <div style="flex:1; background:#0284c7; padding:1.5rem; border-radius:8px;">
              <div style="color:white; font-weight:600; margin-bottom:0.6rem; font-size:1.1rem;">내부 전용 LLM 서빙 환경 구축</div>
              <div style="color:#bae6fd; font-size:0.95rem; line-height:1.6;">K8s + H200 GPU 클러스터 + vLLM<br>엔터프라이즈급 처리량 확보</div>
            </div>
          </div>
          <!-- Row 2 -->
          <div style="display:flex; gap:1rem; align-items:center;">
            <div style="flex:1; background:#1e293b; padding:1.5rem; border-radius:8px; border:1px solid #334155;">
              <div style="color:white; font-weight:600; margin-bottom:0.6rem; font-size:1.1rem;">② 수만 건 이기종 데이터 통합</div>
              <div style="color:#94a3b8; font-size:0.95rem; line-height:1.6;">정형(재무·수치) + 비정형(리포트·뉴스)<br>단일 RAG로는 수치 환각 불가피</div>
            </div>
            <div style="color:#475569; font-size:1.5rem;"><i class="fas fa-arrow-right"></i></div>
            <div style="flex:1; background:#0284c7; padding:1.5rem; border-radius:8px;">
              <div style="color:white; font-weight:600; margin-bottom:0.6rem; font-size:1.1rem;">하이브리드 데이터 아키텍처 설계</div>
              <div style="color:#bae6fd; font-size:0.95rem; line-height:1.6;">VDB(비정형) + RDB(수치) 분리 구성<br>마스터 스키마 VDB → 파라미터 자동 구성</div>
            </div>
          </div>
          <!-- Row 3 -->
          <div style="display:flex; gap:1rem; align-items:center;">
            <div style="flex:1; background:#1e293b; padding:1.5rem; border-radius:8px; border:1px solid #334155;">
              <div style="color:white; font-weight:600; margin-bottom:0.6rem; font-size:1.1rem;">③ 복합 질의 처리 + 신뢰성 확보</div>
              <div style="color:#94a3b8; font-size:0.95rem; line-height:1.6;">다양한 질의 유형 + OOD 판별<br>금융 도메인 컴플라이언스 요건</div>
            </div>
            <div style="color:#475569; font-size:1.5rem;"><i class="fas fa-arrow-right"></i></div>
            <div style="flex:1; background:#0284c7; padding:1.5rem; border-radius:8px;">
              <div style="color:white; font-weight:600; margin-bottom:0.6rem; font-size:1.1rem;">멀티 툴 에이전트 + OOD 설계</div>
              <div style="color:#bae6fd; font-size:0.95rem; line-height:1.6;">단일 Agent + 13개 툴 + 최대 5회 콜링<br>5유형 OOD 판별 체계 + 출처 인덱스 의무화</div>
            </div>
          </div>
        </div>
        <div style="text-align:center; padding:1.5rem; background:rgba(255,255,255,0.03); border:1px dashed var(--border-color); border-radius:8px; color:#cbd5e1; font-size:1rem; margin-top:1.5rem;">
          세 가지 모두 PM이 기술 구조 의사결정을 주도하고, 개발팀과 협업하여 구현함
        </div>
      </div>

      <div style="margin-bottom:1rem;">
        <h4 style="color:var(--text-main); font-size:1.4rem; margin-bottom:1.5rem;">기술 스택 레이어</h4>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
          <div style="background:#1e293b; padding:1.5rem; border-radius:8px; border:1px solid #334155; text-align:center;">
            <div style="color:#94a3b8; font-weight:600; margin-bottom:0.6rem;">인프라</div>
            <div style="color:white; font-size:0.95rem;">K8s · RHEL 9.6</div>
          </div>
          <div style="background:#1e293b; padding:1.5rem; border-radius:8px; border:1px solid #334155; text-align:center;">
            <div style="color:#94a3b8; font-weight:600; margin-bottom:0.6rem;">네트워크</div>
            <div style="color:white; font-size:0.95rem;">DMZ 릴레이 서버</div>
          </div>
          <div style="background:#1e293b; padding:1.5rem; border-radius:8px; border:1px solid #334155; text-align:center;">
            <div style="color:#94a3b8; font-weight:600; margin-bottom:0.6rem;">GPU 서빙</div>
            <div style="color:white; font-size:0.95rem;">H200 · vLLM · CUDA</div>
          </div>
          <div style="background:#1e293b; padding:1.5rem; border-radius:8px; border:1px solid #334155; text-align:center;">
            <div style="color:#94a3b8; font-weight:600; margin-bottom:0.6rem;">검색</div>
            <div style="color:white; font-size:0.95rem;">메타 필터 + 시맨틱</div>
          </div>
          <div style="background:#0284c7; padding:1.5rem; border-radius:8px; border:1px solid #0369a1; text-align:center;">
            <div style="color:#bae6fd; font-weight:600; margin-bottom:0.6rem;">데이터</div>
            <div style="color:white; font-size:0.95rem;">VDB · RDB · Hybrid</div>
          </div>
          <div style="background:#0284c7; padding:1.5rem; border-radius:8px; border:1px solid #0369a1; text-align:center;">
            <div style="color:#bae6fd; font-weight:600; margin-bottom:0.6rem;">LLM</div>
            <div style="color:white; font-size:0.95rem;">온프레미스 전용 서빙</div>
          </div>
          <div style="background:#0284c7; padding:1.5rem; border-radius:8px; border:1px solid #0369a1; text-align:center;">
            <div style="color:#bae6fd; font-weight:600; margin-bottom:0.6rem;">에이전트</div>
            <div style="color:white; font-size:0.95rem;">Multi-Tool · OOD</div>
          </div>
          <div style="background:#0284c7; padding:1.5rem; border-radius:8px; border:1px solid #0369a1; text-align:center;">
            <div style="color:#bae6fd; font-weight:600; margin-bottom:0.6rem;">신뢰성</div>
            <div style="color:white; font-size:0.95rem;">출처 인덱스 의무화</div>
          </div>
        </div>
        <div style="text-align:center; padding:1.5rem; background:rgba(255,255,255,0.03); border:1px dashed var(--border-color); border-radius:8px; color:white; font-weight:500; font-size:1.05rem;">
          <span style="color:#94a3b8; font-size:0.9rem; display:block; margin-bottom:0.5rem; font-weight:normal;">PM 역할 범위</span>
          요구사항 정의 &nbsp;·&nbsp; 아키텍처 의사결정 &nbsp;·&nbsp; 기술 이슈 조율 &nbsp;·&nbsp; 보안 심의 대응 &nbsp;·&nbsp; 개발팀 리딩
        </div>
      </div>

      <div style="margin-top:4rem;">
        <h4 style="color:var(--text-main); font-size:1.4rem; margin-bottom:1.5rem; border-bottom:1px solid #334155; padding-bottom:0.8rem;">워크플로우 설계 예시</h4>

        <h5 style="color: var(--accent-primary); margin: 1.2rem 0 0.4rem;">Multi-Agent Tool Calling 설계도</h5>
        <figure style="margin: 1rem 0;">
          <img src="./multi-agent-1.png" alt="전체 Agent 구조도" style="width:100%; border-radius:8px; border:1px solid var(--border-color);">
          <figcaption style="font-size:0.85rem; color:var(--text-light); margin-top:0.4rem; text-align:center;">VDB + RDB 하이브리드 방식 및 Master-Sub Agent 계층 구조</figcaption>
        </figure>
        <ul style="margin: 0 0 2rem 1rem; color: var(--text-muted); line-height: 1.7;">
          <li>리포트·뉴스와 같은 비정형 텍스트(VDB)와 재무/가격 등 정형 수치 데이터(RDB)의 극명한 특성 차이로 인한 수치 환각을 방지하기 위해 <strong>단일 RAG 대신 하이브리드 파이프라인</strong> 채택</li>
          <li>Master Agent가 사용자의 의도를 분석하여 도메인 전문성이 있는 4개의 Sub-Agent(실적, 리포트, 시황 등)로 작업을 분리 할당</li>
          <li>각 Sub-Agent는 부여된 자신의 도메인 툴에만 접근 가능한 <strong>Tool Isolation(격리)</strong> 패턴을 적용하여 잘못된 소스 참조를 원천 차단</li>
        </ul>

        <h5 style="color: var(--accent-primary); margin: 1.2rem 0 0.4rem;">Tool Calling 설계</h5>
        <figure style="margin: 1rem 0;">
          <img src="./multi-agent-2.png" alt="Tool Calling 상세 흐름도" style="width:100%; border-radius:8px; border:1px solid var(--border-color);">
          <figcaption style="font-size:0.85rem; color:var(--text-light); margin-top:0.4rem; text-align:center;">동적 Parameter 추출 및 탐색 공간 축소 설계도</figcaption>
        </figure>
        <ul style="margin: 0 0 2rem 1rem; color: var(--text-muted); line-height: 1.7;">
          <li><strong>동적 파라미터 추출</strong>: Agent가 질의에서 데이터 타입·대상 엔티티·기간·범위를 스스로 추론해 파라미터를 구성합니다. 메타데이터 Pre-filter로 탐색 공간을 먼저 줄인 뒤, 그 안에서 시맨틱 유사도를 계산하는 AND 구조가 정밀도와 속도를 동시에 확보하는 핵심 설계입니다.</li>
        </ul>
      </div>
    `},{id:"proj2",title:"미래에셋증권 My-AI Assistant 고도화 (Agentic Workflow)",role:"프로젝트 PM",period:"2025 | Genon AI",tags:["Multi-Agent","MCP","RAG","LLMOps","A2A"],coverColor:"linear-gradient(135deg, #0f172a 0%, #3b1f5e 50%, #1a0a3d 100%)",coverIcon:"📈",summary:"기존 도입된 단일 AI Assistant 모델의 검색 품질을 높이고, 상황별 최적화된 목적별 AI 서브 에이전트를 모듈화하여 연계한 Agentic 시스템 고도화.",challenge:"단일 LLM 모델이 모든 금융 도메인의 복합 질문(실적 분석, 리포트 요약, 시황 해설 등)에 동시에 답변하는 구조는 답변 정확도와 환각(Hallucination) 문제에 취약합니다. 역할이 뚜렷한 전문 에이전트 체계로의 전환이 필요했습니다.",solution:"Biz Agent를 중앙 라우터로 두고 실적 분석, 리포트 조회, 시황 브리핑 등 목적별 서브 에이전트가 협업하는 MCP(A2A) 기반 Multi-Agent 워크플로우를 기획했습니다. 메타데이터/키워드를 결합한 하이브리드 RAG와 의미 기반 Semantic Chunking을 도입하여 컨텍스트 유실(Lost in the Middle) 문제를 최소화했습니다.",results:["에이전트 간 역할 분담으로 시스템 유지보수성 대폭 향상","복합 쿼리 오답률 기존 대비 40% 이상 개선","Multi-turn 질의응답 최적화 및 답변 근거 소스 하이라이팅 UX 구현"],techStack:["LangGraph","MCP (A2A)","RAG","Semantic Chunking","Tool Calling"],architecture:`
      <h4 style="color: var(--accent-primary); margin: 1rem 0 0.5rem;">Multi-Agent 구성도 (요약)</h4>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(255,255,255,0.05);">
            <th style="padding: 0.5rem 1rem; text-align:left; border-bottom: 1px solid var(--border-color);">에이전트</th>
            <th style="padding: 0.5rem 1rem; text-align:left; border-bottom: 1px solid var(--border-color);">역할</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:0.5rem 1rem; border-bottom:1px solid var(--border-color);">Biz Agent (Router)</td><td style="padding:0.5rem 1rem; border-bottom:1px solid var(--border-color);">사용자 의도 분류 및 서브 에이전트 Task 분배</td></tr>
          <tr><td style="padding:0.5rem 1rem; border-bottom:1px solid var(--border-color);">실적 분석 Agent</td><td style="padding:0.5rem 1rem; border-bottom:1px solid var(--border-color);">SQL Agent 기반 정형 데이터 실시간 조회</td></tr>
          <tr><td style="padding:0.5rem 1rem; border-bottom:1px solid var(--border-color);">리포트 분석 Agent</td><td style="padding:0.5rem 1rem; border-bottom:1px solid var(--border-color);">VDB 기반 PDF 리포트 RAG 검색 및 요약</td></tr>
          <tr><td style="padding:0.5rem 1rem; border-bottom:1px solid var(--border-color);">Formatter Agent</td><td style="padding:0.5rem 1rem; border-bottom:1px solid var(--border-color);">결과 취합 및 Markdown 포맷 출력</td></tr>
        </tbody>
      </table>
    `},{id:"proj3",title:"WBS 기반 사내 통합 프로젝트 관리 시스템 구축",role:"기획 및 풀스택 프론트/백엔드 완전 개발",period:"2025.12 ~ 2026.03 | 사내 프로젝트",tags:["Vibe Coding","React 19","Node.js","PostgreSQL","Docker","풀스택"],coverColor:"linear-gradient(135deg, #0f172a 0%, #0a2e1a 50%, #1a3d22 100%)",coverIcon:"⚙️",summary:"AI 스타트업 내부에서 사용하는 프로젝트 WBS(Work Breakdown Structure) 관리 시스템과 AI PM 온보딩 가이드 대시보드를 직접 기획하고 Vibe Coding 방식으로 개발하여 실무 적용한 웹 애플리케이션. 기존 엔셀 기반으로 관리하던 프로젝트 일정 및 산출물 추적 업무를 웹 애플리케이션으로 전환.",challenge:"다수의 AI 프로젝트가 동시에 진행되는 환경에서 각 PM별 일정 및 산출물 관리 방식이 파편화되어 전사 현황 파악과 리소스 배분이 어려웠습니다. 엔터프라이즈급 툴은 실시간성과 팀 매니지먼트 요구에 반응하기 어렵고, 신규 PM 온보딩에도 많은 시간이 소요되었습니다.",solution:"Vibe Coding(코딩 어시스턴트와의 긴밀한 AI 협업)으로 기획부터 코드 완성까지 직접 주도하여 제작했습니다. 프론트(React 19 SPA)부터 백엔드(Express REST API), PostgreSQL DB 설계, Docker Compose 기반 배포까지 전 영역을 단독 담당하였습니다. 자체 집필한 AI PM 방법론 가이드를 시스템 내에 탑재하여 지식 자산화를 완성했습니다.",results:["사내 실제 도입: 팀 내 프로젝트 일정 관리 도구로 실무 적용, 엑셀 기반 업무 대체","풀스택 단독 개발: React SPA + REST API + PostgreSQL DB + Docker/Nginx 인프라 전 영역 직접 담당","Vibe Coding 방식으로 기획·요구사항 정의부터 코드 완성까지 AI와 협업하여 주도적으로 전체 사이클 경험","컨테이너 기반 배포: Docker Compose로 DB·백엔드·프론트엔드 3개 서비스를 한 번에 구동, 사내 서버에 직접 배포 운영"],techStack:["React 19 (Vite)","React Router DOM v7","Node.js / Express.js","PostgreSQL 16","Docker + Docker Compose","Nginx","JWT + Google OAuth 2.0","XLSX / jsPDF"],architecture:`
      <h4>시스템 아키텍처</h4>
      <table>
        <thead><tr><th>레이어</th><th>기술 및 역할</th></tr></thead>
        <tbody>
          <tr><td>프론트엔드</td><td>React 19 SPA (Vite) — WBS 간트 차트, 진첨보고, AI PM 가이드 대시보드</td></tr>
          <tr><td>백엔드</td><td>Node.js / Express.js REST API — JWT 인증, Google OAuth 2.0</td></tr>
          <tr><td>데이터베이스</td><td>PostgreSQL 16 — JSONB 기반 유연 스키마 설계</td></tr>
          <tr><td>인프라</td><td>Docker Compose (app + backend + db) / Nginx 리버스 프록시 / 사내 서버 직접 배포</td></tr>
        </tbody>
      </table>

      <h4>시스템 스크린샷</h4>
      <div style="display:flex; flex-direction:column; gap:1.5rem; margin: 1rem 0 1.5rem;">
        <figure style="margin:0;">
          <img src="./wbs-01.png" alt="WBS 대시보드 화면" style="width:100%; border-radius:8px; border:1px solid var(--border-color);">
          <figcaption style="font-size:0.82rem; color:var(--text-light); margin-top:0.4rem; text-align:center;">WBS 프로젝트 대시보드 화면</figcaption>
        </figure>
        <figure style="margin:0;">
          <img src="./wbs-02.png" alt="간트 차트 화면" style="width:100%; border-radius:8px; border:1px solid var(--border-color);">
          <figcaption style="font-size:0.82rem; color:var(--text-light); margin-top:0.4rem; text-align:center;">인터랙티브 간트 차트 화면</figcaption>
        </figure>
        <figure style="margin:0;">
          <img src="./wbs-03.png" alt="AI PM 가이드 대시보드" style="width:100%; border-radius:8px; border:1px solid var(--border-color);">
          <figcaption style="font-size:0.82rem; color:var(--text-light); margin-top:0.4rem; text-align:center;">AI PM 가이드 대시보드 화면</figcaption>
        </figure>
      </div>

      <h4>주요 기능 (7가지)</h4>
      <table>
        <thead><tr><th>기능 영역</th><th>상세</th></tr></thead>
        <tbody>
          <tr><td>WBS 프로젝트 관리</td><td>계층형 WBS 구조, 다중 프로젝트·팀원 초대·프리셋 템플릿 제공</td></tr>
          <tr><td>인터랙티브 간트 차트</td><td>드래그 앤 드롭 행 재정렬, 인라인 셀 편집, 패널 리사이저, 스크롤 동기화</td></tr>
          <tr><td>진척률 자동 계산</td><td>On Track / At Risk / Delayed 자동 판정, 가중치 적용 모드</td></tr>
          <tr><td>데이터 입출력</td><td>Excel 일괄 업로드/다운로드, PDF 보고서 생성, JSON 백업/복원</td></tr>
          <tr><td>진척 보고 탭</td><td>주요 Task 테이블, 담당자별 진척 현황, 외부 공유 링크 생성</td></tr>
          <tr><td>AI PM 가이드 대시보드</td><td>온보딩 자료, 지식 관리 시스템, 댓글 시스템, 관리자 전용 편집</td></tr>
          <tr><td>인증 / 제어</td><td>Google OAuth 2.0 SSO, JWT 세션, RBAC (Admin/User), 프로젝트 공개 범위 3단계</td></tr>
        </tbody>
      </table>
    `},{id:"proj4",title:"ARIBOX & GENGA — AI 기반 3D 컨텐츠 자동화 플랫폼",role:"프로젝트 총괄 PM 및 AI 기반 플랫폼 전략 수립",period:"2022.01 ~ 2024.09",tags:["Photogrammetry","Vision AI","Gaussian Splatting","Deep Learning","Generative AI"],coverColor:"linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a1a3e 100%)",coverIcon:"🧊",summary:"딥러닝, 생성형 AI, Gaussian Splatting 기술을 융합한 3D 콘텐츠 자동화 플랫폼 구축. 반사, 투명, 금속 등 난이도 높은 재질의 객체를 사진만으로 정확하게 3D 모델링하고 사실적인 텍스처를 자동 매핑하는 핵심 기술을 개발. ARIBOX는 Photogrammetry 기반 3D 오브젝트 생성 자동화를, GENGA AI는 Gaussian Splatting 기반 고품질 실시간 렌더링을 담당하며, 두 기술의 결합으로 기존 수작업 3D 제작 대비 획기적인 시간·비용 절감을 실현.",challenge:"1) 반사·투명·금속 등 다양한 재질의 객체를 사진 기반으로 정확하게 3D 모델링하고 사실적인 텍스처를 자동 매핑하는 기술적 난제. 2) Photogrammetry 과정에서 발생하는 불완전하거나 노이즈가 포함된 3D 스캔 데이터를 AI를 통해 자동 복원하여 완성도를 높이는 핵심 기술 개발. 3) 기존 Photogrammetry 방식의 한계를 넘어, 적은 수의 이미지로도 고품질 3D 모델 재구성이 가능한 AI 기반 알고리즘 적용. 4) 실시간 고품질 3D 렌더링이 가능하면서도 다양한 플랫폼(웹, 모바일, 키오스크)에 적용 가능한 경량화 렌더링 솔루션 확보.",solution:"ARIBOX 기술로 사진 기반 3D 모델 자동 생성 파이프라인을 구축하여 촬영 → 3D 복원 → 텍스처 매핑 → 후처리까지 전 과정을 자동화했습니다. 반사/금속 재질의 노이즈 제거를 위해 Vision AI 기반 후처리 모듈을 도입하고, GENGA AI(Gaussian Splatting 기반)를 적용하여 기존 렌더링 방식 대비 대폭 향상된 속도의 실시간 렌더링을 구현했습니다. 이를 기반으로 '스크립트 기반 3D 뷰어', '3D 랜딩 페이지 제작 도구' 등 B2B 서비스로 상용화에 성공했습니다.",results:["3D 콘텐츠 제작 기간 75% 단축 및 비용 60% 절감","네이버 브랜드 스토어 공식 3D 솔루션 파트너 선정","호카, 언더아머, 로보락 등 30개 이상 국내외 유명 브랜드 서비스 제공"],techStack:["Photogrammetry","Vision AI","Gaussian Splatting","Deep Learning","Generative AI"],architecture:`
      <h4 style="color: var(--accent-primary); margin: 1.5rem 0 0.8rem;">주요 역할</h4>
      <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
        <li style="margin-bottom: 0.6rem;"><strong>프로젝트 총괄 PM 및 AI 기반 플랫폼 전략 수립</strong>: 비즈니스 모델 설계부터 AI 기술 로드맵 수립, 상용화 전략까지 프로젝트 전반을 주도. 3D 콘텐츠 시장 분석을 통한 타겟 고객군(이커머스, 브랜드, 제조업) 정의 및 수익 모델 기획</li>
        <li style="margin-bottom: 0.6rem;"><strong>AI 기술 도입 및 솔루션 아키텍처 설계</strong>: ARIBOX(Photogrammetry → 3D 오브젝트 생성 자동화) 파이프라인의 기술 요구사항 정의 및 검증. GENGA AI(Gaussian Splatting 기반 고품질 실시간 렌더링) 도입 타당성 분석 및 기존 렌더링 방식 대비 성능 벤치마크 설계</li>
        <li style="margin-bottom: 0.6rem;"><strong>플랫폼 개발 관리 및 상용화 총괄</strong>: AI 기능 구현을 위한 기술 요구사항 정의, '스크립트 기반 3D 뷰어'(웹 임베딩용), '3D 랜딩 페이지 제작 도구'(마케팅용) 등 서비스 기획 및 출시. 네이버 브랜드 스토어 3D 파트너 선정을 위한 기술 데모 기획·수행</li>
      </ul>

      <h4>핵심 기술 과제 및 해결 방향</h4>
      <table>
        <thead><tr><th>기술 과제</th><th>과제 상세 및 해결 접근</th></tr></thead>
        <tbody>
          <tr><td>난재질 3D 모델링</td><td>반사, 투명, 금속 등 기존 Photogrammetry에서 실패율이 높은 재질을 사진 기반으로 정확하게 3D 모델링하고, 사실적 텍스처를 자동 매핑하는 AI 파이프라인 구축</td></tr>
          <tr><td>3D 스캔 데이터 AI 복원</td><td>Photogrammetry 과정에서 발생하는 불완전한 메시, 노이즈 포인트 클라우드를 Vision AI 기반으로 자동 복원하여 수작업 후처리 없이 상용 품질 확보</td></tr>
          <tr><td>소수 이미지 고품질 복원</td><td>기존 방식(60~120장)의 한계를 넘어, 적은 수의 촬영 이미지만으로도 고품질 3D 모델 재구성이 가능한 AI 기반 알고리즘 연구 및 적용</td></tr>
          <tr><td>경량화 실시간 렌더링</td><td>Gaussian Splatting 기술을 적용하여 고품질 3D 렌더링을 실시간으로 구현하면서도, 웹·모바일·키오스크 등 다양한 플랫폼에서 동작하는 경량 솔루션 확보</td></tr>
          <tr><td>B2B 서비스 상용화</td><td>스크립트 기반 3D 뷰어(이커머스 상품 페이지 임베딩), 3D 랜딩 페이지 제작 도구 등 고객사가 바로 활용 가능한 SaaS 형태의 서비스 기획·출시</td></tr>
        </tbody>
      </table>
    `},{id:"proj5",title:"건돌이닷컴 — AI 기반 소셜 미디어 통합 분석 SaaS 플랫폼",role:"프로젝트 총괄 PM 및 AI 기반 서비스 전략 수립",period:"2019.08 ~ 2021.02",tags:["SNS API","NLP","AWS Cloud","RPA","SaaS"],coverColor:"linear-gradient(135deg, #0a2e1a 0%, #1a3d2a 50%, #0d1f14 100%)",coverIcon:"📊",summary:"인스타그램, 페이스북, 유튜브 등 다중 SNS 채널 데이터를 통합 분석하고 NLP를 활용해 마케팅 인사이트를 제공하는 SaaS 플랫폼 기획 및 상용화. 소셜 미디어 API 연동을 통한 데이터 수집, 비정형 텍스트의 NLP 분석(해시태그 트렌드, 연관 키워드, 감성 분석), 플랫폼별 지표 표준화, RPA 기반 운영 자동화(멀티 플랫폼 예약 발행, 통합 댓글 관리)를 구현하여 정기 구독 기반 유료 서비스로 상용화.",challenge:"1) 소셜 미디어 API 연동 시 플랫폼별 데이터 구조·지표 체계가 상이하여 통합 분석을 위한 데이터 표준화 설계가 필요. 2) 비정형 텍스트 데이터(한국어 해시태그, 댓글, 캡션)의 NLP 분석 정확도 확보 — 해시태그 트렌드 분석, 연관 키워드 추출, 감성 분석(긍정/부정/중립) 파이프라인 구축. 3) RPA를 통한 반복 업무 자동화(멀티 플랫폼 예약 발행, 통합 댓글 관리, 정기 리포트 생성)로 운영 효율 극대화. 4) 멀티 테넌시 SaaS 아키텍처에서 고객별 데이터 격리와 안정적 서비스 운영.",solution:"NLP 분석 및 운영 자동화를 포함한 핵심 서비스 컨셉을 정의하고, AWS 클라우드 기반 확장 가능한 아키텍처를 설계했습니다. NLP 엔진을 통해 해시태그 트렌드 분석·연관 키워드 자동 추출·감성 분류 기능을 구현하고, RPA 모듈로 멀티 플랫폼 예약 발행·통합 댓글 관리·주간 리포트 자동 생성·메일 발송까지 운영 전반을 자동화했습니다. 인스타그램(Meta) 공식 미디어 파트너 API 승인을 획득하여 공식 데이터 접근 권한을 확보했습니다.",results:["2,500개 이상의 유료 계정 확보 (정기 구독 SaaS)","60,000개 이상의 소셜 데이터 분석 처리","운영 리소스 50% 이상 절감 (RPA 자동화)","인스타그램(Meta) 공식 미디어 파트너 API 승인 획득"],techStack:["SNS API (Meta Graph API, YouTube Data API)","NLP (감성 분석, 키워드 추출)","AWS Cloud","RPA"],architecture:`
      <h4 style="color: var(--accent-primary); margin: 1.5rem 0 0.8rem;">주요 역할</h4>
      <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
        <li style="margin-bottom: 0.6rem;"><strong>프로젝트 총괄 및 AI 기반 서비스 전략 수립</strong>: NLP 분석 및 운영 자동화를 포함한 핵심 서비스 컨셉 정의. AWS 클라우드 기반 멀티 테넌시 SaaS 아키텍처 설계 방향 제시 및 기술 스택 의사결정</li>
        <li style="margin-bottom: 0.6rem;"><strong>AI 기능 상세 기획 및 NLP 분석 파이프라인 설계</strong>: NLP 기반 데이터 분석 로직 — 해시태그 트렌드 분석(시계열 추이·연관 태그 클러스터링), 연관 키워드 자동 추출, 감성 분석(긍정/부정/중립 3분류) 기능 설계</li>
        <li style="margin-bottom: 0.6rem;"><strong>RPA 자동화 기능 기획</strong>: 멀티 플랫폼 예약 발행(Instagram, Facebook, YouTube 동시 스케줄링), 통합 댓글 관리(멀티 채널 댓글 통합 대시보드), 주간 리포트 PDF 자동 생성 및 메일 발송 기능 설계</li>
        <li style="margin-bottom: 0.6rem;"><strong>개발 관리 및 기술 협업</strong>: AI 기능 구현을 위한 기술 요구사항 정의 및 NLP 모델 적용 관리. Meta 공식 미디어 파트너 API 승인 획득 과정 총괄</li>
      </ul>

      <h4>기술 구현 구조</h4>
      <table>
        <thead><tr><th>구성 요소</th><th>기술 구현 상세</th></tr></thead>
        <tbody>
          <tr><td>API 데이터 수집</td><td>Instagram Graph API, Facebook Graph API, YouTube Data API 연동. 플랫폼별 상이한 데이터 구조를 통합 스키마로 표준화하여 크로스 플랫폼 비교 분석 지원</td></tr>
          <tr><td>NLP 분석 엔진</td><td>해시태그 트렌드 분석(시계열 추이, 연관 태그 클러스터링), 연관 키워드 자동 추출, 감성 분석(긍정/부정/중립 텍스트 분류). 한국어 비정형 텍스트 전처리 파이프라인 구축</td></tr>
          <tr><td>RPA 자동화</td><td>멀티 플랫폼 예약 발행 스케줄러, 통합 댓글 관리 대시보드(멀티 채널 댓글 수집·응답), 주간 리포트 PDF 자동 생성 및 메일 발송 자동화</td></tr>
          <tr><td>SaaS 인프라</td><td>AWS Cloud 기반 멀티 테넌시 아키텍처, 고객별 데이터 격리, 플랫폼별 지표 표준화 통합 대시보드, 정기 구독 과금 시스템</td></tr>
        </tbody>
      </table>
    `},{id:"proj6",title:"현대/기아 360° 3D Configurator Platform 구축",role:"프로젝트 총괄 PM 및 유니티 엔진 기반 시스템 기획",period:"2020.02 ~ 2023.09",tags:["Unity","Real-time 3D","Web API","글로벌 배포","다국어","3D 경량화"],coverColor:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",coverIcon:"🚗",summary:"전 세계 현대/기아 자동차 매장에서 사용되는 실시간 3D 차량 정보 제공 플랫폼을 유니티 엔진 기반으로 구축. API 연동을 통해 차종별 최신 사양·가격 정보를 실시간 업데이트하고, 색상·휠·인테리어 등 복잡한 옵션 조합을 인터랙티브한 360° 3D로 시각화. 대용량 3D 모델 데이터 경량화 가이드라인을 수립하고 다국어·다기기 최적화 UX를 기획하여 전 세계 20여 개국 딜러십에 성공적으로 배포.",challenge:"1) 대규모 3D 에셋(차량 외장, 내장, 옵션별 파츠) 최적화 및 웹/키오스크 환경에서의 고품질 실시간 렌더링 성능 확보. 2) 글로벌 20개국 동시 서비스를 위한 서버 인프라 구축 및 다국어·다기기 대응. 3) 수백 가지 차량 옵션 조합(색상, 휠, 인테리어, 트림 등)에 따른 3D 모델 동적 교체 로직 설계 — 옵션 간 상호 종속성 및 국가별 사양 차이 반영.",solution:"유니티 엔진 기반 실시간 3D 렌더링 시스템을 기획하고, API 연동을 통한 차종별 사양·가격 실시간 업데이트 체계를 설계했습니다. 대용량 3D 모델 데이터 경량화 가이드라인을 수립하여 로딩 속도와 렌더링 성능을 최적화하고, 옵션 조합별 3D 에셋 모듈화(색상, 휠, 인테리어 독립 교체) 구조를 설계했습니다. 다국어 지원(20개국) 및 기기별(태블릿, 키오스크, PC) 최적화 UX를 기획하여 글로벌 딜러십에 안정적으로 배포했습니다.",results:["전 세계 20여 개국 딜러십 성공적 배포 및 안정 운영","제작 비용 약 56% 절감 실현을 통한 3년간 장기 수주 계약 확보"],techStack:["Unity Engine","Real-time 3D Rendering","Web API","글로벌 CDN","다국어(i18n)"],architecture:`
      <h4 style="color: var(--accent-primary); margin: 1.5rem 0 0.8rem;">주요 역할</h4>
      <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
        <li style="margin-bottom: 0.6rem;"><strong>프로젝트 총괄 PM 및 유니티 엔진 기반 시스템 기획</strong>: API 연동 설계 및 실시간 업데이트 시스템 구축, 대용량 3D 모델 데이터 관리 전략 수립. 차종별 사양·가격·옵션 데이터의 실시간 동기화 체계 설계</li>
        <li style="margin-bottom: 0.6rem;"><strong>3D 에셋 경량화 가이드라인 수립 및 기술 표준화</strong>: 차량 3D 모델의 폴리곤 수·텍스처 해상도·에셋 용량 기준 정의. 옵션별 에셋 모듈화 구조(색상·휠·인테리어 독립 교체) 설계로 조합 경우의 수 효율적 관리</li>
        <li style="margin-bottom: 0.6rem;"><strong>글로벌 배포 및 다국어/다기기 UX 기획</strong>: 20여 개국 동시 배포를 위한 인프라 구성. 국가별 차종 라인업·사양 차이 대응 및 기기별(태블릿, 키오스크, PC) 해상도·성능에 적합한 UX 분기 설계</li>
      </ul>

      <h4>기술 구현 구조</h4>
      <table>
        <thead><tr><th>구성 요소</th><th>기술 구현 상세</th></tr></thead>
        <tbody>
          <tr><td>3D 렌더링</td><td>Unity 기반 실시간 360° 차량 렌더링. 조명·반사·그림자를 포함한 고품질 비주얼, 색상/옵션 선택 시 즉시 3D 모델 교체 반영</td></tr>
          <tr><td>에셋 경량화</td><td>대용량 3D 모델 데이터 경량화 기준 수립(폴리곤·텍스처·LOD). 옵션별 에셋 모듈화(색상·휠·인테리어 독립 교체)로 저장소 효율화</td></tr>
          <tr><td>데이터 연동</td><td>Web API 기반 차종별 최신 사양·가격·옵션 데이터 실시간 동기화. 국가별 사양 차이 및 옵션 상호 종속성 반영 로직</td></tr>
          <tr><td>옵션 조합 로직</td><td>수백 가지 옵션(색상, 휠, 인테리어, 트림) 조합별 3D 에셋 동적 교체. 옵션 간 종속 관계(특정 색상에서만 선택 가능한 휠 등) 비즈니스 룰 엔진</td></tr>
          <tr><td>글로벌 인프라</td><td>20여 개국 동시 운영, 다국어(i18n) 지원, CDN 기반 에셋 배포. 태블릿/키오스크/PC 등 기기별 최적화 UX</td></tr>
        </tbody>
      </table>
    `},{id:"proj7",title:"현대글로비스 AR 기반 차량 관리 시스템 구축",role:"지능형 차량 관리 시스템 기획 및 PM",period:"2019.06 ~ 2019.11",tags:["AR","Google Vision API","OCR","Smart Mirror","Mobile App"],coverColor:"linear-gradient(135deg, #2d1b0e 0%, #3d2b1e 50%, #1a0f05 100%)",coverIcon:"🔍",summary:"광학 문자 인식(OCR) 및 증강 현실(AR) 기술을 활용한 지능형 차량 관리 플랫폼 구축. Google Vision API 기반 OCR 엔진으로 번호판을 자동 인식하고, AR 기술로 야적장 내 차량 정보를 실시간 시각화하여 기존 수작업 점검 프로세스를 디지털화. 스마트 미러(고정형)와 모바일 앱(이동형) 이중 디바이스 체계로 현장 운영 효율성을 극대화.",challenge:"1) 광학 문자 인식(OCR) 기반 번호판 자동 인식의 정확도 확보 — 야적장 환경(야외 조명 변화, 오염·각도 편차)에서도 안정적인 번호판 인식률 달성. 2) AR 기술을 활용한 실시간 차량 정보 시각화 — 번호판 인식 결과와 차량 DB를 연동하여 AR 오버레이로 차량 상태·이력 정보를 즉시 표시. 3) 현장 작업자의 사용성 최적화 — 장갑 착용, 야외 밝기, 한 손 조작 등 현장 제약 조건을 반영한 UX 설계.",solution:"Google Vision API를 활용한 OCR 엔진으로 번호판 인식 정확도를 고도화하고, 인식 결과를 차량 DB와 실시간 연동하여 AR 오버레이로 차량 정보를 시각화하는 시스템을 설계했습니다. 스마트 미러(야적장 출입구 고정 설치형)와 모바일 앱(현장 이동형)의 이중 디바이스 체계를 구축하여 다양한 운영 시나리오에 대응했습니다. 현장 PoC를 통해 야외 환경에서의 인식률을 검증하고 사용자 피드백을 반영하여 UI를 최적화했습니다.",results:["경매 차량 관리 효율성 향상 및 인적 오류 최소화","수작업 점검 → 디지털 데이터 기반 관리 체계 전환","산업 현장 내 AR/AI 결합 솔루션 성공 사례 구축"],techStack:["AR (Augmented Reality)","Google Vision API (OCR)","Smart Mirror","Mobile App"],architecture:`
      <h4 style="color: var(--accent-primary); margin: 1.5rem 0 0.8rem;">주요 역할</h4>
      <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
        <li style="margin-bottom: 0.6rem;"><strong>지능형 차량 관리 시스템 기획 및 PM</strong>: Google Vision API를 활용한 OCR 엔진 기반 번호판 인식 고도화 설계. 야적장 환경(야외 조명·오염·각도) 특성을 고려한 인식 파이프라인 요구사항 정의 및 정확도 KPI 설정</li>
        <li style="margin-bottom: 0.6rem;"><strong>AR 기술 도입 및 PoC 총괄</strong>: 실시간 차량 정보 AR 시각화 기술 도입 — 번호판 인식 → 차량 DB 조회 → AR 오버레이 표시까지의 전체 파이프라인 설계. 현장 사용자 요구사항 분석 및 스마트 미러/모바일 앱 이중 디바이스 PoC 검증</li>
        <li style="margin-bottom: 0.6rem;"><strong>현장 UX 최적화</strong>: 장갑 착용 상태 조작, 야외 화면 가시성, 한 손 조작 등 현장 제약 조건을 반영한 UI/UX 설계. 현장 작업자 대상 PoC 테스트 및 피드백 반영 프로세스 운영</li>
      </ul>

      <h4>기술 구현 구조</h4>
      <table>
        <thead><tr><th>구성 요소</th><th>기술 구현 상세</th></tr></thead>
        <tbody>
          <tr><td>OCR 번호판 인식</td><td>Google Vision API 기반 번호판 자동 인식 엔진. 야외 환경(조명 변화, 오염, 각도 편차)에서의 인식 정확도 고도화 설계</td></tr>
          <tr><td>AR 차량 정보 시각화</td><td>번호판 인식 결과 → 차량 DB 실시간 조회 → AR 오버레이로 차량 상태·이력·식별 정보 즉시 표시</td></tr>
          <tr><td>스마트 미러 (고정형)</td><td>야적장 출입구에 고정 설치, 차량 진입/출차 시 자동 번호판 인식 및 정보 표시</td></tr>
          <tr><td>모바일 앱 (이동형)</td><td>현장 작업자가 이동하며 개별 차량을 직접 조회·점검하는 용도. 장갑 착용·야외 환경 고려 UI</td></tr>
          <tr><td>데이터 관리</td><td>차량별 점검 이력·상태 정보 DB 구축, 디지털화된 관리 체계를 통한 인적 오류 최소화 및 리포트 자동 생성</td></tr>
        </tbody>
      </table>
    `},{id:"proj8",title:"기아 남양연구소 가상 디자인 품평장 시스템 구축",role:"국내 최초 무선 방식 VR 품평 시스템 기획 및 개발 총괄",period:"2020.05 ~ 2020.11",tags:["VR","Antilatency Tracking","다중 접속","무선 스트리밍","디자인 품평","혼합현실"],coverColor:"linear-gradient(135deg, #0e2d1b 0%, #1e3d2b 50%, #051a0f 100%)",coverIcon:"🥽",summary:"국내 최초로 Antilatency를 이용한 무선 방식의 다중 접속 VR 디자인 품평 시스템을 기아 남양연구소에 구축. 기존 유선 VR의 이동 범위 제한을 무선 트래킹으로 해결하고, 다중 사용자가 동일한 가상 공간에서 실물 스케일의 차량 디자인을 실시간으로 검토. 실제 클레이 모델과 VR 디자인을 실시간으로 비교 분석할 수 있는 혼합현실 환경을 구현하여 디자인 의사결정 프로세스를 혁신.",challenge:"1) 다중접속 VR 품평 시스템 구축 — 다수의 디자이너/임원이 동시에 접속하여 실물 스케일의 차량 디자인을 함께 검토할 수 있는 실시간 동기화 환경 구현. 2) 무선 대공간 트래킹 — 기존 유선 VR(제한된 이동 범위)의 한계를 넘어, 실물 크기 차량 주변을 자유롭게 이동하며 관찰 가능한 대공간 무선 트래킹 인프라 설계. 3) 혼합현실 비교 품평 — 실제 차량(클레이 모델)과 AR로 구현된 디자인 시안을 실시간으로 비교 분석할 수 있는 환경 구현.",solution:"Antilatency 기반 Tracking Area를 설계하여 무선 환경에서의 정밀 위치 추적을 구현했습니다. 다중 접속 동기화 시스템을 구축하여 여러 사용자가 동일한 가상 공간에서 실시간으로 차량 디자인을 함께 검토할 수 있도록 했습니다. 실제 클레이 모델 위에 VR 디자인을 오버레이하는 혼합현실 비교 품평 환경을 조성하고, 디자인 의사결정 프로세스 최적화 컨설팅을 수행했습니다.",results:["국내 최초 다중접속 무선 VR 품평 시스템 성공적 구축","디자인 의사결정 시간 기존 대비 60% 단축"],techStack:["VR","Antilatency Tracking","Real-time Wireless Streaming","혼합현실(MR)"],architecture:`
      <h4 style="color: var(--accent-primary); margin: 1.5rem 0 0.8rem;">주요 역할</h4>
      <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
        <li style="margin-bottom: 0.6rem;"><strong>국내 최초 무선 방식 VR 품평 시스템 기획</strong>: Antilatency 기반 Tracking Area 설계 및 개발 총괄. 기존 유선 VR 한계 분석 → 무선 대공간 트래킹 방식 도입을 통한 실물 스케일 차량 주변 자유 이동 환경 기획</li>
        <li style="margin-bottom: 0.6rem;"><strong>다중 접속 동기화 시스템 설계</strong>: 다수의 디자이너/임원이 동일한 가상 공간에서 실물 크기 차량 디자인을 실시간 공동 검토할 수 있는 동기화 아키텍처 설계 참여. 사용자 간 시점·인터랙션 실시간 공유 체계 기획</li>
        <li style="margin-bottom: 0.6rem;"><strong>혼합현실 비교 품평 환경 설계</strong>: 실제 클레이 모델과 VR로 구현된 디자인 시안을 AR 패스스루로 동시에 비교하는 MR 품평 워크플로우 기획. 디자인 검토 → 수정 지시 → 반영 확인까지의 프로세스 최적화 컨설팅</li>
      </ul>

      <h4>기술 구현 구조</h4>
      <table>
        <thead><tr><th>구성 요소</th><th>기술 구현 상세</th></tr></thead>
        <tbody>
          <tr><td>무선 위치 추적</td><td>Antilatency 기반 대공간 Tracking Area 설계. 유선 HMD의 이동 범위 제한 해소, 실물 크기 차량(5m급) 주변 자유 이동 트래킹</td></tr>
          <tr><td>다중 접속 동기화</td><td>다수 사용자 동시 접속 VR 환경. 사용자 간 위치·시점·인터랙션 실시간 동기화, 지연 시간 최소화 설계</td></tr>
          <tr><td>실시간 렌더링</td><td>무선 스트리밍 기반 고품질 차량 디자인 렌더링. 실물 스케일 PBR 차량 모델의 디테일 유지</td></tr>
          <tr><td>혼합현실 비교</td><td>실제 클레이 모델 + VR 디자인 시안을 AR 패스스루로 동시 비교. 디자인 옵션 A/B 전환 비교 기능</td></tr>
          <tr><td>품평 워크플로우</td><td>디자인 검토 → 어노테이션(수정 지시) → 반영 확인까지 일원화된 VR 내 의사결정 프로세스</td></tr>
        </tbody>
      </table>
    `}];function y(){const o=s.coreRoles.map(t=>{const i=t.bullets?`<ul>${t.bullets.map(d=>`<li style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0.4rem;">${d}</li>`).join("")}</ul>`:"";return`
      <div class="skill-category">
        <h3>${t.title}</h3>
        ${t.desc?`<p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">${t.desc}</p>`:""}
        ${i}
      </div>
    `}).join("");return`
    <section class="hero panel">
      <div class="hero-layout">
        <div class="hero-text">
          <h1 class="hero-name">${s.name}</h1>
          <h2 class="hero-title">${s.title}</h2>
          <p class="description">${s.description}</p>
        </div>
        <div class="hero-photo-placeholder" style="border: none; box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);">
          <img src="./profile.jpg" alt="Ahn Sungjin" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      
      <div class="skills-container-wrapper" style="margin-top: 3rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <h2 style="font-size: 1.4rem; font-weight: 600; color: var(--text-main); margin: 0; padding: 0; border: none;">Core Role & Responsibilities</h2>
          <div style="display: flex; gap: 0.5rem;">
            <a href="#portfolio" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center; padding: 0.5rem 1.2rem; background: var(--accent-primary); color: white; border-radius: 8px; font-weight: 600; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3); transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(56, 189, 248, 0.5)'; this.style.backgroundColor='#0284c7';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(56, 189, 248, 0.3)'; this.style.backgroundColor='var(--accent-primary)';">
              포트폴리오 보기
            </a>
            <a href="https://www.notion.so/d0645ef771e083018b7e01647db13739?v=23e45ef771e082cebc1288366db80c8f" target="_blank" rel="noopener noreferrer" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center; padding: 0.5rem 1.2rem; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-main); border-radius: 8px; font-weight: 600; font-size: 0.95rem; transition: transform 0.2s ease, background-color 0.2s ease;" onmouseover="this.style.transform='translateY(-2px)'; this.style.backgroundColor='rgba(255,255,255,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.backgroundColor='transparent';">
              <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i> 노션 블로그 가기
            </a>
          </div>
        </div>
        <div class="skills-container" style="display: flex; flex-direction: column; gap: 1rem;">
          ${o}
        </div>
      </div>
    </section>
  `}function v(){return`
    <section class="portfolio panel">
      <div class="portfolio-header">
        <div>
          <h2>Portfolio</h2>
          <p style="color:var(--text-light); font-size:0.85rem; margin-top:0.5rem;">AI PM으로서 리딩한 주요 프로젝트를 소개합니다. 항목을 클릭하면 상세 내용을 확인할 수 있습니다.</p>
        </div>
        <div style="display: flex; gap: 0.8rem;">
          <button onclick="window.printFullPortfolio()" class="btn btn-secondary" style="padding: 0.6rem 1rem;"><i class="fas fa-file-pdf"></i> PDF 다운로드</button>
          <a href="https://www.notion.so/d0645ef771e083018b7e01647db13739?v=23e45ef771e082cebc1288366db80c8f" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 0.6rem 1rem; border-color: var(--border-color); color: var(--text-main); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; border-radius: 20px;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.05)';" onmouseout="this.style.backgroundColor='transparent';">
            <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i> 노션 블로그 가기
          </a>
        </div>
      </div>
      <div class="port-list">${b.map(t=>{const i=t.tags.map(d=>`<span class="port-tag">${d}</span>`).join("");return`
      <article class="port-card" onclick="openPortfolioDetail('${t.id}')">
        <div class="port-card-body">
          <div class="port-tags">${i}</div>
          <h3 class="port-card-title">${t.title}</h3>
          <p class="port-card-role">${t.role} &nbsp;|&nbsp; ${t.period}</p>
          <p class="port-card-summary">${t.summary}</p>
          <span class="port-read-more">자세히 보기 →</span>
        </div>
      </article>
    `}).join("")}</div>
    </section>
  `}function A(o){const t=b.find(e=>e.id===o);if(!t)return v();const i=t.tags.map(e=>`<span class="port-tag">${e}</span>`).join(""),d=t.results.map(e=>`<li>${e}</li>`).join(""),r=t.techStack.map(e=>`<code class="tech-chip">${e}</code>`).join(" ");return`
    <section class="portfolio panel">
      <button class="back-btn" onclick="navigateTo('#portfolio')">← 포트폴리오 목록으로</button>

      <div class="detail-header">
        <h1 class="detail-title">${t.title}</h1>
        <div class="detail-meta-row">
          <span class="detail-meta-item"><strong>역할</strong> ${t.role}</span>
          <span class="detail-meta-sep">·</span>
          <span class="detail-meta-item"><strong>기간</strong> ${t.period}</span>
        </div>
        <div class="port-tags" style="margin-top: 0.8rem;">${i}</div>
      </div>

      <hr class="detail-divider">

      <article class="detail-article">

        ${t.summary?`<h2>프로젝트 개요</h2><p>${t.summary}</p>`:""}
        ${t.challenge?`<h2>도전 과제 (Challenge)</h2><p>${t.challenge}</p>`:""}
        ${t.solution?`<h2>접근 방식 (Solution &amp; Architecture)</h2><p>${t.solution}</p>`:""}
        
        ${t.architecture}

        ${t.results&&t.results.length>0?`<h2>주요 성과 (Results)</h2><ul class="detail-results">${d}</ul>`:""}
        ${t.techStack&&t.techStack.length>0?`<h2>기술 스택</h2><div class="tech-stack">${r}</div>`:""}

      </article>
    </section>
  `}function D(){return`
    <section class="blog">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2 style="font-size:1.5rem; font-weight:600; margin:0; padding:0; border:none;">Tech & PM Blog</h2>
          <p style="color:var(--text-muted); font-size:0.95rem; margin-top:0.5rem;">최신의 아티클과 인사이트는 노션 블로그에 정기적으로 연재하고 있습니다.</p>
        </div>
      </div>
      <div class="blog-list" style="margin-top: 2rem;">
        <a href="https://www.notion.so/d0645ef771e083018b7e01647db13739?v=23e45ef771e082cebc1288366db80c8f" target="_blank" rel="noopener noreferrer" class="blog-item panel" style="display: flex; align-items: center; justify-content: space-between; padding: 2.5rem; border: 1px solid var(--border-color); background: rgba(255,255,255,0.02); transition: all 0.3s ease;">
          <div>
            <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 0.8rem;">📝 방문하기: Ahn Sungjin's Notion Blog</h3>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.6;">생성형 AI, 프로덕트 매니지먼트, UX 심리학 등에 관한 깊이 있는 글들을 노션 워크스페이스에서 깔끔하게 정리하고 공유합니다.</p>
          </div>
          <div style="font-size: 2rem; color: var(--accent-primary); margin-left: 2rem;">
            <i class="fas fa-external-link-alt"></i>
          </div>
        </a>
      </div>
    </section>
  `}function x(o){I.forEach(t=>{t.classList.remove("active"),(t.getAttribute("href")===o||o===""&&t.getAttribute("href")==="#home")&&t.classList.add("active")})}function f(){const o=window.location.hash,t=u[o]||u[""];x(o),l.innerHTML="";const i=t();setTimeout(()=>{l.innerHTML=i},10)}window.openPortfolioDetail=function(o){x("#portfolio"),l.innerHTML="",setTimeout(()=>{l.innerHTML=A(o),window.scrollTo(0,0)},10)};window.navigateTo=function(o){window.location.hash=o,f()};window.printFullPortfolio=function(){const o=window.scrollY,t=l.innerHTML,i=`
    <div class="pdf-cover" style="height: 277mm; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; box-sizing: border-box; overflow: hidden;">
      <h1 style="font-size: 3.5rem; margin-bottom: 0.8rem; letter-spacing: 3px; color: #38bdf8; font-weight: 700;">Portfolio</h1>
      <div style="width: 60px; height: 3px; background: #38bdf8; margin: 1.5rem auto; border-radius: 2px;"></div>
      <h2 style="font-size: 2.2rem; color: #ffffff; margin-bottom: 0.4rem; font-weight: 600;">${s.name}</h2>
      <h3 style="font-size: 1.3rem; color: #a1a1aa; font-weight: 400; letter-spacing: 1px;">AI Project Manager</h3>
    </div>
    <div class="html2pdf__page-break"></div>
  `,d=s.coreRoles.map(n=>{const h=n.bullets?`<ul style="margin: 0 0 0 1rem; padding: 0; list-style-type: disc;">${n.bullets.map(c=>`<li style="color: #ffffff; font-size: 0.88rem; line-height: 1.65; margin-bottom: 0.3rem;">${c}</li>`).join("")}</ul>`:"";return`
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 16px; break-inside: avoid;">
        <h4 style="font-size: 0.95rem; color: #38bdf8; margin: 0 0 0.6rem 0; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(56,189,248,0.2);">${n.title}</h4>
        ${h}
      </div>
    `}).join(""),r=`
    <div class="pdf-competencies" style="height: 277mm; padding: 30px 15px; box-sizing: border-box; overflow: hidden; display: flex; flex-direction: column;">
      <h2 style="font-size: 1.8rem; color: #38bdf8; margin: 0 0 0.8rem 0; text-align: center; font-weight: 700;">Core Competencies</h2>
      <p style="font-size: 0.92rem; line-height: 1.7; color: #ffffff; text-align: center; max-width: 750px; margin: 0 auto 1.5rem;">
        ${s.description}
      </p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; flex: 1;">
        ${d}
      </div>
    </div>
    <div class="html2pdf__page-break"></div>
  `,e=b.map((n,h)=>{let c=A(n.id);return c=c.replace(/<button class="back-btn".*?<\/button>/,""),h<b.length-1&&(c+='<div class="html2pdf__page-break"></div>'),c}).join(""),a=document.querySelector('button[onclick="window.printFullPortfolio()"]');a&&a.innerHTML,a&&(a.innerHTML='<i class="fas fa-spinner fa-spin"></i> 이미지 로딩 중...',a.disabled=!0);const w=`
    <style>
      .pdf-wrapper { background: #0a0a0a !important; padding: 0 !important; margin: 0 !important; }
      .pdf-wrapper .detail-article { max-width: 100% !important; width: 100% !important; margin: 0 !important; padding: 0 15px !important; }
      .pdf-wrapper .detail-header { max-width: 100% !important; }
      .pdf-wrapper .detail-body { max-width: 100% !important; }
      .pdf-wrapper .panel { max-width: 100% !important; }
      .pdf-wrapper section { max-width: 100% !important; }
      .pdf-wrapper table { width: 100% !important; }
      .pdf-wrapper p, .pdf-wrapper li, .pdf-wrapper td { color: #ffffff !important; }
      .pdf-wrapper h1, .pdf-wrapper h3, .pdf-wrapper h4 { color: #38bdf8 !important; }
      .pdf-wrapper th { color: #ffffff !important; }
      .pdf-wrapper .detail-header h1 { color: #ffffff !important; }
    </style>
  `;l.innerHTML=w+'<div class="pdf-wrapper">'+i+r+e+"</div>",window.scrollTo(0,0);const P={margin:0,filename:"Ahn_Sungjin_Portfolio.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,logging:!1,backgroundColor:"#0a0a0a"},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}},g=Array.from(l.querySelectorAll("img"));let m=0;const p=()=>{a&&(a.innerHTML='<i class="fas fa-spinner fa-spin"></i> PDF 변환 중...'),setTimeout(()=>{window.html2pdf().set(P).from(l).save().then(()=>{l.innerHTML=t,window.scrollTo(0,o)}).catch(n=>{console.error("PDF 생성 에러:",n),l.innerHTML=t,window.scrollTo(0,o),alert("PDF 생성 중 오류가 발생했습니다.")})},600)};g.length===0?p():g.forEach(n=>{n.complete?(m++,m===g.length&&p()):(n.onload=()=>{m++,m===g.length&&p()},n.onerror=()=>{m++,m===g.length&&p()})})};window.addEventListener("hashchange",f);window.addEventListener("DOMContentLoaded",f);
