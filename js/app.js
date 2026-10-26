const translations = {
  en: {
    brandSubtitle:"Student Management", institutionName:"Demo Institution", institutionType:"Institution workspace", dashboard:"Dashboard", register:"Student Register", attendance:"Attendance", assessment:"Assessment", rank:"Rank", manage:"MANAGE", reports:"Reports", settings:"Settings", adminName:"Demo Admin", adminRole:"Main administrator", workspace:"WORKSPACE", overview:"OVERVIEW", welcomeTitle:"Good morning, Admin 👋", welcomeText:"Here’s what’s happening at your institution today.", prototypeTitle:"Your SMIS workspace is ready to begin", prototypeText:"This starter uses demo data only. Connect secure authentication and a database before adding real student records.", snapshot:"Institution snapshot", snapshotText:"A quick look at your academic records", refresh:"Refresh", totalStudents:"Total students", presentToday:"Present today", absentToday:"Absent today", pendingResults:"Pending results", registeredRecords:"Registered records", attendanceDemo:"Attendance demo", needsFollowUp:"May need follow-up", awaitingApproval:"Awaiting approval", recentStudents:"Recently registered students", recentText:"Latest records in this demo workspace", viewAll:"View all →", student:"STUDENT", studentCode:"STUDENT CODE", department:"DEPARTMENT", status:"STATUS", noStudents:"No students yet", noStudentsText:"Add a student to start building your register.", addFirstStudent:"Add first student", quickActions:"Quick actions", quickText:"Common tasks, close at hand", addStudent:"Add a student", addStudentText:"Create a student record", takeAttendance:"Take attendance", takeAttendanceText:"Record daily presence", enterAssessment:"Enter assessment", enterAssessmentText:"Manage course results", viewReports:"View reports", viewReportsText:"Review academic summaries", starterVersion:"Starter workspace v1.0", demoOnly:"Demo interface · No real student data stored", studentRecords:"STUDENT RECORDS", registerTitle:"Student Register", registerIntro:"Create and manage student records in this local demo.", newStudent:"New student", reviewBeforeSave:"Review the details before confirming the save.", firstName:"First name *", fatherName:"Father's name *", grandfatherName:"Grandfather's name", motherName:"Mother's name", phone:"Phone", batch:"Batch / class *", demoStorageNote:"Demo only: records stay in this browser and are not securely backed up or shared.", cancel:"Cancel", reviewSave:"Review & save", allStudents:"All students", searchStudents:"Search name, code, department...", dailyRecords:"DAILY RECORDS", attendanceTitle:"Attendance", attendanceIntro:"Mark attendance for the students in your local demo register.", attendanceDate:"Attendance date", present:"Present", absent:"Absent", permission:"Permission", attendanceSaveNote:"Changes apply to this browser demo only.", markAllPresent:"Mark all present", attendanceStatus:"ATTENDANCE STATUS", attendanceEmptyText:"Register students before taking attendance.", goRegister:"Go to Student Register", academicRecords:"ACADEMIC RECORDS", assessmentTitle:"Assessment", assessmentIntro:"Assessment entry and approval workflows will be connected in a later build step.", assessmentSetup:"Assessment setup", assessmentSetupText:"Configure courses, assessment types, maximum marks, weights, and pass marks.", resultApproval:"Result approval", resultApprovalText:"Authorized academic staff will review and publish results before students can see them.", planned:"Planned", important:"Important", assessmentSafety:"Do not use this prototype to store real grades. Secure accounts, database permissions, and audit logs must be implemented and tested first.", rankTitle:"Rank", rankIntro:"Rank calculation will use approved assessment results and institution rules.", rankNotReady:"Rank calculation is not connected yet", rankNotReadyText:"The next assessment phase will add institution-configurable rank scope, tie handling, and recalculation after approved grade changes.", institutionInsights:"INSTITUTION INSIGHTS", reportsTitle:"Reports", reportsIntro:"Reporting cards will become live when the attendance and assessment modules are connected.", studentReports:"Student reports", studentReportsText:"Individual monthly and yearly summaries, enrollment lists, and student status reports.", attendanceReports:"Attendance reports", attendanceReportsText:"Attendance percentages, repeated absences, and date-range summaries.", configuration:"CONFIGURATION", settingsTitle:"Settings", settingsIntro:"These are preview settings; secure institution settings require authenticated storage.", languageSetting:"Language", languageSettingText:"Choose English or Amharic for this interface.", institutionSetting:"Institution profile", institutionSettingText:"Institution name and logo settings will be permission-controlled.", accessSetting:"Users & permissions", accessSettingText:"Admin-managed accounts, role permissions, and audit history.", calendarSetting:"Calendar & academic year", calendarSettingText:"Institution-specific calendar, terms, and academic-year rules.", confirmStudent:"Confirm student details", confirmText:"Please check these details before saving the student.", goBackEdit:"Go back & edit", sureSave:"Sure, save", studentSaved:"Student saved in this browser demo.", duplicateCode:"That student code is already in use.", needName:"Please fill in the required fields.", noCode:"Student code", records:"records", searchEmpty:"No matching students found.", chooseStatus:"Choose status", profileDemo:"Profile and notifications are demo-only.", actions:"Actions", editStudent:"Edit", withdrawStudent:"Withdraw", restoreStudent:"Restore", deleteStudent:"Delete", activeStatus:"Active", withdrawnStatus:"Withdrawn", editTitle:"Edit student", studentUpdated:"Student record updated.", studentWithdrawn:"Student marked as withdrawn. History is retained in this demo.", studentRestored:"Student restored to Active.", deleteConfirm:"Permanently remove this demo record? This cannot be undone.", studentDeleted:"Demo student record deleted.", today:"Today", codeAuto:"Auto-generated if empty"
  },
  am: {
    brandSubtitle:"የተማሪ አስተዳደር", institutionName:"ምሳሌ ተቋም", institutionType:"የተቋም የሥራ ቦታ", dashboard:"ዳሽቦርድ", register:"የተማሪ ምዝገባ", attendance:"አቴንዳንስ", assessment:"ምዘና", rank:"ደረጃ", manage:"አስተዳደር", reports:"ሪፖርቶች", settings:"ቅንብሮች", adminName:"ምሳሌ አስተዳዳሪ", adminRole:"ዋና አስተዳዳሪ", workspace:"የሥራ ቦታ", overview:"አጠቃላይ እይታ", welcomeTitle:"እንኳን ደህና መጡ፣ አስተዳዳሪ 👋", welcomeText:"ዛሬ በተቋምዎ ውስጥ ያለው አጠቃላይ ሁኔታ።", prototypeTitle:"የSMIS የሥራ ቦታ ለመጀመር ዝግጁ ነው", prototypeText:"ይህ የመጀመሪያ ስሪት ምሳሌ ዳታ ብቻ ይጠቀማል። እውነተኛ የተማሪ መረጃ ከማስገባት በፊት ደህንነቱ የተጠበቀ መግቢያና ዳታቤዝ ማገናኘት ያስፈልጋል።", snapshot:"የተቋሙ አጠቃላይ ሁኔታ", snapshotText:"የትምህርት መረጃዎች አጭር እይታ", refresh:"አድስ", totalStudents:"ጠቅላላ ተማሪዎች", presentToday:"ዛሬ የተገኙ", absentToday:"ዛሬ የቀሩ", pendingResults:"በመጠባበቅ ላይ ያሉ ውጤቶች", registeredRecords:"የተመዘገቡ መረጃዎች", attendanceDemo:"የአቴንዳንስ ምሳሌ", needsFollowUp:"ክትትል ሊያስፈልግ ይችላል", awaitingApproval:"ማረጋገጫ በመጠባበቅ ላይ", recentStudents:"በቅርቡ የተመዘገቡ ተማሪዎች", recentText:"በዚህ የሙከራ ሥርዓት ያሉ የቅርብ መረጃዎች", viewAll:"ሁሉንም ይመልከቱ →", student:"ተማሪ", studentCode:"የተማሪ ኮድ", department:"ዲፓርትመንት", status:"ሁኔታ", noStudents:"ገና ተማሪ የለም", noStudentsText:"ምዝገባውን ለመጀመር ተማሪ ይጨምሩ።", addFirstStudent:"የመጀመሪያ ተማሪ ይጨምሩ", quickActions:"ፈጣን ተግባራት", quickText:"ብዙ ጊዜ የሚያስፈልጉ ተግባራት", addStudent:"ተማሪ ይጨምሩ", addStudentText:"የተማሪ መረጃ ይመዝግቡ", takeAttendance:"አቴንዳንስ ይያዙ", takeAttendanceText:"የዕለቱን መገኘት ይመዝግቡ", enterAssessment:"ምዘና ያስገቡ", enterAssessmentText:"የኮርስ ውጤቶችን ያስተዳድሩ", viewReports:"ሪፖርቶችን ይመልከቱ", viewReportsText:"የትምህርት ማጠቃለያዎችን ይመልከቱ", starterVersion:"የመጀመሪያ ስሪት v1.0", demoOnly:"የሙከራ ገጽ · እውነተኛ የተማሪ መረጃ አልተቀመጠም", studentRecords:"የተማሪ መረጃዎች", registerTitle:"የተማሪ ምዝገባ", registerIntro:"በዚህ የአካባቢ ሙከራ የተማሪ መረጃ ይፍጠሩና ያስተዳድሩ።", newStudent:"አዲስ ተማሪ", reviewBeforeSave:"ከማስቀመጥዎ በፊት መረጃውን ይመልከቱ።", firstName:"ስም *", fatherName:"የአባት ስም *", grandfatherName:"የአያት ስም", motherName:"የእናት ስም", phone:"ስልክ", batch:"ባች / ክፍል *", demoStorageNote:"የሙከራ ብቻ፦ መረጃው በዚህ ብራውዘር ውስጥ ብቻ ይቆያል፤ በደህንነት አይባክአፕ ወይም አይጋራም።", cancel:"ይቅር", reviewSave:"ይመልከቱና ያስቀምጡ", allStudents:"ሁሉም ተማሪዎች", searchStudents:"ስም፣ ኮድ፣ ዲፓርትመንት ፈልግ...", dailyRecords:"የዕለት መዝገቦች", attendanceTitle:"አቴንዳንስ", attendanceIntro:"በሙከራ ምዝገባዎ ውስጥ ላሉ ተማሪዎች መገኘትን ይመዝግቡ።", attendanceDate:"የአቴንዳንስ ቀን", present:"ተገኝቷል", absent:"አልተገኘም", permission:"ፈቃድ", attendanceSaveNote:"ለውጦች በዚህ የብራውዘር ሙከራ ላይ ብቻ ይተገበራሉ።", markAllPresent:"ሁሉንም ተገኝቷል በል", attendanceStatus:"የመገኘት ሁኔታ", attendanceEmptyText:"አቴንዳንስ ከመያዝዎ በፊት ተማሪዎችን ይመዝግቡ።", goRegister:"ወደ ተማሪ ምዝገባ ይሂዱ", academicRecords:"የትምህርት መዝገቦች", assessmentTitle:"ምዘና", assessmentIntro:"የምዘና ማስገቢያና የማረጋገጫ ሂደት በቀጣይ የግንባታ ደረጃ ይገናኛሉ።", assessmentSetup:"የምዘና ቅንብር", assessmentSetupText:"ኮርሶችን፣ የምዘና ዓይነቶችን፣ ከፍተኛ ነጥብን፣ ክብደትንና ማለፊያ ነጥብን ያዘጋጁ።", resultApproval:"የውጤት ማረጋገጫ", resultApprovalText:"ተማሪዎች ከማየታቸው በፊት የተፈቀደላቸው የትምህርት ኃላፊዎች ውጤቶችን ይመረምራሉና ያሳትማሉ።", planned:"በዕቅድ ላይ", important:"አስፈላጊ", assessmentSafety:"እውነተኛ ውጤቶችን በዚህ ሙከራ ውስጥ አታስቀምጡ። ደህንነቱ የተጠበቁ መለያዎች፣ የዳታቤዝ ፈቃዶችና የለውጥ መዝገቦች መጀመሪያ መገንባትና መፈተን አለባቸው።", rankTitle:"ደረጃ", rankIntro:"ደረጃ የሚሰላው በተፈቀዱ ውጤቶችና በተቋሙ ደንቦች መሠረት ይሆናል።", rankNotReady:"የደረጃ ስሌት ገና አልተገናኘም", rankNotReadyText:"ቀጣዩ የምዘና ደረጃ የተቋም የደረጃ ወሰን፣ እኩል ነጥብ አያያዝና የተፈቀዱ ውጤቶች ሲቀየሩ ዳግም ስሌት ይጨምራል።", institutionInsights:"የተቋም መረጃ ትንተና", reportsTitle:"ሪፖርቶች", reportsIntro:"የአቴንዳንስና የምዘና ሞጁሎች ሲገናኙ ሪፖርቶች ተግባራዊ ይሆናሉ።", studentReports:"የተማሪ ሪፖርቶች", studentReportsText:"የወርና የዓመት ማጠቃለያ፣ የምዝገባ ዝርዝርና የተማሪ ሁኔታ ሪፖርቶች።", attendanceReports:"የአቴንዳንስ ሪፖርቶች", attendanceReportsText:"የመገኘት መቶኛ፣ ተደጋጋሚ መቅረትና የቀን ክልል ማጠቃለያዎች።", configuration:"ቅንብር", settingsTitle:"ቅንብሮች", settingsIntro:"እነዚህ የቅድመ እይታ ቅንብሮች ናቸው፤ ደህንነቱ የተጠበቁ የተቋም ቅንብሮች የተጠቃሚ ማረጋገጫ ያለው ማከማቻ ይፈልጋሉ።", languageSetting:"ቋንቋ", languageSettingText:"ለዚህ ገጽ አማርኛን ወይም እንግሊዝኛን ይምረጡ።", institutionSetting:"የተቋም መገለጫ", institutionSettingText:"የተቋም ስምና ሎጎ በፈቃድ ቁጥጥር ሥር ይሆናሉ።", accessSetting:"ተጠቃሚዎችና ፈቃዶች", accessSettingText:"በአስተዳዳሪ የሚተዳደሩ መለያዎች፣ የሚና ፈቃዶችና የለውጥ ታሪክ።", calendarSetting:"ቀን መቁጠሪያና የትምህርት ዓመት", calendarSettingText:"ለተቋሙ የተዘጋጀ ቀን መቁጠሪያ፣ የትምህርት ወቅቶችና የዓመት ደንቦች።", confirmStudent:"የተማሪ መረጃውን ያረጋግጡ", confirmText:"ተማሪውን ከማስቀመጥዎ በፊት ይህንን መረጃ ይመልከቱ።", goBackEdit:"ተመለስና አስተካክል", sureSave:"አዎ፣ አስቀምጥ", studentSaved:"ተማሪው በዚህ የብራውዘር ሙከራ ተቀምጧል።", duplicateCode:"ይህ የተማሪ ኮድ አስቀድሞ ተጠቅሟል።", needName:"እባክዎ የሚያስፈልጉትን መስኮች ይሙሉ።", noCode:"የተማሪ ኮድ", records:"መዝገቦች", searchEmpty:"የሚዛመድ ተማሪ አልተገኘም።", chooseStatus:"ሁኔታ ይምረጡ", profileDemo:"መገለጫና ማሳወቂያዎች የሙከራ ብቻ ናቸው።", actions:"ተግባራት", editStudent:"አስተካክል", withdrawStudent:"ከንቁ ዝርዝር አውጣ", restoreStudent:"መልስ", deleteStudent:"ሰርዝ", activeStatus:"ንቁ", withdrawnStatus:"የወጣ", editTitle:"የተማሪ መረጃ አስተካክል", studentUpdated:"የተማሪ መረጃ ተስተካክሏል።", studentWithdrawn:"ተማሪው ከንቁ ዝርዝር ወጥቷል። ታሪኩ በዚህ ሙከራ ይቀመጣል።", studentRestored:"ተማሪው ወደ ንቁ ሁኔታ ተመልሷል።", deleteConfirm:"ይህን የሙከራ መዝገብ በቋሚነት ማስወገድ ይፈልጋሉ? መመለስ አይቻልም።", studentDeleted:"የሙከራ የተማሪ መዝገብ ተሰርዟል።", today:"ዛሬ", codeAuto:"ካልተሞላ በራስ-ሰር ይፈጠራል"
  }
};

const state = { language: 'en', students: [], attendance: {}, pendingStudent: null, editingId: null };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let toastTimer;

function t(key) { return translations[state.language][key] || translations.en[key] || key; }
function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function initials(student) { return `${student.firstName?.[0] || ''}${student.fatherName?.[0] || ''}`.toUpperCase(); }
function fullName(student) { return [student.firstName, student.fatherName, student.grandfatherName].filter(Boolean).join(' '); }
function localDateString(date = new Date()) { const d = new Date(date.getTime() - date.getTimezoneOffset() * 60000); return d.toISOString().slice(0, 10); }
function showToast(message) {
  const el = $('#toast'); el.textContent = message; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}
function goToPage(name) {
  $$('.page').forEach(p => p.classList.toggle('active-page', p.id === `page-${name}`));
  $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.page === name));
  const active = $(`.nav-item[data-page="${name}"]`);
  $('#pageHeading').textContent = active ? active.innerText.trim() : name;
  $('#sidebar').classList.remove('open');
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function renderTranslations() {
  document.documentElement.lang = state.language === 'am' ? 'am' : 'en';
  document.documentElement.dir = 'ltr';
  $$('[data-i18n]').forEach(el => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });
  $$('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  $('#languageSelect').value = state.language;
  $('#settingsLanguage').value = state.language;
  $('#todayLabel').textContent = new Intl.DateTimeFormat(state.language === 'am' ? 'am-ET' : 'en-GB', {dateStyle:'medium'}).format(new Date());
  const active = $('.nav-item.active'); if (active) $('#pageHeading').textContent = active.innerText.trim();
  renderAll();
}
function renderAll() {
  renderStudents();
  renderRecentStudents();
  renderAttendance();
  $('#totalStudentsValue').textContent = state.students.filter(s => s.status !== 'Withdrawn').length;
  const today = $('#attendanceDate').value || localDateString();
  const statuses = state.students.filter(s => s.status !== 'Withdrawn').map(s => state.attendance[`${today}:${s.id}`] || '');
  $('#presentValue').textContent = statuses.filter(x => x === 'present').length;
  $('#absentValue').textContent = statuses.filter(x => x === 'absent').length;
  $('#pendingValue').textContent = '—';
}
function renderStudentRows(students) {
  if (!students.length) return '';
  return students.map(s => {
    const withdrawn = s.status === 'Withdrawn';
    return `<tr class="${withdrawn ? 'withdrawn-row' : ''}">
      <td><div class="student-cell"><div class="student-avatar">${escapeHtml(initials(s))}</div><div><div class="student-name">${escapeHtml(fullName(s))}</div><div class="student-sub">${escapeHtml(s.phone || '—')}</div></div></div></td>
      <td>${escapeHtml(s.code)}</td><td>${escapeHtml(s.department)}</td><td>${escapeHtml(s.batch)}</td><td><span class="status-pill ${withdrawn ? 'status-withdrawn' : 'status-active'}">${escapeHtml(withdrawn ? t('withdrawnStatus') : t('activeStatus'))}</span></td>
      <td><div class="student-actions"><button class="mini-action" data-student-action="edit" data-student-id="${escapeHtml(s.id)}">${escapeHtml(t('editStudent'))}</button><button class="mini-action" data-student-action="${withdrawn ? 'restore' : 'withdraw'}" data-student-id="${escapeHtml(s.id)}">${escapeHtml(withdrawn ? t('restoreStudent') : t('withdrawStudent'))}</button><button class="mini-action danger-action" data-student-action="delete" data-student-id="${escapeHtml(s.id)}">${escapeHtml(t('deleteStudent'))}</button></div></td>
    </tr>`;
  }).join('');
}
function renderStudents() {
  const q = ($('#studentSearch').value || '').trim().toLowerCase();
  const list = state.students.filter(s => [fullName(s), s.code, s.department, s.batch, s.status].some(v => String(v || '').toLowerCase().includes(q)));
  $('#studentsTableBody').innerHTML = renderStudentRows(list);
  $('#studentCountLabel').textContent = `${state.students.length} ${t('records')} · ${state.students.filter(s => s.status !== 'Withdrawn').length} ${state.language === 'am' ? 'ንቁ' : 'active'}`;
  $('#registerEmpty').classList.toggle('hidden', list.length > 0);
  if (!list.length && q) $('#registerEmpty').querySelector('strong').textContent = t('searchEmpty');
  else $('#registerEmpty').querySelector('strong').textContent = t('noStudents');
}

function handleStudentAction(event) {
  const button = event.target.closest('[data-student-action]');
  if (!button) return;
  const student = state.students.find(s => s.id === button.dataset.studentId);
  if (!student) return;
  const action = button.dataset.studentAction;
  if (action === 'edit') {
    state.editingId = student.id;
    const form = $('#studentForm');
    ['firstName','fatherName','grandfatherName','motherName','phone','department','batch','code'].forEach(key => { form.elements[key].value = student[key] || ''; });
    $('#studentFormPanel').classList.remove('hidden');
    $('#studentFormPanel').querySelector('h2').textContent = t('editTitle');
    $('#studentFormPanel').scrollIntoView({behavior:'smooth', block:'start'});
    form.elements.firstName.focus();
    return;
  }
  if (action === 'withdraw') {
    student.status = 'Withdrawn';
    renderAll();
    showToast(t('studentWithdrawn'));
    return;
  }
  if (action === 'restore') {
    student.status = 'Active';
    renderAll();
    showToast(t('studentRestored'));
    return;
  }
  if (action === 'delete') {
    if (!window.confirm(t('deleteConfirm'))) return;
    state.students = state.students.filter(s => s.id !== student.id);
    Object.keys(state.attendance).forEach(key => { if (key.endsWith(`:${student.id}`)) delete state.attendance[key]; });
    renderAll();
    showToast(t('studentDeleted'));
  }
}

function renderRecentStudents() {
  const list = [...state.students].slice(-5).reverse();
  $('#recentStudentsBody').innerHTML = list.map(s => `<tr><td><div class="student-cell"><div class="student-avatar">${escapeHtml(initials(s))}</div><div><div class="student-name">${escapeHtml(fullName(s))}</div><div class="student-sub">${escapeHtml(s.phone || '—')}</div></div></div></td><td>${escapeHtml(s.code)}</td><td>${escapeHtml(s.department)}</td><td><span class="status-pill status-active">${escapeHtml(s.status || 'Active')}</span></td></tr>`).join('');
  $('#recentEmpty').classList.toggle('hidden', list.length > 0);
}
function renderAttendance() {
  const tbody = $('#attendanceTableBody');
  tbody.innerHTML = state.students.filter(s => s.status !== 'Withdrawn').map(s => {
    const key = `${$('#attendanceDate').value || localDateString()}:${s.id}`;
    const value = state.attendance[key] || '';
    const options = [['','—'],['present',t('present')],['absent',t('absent')],['permission',t('permission')]];
    return `<tr><td><div class="student-cell"><div class="student-avatar">${escapeHtml(initials(s))}</div><div class="student-name">${escapeHtml(fullName(s))}</div></div></td><td>${escapeHtml(s.code)}</td><td><select class="attendance-select" data-attendance-id="${escapeHtml(s.id)}" aria-label="${escapeHtml(t('attendanceStatus'))}">${options.map(([v,l]) => `<option value="${v}" ${value===v?'selected':''}>${escapeHtml(l)}</option>`).join('')}</select></td></tr>`;
  }).join('');
  $('#attendanceEmpty').classList.toggle('hidden', state.students.some(s => s.status !== 'Withdrawn'));
}
function openStudentForm() {
  state.editingId = null;
  $('#studentFormPanel').classList.remove('hidden');
  $('#studentFormPanel').querySelector('h2').textContent = t('newStudent');
  $('#studentFormPanel').scrollIntoView({behavior:'smooth', block:'start'});
  $('#studentForm').elements.firstName.focus();
}
function closeStudentForm() { $('#studentFormPanel').classList.add('hidden'); $('#studentForm').reset(); state.pendingStudent = null; state.editingId = null; $('#studentFormPanel').querySelector('h2').textContent = t('newStudent'); $('#confirmModal').classList.add('hidden'); }
function nextCode() {
  const numbers = state.students.map(s => Number((s.code.match(/(\d+)$/) || [])[1])).filter(Number.isFinite);
  return `STU-${String(Math.max(0, ...numbers) + 1).padStart(4, '0')}`;
}
function reviewStudent(student) {
  state.pendingStudent = student;
  const fields = [
    [t('firstName'), student.firstName], [t('fatherName'), student.fatherName],
    [t('grandfatherName'), student.grandfatherName || '—'], [t('motherName'), student.motherName || '—'],
    [t('phone'), student.phone || '—'], [t('department'), student.department],
    [t('batch'), student.batch], [t('studentCode'), student.code]
  ];
  $('#reviewGrid').innerHTML = fields.map(([label, value]) => `<div class="review-field"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
  $('#confirmModal').classList.remove('hidden');
}
function setLanguage(lang) {
  state.language = lang === 'am' ? 'am' : 'en';
  renderTranslations();
}
function init() {
  $('#todayLabel').textContent = new Intl.DateTimeFormat('en-GB', {dateStyle:'medium'}).format(new Date());
  $('#attendanceDate').value = localDateString();
  $$('.nav-item').forEach(b => b.addEventListener('click', () => goToPage(b.dataset.page)));
  $$('[data-go]').forEach(b => b.addEventListener('click', () => goToPage(b.dataset.go)));
  $('#menuButton').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
  $('#languageSelect').addEventListener('change', e => setLanguage(e.target.value));
  $('#settingsLanguage').addEventListener('change', e => setLanguage(e.target.value));
  $('#showStudentForm').addEventListener('click', openStudentForm);
  $('#closeStudentForm').addEventListener('click', closeStudentForm);
  $('#cancelStudentForm').addEventListener('click', closeStudentForm);
  $('#studentSearch').addEventListener('input', renderStudents);
  $('#studentsTableBody').addEventListener('click', handleStudentAction);
  $('#attendanceDate').addEventListener('change', renderAll);
  $('#attendanceTableBody').addEventListener('change', e => {
    const id = e.target.dataset.attendanceId; if (!id) return;
    const key = `${$('#attendanceDate').value}:${id}`;
    if (e.target.value) state.attendance[key] = e.target.value; else delete state.attendance[key];
    renderAll();
  });
  $('#markAllPresent').addEventListener('click', () => {
    const date = $('#attendanceDate').value || localDateString();
    state.students.forEach(s => state.attendance[`${date}:${s.id}`] = 'present');
    renderAll(); showToast(state.language === 'am' ? 'ሁሉም ተማሪዎች ተገኝተዋል ተብለው ተመዝግበዋል።' : 'All students marked present in this demo.');
  });
  $('#studentForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const student = {
      id: state.editingId || ((typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : `s-${Date.now()}-${Math.random().toString(16).slice(2)}`),
      firstName: String(f.get('firstName') || '').trim(),
      fatherName: String(f.get('fatherName') || '').trim(),
      grandfatherName: String(f.get('grandfatherName') || '').trim(),
      motherName: String(f.get('motherName') || '').trim(),
      phone: String(f.get('phone') || '').trim(),
      department: String(f.get('department') || '').trim(),
      batch: String(f.get('batch') || '').trim(),
      code: String(f.get('code') || '').trim() || nextCode(),
      status: state.editingId ? (state.students.find(s => s.id === state.editingId)?.status || 'Active') : 'Active'
    };
    if (!student.firstName || !student.fatherName || !student.department || !student.batch) { showToast(t('needName')); return; }
    if (state.students.some(s => s.id !== student.id && s.code.toLowerCase() === student.code.toLowerCase())) { showToast(t('duplicateCode')); return; }
    reviewStudent(student);
  });
  $('#editReview').addEventListener('click', () => $('#confirmModal').classList.add('hidden'));
  $('#confirmSave').addEventListener('click', () => {
    if (!state.pendingStudent) return;
    const editing = Boolean(state.editingId);
    if (editing) { state.students = state.students.map(s => s.id === state.editingId ? state.pendingStudent : s); }
    else state.students.push(state.pendingStudent);
    state.pendingStudent = null;
    state.editingId = null;
    $('#confirmModal').classList.add('hidden');
    $('#studentForm').reset();
    $('#studentFormPanel').classList.add('hidden');
    renderAll();
    showToast(editing ? t('studentUpdated') : t('studentSaved'));
    goToPage('register');
  });
  $('#dismissBanner').addEventListener('click', () => $('.notice-banner').classList.add('hidden'));
  $('#refreshButton').addEventListener('click', () => { renderAll(); showToast(state.language === 'am' ? 'መረጃው ታድሷል።' : 'Demo view refreshed.'); });
  $('#notificationButton').addEventListener('click', () => showToast(t('profileDemo')));
  $('#profileButton').addEventListener('click', () => showToast(t('profileDemo')));
  renderTranslations();
}
document.addEventListener('DOMContentLoaded', init);
