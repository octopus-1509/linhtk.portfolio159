/* ===================================================
   WONDERLAND PORTFOLIO v4 — FULL INTERACTIVE SCRIPT
   Mirror Entrance, Maze, Tarot, Mood, Card Trail, Chess
   =================================================== */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* ==========================================
       1. TRANSLATIONS
       ========================================== */
    const i18n = {
        en: {
            nav_home:"Home",nav_about:"About",nav_lang:"Languages",nav_skills:"Skills",
            nav_projects:"Projects",nav_experience:"Experience",nav_achievements:"Achievements",
            nav_game:"Minigame",nav_contact:"Contact",music_label:"Music",
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
            edu_ftu_1:"3rd-year Student",edu_ftu_2:"Faculty of International Economics",edu_ftu_3:"Major in International Economics",
            edu_ctq_name:"Tuy\u00EAn Quang High School for the Gifted",
            edu_ctq_1:"Graduated with Distinction",edu_ctq_2:"Literature Major (Class 34)",edu_ctq_3:"National Excellent Student Team in Literature (2022\u20132023)",
            lang_chip:"Chapter II \u00B7 Tower of Babel",lang_h2:"Language Proficiency",
            lang_zh:"Chinese",lang_vi:"Vietnamese",lang_native:"Native",
            skills_chip:"Chapter III \u00B7 Hidden Magical Library",skills_h2:"Grimoire of Skills",
            sk_econ:"Economic & Market Analysis",sk_econ_sub:"Forecasting \u00B7 Econometrics \u00B7 Data Viz",
            sk_biz:"Business Strategy",sk_biz_sub:"Trade Policy \u00B7 FDI \u00B7 Corporate Finance",
            sk_comm:"Communication & Soft Skills",sk_comm_sub:"Customer Care \u00B7 Public Speaking \u00B7 Teamwork",
            sk_tech:"Software & Office Tools",sk_tech_sub:"MS Office \u00B7 SPSS \u00B7 R/Python basics",
            sk_research:"Research & Academic Writing",sk_research_sub:"Papers \u00B7 Literature Review \u00B7 Reports",
            proj_chip:"Chapter IV \u00B7 Hedge Maze",proj_h2:"Featured Projects",
            proj_b1:"Web Platform",proj_t1:"ShiftLink \u2014 Smart Shift Management",
            proj_d1:"An intelligent shift management platform that helps managers and employees collaborate \u2014 from registering availability to shift scheduling, shift swapping, and attendance tracking.",
            proj_b2:"Advisory",proj_t2:"FTU Admissions Advisory Platform",
            proj_d2:"Organized admission outreach, file processing, and consultation webinars for thousands of prospective students.",
            proj_link:"View on GitHub \u2192",
            exp_chip:"Chapter V \u00B7 Tea Party Garden",exp_h2:"Experience & Activities",
            exp1_t:"Active Member \u2014 FTU Forum Student Club",exp1_org:"Foreign Trade University Student Forum",
            exp1_b1:"Admissions consultation: Admission Fair, FTU Open Tour, B\u00E1ch Khoa Open Day 1 & 2, Admission Webinar.",
            exp1_b2:"Profile processing for Course 63 & 64: gathering, classifying, and answering inquiries.",
            exp2_t:"Organizing Committee \u2014 IE SHINE 2024: Unity & Shine",exp2_org:"Faculty of International Economics, FTU",
            exp2_b1:"Organized the annual cultural night gala of the Faculty of International Economics.",
            exp2_b2:"Coordinated logistics, media outreach, and student engagement activities.",
            ach_chip:"Chapter VI \u00B7 Royal Garden",ach_h2:"Achievements",
            aw1_t:"1st Prize \u2014 Provincial Literature",aw1_d:"Grade 11 Provincial Excellent Student Competition in Literature, Tuy\u00EAn Quang Province.",
            aw2_t:"Consolation Prize \u2014 Regional Contest",aw2_d:"2022 Northern Coastal & Delta Regional Gifted Schools Competition in Literature.",
            aw3_t:"3rd Prize \u2014 Provincial Literature",aw3_d:"Grade 12 Provincial Excellent Student Competition in Literature.",
            roles_h3:"\u2660 Media Ambassador Roles",
            game_chip:"Chapter VII \u00B7 The Mad Tea Party",game_h2:"Wonderland Games",game_sub:"Take a break and play!",
            mood_title:"How are you feeling today?",mood_history:"Your Mood Journal",
            ct_chip:"Chapter VIII \u00B7 Secret Garden at Sunset",ct_h2:"Let's Connect",
            ct_sub:"Step through the looking glass for collaborations or opportunities.",
            ct_email:"Email",ct_phone:"Phone",ct_addr:"Address",
            form_h3:"Send a Message",form_send:"Send Message \u2709",
            farewell:'"Curiosity is the beginning of wisdom. Thank you for visiting my Wonderland!" \u2014 Tr\u1ECBnh Kh\u00E1nh Linh',
            footer:"Designed with curiosity & magic by Tr\u1ECBnh Kh\u00E1nh Linh \u00A9 2026 \u00B7 Foreign Trade University, Hanoi."
        },
        vi: {
            nav_home:"Trang ch\u1EE7",nav_about:"Gi\u1EDBi thi\u1EC7u",nav_lang:"Ngo\u1EA1i ng\u1EEF",nav_skills:"K\u1EF9 n\u0103ng",
            nav_projects:"D\u1EF1 \u00E1n",nav_experience:"Kinh nghi\u1EC7m",nav_achievements:"Gi\u1EA3i th\u01B0\u1EDFng",
            nav_game:"Minigame",nav_contact:"Li\u00EAn h\u1EC7",music_label:"Nh\u1EA1c",
            hero_chip:"\u2728 H\u00E0nh Tr\u00ECnh Qua X\u1EE9 S\u1EDF Th\u1EA7n Ti\u00EAn",
            hero_role:"Kinh t\u1EBF Qu\u1ED1c t\u1EBF",hero_school:"\u0110H Ngo\u1EA1i th\u01B0\u01A1ng (FTU)",
            hero_tagline:"K\u1EBFt n\u1ED1i th\u1ECB tr\u01B0\u1EDDng to\u00E0n c\u1EA7u, nghi\u00EAn c\u1EE9u kinh t\u1EBF v\u00E0 t\u1EA7m nh\u00ECn chi\u1EBFn l\u01B0\u1EE3c.",
            btn_begin:"B\u1EAFt \u0111\u1EA7u \u265F",btn_cv:"T\u1EA3i CV",scroll_hint:"Cu\u1ED9n \u0111\u1EC3 kh\u00E1m ph\u00E1",
            about_chip:"Ch\u01B0\u01A1ng I \u00B7 R\u1EEBng Ph\u00E9p Thu\u1EADt",about_h2:"V\u1EC1 B\u1EA3n Th\u00E2n",
            about_quote:"S\u1EF1 t\u00F2 m\u00F2 l\u00E0 kim ch\u1EC9 nam c\u1EE7a kinh t\u1EBF h\u1ECDc.",
            about_p1:"M\u00ECnh l\u00E0 Tr\u1ECBnh Kh\u00E1nh Linh, SV n\u0103m 3 chuy\u00EAn ng\u00E0nh KTQT t\u1EA1i \u0110H Ngo\u1EA1i th\u01B0\u01A1ng. H\u00E0nh tr\u00ECnh h\u1ECDc t\u1EADp g\u1EAFn li\u1EC1n v\u1EDBi \u0111am m\u00EA th\u01B0\u01A1ng m\u1EA1i to\u00E0n c\u1EA7u, chi\u1EBFn l\u01B0\u1EE3c t\u00E0i ch\u00EDnh v\u00E0 nghi\u00EAn c\u1EE9u th\u1ECB tr\u01B0\u1EDDng.",
            about_p2:"Gi\u1ED1ng nh\u01B0 kh\u00E1m ph\u00E1 X\u1EE9 s\u1EDF di\u1EC7u k\u1EF3, kinh t\u1EBF \u0111\u00F2i h\u1ECFi s\u1EF1 t\u00F2 m\u00F2, t\u01B0 duy s\u1EAFc b\u00E9n v\u00E0 b\u1EA3n l\u0129nh.",
            stat_uni:"\u0110H Ngo\u1EA1i th\u01B0\u01A1ng",stat_major:"Kinh t\u1EBF Qu\u1ED1c t\u1EBF",stat_loc:"Vi\u1EC7t Nam",
            edu_h3:"\u2733 H\u1ECDc V\u1EA5n",
            edu_ftu_1:"Sinh vi\u00EAn n\u0103m 3",edu_ftu_2:"Khoa Kinh t\u1EBF qu\u1ED1c t\u1EBF",edu_ftu_3:"Chuy\u00EAn ng\u00E0nh Kinh t\u1EBF qu\u1ED1c t\u1EBF",
            edu_ctq_name:"THPT Chuy\u00EAn Tuy\u00EAn Quang",
            edu_ctq_1:"T\u1ED1t nghi\u1EC7p lo\u1EA1i Gi\u1ECFi",edu_ctq_2:"Chuy\u00EAn V\u0103n (Kho\u00E1 34)",edu_ctq_3:"HSG Qu\u1ED1c gia Ng\u1EEF v\u0103n (2022\u20132023)",
            lang_chip:"Ch\u01B0\u01A1ng II \u00B7 Th\u00E1p Babel",lang_h2:"Tr\u00ECnh \u0110\u1ED9 Ngo\u1EA1i Ng\u1EEF",
            lang_zh:"Ti\u1EBFng Trung",lang_vi:"Ti\u1EBFng Vi\u1EC7t",lang_native:"B\u1EA3n ng\u1EEF",
            skills_chip:"Ch\u01B0\u01A1ng III \u00B7 Th\u01B0 Vi\u1EC7n Ph\u00E9p Thu\u1EADt",skills_h2:"C\u1EA9m Nang K\u1EF9 N\u0103ng",
            sk_econ:"Ph\u00E2n T\u00EDch Kinh T\u1EBF",sk_econ_sub:"D\u1EF1 b\u00E1o \u00B7 Kinh t\u1EBF l\u01B0\u1EE3ng \u00B7 Data",
            sk_biz:"Chi\u1EBFn L\u01B0\u1EE3c KD",sk_biz_sub:"Th\u01B0\u01A1ng m\u1EA1i \u00B7 FDI \u00B7 T\u00E0i ch\u00EDnh",
            sk_comm:"Giao Ti\u1EBFp",sk_comm_sub:"CSKH \u00B7 Thuy\u1EBFt tr\u00ECnh \u00B7 Teamwork",
            sk_tech:"Ph\u1EA7n M\u1EC1m",sk_tech_sub:"MS Office \u00B7 SPSS \u00B7 R/Python",
            sk_research:"Nghi\u00EAn C\u1EE9u",sk_research_sub:"B\u00E0i b\u00E1o \u00B7 T\u1ED5ng quan \u00B7 B\u00E1o c\u00E1o",
            proj_chip:"Ch\u01B0\u01A1ng IV \u00B7 M\u00EA Cung",proj_h2:"D\u1EF1 \u00C1n N\u1ED5i B\u1EADt",
            proj_b1:"Web",proj_t1:"ShiftLink \u2014 Qu\u1EA3n l\u00FD ca th\u00F4ng minh",
            proj_d1:"N\u1EC1n t\u1EA3ng qu\u1EA3n l\u00FD ca l\u00E0m vi\u1EC7c \u2014 \u0111\u0103ng k\u00FD l\u1ECBch, x\u1EBFp ca, \u0111\u1ED5i ca v\u00E0 ch\u1EA5m c\u00F4ng.",
            proj_b2:"T\u01B0 v\u1EA5n",proj_t2:"T\u01B0 v\u1EA5n Tuy\u1EC3n sinh FTU",
            proj_d2:"T\u1ED5 ch\u1EE9c t\u01B0 v\u1EA5n, x\u1EED l\u00FD h\u1ED3 s\u01A1 v\u00E0 webinar cho h\u1ECDc sinh.",
            proj_link:"Xem GitHub \u2192",
            exp_chip:"Ch\u01B0\u01A1ng V \u00B7 V\u01B0\u1EDDn Ti\u1EC7c Tr\u00E0",exp_h2:"Kinh Nghi\u1EC7m",
            exp1_t:"Th\u00E0nh vi\u00EAn \u2014 CLB FTU Forum",exp1_org:"CLB Di\u1EC5n \u0111\u00E0n SV \u0110H Ngo\u1EA1i th\u01B0\u01A1ng",
            exp1_b1:"T\u01B0 v\u1EA5n tuy\u1EC3n sinh: Ng\u00E0y h\u1ED9i, FTU Open Tour, BK Open Day, Webinar.",
            exp1_b2:"X\u1EED l\u00FD h\u1ED3 s\u01A1 Kho\u00E1 63, 64.",
            exp2_t:"BTC \u0110\u00EAm h\u1ED9i IE SHINE 2024: Unity & Shine",exp2_org:"Khoa KTQT \u2014 \u0110H Ngo\u1EA1i th\u01B0\u01A1ng",
            exp2_b1:"T\u1ED5 ch\u1EE9c \u0111\u00EAm h\u1ED9i v\u0103n h\u00F3a Khoa KTQT.",
            exp2_b2:"\u0110i\u1EC1u ph\u1ED1i truy\u1EC1n th\u00F4ng v\u00E0 ho\u1EA1t \u0111\u1ED9ng sinh vi\u00EAn.",
            ach_chip:"Ch\u01B0\u01A1ng VI \u00B7 V\u01B0\u1EDDn Ho\u00E0ng Gia",ach_h2:"Gi\u1EA3i Th\u01B0\u1EDFng",
            aw1_t:"Gi\u1EA3i Nh\u1EA5t HSG T\u1EC9nh V\u0103n",aw1_d:"HSG c\u1EA5p t\u1EC9nh Ng\u1EEF v\u0103n l\u1EDBp 11, Tuy\u00EAn Quang.",
            aw2_t:"Gi\u1EA3i KK HSG V\u00F9ng",aw2_d:"Khu v\u1EF1c Duy\u00EAn h\u1EA3i & \u0110BBB 2022.",
            aw3_t:"Gi\u1EA3i Ba HSG T\u1EC9nh V\u0103n",aw3_d:"HSG c\u1EA5p t\u1EC9nh Ng\u1EEF v\u0103n l\u1EDBp 12.",
            roles_h3:"\u2660 \u0110\u1EA1i S\u1EE9 Truy\u1EC1n Th\u00F4ng",
            game_chip:"Ch\u01B0\u01A1ng VII \u00B7 Ti\u1EC7c Tr\u00E0 \u0110i\u00EAn",game_h2:"Tr\u00F2 Ch\u01A1i",game_sub:"Ngh\u1EC9 ng\u01A1i v\u00E0 ch\u01A1i n\u00E0o!",
            mood_title:"H\u00F4m nay b\u1EA1n c\u1EA3m th\u1EA5y th\u1EBF n\u00E0o?",mood_history:"Nh\u1EADt k\u00FD t\u00E2m tr\u1EA1ng",
            ct_chip:"Ch\u01B0\u01A1ng VIII \u00B7 V\u01B0\u1EDDn B\u00ED M\u1EADt",ct_h2:"K\u1EBFt N\u1ED1i",
            ct_sub:"B\u01B0\u1EDBc qua t\u1EA5m g\u01B0\u01A1ng \u0111\u1EC3 h\u1EE3p t\u00E1c.",
            ct_email:"Email",ct_phone:"\u0110i\u1EC7n tho\u1EA1i",ct_addr:"\u0110\u1ECBa ch\u1EC9",
            form_h3:"G\u1EEDi Tin Nh\u1EAFn",form_send:"G\u1EEDi \u2709",
            farewell:'"S\u1EF1 t\u00F2 m\u00F2 l\u00E0 kh\u1EDFi \u0111\u1EA7u. C\u1EA3m \u01A1n \u0111\u00E3 gh\u00E9 Wonderland!" \u2014 Linh',
            footer:"Thi\u1EBFt k\u1EBF b\u1EDFi Tr\u1ECBnh Kh\u00E1nh Linh \u00A9 2026 \u00B7 \u0110H Ngo\u1EA1i th\u01B0\u01A1ng."
        }
    };

    /* ==========================================
       2. MIRROR ENTRANCE
       ========================================== */
    const mirrorScene = document.getElementById('mirror-scene');
    const portfolioWrap = document.getElementById('portfolio-wrap');
    const mirrorClick = document.getElementById('mirror-click');

    // Mirror sparkle particles
    const mCanvas = document.getElementById('mirror-particles');
    if (mCanvas) {
        const mCtx = mCanvas.getContext('2d');
        let mW, mH;
        function mResize() { mW = mCanvas.width = window.innerWidth; mH = mCanvas.height = window.innerHeight; }
        mResize(); window.addEventListener('resize', mResize);
        const sparkles = [];
        for (let i = 0; i < 40; i++) {
            sparkles.push({ x: Math.random()*mW, y: Math.random()*mH, r: Math.random()*2+.5, a: Math.random(), da: (Math.random()-.5)*.02, vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3, c: ['#F6D383','#D57ACE','#1C8988','#E7B280'][Math.floor(Math.random()*4)] });
        }
        function drawMirrorP() {
            if (mirrorScene.classList.contains('hidden')) return;
            mCtx.clearRect(0,0,mW,mH);
            sparkles.forEach(s => {
                s.x += s.vx; s.y += s.vy; s.a += s.da;
                if (s.a<=0||s.a>=1) s.da*=-1;
                if (s.x<0) s.x=mW; if (s.x>mW) s.x=0;
                if (s.y<0) s.y=mH; if (s.y>mH) s.y=0;
                mCtx.save(); mCtx.globalAlpha=s.a*.5; mCtx.fillStyle=s.c;
                mCtx.shadowBlur=10; mCtx.shadowColor=s.c;
                mCtx.beginPath(); mCtx.arc(s.x,s.y,s.r,0,Math.PI*2); mCtx.fill(); mCtx.restore();
            });
            requestAnimationFrame(drawMirrorP);
        }
        drawMirrorP();
    }

    mirrorClick?.addEventListener('click', () => {
        mirrorScene.classList.add('hidden');
        setTimeout(() => {
            mirrorScene.style.display = 'none';
            portfolioWrap.style.display = 'block';
            document.body.style.overflow = 'auto';
            initPortfolio();
        }, 800);
    });
    document.body.style.overflow = 'hidden';

    /* ==========================================
       3. INIT PORTFOLIO (after mirror)
       ========================================== */
    function initPortfolio() {
        // Language
        let lang = localStorage.getItem('linh_lang') || 'en';
        const langBtn = document.getElementById('lang-btn');
        const langLabel = document.getElementById('lang-label');
        function setLang(l) {
            lang = l; localStorage.setItem('linh_lang', l);
            document.documentElement.setAttribute('data-lang', l);
            langLabel.textContent = l === 'en' ? 'VI' : 'EN';
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const k = el.getAttribute('data-i18n');
                if (i18n[l]?.[k]) el.textContent = i18n[l][k];
            });
            // placeholders
            document.querySelectorAll('[data-i18n-ph]').forEach(el => {
                const k = el.getAttribute('data-i18n-ph');
                const ph = { form_name: l==='en'?'Your name':'Tên của bạn', form_email: l==='en'?'Your email':'Email', form_msg: l==='en'?'Your message...':'Tin nhắn...' };
                if (ph[k]) el.placeholder = ph[k];
            });
        }
        setLang(lang);
        langBtn?.addEventListener('click', () => setLang(lang === 'en' ? 'vi' : 'en'));

        // Music
        const audio = document.getElementById('bg-music');
        const musicBtn = document.getElementById('music-btn');
        let playing = false;
        if (audio) audio.volume = 0;
        function fadeIn() {
            if (!audio) return;
            audio.play().then(() => { playing=true; musicBtn?.classList.add('playing'); let v=0; const t=setInterval(()=>{v=Math.min(v+.015,.3);audio.volume=v;if(v>=.3)clearInterval(t)},100); }).catch(()=>{});
        }
        function pauseMusic() { if(!audio)return; audio.pause(); playing=false; musicBtn?.classList.remove('playing'); }
        musicBtn?.addEventListener('click', () => playing ? pauseMusic() : fadeIn());
        document.getElementById('begin-btn')?.addEventListener('click', () => { if (!playing) fadeIn(); });

        // Mobile menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        hamburger?.addEventListener('click', () => {
            const o = navLinks.classList.toggle('open');
            hamburger.classList.toggle('open', o);
        });
        navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { navLinks.classList.remove('open'); hamburger?.classList.remove('open'); }));

        // Scroll
        const header = document.getElementById('site-header');
        const homeBtn = document.getElementById('home-btn');
        const progressBar = document.getElementById('scroll-progress');
        function onScroll() {
            const sy = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            header?.classList.toggle('scrolled', sy > 60);
            homeBtn?.classList.toggle('show', sy > 350);
            if (progressBar && max > 0) progressBar.style.width = `${(sy/max)*100}%`;
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        // Scroll-spy
        const sections = document.querySelectorAll('section[id]');
        const navAnchors = document.querySelectorAll('.nav-links a');
        function updateNav() {
            let cur = '';
            sections.forEach(s => { if (window.scrollY >= s.offsetTop - 220) cur = s.id; });
            navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
        }
        window.addEventListener('scroll', updateNav, { passive: true });

        // Scroll-reveal
        const revealEls = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver(entries => {
                entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
            }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
            revealEls.forEach(el => obs.observe(el));
        } else { revealEls.forEach(el => el.classList.add('visible')); }

        // Skill bars + Language bars
        const allBars = document.querySelectorAll('.skill-row, .lang-card');
        if ('IntersectionObserver' in window) {
            const barObs = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        // skill bars
                        const pct = e.target.dataset?.percent;
                        if (pct) {
                            const fill = e.target.querySelector('.bar-fill');
                            if (fill) { fill.style.width = pct + '%'; fill.setAttribute('data-pct', pct + '%'); }
                        }
                        // language bars
                        const lf = e.target.querySelector('.lang-fill');
                        if (lf) { lf.style.width = lf.dataset.percent + '%'; }
                        barObs.unobserve(e.target);
                    }
                });
            }, { threshold: 0.3 });
            allBars.forEach(r => barObs.observe(r));
        }

        // Lightbox
        const lb = document.getElementById('lightbox');
        const lbImg = document.getElementById('lb-img');
        document.querySelectorAll('[data-lightbox]').forEach(el => {
            el.addEventListener('click', () => { lbImg.src = el.dataset.lightbox; lb.classList.add('open'); });
        });
        document.getElementById('lb-close')?.addEventListener('click', () => lb?.classList.remove('open'));
        lb?.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') lb?.classList.remove('open'); });

        // Mascot hover
        const mascotText = document.getElementById('mascot-text');
        const mascotBubble = document.getElementById('mascot-bubble');
        sections.forEach(sec => {
            sec.addEventListener('mouseenter', () => {
                const key = lang === 'en' ? 'mascotEn' : 'mascotVi';
                const msg = sec.dataset[key];
                if (msg && mascotText) {
                    mascotBubble.style.opacity = '0';
                    setTimeout(() => { mascotText.textContent = msg; mascotBubble.style.opacity = '1'; }, 200);
                }
            });
        });
        const defaultMsgs = {
            en: ["Follow me! \u2728","Curiosity leads to discoveries!","Keep scrolling!","What a journey!"],
            vi: ["Theo m\u00ECnh nh\u00E9! \u2728","T\u00F2 m\u00F2 d\u1EABn l\u1ED1i!","Cu\u1ED9n ti\u1EBFp!","Tuy\u1EC7t v\u1EDDi!"]
        };
        let dIdx = 0;
        setInterval(() => {
            dIdx = (dIdx + 1) % 4;
            if (mascotText && mascotBubble) {
                mascotBubble.style.opacity = '0';
                setTimeout(() => { mascotText.textContent = defaultMsgs[lang]?.[dIdx] || ''; mascotBubble.style.opacity = '1'; }, 300);
            }
        }, 8000);

        // Contact form
        const form = document.getElementById('contact-form');
        const formNote = document.getElementById('form-note');
        form?.addEventListener('submit', e => {
            e.preventDefault();
            formNote.textContent = lang === 'en' ? 'Thank you! Message received \u2714' : 'C\u1EA3m \u01A1n! \u0110\u00E3 nh\u1EADn tin nh\u1EAFn \u2714';
            formNote.style.display = 'block';
            form.reset();
            setTimeout(() => { formNote.style.display = 'none'; }, 4000);
        });

        // ==========================================
        // FX CANVAS: Fireflies + Chess
        // ==========================================
        const canvas = document.getElementById('fx-canvas');
        const mCanvasCursor = document.getElementById('mouse-canvas');
        if (!canvas || !mCanvasCursor) return;
        const ctx = canvas.getContext('2d');
        const mCtx = mCanvasCursor.getContext('2d');
        let W, H;
        function resize() { 
            W = canvas.width = mCanvasCursor.width = window.innerWidth; 
            H = canvas.height = mCanvasCursor.height = window.innerHeight; 
        }
        resize(); window.addEventListener('resize', resize);

        let mouseX = -100, mouseY = -100;
        document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

        // Fireflies
        const flies = [];
        const flyCount = Math.min(Math.floor(W / 40), 30);
        const flyC = ['#F6D383','#D57ACE','#1C8988','#E7B280'];
        for (let i = 0; i < flyCount; i++) flies.push({ x:Math.random()*W, y:Math.random()*H, r:Math.random()*2+.8, c:flyC[Math.floor(Math.random()*4)], a:Math.random()*.5+.15, da:(Math.random()-.5)*.008, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4 });

        // Chess — bigger + faster + b/w 3d effect
        const chessPieces = ['\u2654','\u2655','\u2656','\u2657','\u2658','\u2659','\u265A','\u265B','\u265C','\u265D','\u265E','\u265F'];
        const chess = [];
        for (let i = 0; i < 15; i++) chess.push({ x:Math.random()*W, y:Math.random()*-H, char:chessPieces[Math.floor(Math.random()*12)], size:Math.random()*22+20, speed:Math.random()*1.2+0.6, rot:Math.random()*360, rotS:(Math.random()-.5)*2, opacity:Math.random()*.2+.15, drift:(Math.random()-.5)*.4 });

        // Card trail — theme colors
        const suits = ['\u2660','\u2665','\u2666','\u2663'];
        const suitColors = ['#461C89','#D57ACE','#1C8988','#F6D383'];
        const trail = [];
        let lastT = 0;

        function animate(now) {
            ctx.clearRect(0, 0, W, H);
            mCtx.clearRect(0, 0, W, H);
            
            // Fireflies on bg
            flies.forEach(f => {
                f.x+=f.vx;f.y+=f.vy;f.a+=f.da;
                if(f.a<=.1||f.a>=.6)f.da*=-1;
                if(f.x<-10)f.x=W+10;if(f.x>W+10)f.x=-10;
                if(f.y<-10)f.y=H+10;if(f.y>H+10)f.y=-10;
                ctx.save();ctx.globalAlpha=f.a;ctx.fillStyle=f.c;ctx.shadowBlur=12;ctx.shadowColor=f.c;
                ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,Math.PI*2);ctx.fill();ctx.restore();
            });
            // Chess on bg
            chess.forEach(c => {
                c.y+=c.speed;c.x+=c.drift;c.rot+=c.rotS;
                if(c.y>H+50){c.y=-50;c.x=Math.random()*W;c.char=chessPieces[Math.floor(Math.random()*12)];}
                ctx.save();ctx.globalAlpha=c.opacity;ctx.translate(c.x,c.y);ctx.rotate(c.rot*Math.PI/180);
                ctx.font=`${c.size}px serif`;
                // Black/White simulated 3D
                ctx.fillStyle = '#222';
                ctx.shadowBlur = 4; ctx.shadowColor = '#fff';
                ctx.textAlign='center';ctx.fillText(c.char,0,0);ctx.restore();
            });
            
            // Card cursor trail on mouse canvas (top layer)
            if (now - lastT > 70 && mouseX > 0) {
                lastT = now;
                const si = Math.floor(Math.random()*4);
                trail.push({ x:mouseX, y:mouseY, char:suits[si], color:suitColors[si], life:1, size:Math.random()*10+12, vx:(Math.random()-.5)*3, vy:(Math.random()-.5)*3-1, rot:Math.random()*360 });
            }
            for (let i=trail.length-1;i>=0;i--) {
                const t=trail[i];t.life-=.025;t.x+=t.vx;t.y+=t.vy;t.vy+=.05;t.rot+=3;
                if(t.life<=0){trail.splice(i,1);continue;}
                mCtx.save();mCtx.globalAlpha=t.life*.85;mCtx.translate(t.x,t.y);mCtx.rotate(t.rot*Math.PI/180);
                mCtx.font=`${t.size}px serif`;mCtx.fillStyle=t.color;mCtx.textAlign='center';mCtx.fillText(t.char,0,0);mCtx.restore();
            }
            requestAnimationFrame(animate);
        }
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(animate);

        // ==========================================
        // MOOD TRACKER
        // ==========================================
        const moodMsgs = {
            amazing: 'You\'re glowing! Wonderland is brighter with you! \u2728',
            happy: 'Happiness suits you! Keep spreading the joy! \u2600',
            neutral: 'Balance is beautiful. Take a moment to breathe. \u2601',
            tired: 'Rest is magical too. Take care of yourself. \u2615',
            sad: 'Even in Wonderland, rain makes flowers grow. \u{1F338}'
        };
        let moodLog = JSON.parse(localStorage.getItem('linh_mood_log') || '[]');

        document.querySelectorAll('.mood-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mood = btn.dataset.mood;
                const msg = moodMsgs[mood];
                document.getElementById('mood-message').textContent = msg;
                document.getElementById('mood-result').style.display = 'block';
                const entry = { mood, time: new Date().toLocaleString(), emoji: btn.textContent.split(' ')[0] };
                moodLog.unshift(entry);
                if (moodLog.length > 20) moodLog = moodLog.slice(0, 20);
                localStorage.setItem('linh_mood_log', JSON.stringify(moodLog));
                renderMoodLog();
            });
        });

        function renderMoodLog() {
            const list = document.getElementById('mood-log');
            list.innerHTML = moodLog.map(m => `<li>${m.emoji} ${m.mood} — ${m.time}</li>`).join('');
        }
        renderMoodLog();

    } // end initPortfolio

});