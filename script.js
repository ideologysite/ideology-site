const data={
 liberalism:{title:"Либерализм",tag:"ПОЛИТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"○",lead:"Широкое направление политической мысли, ставящее личные права и свободы человека в центр общественной жизни.",ideas:"права личности; гражданские свободы; ограничение власти",context:"особенно развивался в Европе и Америке с XVII–XVIII веков",accent:"#315aa8",bg:"#eef3fb",principles:[["Свободы","Защита индивидуальных прав и возможностей человека."],["Власть","Ограничение произвольной власти и защита прав."],["Общество","Плюрализм, институты и равенство перед законом."],["Экономика","В разных школах — от рыночных до более социально ориентированных подходов."]]},
 socialism:{title:"Социализм",tag:"ЭКОНОМИЧЕСКАЯ И ПОЛИТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"●",lead:"Набор идей, связанных с уменьшением экономического неравенства и более коллективным контролем над экономикой.",ideas:"социальное равенство; коллективные формы собственности; социальная защита",context:"разные социалистические школы активно развивались в XIX–XX веках",accent:"#9a2929",bg:"#f8eeee",principles:[["Равенство","Снижение экономического и социального неравенства."],["Собственность","Разные формы общественной, кооперативной или государственной собственности."],["Труд","Внимание к условиям труда и распределению результатов."],["Государство","Подходы сильно различаются от демократических до централизованных."]]},
 conservatism:{title:"Консерватизм",tag:"ПОЛИТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"□",lead:"Направление, подчёркивающее ценность традиций, устойчивых институтов и осторожных изменений общества.",ideas:"традиции; порядок; постепенные изменения",context:"оформился как заметное направление европейской политики в конце XVIII–XIX веках",accent:"#526b45",bg:"#f0f4ee",principles:[["Традиции","Существующие институты и нормы рассматриваются как важный источник стабильности."],["Порядок","Высоко ценится устойчивость и предсказуемость общественной жизни."],["Изменения","Предпочтение постепенным реформам вместо резких переломов."],["Институты","Значение семьи, права, государства и других социальных институтов зависит от школы."]]},
 anarchism:{title:"Анархизм",tag:"ПОЛИТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"△",lead:"Разные направления мысли, критикующие принудительную иерархическую власть и представляющие общество через добровольное самоорганизованное сотрудничество.",ideas:"самоуправление; добровольные объединения; критика принуждения",context:"как самостоятельное движение особенно развивался в XIX веке",accent:"#75548e",bg:"#f5f0f8",principles:[["Власть","Критика принудительных иерархий и концентрации власти."],["Самоуправление","Акцент на добровольных объединениях и локальной организации."],["Свобода","Высокая ценность автономии человека и сообщества."],["Экономика","Школы анархизма предлагают разные модели — от коллективных до взаимопомощных."]]},
 nationalism:{title:"Национализм",tag:"ПОЛИТИЧЕСКАЯ ИДЕЯ",symbol:"✦",lead:"Идея, придающая особое значение нации и её политическому, культурному или государственному самоопределению.",ideas:"национальная идентичность; самоопределение; государственность",context:"разные формы национализма особенно усилились в Европе в XIX–XX веках",accent:"#8a6333",bg:"#f7f2ea",principles:[["Нация","Нация рассматривается как важный субъект политической и культурной жизни."],["Идентичность","Значение языка, культуры, памяти и общих символов зависит от формы национализма."],["Самоопределение","Некоторые формы делают акцент на праве народа на политическое самоопределение."],["Границы","Отношение к другим народам и меньшинствам сильно зависит от конкретного движения."]]},
 fascism:{title:"Фашизм",tag:"АВТОРИТАРНАЯ ИДЕОЛОГИЧЕСКАЯ ТРАДИЦИЯ",symbol:"◆",lead:"Ультранационалистическое авторитарное направление, исторически связанное с итальянским фашизмом и идеей сильного государства, подчиняющего общество коллективной национальной цели.",ideas:"ультранационализм; авторитаризм; культ государства и лидера",context:"термин прежде всего связан с Италией Муссолини 1920–1940-х годов; существовали и другие движения, называвшие себя фашистскими",accent:"#8f1b16",bg:"#f8eded",warning:"Важно: фашизм и нацизм тесно связаны исторически, но это не полностью одинаковые понятия.",principles:[["Государство","Сильная централизованная власть и подчинение политической жизни государству."],["Лидер","Для исторического фашизма характерен культ лидера и концентрация власти."],["Нация","Национальное единство ставится выше политического плюрализма."],["Общество","Оппозиция и независимые организации подавляются или ограничиваются."]]},
 nazism:{title:"Нацизм",tag:"ИСТОРИЧЕСКАЯ ИДЕОЛОГИЯ",symbol:"✖",lead:"Идеология немецкой Национал-социалистической рабочей партии, сочетавшая диктатуру, агрессивный расовый национализм, антисемитизм и идею расовой иерархии.",ideas:"расизм; антисемитизм; диктатура; экспансионизм",context:"господствовал в Германии в 1933–1945 годах и был связан с массовыми репрессиями, Холокостом и Второй мировой войной",accent:"#7d1010",bg:"#f7e8e8",warning:"Нацизм — исторически конкретная идеология НСДАП. Его нельзя использовать как простое название для любого фашизма.",principles:[["Расизм","Расовая иерархия была фундаментальной частью идеологии."],["Антисемитизм","Антисемитизм был центральным элементом нацистской политики и пропаганды."],["Диктатура","Однопартийная диктатура подавляла политическую оппозицию и гражданские свободы."],["Экспансия","Идеология оправдывала территориальную экспансию и насилие."]]},
 communism:{title:"Коммунизм",tag:"ПОЛИТИКО-ЭКОНОМИЧЕСКАЯ ТРАДИЦИЯ",symbol:"＋",lead:"Совокупность теорий, стремящихся к бесклассовому обществу и общественной собственности на основные средства производства; существуют разные интерпретации.",ideas:"бесклассовость; общественная собственность; критика капитализма",context:"современная коммунистическая традиция во многом выросла из идей Маркса и Энгельса XIX века",accent:"#a3322f",bg:"#f9eeee",principles:[["Классы","Теории стремятся к обществу без классового господства."],["Собственность","Основные средства производства рассматриваются как общественная собственность."],["Экономика","Капитализм подвергается критике с позиций эксплуатации и неравенства."],["Пути","Коммунистические школы по-разному понимают переход к целевому обществу и роль государства."]]}
,
 libertarianism:{title:"Либертарианство",tag:"ПОЛИТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"◇",lead:"Направление, ставящее индивидуальную свободу и ограничение принудительной власти в центр политической жизни.",ideas:"индивидуальная свобода; ограниченное государство; добровольные отношения",context:"разные современные школы сформировались в XX веке на основе более ранних либеральных идей",accent:"#2d7c8a",bg:"#edf7f8",principles:[["Свобода","Максимальное расширение личной автономии при соблюдении прав других людей."],["Государство","Предпочтение ограниченной роли государства и строгих ограничений на принуждение."],["Собственность","Частная собственность часто рассматривается как важная часть экономической свободы."],["Общество","Большая роль добровольных договорённостей и объединений."]]},
 socialdemocracy:{title:"Социал-демократия",tag:"ДЕМОКРАТИЧЕСКАЯ ПОЛИТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"◈",lead:"Направление, стремившееся сочетать демократическую систему, рыночную экономику и развитую социальную защиту.",ideas:"демократия; социальное государство; перераспределение; реформы",context:"особенно развивалась в Европе в XX веке и после Второй мировой войны",accent:"#c05a4e",bg:"#fbf0ed",principles:[["Демократия","Изменения предполагаются через выборы, парламент и законные институты."],["Экономика","Рынок обычно сохраняется, но регулируется государством."],["Социальная защита","Большое значение имеют доступные услуги, пенсии и социальное страхование."],["Изменения","Предпочтение постепенным реформам вместо революционного перелома."]]},
 monarchism:{title:"Монархизм",tag:"ПОЛИТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"♜",lead:"Идеи, поддерживающие монархию как форму государственного устройства; конкретные варианты монархизма сильно различаются.",ideas:"монархия; династическая преемственность; государственные традиции",context:"монархические идеи существовали задолго до современных политических идеологий и имеют разные современные формы",accent:"#8a6b2e",bg:"#f8f4e8",principles:[["Глава государства","Монарх занимает особое положение в системе власти, но его полномочия могут быть разными."],["Преемственность","Важной темой может быть наследование власти и стабильность института."],["Конституция","В конституционных монархиях полномочия монарха ограничены законом."],["Традиция","Монархическая символика часто связывается с исторической преемственностью."]]},
 republicanism:{title:"Республиканизм",tag:"ПОЛИТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"⬡",lead:"Традиция, подчёркивающая гражданское участие, общественное благо и отсутствие наследственной верховной власти.",ideas:"гражданство; общественное благо; верховенство закона; участие",context:"имеет античные корни и развивался в разных формах в Европе и Америке",accent:"#356a92",bg:"#eef4f8",principles:[["Гражданство","Гражданин рассматривается как активный участник политической жизни."],["Закон","Верховенство закона и неподчинённость власти одному человеку — важные темы."],["Общее благо","Политика связывается не только с частными интересами, но и с общим благом."],["Участие","Особое значение могут иметь выборы, общественные обязанности и контроль власти."]]},
 environmentalism:{title:"Экологизм",tag:"ОБЩЕСТВЕННО-ПОЛИТИЧЕСКОЕ НАПРАВЛЕНИЕ",symbol:"≈",lead:"Направление, ставящее защиту окружающей среды, устойчивое развитие и долгосрочные экологические риски в центр политики.",ideas:"экология; устойчивость; климатическая политика; охрана природы",context:"современное экологическое движение особенно усилилось во второй половине XX века",accent:"#477657",bg:"#eff6f0",principles:[["Природа","Сохранение экосистем и биоразнообразия рассматривается как важная общественная задача."],["Будущее","Учитываются долгосрочные последствия решений для следующих поколений."],["Экономика","Экономическая политика может включать ограничения загрязнения и переход к более устойчивым технологиям."],["Политика","Экологические темы могут сочетаться с либеральными, социалистическими и другими подходами."]]},
 maoisim:{title:"Маоизм",tag:"КОММУНИСТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"◉",lead:"Марксистско-ленинское направление, связанное с идеями Мао Цзэдуна и китайской революционной традицией, в которой большое значение придавалось крестьянству и революционной мобилизации.",ideas:"революция; крестьянство; партийное руководство; классовая борьба",context:"сформировался в Китае в первой половине XX века и оказал влияние на ряд революционных движений",accent:"#a32323",bg:"#f9eded",warning:"Маоизм относится к историческим и современным коммунистическим течениям; конкретные движения с этим названием сильно различались.",principles:[["Революция","Радикальное преобразование общества рассматривается как результат революционной борьбы."],["Крестьянство","В классическом китайском варианте особая роль придавалась крестьянским массам."],["Партия","Авангардная партия выступает организующим центром политической системы."],["Классы","Концепция непрерывной классовой борьбы занимала важное место в историческом маоизме."]]},
 trotskyism:{title:"Троцкизм",tag:"МАРКСИСТСКАЯ ТРАДИЦИЯ",symbol:"✦",lead:"Течение марксистской мысли, связанное прежде всего с Леоном Троцким и критикой сталинской модели развития СССР.",ideas:"перманентная революция; международизм; рабочая демократия",context:"оформился в СССР в 1920–1930-х годах как оппозиционное направление внутри большевистского движения",accent:"#8d3d3d",bg:"#f8efef",principles:[["Революция","Концепция перманентной революции связывает развитие революционных процессов между странами."],["Международизм","Особое внимание уделяется международному характеру рабочего движения."],["Демократия","Троцкистская традиция критиковала бюрократизацию и однопартийную концентрацию власти в СССР."],["Экономика","Исходит из марксистской критики капитализма и идеи общественной собственности."]]},
 democratic_socialism:{title:"Демократический социализм",tag:"СОЦИАЛИСТИЧЕСКАЯ ТРАДИЦИЯ",symbol:"◍",lead:"Направление, связывающее социалистические цели с политической демократией, правами человека и участием граждан.",ideas:"демократия; социальное равенство; коллективные формы собственности; права",context:"термин используется разными движениями XX–XXI веков и может иметь неодинаковые значения",accent:"#6f4f91",bg:"#f5f1f8",principles:[["Демократия","Политическая система должна сохранять конкурентные выборы и гражданские права."],["Равенство","Снижение экономического и социального неравенства — важная цель."],["Экономика","Возможны кооперативные, общественные и смешанные формы собственности."],["Реформы","Часть демократических социалистов делает ставку на постепенные изменения через институты."]]}};

const keys=Object.keys(data);
const root=document.documentElement;
const cards=document.querySelectorAll('.ideology-card');
const mapSection=document.querySelector('.map-section');
const statusText=document.getElementById('statusText');
const placeholder=document.getElementById('placeholder');
const content=document.getElementById('panelContent');
const fields={tag:document.getElementById('panelTag'),number:document.getElementById('panelNumber'),title:document.getElementById('panelTitle'),symbol:document.getElementById('panelSymbol'),lead:document.getElementById('panelLead'),ideas:document.getElementById('panelIdeas'),context:document.getElementById('panelContext'),warning:document.getElementById('panelWarning')};
let activeId='';
const learned=new Set();

function resetTheme(){root.style.setProperty('--bg','#080a10');root.style.setProperty('--surface','rgba(16,20,31,.78)');root.style.setProperty('--surface-strong','#10141f');root.style.setProperty('--text','#f4f6fb');root.style.setProperty('--muted','#8f98aa');root.style.setProperty('--line','rgba(180,195,225,.12)');root.style.setProperty('--line-strong','rgba(180,195,225,.24)');root.style.setProperty('--accent','#78a7ff');root.style.setProperty('--accent-soft','#1b2435')}
function activate(id,card=null,scroll=false){const item=data[id];if(!item)return;activeId=id;cards.forEach(c=>c.classList.toggle('active',c===card));root.style.setProperty('--bg',`color-mix(in srgb, #070910 84%, ${item.accent} 16%)`);root.style.setProperty('--surface','rgba(12,16,26,.94)');root.style.setProperty('--text','#f4f6fb');root.style.setProperty('--muted','#99a2b4');root.style.setProperty('--line','rgba(180,195,225,.14)');root.style.setProperty('--line-strong','rgba(180,195,225,.24)');root.style.setProperty('--accent',item.accent);fields.tag.textContent=item.tag;fields.number.textContent=card?card.querySelector('.card-number').textContent:String(keys.indexOf(id)+1).padStart(2,'0');fields.title.textContent=item.title;fields.symbol.textContent=item.symbol;fields.symbol.style.color=item.accent;fields.lead.textContent=item.lead;fields.ideas.textContent=item.ideas;fields.context.textContent=item.context;statusText.textContent='Активно: '+item.title;fields.warning.textContent=item.warning||'';fields.warning.classList.toggle('hidden',!item.warning);placeholder.classList.add('hidden');content.classList.remove('hidden');learned.add(id);updateProgress();updateDeepDive(item);if(document.getElementById('microscopeSelect'))syncMicroscopePicker(id);updateAxis();if(scroll)document.getElementById('details').scrollIntoView({behavior:'smooth',block:'start'})}
function clearSelection(){activeId='';cards.forEach(c=>c.classList.remove('active'));resetTheme();placeholder.classList.remove('hidden');content.classList.add('hidden');statusText.textContent='Наведи курсор на карточку'}

cards.forEach(card=>{const id=card.dataset.id;card.addEventListener('mouseenter',()=>activate(id,card));card.addEventListener('focus',()=>activate(id,card));card.addEventListener('click',()=>{activate(id,card);openModal(id)});});
mapSection.addEventListener('mouseleave',()=>{if(!document.querySelector('.modal:not(.hidden)'))clearSelection()});

document.getElementById('detailButton').addEventListener('click',()=>activeId&&openModal(activeId));

function updateProgress(){const count=learned.size;const percent=Math.round(count/keys.length*100);document.getElementById('progressPercent').textContent=percent+'%';document.getElementById('progressBar').style.width=percent+'%';document.getElementById('progressText').textContent=count?`Изучено ${count} из ${keys.length} идеологий.`:'Изучи первую идеологию, чтобы начать.'}
function updateDeepDive(item){document.getElementById('deepTitle').textContent=item.title;document.getElementById('deepText').textContent=item.lead;const grid=document.getElementById('principlesGrid');grid.innerHTML=item.principles.map(([a,b])=>`<div class="principle"><strong>${a}</strong><span>${b}</span></div>`).join('')}
/* Microscope picker: choose ideology without scrolling back to the map. */
const microscopeSelect=document.getElementById('microscopeSelect');
const microscopeRange=document.getElementById('microscopeRange');
const microscopeIndex=document.getElementById('microscopeIndex');
const micPrev=document.getElementById('micPrev');
const micNext=document.getElementById('micNext');

keys.forEach((k,i)=>{
  const opt=document.createElement('option');
  opt.value=k;
  opt.textContent=`${String(i+1).padStart(2,'0')} · ${data[k].title}`;
  microscopeSelect.appendChild(opt);
});

function syncMicroscopePicker(id=activeId || keys[0]){
  const idx=Math.max(0,keys.indexOf(id));
  const chosen=keys[idx];
  microscopeSelect.value=chosen;
  microscopeRange.value=String(idx);
  microscopeIndex.textContent=`${String(idx+1).padStart(2,'0')} / ${String(keys.length).padStart(2,'0')}`;
}

function chooseFromMicroscope(id){
  const card=[...cards].find(c=>c.dataset.id===id) || null;
  activate(id,card,false);
  syncMicroscopePicker(id);
}

microscopeSelect.addEventListener('change',()=>chooseFromMicroscope(microscopeSelect.value));
microscopeRange.addEventListener('input',()=>chooseFromMicroscope(keys[Number(microscopeRange.value)]));
micPrev.addEventListener('click',()=>{
  const idx=(keys.indexOf(activeId || keys[0])-1+keys.length)%keys.length;
  chooseFromMicroscope(keys[idx]);
});
micNext.addEventListener('click',()=>{
  const idx=(keys.indexOf(activeId || keys[0])+1)%keys.length;
  chooseFromMicroscope(keys[idx]);
});

syncMicroscopePicker(keys[0]);


const modal=document.getElementById('detailModal');
function openModal(id){const item=data[id];if(!item)return;document.getElementById('modalTag').textContent=item.tag;document.getElementById('modalTitle').textContent=item.title;document.getElementById('modalLead').textContent=item.lead;document.getElementById('modalIdeas').textContent=item.ideas;document.getElementById('modalContext').textContent=item.context;const warning=document.getElementById('modalWarning');warning.textContent=item.warning||'Здесь нет отдельного предупреждения: читайте описание как нейтральную справку, а не как рекомендацию.';modal.classList.remove('hidden');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.add('hidden');document.body.style.overflow=''}
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));

document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!modal.classList.contains('hidden')){closeModal();return}clearSelection()}});

const compareA=document.getElementById('compareA');const compareB=document.getElementById('compareB');
keys.forEach(k=>{[compareA,compareB].forEach((sel,i)=>{const opt=document.createElement('option');opt.value=k;opt.textContent=data[k].title;sel.appendChild(opt)});});compareA.value='fascism';compareB.value='nazism';
const compareFields={authority:{name:'Власть'},nation:{name:'Нация'},race:{name:'Расовая теория'},economy:{name:'Экономический подход'},history:{name:'Исторический центр'}};
const compareValues={
 liberalism:{authority:'Ограниченная власть и защита прав',nation:'Не является единственным центром политики',race:'Не является определяющей частью',economy:'Часто рыночные подходы, но школы различаются',history:'Европа и Северная Америка, XVII–XIX вв.'},
 socialism:{authority:'Зависит от школы и политической системы',nation:'Не является обязательным ядром',race:'Не является определяющим принципом',economy:'Большая роль общественных/коллективных форм собственности',history:'Европа, XIX–XX вв.'},
 conservatism:{authority:'Значение устойчивых институтов и порядка',nation:'Может быть важна, но школы различаются',race:'Не является обязательным принципом',economy:'От свободного рынка до социально-консервативных моделей',history:'Европа, конец XVIII–XIX вв.'},
 anarchism:{authority:'Критика принудительной иерархической власти',nation:'Не является универсальным ядром',race:'Не является определяющей частью',economy:'Разные коллективные и взаимопомощные модели',history:'Европа и другие регионы, XIX–XX вв.'},
 nationalism:{authority:'Зависит от формы движения',nation:'Национальная идентичность — центральная тема',race:'В некоторых формах может появляться, но не определяет весь национализм',economy:'Не задаёт одной обязательной модели',history:'Особенно заметен в Европе с XIX в.'},
 fascism:{authority:'Сильная централизованная авторитарная власть',nation:'Ультранационализм и политическое единство',race:'Не обязательна для определения всех фашистских движений',economy:'Подчинение экономики политическим целям государства различными способами',history:'Прежде всего Италия Муссолини, 1920–1940-е'},
 nazism:{authority:'Однопартийная диктатура и концентрация власти',nation:'Агрессивный расовый национализм',race:'Центральный элемент идеологии',economy:'Экономика подчинялась государственным и военным целям при сохранении частной собственности в значительной части экономики',history:'Германия, 1933–1945'},
 communism:{authority:'Школы различаются; исторические режимы часто были централизованными',nation:'Теории обычно ставят классовый вопрос выше национального',race:'Не является определяющим принципом',economy:'Общественная собственность на основные средства производства',history:'Европа и позже многие другие регионы, XIX–XX вв.'},
 libertarianism:{authority:'Роль государства должна быть сильно ограничена',nation:'Не является обязательным центром политики',race:'Не является определяющим принципом',economy:'Сильный акцент на добровольном обмене и частной собственности',history:'Современные школы, особенно XX век'},
 socialdemocracy:{authority:'Демократические институты и социальное государство',nation:'Не является обязательным центром',race:'Не является определяющим принципом',economy:'Рынок с регулированием и перераспределением',history:'Европа, XX век'},
 monarchism:{authority:'Главой государства является монарх',nation:'Зависит от конкретной монархической традиции',race:'Не является определяющим принципом',economy:'Не задаёт одной обязательной модели',history:'Существовал в разных эпохах и формах'},
 republicanism:{authority:'Власть должна быть публичной и подотчётной гражданам',nation:'Зависит от конкретной республиканской традиции',race:'Не является определяющим принципом',economy:'Не задаёт единой экономической модели',history:'Античные корни; современные формы развивались позже'},
 environmentalism:{authority:'Зависит от конкретного экологического движения',nation:'Не является обязательным центром',race:'Не является определяющим принципом',economy:'Акцент на устойчивости и экологических ограничениях',history:'Особенно заметен с второй половины XX века'},
 maoisim:{authority:'Сильная роль партийного руководства',nation:'Революционный интернационализм сочетался с китайским национальным контекстом',race:'Не является определяющим принципом',economy:'Общественная собственность и централизованное планирование в историческом варианте',history:'Китай, XX век'},
 trotskyism:{authority:'Критика бюрократической концентрации власти',nation:'Акцент на международном рабочем движении',race:'Не является определяющим принципом',economy:'Общественная собственность и планирование',history:'СССР и международные движения, XX век'},
 democratic_socialism:{authority:'Демократические институты и гражданские права',nation:'Не является обязательным центром',race:'Не является определяющим принципом',economy:'Социалистические или смешанные формы собственности',history:'Разные движения XX–XXI веков'}
};
function renderCompare(){let a=compareA.value,b=compareB.value;if(a===b){b=keys.find(k=>k!==a);compareB.value=b}const rows=Object.keys(compareFields).map(k=>`<tr><th>${compareFields[k].name}</th><td>${compareValues[a][k]}</td><td>${compareValues[b][k]}</td></tr>`).join('');document.getElementById('compareBoard').innerHTML=`<table class="compare-table"><thead><tr><th>Параметр</th><th>${data[a].title}</th><th>${data[b].title}</th></tr></thead><tbody>${rows}</tbody></table><div class="compare-note">Сравнение упрощает сложные исторические школы. Одна и та же идея может встречаться в разных движениях, а внутри каждой традиции существуют споры и разные варианты.</div>`}
compareA.addEventListener('change',renderCompare);compareB.addEventListener('change',renderCompare);renderCompare();

const axisPositions={liberalism:[72,28],socialism:[38,60],conservatism:[64,36],anarchism:[18,22],nationalism:[70,52],fascism:[86,70],nazism:[90,86],communism:[48,76],libertarianism:[20,32],socialdemocracy:[55,58],monarchism:[72,44],republicanism:[58,35],environmentalism:[44,48],maoisim:[72,78],trotskyism:[40,72],democratic_socialism:[46,66]};
function updateAxis(){const wrap=document.getElementById('axisPoints');wrap.innerHTML=keys.map(k=>{const [x,y]=axisPositions[k];return `<button class="axis-point" style="left:${x}%;top:${y}%" data-axis-id="${k}" aria-label="${data[k].title}"><span>${data[k].title}</span></button>`}).join('');wrap.querySelectorAll('.axis-point').forEach(p=>p.addEventListener('mouseenter',()=>{const id=p.dataset.axisId;const card=[...cards].find(c=>c.dataset.id===id);activate(id,card)}));wrap.insertAdjacentHTML('beforeend','<div class="axis-caption axis-left">больше акцента на индивидуальной автономии / децентрализации</div><div class="axis-caption axis-right">больше акцента на централизованной координации / порядке</div>')}
updateAxis();

const timelineData=[
 {y:1776,t:'Либеральная традиция',d:'Американская Декларация независимости стала одним из известных исторических текстов о правах и свободах.'},
 {y:1848,t:'Коммунистическая и социалистическая мысль',d:'Публикация «Манифеста Коммунистической партии» стала важным событием в истории марксизма.'},
 {y:1870,t:'Национализм',d:'В Европе усиливаются национальные движения и процессы национального государственного строительства.'},
 {y:1919,t:'Фашизм',d:'После Первой мировой войны в Италии оформляется фашистское движение, позднее пришедшее к власти.'},
 {y:1933,t:'Нацизм',d:'Нацистская партия устанавливает диктатуру в Германии; начинается период массовых репрессий.'},
 {y:1945,t:'После Второй мировой',d:'Падение нацистского режима; дальнейшее развитие и переосмысление политических идеологий.'},
 {y:1991,t:'Конец СССР',d:'Распад Советского Союза стал одним из важнейших событий для истории коммунистических режимов XX века.'}
];
const range=document.getElementById('timelineRange');function renderTimeline(){const y=Number(range.value);document.getElementById('timelineYear').textContent=y;const nearby=timelineData.filter(e=>Math.abs(e.y-y)<=35).sort((a,b)=>Math.abs(a.y-y)-Math.abs(b.y-y)).slice(0,3);document.getElementById('timelineEvents').innerHTML=(nearby.length?nearby:[{y:y,t:'Исторический интервал',d:'В выбранный год нет события, которое мы показываем в этой версии линии.'}]).map(e=>`<div class="timeline-event"><b>${e.y} · ${e.t}</b><span>${e.d}</span></div>`).join('')};range.addEventListener('input',renderTimeline);renderTimeline();

const myths=[
 {q:'Фашизм и нацизм — полностью одно и то же.',a:'Миф',e:'Они исторически связаны и имеют общие черты, но нацизм — конкретная идеология НСДАП с центральной ролью расовой теории и антисемитизма.'},
 {q:'У любой формы национализма обязательно есть одна и та же экономическая модель.',a:'Миф',e:'Национализм прежде всего касается нации и политической идентичности; экономические взгляды разных националистических движений могут сильно отличаться.'},
 {q:'Левые и правые — это достаточно грубая схема.',a:'Факт',e:'Политическую мысль нельзя идеально разместить на одной оси: экономические, социальные и культурные взгляды могут сочетаться по-разному.'},
 {q:'Коммунизм, социализм и марксизм всегда означают одно и то же.',a:'Миф',e:'Термины связаны исторически, но обозначают разные традиции, теории и политические программы.'}
];
function renderMyths(){
  const grid=document.getElementById('mythGrid');
  grid.innerHTML=myths.map((m,i)=>`<article class="myth-card" data-myth="${i}"><div class="myth-label">МИФ / ФАКТ ${String(i+1).padStart(2,'0')}</div><h3>${m.q}</h3><div class="myth-actions"><button data-answer="Миф">МИФ</button><button data-answer="Факт">ФАКТ</button></div><div class="myth-result" id="mythResult${i}">Выбери ответ.</div></article>`).join('');
  document.querySelectorAll('.myth-card').forEach(card=>{
    const i=Number(card.dataset.myth);
    card.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{
      const r=document.getElementById('mythResult'+i);
      const correct=btn.dataset.answer===myths[i].a;
      r.className='myth-result '+(correct?'correct':'wrong');
      r.innerHTML=`<strong>${correct?'✓ Правильно':'✕ Не совсем'}</strong><br>${myths[i].e}`;
    }));
  });
}
renderMyths();

const scenarioOptions=[
 ['Личные свободы','Важнее максимально защитить выбор человека и ограничить произвольное вмешательство власти.'],
 ['Социальное равенство','В центре внимания — уменьшение неравенства и более коллективная организация экономики.'],
 ['Национальный приоритет','В центре решения — интересы нации и политическое единство государства.']
];document.getElementById('scenarioOptions').innerHTML=scenarioOptions.map((x,i)=>`<button class="scenario-option" data-scenario="${i}"><strong>${x[0]}</strong><span>${x[1]}</span></button>`).join('');document.querySelectorAll('.scenario-option').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.scenario-option').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const i=Number(btn.dataset.scenario);document.getElementById('scenarioResult').textContent='Это не «ответ на идеологию». Такой приоритет просто напоминает, какую ценность разные политические традиции могут ставить выше других в конкретной ситуации: '+scenarioOptions[i][1]}));

const quiz=[
 {q:'Как точнее всего описать нацизм?',o:['Любой вид национализма','Конкретную историческую идеологию НСДАП','Любую правую идеологию','Синоним консерватизма'],a:1,e:'Нацизм — исторически конкретная идеология НСДАП в Германии.'},
 {q:'Что обычно связывают с либеральной традицией?',o:['Защиту индивидуальных прав','Однопартийную диктатуру','Расовую иерархию','Отмену всех законов'],a:0,e:'Индивидуальные права и свободы — важная тема либеральной традиции.'},
 {q:'Почему одну ось «лево–право» нельзя считать полной картой идеологий?',o:['Потому что идеологий всего две','Потому что взгляды имеют несколько измерений','Потому что история не влияет на идеологии','Потому что экономика не связана с политикой'],a:1,e:'Экономические, социальные, культурные и институциональные взгляды могут сочетаться по-разному.'},
 {q:'Какой признак особенно центральен для нацистской идеологии?',o:['Расовая иерархия и антисемитизм','Свободный рынок','Ликвидация государства','Нейтральность к нации'],a:0,e:'Расизм и антисемитизм были центральными компонентами нацистской идеологии.'},
 {q:'Что важно помнить о социализме?',o:['Существует только один вариант','Все социалисты поддерживали одинаковую систему','Это широкая совокупность разных школ','Это только название экономики'],a:2,e:'Социализм включает разные течения и политические программы.'}
];
let quizIndex=0,quizScore=0,quizLocked=false;const qQuestion=document.getElementById('quizQuestion'),qOptions=document.getElementById('quizOptions'),qFeedback=document.getElementById('quizFeedback'),qNext=document.getElementById('quizNext');
function renderQuiz(){const q=quiz[quizIndex];quizLocked=false;document.getElementById('quizCounter').textContent=`Вопрос ${quizIndex+1} из ${quiz.length}`;document.getElementById('quizProgress').style.width=((quizIndex+1)/quiz.length*100)+'%';qQuestion.textContent=q.q;qFeedback.textContent='';qNext.classList.add('hidden');qOptions.innerHTML=q.o.map((x,i)=>`<button class="quiz-option" data-option="${i}">${x}</button>`).join('');qOptions.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>answerQuiz(Number(btn.dataset.option))))};
function answerQuiz(choice){if(quizLocked)return;quizLocked=true;const q=quiz[quizIndex];qOptions.querySelectorAll('button').forEach((btn,i)=>{btn.disabled=true;if(i===q.a)btn.classList.add('correct');if(i===choice&&choice!==q.a)btn.classList.add('incorrect')});if(choice===q.a){quizScore++;qFeedback.textContent='✓ Правильно. '+q.e}else qFeedback.textContent='✕ Неверно. '+q.e;qNext.textContent=quizIndex===quiz.length-1?'Показать результат →':'Следующий вопрос →';qNext.classList.remove('hidden')}
qNext.addEventListener('click',()=>{if(quizIndex===quiz.length-1){qQuestion.textContent=`Результат: ${quizScore} / ${quiz.length}`;qOptions.innerHTML='';qFeedback.textContent=quizScore>=4?'Отлично — ты уже хорошо различаешь базовые понятия.':'Хорошее начало — повтори карточки и попробуй ещё раз.';qNext.textContent='Пройти тест заново';qNext.onclick=()=>{quizIndex=0;quizScore=0;qNext.onclick=null;renderQuiz()}}else{quizIndex++;renderQuiz()}});renderQuiz();

/* Visual polish: pointer spotlight + scroll progress. Existing interactions stay untouched. */
(() => {
  const root = document.documentElement;
  let ticking = false;
  window.addEventListener('pointermove', (event) => {
    root.style.setProperty('--mx', `${(event.clientX / window.innerWidth) * 100}%`);
    root.style.setProperty('--my', `${(event.clientY / window.innerHeight) * 100}%`);
  }, { passive: true });
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    root.style.setProperty('--progress', `${Math.min(100, Math.max(0, pct))}%`);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
  }, { passive: true });
  updateProgress();
})();
