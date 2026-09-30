# Scenario 5 · Nutanix Cluster Expansion


1. Return to the new Prism Central (add IP info here to make sure users will go to PC 2024 and not PC 2022) and click on View in my Apps

![Screenshot](images/scenario-5-01.jpeg)


![Screenshot](images/scenario-5-02.png)


2. Once the App is on running state from Admin Center > LCM > Prism Central Cluster

![Screenshot](images/scenario-5-03.png)


3. Click inventory and click Perform Inventory > Proceed

![Screenshot](images/scenario-5-04.png)


4. Wait until the Inventory is complete, then press Return to Inventory

![Screenshot](images/scenario-5-05.png)


5. Click Updates, check the box of Foundation Central then click View Upgrade Plan

![Screenshot](images/scenario-5-06.png)


6. Click Apply 1 Update and wait until the Foundation Central update is complete

![Screenshot](images/scenario-5-07.png)


![Screenshot](images/scenario-5-08.png)


7. Once the Foundation Central upgrade is complete, from the drop-down menu select Foundation Central
!!! note
    If Foundation Central does not load, just Clear the cookies and site data


![Screenshot](images/scenario-5-09.png)


![Screenshot](images/scenario-5-10.png)


8. Confirm the Foundation Central by clicking on the left side About Foundation Central

![Screenshot](images/scenario-5-11.jpeg)


9. Then under Manually Onboarded, click Onboard Nodes

![Screenshot](images/scenario-5-12.png)


10. Connect Hardware Provider
11. Fill in the required information

- Connection name= Intersight
- Hardware Provider = Cisco Intersight
- Intersight Deployment Type = SaaS
- Intersight Region & URL = North America
- Intersight API Key = <copy the one generated previously>
- Secret Key= <copy the one generated previously and saved to the desktop>

![Screenshot](images/scenario-5-13.png)


12. Select Intersight Standalone Mode and click Next

![Screenshot](images/scenario-5-14.png)


13. Select the node and click Onboard

![Screenshot](images/scenario-5-15.png)


14. Click “Prepare Nodes for Cluster”

![Screenshot](images/scenario-5-16.png)


15. Select the existing ISM cluster and click Next

![Screenshot](images/scenario-5-17.png)


16. Select the node that will be added to the cluster and click Next

![Screenshot](images/scenario-5-18.png)


17. Return to Cisco IMM tool and copy the AOS and AHV URLs

![Screenshot](images/scenario-5-19.png)


18. For the AHV checksum, the Cisco IMM tool can be used to generate the SHA256 checksum.

![Screenshot](images/scenario-5-20.png)


19. Host and CVM Network

- Gateway= 198.18.128.1
- Netmask= 255.255.192.0 /18
- Host and CVM VLAN = 10
- Click Next

![Screenshot](images/scenario-5-21.png)


20. Fill in the IP range for the hypervisor and CVM

![Screenshot](images/scenario-5-22.png)


21. Generate a Foundation Central API key by clicking the “+ Generate New Key”. Provide an alias and click Done. From the drop-down menu select the alias and click Submit

![Screenshot](images/scenario-5-23.png)


22. The node preparation process begins

![Screenshot](images/scenario-5-24.jpeg)


![Screenshot](images/scenario-5-25.jpeg)


23. One the node preparation is completed, click at the top drop-down menu and select infrastructure

![Screenshot](images/scenario-5-26.png)


24. On the left menu, select Hardware > Clusters

![Screenshot](images/scenario-5-27.png)


25. Check the ISM box and click on actions then select Expand Cluster

![Screenshot](images/scenario-5-28.png)


26. Check the box of the discovered node and click next

![Screenshot](images/scenario-5-29.png)


27. On the next page select HCI from the drop-down menu and click next

![Screenshot](images/scenario-5-30.png)


28. Add a name c240-node-4 and then click next

![Screenshot](images/scenario-5-31.png)


29. On the networking step click on skip Networking

![Screenshot](images/scenario-5-32.png)


30. For the software check, let’s wait for some time and then click next

![Screenshot](images/scenario-5-33.png)


31. Under review step, click Run Prechecks, wait until it completes

![Screenshot](images/scenario-5-34.png)


32. Once the precheck is completed, click on Expand Cluster

![Screenshot](images/scenario-5-35.png)


![Screenshot](images/scenario-5-36.png)


33. To review the progress of the cluster expansion, click task at the top right and click view all task

![Screenshot](images/scenario-5-37.png)


![Screenshot](images/scenario-5-38.png)


34. To confirm the new host has been added to the existing cluster, select Clusters on the left side

![Screenshot](images/scenario-5-39.png)


35. Return to Prism Element to review on the cluster main dashboard the Node count

![Screenshot](images/scenario-5-40.png)


36. Click Home at the top and from the drop-down menu select LCM

![Screenshot](images/scenario-5-41.png)


37. Select inventory and click Perform inventory

![Screenshot](images/scenario-5-42.png)


38. Click Proceed

![Screenshot](images/scenario-5-43.jpeg)


39. From the drop down select standalone Cisco IMC and click continue

![Screenshot](images/scenario-5-44.png)


40. Wait until the Inventory completes

![Screenshot](images/scenario-5-45.png)


41. Once it’s completed return to inventory

![Screenshot](images/scenario-5-46.jpeg)


42. Click updates and select software to review all available updates

![Screenshot](images/scenario-5-47.png)


43. This is optional if you would like to apply the updates available or keep the cluster with the current version.