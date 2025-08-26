/*
  Portfolio terminal UI — bilingual FR/EN
  Commands: help, about, skills, experience, projects, education, contact, lang, theme, clear, logos
*/
(function () {
  const el = {
    screen: document.getElementById('screen'),
    cmd: document.getElementById('cmd'),
    prompt: document.getElementById('promptLabel'),
    themeToggle: document.getElementById('themeToggle'),
    langToggle: document.getElementById('langToggle'),
  };

  const state = {
    lang: (localStorage.getItem('lang') || 'fr'),
    theme: (localStorage.getItem('theme') || 'dark'),
    welcomed: (localStorage.getItem('welcomed') || 'no'),
  };

  // Apply initial theme
  if (state.theme === 'light') document.body.classList.add('light');

  const t = {
    fr: {
      welcome: 'Bienvenue dans le portfolio de Mohamedou DADE. Tapez `help` pour voir les commandes.',
      prompt: 'med@linux:~$',
      help: [
        'Commandes disponibles:',
        '  help           — lister les commandes',
        '  about          — à propos',
        '  skills         — compétences',
        '  experience     — expériences',
        '  projects       — projets',
        '  education      — formation',
        '  contact        — contacts',
        '  logos          — partenaires/écoles',
        '  lang [fr|en]   — changer la langue',
        '  theme [dark|light|toggle] — thème',
        '  clear          — nettoyer l’écran',
      ].join('\n'),
      about: (
        'Ingénieur logiciel (ESP — R&T). Intérêt pour Cloud & DevOps, IA, cybersécurité.\n' +
        'Expérience en développement web/mobile et déploiements sur AWS/VM.'
      ),
      skills: (
        'Langages: C/C++, Java, Python, JavaScript, HTML/CSS, PL/SQL\n' +
        'Technologies: Angular, Spring Boot, Django, Flutter, Docker, ELK, Git, Jenkins, MongoDB, MySQL, PostgreSQL, Leaflet, AWS\n' +
        'Domaines: Web/Mobile, IA, Cloud & DevOps, Cybersécurité'
      ),
      experience: [
        {
          logo: 'logos/abc.png',
          title: 'Stage en alternance — Advanced Biz Consulting (ABC)',
          dates: 'Oct. 2024 – Jan. 2025, Nouakchott',
          bullets: [
            'Développement d’une app mobile de test de vitesse (Flutter).',
            'Ajout de métriques avancées: ping, jitter.',
            'Tableaux de bord et analyses via Kibana.',
          ],
          stack: 'Flutter · ELK · Git',
        },
        {
          logo: 'logos/richatt.png',
          title: 'Stage Ouvrier — RICHATT',
          dates: 'Juil. 2024 – Août 2024, Nouakchott',
          bullets: [
            'Découverte des processus, outils et projets de l’entreprise.',
            'Dév. d’une plateforme de gestion de pétitions (JHipster).',
            'Stack: Spring, Angular, PostgreSQL.',
          ],
          stack: 'JHipster · Spring · Angular · PostgreSQL',
        },
        {
          logo: 'logos/ibt.png',
          title: 'Stagiaire — Ibtikar Technologies',
          dates: 'Juil. 2025 – Août 2025, Nouakchott',
          bullets: [
            'Participation à une app de communication.',
            'Dashboard d’administration en Next.js.',
            'App mobile en React Native connectée à Rocket.Chat.',
          ],
          stack: 'Next.js · React Native · Rocket.Chat',
        },
        {
          logo: '',
          title: 'Projet en ligne — Immobilier (France)',
          dates: '2025',
          bullets: [
            'Configuration Traefik (reverse proxy) et authentification Keycloak.',
            'Déploiement de l’application web sur VM en ligne.',
          ],
          stack: 'Traefik · Keycloak · Linux VM · Docker',
        },
      ],
      projects: [
        '* MECANI’AIDE (2024): App mobile & web pour connecter mécanicien et client — Flutter, Django, MySQL.',
        '* Gestion des Horaires (2024): App pour l’ESP — Spring Boot, Google API.',
        '* SaaS Cartographie (2025): Visualisation géographique interactive — Angular, Leaflet, Python, PostgreSQL, AWS.',
        '* Gestion de scolarité ESP: Angular + Spring.',
      ].join('\n'),
      education: [
        '* ESP — Élève ingénieur informatique, Réseaux & Télécoms (2023 – présent).',
        '* IPGEI — Classes préparatoires MPSI/PSI (2021 – 2023).',
        '* Bac Maths — Lycée de Tidjikja (2021).',
      ].join('\n'),
      contact: [
        'Email: 23009@esp.mr',
        'GitHub: https://github.com/med23009',
        'Téléphone: +222 49955421',
        'Localisation: Sebkha, Nouakchott, Mauritanie',
      ].join('\n'),
      changedLang: 'Langue définie sur: ',
      changedTheme: 'Thème activé: ',
      unknown: 'Commande inconnue. Tapez `help`.',
      logosTitle: 'Logos:',
    },
    en: {
      welcome: 'Welcome to Mohamedou DADE’s portfolio. Type `help` to list commands.',
      prompt: 'med@linux:~$',
      help: [
        'Available commands:',
        '  help           — list commands',
        '  about          — about me',
        '  skills         — skills',
        '  experience     — work experience',
        '  projects       — projects',
        '  education      — education',
        '  contact        — contact info',
        '  logos          — partner/schools logos',
        '  lang [fr|en]   — set language',
        '  theme [dark|light|toggle] — switch theme',
        '  clear          — clear screen',
      ].join('\n'),
      about: (
        'Software engineer (ESP — Networks & Telecom). Interested in Cloud & DevOps, AI, cybersecurity.\n' +
        'Experience in web/mobile development and deployments on AWS/VM.'
      ),
      skills: (
        'Languages: C/C++, Java, Python, JavaScript, HTML/CSS, PL/SQL\n' +
        'Technologies: Angular, Spring Boot, Django, Flutter, Docker, ELK, Git, Jenkins, MongoDB, MySQL, PostgreSQL, Leaflet, AWS\n' +
        'Domains: Web/Mobile, AI, Cloud & DevOps, Cybersecurity'
      ),
      experience: [
        {
          logo: 'logos/abc.png',
          title: 'Apprenticeship — Advanced Biz Consulting (ABC)',
          dates: 'Oct 2024 – Jan 2025, Nouakchott',
          bullets: [
            'Built a mobile internet speed test app (Flutter).',
            'Added advanced metrics: ping, jitter.',
            'Analytics dashboards with Kibana.',
          ],
          stack: 'Flutter · ELK · Git',
        },
        {
          logo: 'logos/richatt.png',
          title: 'Industrial Intern — RICHATT',
          dates: 'Jul 2024 – Aug 2024, Nouakchott',
          bullets: [
            'Explored company processes, tools and projects.',
            'Developed a petitions management platform (JHipster).',
            'Stack: Spring, Angular, PostgreSQL.',
          ],
          stack: 'JHipster · Spring · Angular · PostgreSQL',
        },
        {
          logo: 'logos/ibt.png',
          title: 'Intern — Ibtikar Technologies',
          dates: 'Jul 2025 – Aug 2025, Nouakchott',
          bullets: [
            'Contributed to a communication application.',
            'Admin dashboard with Next.js.',
            'React Native mobile app connected to Rocket.Chat.',
          ],
          stack: 'Next.js · React Native · Rocket.Chat',
        },
        {
          logo: '',
          title: 'Online project — Real estate (France)',
          dates: '2025',
          bullets: [
            'Configured Traefik (reverse proxy) and Keycloak authentication.',
            'Deployed the web application on an online VM.',
          ],
          stack: 'Traefik · Keycloak · Linux VM · Docker',
        },
      ],
      projects: [
        '* MECANI’AIDE (2024): Mobile & web app connecting mechanics and clients — Flutter, Django, MySQL.',
        '* Timetable Management (2024): ESP — Spring Boot, Google API.',
        '* Mapping SaaS (2025): Interactive geovisualization — Angular, Leaflet, Python, PostgreSQL, AWS.',
        '* ESP School Management: Angular + Spring.',
      ].join('\n'),
      education: [
        '* ESP — Computer Engineering, Networks & Telecom (2023 – present).',
        '* IPGEI — Preparatory classes MPSI/PSI (2021 – 2023).',
        '* Math Baccalaureate — Lycée de Tidjikja (2021).',
      ].join('\n'),
      contact: [
        'Email: 23009@esp.mr',
        'GitHub: https://github.com/med23009',
        'Phone: +222 49955421',
        'Location: Sebkha, Nouakchott, Mauritania',
      ].join('\n'),
      changedLang: 'Language set to: ',
      changedTheme: 'Theme set to: ',
      unknown: 'Unknown command. Type `help`.',
      logosTitle: 'Logos:',
    }
  };

  function write(lines, cls = '') {
    const arr = Array.isArray(lines) ? lines : String(lines).split('\n');
    for (const line of arr) {
      const div = document.createElement('div');
      div.className = `line ${cls}`.trim();
      div.textContent = line;
      el.screen.appendChild(div);
    }
    el.screen.scrollTop = el.screen.scrollHeight;
  }

  function clear() {
    el.screen.innerHTML = '';
  }

  function setLang(lang) {
    if (!['fr', 'en'].includes(lang)) return;
    state.lang = lang;
    localStorage.setItem('lang', lang);
    // Update initial prompt label text
    el.prompt.textContent = t[state.lang].prompt;
    // Feedback
    write(t[state.lang].changedLang + lang, 'help');
  }

  function setTheme(mode) {
    if (mode === 'toggle') mode = (state.theme === 'dark' ? 'light' : 'dark');
    if (!['dark', 'light'].includes(mode)) return;
    state.theme = mode;
    localStorage.setItem('theme', mode);
    if (mode === 'light') document.body.classList.add('light');
    else document.body.classList.remove('light');
    write(t[state.lang].changedTheme + mode, 'help');
  }

  function printLogos() {
    write(t[state.lang].logosTitle, 'section-title');
    const row = document.createElement('div');
    row.className = 'logo-row';
    const logos = ['logos/esp.png', 'logos/ipgei.png', 'logos/abc.png', 'logos/richatt.png', 'logos/ibt.png'];
    logos.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'logo';
      row.appendChild(img);
    });
    el.screen.appendChild(row);
  }

  function renderExperiences() {
    const items = t[state.lang].experience;
    items.forEach((it, idx) => {
      const wrap = document.createElement('div');
      wrap.className = 'exp-item';

      const img = document.createElement('img');
      if (it.logo) img.src = it.logo;
      img.alt = 'logo';
      wrap.appendChild(img);

      const body = document.createElement('div');
      const title = document.createElement('div');
      title.className = 'exp-title';
      title.textContent = it.title;
      const dates = document.createElement('div');
      dates.className = 'exp-dates';
      dates.textContent = it.dates;
      const ul = document.createElement('ul');
      ul.className = 'exp-bullets';
      it.bullets.forEach(b => {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
      });
      const stack = document.createElement('div');
      stack.className = 'help';
      stack.textContent = it.stack;

      body.appendChild(title);
      body.appendChild(dates);
      body.appendChild(ul);
      body.appendChild(stack);
      wrap.appendChild(body);
      el.screen.appendChild(wrap);
    });
    el.screen.scrollTop = el.screen.scrollHeight;
  }

  function exec(input) {
    const [cmd, ...args] = input.trim().split(/\s+/);
    const langPack = t[state.lang];

    switch ((cmd || '').toLowerCase()) {
      case '':
        return;
      case 'help':
        write(langPack.help, 'help');
        break;
      case 'about':
        write(langPack.about);
        break;
      case 'skills':
        write(langPack.skills);
        break;
      case 'experience':
        renderExperiences();
        break;
      case 'projects':
        write(langPack.projects);
        break;
      case 'education':
        write(langPack.education);
        break;
      case 'contact':
        write(langPack.contact);
        break;
      case 'lang': {
        const val = (args[0] || '').toLowerCase();
        if (val) setLang(val);
        else write('fr | en', 'help');
        break;
      }
      case 'theme': {
        const val = (args[0] || 'toggle').toLowerCase();
        setTheme(val);
        break;
      }
      case 'clear':
        clear();
        break;
      case 'logos':
        printLogos();
        break;
      default:
        write(langPack.unknown, 'err');
    }
  }

  function boot() {
    // Prompt and welcome
    el.prompt.textContent = t[state.lang].prompt;
    // Intro with avatar (first visit)
    if (state.welcomed !== 'yes') {
      const line = document.createElement('div');
      const img = document.createElement('img');
      img.className = 'avatar';
      img.src = 'logos/me.jpeg';
      img.alt = 'Profile';
      line.appendChild(img);
      const text = document.createElement('span');
      text.textContent = 'Mohamedou DADE — Software Engineer';
      line.appendChild(text);
      el.screen.appendChild(line);
      write('GitHub: github.com/med23009');
      write('');
      write(t[state.lang].welcome, 'help');
      localStorage.setItem('welcomed', 'yes');
      state.welcomed = 'yes';
    } else {
      write('┌───────────────────────────────────────────────┐');
      write('│  Mohamedou DADE — Software Engineer           │');
      write('│  GitHub: github.com/med23009                  │');
      write('└───────────────────────────────────────────────┘');
      write('');
      write(t[state.lang].welcome, 'help');
      write('');
    }
    write('› Try: help | about | skills | experience | projects | education | contact | lang en | theme toggle', 'help');
    el.cmd.focus();
  }

  // Input handling
  const commands = ['help','about','skills','experience','projects','education','contact','logos','lang','theme','clear'];

  el.cmd.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const value = el.cmd.value;
      // Echo command
      write(`${t[state.lang].prompt} ${value}`, 'k');
      exec(value);
      el.cmd.value = '';
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = el.cmd.value.trim();
      const [first, ...rest] = val.split(/\s+/);
      if (!val || rest.length > 0) return; // complete only first token
      const matches = commands.filter(c => c.startsWith(first.toLowerCase()));
      if (matches.length === 1) {
        el.cmd.value = matches[0] + ' ';
      } else if (matches.length > 1) {
        write(matches.join('  '), 'help');
      }
    }
  });

  // Buttons
  el.themeToggle.addEventListener('click', () => setTheme('toggle'));
  el.langToggle.addEventListener('click', () => setLang(state.lang === 'fr' ? 'en' : 'fr'));

  // Boot
  boot();
})();
