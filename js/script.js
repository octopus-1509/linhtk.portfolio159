/* ===================================================
   WONDERLAND PORTFOLIO — INTERACTIVE SCRIPT
   Trịnh Khánh Linh · Foreign Trade University
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* ==========================================
       1. TRANSLATION DICTIONARY
       ========================================== */
    const i18n = {
        en: {
            nav_home: "Home", nav_about: "About", nav_skills: "Skills",
            nav_projects: "Projects", nav_experience: "Experience",
            nav_achievements: "Achievements", nav_contact: "Contact",
            music_label: "Music",

            hero_chip: "✨ A Journey Through Wonderland",
            hero_role: "International Economics",
            hero_school: "Foreign Trade University (FTU)",
            hero_tagline: "Bridging global markets, economic research, and strategic vision — one curious step at a time.",
            btn_begin: "Begin Journey 🗝️", btn_cv: "Download CV",
            scroll_hint: "Scroll to explore",

            about_chip: "Chapter I · Enchanted Forest",
            about_h2: "About Me",
            about_quote: "Curiosity is the compass of economics.",
            about_p1: "I am Trịnh Khánh Linh, a 3rd-year undergraduate majoring in International Economics at Foreign Trade University (FTU), Hanoi. My academic journey is driven by a deep fascination with global trade dynamics, cross-border financial strategy, and market analysis.",
            about_p2: "Like exploring Wonderland, modern economics demands curiosity, analytical rigor, and the courage to venture beyond conventional perspectives. I am dedicated to bridging academic theories with real-world impact.",
            stat_uni: "Foreign Trade University", stat_major: "International Economics", stat_loc: "Vietnam",
            edu_h3: "🎓 Education",
            edu_ftu: "3rd-year Student · Faculty of International Economics · Major in International Economics.",
            edu_ctq_name: "Tuyên Quang High School for the Gifted",
            edu_ctq: "Graduated with Distinction · Literature Major (Class 34) · National Excellent Student Team in Literature (2022–2023).",
            edu_sec_yr: "Secondary School",
            edu_lqd: "Member of English Team (Grades 6–7) · Member of Literature Team (Grades 8–9).",

            skills_chip: "Chapter II · Hidden Magical Library",
            skills_h2: "Grimoire of Skills",
            sk_lang: "Language Proficiency",
            sk_econ: "Economic Analysis", sk_econ_d: "Macroeconomic forecasting, econometric modeling, market research, and statistical data visualization.",
            sk_biz: "Business Strategy", sk_biz_d: "International trade policy, FDI analysis, corporate finance, and strategic market research.",
            sk_comm: "Communication", sk_comm_d: "Customer care, problem solving, time management, public speaking, and cross-cultural networking.",
            sk_tech: "Software & Tools", sk_tech_d: "MS Office (Advanced Excel, PowerPoint, Word), SPSS, R/Python basics, and digital productivity tools.",
            sk_research: "Research & Writing", sk_research_d: "Academic paper writing, literature review, qualitative & quantitative research methods, and report composition.",

            proj_chip: "Chapter III · Hedge Maze", proj_h2: "Featured Projects",
            proj_b1: "Research", proj_t1: "Global Supply Chain & FDI Shift Analysis",
            proj_d1: "Empirical study examining post-pandemic global trade re-routing and FDI inflows into emerging Southeast Asian economies.",
            proj_b2: "Case Study", proj_t2: "FTU ASEAN Market Expansion",
            proj_d2: "Developed market entry blueprints and financial valuations for tech enterprises expanding across ASEAN regional markets.",
            proj_b3: "Advisory", proj_t3: "FTU Admissions Advisory Platform",
            proj_d3: "Organized admission outreach, file processing, and interactive consultation webinars for thousands of prospective students.",
            proj_link: "View on GitHub →",

            exp_chip: "Chapter IV · Tea Party Garden", exp_h2: "Experience & Activities",
            exp1_t: "Active Member — FTU Forum Student Club",
            exp1_org: "Foreign Trade University Student Forum",
            exp1_b1: "Admissions consultation for annual events: Admission Fair, FTU Open Tour, Bách Khoa Open Day 1 & 2, Admission Webinar.",
            exp1_b2: "Profile processing for Course 63 & 64: gathering, classifying, and answering inquiries from parents and students both online and offline.",
            exp2_t: "Academic & Event Coordinator",
            exp2_org: "Faculty of International Economics, FTU",
            exp2_b1: "Organized academic forums, webinars, and cultural night events for student community development.",
            exp2_b2: "Coordinated media outreach for student business competitions and career development programs.",

            ach_chip: "Chapter V · Royal Garden", ach_h2: "Honors & Activities",
            aw1_t: "1st Prize — Provincial Literature", aw1_d: "First Prize, Grade 11 Provincial Excellent Student Competition in Literature, Tuyên Quang Province.",
            aw2_t: "Consolation Prize — Regional Contest", aw2_d: "Literature prize at the 2022 Northern Coastal & Delta Regional Gifted Schools Competition.",
            aw3_t: "3rd Prize — Provincial Literature", aw3_d: "Third Prize, Grade 12 Provincial Excellent Student Competition in Literature.",
            roles_h3: "📣 Ambassador & Leadership Roles",
            gal_h3: "📸 Photo Gallery", gal_sub: "Click any photo to enlarge.",

            ct_chip: "Chapter VI · Secret Garden at Sunset", ct_h2: "Let's Connect",
            ct_sub: "Step through the looking glass for collaborations, research, or opportunities.",
            ct_email: "Email", ct_phone: "Phone", ct_addr: "Address",
            farewell: '"Curiosity is the beginning of wisdom. Thank you for visiting my Wonderland!" — Trịnh Khánh Linh',
            footer: "Designed with curiosity & magic by Trịnh Khánh Linh © 2026 · Foreign Trade University, Hanoi."
        },
        vi: {
            nav_home: "Trang chủ", nav_about: "Giới thiệu", nav_skills: "Kỹ năng",
            nav_projects: "Dự án", nav_experience: "Kinh nghiệm",
            nav_achievements: "Thành tựu", nav_contact: "Liên hệ",
            music_label: "Nhạc nền",

            hero_chip: "✨ Hành Trình Qua Xứ Sở Thần Tiên",
            hero_role: "Kinh tế Quốc tế",
            hero_school: "Đại học Ngoại thương (FTU)",
            hero_tagline: "Kết nối thị trường toàn cầu, nghiên cứu kinh tế và tầm nhìn chiến lược — từng bước tò mò khám phá.",
            btn_begin: "Bắt đầu Hành trình 🗝️", btn_cv: "Tải CV",
            scroll_hint: "Cuộn để khám phá",

            about_chip: "Chương I · Rừng Phép Thuật",
            about_h2: "Về Bản Thân",
            about_quote: "Sự tò mò là kim chỉ nam của kinh tế học.",
            about_p1: "Mình là Trịnh Khánh Linh, sinh viên năm 3 chuyên ngành Kinh tế Quốc tế tại Đại học Ngoại thương (FTU), Hà Nội. Hành trình học tập gắn liền với niềm đam mê phân tích thương mại toàn cầu, chiến lược tài chính xuyên biên giới và nghiên cứu thị trường.",
            about_p2: "Giống như khám phá Xứ sở diệu kỳ, kinh tế hiện đại đòi hỏi sự tò mò, tư duy sắc bén và bản lĩnh vượt qua lối mòn. Mình luôn nỗ lực ứng dụng lý thuyết vào thực tiễn tạo giá trị.",
            stat_uni: "Đại học Ngoại thương", stat_major: "Kinh tế Quốc tế", stat_loc: "Việt Nam",
            edu_h3: "🎓 Quá Trình Học Vấn",
            edu_ftu: "Sinh viên năm 3 · Khoa Kinh tế quốc tế · Chuyên ngành Kinh tế quốc tế.",
            edu_ctq_name: "THPT Chuyên Tuyên Quang",
            edu_ctq: "Tốt nghiệp loại Giỏi · Chuyên Văn (Khoá 34) · Thành viên Đội tuyển HSG Quốc gia môn Ngữ văn (2022–2023).",
            edu_sec_yr: "THCS",
            edu_lqd: "Thành viên đội tuyển Tiếng Anh (Lớp 6–7) · Đội tuyển Ngữ Văn (Lớp 8–9).",

            skills_chip: "Chương II · Thư Viện Phép Thuật",
            skills_h2: "Cẩm Nang Kỹ Năng",
            sk_lang: "Trình Độ Ngoại Ngữ",
            sk_econ: "Phân Tích Kinh Tế", sk_econ_d: "Dự báo kinh tế vĩ mô, mô hình kinh tế lượng, nghiên cứu thị trường và trực quan hóa dữ liệu.",
            sk_biz: "Chiến Lược Kinh Doanh", sk_biz_d: "Chính sách thương mại quốc tế, phân tích FDI, tài chính doanh nghiệp và nghiên cứu thị trường chiến lược.",
            sk_comm: "Giao Tiếp", sk_comm_d: "Chăm sóc khách hàng, xử lý tình huống, quản lý thời gian, thuyết trình và kết nối đa văn hóa.",
            sk_tech: "Phần Mềm & Công Cụ", sk_tech_d: "Tin học văn phòng (Excel nâng cao, PowerPoint, Word), SPSS, R/Python cơ bản và công cụ năng suất số.",
            sk_research: "Nghiên Cứu & Viết", sk_research_d: "Viết bài học thuật, tổng quan tài liệu, phương pháp nghiên cứu định tính & định lượng, và soạn báo cáo.",

            proj_chip: "Chương III · Mê Cung Hàng Rào", proj_h2: "Dự Án Nổi Bật",
            proj_b1: "Nghiên cứu", proj_t1: "Phân Tích Chuỗi Cung Ứng & Dòng Vốn FDI",
            proj_d1: "Nghiên cứu thực nghiệm đánh giá sự tái cấu trúc tuyến thương mại quốc tế và dòng vốn FDI vào Đông Nam Á.",
            proj_b2: "Tình huống", proj_t2: "Mở Rộng Thị Trường ASEAN - FTU",
            proj_d2: "Xây dựng chiến lược thâm nhập thị trường và định giá tài chính cho doanh nghiệp công nghệ mở rộng khu vực ASEAN.",
            proj_b3: "Tư vấn", proj_t3: "Nền Tảng Tư Vấn Tuyển Sinh FTU",
            proj_d3: "Tổ chức hoạt động hướng nghiệp, xử lý hồ sơ và webinar tư vấn tuyển sinh cho hàng ngàn học sinh.",
            proj_link: "Xem trên GitHub →",

            exp_chip: "Chương IV · Vườn Tiệc Trà", exp_h2: "Kinh Nghiệm & Hoạt Động",
            exp1_t: "Thành viên — CLB Diễn đàn SV FTU Forum",
            exp1_org: "CLB Diễn đàn sinh viên ĐH Ngoại thương",
            exp1_b1: "Tư vấn tuyển sinh các sự kiện thường niên: Ngày hội tuyển sinh, FTU Open Tour, Bách Khoa Open Day 1 & 2, Webinar tuyển sinh.",
            exp1_b2: "Hỗ trợ tuyển sinh Khoá 63, 64: thu nhận & xử lý hồ sơ, giải đáp thắc mắc phụ huynh và học sinh trực tiếp & trực tuyến.",
            exp2_t: "Điều Phối Viên Sự Kiện",
            exp2_org: "Khoa Kinh tế quốc tế — ĐH Ngoại thương",
            exp2_b1: "Tổ chức diễn đàn học thuật, hội thảo chuyên đề và đêm hội văn hóa kết nối sinh viên.",
            exp2_b2: "Điều phối truyền thông cho cuộc thi kinh doanh và chương trình phát triển kỹ năng nghề nghiệp.",

            ach_chip: "Chương V · Vườn Hoàng Gia", ach_h2: "Giải Thưởng & Hoạt Động",
            aw1_t: "Giải Nhất HSG Cấp Tỉnh Văn", aw1_d: "Giải Nhất kỳ thi HSG cấp tỉnh môn Ngữ văn lớp 11, Tỉnh Tuyên Quang.",
            aw2_t: "Giải KK HSG Vùng Duyên Hải & ĐBBB", aw2_d: "Giải Khuyến khích môn Ngữ văn Kỳ thi HSG THPT chuyên khu vực Duyên hải & ĐBBB 2022.",
            aw3_t: "Giải Ba HSG Cấp Tỉnh Văn", aw3_d: "Giải Ba kỳ thi HSG cấp tỉnh môn Ngữ văn lớp 12.",
            roles_h3: "📣 Đại Sứ Truyền Thông & Lãnh Đạo",
            gal_h3: "📸 Thư Viện Hình Ảnh", gal_sub: "Bấm vào hình ảnh để phóng to.",

            ct_chip: "Chương VI · Vườn Bí Mật Lúc Hoàng Hôn", ct_h2: "Kết Nối",
            ct_sub: "Bước qua tấm gương phép thuật để hợp tác học thuật, nghiên cứu hoặc cơ hội nghề nghiệp.",
            ct_email: "Email", ct_phone: "Điện thoại", ct_addr: "Địa chỉ",
            farewell: '"Sự tò mò là khởi đầu của trí tuệ. Cảm ơn bạn đã ghé thăm Wonderland của Linh!" — Trịnh Khánh Linh',
            footer: "Thiết kế với sự tò mò & phép thuật bởi Trịnh Khánh Linh © 2026 · Đại học Ngoại thương, Hà Nội."
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
    const musicIcon = document.getElementById('music-icon');
    let playing = false;

    if (audio) audio.volume = 0;

    function fadeIn() {
        if (!audio) return;
        audio.play().then(() => {
            playing = true;
            musicBtn?.classList.add('playing');
            if (musicIcon) musicIcon.textContent = '⏸';
            let v = 0;
            const t = setInterval(() => {
                v = Math.min(v + 0.015, 0.3);
                audio.volume = v;
                if (v >= 0.3) clearInterval(t);
            }, 100);
        }).catch(() => {});
    }

    function pauseMusic() {
        if (!audio) return;
        audio.pause();
        playing = false;
        musicBtn?.classList.remove('playing');
        if (musicIcon) musicIcon.textContent = '♫';
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

    navLinks?.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger?.classList.remove('open');
            hamburger?.setAttribute('aria-expanded', 'false');
        })
    );

    /* ==========================================
       5. SCROLL: Header, Progress Bar, Home Btn
       ========================================== */
    const header = document.getElementById('site-header');
    const homeBtn = document.getElementById('home-btn');
    const progressBar = document.getElementById('scroll-progress');

    function onScroll() {
        const sy = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        // Header shrink
        header?.classList.toggle('scrolled', sy > 60);

        // Home button
        homeBtn?.classList.toggle('show', sy > 350);

        // Progress bar
        if (progressBar && maxScroll > 0) {
            progressBar.style.width = `${(sy / maxScroll) * 100}%`;
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ==========================================
       6. SCROLL-SPY: Active Nav Link
       ========================================== */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 220) current = s.id;
        });
        navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
    }
    window.addEventListener('scroll', updateActiveLink, { passive: true });

    /* ==========================================
       7. SCROLL-REVEAL (Intersection Observer)
       ========================================== */
    const revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => revealObs.observe(el));
    } else {
        // Fallback: show all
        revealEls.forEach(el => el.classList.add('visible'));
    }

    /* ==========================================
       8. PHOTO LIGHTBOX
       ========================================== */
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCap = document.getElementById('lightbox-caption');
    const lbClose = document.getElementById('lightbox-close');

    document.querySelectorAll('.gal-item').forEach(item => {
        item.addEventListener('click', () => {
            if (!lightbox || !lbImg) return;
            lbImg.src = item.dataset.src;
            lbImg.alt = item.dataset.cap || '';
            if (lbCap) lbCap.textContent = item.dataset.cap || '';
            lightbox.classList.add('open');
        });
    });

    function closeLightbox() {
        lightbox?.classList.remove('open');
    }
    lbClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

    /* ==========================================
       9. WHITE RABBIT SPEECH
       ========================================== */
    const rabbitText = document.getElementById('rabbit-text');
    const speechEN = [
        "Follow me down the rabbit hole! ✨",
        "Curiosity is the compass of economics!",
        "Explore Linh's projects in the Hedge Maze!",
        "Almost at the Royal Garden of Honors!",
        "Step through the looking glass to connect! 🔮"
    ];
    const speechVI = [
        "Hãy cùng mình bước vào Xứ sở diệu kỳ! ✨",
        "Sự tò mò là kim chỉ nam của kinh tế!",
        "Khám phá dự án của Linh trong Mê Cung!",
        "Sắp đến Vườn Hoàng Gia giải thưởng rồi!",
        "Bước qua tấm gương phép thuật để kết nối! 🔮"
    ];

    let sIdx = 0;
    setInterval(() => {
        sIdx = (sIdx + 1) % speechEN.length;
        if (rabbitText) {
            rabbitText.style.opacity = '0';
            setTimeout(() => {
                rabbitText.textContent = lang === 'en' ? speechEN[sIdx] : speechVI[sIdx];
                rabbitText.style.opacity = '1';
            }, 300);
        }
    }, 7000);

    /* ==========================================
       10. FIREFLY PARTICLES CANVAS
       ========================================== */
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let W, H;

        function resize() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const dots = [];
        const count = Math.min(Math.floor(W / 35), 35);
        const colors = ['#F6D383', '#D57ACE', '#1C8988', '#E7B280'];

        for (let i = 0; i < count; i++) {
            dots.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: Math.random() * 2.2 + 0.8,
                c: colors[Math.floor(Math.random() * colors.length)],
                a: Math.random() * 0.5 + 0.15,
                da: (Math.random() - 0.5) * 0.008,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, W, H);
            dots.forEach(d => {
                d.x += d.vx;
                d.y += d.vy;
                d.a += d.da;
                if (d.a <= 0.1 || d.a >= 0.65) d.da *= -1;
                if (d.x < -10) d.x = W + 10;
                if (d.x > W + 10) d.x = -10;
                if (d.y < -10) d.y = H + 10;
                if (d.y > H + 10) d.y = -10;

                ctx.save();
                ctx.globalAlpha = d.a;
                ctx.fillStyle = d.c;
                ctx.shadowBlur = 12;
                ctx.shadowColor = d.c;
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
            requestAnimationFrame(drawParticles);
        }

        // Respect reduced motion
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            drawParticles();
        }
    }

});