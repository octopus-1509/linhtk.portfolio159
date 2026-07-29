/* ===================================================
   WONDERLAND PORTFOLIO v3 — INTERACTIVE SCRIPT
   Trịnh Khánh Linh · Foreign Trade University
   Features: i18n, music, card cursor trail, chess falling,
   fireflies, mascot hover interaction, skill bars, lightbox
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* ==========================================
       1. TRANSLATIONS (EN + VI)
       ========================================== */
    const i18n = {
        en: {
            nav_home:"Home",nav_about:"About",nav_skills:"Skills",nav_projects:"Projects",
            nav_experience:"Experience",nav_achievements:"Achievements",nav_contact:"Contact",
            music_label:"Music",
            hero_chip:"\u2728 A Journey Through Wonderland",
            hero_role:"International Economics",hero_school:"Foreign Trade University (FTU)",
            hero_tagline:"Bridging global markets, economic research, and strategic vision \u2014 one curious step at a time.",
            btn_begin:"Begin Journey \u265F",btn_cv:"Download CV",scroll_hint:"Scroll to explore",
            about_chip:"Chapter I \u00B7 Enchanted Forest",about_h2:"About Me",
            about_quote:"Curiosity is the compass of economics.",
            about_p1:"I am Tr\u1ECBnh Kh\u00E1nh Linh, a 3rd-year undergraduate majoring in International Economics at Foreign Trade University (FTU), Hanoi. My academic journey is driven by a deep fascination with global trade dynamics, cross-border financial strategy, and market analysis.",
            about_p2:"Like exploring Wonderland, modern economics demands curiosity, analytical rigor, and the courage to venture beyond conventional perspectives.",
            stat_uni:"Foreign Trade University",stat_major:"International Economics",stat_loc:"Vietnam",
            edu_h3:"\u2733 Education",
            edu_ftu:"3rd-year Student \u00B7 Faculty of International Economics \u00B7 Major in International Economics.",
            edu_ctq_name:"Tuy\u00EAn Quang High School for the Gifted",
            edu_ctq:"Graduated with Distinction \u00B7 Literature Major (Class 34) \u00B7 National Excellent Student Team in Literature (2022\u20132023).",
            skills_chip:"Chapter II \u00B7 Hidden Magical Library",skills_h2:"Grimoire of Skills",
            sk_lang:"Language Proficiency",sk_econ:"Economic & Market Analysis",
            sk_econ_sub:"Forecasting \u00B7 Econometrics \u00B7 Data Viz",
            sk_biz:"Business Strategy",sk_biz_sub:"Trade Policy \u00B7 FDI \u00B7 Corporate Finance",
            sk_comm:"Communication & Soft Skills",sk_comm_sub:"CSKH \u00B7 Public Speaking \u00B7 Teamwork",
            sk_tech:"Software & Office Tools",sk_tech_sub:"MS Office \u00B7 SPSS \u00B7 R/Python basics",
            sk_research:"Research & Academic Writing",sk_research_sub:"Papers \u00B7 Literature Review \u00B7 Reports",
            proj_chip:"Chapter III \u00B7 Hedge Maze",proj_h2:"Featured Projects",
            proj_b1:"Web Platform",proj_t1:"ShiftLink \u2014 Smart Shift Management Platform",
            proj_d1:"An intelligent shift management platform that helps managers and employees collaborate on a unified system \u2014 from registering availability to shift scheduling, shift swapping, and attendance tracking.",
            proj_b2:"Advisory",proj_t2:"FTU Admissions Advisory Platform",
            proj_d2:"Organized admission outreach, file processing, and interactive consultation webinars for thousands of prospective students and parents.",
            proj_link:"View on GitHub \u2192",
            exp_chip:"Chapter IV \u00B7 Tea Party Garden",exp_h2:"Experience & Activities",
            exp1_t:"Active Member \u2014 FTU Forum Student Club",
            exp1_org:"Foreign Trade University Student Forum",
            exp1_b1:"Admissions consultation for annual events: Admission Fair, FTU Open Tour, B\u00E1ch Khoa Open Day 1 & 2, Admission Webinar.",
            exp1_b2:"Profile processing for Course 63 & 64: gathering, classifying, and answering inquiries from parents and students both online and offline.",
            exp1_b3:"Organizing Committee member for IE SHINE 2024: Unity & Shine \u2014 the annual cultural night of the Faculty of International Economics.",
            ach_chip:"Chapter V \u00B7 Royal Garden",ach_h2:"Achievements",
            aw1_t:"1st Prize \u2014 Provincial Literature",aw1_d:"First Prize, Grade 11 Provincial Excellent Student Competition in Literature, Tuy\u00EAn Quang Province.",
            aw2_t:"Consolation Prize \u2014 Regional Contest",aw2_d:"Literature prize at the 2022 Northern Coastal & Delta Regional Gifted Schools Competition.",
            aw3_t:"3rd Prize \u2014 Provincial Literature",aw3_d:"Third Prize, Grade 12 Provincial Excellent Student Competition in Literature.",
            roles_h3:"\u2660 Media Ambassador Roles",
            ct_chip:"Chapter VI \u00B7 Secret Garden at Sunset",ct_h2:"Let's Connect",
            ct_sub:"Step through the looking glass for collaborations, research, or opportunities.",
            ct_email:"Email",ct_phone:"Phone",ct_addr:"Address",
            farewell:'"Curiosity is the beginning of wisdom. Thank you for visiting my Wonderland!" \u2014 Tr\u1ECBnh Kh\u00E1nh Linh',
            footer:"Designed with curiosity & magic by Tr\u1ECBnh Kh\u00E1nh Linh \u00A9 2026 \u00B7 Foreign Trade University, Hanoi."
        },
        vi: {
            nav_home:"Trang ch\u1EE7",nav_about:"Gi\u1EDBi thi\u1EC7u",nav_skills:"K\u1EF9 n\u0103ng",nav_projects:"D\u1EF1 \u00E1n",
            nav_experience:"Kinh nghi\u1EC7m",nav_achievements:"Th\u00E0nh t\u1EF1u",nav_contact:"Li\u00EAn h\u1EC7",
            music_label:"Nh\u1EA1c n\u1EC1n",
            hero_chip:"\u2728 H\u00E0nh Tr\u00ECnh Qua X\u1EE9 S\u1EDF Th\u1EA7n Ti\u00EAn",
            hero_role:"Kinh t\u1EBF Qu\u1ED1c t\u1EBF",hero_school:"\u0110\u1EA1i h\u1ECDc Ngo\u1EA1i th\u01B0\u01A1ng (FTU)",
            hero_tagline:"K\u1EBFt n\u1ED1i th\u1ECB tr\u01B0\u1EDDng to\u00E0n c\u1EA7u, nghi\u00EAn c\u1EE9u kinh t\u1EBF v\u00E0 t\u1EA7m nh\u00ECn chi\u1EBFn l\u01B0\u1EE3c \u2014 t\u1EEBng b\u01B0\u1EDBc t\u00F2 m\u00F2 kh\u00E1m ph\u00E1.",
            btn_begin:"B\u1EAFt \u0111\u1EA7u H\u00E0nh tr\u00ECnh \u265F",btn_cv:"T\u1EA3i CV",scroll_hint:"Cu\u1ED9n \u0111\u1EC3 kh\u00E1m ph\u00E1",
            about_chip:"Ch\u01B0\u01A1ng I \u00B7 R\u1EEBng Ph\u00E9p Thu\u1EADt",about_h2:"V\u1EC1 B\u1EA3n Th\u00E2n",
            about_quote:"S\u1EF1 t\u00F2 m\u00F2 l\u00E0 kim ch\u1EC9 nam c\u1EE7a kinh t\u1EBF h\u1ECDc.",
            about_p1:"M\u00ECnh l\u00E0 Tr\u1ECBnh Kh\u00E1nh Linh, sinh vi\u00EAn n\u0103m 3 chuy\u00EAn ng\u00E0nh Kinh t\u1EBF Qu\u1ED1c t\u1EBF t\u1EA1i \u0110\u1EA1i h\u1ECDc Ngo\u1EA1i th\u01B0\u01A1ng (FTU), H\u00E0 N\u1ED9i. H\u00E0nh tr\u00ECnh h\u1ECDc t\u1EADp g\u1EAFn li\u1EC1n v\u1EDBi ni\u1EC1m \u0111am m\u00EA ph\u00E2n t\u00EDch th\u01B0\u01A1ng m\u1EA1i to\u00E0n c\u1EA7u, chi\u1EBFn l\u01B0\u1EE3c t\u00E0i ch\u00EDnh xuy\u00EAn bi\u00EAn gi\u1EDBi v\u00E0 nghi\u00EAn c\u1EE9u th\u1ECB tr\u01B0\u1EDDng.",
            about_p2:"Gi\u1ED1ng nh\u01B0 kh\u00E1m ph\u00E1 X\u1EE9 s\u1EDF di\u1EC7u k\u1EF3, kinh t\u1EBF hi\u1EC7n \u0111\u1EA1i \u0111\u00F2i h\u1ECFi s\u1EF1 t\u00F2 m\u00F2, t\u01B0 duy s\u1EAFc b\u00E9n v\u00E0 b\u1EA3n l\u0129nh v\u01B0\u1EE3t qua l\u1ED1i m\u00F2n.",
            stat_uni:"\u0110\u1EA1i h\u1ECDc Ngo\u1EA1i th\u01B0\u01A1ng",stat_major:"Kinh t\u1EBF Qu\u1ED1c t\u1EBF",stat_loc:"Vi\u1EC7t Nam",
            edu_h3:"\u2733 Qu\u00E1 Tr\u00ECnh H\u1ECDc V\u1EA5n",
            edu_ftu:"Sinh vi\u00EAn n\u0103m 3 \u00B7 Khoa Kinh t\u1EBF qu\u1ED1c t\u1EBF \u00B7 Chuy\u00EAn ng\u00E0nh Kinh t\u1EBF qu\u1ED1c t\u1EBF.",
            edu_ctq_name:"THPT Chuy\u00EAn Tuy\u00EAn Quang",
            edu_ctq:"T\u1ED1t nghi\u1EC7p lo\u1EA1i Gi\u1ECFi \u00B7 Chuy\u00EAn V\u0103n (Kho\u00E1 34) \u00B7 Th\u00E0nh vi\u00EAn \u0110\u1ED9i tuy\u1EC3n HSG Qu\u1ED1c gia m\u00F4n Ng\u1EEF v\u0103n (2022\u20132023).",
            skills_chip:"Ch\u01B0\u01A1ng II \u00B7 Th\u01B0 Vi\u1EC7n Ph\u00E9p Thu\u1EADt",skills_h2:"C\u1EA9m Nang K\u1EF9 N\u0103ng",
            sk_lang:"Tr\u00ECnh \u0110\u1ED9 Ngo\u1EA1i Ng\u1EEF",sk_econ:"Ph\u00E2n T\u00EDch Kinh T\u1EBF",
            sk_econ_sub:"D\u1EF1 b\u00E1o \u00B7 Kinh t\u1EBF l\u01B0\u1EE3ng \u00B7 Tr\u1EF1c quan h\u00F3a",
            sk_biz:"Chi\u1EBFn L\u01B0\u1EE3c Kinh Doanh",sk_biz_sub:"Th\u01B0\u01A1ng m\u1EA1i \u00B7 FDI \u00B7 T\u00E0i ch\u00EDnh",
            sk_comm:"Giao Ti\u1EBFp & K\u1EF9 N\u0103ng M\u1EC1m",sk_comm_sub:"CSKH \u00B7 Thuy\u1EBFt tr\u00ECnh \u00B7 L\u00E0m vi\u1EC7c nh\u00F3m",
            sk_tech:"Ph\u1EA7n M\u1EC1m & C\u00F4ng C\u1EE5",sk_tech_sub:"MS Office \u00B7 SPSS \u00B7 R/Python",
            sk_research:"Nghi\u00EAn C\u1EE9u & Vi\u1EBFt H\u1ECDc Thu\u1EADt",sk_research_sub:"B\u00E0i b\u00E1o \u00B7 T\u1ED5ng quan \u00B7 B\u00E1o c\u00E1o",
            proj_chip:"Ch\u01B0\u01A1ng III \u00B7 M\u00EA Cung H\u00E0ng R\u00E0o",proj_h2:"D\u1EF1 \u00C1n N\u1ED5i B\u1EADt",
            proj_b1:"N\u1EC1n t\u1EA3ng Web",proj_t1:"ShiftLink \u2014 N\u1EC1n t\u1EA3ng qu\u1EA3n l\u00FD ca th\u00F4ng minh",
            proj_d1:"N\u1EC1n t\u1EA3ng qu\u1EA3n l\u00FD ca l\u00E0m vi\u1EC7c th\u00F4ng minh, gi\u00FAp qu\u1EA3n l\u00FD v\u00E0 nh\u00E2n vi\u00EAn ph\u1ED1i h\u1EE3p tr\u00EAn c\u00F9ng m\u1ED9t h\u1EC7 th\u1ED1ng \u2014 t\u1EEB \u0111\u0103ng k\u00FD l\u1ECBch r\u1EA3nh \u0111\u1EBFn x\u1EBFp ca, \u0111\u1ED5i ca v\u00E0 ch\u1EA5m c\u00F4ng.",
            proj_b2:"T\u01B0 v\u1EA5n",proj_t2:"N\u1EC1n t\u1EA3ng T\u01B0 v\u1EA5n Tuy\u1EC3n sinh FTU",
            proj_d2:"T\u1ED5 ch\u1EE9c ho\u1EA1t \u0111\u1ED9ng h\u01B0\u1EDBng nghi\u1EC7p, x\u1EED l\u00FD h\u1ED3 s\u01A1 v\u00E0 webinar t\u01B0 v\u1EA5n cho h\u00E0ng ng\u00E0n h\u1ECDc sinh.",
            proj_link:"Xem tr\u00EAn GitHub \u2192",
            exp_chip:"Ch\u01B0\u01A1ng IV \u00B7 V\u01B0\u1EDDn Ti\u1EC7c Tr\u00E0",exp_h2:"Kinh Nghi\u1EC7m & Ho\u1EA1t \u0110\u1ED9ng",
            exp1_t:"Th\u00E0nh vi\u00EAn \u2014 CLB Di\u1EC5n \u0111\u00E0n SV FTU Forum",
            exp1_org:"CLB Di\u1EC5n \u0111\u00E0n sinh vi\u00EAn \u0110H Ngo\u1EA1i th\u01B0\u01A1ng",
            exp1_b1:"T\u01B0 v\u1EA5n tuy\u1EC3n sinh c\u00E1c s\u1EF1 ki\u1EC7n th\u01B0\u1EDDng ni\u00EAn: Ng\u00E0y h\u1ED9i tuy\u1EC3n sinh, FTU Open Tour, B\u00E1ch Khoa Open Day 1 & 2, Webinar tuy\u1EC3n sinh.",
            exp1_b2:"H\u1ED7 tr\u1EE3 tuy\u1EC3n sinh Kho\u00E1 63, 64: thu nh\u1EADn & x\u1EED l\u00FD h\u1ED3 s\u01A1, gi\u1EA3i \u0111\u00E1p th\u1EAFc m\u1EAFc ph\u1EE5 huynh v\u00E0 h\u1ECDc sinh.",
            exp1_b3:"BTC \u0110\u00EAm h\u1ED9i Khoa Kinh t\u1EBF qu\u1ED1c t\u1EBF \u2014 IE SHINE 2024: Unity & Shine.",
            ach_chip:"Ch\u01B0\u01A1ng V \u00B7 V\u01B0\u1EDDn Ho\u00E0ng Gia",ach_h2:"Gi\u1EA3i Th\u01B0\u1EDFng",
            aw1_t:"Gi\u1EA3i Nh\u1EA5t HSG C\u1EA5p T\u1EC9nh V\u0103n",aw1_d:"Gi\u1EA3i Nh\u1EA5t k\u1EF3 thi HSG c\u1EA5p t\u1EC9nh m\u00F4n Ng\u1EEF v\u0103n l\u1EDBp 11, T\u1EC9nh Tuy\u00EAn Quang.",
            aw2_t:"Gi\u1EA3i KK HSG V\u00F9ng Duy\u00EAn H\u1EA3i & \u0110BBB",aw2_d:"Gi\u1EA3i Khuy\u1EBFn kh\u00EDch m\u00F4n Ng\u1EEF v\u0103n K\u1EF3 thi HSG THPT chuy\u00EAn khu v\u1EF1c Duy\u00EAn h\u1EA3i & \u0110BBB 2022.",
            aw3_t:"Gi\u1EA3i Ba HSG C\u1EA5p T\u1EC9nh V\u0103n",aw3_d:"Gi\u1EA3i Ba k\u1EF3 thi HSG c\u1EA5p t\u1EC9nh m\u00F4n Ng\u1EEF v\u0103n l\u1EDBp 12.",
            roles_h3:"\u2660 \u0110\u1EA1i S\u1EE9 Truy\u1EC1n Th\u00F4ng",
            ct_chip:"Ch\u01B0\u01A1ng VI \u00B7 V\u01B0\u1EDDn B\u00ED M\u1EADt",ct_h2:"K\u1EBFt N\u1ED1i",
            ct_sub:"B\u01B0\u1EDBc qua t\u1EA5m g\u01B0\u01A1ng ph\u00E9p thu\u1EADt \u0111\u1EC3 h\u1EE3p t\u00E1c h\u1ECDc thu\u1EADt, nghi\u00EAn c\u1EE9u ho\u1EB7c c\u01A1 h\u1ED9i ngh\u1EC1 nghi\u1EC7p.",
            ct_email:"Email",ct_phone:"\u0110i\u1EC7n tho\u1EA1i",ct_addr:"\u0110\u1ECBa ch\u1EC9",
            farewell:'"S\u1EF1 t\u00F2 m\u00F2 l\u00E0 kh\u1EDFi \u0111\u1EA7u c\u1EE7a tr\u00ED tu\u1EC7. C\u1EA3m \u01A1n b\u1EA1n \u0111\u00E3 gh\u00E9 th\u0103m Wonderland!" \u2014 Tr\u1ECBnh Kh\u00E1nh Linh',
            footer:"Thi\u1EBFt k\u1EBF b\u1EDFi Tr\u1ECBnh Kh\u00E1nh Linh \u00A9 2026 \u00B7 \u0110\u1EA1i h\u1ECDc Ngo\u1EA1i th\u01B0\u01A1ng, H\u00E0 N\u1ED9i."
        }
    };

    /* ==========================================
       2. LANGUAGE SWITCHER
       ========================================== */
    let lang = localStorage.getItem('linh_lang') || 'en';
    const langBtn = document.getElementById('lang-btn');
    const langLabel = document.getElementById('lang-label');

    function setLang(l) {
        lang = l;
        localStorage.setItem('linh_lang', l);
        document.documentElement.setAttribute('data-lang', l);
        langLabel.textContent = l === 'en' ? 'VI' : 'EN';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const k = el.getAttribute('data-i18n');
            if (i18n[l]?.[k]) el.textContent = i18n[l][k];
        });
    }
    setLang(lang);
    langBtn?.addEventListener('click', () => setLang(lang === 'en' ? 'vi' : 'en'));

    /* ==========================================
       3. BACKGROUND MUSIC
       ========================================== */
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    let playing = false;
    if (audio) audio.volume = 0;

    function fadeIn() {
        if (!audio) return;
        audio.play().then(() => {
            playing = true;
            musicBtn?.classList.add('playing');
            let v = 0;
            const t = setInterval(() => { v = Math.min(v + 0.015, 0.3); audio.volume = v; if (v >= 0.3) clearInterval(t); }, 100);
        }).catch(() => {});
    }
    function pauseMusic() {
        if (!audio) return;
        audio.pause(); playing = false;
        musicBtn?.classList.remove('playing');
    }
    musicBtn?.addEventListener('click', () => playing ? pauseMusic() : fadeIn());
    document.getElementById('begin-btn')?.addEventListener('click', () => { if (!playing) fadeIn(); });

    /* ==========================================
       4. MOBILE MENU
       ========================================== */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger?.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
    });
    navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger?.classList.remove('open');
    }));

    /* ==========================================
       5. SCROLL: Header, Progress, Home Btn
       ========================================== */
    const header = document.getElementById('site-header');
    const homeBtn = document.getElementById('home-btn');
    const progressBar = document.getElementById('scroll-progress');

    function onScroll() {
        const sy = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        header?.classList.toggle('scrolled', sy > 60);
        homeBtn?.classList.toggle('show', sy > 350);
        if (progressBar && max > 0) progressBar.style.width = `${(sy / max) * 100}%`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ==========================================
       6. SCROLL-SPY
       ========================================== */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    function updateNav() {
        let cur = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 220) cur = s.id; });
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
    }
    window.addEventListener('scroll', updateNav, { passive: true });

    /* ==========================================
       7. SCROLL-REVEAL (Intersection Observer)
       ========================================== */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
        revealEls.forEach(el => obs.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    /* ==========================================
       8. SKILL BARS ANIMATION
       ========================================== */
    const skillRows = document.querySelectorAll('.skill-row');
    if ('IntersectionObserver' in window) {
        const barObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const pct = e.target.dataset.percent || '75';
                    const fill = e.target.querySelector('.bar-fill');
                    if (fill) {
                        fill.style.width = pct + '%';
                        fill.setAttribute('data-pct', pct + '%');
                    }
                    barObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.3 });
        skillRows.forEach(r => barObs.observe(r));
    }

    /* ==========================================
       9. LIGHTBOX
       ========================================== */
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lb-img');
    const lbCap = document.getElementById('lb-cap');
    document.querySelectorAll('[data-lightbox]').forEach(el => {
        el.addEventListener('click', () => {
            if (!lb) return;
            lbImg.src = el.dataset.lightbox;
            lbImg.alt = el.dataset.cap || '';
            if (lbCap) lbCap.textContent = el.dataset.cap || '';
            lb.classList.add('open');
        });
    });
    document.getElementById('lb-close')?.addEventListener('click', () => lb?.classList.remove('open'));
    lb?.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb?.classList.remove('open'); });

    /* ==========================================
       10. MASCOT — Hover Interaction per Section
       ========================================== */
    const mascotText = document.getElementById('mascot-text');
    const mascotBubble = document.getElementById('mascot-bubble');
    let mascotTimeout;

    sections.forEach(sec => {
        sec.addEventListener('mouseenter', () => {
            const key = lang === 'en' ? 'mascotEn' : 'mascotVi';
            const msg = sec.dataset[key];
            if (msg && mascotText) {
                clearTimeout(mascotTimeout);
                mascotBubble.style.opacity = '0';
                mascotTimeout = setTimeout(() => {
                    mascotText.textContent = msg;
                    mascotBubble.style.opacity = '1';
                }, 200);
            }
        });
    });

    // Default cycle when no hover
    const defaultEN = [
        "Follow me down the rabbit hole! \u2728",
        "Curiosity leads to great discoveries!",
        "Keep scrolling — there's more magic ahead!",
        "What a wonderful journey this is!"
    ];
    const defaultVI = [
        "H\u00E3y c\u00F9ng m\u00ECnh b\u01B0\u1EDBc v\u00E0o X\u1EE9 s\u1EDF di\u1EC7u k\u1EF3! \u2728",
        "S\u1EF1 t\u00F2 m\u00F2 d\u1EABn l\u1ED1i kh\u00E1m ph\u00E1!",
        "Cu\u1ED9n ti\u1EBFp \u2014 c\u00F2n nhi\u1EC1u \u0111i\u1EC1u th\u00FA v\u1ECB!",
        "H\u00E0nh tr\u00ECnh tuy\u1EC7t v\u1EDDi qu\u00E1!"
    ];
    let dIdx = 0;
    setInterval(() => {
        dIdx = (dIdx + 1) % defaultEN.length;
        if (mascotText && mascotBubble) {
            mascotBubble.style.opacity = '0';
            setTimeout(() => {
                mascotText.textContent = lang === 'en' ? defaultEN[dIdx] : defaultVI[dIdx];
                mascotBubble.style.opacity = '1';
            }, 300);
        }
    }, 8000);

    /* ==========================================
       11. FX CANVAS: Fireflies + Chess Falling + Card Cursor Trail
       ========================================== */
    const canvas = document.getElementById('fx-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking for card trail
    let mouseX = -100, mouseY = -100;
    document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

    // -- Fireflies --
    const flies = [];
    const flyCount = Math.min(Math.floor(W / 40), 30);
    const flyColors = ['#F6D383', '#D57ACE', '#1C8988', '#E7B280'];
    for (let i = 0; i < flyCount; i++) {
        flies.push({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() * 2 + 0.8,
            c: flyColors[Math.floor(Math.random() * flyColors.length)],
            a: Math.random() * 0.5 + 0.15,
            da: (Math.random() - 0.5) * 0.008,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4
        });
    }

    // -- Falling Chess Pieces --
    const chessPieces = ['\u2654', '\u2655', '\u2656', '\u2657', '\u2658', '\u2659',
                         '\u265A', '\u265B', '\u265C', '\u265D', '\u265E', '\u265F'];
    const chessItems = [];
    const chessCount = 8;
    for (let i = 0; i < chessCount; i++) {
        chessItems.push({
            x: Math.random() * W,
            y: Math.random() * -H,
            char: chessPieces[Math.floor(Math.random() * chessPieces.length)],
            size: Math.random() * 16 + 14,
            speed: Math.random() * 0.6 + 0.3,
            rot: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 1.5,
            opacity: Math.random() * 0.25 + 0.08,
            drift: (Math.random() - 0.5) * 0.3
        });
    }

    // -- Card Suit Cursor Trail --
    const suits = ['\u2660', '\u2665', '\u2666', '\u2663']; // ♠♥♦♣
    const suitColors = ['#2F2F38', '#c0392b', '#c0392b', '#2F2F38'];
    const trail = [];

    let lastTrailTime = 0;

    function animate(now) {
        ctx.clearRect(0, 0, W, H);

        // Fireflies
        flies.forEach(f => {
            f.x += f.vx; f.y += f.vy; f.a += f.da;
            if (f.a <= 0.1 || f.a >= 0.6) f.da *= -1;
            if (f.x < -10) f.x = W + 10; if (f.x > W + 10) f.x = -10;
            if (f.y < -10) f.y = H + 10; if (f.y > H + 10) f.y = -10;
            ctx.save();
            ctx.globalAlpha = f.a;
            ctx.fillStyle = f.c;
            ctx.shadowBlur = 12; ctx.shadowColor = f.c;
            ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
        });

        // Falling Chess Pieces
        chessItems.forEach(c => {
            c.y += c.speed;
            c.x += c.drift;
            c.rot += c.rotSpeed;
            if (c.y > H + 40) {
                c.y = -40;
                c.x = Math.random() * W;
                c.char = chessPieces[Math.floor(Math.random() * chessPieces.length)];
            }
            ctx.save();
            ctx.globalAlpha = c.opacity;
            ctx.translate(c.x, c.y);
            ctx.rotate(c.rot * Math.PI / 180);
            ctx.font = `${c.size}px serif`;
            ctx.fillStyle = '#461C89';
            ctx.textAlign = 'center';
            ctx.fillText(c.char, 0, 0);
            ctx.restore();
        });

        // Card Suit Cursor Trail
        if (now - lastTrailTime > 80 && mouseX > 0) {
            lastTrailTime = now;
            const si = Math.floor(Math.random() * 4);
            trail.push({
                x: mouseX, y: mouseY,
                char: suits[si], color: suitColors[si],
                life: 1, size: Math.random() * 10 + 12,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3 - 1,
                rot: Math.random() * 360
            });
        }

        for (let i = trail.length - 1; i >= 0; i--) {
            const t = trail[i];
            t.life -= 0.025;
            t.x += t.vx;
            t.y += t.vy;
            t.vy += 0.05; // gravity
            t.rot += 3;
            if (t.life <= 0) { trail.splice(i, 1); continue; }
            ctx.save();
            ctx.globalAlpha = t.life * 0.7;
            ctx.translate(t.x, t.y);
            ctx.rotate(t.rot * Math.PI / 180);
            ctx.font = `${t.size}px serif`;
            ctx.fillStyle = t.color;
            ctx.textAlign = 'center';
            ctx.fillText(t.char, 0, 0);
            ctx.restore();
        }

        requestAnimationFrame(animate);
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        requestAnimationFrame(animate);
    }

});