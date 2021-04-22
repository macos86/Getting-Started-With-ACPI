const {
    description
} = require('../package')

module.exports = {
    title: 'Getting Started With ACPI',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/Getting-Started-With-ACPI/',

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/macos86/Getting-Started-With-ACPI',
        editLinks: true,
        editLinkText: 'Aiutaci a tradurre questa pagina!',
        logo: 'homepage.png',
        nav: [{
            text: 'Dortania Guides',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Homepage (EN)',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Guida Installazione OpenCore',
                link: 'https://macos86.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'OpenCore Post-Install (EN)',
                link: 'https://dortania.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Wireless Buyers Guide (EN)',
                link: 'https://dortania.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'GPU Buyers Guide (EN)',
                link: 'https://dortania.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Anti Buyers Guide (EN)',
                link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introduzione',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['', 'Iniziamo con ACPI'],
                ['ssdt-platform', 'Scegliere gli SSDT'],
            ]

        },
        {
            title: 'Metodi',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/ssdt-methods/ssdt-methods',
                {
                    title: 'Metodi',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '/ssdt-methods/ssdt-prebuilt',
                        '/ssdt-methods/ssdt-easy',
                        '/ssdt-methods/ssdt-long',
                    ]
                },
            ]
        },
        {
            title: 'Manuale',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/Manual/dump',
                '/Manual/compile',
            ]
        },
        {
            title: 'Desktop',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/Desktops/desktop-disable', 'Disabilitare le dGPU nei desktop'],
            ]
        },
        {
            title: 'Laptop',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                ['/Laptops/backlight', 'Risolvere Retroilluminazione'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Laptops/backlight-methods/prebuilt', 'Precompilato'],
                        ['/Laptops/backlight-methods/manual', 'Manuale'],
                    ]
                },
                ['/Laptops/trackpad', 'Risolvere Trackpad'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Laptops/trackpad-methods/prebuilt', 'Precompilato'],
                        ['/Laptops/trackpad-methods/manual', 'Manuale'],
                    ]
                },
                ['/Laptops/laptop-disable', 'Disabilitare le dGPU dei Laptop'],
            ]
        },
        {
            title: 'Universali',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                ['/Universal/ec-fix', 'Controller Integrato'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/ec-methods/prebuilt', 'Precompilato'],
                        ['/Universal/ec-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/ec-methods/manual', 'Manuale'],
                    ]
                },
                ['/Universal/plug', 'Gestione Energia CPU'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/plug-methods/prebuilt', 'Precompilato'],
                        ['/Universal/plug-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/plug-methods/manual', 'Manuale'],
                    ]
                },
                ['/Universal/awac', 'AWAC vs RTC'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/awac-methods/prebuilt', 'Precompilato'],
                        ['/Universal/awac-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/awac-methods/manual', 'Manuale'],
                        ['/Universal/awac-methods/manual-hedt', 'Manuale per HEDT'],
                    ]
                },
                ['/Universal/nvram', 'NVRAM PMC'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/nvram-methods/prebuilt', 'Precompilato'],
                        ['/Universal/nvram-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/nvram-methods/manual', 'Manuale'],
                    ]
                },
                ['/Universal/rhub', 'USB RHUB'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/rhub-methods/prebuilt', 'Precompilato'],
                        ['/Universal/rhub-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/rhub-methods/manual', 'Manuale'],
                    ]
                },
                ['/Universal/imei', 'IMEI'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/imei-methods/prebuilt', 'Precompilato'],
                        ['/Universal/imei-methods/manual', 'Manuale'],
                    ]
                },
                ['/Universal/unc0', 'Risolvere Brigde Uncore'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/unc0-methods/prebuilt', 'Precompilato'],
                        ['/Universal/unc0-methods/manual', 'Manuale'],
                    ]
                },
                ['/Universal/smbus', 'Risolvere il Supporto SMBus'],
                {
                    title: 'Metodi',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/smbus-methods/manual', 'Manuale'],
                    ]
                },
                ['/Universal/irq', 'Fix di IRQ'],
                ['/Universal/spoof', 'Spoof della GPU'],
            ]
        },
        {
            title: 'Pulizia',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['cleanup', 'Pulizia'],
            ]
        },
        {
            title: 'Altro',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['troubleshooting', 'Risoluzione dei Problemi'],
                ['CONTRIBUTING', 'Contribuire'],
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
