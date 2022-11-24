---
id: Setting up your VPS
title: Setting up your VPS
description: How to setup your new VPS.
sidebar_position: 1
custom_edit_url: null
image: http://website-34k.pages.dev/img/logo/Aurorahosts2%20resize-02.png
---

Before you can start using your new VPS you must first set it up and install your desired operating system (OS) on the VPS. In this guide you'll be guided through the setup process.

### Accessing the control panel

1. After your purchase of the vps head to the [services sections](https://billing.aurorahosts.com/clientarea.php?action=services) in the billing area and select your VPS.

<div class="text--center"><img src={require('../../images/VPS/Setup/1_Services.png').default} alt="Billing Area" height="90%" width="90%"/></div>

2. After you've selected your VPS you'll see the following:

<div class="text--center"><img src={require('../../images/VPS/Setup/2_Select_Control.png').default} alt="Opening the control panel" height="90%" width="90%"/></div>

3. Select `Open control panel` and you'll be automatically singed into the [vps control panel](https://virt.aurorahosts.com)

### Server setup

#### Selecting your server name & hostname
1. Now that you're on the vps control panel you'll be greeted with the server setup screen where you'll need to pick your server's name and hostname:

<div class="text--center"><img src={require('../../images/VPS/Setup/3_Selecting_Name.png').default} alt="Selecting your server name" height="90%" width="90%"/></div>

:::info
**Adding a hostname is optional** and if you don't know what to name your server select `Random name` and it'll generate a random name for your server.
::::

#### Installing an OS

1. After selecting your hostname you can select the OS you want to install:

<div class="text--center"><img src={require('../../images/VPS/Setup/4_Selecting_OS.png').default} alt="Selecting your OS" height="90%" width="90%"/></div>

2. From here you can select from a wide range of operating systems to install, if you can't find the one you want to install you can select `Self install` to manually upload the ISO and setup the OS of your choice.

---

### Generating an SSH key for Linux installs

1. If you've chosen to install any Linux distro you may see the following telling you that you have no SSH key selected:

<div class="text--center"><img src={require('../../images/VPS/Setup/9_No_SSHKey.png').default} alt="SSH" height="90%" width="90%"/></div>

2. To add an SSH key click the `Add key button` as shown in the screenshot below:

<div class="text--center"><img src={require('../../images/VPS/Setup/10_Adding_SSHKey.png').default} alt="SSH" height="90%" width="90%"/></div>

:::info
If you already have a key pair generated you can add your public key and click save.
:::
* If you don't already have a key pair you can easily generate one by clicking `Generate Key Pair` button:

<div class="text--center"><img src={require('../../images/VPS/Setup/11_Keypair_Generation.png').default} alt="SSH" height="90%" width="90%"/></div>

3. From here you'll need to click the generate button once more to finalize the key pair generation:

<div class="text--center"><img src={require('../../images/VPS/Setup/12_Generation.png').default} alt="SSH" height="90%" width="90%"/></div>

4. Once generated you'll be shown your key pair, a private and public key:

<div class="text--center"><img src={require('../../images/VPS/Setup/13_Keypair.png').default} alt="SSH" height="90%" width="90%"/></div>

:::warning Store your keys properly
You must store your public and private keys after the key pair has been created. You can do this by saving both keys as text files on your computer. Make sure you duplicate these and keep them safe since if you lose them, you won't be able to access any servers that use them without a bit of tinkering.
:::
---
