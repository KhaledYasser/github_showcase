// Parsed from https://md8-habibullah.github.io/top-github-repos-list/
// Each repo: { displayName, owner, name, url, description }
// Each category: { id, emoji, title, blurb?, repos[], subcategories?: [{ id, emoji, title, repos[] }] }

const parse = (url) => {
  try {
    const u = new URL(url);
    const parts = u.pathname.replace(/^\/+|\/+$/g, '').split('/');
    return { owner: parts[0], name: parts[1] };
  } catch {
    return { owner: '', name: '' };
  }
};

const r = (displayName, url, description) => {
  const { owner, name } = parse(url);
  return { displayName, url, owner, name, description };
};

export const categories = [
  {
    id: 'top-rated',
    emoji: '⭐',
    title: 'Top Rated',
    blurb: 'The hottest and most-starred repositories trending on GitHub right now.',
    repos: [
      r('AI Agents for Beginners', 'https://github.com/microsoft/ai-agents-for-beginners', '12 Lessons to Get Started Building AI Agents.'),
      r('TrendRadar', 'https://github.com/sansan0/trendradar', 'AI-driven public opinion & trend monitor with multi-platform aggregation, RSS, and smart alerts.'),
      r('Ruview', 'https://github.com/ruvnet/ruview', 'WiFi DensePose turns commodity WiFi signals into real-time human pose estimation.'),
      r('RAG-Anything', 'https://github.com/hkuds/rag-anything', 'All-in-One RAG Framework.'),
      r('Awesome Agent Skills', 'https://github.com/voltagent/awesome-agent-skills', 'A curated collection of 1000+ agent skills compatible with Claude Code, Codex, Gemini CLI, Cursor, and more.'),
      r('Fincept Terminal', 'https://github.com/fincept-corporation/finceptterminal', 'Modern finance application offering advanced market analytics, investment research, and economic data tools.'),
      r('Claude Context', 'https://github.com/zilliztech/claude-context', 'Code search MCP for Claude Code. Make entire codebase the context for any coding agent.'),
      r('YT Lite', 'https://github.com/dayanch96/ytlite', 'A flexible enhancer for YouTube on iOS.'),
      r('Thunderbolt', 'https://github.com/thunderbird/thunderbolt', 'AI You Control: Choose your models. Own your data. Eliminate vendor lock-in.')
    ]
  },
  {
    id: 'roadmaps',
    emoji: '🚀',
    title: 'Roadmaps & Learning Paths',
    blurb: 'Structured guides and interactive roadmaps to plan your developer journey.',
    repos: [
      r('developer-roadmap', 'https://github.com/kamranahmedse/developer-roadmap', 'Interactive roadmaps, guides and paths for developers.'),
      r('project-based-learning', 'https://github.com/practical-tutorials/project-based-learning', 'Learn programming by building projects.'),
      r('coding-interview-university', 'https://github.com/jwasham/coding-interview-university', 'Mega study plan for coding interviews.'),
      r('system-design-primer', 'https://github.com/donnemartin/system-design-primer', 'Learn how to design large-scale systems.'),
      r('tech-interview-handbook', 'https://github.com/yangshun/tech-interview-handbook', 'Essential tech interview preparation.'),
      r('interview-prep', 'https://github.com/sudheerj/interview-prep', 'Everything you need to nail your tech interviews.'),
      r('public-apis', 'https://github.com/public-apis/public-apis', 'List of free public APIs for development.'),
      r('Machine-Learning-Roadmap', 'https://github.com/dair-ai/Machine-Learning-Roadmap', 'Roadmap to becoming a machine learning expert.'),
      r('frontend-dev-bookmarks', 'https://github.com/dypsilon/frontend-dev-bookmarks', 'Frontend development resources and best practices.'),
      r('web-developer-resources', 'https://github.com/markodenic/web-development-resources', 'Comprehensive web development resources.'),
      r('data-science-resources', 'https://github.com/krzjoa/data-science-resources', 'Data science learning path and resources.'),
      r('free-programming-books', 'https://github.com/EbookFoundation/free-programming-books', 'Free programming books for all languages and platforms.')
    ]
  },
  {
    id: 'ai-llm',
    emoji: '🤖',
    title: 'AI & LLM Engineering',
    blurb: 'Currently the most-starred category on GitHub — the "new" essential.',
    repos: [
      r('Ollama', 'https://github.com/ollama/ollama', 'Run large language models (Llama 3.2, Mistral) locally.'),
      r('LangChain', 'https://github.com/langchain-ai/langchain', 'The standard framework for building LLM-powered applications.'),
      r('Hugging Face Transformers', 'https://github.com/huggingface/transformers', 'State-of-the-art ML for PyTorch, TensorFlow and JAX.'),
      r('Claude Code', 'https://github.com/anthropics/claude-code', 'Agentic coding tool that lives in your terminal.'),
      r('Browser-use', 'https://github.com/browser-use/browser-use', 'Open-source AI for web automation.'),
      r('Aider', 'https://github.com/paul-gauthier/aider', 'AI pair programming in your terminal.'),
      r('Dorothy', 'https://github.com/Charlie85270/Dorothy', 'Orchestrate multiple AI CLI agents with Kanban management.')
    ]
  },
  {
    id: 'web',
    emoji: '🌐',
    title: 'Web Development',
    repos: [
      r('shadcn/ui', 'https://github.com/shadcn-ui/ui', 'Beautifully designed components with Radix UI + Tailwind CSS.'),
      r('Lucide', 'https://github.com/lucide-icons/lucide', 'Beautiful & consistent icons — a community fork of Feather.'),
      r('T3 Stack', 'https://github.com/t3-oss/create-t3-app', 'The best way to start a full-stack typesafe Next.js app.'),
      r('Directus', 'https://github.com/directus/directus', 'Turn any SQL database into an API and Admin UI.'),
      r('freeCodeCamp', 'https://github.com/freeCodeCamp/freeCodeCamp', 'Learn to code for free.'),
      r('30-seconds-of-code', 'https://github.com/30-seconds/30-seconds-of-code', 'Short JavaScript code snippets.'),
      r('javascript-algorithms', 'https://github.com/trekhleb/javascript-algorithms', 'Algorithms and data structures in JS.'),
      r('react', 'https://github.com/facebook/react', 'The library for web and native user interfaces.'),
      r('vue', 'https://github.com/vuejs/vue', 'The progressive JavaScript framework.'),
      r('angular', 'https://github.com/angular/angular', 'One framework, mobile & desktop.'),
      r('next.js', 'https://github.com/vercel/next.js', 'The React framework for production.'),
      r('nuxt', 'https://github.com/nuxt/nuxt', 'The Intuitive Vue Framework.'),
      r('awesome-react', 'https://github.com/enaqx/awesome-react', 'Curated list of React resources.'),
      r('awesome-vue', 'https://github.com/vuejs/awesome-vue', 'Curated resources for Vue.js devs.'),
      r('nodebestpractices', 'https://github.com/goldbergyoni/nodebestpractices', 'Node.js best practices.'),
      r('storybook', 'https://github.com/storybookjs/storybook', 'UI component explorer for frontend devs.'),
      r('css-protips', 'https://github.com/AllThingsSmitty/css-protips', 'Tips to improve your CSS skills.'),
      r('awesome-tailwindcss', 'https://github.com/aniftyco/awesome-tailwindcss', 'Resources for Tailwind CSS.'),
      r('jsdelivr', 'https://github.com/md8-habibullah/jsdelivr', 'A free CDN for open source, npm, GitHub, and more.')
    ]
  },
  {
    id: 'mobile',
    emoji: '📱',
    title: 'Mobile Development',
    repos: [
      r('React Native', 'https://github.com/facebook/react-native', 'Build native apps using React.'),
      r('Flutter', 'https://github.com/flutter/flutter', 'Beautiful native apps in record time.'),
      r('React-Native-Apps', 'https://github.com/ReactNativeNews/React-Native-Apps', 'Curated list of open source React Native apps.'),
      r('android-architecture', 'https://github.com/googlesamples/android-architecture', 'Android app architecture samples.'),
      r('awesome-flutter', 'https://github.com/Solido/awesome-flutter', 'Curated Flutter libraries, tools, tutorials.'),
      r('awesome-android-ui', 'https://github.com/wasabeef/awesome-android-ui', 'Android UI libraries.')
    ]
  },
  {
    id: 'languages',
    emoji: '👨‍💻',
    title: 'Programming Languages & Algorithms',
    repos: [
      r('TheAlgorithms/Python', 'https://github.com/TheAlgorithms/Python', 'All Algorithms implemented in Python.'),
      r('TheAlgorithms/Java', 'https://github.com/TheAlgorithms/Java', 'All Algorithms implemented in Java.'),
      r('TheAlgorithms/C-Plus-Plus', 'https://github.com/TheAlgorithms/C-Plus-Plus', 'All Algorithms implemented in C++.'),
      r('awesome-python', 'https://github.com/vinta/awesome-python', 'Curated list of awesome Python frameworks and libraries.'),
      r('awesome-go', 'https://github.com/avelino/awesome-go', 'Curated list of Go frameworks and libraries.'),
      r('You-Dont-Know-JS', 'https://github.com/getify/You-Dont-Know-JS', 'Book series diving deep into JS core mechanisms.'),
      r('rust', 'https://github.com/rust-lang/rust', 'Empowering everyone to build reliable and efficient software.'),
      r('awesome-rust', 'https://github.com/rust-unofficial/awesome-rust', 'Curated Rust libraries and resources.'),
      r('python-patterns', 'https://github.com/faif/python-patterns', 'Design patterns in Python.'),
      r('awesome-cpp', 'https://github.com/fffaraz/awesome-cpp', 'C++ resources and libraries.'),
      r('awesome-java', 'https://github.com/akullpp/awesome-java', 'Curated list of Java frameworks/libraries.'),
      r('awesome-typescript', 'https://github.com/dzharii/awesome-typescript', 'TypeScript resources and tools.')
    ]
  },
  {
    id: 'data-science',
    emoji: '🧪',
    title: 'Data Science & Machine Learning',
    repos: [
      r('tensorflow', 'https://github.com/tensorflow/tensorflow', 'Open-source machine learning framework.'),
      r('pytorch', 'https://github.com/pytorch/pytorch', 'Tensors and dynamic neural networks with GPU acceleration.'),
      r('scikit-learn', 'https://github.com/scikit-learn/scikit-learn', 'Machine Learning in Python.'),
      r('fastai', 'https://github.com/fastai/fastai', 'High-level framework for fast, accurate deep learning.'),
      r('pandas', 'https://github.com/pandas-dev/pandas', 'Data analysis library for Python.'),
      r('awesome-machine-learning', 'https://github.com/josephmisiti/awesome-machine-learning', 'Curated machine learning resources.'),
      r('Data-Science-For-Beginners', 'https://github.com/microsoft/Data-Science-For-Beginners', '10 weeks, 20 lessons — Data Science for all!'),
      r('data-science-interviews', 'https://github.com/alexeygrigorev/data-science-interviews', 'Data science interview questions and answers.'),
      r('awesome-deep-learning', 'https://github.com/ChristosChristofidis/awesome-deep-learning', 'Deep learning resources.'),
      r('awesome-data-science', 'https://github.com/academic/awesome-datascience', 'Data science resources.'),
      r('awesome-nlp', 'https://github.com/keon/awesome-nlp', 'Natural Language Processing resources.'),
      r('awesome-ai', 'https://github.com/huaweinoah/awesome-ai', 'Artificial Intelligence resources.')
    ]
  },
  {
    id: 'devops',
    emoji: '⚙️',
    title: 'Advanced DevOps & Cloud Native',
    repos: [
      r('free-for-dev', 'https://github.com/ripienaar/free-for-dev', 'List of free services for developers.'),
      r('devops-exercises', 'https://github.com/bregman-arie/devops-exercises', 'DevOps and SRE interview questions and exercises.'),
      r('kubernetes', 'https://github.com/kubernetes/kubernetes', 'Production-Grade Container Scheduling and Management.'),
      r('docker-ce', 'https://github.com/docker/docker-ce', 'Docker Community Edition.'),
      r('awesome-devops', 'https://github.com/iamdevop/awesome-devops', 'Curated DevOps resources.'),
      r('ansible', 'https://github.com/ansible/ansible', 'A radically simple IT automation platform.'),
      r('terraform', 'https://github.com/hashicorp/terraform', 'Infrastructure as Code.'),
      r('awesome-docker', 'https://github.com/veggiemonk/awesome-docker', 'A curated list of Docker resources.'),
      r('prometheus', 'https://github.com/prometheus/prometheus', 'Monitoring system & time series database.'),
      r('awesome-kubernetes', 'https://github.com/ramitsurana/awesome-kubernetes', 'Kubernetes curated resources.'),
      r('awesome-ciandcd', 'https://github.com/cicdops/awesome-ciandcd', 'CI/CD resources and tools.'),
      r('awesome-terraform', 'https://github.com/shuaibiyy/awesome-terraform', 'Curated list for Terraform.'),
      r('ansible (md8-habibullah)', 'https://github.com/md8-habibullah/ansible', 'Ansible playbooks, guides, and resources.'),
      r('Coolify', 'https://github.com/coollabsio/coolify', 'Self-hosted alternative to Heroku / Netlify / Vercel.'),
      r('Argo CD', 'https://github.com/argoproj/argo-cd', 'Declarative GitOps continuous delivery for Kubernetes.'),
      r('LocalStack', 'https://github.com/localstack/localstack', 'A fully functional local AWS cloud stack.'),
      r('Grafana', 'https://github.com/grafana/grafana', 'Open observability platform for analytics and monitoring.'),
      r('Pulumi', 'https://github.com/pulumi/pulumi', 'Infrastructure as Code using real programming languages.')
    ]
  },
  {
    id: 'cybersecurity',
    emoji: '🛡️',
    title: 'Cybersecurity & Pentesting',
    blurb: 'For authorized penetration testing, research, and infrastructure hardening only.',
    repos: [
      r('OWASP Top 10', 'https://github.com/OWASP/Top10', 'The standard awareness document for web application security.'),
      r('Gitleaks', 'https://github.com/gitleaks/gitleaks', 'Scan git repos for secrets like passwords, API keys, tokens.'),
      r('SQLMap', 'https://github.com/sqlmapproject/sqlmap', 'Automatic SQL injection and database takeover tool.'),
      r('Sherlock', 'https://github.com/sherlock-project/sherlock', 'Hunt down social media accounts by username.'),
      r('PayloadsAllTheThings', 'https://github.com/swisskyrepo/PayloadsAllTheThings', 'Useful payloads and bypasses for web app security.')
    ],
    subcategories: [
      {
        id: 'cyber-c2',
        emoji: '🎮',
        title: 'Command & Control (C2) & Remote Access',
        repos: [
          r('Sliver', 'https://github.com/BishopFox/sliver', 'Powerful cross-platform open-source C2 framework.'),
          r('Evil-WinRM', 'https://github.com/Hackplayers/evil-winrm', 'The ultimate shell for Windows post-exploitation.'),
          r('NetExec', 'https://github.com/Pennyw0rth/NetExec', 'Successor to CrackMapExec — automated network assessment.'),
          r('Havoc', 'https://github.com/HavocFramework/Havoc', 'Modern, malleable post-exploitation C2 framework.')
        ]
      },
      {
        id: 'cyber-botnets',
        emoji: '🤖',
        title: 'Botnets, Agents & AI Red Teaming',
        repos: [
          r('DeepTeam', 'https://github.com/confident-ai/deepteam', 'LLM red-teaming framework to simulate jailbreaks.'),
          r('Mirai (Research)', 'https://github.com/jgamblin/Mirai-Source-Code', 'Infamous IoT botnet source code (research only).'),
          r('Cai-Framework', 'https://github.com/aliasrobotics/cai', 'Cybersecurity AI for autonomous vulnerability agents.'),
          r('Honeymap', 'https://github.com/DinoTools/honeymap', 'Real-time visualization of world-wide honeypot attacks.')
        ]
      },
      {
        id: 'cyber-recon',
        emoji: '📡',
        title: 'Network Monitoring & Hidden Recon',
        repos: [
          r('Bettercap', 'https://github.com/bettercap/bettercap', 'Swiss Army knife for 802.11, BLE, Ethernet recon & MITM.'),
          r('RustScan', 'https://github.com/RustScan/RustScan', 'Modern port scanner — 65k ports in 3 seconds.'),
          r('Zabbix', 'https://github.com/zabbix/zabbix', 'Enterprise-grade monitoring for thousands of devices.'),
          r('Netdata', 'https://github.com/netdata/netdata', 'Per-second real-time health and performance monitoring.')
        ]
      },
      {
        id: 'cyber-osint',
        emoji: '🕵️',
        title: 'Advanced OSINT & Data Leaks',
        repos: [
          r('SpiderFoot', 'https://github.com/smicallef/spiderfoot', 'Automates OSINT from 100+ public data sources.'),
          r('Mary-SUE', 'https://github.com/md8-habibullah/Mary-SUE', 'Specialized script for harvesting username-linked data.'),
          r('Ciphey', 'https://github.com/Ciphey/Ciphey', 'Automated decryption tool using AI and NLP.')
        ]
      },
      {
        id: 'cyber-exploit',
        emoji: '💣',
        title: 'Exploitation & Payload Heavies',
        repos: [
          r('Metasploit Framework', 'https://github.com/rapid7/metasploit-framework', 'The world\'s most used penetration testing software.'),
          r('Impacket', 'https://github.com/fortra/impacket', 'Python classes for network protocols (SMB, MSRPC).'),
          r('Aircrack-ng', 'https://github.com/aircrack-ng/aircrack-ng', 'The standard for auditing wireless networks.')
        ]
      }
    ]
  },
  {
    id: 'system-design',
    emoji: '🏗️',
    title: 'System Design & Architecture',
    repos: [
      r('system-design-resources', 'https://github.com/InterviewReady/system-design-resources', 'Extensive system design resources.'),
      r('awesome-system-design', 'https://github.com/madd86/awesome-system-design', 'Curated list of system design materials.'),
      r('design-patterns-for-humans', 'https://github.com/kamranahmedse/design-patterns-for-humans', 'Design patterns explained simply.'),
      r('awesome-microservices', 'https://github.com/mfornos/awesome-microservices', 'Curated list on Microservices.'),
      r('awesome-architecture', 'https://github.com/pavel-shirshov/awesome-architecture', 'Software architecture resources.'),
      r('awesome-scalability', 'https://github.com/binhnguyennus/awesome-scalability', 'High scalability, availability, stability patterns.')
    ]
  },
  {
    id: 'awesome',
    emoji: '📚',
    title: 'Awesome Lists & Resources',
    repos: [
      r('awesome', 'https://github.com/sindresorhus/awesome', 'The most awesome curated lists on GitHub.'),
      r('awesome-awesomeness', 'https://github.com/bayandin/awesome-awesomeness', 'A curated list of awesome awesomeness.'),
      r('best-of', 'https://github.com/best-of-lists/best-of', 'Discover awesome open-source projects ranked by quality.'),
      r('awesome-lists', 'https://github.com/t3chnoboy/awesome-lists', 'List of awesome lists.'),
      r('awesome-cheatsheets', 'https://github.com/LeCoupa/awesome-cheatsheets', 'Useful programming cheatsheets.'),
      r('awesome-design', 'https://github.com/gztchan/awesome-design', 'Curated list of design resources.'),
      r('awesome-interview-questions', 'https://github.com/DopplerHQ/awesome-interview-questions', 'Interview questions by technology.'),
      r('top-github-repositories-which-everyone-should-look', 'https://github.com/md8-habibullah/top-github-repositories-which-everyone-should-look', 'Handpicked list of top GitHub repositories.')
    ]
  },
  {
    id: 'dev-tools',
    emoji: '🛠️',
    title: 'Developer Tools & Utilities',
    repos: [
      r('gitignore', 'https://github.com/github/gitignore', 'Useful .gitignore templates.'),
      r('ohmyzsh', 'https://github.com/ohmyzsh/ohmyzsh', 'Framework for managing your Zsh configuration.'),
      r('powerlevel10k', 'https://github.com/romkatv/powerlevel10k', 'Super flexible and fast Zsh theme.'),
      r('prettier', 'https://github.com/prettier/prettier', 'Opinionated code formatter.'),
      r('eslint', 'https://github.com/eslint/eslint', 'Pluggable JavaScript linter.'),
      r('homebrew', 'https://github.com/Homebrew/brew', 'The missing package manager for macOS (and Linux).'),
      r('nvm', 'https://github.com/nvm-sh/nvm', 'Node Version Manager.'),
      r('fzf', 'https://github.com/junegunn/fzf', 'A command-line fuzzy finder.'),
      r('tmux', 'https://github.com/tmux/tmux', 'Terminal multiplexer.'),
      r('ripgrep', 'https://github.com/BurntSushi/ripgrep', 'Fast command-line search tool.'),
      r('shields', 'https://github.com/badges/shields', 'Quality metadata badges for open source projects.'),
      r('IT Tools', 'https://github.com/CorentinTh/it-tools', 'Handy online tools for developers with great UX.')
    ]
  },
  {
    id: 'github-profile',
    emoji: '🏆',
    title: 'GitHub Profile & Achievements',
    repos: [
      r('github-profile-trophy', 'https://github.com/ryo-ma/github-profile-trophy', 'Show off your GitHub trophies on your profile.'),
      r('github-readme-stats', 'https://github.com/anuraghazra/github-readme-stats', 'Dynamic stats for your GitHub profile README.')
    ]
  },
  {
    id: 'themes',
    emoji: '🎨',
    title: 'Themes & Customizations',
    repos: [
      r('plymouth-themes', 'https://github.com/adi1090x/plymouth-themes', 'Collection of beautiful Linux boot splash themes.'),
      r('nerd-fonts', 'https://github.com/ryanoasis/nerd-fonts', 'Fonts patched with a high number of glyphs/icons.')
    ]
  },
  {
    id: 'design',
    emoji: '🖌️',
    title: 'Design, Frontend & UX',
    repos: [
      r('design-resources-for-developers', 'https://github.com/bradtraversy/design-resources-for-developers', 'Curated list of design resources.'),
      r('awesome-design-systems', 'https://github.com/alexpate/awesome-design-systems', 'Design systems, pattern libraries, and more.'),
      r('tailwindcss', 'https://github.com/tailwindlabs/tailwindcss', 'Utility-first CSS framework.'),
      r('bootstrap', 'https://github.com/twbs/bootstrap', 'The most popular HTML, CSS, and JS library.'),
      r('Font-Awesome', 'https://github.com/FortAwesome/Font-Awesome', 'The iconic font and CSS toolkit.'),
      r('awesome-css', 'https://github.com/awesome-css-group/awesome-css', 'CSS frameworks, tools, and resources.')
    ]
  },
  {
    id: 'visualization',
    emoji: '📊',
    title: 'Visualization, Data & Charts',
    repos: [
      r('awesome-visualization', 'https://github.com/sorrycc/awesome-visualization', 'Curated list of visualization libraries.'),
      r('d3', 'https://github.com/d3/d3', 'Bring data to life with SVG, Canvas and HTML.'),
      r('Chart.js', 'https://github.com/chartjs/Chart.js', 'Simple yet flexible JavaScript charting.'),
      r('awesome-dataviz', 'https://github.com/fasouto/awesome-dataviz', 'Curated list of data visualization libraries.'),
      r('echarts', 'https://github.com/apache/echarts', 'Powerful visualization library for the browser.')
    ]
  },
  {
    id: 'jobs',
    emoji: '💼',
    title: 'Job Search & Career',
    repos: [
      r('tech-jobs-with-relocation', 'https://github.com/AndrewStetsenko/tech-jobs-with-relocation', 'Tech jobs with relocation.'),
      r('engineering-blogs', 'https://github.com/kilimchoi/engineering-blogs', 'A curated list of engineering blogs.'),
      r('awesome-remote-job', 'https://github.com/lukasz-madon/awesome-remote-job', 'Curated list of remote jobs.')
    ]
  },
  {
    id: 'misc',
    emoji: '🗃️',
    title: 'Miscellaneous / General',
    repos: [
      r('Best-websites-a-programmer-should-visit', 'https://github.com/sdmg15/Best-websites-a-programmer-should-visit', 'Useful sites for programmers.'),
      r('what-happens-when', 'https://github.com/alex/what-happens-when', 'What happens when you type a URL into your browser.'),
      r('build-your-own-x', 'https://github.com/codecrafters-io/build-your-own-x', 'Tutorials on building your own DB, shell, etc.'),
      r('Hacker News API', 'https://github.com/HackerNews/API', 'Everything about Hacker News.'),
      r('movies-for-hackers', 'https://github.com/k4m4/movies-for-hackers', 'Movies every hacker should watch.')
    ]
  },
  {
    id: 'chat',
    emoji: '💬',
    title: 'Chat & Messaging Platforms',
    blurb: 'Top open-source chat and workspace messaging platforms.',
    repos: [
      r('Rocket.Chat', 'https://github.com/RocketChat/Rocket.Chat', 'The leading open source team chat platform.'),
      r('Mattermost', 'https://github.com/mattermost/mattermost', 'Secure, self-hosted Slack alternative for teams.'),
      r('Matrix Synapse', 'https://github.com/matrix-org/synapse', 'Matrix protocol reference server — decentralized messaging.'),
      r('Element Web', 'https://github.com/vector-im/element-web', 'The flagship Matrix client (formerly Riot).'),
      r('Telegram Desktop', 'https://github.com/telegramdesktop/tdesktop', 'Official open source desktop client for Telegram.'),
      r('Wire', 'https://github.com/wireapp/wire', 'Secure, cross-platform team collaboration.'),
      r('Zulip', 'https://github.com/zulip/zulip', 'Powerful threaded open source group chat.'),
      r('Rocket.Chat ReactNative', 'https://github.com/RocketChat/Rocket.Chat.ReactNative', 'Mobile client for Rocket.Chat.'),
      r('Jitsi Meet', 'https://github.com/jitsi/jitsi-meet', 'Secure, scalable open source video conferencing.'),
      r('SimpleX Chat', 'https://github.com/simplex-chat/simplex-chat', 'Private, decentralized, serverless messenger.'),
      r('Openfire', 'https://github.com/igniterealtime/Openfire', 'Real-time collaboration server based on XMPP.'),
      r('SOGo', 'https://github.com/Alinto/sogo', 'Groupware server with calendar, contacts, and chat.'),
      r('Baileys', 'https://github.com/adiwajshing/Baileys', 'Unofficial WhatsApp Web API for Node.js.')
    ]
  },
  {
    id: 'linux',
    emoji: '🐧',
    title: 'Linux & Command Line Tools',
    blurb: 'Master the Linux ecosystem — from fundamentals to high-performance modern replacements.',
    repos: [
      r('the-art-of-command-line', 'https://github.com/jlevy/the-art-of-command-line', 'Comprehensive tips and best practices for the command line.'),
      r('101-linux-commands-ebook', 'https://github.com/bobbyiliev/101-linux-commands-ebook', 'Open-source eBook with 101 essential Linux commands.'),
      r('linux-basics-course', 'https://github.com/kodekloudhub/linux-basics-course', 'Structured course covering Linux basics and shell scripting.'),
      r('LinuxCommandLine', 'https://github.com/danielmapar/LinuxCommandLine', 'Basic Linux commands and insights into the filesystem hierarchy.'),
      r('TermAdventure', 'https://github.com/NaiveNeuron/TermAdventure', 'Interactive UNIX learning tool as a text adventure game.'),
      r('tldr', 'https://github.com/tldr-pages/tldr', 'Simplified, community-driven man pages.'),
      r('bash_tutorial', 'https://github.com/krother/bash_tutorial', 'Hands-on bash exercises for the Linux command line.'),
      r('commandlineworkshop', 'https://github.com/nuitrcs/commandlineworkshop', 'Workshop introducing the basics of the bash shell.'),
      r('linux-free-tutorials', 'https://github.com/labex-labs/linux-free-tutorials', '80 free tutorials for Linux — comprehensive learning path.'),
      r('linux-beginner-guide', 'https://github.com/get543/linux-beginner-guide', 'Ultimate guide for beginner Linux users.')
    ],
    subcategories: [
      {
        id: 'linux-fundamentals',
        emoji: '🎓',
        title: 'Mastering the Fundamentals',
        repos: [
          r('the-art-of-command-line', 'https://github.com/jlevy/the-art-of-command-line', 'A masterclass on one page.'),
          r('tldr', 'https://github.com/tldr-pages/tldr', 'Practical, community-driven examples.'),
          r('101-linux-commands-ebook', 'https://github.com/bobbyiliev/101-linux-commands-ebook', 'Open-source eBook for a solid command foundation.'),
          r('linux-basics-course', 'https://github.com/kodekloudhub/linux-basics-course', 'Structured path for shell scripting and system hierarchy.')
        ]
      },
      {
        id: 'linux-modern',
        emoji: '🚀',
        title: 'Modern Unix Power Tools (Rust-Powered)',
        repos: [
          r('eza', 'https://github.com/eza-community/eza', 'A modern, maintained replacement for `ls`.'),
          r('bat', 'https://github.com/sharkdp/bat', 'A `cat` clone with syntax highlighting and git integration.'),
          r('zoxide', 'https://github.com/ajeetdsouza/zoxide', 'A smarter `cd` command that learns your habits.'),
          r('ripgrep', 'https://github.com/BurntSushi/ripgrep', 'The fastest text search tool (grep alternative).'),
          r('fd', 'https://github.com/sharkdp/fd', 'A simple, fast, user-friendly alternative to `find`.'),
          r('btop', 'https://github.com/aristocratos/btop', 'An immersive, high-performance system monitor.'),
          r('duf', 'https://github.com/muesli/duf', 'A better `df` utility with clear, colorful graphs.'),
          r('procs', 'https://github.com/dalance/procs', 'A modern replacement for `ps` written in Rust.')
        ]
      }
    ]
  },
  {
    id: 'shell',
    emoji: '🐚',
    title: 'Shell Customization & Terminal',
    blurb: 'Level up your terminal experience — emulators, frameworks, and aesthetics.',
    repos: [],
    subcategories: [
      {
        id: 'shell-emulators',
        emoji: '💻',
        title: 'Terminal Emulators (High-Performance Tier)',
        repos: [
          r('alacritty', 'https://github.com/alacritty/alacritty', 'Cross-platform, GPU-accelerated terminal emulator.'),
          r('kitty', 'https://github.com/kovidgoyal/kitty', 'Modern GPU-based terminal supporting images and ligatures.'),
          r('wezterm', 'https://github.com/wez/wezterm', 'Powerful GPU-accelerated terminal emulator in Rust.')
        ]
      },
      {
        id: 'shell-frameworks',
        emoji: '🔧',
        title: 'Shell Frameworks & Prompt Enhancements',
        repos: [
          r('ohmyzsh', 'https://github.com/ohmyzsh/ohmyzsh', 'Gold-standard framework for Zsh with 300+ plugins.'),
          r('starship', 'https://github.com/starship/starship', 'Minimal, blazing-fast, customizable prompt for any shell.'),
          r('powerlevel10k', 'https://github.com/romkatv/powerlevel10k', 'The fastest Zsh theme with a configuration wizard.'),
          r('zsh-autosuggestions', 'https://github.com/zsh-users/zsh-autosuggestions', 'Fish-like completion suggestions for Zsh.'),
          r('bash-it', 'https://github.com/Bash-it/bash-it', 'Community Bash commands and scripts.'),
          r('prezto', 'https://github.com/sorin-ionescu/prezto', 'A speedy Zsh configuration framework.'),
          r('awesome-shell', 'https://github.com/md8-habibullah/awesome-shell', 'Curated list focusing on shell style and customization.')
        ]
      },
      {
        id: 'shell-aesthetics',
        emoji: '🖼️',
        title: 'Terminal Information & Aesthetics',
        repos: [
          r('neofetch', 'https://github.com/dylanaraps/neofetch', 'A command-line system information tool.'),
          r('fastfetch', 'https://github.com/fastfetch-cli/fastfetch', 'A faster, feature-rich alternative to neofetch.'),
          r('fzf', 'https://github.com/junegunn/fzf', 'Essential command-line fuzzy finder.'),
          r('zsh-syntax-highlighting', 'https://github.com/zsh-users/zsh-syntax-highlighting', 'Syntax highlighting for the Zsh shell.'),
          r('lazygit', 'https://github.com/jesseduffield/lazygit', 'A beautiful terminal UI for git commands.'),
          r('glow', 'https://github.com/charmbracelet/glow', 'Render markdown on the CLI with high-quality styling.')
        ]
      }
    ]
  }
];

// Flattened list for search
export const allRepos = (() => {
  const list = [];
  const seen = new Set();
  for (const cat of categories) {
    const push = (repo, catTitle, subTitle) => {
      const key = `${repo.owner}/${repo.name}`;
      if (seen.has(key)) return;
      seen.add(key);
      list.push({ ...repo, category: catTitle, subcategory: subTitle || null });
    };
    (cat.repos || []).forEach((repo) => push(repo, cat.title));
    (cat.subcategories || []).forEach((sub) => {
      (sub.repos || []).forEach((repo) => push(repo, cat.title, sub.title));
    });
  }
  return list;
})();

export const findRepo = (owner, name) =>
  allRepos.find(
    (r) => r.owner?.toLowerCase() === owner?.toLowerCase() && r.name?.toLowerCase() === name?.toLowerCase()
  );
