/* 프로젝트 내용 수정 안내
   - 프로젝트 카드는 아래 projects 배열의 순서대로 표시됩니다. 최신 경력을 위에 배치했습니다.
   - 팝업 상세 이미지: image: 'images/파일명.png' 또는 images: ['images/a.png', 'images/b.png']
   - 바깥쪽 카드 대표 이미지는 cardImage: 'images/카드용이미지.png'로 별도 지정할 수 있습니다.
   - cardImage가 비어 있으면 image의 첫 번째 이미지를 카드에도 사용합니다.
   - 이미지 경로는 프로젝트별로 지정하며, 팝업 상세 이미지는 images 배열에 여러 장 등록할 수 있습니다.
   - 아래에 적힌 파일명은 예시이므로 실제 이미지 파일명과 일치하도록 맞춰 주세요.
   - 이미지가 없거나 경로가 틀리면 이미지가 표시되지 않으므로 images 폴더와 파일명을 확인하세요.
   - 업무 내용은 실제 담당 범위에 맞게 공개 전 확인해 주세요.
*/
const projects = [
  {
    id: 'design-system', year: '2024.03–2026.03', title: '잡코리아 디자인 시스템 스타일 공통화', type: 'DESIGN SYSTEM / COMPONENTS', tags: ['HTML', 'CSS/SCSS', 'JavaScript'], categories: ['component'], cardImage: 'images/jobkorea/design-system-card.png', image: 'images/jobkorea/design-system.png', images: ['images/jobkorea/design-system.png'], imageAlt: '잡코리아 공통 UI 컴포넌트 화면',
    summary: '툴팁·아이콘·버튼 등 반복 UI를 공통화하고 스타일 관리 구조 정리',
    overview: '잡코리아 운영 업무 중 여러 페이지에서 반복 사용하는 UI 요소의 스타일을 공통 규칙으로 정리한 프로젝트입니다.',
    tasks: ['Tooltip, Icon, Button 등 주요 UI 요소를 형태와 기능에 따라 분류하고 공통 컴포넌트화', 'type, position, color, size 등의 속성을 클래스 체계로 구성', '툴팁 위치 및 멀티라인 등 사용 케이스를 고려한 스타일 옵션과 가이드 반영', '페이지별 중복 스타일과 인라인 스타일을 정리하고 공통 CSS/SCSS로 관리할 수 있도록 개선', '아이콘 두께와 크기 등 기존 시안 및 가이드에 정의된 스타일 기준 적용'],
    link: 'https://app.notion.com/p/320eb8fdd67580e7967dd8c284cbf703?pvs=21'
  },
  {
    id: 'recommend', year: '2024.03–2026.03', title: '채용 상품 관련 페이지', type: 'PRODUCT UI', tags: ['HTML', 'CSS/SCSS', 'JavaScript'], categories: ['interaction', 'responsive'], cardImage: 'images/jobkorea/recommend-card.png', image: 'images/jobkorea/recommend.png', images: ['images/jobkorea/recommend.png'], imageAlt: '채용 상품 및 추천 UI 화면',
    summary: '상품 탭, 상세 카드, 지원자 현황 기반 추천 영역 및 안내 팝업 UI 구현',
    overview: '기업 회원이 채용 상품을 살펴보고 지원자 현황에 따른 추천 정보를 확인할 수 있는 UI를 퍼블리싱했습니다.',
    tasks: ['상단 탭 메뉴와 탭별 콘텐츠 레이아웃 퍼블리싱', '상품 상세 카드와 가격 정보 레이아웃 구현', '지원자 현황에 따른 맞춤 상품 추천 영역 구현', '할인율 및 혜택 배지 등 상품별 정보 UI 구성', '추천 상품 팝업, 상세 안내, 조건 선택 박스 및 상품 비교 영역의 마크업과 스타일 구현', 'PC·모바일 대응을 고려한 카드형 UI 구성'], link: 'https://app.notion.com/p/320eb8fdd675813f87c7e641d5b2efdd'
  },
  {
    id: 'search', year: '2024.03–2026.03', title: '잡코리아 검색 페이지 (PC)', type: 'SEARCH UI', tags: ['HTML', 'CSS/SCSS', 'JavaScript'], categories: ['interaction'], cardImage: 'images/jobkorea/search-page-card.png', image: 'images/jobkorea/search-page.png', images: ['images/jobkorea/search-page.png'], imageAlt: '잡코리아 검색 페이지 화면',
    summary: 'Sticky Header, 검색 필터, 조건 설정 팝업, RNB 고정 및 검색 탭 UI 구현',
    overview: '검색 결과를 탐색하면서 검색 조건을 조정할 수 있도록 다양한 UI 요소와 스크롤 동작을 구현했습니다.',
    tasks: ['스크롤 중에도 검색 영역에 접근할 수 있도록 Sticky Header 적용', '스크롤 가능한 체크박스 필터 리스트와 필터 내 검색 입력 UI 구현', '추가 검색 조건을 선택하는 팝업 UI 구현', '스크롤 시 검색 결과 영역과 우측 RNB(Right Navigation Bar)의 고정 동작을 고려한 레이아웃 구현', '검색 유형별 탭 UI 퍼블리싱'],link: 'https://app.notion.com/p/320eb8fdd675819b97a2c4d47a7fb84a?pvs=21'
  },
  {
    id: 'mobile-main', year: '2024.03–2026.03', title: '잡코리아 모바일 메인', type: 'MOBILE WEB', tags: ['HTML', 'CSS/SCSS', 'JavaScript', 'Swiper.js'], categories: ['interaction', 'responsive'], cardImage: 'images/jobkorea/mobile-main-card.png', image: 'images/jobkorea/mobile-main.png', images: ['images/jobkorea/mobile-main.png'], imageAlt: '잡코리아 모바일 메인 화면',
    summary: '메인 배너 스와이퍼, 퀵 메뉴, 맞춤 공고 가로 스크롤 및 UI 컴포넌트화',
    overview: '모바일 메인 화면의 주요 콘텐츠를 터치 환경에 맞게 구성하고, 상단 리뉴얼 시안에 맞춰 UI를 개선했습니다.',
    tasks: ['주요 채용 공고 배너에 Swiper.js를 적용해 슬라이드 UI 구현', '주요 서비스로 이동하는 퀵 네비게이션 아이콘 메뉴 구성', '맞춤 공고 및 추천 리스트에 가로 스크롤 인터랙션 적용', '상단 리뉴얼 시안에 맞춰 기존 코드 정리 및 UI 컴포넌트화'], link: 'https://app.notion.com/p/320eb8fdd6758015a772e34c562a3448?pvs=21'
  },
  {
    id: 'application', year: '2024.03–2026.03', title: '입사 지원 페이지 (PC · Mobile)', type: 'RESPONSIVE FORM', tags: ['HTML', 'CSS/SCSS', 'JavaScript', 'Responsive UI'], categories: ['responsive', 'interaction'], cardImage: 'images/jobkorea/application-card.png', image: 'images/jobkorea/application.png', images: ['images/jobkorea/application.png'], imageAlt: '입사 지원 PC 및 모바일 화면',
    summary: '기본 입력 요소 커스텀 스타일과 PC·모바일 반응형 모달 UI 구현',
    overview: '채용 공고 지원 과정에서 사용되는 입력 폼과 안내 UI를 PC·모바일 환경에 맞게 퍼블리싱했습니다.',
    tasks: ['radio, checkbox, textarea 등 기본 HTML 요소를 서비스 스타일에 맞춰 커스텀', '선택 상태가 명확하게 드러나도록 입력 UI 스타일 구현', '페이지 전환 없이 정보를 확인하거나 입력할 수 있는 내부 팝업 UI 구현', 'PC·모바일 환경에 대응하는 반응형 모달 UI 적용'], link: 'https://app.notion.com/p/320eb8fdd6758021b8a2f059d9abbefd'
  },
  {
    id: 'hot-jobs', year: '2024.03–2026.03', title: '앗뜨공 (Mobile)', type: 'MOBILE INTERACTION', tags: ['HTML', 'CSS', 'JavaScript', 'Swiper.js'], categories: ['interaction', 'responsive'], cardImage: 'images/jobkorea/hot-jobs-card.png', image: 'images/jobkorea/hot-jobs.png', images: ['images/jobkorea/hot-jobs.png'], imageAlt: '앗뜨공 모바일 화면',
    summary: 'Swiper.js 기반 모바일 좌우 슬라이드와 터치 인터랙션 구현',
    overview: '모바일 화면에서 콘텐츠를 좌우로 탐색할 수 있도록 터치 기반 UI를 구현했습니다.',
    tasks: ['Swiper.js를 활용한 좌우 슬라이드 UI 구현', '모바일 터치 제스처를 고려한 콘텐츠 탐색 인터랙션 적용', '서비스 디자인에 맞춰 슬라이드 영역의 마크업 및 스타일 구성'],link: 'https://m.jobkorea.co.kr/recruit/hot-jobs'
  },
  {
    id: 'onepick', year: '2024.03–2026.03', title: '원픽 프리미엄 소개 페이지 (PC)', type: 'ONE-PAGE INTERACTION', tags: ['HTML', 'CSS', 'JavaScript', 'fullpage.js'], categories: ['interaction'], cardImage: 'images/jobkorea/onepick-card.png', image: 'images/jobkorea/onepick.png', images: ['images/jobkorea/onepick.png'], imageAlt: '원픽 프리미엄 소개 페이지 화면',
    summary: 'fullpage.js 기반 원페이지 스크롤 인터랙션과 Fixed Header 구현',
    overview: '서비스의 핵심 정보를 한 페이지 안에서 전달하는 소개 페이지를 퍼블리싱했습니다.',
    tasks: ['fullpage.js를 활용한 원페이지 스크롤 인터랙션 구현', 'Fixed Header를 적용해 스크롤 위치와 관계없이 주요 메뉴에 접근할 수 있도록 구성', '섹션별 콘텐츠 레이아웃 및 스타일 구현'],
    note: '현재 공식 페이지는 리뉴얼되었습니다', link: 'https://app.notion.com/p/320eb8fdd6758003aca4e96e3b7e825e'
  },
  {
    id: 'ai-onbook', year: '2023.08.20–2023.08.29', title: 'AI온북 리뉴얼', type: 'RESPONSIVE WEBSITE', tags: ['HTML', 'SCSS', 'JavaScript', 'Gulp', 'GitHub'], categories: ['responsive', 'legacy'], cardImage: 'images/ai-onbook/card.png', image: 'images/ai-onbook/pc.png', images: ['images/ai-onbook/pc.png', 'images/ai-onbook/tablet.png', 'images/ai-onbook/mobile.png'], imageAlt: 'AI온북 리뉴얼 이미지',
    summary: 'Desktop·Tablet·Mobile 환경에 대응하는 반응형 페이지 퍼블리싱',
    overview: '다양한 디바이스 환경에서 이용할 수 있도록 AI온북 웹페이지를 반응형으로 퍼블리싱한 프로젝트입니다.',
    tasks: ['Desktop, Tablet, Mobile 환경에 대응하는 반응형 페이지 퍼블리싱', 'HTML, SCSS, JavaScript를 활용한 마크업 및 스타일 구현', 'Gulp 기반 작업 환경과 GitHub를 활용한 버전 관리 및 협업'], link: ''
  },
  {
    id: 'kyowon', year: '2022.06.16–2023.09.30', title: '교원 차세대 영업관리 시스템 구축', type: 'ENTERPRISE WEB APP', tags: ['Vue.js', 'Quasar', 'HTML', 'SCSS'], categories: ['component', 'legacy'], cardImage: 'images/kyowon/card.png', image: '', images: [], imageAlt: '교원 영업관리 시스템 공통 컴포넌트 이미지',
    summary: '공통 UI 컴포넌트 제작 및 한국 본사·인도 GDC 퍼블리셔 협업',
    overview: 'Vue.js와 Quasar UI 라이브러리를 활용해 공통 UI 컴포넌트를 제작하고, 인도 GDC(Global Delivery Center) 퍼블리셔가 여러 페이지를 개발하는 협업 방식으로 진행한 프로젝트입니다.',
    tasks: ['메인 페이지를 제외한 여러 화면에서 활용할 공통 UI 컴포넌트 제작', '제작한 컴포넌트를 인도 GDC 퍼블리셔에게 전달해 개별 페이지 개발 지원', 'GDC에서 제작한 페이지를 한국 본사에서 검수하는 협업 프로세스에 맞춰 컴포넌트 제공'],
    note: '사내 시스템으로 외부 공개 링크는 제공할 수 없습니다.', link: ''
  },
  {
    id: 'electronic-contract', year: '2022.05.16–2022.06.03', title: '전자계약 플랫폼 구축', type: 'EMAIL EVENT PAGE', tags: ['Vue.js'], categories: ['interaction', 'legacy'], cardImage: 'images/electronic-contract/card.png', image: 'images/electronic-contract/email-layout.png', images: ['images/electronic-contract/email-layout.png'], imageAlt: '전자계약 플랫폼 메일링 이미지',
    summary: 'Vue.js 프레임워크를 활용한 메일링 이벤트 페이지 퍼블리싱',
    overview: '전자계약 플랫폼 프로젝트에서 메일링 이벤트 페이지 퍼블리싱 작업을 수행했습니다.',
    tasks: ['Vue.js 기반 이벤트 페이지 마크업 및 퍼블리싱', '메일링 이벤트 페이지의 콘텐츠 레이아웃과 스타일 구현'], link: 'https://paperless.onl/'
  },
  {
    id: 'hanwha', year: '2022.05.02–2022.05.13', title: '한화 채용시스템', type: 'RECRUITMENT WEBSITE', tags: ['HTML', 'CSS', 'JavaScript'], categories: ['legacy'], cardImage: 'images/hanwha/card.png', image: '', images: [], imageAlt: '한화 채용시스템 프로젝트 이미지',
    summary: '채용시스템 페이지 퍼블리싱',
    overview: '한화 채용시스템 프로젝트에서 페이지 퍼블리싱 작업을 수행했습니다.',
    tasks: ['채용시스템 페이지의 마크업 및 스타일 구현', 'HTML, CSS, JavaScript 기반 화면 퍼블리싱'],
    note: '상세페이지는 외부 링크로 제공할 수 없습니다.', link: ''
  },
  {
    id: 'aig', year: '2021.10.13–2022.02.04', title: 'AIG 디지털 플랫폼 개선', type: 'CORPORATE WEBSITE', tags: ['HTML', 'CSS', 'JavaScript'], categories: ['interaction', 'legacy'], cardImage: 'images/aig/card.png', image: '', images: [], imageAlt: 'AIG 디지털 플랫폼 프로젝트 이미지',
    summary: '메인 GNB·비주얼 슬라이드와 서브 페이지 LNB·콘텐츠 UI 퍼블리싱',
    overview: '보험상품 소개 웹사이트의 메인 페이지와 상품 상세 서브 페이지를 퍼블리싱했습니다.',
    tasks: ['메인 페이지 GNB(Global Navigation Bar) 메뉴 영역 퍼블리싱', '메인 비주얼 영역 레이아웃과 배너 슬라이드 UI 구현', '서브 페이지의 보험상품 소개 및 상세 콘텐츠 레이아웃 퍼블리싱', 'LNB(Local Navigation Bar) 메뉴 UI와 메뉴 선택에 따른 콘텐츠 전환 및 이동 기능 구현', '메뉴 및 배너 등 주요 화면 요소의 인터랙션 구현'],
    note: '현재 공식 웹사이트는 리뉴얼되어 운영 중이며, 본 프로젝트는 당시 수행한 퍼블리싱 작업을 기준으로 작성했습니다.', link: 'https://www.aig.co.kr/wm/dpwmm001.html'
  }
];

const grid = document.getElementById('projectGrid');
const dialog = document.getElementById('projectDialog');
const dialogContent = document.getElementById('dialogContent');
const jobkoreaIds = ['design-system', 'recommend', 'search', 'mobile-main', 'application', 'hot-jobs', 'onepick'];
const jobkoreaProjects = projects.filter(p => jobkoreaIds.includes(p.id));
const legacyProjects = projects.filter(p => !jobkoreaIds.includes(p.id));
// 잡코리아 7개 프로젝트를 묶은 바깥쪽 카드 이미지 경로(필요할 때 파일명을 입력하세요).
const jobkoreaGroupCardImage = 'images/jobkorea/jobkorea-group-card.png';
const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function imageMarkup(project, large = false) {
  const detailPaths = Array.isArray(project.images) ? project.images.filter(Boolean) : [];
  const popupPaths = detailPaths.length ? detailPaths : (project.image ? [project.image] : []);
  if (large) {
    if (!popupPaths.length) return '';
    return `<div class="detail-gallery image-slot--${project.id}">${popupPaths.map((src, i) =>
      `<img class="detail-image zoomable-image" src="${esc(src)}" alt="${esc(project.imageAlt)}${popupPaths.length > 1 ? ` ${i + 1}` : ''}" loading="lazy" tabindex="0" role="button" aria-label="이미지 크게 보기">`
    ).join('')}</div>`;
  }
  const brands = {'ai-onbook':'AI ON BOOK','kyowon':'KYOWON','electronic-contract':'PAPERLESS','hanwha':'HANWHA','aig':'AIG'};
  const brand = brands[project.id] || 'JOBKOREA';
  return `<div class="brand-cover brand-cover--${project.id}"><span>${brand}</span></div>`;
}

function projectCard(p, index) {
  return `<article class="project-card" tabindex="0" role="button" data-id="${p.id}" aria-label="${esc(p.title)} 상세 보기">
    <div class="card-visual">${imageMarkup(p)}<span class="card-index">${String(index).padStart(2,'0')}</span></div>
    <div class="card-content"><div class="card-meta"><span>${esc(p.type)}</span><span>${esc(p.year)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="tag-row">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><span class="card-more">DETAILS <b>↗</b></span></div>
  </article>`;
}
function jobkoreaCard() {
  const tags = ['HTML', 'CSS/SCSS', 'JavaScript', 'Swiper.js', 'fullpage.js', 'UI Components'];
  return `<article class="project-card jobkorea-card" tabindex="0" role="button" data-id="jobkorea-group" aria-label="잡코리아 운영 및 UI 개선 상세 보기">
    <div class="card-visual"><div class="brand-cover brand-cover--jobkorea"><span>JOBKOREA</span></div><span class="card-index">01</span></div>
    <div class="card-content"><div class="card-meta"><span>WEB SERVICE OPERATION</span><span>2024.03–2026.03</span></div><h3>잡코리아 서비스 운영 및 UI 개선</h3><p>잡코리아 서비스 운영 유지보수 및 신규페이지 제작, UI 개선</p><div class="tag-row">${tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><span class="card-more">DETAILS <b>↗</b></span></div>
  </article>`;
}
function bindCards() {
  grid.querySelectorAll('.project-card').forEach(card => {
    const open = () => card.dataset.id === 'jobkorea-group' ? showJobkoreaGroup() : showProject(projects.find(p => p.id === card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}
function renderProjects() {
  grid.innerHTML = `${jobkoreaCard()}${legacyProjects.map((p, i) => projectCard(p, i + 2)).join('')}`;
  bindCards();
}
function showProject(p) {
  if (!p) return;
  dialogContent.innerHTML = `<p class="eyebrow">${esc(p.type)} · ${esc(p.year)}</p><h2 id="dialogTitle">${esc(p.title)}</h2><div class="detail-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>${(p.images && p.images.some(Boolean)) || p.image ? `<div class="detail-visual">${imageMarkup(p, true)}</div>` : ''}<h3>프로젝트 개요</h3><p class="detail-overview">${esc(p.overview)}</p><h3>주요 담당 업무</h3><ul class="task-list">${p.tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>${p.note ? `<p class="project-note">${esc(p.note)}</p>` : ''}${p.link ? `<a class="detail-link" href="${esc(p.link)}" target="_blank" rel="noreferrer">관련 링크 / 참고 시안 ↗</a>` : ''}<p class="edit-note">※ 담당 업무는 실제 수행한 범위와 일치하도록 확인 후 사용하세요.</p>`;
  dialog.showModal();
  bindImageZoom();
}
function showJobkoreaGroup() {
  const sections = jobkoreaProjects.map((p, i) => `<section class="subproject-detail"><div class="subproject-heading"><span class="subproject-number">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(p.title)}</h3><p>${esc(p.type)} · ${esc(p.year)}</p></div></div><div class="detail-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>${(p.images && p.images.some(Boolean)) || p.image ? `<div class="detail-visual">${imageMarkup(p, true)}</div>` : ''}<h4>프로젝트 개요</h4><p class="detail-overview">${esc(p.overview)}</p><h4>주요 담당 업무</h4><ul class="task-list">${p.tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>${p.note ? `<p class="project-note">${esc(p.note)}</p>` : ''}${p.link ? `<a class="detail-link" href="${esc(p.link)}" target="_blank" rel="noreferrer">관련 링크 / 참고 시안 ↗</a>` : ''}</section>`).join('');
  dialogContent.innerHTML = `<p class="eyebrow">WEB SERVICE OPERATION · 2024.03–2026.03</p><h2 id="dialogTitle">잡코리아 서비스 운영 및 UI 개선</h2><div class="detail-tags"><span>HTML</span><span>CSS/SCSS</span><span>JavaScript</span><span>Swiper.js</span><span>fullpage.js</span><span>UI Components</span></div>${sections}`;
  dialog.showModal();
  bindImageZoom();
}
function bindImageZoom() {
  dialogContent.querySelectorAll('.zoomable-image').forEach(img => {
    if (img.dataset.zoomBound) return;
    img.dataset.zoomBound = '1';
    const openZoom = () => { lightboxImage.src = img.src; lightboxImage.alt = img.alt; imageLightbox.showModal(); };
    img.addEventListener('click', openZoom);
    img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openZoom(); } });
  });
}
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
document.querySelector('.lightbox-close').addEventListener('click', () => imageLightbox.close());
imageLightbox.addEventListener('click', e => { if (e.target === imageLightbox) imageLightbox.close(); });
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
renderProjects();


