# Scenario 4 · Nutanix Prism Central Deployment and Cluster Registration


In the main dashboard on the Prism Central click in Register or create new

![Screenshot](images/scenario-4-01.png)


Select the first option, I want to deploy a new Prism Central Instance

![Screenshot](images/scenario-4-02.png)


Under Installation Image section, PC details ISM-PC select “pc.7.5.1.1” and click Next

![Screenshot](images/scenario-4-03.png)


Select “Small” and click next
!!! note
    NOTE: Do NOT select X-Small, this option does not support cluster expansion


![Screenshot](images/scenario-4-04.png)


Add Network information:

- Network = select existing VMNetwork
- Subnet Mask = 255.255.192.0
- Gateway IP = 198.18.128.1
- DNS = 198.18.133.1
- NTP = 198.18.128.1
- Container = SelfServiceContainer
- Under General Details
- IP Address= 198.18.135.4
- Click Deploy

![Screenshot](images/scenario-4-05.png)


After the deployment begins it will take you back to the main dashboard and under the Prism Central widget you will see the deployment activity.

![Screenshot](images/scenario-4-07.png)


Once Prism Central deployment is completed, use a web browser to connect to the virtual IP assigned (198.18.135.4) and change the default

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


At the top select Infrastructure from the drop-down, then click on Prism Central Settings, select Prism Central Management and click edit

- Cluster name = PC-VIP-ISM
- Virtual IP = 198.18.135.5
- Click Update

![Screenshot](images/scenario-4-13.png)


From the drop-down menu select Admin Center then click Marketplace and click Enable Marketplace

![Screenshot](images/scenario-4-14.jpeg)


Once the Marketplace has been enabled, click “Get” on Foundation Central then click Deploy

![Screenshot](images/scenario-4-15.png)


While the Foundation Central app is being deployed on Prism Central, return to the Prism Element main dashboard, and confirm then click “Register or create a new “

![Screenshot](images/scenario-4-16.png)


Now click connect and hit next

![Screenshot](images/scenario-4-17.jpeg)


On the Prism Central configuration add

- Prism Central IP/FQDN = 198.18.135.5
- Username = admin
- Password = C1sco12345!
- Click Connect

![Screenshot](images/scenario-4-18.png)


The ISM cluster is now registered with and connected to the new Prism Central (PC-7.5.1.1)

![Screenshot](images/scenario-4-19.png)
