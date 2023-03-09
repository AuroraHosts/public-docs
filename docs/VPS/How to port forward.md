---
id: VPS-Portforwarding
title: How to port forward on your Windows VPS 
description: How to port forward applications on your Windows VPS
sidebar_position: 8
custom_edit_url: null
image: https://docs.aurorahosts.com/img/EMB/port_forwarding.png
---

In this guide 2 methods will be shown to port forward. Port forwarding by allowing the application through the firewall and port forwarding by allow incoming connections to a specific port.

## Method 1
In method 1 we'll cover how you can port forward by allowing the application through the Windows firewall.

1. Open the control panel and lookup `Firewall` and click on `Allow an app through the Windows Firewall`
![Control panel](../../images/VPS/Port_forwarding/1_Controlpanel.png)

2. In the Allowed apps section click on `Allow another app`
![Allowed apps](../../images/VPS/Port_forwarding/2_Allowedapps.png)

3. Click on `Browse` and find the application you want to port forward, in this example we'll be allowing the FiveM application by adding the `FXServer.exe` application to the allowed list of applications, the `FXServer.exe` application can be found in the directory where your server artifacts are located
![Browse](../../images/VPS/Port_forwarding/3_Browse.png)

4. After you've selected the application you want to port forward click `Add`
![Adding](../../images/VPS/Port_forwarding/4_Adding.png)

## Method 2
In method 2 we'll cover how to port forward by allowing connection to a specific port through the Windows firewall

1. In the Windows search bar lookup `Advanced Security` and click on `Windows Defender Firewall With Advanced Secuirty`
![Advanced security](../../images/VPS/Port_forwarding/5_Advancedsecurity.png)

2. In the `Windows Firewall` click on `Inbound rules` then click `New rule` on the right side.
![Adding a rule](../../images/VPS/Port_forwarding/6_Addrule.png)

3. In the type section select `Port`
![Forwarding type](../../images/VPS/Port_forwarding/7_ruletype.png)

4. Select either `TCP` or `UDP` depending on the application. In this case we're port forwarding a FiveM server so we'll to create one TCP rule and one UDP rule for port `30120`
![Port creation](../../images/VPS/Port_forwarding/8_newport.png)

    In the Action and profile section click next.

5. Lastly you will need to name this rule, the name can be anything but to keep track of the rules created we're going to name it `FiveM TCP`
![Rule name](../../images/VPS/Port_forwarding/9_rulename.png)

:::info
For applications that accept both TCP and UDP connection you'll need to create a second rule for UDP otherwise the connections to the application may be denied.
:::