// ==========================================================================
// LÊ NGUYÊN - INTERACTIVE ANIMATION & LOGIC SCRIPT
// Features: 3D Mouse Tilt, Scroll Reveal, Tech Ticker, Tab Switching & Theme Toggle
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------------------
  // 1. THEME SWITCHER (LIGHT & DARK MODE)
  // ------------------------------------------------------------------------
  const themeToggle = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem("ln_portfolio_theme") || "light";
  htmlEl.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = htmlEl.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      htmlEl.setAttribute("data-theme", next);
      localStorage.setItem("ln_portfolio_theme", next);
    });
  }

  // ------------------------------------------------------------------------
  // 2. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach((el) => el.classList.add("revealed"));
  }

  // ------------------------------------------------------------------------
  // 3. 3D MOUSE TILT EFFECT ON CARDS
  // ------------------------------------------------------------------------
  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.1s ease-out";
    });
  });

  // ------------------------------------------------------------------------
  // 4. ABOUT_ME.EXE TABS CONTROLLER (bio.md, education.md, location.md)
  // ------------------------------------------------------------------------
  const fileItems = document.querySelectorAll(".dir-file-item");
  const viewTabs = document.querySelectorAll(".file-view-tab");
  const windowTitle = document.getElementById("os-window-title");
  const pathText = document.getElementById("os-path-text");

  const fileMetadata = {
    bio: {
      name: "BIO.MD",
      path: "C:\\portfolio\\about_me\\bio.md"
    },
    education: {
      name: "EDUCATION.MD",
      path: "C:\\portfolio\\about_me\\education.md"
    },
    experience: {
      name: "EXPERIENCE.MD",
      path: "C:\\portfolio\\about_me\\experience.md"
    },
    location: {
      name: "LOCATION.MD",
      path: "C:\\portfolio\\about_me\\location.md"
    }
  };

  fileItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-file");

      fileItems.forEach((f) => f.classList.remove("active"));
      item.classList.add("active");

      if (fileMetadata[target]) {
        if (windowTitle) {
          windowTitle.textContent = `ABOUT_ME.EXE - ${fileMetadata[target].name}`;
        }
        if (pathText) {
          pathText.textContent = fileMetadata[target].path;
        }
      }

      viewTabs.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.id === `view-${target}`) {
          tab.classList.add("active");
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 5. SCROLLSPY & ACTIVE LINK BRACKET
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const height = current.offsetHeight;
      const top = current.offsetTop - 140;
      const id = current.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("data-nav") === id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  // ------------------------------------------------------------------------
  // 6. MOBILE MENU
  // ------------------------------------------------------------------------
  const mobileBtn = document.getElementById("menu-toggle-mobile");
  const navMenu = document.getElementById("site-nav");

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach((l) => {
      l.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // ------------------------------------------------------------------------
  // 7. INTERACTIVE CONTACT MODALS (GMAIL & TELEPHONE)
  // ------------------------------------------------------------------------
  const emailModal = document.getElementById("email-modal");
  const phoneModal = document.getElementById("phone-modal");
  const emailTriggers = document.querySelectorAll(".trigger-email-modal");
  const phoneTriggers = document.querySelectorAll(".trigger-phone-modal");

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");
    // Only restore body scroll if no other modals are active
    if (!document.querySelector(".modal-overlay.active")) {
      document.body.style.overflow = "";
    }
  }

  // Trigger opens
  emailTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(emailModal);
    });
  });

  phoneTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(phoneModal);
    });
  });

  // Close buttons & overlay clicks
  [emailModal, phoneModal].forEach((modal) => {
    if (!modal) return;

    modal.addEventListener("click", (e) => {
      // Clicked on overlay background
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    const closeBtns = modal.querySelectorAll(".modal-close-btn");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal(modal);
      });
    });
  });

  // ESC key to close
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(emailModal);
      closeModal(phoneModal);
    }
  });

  // Clipboard Copy with interactive feedback
  function copyTextToClipboard(text, btnElement, labelElement, successText, originalText) {
    navigator.clipboard.writeText(text).then(() => {
      btnElement.classList.add("copied");
      if (labelElement) labelElement.textContent = successText;

      setTimeout(() => {
        btnElement.classList.remove("copied");
        if (labelElement) labelElement.textContent = originalText;
      }, 2500);
    }).catch((err) => {
      console.error("Copy failed: ", err);
    });
  }

  const btnCopyEmail = document.getElementById("btn-copy-email");
  const copyEmailLabel = document.getElementById("copy-email-label");
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener("click", () => {
      copyTextToClipboard(
        "nguyenle.ce191110@gmail.com",
        btnCopyEmail,
        copyEmailLabel,
        "✓ Đã sao chép email vào bộ nhớ tạm!",
        "Sao Chép Địa Chỉ Email"
      );
    });
  }

  const btnCopyPhone = document.getElementById("btn-copy-phone");
  const copyPhoneLabel = document.getElementById("copy-phone-label");
  if (btnCopyPhone) {
    btnCopyPhone.addEventListener("click", () => {
      copyTextToClipboard(
        "0941041650",
        btnCopyPhone,
        copyPhoneLabel,
        "✓ Đã sao chép số điện thoại!",
        "Sao Chép Số Điện Thoại"
      );
    });
  }

  // ------------------------------------------------------------------------
  // 8. BACK TO TOP CONTROLLER
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 380) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      playSfx("tab");
    });
  }

  // ------------------------------------------------------------------------
  // 9. HIGH-TECH WEB AUDIO SYNTHESIZER (UI SFX)
  // ------------------------------------------------------------------------
  let audioCtx = null;
  let isSoundEnabled = localStorage.getItem("ln_portfolio_sfx") === "on";
  const soundToggleBtn = document.getElementById("sound-toggle");

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  if (soundToggleBtn) {
    if (isSoundEnabled) {
      soundToggleBtn.classList.add("active");
    }

    soundToggleBtn.addEventListener("click", () => {
      initAudio();
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem("ln_portfolio_sfx", isSoundEnabled ? "on" : "off");
      soundToggleBtn.classList.toggle("active", isSoundEnabled);

      if (isSoundEnabled) {
        playSfx("open");
      }
    });
  }

  function playSfx(type = "click") {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === "click") {
        // Sharp high-tech tactile click
        osc.type = "sine";
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.035);

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

        osc.start(now);
        osc.stop(now + 0.035);
      } else if (type === "tab") {
        // Modern UI futuristic blip
        osc.type = "triangle";
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(980, now + 0.06);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === "open") {
        // Sci-Fi Power-up / Modal open chime
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch (e) {
      console.warn("Audio playback error:", e);
    }
  }

  // Bind interactive SFX clicks to buttons and tabs
  const interactiveSfxElements = document.querySelectorAll(
    ".dir-file-item, .nav-link, .theme-toggle-btn, .trigger-email-modal, .trigger-phone-modal, .btn-hero-primary, .btn-hero-download, .btn-modal-action, .connect-btn"
  );

  interactiveSfxElements.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("dir-file-item")) {
        playSfx("tab");
      } else if (el.classList.contains("trigger-email-modal") || el.classList.contains("trigger-phone-modal")) {
        playSfx("open");
      } else {
        playSfx("click");
      }
    });
  });
});
