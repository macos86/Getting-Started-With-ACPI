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
            path: '/ssdt-platform.md'

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
                        '/ssdt-methods/ssdt-prebuilt.md',
                        '/ssdt-methods/ssdt-easy.md',
                        '/ssdt-methods/ssdt-long.md',
                    ]
                },
            ]
        },
        {
            title: 'Manuale',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/dump.md',
                '/compile.md',
            ]
        },
        {
            title: 'Desktop',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/.md', 'Disabilitare le dGPU nei desktop'],
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
                        ['/Laptops/backlight/prebuilt.md', 'Precompilato'],
                        ['/Laptops/backlight/manual.md', 'Manuale'],
                    ]
                },
                ['/Laptops/trackpad/', 'Risolvere Trackpad'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Laptops/trackpad/prebuilt.md', 'Precompilato'],
                        ['/Laptops/trackpad/manual.md', 'Manuale'],
                    ]
                },
                ['/Laptops/laptop-disable.md', 'Disabilitare le dGPU dei Laptop'],
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
                        ['/Universal/ec/prebuilt.md', 'Precompilato'],
                        ['/Universal/ec/ssdttime.md', 'SSDTTime'],
                        ['/Universal/ec/manual.md', 'Manuale'],
                    ]
                },
                ['/Universal/plug/', 'Gestione Energia CPU'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/plug/prebuilt.md', 'Precompilato'],
                        ['/Universal/plug/ssdttime.md', 'SSDTTime'],
                        ['/Universal/plug/manual.md', 'Manuale'],
                    ]
                },
                ['/Universal/awac/', 'AWAC vs RTC'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/awac/prebuilt.md', 'Precompilato'],
                        ['/Universal/awac/ssdttime.md', 'SSDTTime'],
                        ['/Universal/awac/manual.md', 'Manuale'],
                        ['/Universal/awac/manual-hedt', 'Manuale per HEDT'],
                    ]
                },
                ['/Universal/nvram/', 'NVRAM PMC'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/nvram/prebuilt.md', 'Precompilato'],
                        ['/Universal/nvram/ssdttime.md', 'SSDTTime'],
                        ['/Universal/nvram/manual.md', 'Manuale'],
                    ]
                },
                ['/Universal/rhub/', 'USB RHUB'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/rhub/prebuilt.md', 'Precompilato'],
                        ['/Universal/rhub/ssdttime.md', 'SSDTTime'],
                        ['/Universal/rhub/manual.md', 'Manuale'],
                    ]
                },
                ['/Universal/imei/', 'IMEI'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/imei/prebuilt.md', 'Precompilato'],
                        ['/Universal/imei/manual.md', 'Manuale'],
                    ]
                },
                ['/Universal/unc0/', 'Risolvere Brigde Uncore'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/unc0/prebuilt.md', 'Precompilato'],
                        ['/Universal/unc0/manual.md', 'Manuale'],
                    ]
                },
                ['/Universal/smbus/', 'Risolvere il Supporto SMBus'],
                {
                    title: 'Metodi',
                    children: [
                        ['/Universal/smbus/manual.md', 'Manuale'],
                    ]
                },
                ['/Universal/irq.md', 'Fix di IRQ'],
                ['/Universal/spoof.md', 'Spoof della GPU'],
            ]
        },
        {
            title: 'Pulizia',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/cleanup.md', 'Pulizia'],
            ]
        },
        {
            title: 'Altro',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/troubleshooting.md', 'Risoluzione dei Problemi'],
                ['/CONTRIBUTING.md', 'Contribuire'],
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom'
    ]
}
