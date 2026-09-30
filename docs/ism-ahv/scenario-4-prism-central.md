# Scenario 4 · Nutanix Prism Central Deployment and Cluster Registration


10. In the main dashboard on the Prism Central click in Register or create new

![Screenshot](images/scenario-4-01.png)


11. Select the first option, I want to deploy a new Prism Central Instance

![Screenshot](images/scenario-4-02.png)


12. Under Installation Image section, select “pc.2024.3.1” and click Next

![Screenshot](images/scenario-4-03.png)


13. Select “Small” and click next
!!! note
    NOTE: Do NOT select X-Small, this option does not support cluster expansion


![Screenshot](images/scenario-4-04.png)


14. Add Network information:

- Network = select existing VMNetwork
- Subnet Mask = 255.255.192.0
- Gateway IP = 198.18.128.1
- DNS = 198.18.133.1
- NTP = 198.18.128.1
- Container = SelfServiceContainer
- Under General Details
- VM Name= PC-2024-3-ISM (Suggestion)
- IP Address= 198.18.135.4
- Click Next

![Screenshot](images/scenario-4-05.png)


- Prism Central Service Domain Name = prism-central.cluster.local
- Internal Network = Private Network [Default]
- Click Deploy

![Screenshot](images/scenario-4-06.png)


15. After the deployment begins it will take you back to the main dashboard and under the Prism Central widget you will see the deployment activity.

![Screenshot](images/scenario-4-07.png)


16. Once Prism Central deployment is completed, use a web browser to connect to the virtual IP assigned (198.18.135.4) and change the default

- First time logging in the credentials are:
    - Username = admin
    - Password= Nutanix/4u

![Screenshot](images/scenario-4-08.jpeg)


- New password C1sco12345!

![Screenshot](images/scenario-4-09.jpeg)


![Screenshot](images/scenario-4-10.jpeg)


17. After the password is changed continue with the EULA

![Screenshot](images/scenario-4-11.jpeg)


18. Keep Pulse by default and click Continue

![Screenshot](images/scenario-4-12.jpeg)


19. At the top select Infrastructure from the drop-down, then click on Prism Central Settings, select Prism Central Management and click edit

- Cluster name = PC-VIP-ISM
- Virtual IP = 198.18.135.5
- Click Update

![Screenshot](images/scenario-4-13.png)


20. From the drop-down menu select Admin Center then click Marketplace and click Enable Marketplace

![Screenshot](images/scenario-4-14.jpeg)


21. Once the Marketplace has been enabled, click “Get” on Foundation Central then click Deploy

![Screenshot](images/scenario-4-15.png)


22. While the Foundation Central app is being deployed on Prism Central, return to the Prism Element main dashboard, and confirm then click “Register or create a new “

![Screenshot](images/scenario-4-16.png)


23. Now click connect and hit next

![Screenshot](images/scenario-4-17.jpeg)


24. On the Prism Central configuration add

- Prism Central IP/FQDN = 198.18.135.5
- Username = admin
- Password = C1sco12345!
- Click Connect

![Screenshot](images/scenario-4-18.png)


25. The ISM cluster is now registered with and connected to the new Prism Central (PC 2024.3.1)

![Screenshot](images/scenario-4-19.png)
