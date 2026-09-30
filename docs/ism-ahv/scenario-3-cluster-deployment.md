# Scenario 3 · Nutanix Cluster Deployment with AHV or ESX Hypervisor

!!! note
    Note In this scenario we’re deploying a cluster of 3 nodes, but if want to deploy the cluster with 4 nodes it can be done, but will have to skip the scenario 4 cluster expansion


1. In Foundation Central under Nodes > Manually Onboarded, select the first 3 nodes would like to use for the cluster deployment and click on Create Cluster

![Screenshot](images/scenario-3-01.png)


2. Enter the required information and click Next

- Name = ISM
- Intersight Organization= Intersight-Nutanix

![Screenshot](images/scenario-3-02.png)


3. Login into Cisco IMM Transition tool, the access is located on the bookmark, In the Application click in Software Repository, you will see some folders for different versions, for this deployment, we offer the option to select one of the Nutanix AOS and the hypervisor which is supported by the servers, check the versions and select the one you like to deploy using AOS with AHV hypervisor or check below the options of VMware ESXi
!!! note
    Check the versions here [https://portal.nutanix.com/page/compatibility-interoperability-matrix](https://portal.nutanix.com/page/compatibility-interoperability-matrix)


![Screenshot](images/scenario-3-03.jpeg)


![Screenshot](images/scenario-3-04.png)


![Screenshot](images/scenario-3-05.png)


![Screenshot](images/scenario-3-06.png)


![Screenshot](images/scenario-3-07.png)


![Screenshot](images/scenario-3-08.png)


![Screenshot](images/scenario-3-09.png)


![Screenshot](images/scenario-3-10.png)


![Screenshot](images/scenario-3-11.png)


![Screenshot](images/scenario-3-12.png)


![Screenshot](images/scenario-3-13.jpeg)


4. Choose one of the options to deploy the new cluster, access the desired folder and copy the AOS link, click the Ellipsis at the right side, then select share link

![Screenshot](images/scenario-3-14.png)


5. Return to Prism Central and paste the copied link into the AOS URL, then from the hypervisor option click on it and select AHV, then return to Cisco IMM to copy the link of AHV, select the ISO and click Next

![Screenshot](images/scenario-3-15.png)


6. Fill in the networking information a. Gateway = 198.18.128.1 b. Netmask = 255.255.192.0 c. Cluster Virtual IP = 198.18.135.2 d. Host and CVM VLAN = 10 e. Click Next

![Screenshot](images/scenario-3-16.png)


7. CVM Settings uses the following information:

- Timezone= America/New_York
- NTP=198.18.128.1
- DNS= 198.18.133.1
- Click Next

![Screenshot](images/scenario-3-17.png)


8. To complete the cluster Host IP, CVM IP and Host name use the image below as an example, you can choose any IP address from 198.18.135.10 up to 198.18.135.100
!!! note
    When adding the Host IP, skip one IP address between Host IP and CVM IP


![Screenshot](images/scenario-3-18.jpeg)


9. For the Foundation Central API Key, click the “+ Generate API key”, add a name, select the new API from the drop-down menu and click Submit

![Screenshot](images/scenario-3-19.jpeg)


10. The cluster deployment begins and takes approximately 1h15m to complete

![Screenshot](images/scenario-3-20.jpeg)


11. Return to Intersight, under Operate select Servers to check the Server Profile provisioning progress.

![Screenshot](images/scenario-3-21.png)


12. Let’s explore Intersight, under Configure select Profiles > UCS Server Profiles. Note the profiles are being created/configured under Activating status.

![Screenshot](images/scenario-3-22.jpeg)


13. In Configure > Policies, note all the UCS Server policies created as part of the automated process between Foundation Central and Intersight.

![Screenshot](images/scenario-3-23.png)


14. In the top right of the screen, click the Requests icon to monitor the undergoing tasks.

![Screenshot](images/scenario-3-24.png)


15. Click on any of the tasks to check the progress of the server configuration

![Screenshot](images/scenario-3-25.png)


16. Return to Prism Central to monitor the cluster deployment progress.
17. Once the cluster deployment is completed, click “Open Prism Element”

![Screenshot](images/scenario-3-26.jpeg)


18. On Prism Element UI, login with user “admin” (password: Nutanix/4u) and change the password to C1sco12345!

![Screenshot](images/scenario-3-27.jpeg)


19. After the password has been successfully changed, login with user admin and password C1sco12345!

![Screenshot](images/scenario-3-28.jpeg)


20. Complete the Nutanix EULA,

- Name = Cpoc
- Company = Cisco
- Job title = ISM
- Check the box and click accept and continue

![Screenshot](images/scenario-3-29.jpeg)


21. Keep the Pulse option by default, click Continue

![Screenshot](images/scenario-3-30.jpeg)


22. You should be taken to the main dashboard

![Screenshot](images/scenario-3-31.jpeg)


23. Click the cluster name on the top left (“ISM”) next to the X icon, add 198.18.135.3 in the Data Service IP field and click Save

![Screenshot](images/scenario-3-32.png)


24. Let’s start with some basic configuration, click Home at the top and select Settings then Network Configuration and click “Create Subnet”

![Screenshot](images/scenario-3-33.png)


25. On “Create Subnet” use the following information

- Subnet Name = VMNetwork
- Virtual Switch= vs0(default)
- VLAN ID = 10
- Click Save

![Screenshot](images/scenario-3-34.jpeg)


26. Then scroll up and select “Image configuration” and click “+ Upload image”.

![Screenshot](images/scenario-3-35.png)


27. In this case we are going to use Ubuntu as an example

- Name = Ubuntu ISO
- Image Type = ISO
- Storage Container = SelfServiceContainer
- Image Source
    - Upload File > Click “Browse…”, from the Downloads folder select Ubuntu ISO

- Click Save

![Screenshot](images/scenario-3-36.png)


![Screenshot](images/scenario-3-37.png)

!!! note
    The ISO upload should take a few minutes to complete.


28. Then click the drop-down menu on the top left and select “VM”

![Screenshot](images/scenario-3-38.png)


29. In the VM dashboard click “+ Create VM” on the top right

![Screenshot](images/scenario-3-39.png)


30. Let’s fill in the new VM information

- Name = Ubuntu VM
- vCPU(s)= 2
- Memory = 4
- Disk 1. + Add a New Disk 2. Logical size = 20 3. Click Add 4. Click the pencil of CD-ROM 5. Operation = Clone from Image Service 6. Image = select Ubuntu from the drop down 7. Click Update
- Network Adapters (NIC) 1. + Add New NIC 2. Subnet Name = VMNetwork 3. Click Add
- Click Save
- Then Click Table at the top left, next to overview

![Screenshot](images/scenario-3-40.png)

!!! note
    Note the new VM recently created


31. Right-click the Ubuntu VM and select Power On

![Screenshot](images/scenario-3-41.png)


32. Right-click the VM again and select Launch Console

![Screenshot](images/scenario-3-42.png)


33. On the VM console, close the Installation window and open a Firefox browser and point to “cisco.com” to test VM usability and connectivity to the Internet.

![Screenshot](images/scenario-3-43.jpeg)


34. This concludes this scenario; you can close the Ubuntu console to continue with the next scenario