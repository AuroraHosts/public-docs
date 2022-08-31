---
id: SSH Keys on Linux
title: Using your SSH keys on your Linux VPS.
description: How to use SSH keys on linux
sidebar_position: 2
custom_edit_url: null
image: http://website-34k.pages.dev/img/logo/Aurorahosts2%20resize-02.png
---

For the purpose of this guide we'll be using [Termius](https://termius.com/) as our SSH client of choice.

### Adding your SSH key to Termius

1. After downloading and signing up for termius, you'll need to go to the settings. To get there, click on the settings icon in the upper left hand corner of termius:

<div class="text--center"><img src={require('../../images/VPS/Using_SSHKeys/1_Termius_Settings.png').default} alt="Termius settings button" height="50%" width="50%"/></div>

2. Once in the settings head over to Keychain:

<div class="text--center"><img src={require('../../images/VPS/Using_SSHKeys/2_Termius_Pref.png').default} alt="Termius preferences" height="50%" width="50%"/></div>

3. Click on the `New key` button then select `Import or paste a key` button:

<div class="text--center"><img src={require('../../images/VPS/Using_SSHKeys/3_New_Key.png').default} alt="Termius adding a key" height="50%" width="50%"/></div>

4. Paste both your public and private keys that were generated in the previous guide:

<div class="text--center"><img src={require('../../images/VPS/Using_SSHKeys/4_Adding_Key.png').default} alt="Termius key added" height="50%" width="50%"/></div>

5. Once you're done click the save button at the top right and you've now added your key.
---

### Using the ssh key on your VPS

1. Head back over to the main termius windows and select the `ADD` button then click the `New Host` button: 

<div class="text--center"><img src={require('../../images/VPS/Using_SSHKeys/5_Termius_Host.png').default} alt="Termius key added" height="50%" width="50%"/></div>

2. Name your new server and place the IP of your VPS in the `Address` field and then set the username to `root`, afterwards click Keys:

<div class="text--center"><img src={require('../../images/VPS/Using_SSHKeys/6_Server_Setup.png').default} alt="Termius key added" height="50%" width="50%"/></div>

3. Then select the key that you created earlier:

<div class="text--center"><img src={require('../../images/VPS/Using_SSHKeys/7_Selecting_Key.png').default} alt="Termius key added" height="50%" width="50%"/></div>

:::success You're done!
You should now be able to connect to your server with the SSH key that you created.
:::

