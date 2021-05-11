# Quali SSDT necessita ogni piattaforma

Per favore vedi la **tua specifica sezione ACPI per il tuo config.plist**, tutti gli SSDT necessari sono trattati con una piccola spiegazione. Ma per chiarire completamente ogni dubbio:

[[toc]]

## Desktop

| Piattaforme | **CPU** | **EC** | **AWAC** | **NVRAM** | **USB** |
| :-------: | :-----: | :----: | :------: | :-------: | :-----: |
| Penryn | / | [SSDT-EC](/Universal/ec/) | / | / | / |
| Lynnfield e Clarkdale | ^^ | ^^ | ^^ | ^^ | ^^ |
| SandyBridge | [CPU-PM](https://dortania.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management) (Da fare nel Post-Install) | ^^ | ^^ | ^^ | ^^ |
| Ivy Bridge | ^^ | ^^ | ^^ | ^^ | ^^ |
| Haswell | [SSDT-PLUG](/Universal/plug/) | ^^ | ^^ | ^^ | ^^ |
| Broadwell | ^^ | ^^ | ^^ | ^^ | ^^ |
| Skylake | ^^ | [SSDT-EC-USBX](/Universal/ec/) | ^^ | ^^ | ^^ |
| Kaby Lake | ^^ | ^^ | ^^ | ^^ | ^^ |
| Coffee Lake | ^^ | ^^ | [SSDT-AWAC](/Universal/awac/) | [SSDT-PMC](/Universal/nvram/) | ^^ |
| Comet Lake | ^^ | ^^ | ^^ | / | [SSDT-RHUB](/Universal/rhub/) |
| AMD (15/16h) | / | ^^ | / | ^^ | / |
| AMD (17h) | [SSDT-CPUR for B550 and A520](https://github.com/macos86/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-CPUR.aml) | ^^ | ^^ | ^^ | ^^ |

## Deskop di Alta Fascia

| Piattaforme | **CPU** | **EC** | **RTC** | **PCI** |
| :-------: | :-----: | :----: | :-----: | :-----: |
| Nehalem e Westmere | / | [SSDT-EC](/Universal/ec/) | / | / |
| Sandy Bridge-E | ^^ | ^^ | ^^ | [SSDT-UNC](/Universal/unc0/) |
| Ivy Bridge-E | ^^ | ^^ | ^^ | ^^ |
| Haswell-E | [SSDT-PLUG](/Universal/plug/) | [SSDT-EC-USBX](/Universal/ec/) | [SSDT-RTC0-RANGE](/Universal/awac/) | ^^ |
| Broadwell-E | ^^ | ^^ | ^^ | ^^ |
| Skylake-X | ^^ | ^^ | ^^ | / |

## Laptop

| Piattaforme | **CPU** | **EC** | **Backlight** | **I2C Trackpad** | **AWAC** | **USB** | **IRQ** |
| :-------: | :-----: | :----: | :-----------: | :--------------: | :------: | :-----: | :-----: |
| Clarksfield e Arrandale | / | [SSDT-EC](/Universal/ec/) | [SSDT-PNLF](/Laptops/backlight/) | / | / | / | [IRQ SSDT](/Universal/irq/) |
| SandyBridge | [CPU-PM](https://dortania.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management) (Run in Post-Install) | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Ivy Bridge | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Haswell | [SSDT-PLUG](/Universal/plug/) | ^^ | ^^ | [SSDT-GPI0](/Laptops/trackpad/) | ^^ | ^^ | ^^ |
| Broadwell | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Skylake | ^^ | [SSDT-EC-USBX](/Universal/ec/) | ^^ | ^^ | ^^ | ^^ | / |
| Kaby Lake | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Coffee Lake (ottava Generazione) e Whiskey Lake | ^^ | ^^ | [SSDT-PNLF-CFL](/Laptops/backlight/) | ^^ | [SSDT-AWAC](/Universal/awac/) | ^^ | ^^ |
| Coffee Lake (nona Generazione) | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Comet Lake | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Ice Lake | ^^ | ^^ | ^^ | ^^ | ^^ | [SSDT-RHUB](/Universal/rhub/) | ^^ |

Continuando:

| Piattaforme | **NVRAM** | **IMEI** |
| :-------: | :-------: | :------: |
| Clarksfield e Arrandale | / | / |
| Sandy Bridge | ^^| [SSDT-IMEI](/Universal/imei/) |
| Ivy Bridge | ^^ | ^^ |
| Haswell | ^^ | / |
| Broadwell | ^^ | ^^ |
| Skylake | ^^ | ^^ |
| Kaby Lake | ^^ | ^^ |
| Coffee Lake (8th Gen) and Whiskey Lake | ^^ | ^^ |
| Coffee Lake (9th Gen) | [SSDT-PMC](/Universal/nvram/) | ^^ |
| Comet Lake | / | ^^ |
| Ice Lake | ^^ | ^^ |
