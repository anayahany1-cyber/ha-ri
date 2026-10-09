/**
 * POMODORO STUDIO - LOFI STUDY & FOCUS SANCTUARY
 * Enhanced with Bilingual (ID/EN) Support, Centered Typography,
 * Smart Task Auto-Rotation, and Curated Spotify Embed Integration
 */

// ==========================================
// 1. DICTIONARIES & TRANSLATIONS (I18N)
// ==========================================

const I18N = {
  id: {
    appTitle: "POMODORO STUDIO",
    appSubtitle: "Lofi Focus Sanctuary",
    // Timer
    focus: "Fokus",
    shortBreak: "Istirahat Singkat",
    longBreak: "Istirahat Panjang",
    start: "MULAI",
    pause: "JEDA",
    skip: "LEWATI",
    reset: "RESET",
    resetConfirmTitle: "Reset timer?",
    resetConfirmMessage: "Waktu sesi saat ini akan dikembalikan ke durasi awal. Kamu yakin ingin melanjutkan?",
    resetConfirmCancel: "Tidak",
    resetConfirmAccept: "Ya, reset",
    sessionPrefix: "Sesi",
    sessionOf: "dari",
    shortBreakMsg: "Istirahat sejenak & regangkan badanmu 🌿",
    longBreakMsg: "Istirahat penuh untuk menyegarkan fokus ☕",
    // Tasks
    currentFocus: "FOKUS SAAT INI",
    allTasksDone: "Semua tugas selesai! Klik untuk menambah tugas baru ✨",
    setFocusPrompt: "Klik untuk menentukan tugas fokus 📌",
    tasksTitle: "Target & Daftar Tugas",
    tasksRemaining: "tugas tersisa",
    newTaskPlaceholder: "Tulis tugas fokus baru...",
    addTaskBtn: "Tambah",
    taskMainTitle: "Tugas Utama",
    taskSetMain: "Jadikan Tugas Utama",
    taskDelete: "Hapus Tugas",
    taskCompletedToast: "Tugas diselesaikan! Beralih ke tugas berikutnya 🎉",
    allCompletedToast: "Semua tugas telah diselesaikan! Luar biasa 🌟",
    taskAddedToast: "Tugas baru berhasil ditambahkan ✨",
    taskPinnedToast: "Tugas utama difokuskan 📌",
    // Home Slide
    goodMorning: "Selamat Pagi",
    goodAfternoon: "Selamat Siang",
    goodEvening: "Selamat Sore",
    goodNight: "Selamat Malam",
    streakDaily: "Streak Harian",
    consecutiveDays: "Hari Berturut-turut",
    todayFocus: "Fokus Hari Ini",
    targetMinutesLabel: "Target",
    completedSessions: "Sesi Selesai",
    successfulCycles: "Siklus Sukses",
    dailyTargetProgress: "Progres Target Harian",
    achieved: "tercapai",
    startFocusNow: "Mulai Fokus Belajar Sekarang",
    // Settings
    settingsTitle: "Pengaturan Studio",
    settingsSubtitle: "Sesuaikan bahasa, tema visual, pewaktu, dan profil",
    tabThemes: "Tampilan & Tema",
    tabTimer: "Jadwal & Waktu",
    tabStats: "Statistik & Streak",
    tabAccount: "Akun & Bahasa",
    // Settings - Themes
    themeCollectionTitle: "Koleksi Tema Visual & Wallpaper",
    themeLivePreview: "Pratinjau Langsung",
    themeDescription: "Pilih dari 5 wallpaper asli (Fuji, Lofi Room, Balcony, Forest, Autumn) atau gradien estetik murni.",
    glassSettingsTitle: "Kustomisasi Kejernihan Glassmorphism",
    bgBlurLabel: "Efek Blur Latar Belakang",
    bgDimLabel: "Kegelapan Overlay (Kontras Teks)",
    // Settings - Timer
    timerDurationTitle: "Durasi Waktu (Menit)",
    focusDurationLabel: "Durasi Fokus",
    shortBreakLabel: "Istirahat Singkat",
    longBreakLabel: "Istirahat Panjang",
    intervalTitle: "Interval & Otomatisasi Siklus",
    longBreakIntervalLabel: "Interval Istirahat Panjang",
    longBreakIntervalDesc: "Berapa sesi fokus sebelum jeda panjang",
    autoStartBreakLabel: "Mulai Istirahat Otomatis",
    autoStartBreakDesc: "Langsung mulai hitungan mundur istirahat",
    autoStartFocusLabel: "Mulai Fokus Otomatis",
    autoStartFocusDesc: "Mulai sesi fokus baru saat jeda selesai",
    alarmSoundTitle: "Suara Bel Alarm (Web Audio Synth)",
    testSoundBtn: "Test Suara",
    saveTimerBtn: "Simpan Pengaturan Jadwal",
    // Settings - Stats
    statsStreakToday: "Streak Hari Ini",
    statsTotalMinutes: "Total Fokus Hari Ini",
    statsTotalSessions: "Sesi Pomodoro",
    stats7DaysTitle: "Aktivitas Fokus 7 Hari Terakhir",
    stats7DaysSubtitle: "Menit per hari",
    statsRecentLogs: "Riwayat Sesi Terakhir",
    statsNoLogs: "Belum ada riwayat sesi. Mulai sesi Pomodoro untuk mencatat fokusmu!",
    resetStatsBtn: "Reset Data Statistik",
    // Settings - Account & Language
    languageSectionTitle: "Pilihan Bahasa (Language)",
    selectLanguageLabel: "Bahasa Tampilan",
    selectAvatarLabel: "Pilih Avatar Profil",
    usernameLabel: "Nama Pengguna",
    dailyGoalLabel: "Target Fokus Harian (Menit)",
    mottoLabel: "Motto / Afirmasi Belajar",
    saveProfileBtn: "Simpan Pengaturan Profil & Bahasa",
    // Audio & Spotify Drawer
    drawerTitle: "Studio Audio & Musik",
    drawerSubtitle: "Spotify Lofi & Sintesis Suara Alam",
    tabAmbient: "🌧️ Suara Alam",
    tabSpotify: "🎧 Pemutar Spotify",
    spotifyPresetsTitle: "PLAYLIST LOFI TERPILIH",
    spotifyCustomTitle: "LINK PLAYLIST / LAGU SENDIRI",
    spotifyInputPlaceholder: "Tempel link Spotify (playlist/album/lagu)...",
    spotifyLoadBtn: "Muat",
    spotifyHint: "💡 Tips: Kamu bisa memutar lagu Spotify bersamaan dengan suara hujan/hutan di tab Suara Alam untuk suasana lofi maksimal!",
    masterVolumeLabel: "Master Volume Suara Alam",
    muteAllBtn: "Mute All",
    unmuteBtn: "Unmute",
    soundPresetsTitle: "PRESET SUARA CEPAT",
    individualMixerTitle: "MIXER SUARA INDIVIDUAL",
    stopAllSounds: "Hentikan Semua Suara",
    // Fullscreen
    fullscreenTitle: "Layar Penuh (Fullscreen)",
    exitFullscreenTitle: "Keluar Layar Penuh"
  },
  en: {
    appTitle: "POMODORO STUDIO",
    appSubtitle: "Lofi Focus Sanctuary",
    // Timer
    focus: "Focus",
    shortBreak: "Short Break",
    longBreak: "Long Break",
    start: "START",
    pause: "PAUSE",
    skip: "SKIP",
    reset: "RESET",
    resetConfirmTitle: "Reset timer?",
    resetConfirmMessage: "The current session will return to its starting duration. Are you sure you want to continue?",
    resetConfirmCancel: "No",
    resetConfirmAccept: "Yes, reset",
    sessionPrefix: "Session",
    sessionOf: "of",
    shortBreakMsg: "Take a breath & stretch your body 🌿",
    longBreakMsg: "Deep break to refresh your mind ☕",
    // Tasks
    currentFocus: "CURRENT FOCUS",
    allTasksDone: "All tasks completed! Click to add a new task ✨",
    setFocusPrompt: "Click to set a focus task 📌",
    tasksTitle: "Goals & Checklist",
    tasksRemaining: "tasks remaining",
    newTaskPlaceholder: "Type a new focus task...",
    addTaskBtn: "Add",
    taskMainTitle: "Main Task",
    taskSetMain: "Set as Main Task",
    taskDelete: "Delete Task",
    taskCompletedToast: "Task completed! Switched to next task 🎉",
    allCompletedToast: "All tasks completed! Excellent job 🌟",
    taskAddedToast: "New task added successfully ✨",
    taskPinnedToast: "Main task focused 📌",
    // Home Slide
    goodMorning: "Good Morning",
    goodAfternoon: "Good Afternoon",
    goodEvening: "Good Evening",
    goodNight: "Good Night",
    streakDaily: "Daily Streak",
    consecutiveDays: "Days in a Row",
    todayFocus: "Today's Focus",
    targetMinutesLabel: "Target",
    completedSessions: "Completed Sessions",
    successfulCycles: "Successful Cycles",
    dailyTargetProgress: "Daily Target Progress",
    achieved: "achieved",
    startFocusNow: "Start Focus Session Now",
    // Settings
    settingsTitle: "Studio Settings",
    settingsSubtitle: "Customize language, theme, timer, stats, and profile",
    tabThemes: "Appearance & Themes",
    tabTimer: "Schedule & Timer",
    tabStats: "Stats & Streak",
    tabAccount: "Account & Language",
    // Settings - Themes
    themeCollectionTitle: "Visual Themes & Wallpapers",
    themeLivePreview: "Live Preview",
    themeDescription: "Choose from 5 authentic wallpapers (Fuji, Lofi Room, Balcony, Forest, Autumn) or pure aesthetic gradients.",
    glassSettingsTitle: "Glassmorphism Clarity Customization",
    bgBlurLabel: "Background Blur Effect",
    bgDimLabel: "Overlay Darkness (Text Contrast)",
    // Settings - Timer
    timerDurationTitle: "Timer Durations (Minutes)",
    focusDurationLabel: "Focus Duration",
    shortBreakLabel: "Short Break",
    longBreakLabel: "Long Break",
    intervalTitle: "Cycles & Automation",
    longBreakIntervalLabel: "Long Break Interval",
    longBreakIntervalDesc: "How many focus sessions before a long break",
    autoStartBreakLabel: "Auto-start Breaks",
    autoStartBreakDesc: "Immediately start break countdown",
    autoStartFocusLabel: "Auto-start Focus",
    autoStartFocusDesc: "Start new focus session when break finishes",
    alarmSoundTitle: "Alarm Bell Sound (Web Audio Synth)",
    testSoundBtn: "Test Sound",
    saveTimerBtn: "Save Timer Settings",
    // Settings - Stats
    statsStreakToday: "Current Streak",
    statsTotalMinutes: "Total Focus Today",
    statsTotalSessions: "Pomodoro Sessions",
    stats7DaysTitle: "Focus Activity Last 7 Days",
    stats7DaysSubtitle: "Minutes per day",
    statsRecentLogs: "Recent Session Logs",
    statsNoLogs: "No session history yet. Complete a Pomodoro session to log your focus!",
    resetStatsBtn: "Reset Statistics Data",
    // Settings - Account & Language
    languageSectionTitle: "Language Selection",
    selectLanguageLabel: "Display Language",
    selectAvatarLabel: "Select Profile Avatar",
    usernameLabel: "Username",
    dailyGoalLabel: "Daily Focus Goal (Minutes)",
    mottoLabel: "Motto / Affirmation",
    saveProfileBtn: "Save Profile & Language Settings",
    // Audio & Spotify Drawer
    drawerTitle: "Audio & Music Studio",
    drawerSubtitle: "Spotify Lofi & Ambient Sound Synthesis",
    tabAmbient: "🌧️ Ambient Sounds",
    tabSpotify: "🎧 Spotify Player",
    spotifyPresetsTitle: "CURATED LOFI PLAYLISTS",
    spotifyCustomTitle: "CUSTOM PLAYLIST / TRACK LINK",
    spotifyInputPlaceholder: "Paste Spotify link (playlist/album/track)...",
    spotifyLoadBtn: "Load",
    spotifyHint: "💡 Tip: You can play Spotify tracks simultaneously with ambient rain or fireplace sounds in the Ambient tab for maximum cozy focus!",
    masterVolumeLabel: "Master Ambient Volume",
    muteAllBtn: "Mute All",
    unmuteBtn: "Unmute",
    soundPresetsTitle: "QUICK SOUND PRESETS",
    individualMixerTitle: "INDIVIDUAL SOUND MIXER",
    stopAllSounds: "Stop All Sounds",
    // Fullscreen
    fullscreenTitle: "Fullscreen",
    exitFullscreenTitle: "Exit Fullscreen"
  }
};

const QUOTES_DB = {
  id: [
    { text: "Ketenangan adalah kunci kejernihan pikiran.", author: "Pepatah Zen" },
    { text: "Fokus kecil hari ini adalah lompatan besar esok hari.", author: "James Clear" },
    { text: "Satu nafas, satu langkah, satu pencapaian.", author: "Lofi Mind" },
    { text: "Rahasia untuk maju adalah dengan memulai.", author: "Mark Twain" },
    { text: "Bekerja keras dalam diam, biarkan karyamu yang berbicara.", author: "Frank Ocean" },
    { text: "Konsistensi kecil yang berulang menghasilkan karya agung.", author: "Marcus Aurelius" },
    { text: "Ketenangan pikiran melahirkan ide-ide terbesar.", author: "Seneca" },
    { text: "Waktu yang dinikmati untuk belajar tak pernah menjadi waktu terbuang.", author: "John Lennon" }
  ],
  en: [
    { text: "Peace of mind is the source of true clarity.", author: "Zen Proverb" },
    { text: "Small daily focus creates giant leaps tomorrow.", author: "James Clear" },
    { text: "One breath, one step, one calm accomplishment.", author: "Lofi Mind" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Work in silence, let your creations make the noise.", author: "Frank Ocean" },
    { text: "Small acts repeated with care become great works.", author: "Marcus Aurelius" },
    { text: "True happiness is to enjoy the present without anxiety.", author: "Seneca" },
    { text: "Time you enjoy wasting is not wasted time.", author: "John Lennon" }
  ]
};

// ==========================================
// 2. THEMES & SPOTIFY PLAYLISTS CONFIG
// ==========================================

const THEMES_CONFIG = {
  'lofi-sunset-room': {
    name: 'Lofi Sunset Room',
    type: 'image',
    src: 'assets/wallpapers/lofi-sunset-room.png',
    accent: '#f59e0b',
    accentRgb: '245, 158, 11',
    ringStart: '#f59e0b',
    ringEnd: '#ec4899'
  },
  'fuji-twilight': {
    name: 'Fuji Twilight',
    type: 'image',
    src: 'assets/wallpapers/fuji-twilight.jpg',
    accent: '#a855f7',
    accentRgb: '168, 85, 247',
    ringStart: '#c084fc',
    ringEnd: '#f43f5e'
  },
  'cozy-balcony-night': {
    name: 'Cozy Balcony Night',
    type: 'image',
    src: 'assets/wallpapers/cozy-balcony-night.png',
    accent: '#818cf8',
    accentRgb: '129, 140, 248',
    ringStart: '#818cf8',
    ringEnd: '#fbbf24'
  },
  'emerald-forest': {
    name: 'Emerald Forest Path',
    type: 'image',
    src: 'assets/wallpapers/emerald-forest.png',
    accent: '#10b981',
    accentRgb: '16, 185, 129',
    ringStart: '#34d399',
    ringEnd: '#059669'
  },
  'autumn-canopy': {
    name: 'Autumn Sanctuary',
    type: 'image',
    src: 'assets/wallpapers/autumn-canopy.jpg',
    accent: '#f97316',
    accentRgb: '249, 115, 22',
    ringStart: '#fb923c',
    ringEnd: '#ea580c'
  },
  'minimal-dark-slate': {
    name: 'Minimal Dark Slate',
    type: 'gradient',
    css: 'linear-gradient(135deg, #090d16 0%, #111827 50%, #030712 100%)',
    accent: '#64748b',
    accentRgb: '100, 116, 139',
    ringStart: '#94a3b8',
    ringEnd: '#475569'
  },
  'cozy-warm-lofi': {
    name: 'Cozy Warm Lofi',
    type: 'gradient',
    css: 'radial-gradient(ellipse at top, #2e1065 0%, #1e1b4b 40%, #09090b 100%)',
    accent: '#fbbf24',
    accentRgb: '251, 191, 36',
    ringStart: '#fbbf24',
    ringEnd: '#f43f5e'
  },
  'pastel-sunset': {
    name: 'Pastel Sunset',
    type: 'gradient',
    css: 'linear-gradient(135deg, #4c1d95 0%, #831843 50%, #1e1b4b 100%)',
    accent: '#f472b6',
    accentRgb: '244, 114, 182',
    ringStart: '#f472b6',
    ringEnd: '#fb923c'
  },
  'forest-sanctuary': {
    name: 'Forest Sanctuary',
    type: 'gradient',
    css: 'linear-gradient(135deg, #064e3b 0%, #022c22 60%, #050b08 100%)',
    accent: '#34d399',
    accentRgb: '52, 211, 153',
    ringStart: '#34d399',
    ringEnd: '#065f46'
  },
  'nordic-light': {
    name: 'Nordic Light',
    type: 'gradient',
    css: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)',
    accent: '#38bdf8',
    accentRgb: '56, 189, 248',
    ringStart: '#38bdf8',
    ringEnd: '#818cf8'
  },
  'sakura-blossom': {
    name: 'Sakura Blossom',
    type: 'gradient',
    css: 'linear-gradient(135deg, #701a75 0%, #4a044e 50%, #18021a 100%)',
    accent: '#fb7185',
    accentRgb: '251, 113, 133',
    ringStart: '#f472b6',
    ringEnd: '#e11d48'
  }
};

const SPOTIFY_PRESETS = [
  { id: 'lofi-beats', name: 'Lofi Beats', icon: '☕', uri: 'playlist/0vvXsWCC9xrXsKd4FyS8kM' },
  { id: 'peaceful-piano', name: 'Peaceful Piano', icon: '🎹', uri: 'playlist/37i9dQZF1DX4sWSpwq3LiO' },
  { id: 'deep-focus', name: 'Deep Focus', icon: '🌿', uri: 'playlist/37i9dQZF1DWZeKCadgRdKQ' },
  { id: 'chill-study', name: 'Chill Lofi Study', icon: '📚', uri: 'playlist/37i9dQZF1DX8Uebhn9wzrS' },
  { id: 'jazz-vibes', name: 'Jazz Vibes', icon: '🎷', uri: 'playlist/37i9dQZF1DX0SM0LYsmbMT' }
];

// ==========================================
// 3. APPLICATION STATE & PERSISTENCE
// ==========================================

const STORAGE_KEY = 'pomodoro_studio_v3';

const DEFAULT_STATE = {
  language: 'id', // 'id' | 'en'
  currentSlide: 'focus', // 'home' | 'focus'
  timer: {
    mode: 'focus', // 'focus' | 'shortBreak' | 'longBreak'
    timeLeft: 25 * 60,
    totalDuration: 25 * 60,
    isRunning: false,
    cycleCount: 1,
    completedPomodorosToday: 0
  },
  settings: {
    focusTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    longBreakInterval: 4,
    autoStartBreaks: false,
    autoStartFocus: false,
    alarmSound: 'zen_bell',
    alarmVolume: 0.8,
    theme: 'lofi-sunset-room',
    bgBlur: 0,
    bgDim: 0.35
  },
  tasks: [
    { id: 'task-1', text: 'Menyelesaikan modul pembelajaran', completed: false, pinned: true },
    { id: 'task-2', text: 'Membaca 1 bab buku referensi', completed: false, pinned: false },
    { id: 'task-3', text: 'Review catatan & rangkuman harian', completed: false, pinned: false }
  ],
  stats: {
    streakDays: 3,
    lastActiveDate: new Date().toISOString().split('T')[0],
    todayMinutes: 50,
    todaySessions: 2,
    history: [
      { date: '2026-10-03', minutes: 75, sessions: 3 },
      { date: '2026-10-04', minutes: 100, sessions: 4 },
      { date: '2026-10-05', minutes: 50, sessions: 2 },
      { date: '2026-10-06', minutes: 125, sessions: 5 },
      { date: '2026-10-07', minutes: 75, sessions: 3 },
      { date: '2026-10-08', minutes: 100, sessions: 4 },
      { date: '2026-10-09', minutes: 50, sessions: 2 }
    ],
    sessionLogs: [
      { time: '14:30', mode: 'Fokus', duration: 25, task: 'Menyelesaikan modul pembelajaran' },
      { time: '16:00', mode: 'Fokus', duration: 25, task: 'Membaca 1 bab buku referensi' }
    ]
  },
  profile: {
    name: 'Sobat Fokus',
    avatar: 'cat',
    dailyGoalMinutes: 120,
    motto: 'Ketenangan adalah kunci kejernihan pikiran ✨'
  },
  ambient: {
    activeTab: 'spotify', // 'spotify' | 'ambient'
    currentSpotifyUri: 'playlist/0vvXsWCC9xrXsKd4FyS8kM',
    masterVolume: 0.7,
    isMuted: false,
    tracks: {
      rain: 0,
      forest: 0,
      ocean: 0,
      fire: 0,
      cafe: 0
    }
  }
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_STATE,
        ...parsed,
        timer: {
          ...DEFAULT_STATE.timer,
          ...parsed.timer,
          isRunning: false
        },
        settings: { ...DEFAULT_STATE.settings, ...parsed.settings },
        stats: { ...DEFAULT_STATE.stats, ...parsed.stats },
        profile: { ...DEFAULT_STATE.profile, ...parsed.profile },
        ambient: { ...DEFAULT_STATE.ambient, ...parsed.ambient }
      };
    }
  } catch (err) {
    console.warn('Gagal memuat state dari LocalStorage:', err);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Gagal menyimpan state:', err);
  }
}

function t(key) {
  const lang = state.language || 'id';
  return I18N[lang]?.[key] || I18N['id']?.[key] || key;
}

// ==========================================
// 4. LANGUAGE SWITCHER
// ==========================================

function setLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') return;
  state.language = lang;
  saveState();
  updateAllTranslations();
  showQuote(currentQuoteIndex);
  showToast(lang === 'id' ? 'Bahasa diubah ke Bahasa Indonesia 🇮🇩' : 'Language set to English 🇬🇧');
}

function updateAllTranslations() {
  // Elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) el.textContent = t(key);
  });

  // Elements with placeholder data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (key) el.placeholder = t(key);
  });

  // Elements with title data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key) el.title = t(key);
  });

  // Re-render dependent dynamic components
  renderTimerDisplay();
  renderTasksUI();
  updateHomeSlideDisplay();
  renderThemeSwatches();
  populateSettingsForm();

  // Active language button visual styling
  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnId && btnEn) {
    const isId = (state.language || 'id') === 'id';
    btnId.className = isId 
      ? 'px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-white shadow-md' 
      : 'px-3 py-1.5 rounded-lg text-xs font-bold text-white/60 hover:text-white';
    btnEn.className = !isId 
      ? 'px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-white shadow-md' 
      : 'px-3 py-1.5 rounded-lg text-xs font-bold text-white/60 hover:text-white';
  }
}

// ==========================================
// 5. WEB AUDIO API SYNTHESIS ENGINE
// ==========================================

class AudioSynthEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.ambientTracks = {};
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(state.ambient.isMuted ? 0 : state.ambient.masterVolume, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    this.setupAmbientTracks();
    this.isInitialized = true;
  }

  ensureContextRunning() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playAlarm(soundType, volumeMultiplier = 1) {
    this.ensureContextRunning();
    if (!this.ctx) return;

    const vol = (state.settings.alarmVolume || 0.8) * volumeMultiplier;
    const now = this.ctx.currentTime;

    switch (soundType) {
      case 'zen_bell': this.synthZenBell(now, vol); break;
      case 'tibetan_bowl': this.synthTibetanBowl(now, vol); break;
      case 'piano_chord': this.synthPianoChord(now, vol); break;
      case 'marimba': this.synthMarimba(now, vol); break;
      case 'digital_beep': this.synthDigitalBeep(now, vol); break;
      default: this.synthZenBell(now, vol);
    }
  }

  synthZenBell(t, volume) {
    const freqs = [587.33, 1174.66, 1760.0, 2349.32];
    const gains = [0.6, 0.3, 0.15, 0.05];
    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(gains[i] * volume, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.8);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 4.0);
    });
  }

  synthTibetanBowl(t, volume) {
    const freqs = [
      { f: 216, gain: 0.5 },
      { f: 216.8, gain: 0.45 },
      { f: 432, gain: 0.3 },
      { f: 648, gain: 0.2 },
      { f: 864, gain: 0.1 }
    ];
    freqs.forEach(item => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(item.f, t);
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(item.gain * volume, t + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 4.8);
    });
  }

  synthPianoChord(t, volume) {
    const notes = [261.63, 329.63, 392.00, 493.88, 523.25];
    notes.forEach((freq, idx) => {
      const noteDelay = idx * 0.04;
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc2.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + noteDelay);
      osc2.frequency.setValueAtTime(freq * 2, t + noteDelay);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, t + noteDelay);
      filter.frequency.exponentialRampToValueAtTime(300, t + noteDelay + 2.5);
      gain.gain.setValueAtTime(0.001, t + noteDelay);
      gain.gain.linearRampToValueAtTime(0.22 * volume, t + noteDelay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + noteDelay + 3.2);
      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + noteDelay);
      osc2.start(t + noteDelay);
      osc.stop(t + noteDelay + 3.5);
      osc2.stop(t + noteDelay + 3.5);
    });
  }

  synthMarimba(t, volume) {
    const sequence = [440, 554.37, 659.25, 880];
    sequence.forEach((freq, idx) => {
      const stepTime = t + idx * 0.12;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, stepTime);
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq, stepTime);
      filter.Q.setValueAtTime(6, stepTime);
      gain.gain.setValueAtTime(0.001, stepTime);
      gain.gain.linearRampToValueAtTime(0.35 * volume, stepTime + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, stepTime + 1.2);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(stepTime);
      osc.stop(stepTime + 1.3);
    });
  }

  synthDigitalBeep(t, volume) {
    [0, 0.14].forEach((delay, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(i === 0 ? 880 : 1320, t + delay);
      gain.gain.setValueAtTime(0.001, t + delay);
      gain.gain.linearRampToValueAtTime(0.25 * volume, t + delay + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + delay);
      osc.stop(t + delay + 0.15);
    });
  }

  playClick() {
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, t);
      osc.frequency.exponentialRampToValueAtTime(400, t + 0.04);
      gain.gain.setValueAtTime(0.03, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.05);
    } catch (e) {}
  }

  setupAmbientTracks() {
    const trackNames = ['rain', 'forest', 'ocean', 'fire', 'cafe'];
    trackNames.forEach(track => {
      const gainNode = this.ctx.createGain();
      const userLevel = state.ambient.tracks[track] || 0;
      gainNode.gain.setValueAtTime(userLevel, this.ctx.currentTime);
      gainNode.connect(this.masterGain);
      this.ambientTracks[track] = gainNode;
    });

    this.createRainGenerator();
    this.createForestGenerator();
    this.createOceanGenerator();
    this.createFireGenerator();
    this.createCafeGenerator();
  }

  createNoiseBuffer(type = 'white') {
    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === 'pink') {
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      } else if (type === 'brown') {
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 4.5;
      } else {
        data[i] = white;
      }
    }
    return buffer;
  }

  createRainGenerator() {
    const buffer = this.createNoiseBuffer('pink');
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1100, this.ctx.currentTime);

    const flutterLFO = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    flutterLFO.frequency.setValueAtTime(0.5, this.ctx.currentTime);
    lfoGain.gain.setValueAtTime(0.15, this.ctx.currentTime);

    const rainGain = this.ctx.createGain();
    rainGain.gain.setValueAtTime(0.8, this.ctx.currentTime);

    flutterLFO.connect(lfoGain);
    lfoGain.connect(rainGain.gain);
    source.connect(filter);
    filter.connect(rainGain);
    rainGain.connect(this.ambientTracks['rain']);
    source.start();
    flutterLFO.start();
  }

  createForestGenerator() {
    const buffer = this.createNoiseBuffer('brown');
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

    source.connect(filter);
    filter.connect(this.ambientTracks['forest']);
    source.start();

    const triggerBird = () => {
      if (this.ctx && !state.ambient.isMuted && (state.ambient.tracks.forest > 0.05)) {
        try {
          const t = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const chirpGain = this.ctx.createGain();
          const baseFreq = 2600 + Math.random() * 1200;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseFreq, t);
          osc.frequency.linearRampToValueAtTime(baseFreq + 600, t + 0.08);
          osc.frequency.linearRampToValueAtTime(baseFreq - 200, t + 0.16);
          chirpGain.gain.setValueAtTime(0.001, t);
          chirpGain.gain.linearRampToValueAtTime(0.08 * state.ambient.tracks.forest, t + 0.02);
          chirpGain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          osc.connect(chirpGain);
          chirpGain.connect(this.ambientTracks['forest']);
          osc.start(t);
          osc.stop(t + 0.3);
        } catch (e) {}
      }
      setTimeout(triggerBird, 3500 + Math.random() * 6000);
    };
    setTimeout(triggerBird, 4000);
  }

  createOceanGenerator() {
    const buffer = this.createNoiseBuffer('pink');
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(500, this.ctx.currentTime);

    const waveLfo = this.ctx.createOscillator();
    waveLfo.type = 'sine';
    waveLfo.frequency.setValueAtTime(0.13, this.ctx.currentTime);

    const waveGain = this.ctx.createGain();
    waveGain.gain.setValueAtTime(0.5, this.ctx.currentTime);

    const modDepth = this.ctx.createGain();
    modDepth.gain.setValueAtTime(0.45, this.ctx.currentTime);

    waveLfo.connect(modDepth);
    modDepth.connect(waveGain.gain);
    source.connect(filter);
    filter.connect(waveGain);
    waveGain.connect(this.ambientTracks['ocean']);
    source.start();
    waveLfo.start();
  }

  createFireGenerator() {
    const buffer = this.createNoiseBuffer('brown');
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(150, this.ctx.currentTime);

    source.connect(filter);
    filter.connect(this.ambientTracks['fire']);
    source.start();

    const triggerCrackle = () => {
      if (this.ctx && !state.ambient.isMuted && (state.ambient.tracks.fire > 0.05)) {
        try {
          const t = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const crackGain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(1500 + Math.random() * 3000, t);
          crackGain.gain.setValueAtTime(0.001, t);
          crackGain.gain.linearRampToValueAtTime(0.12 * state.ambient.tracks.fire, t + 0.005);
          crackGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
          osc.connect(crackGain);
          crackGain.connect(this.ambientTracks['fire']);
          osc.start(t);
          osc.stop(t + 0.05);
        } catch (e) {}
      }
      setTimeout(triggerCrackle, 80 + Math.random() * 350);
    };
    setTimeout(triggerCrackle, 500);
  }

  createCafeGenerator() {
    const buffer = this.createNoiseBuffer('pink');
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(750, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.0, this.ctx.currentTime);

    source.connect(filter);
    filter.connect(this.ambientTracks['cafe']);
    source.start();
  }

  setTrackVolume(trackName, volume) {
    this.ensureContextRunning();
    state.ambient.tracks[trackName] = volume;
    if (this.ambientTracks[trackName]) {
      this.ambientTracks[trackName].gain.setValueAtTime(volume, this.ctx.currentTime);
    }
    saveState();
    updateAmbientUI();
  }

  setMasterVolume(volume) {
    this.ensureContextRunning();
    state.ambient.masterVolume = volume;
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(state.ambient.isMuted ? 0 : volume, this.ctx.currentTime);
    }
    saveState();
  }

  toggleMute() {
    this.ensureContextRunning();
    state.ambient.isMuted = !state.ambient.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(
        state.ambient.isMuted ? 0 : state.ambient.masterVolume,
        this.ctx.currentTime
      );
    }
    saveState();
    updateAmbientUI();
  }

  hasActiveAmbient() {
    if (state.ambient.isMuted) return false;
    return Object.values(state.ambient.tracks).some(vol => vol > 0.01);
  }
}

const audio = new AudioSynthEngine();

// ==========================================
// 6. POMODORO TIMER CORE CONTROLLER (CENTERED)
// ==========================================

let timerInterval = null;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function renderTimerDisplay() {
  const timeDisplay = document.getElementById('timer-digits');
  const sessionSubtext = document.getElementById('timer-session-subtext');
  const timerBadge = document.getElementById('timer-mode-badge');
  const tabFocus = document.getElementById('tab-focus');
  const tabShort = document.getElementById('tab-short-break');
  const tabLong = document.getElementById('tab-long-break');
  const playPauseBtn = document.getElementById('btn-play-pause');
  const playPauseIcon = document.getElementById('play-pause-icon');
  const playPauseText = document.getElementById('play-pause-text');

  if (timeDisplay) timeDisplay.textContent = formatTime(state.timer.timeLeft);

  [tabFocus, tabShort, tabLong].forEach(tab => tab && tab.classList.remove('active'));

  if (state.timer.mode === 'focus') {
    tabFocus?.classList.add('active');
    if (timerBadge) {
      timerBadge.textContent = t('focus').toUpperCase();
      timerBadge.className = 'px-3 py-1 text-xs font-semibold tracking-wider rounded-full uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30';
    }
    if (sessionSubtext) {
      sessionSubtext.textContent = `${t('sessionPrefix')} #${state.timer.cycleCount} ${t('sessionOf')} ${state.settings.longBreakInterval}`;
    }
  } else if (state.timer.mode === 'shortBreak') {
    tabShort?.classList.add('active');
    if (timerBadge) {
      timerBadge.textContent = t('shortBreak').toUpperCase();
      timerBadge.className = 'px-3 py-1 text-xs font-semibold tracking-wider rounded-full uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    }
    if (sessionSubtext) sessionSubtext.textContent = t('shortBreakMsg');
  } else {
    tabLong?.classList.add('active');
    if (timerBadge) {
      timerBadge.textContent = t('longBreak').toUpperCase();
      timerBadge.className = 'px-3 py-1 text-xs font-semibold tracking-wider rounded-full uppercase bg-sky-500/20 text-sky-300 border border-sky-500/30';
    }
    if (sessionSubtext) sessionSubtext.textContent = t('longBreakMsg');
  }

  // Play/Pause button appearance
  if (playPauseBtn && playPauseIcon && playPauseText) {
    if (state.timer.isRunning) {
      playPauseText.textContent = t('pause');
      playPauseIcon.innerHTML = `
        <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
        <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
      `;
    } else {
      playPauseText.textContent = t('start');
      playPauseIcon.innerHTML = `
        <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
      `;
    }
  }

  const modeLabels = { focus: t('focus'), shortBreak: t('shortBreak'), longBreak: t('longBreak') };
  document.title = `${formatTime(state.timer.timeLeft)} - ${modeLabels[state.timer.mode]} | Pomodoro Studio`;
}

function setTimerMode(mode, autoStart = false) {
  state.timer.isRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;

  state.timer.mode = mode;
  let minutes = state.settings.focusTime;
  if (mode === 'shortBreak') minutes = state.settings.shortBreakTime;
  if (mode === 'longBreak') minutes = state.settings.longBreakTime;

  state.timer.timeLeft = minutes * 60;
  state.timer.totalDuration = minutes * 60;

  renderTimerDisplay();
  saveState();

  if (autoStart) {
    startTimer();
  }
}

function startTimer() {
  audio.ensureContextRunning();
  if (state.timer.isRunning) return;

  state.timer.isRunning = true;
  renderTimerDisplay();

  timerInterval = setInterval(() => {
    if (state.timer.timeLeft > 0) {
      state.timer.timeLeft--;
      renderTimerDisplay();
    } else {
      onTimerCompleted();
    }
  }, 1000);
}

function pauseTimer() {
  audio.playClick();
  state.timer.isRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;
  renderTimerDisplay();
  saveState();
}

function toggleTimer() {
  audio.playClick();
  if (state.timer.isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function requestTimerReset() {
  audio.playClick();
  const dialog = document.getElementById('timer-reset-confirm');
  dialog?.classList.add('open');
  document.getElementById('btn-cancel-timer-reset')?.focus();
}

function cancelTimerResetConfirmation() {
  document.getElementById('timer-reset-confirm')?.classList.remove('open');
  document.getElementById('btn-timer-reset')?.focus();
}

function confirmTimerReset() {
  document.getElementById('timer-reset-confirm')?.classList.remove('open');
  setTimerMode(state.timer.mode, false);

  const resetButton = document.getElementById('btn-timer-reset');
  if (resetButton) {
    resetButton.classList.remove('reset-success');
    void resetButton.offsetWidth;
    resetButton.classList.add('reset-success');
    clearTimeout(resetButton.resetAnimationTimer);
    resetButton.resetAnimationTimer = setTimeout(() => {
      resetButton.classList.remove('reset-success');
    }, 700);
  }
}

function skipTimer() {
  audio.playClick();
  onTimerCompleted(true);
}

function onTimerCompleted(wasSkipped = false) {
  clearInterval(timerInterval);
  timerInterval = null;
  state.timer.isRunning = false;

  if (!wasSkipped) {
    audio.playAlarm(state.settings.alarmSound, 1);
  }

  if (state.timer.mode === 'focus') {
    if (!wasSkipped) {
      const durationMin = state.settings.focusTime;
      recordCompletedSession(durationMin);
      showToast(state.language === 'id' 
        ? `🎉 Sesi Fokus Selesai! Kamu telah fokus ${durationMin} menit.` 
        : `🎉 Focus Session Complete! You focused for ${durationMin} minutes.`);
    }

    if (state.timer.cycleCount >= state.settings.longBreakInterval) {
      state.timer.cycleCount = 1;
      setTimerMode('longBreak', state.settings.autoStartBreaks);
    } else {
      state.timer.cycleCount++;
      setTimerMode('shortBreak', state.settings.autoStartBreaks);
    }
  } else {
    if (!wasSkipped) {
      showToast(state.language === 'id' ? '☕ Waktu istirahat selesai! Mari lanjut fokus.' : '☕ Break ended! Time to focus again.');
    }
    setTimerMode('focus', state.settings.autoStartFocus);
  }

  saveState();
  updateHomeSlideDisplay();
}

function recordCompletedSession(durationMinutes) {
  const todayStr = new Date().toISOString().split('T')[0];

  state.timer.completedPomodorosToday++;
  state.stats.todayMinutes += durationMinutes;
  state.stats.todaySessions += 1;

  if (state.stats.streakDays === 0) {
    state.stats.streakDays = 1;
  }

  let todayHistory = state.stats.history.find(h => h.date === todayStr);
  if (todayHistory) {
    todayHistory.minutes += durationMinutes;
    todayHistory.sessions += 1;
  } else {
    state.stats.history.push({
      date: todayStr,
      minutes: durationMinutes,
      sessions: 1
    });
  }

  const now = new Date();
  const timeFormatted = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  const pinnedTask = state.tasks.find(t => t.pinned && !t.completed);

  state.stats.sessionLogs.unshift({
    time: timeFormatted,
    mode: state.language === 'id' ? 'Fokus' : 'Focus',
    duration: durationMinutes,
    task: pinnedTask ? pinnedTask.text : (state.language === 'id' ? 'Fokus Mandiri' : 'Solo Focus')
  });

  if (state.stats.sessionLogs.length > 20) {
    state.stats.sessionLogs = state.stats.sessionLogs.slice(0, 20);
  }

  saveState();
}

// ==========================================
// 7. TASK / FOCUS PIN (SMART AUTO-ROTATION)
// ==========================================

function getActivePinnedTask() {
  // First priority: A pinned task that is NOT yet completed
  let task = state.tasks.find(t => t.pinned && !t.completed);
  if (!task) {
    // If current pinned is completed or none pinned, find first uncompleted task
    task = state.tasks.find(t => !t.completed);
    if (task) {
      state.tasks.forEach(t => t.pinned = (t.id === task.id));
      saveState();
    }
  }
  return task;
}

function renderTasksUI() {
  const pinnedTask = getActivePinnedTask();
  const pinnedNameEl = document.getElementById('pinned-task-name');
  const pinnedCheckEl = document.getElementById('pinned-task-checkbox');
  const taskListEl = document.getElementById('task-list-items');
  const taskCountBadge = document.getElementById('task-count-badge');
  const activeTasksCount = state.tasks.filter(t => !t.completed).length;

  if (pinnedNameEl) {
    if (pinnedTask) {
      pinnedNameEl.textContent = pinnedTask.text;
      pinnedNameEl.classList.remove('italic', 'text-white/40');
    } else if (state.tasks.length > 0 && activeTasksCount === 0) {
      // All tasks completed!
      pinnedNameEl.textContent = t('allTasksDone');
      pinnedNameEl.classList.add('italic', 'text-amber-300');
    } else {
      pinnedNameEl.textContent = t('setFocusPrompt');
      pinnedNameEl.classList.add('italic', 'text-white/40');
    }
  }

  if (pinnedCheckEl) {
    pinnedCheckEl.checked = false; // Always unchecked when representing the active task slot
    pinnedCheckEl.disabled = !pinnedTask;
  }

  if (taskCountBadge) {
    taskCountBadge.textContent = `${activeTasksCount} ${t('tasksRemaining')}`;
  }

  if (taskListEl) {
    if (state.tasks.length === 0) {
      taskListEl.innerHTML = `
        <div class="py-6 text-center text-sm text-white/40">
          ${state.language === 'id' ? 'Belum ada tugas. Tuliskan fokusmu di bawah!' : 'No tasks yet. Add your focus below!'}
        </div>
      `;
      return;
    }

    // Sort: uncompleted first, completed at the bottom
    const sortedTasks = [...state.tasks].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

    taskListEl.innerHTML = sortedTasks.map(task => `
      <div class="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 ${task.pinned && !task.completed ? 'bg-white/10 border-white/20' : ''}">
        <div class="flex items-center gap-3 flex-1 overflow-hidden mr-2">
          <input 
            type="checkbox" 
            ${task.completed ? 'checked' : ''} 
            onchange="toggleTaskComplete('${task.id}')"
            class="w-4 h-4 rounded cursor-pointer accent-amber-500 bg-white/10 border-white/20"
          />
          <span class="text-sm truncate cursor-pointer ${task.completed ? 'line-through text-white/40' : 'text-white/90'}" onclick="toggleTaskComplete('${task.id}')">
            ${escapeHTML(task.text)}
          </span>
        </div>
        <div class="flex items-center gap-1.5 opacity-80 group-hover:opacity-100">
          ${!task.completed ? `
            <button 
              onclick="setPinnedTask('${task.id}')" 
              title="${task.pinned ? t('taskMainTitle') : t('taskSetMain')}"
              class="p-1 rounded-md hover:bg-white/10 transition-colors ${task.pinned ? 'text-amber-400' : 'text-white/40 hover:text-white'}"
            >
              📌
            </button>
          ` : ''}
          <button 
            onclick="deleteTask('${task.id}')" 
            title="${t('taskDelete')}"
            class="p-1 rounded-md hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
    `).join('');
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[tag] || tag));
}

// When user checks the box on the pinned task above the timer:
function onPinnedTaskCheckboxChecked() {
  audio.playClick();
  const currentPinned = getActivePinnedTask();
  if (!currentPinned) {
    toggleTaskModal(true);
    return;
  }

  // 1. Mark current completed
  currentPinned.completed = true;
  currentPinned.pinned = false;

  // 2. Automatically find the next uncompleted task!
  const nextUncompleted = state.tasks.find(t => !t.completed);
  if (nextUncompleted) {
    nextUncompleted.pinned = true;
    showToast(t('taskCompletedToast'));
  } else {
    showToast(t('allCompletedToast'));
  }

  saveState();
  renderTasksUI();
}

function toggleTaskComplete(taskId) {
  audio.playClick();
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) return;

  task.completed = !task.completed;

  if (task.completed && task.pinned) {
    // If completing the currently pinned task, promote next uncompleted!
    task.pinned = false;
    const nextUncompleted = state.tasks.find(t => !t.completed);
    if (nextUncompleted) {
      nextUncompleted.pinned = true;
    }
  }

  saveState();
  renderTasksUI();
}

function addNewTask(text) {
  if (!text || !text.trim()) return;
  const isFirst = state.tasks.filter(t => !t.completed).length === 0;
  const newTask = {
    id: 'task-' + Date.now(),
    text: text.trim(),
    completed: false,
    pinned: isFirst
  };

  state.tasks.push(newTask);
  saveState();
  renderTasksUI();
  showToast(t('taskAddedToast'));
}

function setPinnedTask(taskId) {
  audio.playClick();
  state.tasks.forEach(t => t.pinned = (t.id === taskId));
  saveState();
  renderTasksUI();
  showToast(t('taskPinnedToast'));
}

function deleteTask(taskId) {
  audio.playClick();
  state.tasks = state.tasks.filter(t => t.id !== taskId);
  const hasPinned = state.tasks.some(t => t.pinned && !t.completed);
  if (!hasPinned) {
    const next = state.tasks.find(t => !t.completed);
    if (next) next.pinned = true;
  }
  saveState();
  renderTasksUI();
}

function toggleTaskModal(forceOpen = null) {
  const modal = document.getElementById('task-manager-modal');
  if (!modal) return;
  const isOpen = modal.classList.contains('open');
  const shouldOpen = forceOpen !== null ? forceOpen : !isOpen;

  if (shouldOpen) {
    modal.classList.add('open');
    document.getElementById('new-task-input')?.focus();
  } else {
    modal.classList.remove('open');
  }
}

// ==========================================
// 8. SLIDE NAVIGATION (HOME & FOCUS)
// ==========================================

function switchSlide(slideId) {
  audio.playClick();
  state.currentSlide = slideId;

  const homeSlide = document.getElementById('slide-home');
  const focusSlide = document.getElementById('slide-focus');
  const navBtnHome = document.getElementById('nav-btn-home');
  const navBtnFocus = document.getElementById('nav-btn-focus');

  if (slideId === 'home') {
    homeSlide?.classList.add('active');
    focusSlide?.classList.remove('active');
    navBtnHome?.classList.add('active');
    navBtnFocus?.classList.remove('active');
    updateHomeSlideDisplay();
  } else {
    focusSlide?.classList.add('active');
    homeSlide?.classList.remove('active');
    navBtnFocus?.classList.add('active');
    navBtnHome?.classList.remove('active');
  }

  saveState();
}

function updateHomeSlideDisplay() {
  const clockEl = document.getElementById('home-clock-time');
  const dateEl = document.getElementById('home-clock-date');
  const greetingEl = document.getElementById('home-greeting-text');
  const mottoEl = document.getElementById('home-user-motto');

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  if (clockEl) {
    clockEl.innerHTML = `${hours.toString().padStart(2, '0')}<span class="pulsing-colon">:</span>${minutes}<span class="text-3xl text-white/40 ml-1 font-normal">${seconds}</span>`;
  }

  // Localized Date
  const lang = state.language || 'id';
  if (dateEl) {
    if (lang === 'id') {
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
      dateEl.textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    } else {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateEl.textContent = now.toLocaleDateString('en-US', options);
    }
  }

  // Greeting
  let greetingTimeKey = 'goodMorning';
  if (hours >= 11 && hours < 15) greetingTimeKey = 'goodAfternoon';
  else if (hours >= 15 && hours < 18) greetingTimeKey = 'goodEvening';
  else if (hours >= 18 || hours < 5) greetingTimeKey = 'goodNight';

  if (greetingEl) {
    greetingEl.textContent = `${t(greetingTimeKey)}, ${state.profile.name || 'Sobat Fokus'} ✨`;
  }

  if (mottoEl) {
    mottoEl.textContent = `“${state.profile.motto || 'Ketenangan adalah kunci kejernihan pikiran'}”`;
  }

}

setInterval(() => {
  if (state.currentSlide === 'home') {
    updateHomeSlideDisplay();
  }
}, 1000);

// ==========================================
// 9. TOP RIGHT QUOTES (CLEAN QUOTATION MARKS)
// ==========================================

let currentQuoteIndex = 0;

function showQuote(index) {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const container = document.getElementById('top-quote-container');

  if (!quoteText) return;

  const quotesList = QUOTES_DB[state.language || 'id'] || QUOTES_DB['id'];
  currentQuoteIndex = (index + quotesList.length) % quotesList.length;
  const q = quotesList[currentQuoteIndex];

  container?.classList.add('opacity-0');
  setTimeout(() => {
    quoteText.textContent = `“${q.text}”`;
    if (quoteAuthor) quoteAuthor.textContent = `— ${q.author}`;
    container?.classList.remove('opacity-0');
  }, 200);
}

function nextQuote() {
  audio.playClick();
  showQuote(currentQuoteIndex + 1);
}

setInterval(() => {
  showQuote(currentQuoteIndex + 1);
}, 50000);

// ==========================================
// 10. THEMES & VISUAL CUSTOMIZATION
// ==========================================

function applyTheme(themeKey) {
  const theme = THEMES_CONFIG[themeKey];
  if (!theme) return;

  state.settings.theme = themeKey;

  const bgImgEl = document.getElementById('app-background-image');

  if (theme.type === 'image') {
    bgImgEl.style.background = `url('${theme.src}') center center / cover no-repeat`;
  } else {
    bgImgEl.style.background = theme.css;
  }

  document.documentElement.style.setProperty('--accent-primary', theme.accent);
  document.documentElement.style.setProperty('--accent-primary-rgb', theme.accentRgb);
  document.documentElement.style.setProperty('--ring-gradient-start', theme.ringStart);
  document.documentElement.style.setProperty('--ring-gradient-end', theme.ringEnd);
  document.documentElement.style.setProperty('--accent-glow', `rgba(${theme.accentRgb}, 0.35)`);

  applyBackgroundFilters();
  renderThemeSwatches();
  saveState();
}

function applyBackgroundFilters() {
  const bgImgEl = document.getElementById('app-background-image');
  const bgOverlayEl = document.getElementById('app-background-overlay');

  if (bgImgEl) {
    bgImgEl.style.filter = `blur(${state.settings.bgBlur}px)`;
  }
  if (bgOverlayEl) {
    bgOverlayEl.style.backgroundColor = `rgba(5, 7, 13, ${state.settings.bgDim})`;
  }
}

function renderThemeSwatches() {
  const container = document.getElementById('theme-swatches-grid');
  if (!container) return;

  const keys = Object.keys(THEMES_CONFIG);
  container.innerHTML = keys.map(key => {
    const th = THEMES_CONFIG[key];
    const isActive = state.settings.theme === key;

    const bgPreview = th.type === 'image' 
      ? `background: url('${th.src}') center center / cover no-repeat;` 
      : `background: ${th.css};`;

    return `
      <div 
        class="theme-swatch-card group p-2.5 rounded-2xl glass-panel ${isActive ? 'active' : ''}"
        onclick="selectTheme('${key}')"
      >
        <div class="h-20 w-full rounded-xl relative overflow-hidden shadow-inner mb-2" style="${bgPreview}">
          <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          ${isActive ? `
            <div class="absolute top-2 right-2 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs shadow-md font-bold">
              ✓
            </div>
          ` : ''}
          <div class="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] bg-black/60 backdrop-blur-md text-white font-medium">
            <span class="w-2 h-2 rounded-full" style="background: ${th.accent};"></span>
            ${th.type === 'image' ? 'Wallpaper' : 'Gradient'}
          </div>
        </div>
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-semibold text-white/90 truncate">${th.name}</span>
          ${isActive ? `<span class="text-[10px] text-amber-400 font-medium">${state.language === 'id' ? 'Aktif' : 'Active'}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function selectTheme(key) {
  audio.playClick();
  applyTheme(key);
  showToast(`${t('tabThemes')}: ${THEMES_CONFIG[key].name} ✨`);
}

// ==========================================
// 11. SPOTIFY PLAYER & AMBIENT DRAWER
// ==========================================

function toggleAmbientDrawer(forceOpen = null) {
  audio.playClick();
  const drawer = document.getElementById('ambient-sound-drawer');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');
  const shouldOpen = forceOpen !== null ? forceOpen : !isOpen;

  if (shouldOpen) {
    audio.ensureContextRunning();
    drawer.classList.add('open');
    switchDrawerTab(state.ambient.activeTab || 'spotify');
  } else {
    drawer.classList.remove('open');
  }
}

function switchDrawerTab(tabName) {
  audio.playClick();
  state.ambient.activeTab = tabName;

  const btnSpotify = document.getElementById('drawer-tab-btn-spotify');
  const btnAmbient = document.getElementById('drawer-tab-btn-ambient');
  const panelSpotify = document.getElementById('drawer-panel-spotify');
  const panelAmbient = document.getElementById('drawer-panel-ambient');

  btnSpotify?.classList.toggle('active', tabName === 'spotify');
  btnAmbient?.classList.toggle('active', tabName === 'ambient');

  panelSpotify?.classList.toggle('hidden', tabName !== 'spotify');
  panelAmbient?.classList.toggle('hidden', tabName !== 'ambient');

  saveState();
}

function parseSpotifyUri(input) {
  if (!input) return null;
  const trimmed = input.trim();

  // Pattern 1: URI (spotify:playlist:0vvXsWCC9xrXsKd4FyS8kM)
  const uriMatch = trimmed.match(/^spotify:(playlist|album|track):([a-zA-Z0-9]+)/);
  if (uriMatch) {
    return `${uriMatch[1]}/${uriMatch[2]}`;
  }

  // Pattern 2: Web URL (https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=...)
  const urlMatch = trimmed.match(/open\.spotify\.com\/(playlist|album|track)\/([a-zA-Z0-9]+)/);
  if (urlMatch) {
    return `${urlMatch[1]}/${urlMatch[2]}`;
  }

  // Pattern 3: direct type/id
  const directMatch = trimmed.match(/^(playlist|album|track)\/([a-zA-Z0-9]+)/);
  if (directMatch) {
    return trimmed;
  }

  return null;
}

function loadSpotifyPlaylist(uriPath) {
  audio.playClick();
  const parsed = parseSpotifyUri(uriPath);
  if (!parsed) {
    showToast(state.language === 'id' ? 'Link Spotify tidak valid.' : 'Invalid Spotify URL.');
    return;
  }

  state.ambient.currentSpotifyUri = parsed;
  saveState();

  const iframe = document.getElementById('spotify-embed-iframe');
  if (iframe) {
    iframe.src = `https://open.spotify.com/embed/${parsed}?utm_source=generator&theme=0`;
  }

  renderSpotifyPresets();
  showToast(state.language === 'id' ? 'Playlist Spotify dimuat 🎧' : 'Spotify playlist loaded 🎧');
}

function renderSpotifyPresets() {
  const container = document.getElementById('spotify-presets-container');
  if (!container) return;

  container.innerHTML = SPOTIFY_PRESETS.map(p => {
    const isCurrent = state.ambient.currentSpotifyUri === p.uri;
    return `
      <button 
        type="button" 
        onclick="loadSpotifyPlaylist('${p.uri}')" 
        class="glass-pill-sm p-2 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${isCurrent ? 'bg-amber-500/20 border-amber-500/60 text-amber-300' : 'text-white/80 hover:text-white'}"
      >
        <span class="flex items-center gap-1.5 truncate">
          <span>${p.icon}</span>
          <span class="truncate">${p.name}</span>
        </span>
        ${isCurrent ? '<span class="text-[10px] ml-1">●</span>' : ''}
      </button>
    `;
  }).join('');
}

function updateAmbientUI() {
  const catNavBtn = document.getElementById('nav-btn-cat');
  const catEarPulse = document.getElementById('cat-pulse-indicator');
  const muteBtn = document.getElementById('ambient-mute-btn');
  const waveVisualizer = document.getElementById('ambient-wave-visualizer');
  const masterSlider = document.getElementById('ambient-master-slider');

  const hasActive = audio.hasActiveAmbient();

  if (catNavBtn) catNavBtn.classList.toggle('cat-ambient-active', hasActive);
  if (catEarPulse) catEarPulse.classList.toggle('hidden', !hasActive);
  if (waveVisualizer) waveVisualizer.style.display = hasActive ? 'flex' : 'none';

  ['rain', 'forest', 'ocean', 'fire', 'cafe'].forEach(track => {
    const slider = document.getElementById(`ambient-slider-${track}`);
    const badge = document.getElementById(`ambient-badge-${track}`);
    const vol = state.ambient.tracks[track] || 0;
    if (slider) slider.value = Math.round(vol * 100);
    if (badge) {
      badge.textContent = `${Math.round(vol * 100)}%`;
      badge.classList.toggle('text-amber-400', vol > 0);
      badge.classList.toggle('text-white/40', vol === 0);
    }
  });

  if (masterSlider) {
    masterSlider.value = Math.round(state.ambient.masterVolume * 100);
  }

  if (muteBtn) {
    muteBtn.innerHTML = state.ambient.isMuted
      ? `🔇 <span class="text-xs">${t('unmuteBtn')}</span>`
      : `🔊 <span class="text-xs">${t('muteAllBtn')}</span>`;
  }
}

function setAmbientPreset(presetName) {
  audio.ensureContextRunning();
  audio.playClick();

  const presets = {
    rainy: { rain: 0.75, forest: 0.15, ocean: 0.0, fire: 0.0, cafe: 0.0 },
    forest: { rain: 0.0, forest: 0.85, ocean: 0.0, fire: 0.0, cafe: 0.0 },
    ocean: { rain: 0.0, forest: 0.0, ocean: 0.8, fire: 0.2, cafe: 0.0 },
    cozy_cafe: { rain: 0.3, forest: 0.0, ocean: 0.0, fire: 0.45, cafe: 0.65 },
    stop: { rain: 0.0, forest: 0.0, ocean: 0.0, fire: 0.0, cafe: 0.0 }
  };

  const selected = presets[presetName];
  if (!selected) return;

  state.ambient.isMuted = false;
  Object.keys(selected).forEach(track => {
    audio.setTrackVolume(track, selected[track]);
  });

  updateAmbientUI();
  showToast(presetName === 'stop' ? t('stopAllSounds') : `${t('soundPresetsTitle')}: ${presetName} 🎧`);
}

// ==========================================
// 12. SETTINGS MODAL & TABS CONTROLLER
// ==========================================

function openSettingsModal(tabName = 'themes') {
  audio.playClick();
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.add('open');
  switchSettingsTab(tabName);
  populateSettingsForm();
}

function closeSettingsModal() {
  audio.playClick();
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.remove('open');
}

function switchSettingsTab(tabName) {
  audio.playClick();
  const tabs = ['themes', 'timer', 'stats', 'account'];
  tabs.forEach(t => {
    const tabBtn = document.getElementById(`settings-tab-btn-${t}`);
    const tabContent = document.getElementById(`settings-tab-content-${t}`);
    if (tabBtn) tabBtn.classList.toggle('active', t === tabName);
    if (tabContent) tabContent.classList.toggle('hidden', t !== tabName);
  });

  if (tabName === 'stats') {
    renderStatsTab();
  }
}

function populateSettingsForm() {
  const focusInput = document.getElementById('setting-focus-time');
  const shortInput = document.getElementById('setting-short-break');
  const longInput = document.getElementById('setting-long-break');
  const intervalInput = document.getElementById('setting-long-interval');
  const autoBreakInput = document.getElementById('setting-auto-break');
  const autoFocusInput = document.getElementById('setting-auto-focus');
  const soundSelect = document.getElementById('setting-alarm-sound');

  if (focusInput) focusInput.value = state.settings.focusTime;
  if (shortInput) shortInput.value = state.settings.shortBreakTime;
  if (longInput) longInput.value = state.settings.longBreakTime;
  if (intervalInput) intervalInput.value = state.settings.longBreakInterval;
  if (autoBreakInput) autoBreakInput.checked = state.settings.autoStartBreaks;
  if (autoFocusInput) autoFocusInput.checked = state.settings.autoStartFocus;
  if (soundSelect) soundSelect.value = state.settings.alarmSound;

  const blurSlider = document.getElementById('setting-bg-blur');
  const dimSlider = document.getElementById('setting-bg-dim');
  const blurVal = document.getElementById('val-bg-blur');
  const dimVal = document.getElementById('val-bg-dim');

  if (blurSlider) blurSlider.value = state.settings.bgBlur;
  if (dimSlider) dimSlider.value = Math.round(state.settings.bgDim * 100);
  if (blurVal) blurVal.textContent = `${state.settings.bgBlur}px`;
  if (dimVal) dimVal.textContent = `${Math.round(state.settings.bgDim * 100)}%`;

  const nameInput = document.getElementById('setting-profile-name');
  const goalInput = document.getElementById('setting-profile-goal');
  const mottoInput = document.getElementById('setting-profile-motto');
  const langSelect = document.getElementById('setting-profile-lang');

  if (nameInput) nameInput.value = state.profile.name;
  if (goalInput) goalInput.value = state.profile.dailyGoalMinutes;
  if (mottoInput) mottoInput.value = state.profile.motto;
  if (langSelect) langSelect.value = state.language || 'id';

  renderAvatarSelector();
}

function saveTimerSettings() {
  const focusInput = document.getElementById('setting-focus-time');
  const shortInput = document.getElementById('setting-short-break');
  const longInput = document.getElementById('setting-long-break');
  const intervalInput = document.getElementById('setting-long-interval');
  const autoBreakInput = document.getElementById('setting-auto-break');
  const autoFocusInput = document.getElementById('setting-auto-focus');
  const soundSelect = document.getElementById('setting-alarm-sound');

  state.settings.focusTime = parseInt(focusInput.value) || 25;
  state.settings.shortBreakTime = parseInt(shortInput.value) || 5;
  state.settings.longBreakTime = parseInt(longInput.value) || 15;
  state.settings.longBreakInterval = parseInt(intervalInput.value) || 4;
  state.settings.autoStartBreaks = autoBreakInput.checked;
  state.settings.autoStartFocus = autoFocusInput.checked;
  state.settings.alarmSound = soundSelect.value;

  if (!state.timer.isRunning) {
    setTimerMode(state.timer.mode, false);
  }

  saveState();
  showToast(state.language === 'id' ? 'Pengaturan waktu & alarm disimpan! ✅' : 'Timer settings saved! ✅');
}

function saveProfileSettings() {
  const nameInput = document.getElementById('setting-profile-name');
  const goalInput = document.getElementById('setting-profile-goal');
  const mottoInput = document.getElementById('setting-profile-motto');
  const langSelect = document.getElementById('setting-profile-lang');

  if (nameInput) state.profile.name = nameInput.value.trim() || 'Sobat Fokus';
  if (goalInput) state.profile.dailyGoalMinutes = parseInt(goalInput.value) || 120;
  if (mottoInput) state.profile.motto = mottoInput.value.trim() || 'Ketenangan adalah kunci kejernihan pikiran ✨';

  if (langSelect && langSelect.value !== state.language) {
    setLanguage(langSelect.value);
  } else {
    saveState();
    updateHomeSlideDisplay();
    showToast(state.language === 'id' ? 'Profil pengguna berhasil disimpan! 👤' : 'User profile saved! 👤');
  }
}

function renderAvatarSelector() {
  const container = document.getElementById('avatar-options-container');
  if (!container) return;

  const avatars = [
    { id: 'cat', emoji: '🐱', label: 'Cat' },
    { id: 'coffee', emoji: '☕', label: 'Coffee' },
    { id: 'books', emoji: '📚', label: 'Books' },
    { id: 'headphones', emoji: '🎧', label: 'Audio' },
    { id: 'seedling', emoji: '🌿', label: 'Plants' },
    { id: 'moon', emoji: '🌙', label: 'Moon' }
  ];

  container.innerHTML = avatars.map(av => `
    <button 
      type="button" 
      onclick="selectAvatar('${av.id}')"
      class="p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all ${state.profile.avatar === av.id ? 'bg-amber-500/20 border-amber-500 shadow-md text-white' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/70'}"
    >
      <span class="text-2xl">${av.emoji}</span>
      <span class="text-[10px] font-medium">${av.label}</span>
    </button>
  `).join('');
}

function selectAvatar(avatarId) {
  audio.playClick();
  state.profile.avatar = avatarId;
  renderAvatarSelector();
}

function previewAlarmSound() {
  const soundSelect = document.getElementById('setting-alarm-sound');
  const sound = soundSelect ? soundSelect.value : state.settings.alarmSound;
  audio.playAlarm(sound, 1);
}

// ==========================================
// 13. STATS TAB & CHARTS
// ==========================================

function renderStatsTab() {
  const streakEl = document.getElementById('stats-streak-val');
  const minutesEl = document.getElementById('stats-minutes-val');
  const sessionsEl = document.getElementById('stats-sessions-val');
  const chartBarsEl = document.getElementById('stats-week-chart');
  const logsEl = document.getElementById('stats-logs-list');

  const lang = state.language || 'id';
  if (streakEl) streakEl.textContent = `${state.stats.streakDays} ${lang === 'id' ? 'Hari' : 'Days'}`;
  if (minutesEl) minutesEl.textContent = `${state.stats.todayMinutes} ${lang === 'id' ? 'Menit' : 'Mins'}`;
  if (sessionsEl) sessionsEl.textContent = `${state.stats.todaySessions} ${lang === 'id' ? 'Sesi' : 'Sessions'}`;

  if (chartBarsEl) {
    const daysData = [];
    const dayNamesId = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayNames = lang === 'id' ? dayNamesId : dayNamesEn;

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const record = state.stats.history.find(h => h.date === dateStr);
      daysData.push({
        date: dateStr,
        dayName: dayNames[d.getDay()],
        minutes: record ? record.minutes : 0
      });
    }

    const maxMinutes = Math.max(120, ...daysData.map(d => d.minutes));

    chartBarsEl.innerHTML = daysData.map(d => {
      const heightPercent = Math.max(8, Math.round((d.minutes / maxMinutes) * 100));
      const isToday = d.date === new Date().toISOString().split('T')[0];

      return `
        <div class="flex-1 flex flex-col items-center gap-2 group">
          <div class="text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
            ${d.minutes}m
          </div>
          <div class="w-full bg-white/5 rounded-t-lg h-28 flex items-end p-1 justify-center relative">
            <div 
              class="w-full rounded-md transition-all duration-500 ${isToday ? 'bg-gradient-to-t from-amber-500 to-pink-500 shadow-lg shadow-amber-500/20' : 'bg-white/20 group-hover:bg-white/40'}" 
              style="height: ${heightPercent}%;"
            ></div>
          </div>
          <span class="text-[11px] font-medium ${isToday ? 'text-amber-400 font-bold' : 'text-white/60'}">
            ${d.dayName}
          </span>
        </div>
      `;
    }).join('');
  }

  if (logsEl) {
    if (state.stats.sessionLogs.length === 0) {
      logsEl.innerHTML = `
        <div class="py-6 text-center text-sm text-white/40">
          ${t('statsNoLogs')}
        </div>
      `;
    } else {
      logsEl.innerHTML = state.stats.sessionLogs.map(log => `
        <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-sm">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-amber-400"></div>
            <div>
              <div class="font-medium text-white/90">${escapeHTML(log.task)}</div>
              <div class="text-xs text-white/40 font-mono">${log.time} • ${log.mode}</div>
            </div>
          </div>
          <div class="px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/80">
            +${log.duration} ${lang === 'id' ? 'Menit' : 'Min'}
          </div>
        </div>
      `).join('');
    }
  }
}

function resetStatsData() {
  const confirmMsg = state.language === 'id' 
    ? 'Apakah kamu yakin ingin mereset statistik dan riwayat fokus?' 
    : 'Are you sure you want to reset all stats and focus history?';

  if (confirm(confirmMsg)) {
    state.stats.streakDays = 0;
    state.stats.todayMinutes = 0;
    state.stats.todaySessions = 0;
    state.stats.history = [];
    state.stats.sessionLogs = [];
    saveState();
    renderStatsTab();
    updateHomeSlideDisplay();
    showToast(state.language === 'id' ? 'Data statistik telah direset.' : 'Statistics reset.');
  }
}

// ==========================================
// 14. TOAST NOTIFICATION UTILITY
// ==========================================

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-message');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  const controls = document.querySelector('.timer-controls-main');
  const controlsRect = controls?.getBoundingClientRect();
  if (controlsRect && controlsRect.height > 0) {
    const top = Math.min(controlsRect.bottom + 12, window.innerHeight - toast.offsetHeight - 12);
    toast.style.top = `${Math.max(12, top)}px`;
    toast.style.bottom = 'auto';
  } else {
    toast.style.top = 'auto';
    toast.style.bottom = '5rem';
  }
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ==========================================
// 15. FULLSCREEN (BOTTOM-RIGHT) & SHORTCUTS
// ==========================================

function toggleFullScreen() {
  audio.playClick();
  const fsBtn = document.getElementById('btn-fullscreen-bottom');
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      if (fsBtn) fsBtn.title = t('exitFullscreenTitle');
    }).catch(err => {
      console.warn('Gagal masuk mode fullscreen:', err);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        if (fsBtn) fsBtn.title = t('fullscreenTitle');
      });
    }
  }
}

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.code === 'Space') {
    e.preventDefault();
    toggleTimer();
  } else if (e.code === 'Escape') {
    if (document.getElementById('timer-reset-confirm')?.classList.contains('open')) {
      cancelTimerResetConfirmation();
      return;
    }
    closeSettingsModal();
    toggleAmbientDrawer(false);
    toggleTaskModal(false);
  }
});

// ==========================================
// 16. APP INITIALIZATION
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(state.settings.theme || 'lofi-sunset-room');

  // Initialize timer
  setTimerMode(state.timer.mode || 'focus', false);

  // Initialize Language & Translations
  updateAllTranslations();

  // Initialize Quotes
  showQuote(0);

  // Initialize Tasks
  renderTasksUI();

  // Initialize Spotify Embed
  renderSpotifyPresets();
  const initialUri = state.ambient.currentSpotifyUri || 'playlist/0vvXsWCC9xrXsKd4FyS8kM';
  const iframe = document.getElementById('spotify-embed-iframe');
  if (iframe) {
    iframe.src = `https://open.spotify.com/embed/${initialUri}?utm_source=generator&theme=0`;
  }

  // Initialize Ambient UI
  updateAmbientUI();

  // Initialize Navigation Slide
  switchSlide(state.currentSlide || 'focus');

  // Unlock AudioContext on first click
  document.body.addEventListener('click', () => {
    audio.ensureContextRunning();
  }, { once: true });

  console.log('✨ Pomodoro Studio Lofi Sanctuary ready!');
});
