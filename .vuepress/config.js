module.exports = {
    title: 'Iniziamo Con ACPI',
    lang: 'it-IT',
    head: [
        [
            'meta',
            {
                name: 'theme-color',
                content: '#3eaf7c'
            }
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            }
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black'
            }
        ]
    ],
    base: '/Getting-Started-With-ACPI/',
    
    extendMarkdown: (md) => {
        md.use(require('markdown-it-multimd-table'), {
            rowspan: true,
        });
    },

    themeConfig: {
        lastUpdated: 'Ultimo Aggiornamento',
        repo: 'macos86/Getting-Started-With-ACPI',
        editLinks: true,
        smoothScroll: true,
        editLinkText: 'Aiutaci a tradurre questa pagina!',
        nav: [
            {
                text: 'Dortania Guides',
                ariaLabel: 'Language Menu',
                items: [
                    {
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
            title: 'Scegliere gli SSDT',
            sidebarDepth: 1,
            path: '/ssdt-platform'

        },
        {
            title: 'Metodi',
            collapsable: false,
            children: [
                '/ssdt-methods/',
                {
                    title: 'Metodi',
                    collapsable: false,
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
                '/dump',
                '/compile',
            ]
        },
        {
            title: 'Desktop',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/desktop', 'Disabilitare le dGPU nei desktop'],
            ]
        },
        {
            title: 'Laptop',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                ['/Laptops/backlight/', 'Risolvere Retroilluminazione'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Laptops/backlight/prebuilt', 'Precompilato'],
                        ['/Laptops/backlight/manual', 'Manuale'],
                    ]
                },
                ['/Laptops/trackpad/', 'Risolvere Trackpad'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Laptops/trackpad/prebuilt', 'Precompilato'],
                        ['/Laptops/trackpad/manual', 'Manuale'],
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
                ['/Universal/ec/', 'Controller Integrato'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/ec/prebuilt', 'Precompilato'],
                        ['/Universal/ec/ssdttime', 'SSDTTime'],
                        ['/Universal/ec/manual', 'Manuale'],
                    ]
                },
                ['/Universal/plug/', 'Gestione Energia CPU'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/plug/prebuilt', 'Precompilato'],
                        ['/Universal/plug/ssdttime', 'SSDTTime'],
                        ['/Universal/plug/manual', 'Manuale'],
                    ]
                },
                ['/Universal/awac/', 'AWAC vs RTC'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/awac/prebuilt', 'Precompilato'],
                        ['/Universal/awac/ssdttime', 'SSDTTime'],
                        ['/Universal/awac/manual', 'Manuale'],
                        ['/Universal/awac/manual-hedt', 'Manuale per HEDT'],
                    ]
                },
                ['/Universal/nvram/', 'NVRAM PMC'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/nvram/prebuilt', 'Precompilato'],
                        ['/Universal/nvram/ssdttime', 'SSDTTime'],
                        ['/Universal/nvram/manual', 'Manuale'],
                    ]
                },
                ['/Universal/rhub/', 'USB RHUB'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/rhub/prebuilt', 'Precompilato'],
                        ['/Universal/rhub/ssdttime', 'SSDTTime'],
                        ['/Universal/rhub/manual', 'Manuale'],
                    ]
                },
                ['/Universal/imei/', 'IMEI'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/imei/prebuilt', 'Precompilato'],
                        ['/Universal/imei/manual', 'Manuale'],
                    ]
                },
                ['/Universal/unc0/', 'Risolvere Brigde Uncore'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/unc0/prebuilt', 'Precompilato'],
                        ['/Universal/unc0/manual', 'Manuale'],
                    ]
                },
                ['/Universal/smbus/', 'Risolvere il Supporto SMBus'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/smbus/manual', 'Manuale'],
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
                ['/cleanup', 'Pulizia'],
            ]
        },
        {
            title: 'Altro',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/troubleshooting', 'Risoluzione dei Problemi'],
                ['https://macos86.github.io/CONTRIBUTING', 'Contribuire'],
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom'
    ]
}
