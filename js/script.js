/* --- WONDERLAND INTERACTIVE PORTFOLIO SCRIPT --- */
/* For Trịnh Khánh Linh - Foreign Trade University (FTU) */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. BILINGUAL TRANSLATION DICTIONARY (EN & VI)
    // ==========================================
    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_experience: "Experience",
            nav_achievements: "Achievements",
            nav_contact: "Contact",
            music_text: "Music",
            hero_badge: "✨ A Journey Through Wonderland",
            hero_major: "International Economics Student",
            hero_school: "Foreign Trade University, Hanoi (FTU)",
            hero_tagline: "Bridging global market dynamics, economic research, and strategic vision with a touch of curiosity.",
            btn_begin: "Begin Journey 🗝️",
            btn_contact: "Get in Touch",
            scroll_down: "Scroll to explore Wonderland",

            about_tag: "Chapter I • Enchanted Forest",
            about_title: "About Me & Education",
            about_heading: "Curiosity is the compass of economics.",
            about_desc1: "I am Trịnh Khánh Linh, a 3rd-year undergraduate student majoring in International Economics at Foreign Trade University (FTU), Hanoi. My academic path is driven by a deep fascination with global trade dynamics, market analysis, and economic strategic planning.",
            about_desc2: "Much like exploring Wonderland, navigating modern economics demands curiosity, analytical rigor, and the courage to venture beyond conventional perspectives. I am dedicated to applying academic theories to create real-world impact.",
            hl_uni: "Foreign Trade University",
            hl_major: "International Economics",
            hl_loc: "Based in Vietnam",

            edu_title: "🎓 Academic Background",
            edu_ftu_desc: "3rd-year Student • Faculty of International Economics • Major in International Economics.",
            edu_ctq_desc: "Graduated with Distinction • Literature Major (Class 34) • National Excellent Student Team Member in Literature (2022 - 2023).",
            edu_lqd_desc: "Member of English Team (Grades 6 & 7) • Member of Literature Team (Grades 8 & 9).",

            skills_tag: "Chapter II • Hidden Magical Library",
            skills_title: "Magical Grimoire of Skills",
            skill_lang_title: "Language Proficiency",
            skill_econ_title: "Economic & Market Analysis",
            skill_econ_desc: "Macroeconomic forecasting, econometric modeling, market research, and statistical data visualization.",
            skill_biz_title: "Business & Strategy",
            skill_biz_desc: "International trade policy, FDI flow evaluation, corporate finance principles, and strategic market research.",
            skill_comm_title: "Communication & Soft Skills",
            skill_comm_desc: "Customer care (CSKH), problem solving, time management, public speaking, and cross-cultural networking.",
            skill_tech_title: "Software & Office Tools",
            skill_tech_desc: "MS Office (Advanced Excel, PowerPoint, Word), SPSS, basic analytical software, and digital workspace tools.",

            projects_tag: "Chapter III • Hedge Maze",
            projects_title: "Featured Research & Projects",
            proj_badge1: "Research Paper",
            proj_title1: "Global Supply Chain & FDI Shift Analysis",
            proj_desc1: "Empirical study examining post-pandemic global trade re-routing and foreign direct investment (FDI) inflows into emerging Southeast Asian economies.",
            proj_badge2: "Business Strategy",
            proj_title2: "FTU ASEAN Expansion Case Study",
            proj_desc2: "Formulated market entry blueprints and financial valuations for tech enterprises expanding across regional ASEAN markets.",
            proj_badge3: "Advisory Project",
            proj_title3: "FTU Annual Admissions Advisory Platform",
            proj_desc3: "Organized admission outreach, file processing, and interactive consultation webinars for thousands of prospective students and parents.",
            btn_github: "GitHub Repository",

            exp_tag: "Chapter IV • Tea Party Garden",
            exp_title: "Work & Extracurricular Experience",
            exp1_role: "Active Member — FTU Forum Student Club",
            exp1_org: "Foreign Trade University Student Forum Club",
            exp1_bullet1: "Participated in admissions consultation for major annual events organized by FTU Training Management Department: Admission Fair, FTU Open Tour, Bách Khoa Open Day 1 & 2, Admission Webinar.",
            exp1_bullet2: "Supported admission activities for Course 63 and Course 64: gathered, classified, and processed admission profiles; answered inquiries from parents and prospective students both online and offline.",
            exp2_role: "Academic & Event Coordinator",
            exp2_org: "Faculty of International Economics, FTU",
            exp2_bullet1: "Organized academic forums, webinars, and cultural night events for student community development.",
            exp2_bullet2: "Coordinated media outreach for student business competitions and career development programs.",

            ach_tag: "Chapter V • Royal Garden",
            ach_title: "Honors, Competitions & Activities Gallery",
            ach_item1_title: "1st Prize — Provincial Literature Contest",
            ach_item1_desc: "Awarded First Prize in Grade 11 Provincial Excellent Student Competition in Literature (Tuyên Quang Province).",
            ach_item2_title: "Consolation Prize — Regional HSG Contest",
            ach_item2_desc: "Consolation Prize in Literature at the 2022 Northern Coastal and Delta Regional Gifted Schools Competition.",
            ach_item3_title: "3rd Prize — Provincial Literature Contest",
            ach_item3_desc: "Awarded Third Prize in Grade 12 Provincial Excellent Student Competition in Literature.",

            act_title: "📣 Media Ambassador & Leadership Roles",
            gallery_title: "📸 Activities & Events Photo Gallery",
            gallery_subtitle: "Click any image to view full screen.",

            contact_tag: "Chapter VI • Secret Garden at Sunset",
            contact_title: "Step Through the Looking Glass",
            contact_subtitle: "Let's connect for academic collaborations, economic research, or professional opportunities.",
            lbl_email: "Email",
            lbl_phone: "Phone",
            lbl_address: "Address",
            lbl_github: "GitHub Repository",
            farewell_msg: '"Curiosity is the beginning of wisdom. Thank you for visiting my Wonderland journey!" — Trịnh Khánh Linh',
            footer_text: "Designed with curiosity & magic by Trịnh Khánh Linh © 2026. Foreign Trade University, Hanoi."
        },
        vi: {
            nav_home: "Trang chủ",
            nav_about: "Giới thiệu",
            nav_skills: "Kỹ năng",
            nav_projects: "Dự án",
            nav_experience: "Kinh nghiệm",
            nav_achievements: "Thành tựu",
            nav_contact: "Liên hệ",
            music_text: "Nhạc nền",
            hero_badge: "✨ Hành trình qua Xứ sở thần tiên",
            hero_major: "Sinh viên Kinh tế Quốc tế",
            hero_school: "Trường Đại học Ngoại thương Hà Nội (FTU)",
            hero_tagline: "Kết nối thị trường toàn cầu, nghiên cứu kinh tế và tầm nhìn chiến lược với niềm đam mê khám phá.",
            btn_begin: "Bắt đầu hành trình 🗝️",
            btn_contact: "Liên hệ ngay",
            scroll_down: "Cuộn để khám phá Xứ sở diệu kỳ",

            about_tag: "Chương I • Rừng Phép Thuật",
            about_title: "Về Bản Thân & Học Vấn",
            about_heading: "Sự tò mò là kim chỉ nam của kinh tế học.",
            about_desc1: "Mình là Trịnh Khánh Linh, sinh viên năm 3 chuyên ngành Kinh tế Quốc tế tại Đại học Ngoại thương (FTU) Hà Nội. Hành trình học tập của mình gắn liền với niềm đam mê phân tích thương mại toàn cầu, nghiên cứu thị trường và quy hoạch chiến lược kinh tế.",
            about_desc2: "Giống như việc khám phá xứ sở diệu kỳ, bức tranh kinh tế đòi hỏi sự tò mò, tư duy phản biện sắc bén và bản lĩnh vượt qua các giới hạn truyền thống. Mình luôn nỗ lực ứng dụng lý thuyết vào thực tiễn tạo giá trị bền vững.",
            hl_uni: "Đại học Ngoại thương",
            hl_major: "Kinh tế Quốc tế",
            hl_loc: "Sinh sống tại Việt Nam",

            edu_title: "🎓 Quá Trình Học Vấn",
            edu_ftu_desc: "Sinh viên năm 3 • Khoa Kinh tế quốc tế • Chuyên ngành Kinh tế quốc tế.",
            edu_ctq_desc: "Tốt nghiệp loại Giỏi • Chuyên Văn (Khoá 34) • Thành viên Đội tuyển HSG Quốc gia môn Ngữ văn (2022 - 2023).",
            edu_lqd_desc: "Thành viên đội tuyển Tiếng Anh (Lớp 6, 7) • Thành viên đội tuyển Ngữ Văn (Lớp 8, 9).",

            skills_tag: "Chương II • Thư Viện Phép Thuật",
            skills_title: "Cẩm Nang Kỹ Năng Chuyên Sâu",
            skill_lang_title: "Trình Độ Ngoại Ngữ",
            skill_econ_title: "Phân Tích Kinh Tế & Thị Trường",
            skill_econ_desc: "Dự báo kinh tế vĩ mô, mô hình kinh tế lượng, nghiên cứu thị trường và trực quan hóa dữ liệu thống kê.",
            skill_biz_title: "Chiến Lược & Kinh Doanh",
            skill_biz_desc: "Chính sách thương mại quốc tế, đánh giá dòng vốn FDI, nguyên lý tài chính doanh nghiệp và nghiên cứu thị trường.",
            skill_comm_title: "Giao Tiếp & Kỹ Năng Mềm",
            skill_comm_desc: "Chăm sóc khách hàng (CSKH), xử lý tình huống, quản lý thời gian, thuyết trình và kết nối đa văn hóa.",
            skill_tech_title: "Tin Học & Công Cụ Văn Phòng",
            skill_tech_desc: "Tin học văn phòng (Excel nâng cao, PowerPoint, Word), phần mềm SPSS, công cụ phân tích và làm việc số.",

            projects_tag: "Chương III • Mê Cung Hàng Rào",
            projects_title: "Dự Án Nổi Bật & Nghiên Cứu",
            proj_badge1: "Nghiên cứu khoa học",
            proj_title1: "Phân Tích Chuỗi Cung Ứng & Dòng Vốn FDI",
            proj_desc1: "Dự án nghiên cứu thực nghiệm đánh giá sự tái cấu trúc tuyến thương mại quốc tế và dòng vốn đầu tư trực tiếp nước ngoài vào Đông Nam Á.",
            proj_badge2: "Chiến lược kinh doanh",
            proj_title2: "Nghiên Cứu Tình Huống Mở Rộng ASEAN - FTU",
            proj_desc2: "Xây dựng chiến lược thâm nhập thị trường và định giá tài chính cho các doanh nghiệp công nghệ mở rộng khu vực ASEAN.",
            proj_badge3: "Dự án tư vấn",
            proj_title3: "Nền Tảng Tư Vấn Tuyển Sinh FTU Forum",
            proj_desc3: "Tổ chức chuỗi hoạt động hướng nghiệp, tiếp nhận xử lý hồ sơ và webinar tư vấn tuyển sinh cho hàng ngàn học sinh phụ huynh.",
            btn_github: "Kho lưu trữ GitHub",

            exp_tag: "Chương IV • Vườn Tiệc Trà",
            exp_title: "Kinh Nghiệm Làm Việc & Hoạt Động",
            exp1_role: "Thành viên — CLB Diễn đàn sinh viên FTU Forum",
            exp1_org: "CLB Diễn đàn sinh viên Trường Đại học Ngoại thương",
            exp1_bullet1: "Tham gia tư vấn trong các sự kiện thường niên của Phòng Quản lý đào tạo: Ngày hội tuyển sinh, FTU Open Tour, Bách Khoa Open Day 1, 2, Webinar Tư vấn tuyển sinh...",
            exp1_bullet2: "Hỗ trợ hoạt động tuyển sinh cho Khoá 63, 64: thu nhận & xử lý hồ sơ xét tuyển, giải đáp thắc mắc cho phụ huynh và học sinh online & offline.",
            exp2_role: "Điều Phối Viên Sự Kiện & Học Thuật",
            exp2_org: "Khoa Kinh tế quốc tế — ĐH Ngoại thương",
            exp2_bullet1: "Tổ chức các diễn đàn học thuật, hội thảo chuyên đề và đêm hội văn hóa kết nối sinh viên.",
            exp2_bullet2: "Điều phối truyền thông cho các cuộc thi kinh doanh và chương trình phát triển kỹ năng nghề nghiệp.",

            ach_tag: "Chương V • Vườn Hoàng Gia",
            ach_title: "Giải Thưởng & Thư Viện Hoạt Động",
            ach_item1_title: "Giải Nhất HSG Cấp Tỉnh Môn Ngữ Văn",
            ach_item1_desc: "Đạt Giải Nhất kỳ thi chọn Học sinh giỏi cấp tỉnh môn Ngữ văn lớp 11 (Tỉnh Tuyên Quang).",
            ach_item2_title: "Giải Khuyến Khích HSG Vùng Duyên Hải & ĐBBB",
            ach_item2_desc: "Đạt Giải Khuyến khích môn Ngữ văn Kỳ thi chọn HSG các trường THPT chuyên khu vực Duyên hải và Đồng bằng Bắc Bộ năm 2022.",
            ach_item3_title: "Giải Ba HSG Cấp Tỉnh Môn Ngữ Văn",
            ach_item3_desc: "Đạt Giải Ba kỳ thi chọn Học sinh giỏi cấp tỉnh môn Ngữ văn lớp 12.",

            act_title: "📣 Đại Sứ Truyền Thông & Vai Trò Lãnh Đạo",
            gallery_title: "📸 Thư Viện Hình Ảnh Hoạt Động",
            gallery_subtitle: "Bấm vào hình ảnh bất kỳ để xem kích thước đầy đủ.",

            contact_tag: "Chương VI • Vườn Bí Mật Lúc Hoàng Hôn",
            contact_title: "Bước Qua Tấm Gương Phép Thuật",
            contact_subtitle: "Hãy kết nối để hợp tác học thuật, nghiên cứu kinh tế hoặc trao đổi cơ hội nghề nghiệp.",
            lbl_email: "Email",
            lbl_phone: "Điện thoại",
            lbl_address: "Địa chỉ",
            lbl_github: "Kho lưu trữ GitHub",
            farewell_msg: '"Sự tò mò là điểm khởi đầu của trí tuệ. Cảm ơn bạn đã ghé thăm hành trình Wonderland của Linh!" — Trịnh Khánh Linh',
            footer_text: "Thiết kế với sự tò mò & phép thuật bởi Trịnh Khánh Linh © 2026. Trường Đại học Ngoại thương Hà Nội."
        }
    };

    // ==========================================
    // 2. LANGUAGE SWITCHER LOGIC
    // ==========================================
    let currentLang = localStorage.getItem('linh_portfolio_lang') || 'en';
    const langToggleBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('linh_portfolio_lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        langLabel.textContent = lang === 'en' ? 'VI' : 'EN';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    updateLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            updateLanguage(currentLang === 'en' ? 'vi' : 'en');
        });
    }

    // ==========================================
    // 3. BACKGROUND MUSIC CONTROLLER
    // ==========================================
    const bgMusic = document.getElementById('bg-music');
    const musicToggleBtn = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    const beginJourneyBtn = document.getElementById('begin-journey');
    let isPlaying = false;

    if (bgMusic) {
        bgMusic.volume = 0.3; // Default 30% volume
    }

    function playAudioWithFadeIn() {
        if (!bgMusic) return;
        bgMusic.volume = 0;
        bgMusic.play().then(() => {
            isPlaying = true;
            if (musicIcon) musicIcon.textContent = '⏸';
            
            // Smooth 2s fade-in to 30% volume
            let vol = 0;
            const fadeInterval = setInterval(() => {
                vol += 0.03;
                if (vol >= 0.3) {
                    vol = 0.3;
                    clearInterval(fadeInterval);
                }
                bgMusic.volume = vol;
            }, 200);
        }).catch(err => {
            console.log("Audio autoplay restricted by browser policies", err);
        });
    }

    function pauseAudio() {
        if (!bgMusic) return;
        bgMusic.pause();
        isPlaying = false;
        if (musicIcon) musicIcon.textContent = '▶';
    }

    if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', () => {
            if (isPlaying) {
                pauseAudio();
            } else {
                playAudioWithFadeIn();
            }
        });
    }

    if (beginJourneyBtn) {
        beginJourneyBtn.addEventListener('click', () => {
            if (!isPlaying) {
                playAudioWithFadeIn();
            }
        });
    }

    // ==========================================
    // 4. MOBILE NAVIGATION TOGGLE
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 5. SCROLL HEADER & HOME BUTTON VISIBILITY
    // ==========================================
    const header = document.getElementById('header');
    const homeBtn = document.getElementById('home-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'none';
        }

        if (window.scrollY > 300) {
            if (homeBtn) homeBtn.classList.add('visible');
        } else {
            if (homeBtn) homeBtn.classList.remove('visible');
        }
    });

    // ==========================================
    // 6. SCROLL-SPY ACTIVE LINK HIGHLIGHT
    // ==========================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            if (window.scrollY >= (secTop - 200)) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // 7. RABBIT MASCOT SPEECH & INTERACTION
    // ==========================================
    const rabbitSpeech = document.getElementById('rabbit-speech');
    const speechesEN = [
        "Follow me down the rabbit hole!",
        "Curiosity is the compass of economics!",
        "Explore Linh's academic projects!",
        "Discover the Royal Garden of honors!",
        "Let's step through the looking glass!"
    ];
    const speechesVI = [
        "Hãy cùng mình bước vào Xứ sở diệu kỳ!",
        "Sự tò mò là kim chỉ nam của kinh tế!",
        "Khám phá các dự án nghiên cứu của Linh!",
        "Ghé thăm Vườn Hoàng Gia tích lũy thành tích!",
        "Bước qua tấm gương phép thuật để kết nối!"
    ];

    let speechIdx = 0;
    setInterval(() => {
        speechIdx = (speechIdx + 1) % speechesEN.length;
        if (rabbitSpeech) {
            rabbitSpeech.style.opacity = '0';
            setTimeout(() => {
                rabbitSpeech.textContent = (currentLang === 'en') ? speechesEN[speechIdx] : speechesVI[speechIdx];
                rabbitSpeech.style.opacity = '1';
            }, 300);
        }
    }, 8000);

    // ==========================================
    // 8. PHOTO GALLERY LIGHTBOX MODAL
    // ==========================================
    const lightboxModal = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-src');
            const caption = item.getAttribute('data-caption');
            if (lightboxModal && lightboxImg) {
                lightboxImg.src = src;
                lightboxCaption.textContent = caption || '';
                lightboxModal.classList.add('active');
                lightboxModal.setAttribute('aria-hidden', 'false');
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
            lightboxModal.setAttribute('aria-hidden', 'true');
        });
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.remove('active');
                lightboxModal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // ==========================================
    // 9. BACKGROUND FIREFLIES & MAGIC PARTICLES
    // ==========================================
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = Math.min(Math.floor(width / 30), 40);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2.5 + 1,
                color: Math.random() > 0.5 ? '#F6D383' : '#D57ACE',
                alpha: Math.random() * 0.7 + 0.2,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6
            });
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

});