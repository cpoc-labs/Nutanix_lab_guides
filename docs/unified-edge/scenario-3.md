# Scenario 3 	Witness VM Installation and configuration (Optional)

A Witness VM is highly recommended for 2-node clusters or clusters configured for Metro Availability
The witness VM makes failover decisions during network outages or site availability interruptions to avoid splitbrain
scenarios.
The witness VM must reside in a different failure domain from the clusters it is monitoring, meaning it has its own
separate power and independent network communication to both monitored sites.

Go to CIsco IMM Transition tool, see the bookmark or access 198.18.128.100 admin / C1sco12345, then select WitnessVM and download all content

 ![Screenshot](images/scenario-3-01.png)


Return to the recent created cluster and click on Deployment Configuration, there will see the Cluster VIP 198.18.137.2

  ![Screenshot](images/scenario-3-02.png)

Open a new tab and login to the new Prism 198.18.137.2, admin / nutanix/4u 
Need to create a new password, use C1sco12345!

  ![Screenshot](images/scenario-3-03.png)

For Nutanix EULA fill the information, check the box and accept and continue
 Name= cpoc
 Company= Cisco
 Job tile= UE

  ![Screenshot](images/scenario-3-04.png)

Click home at the top, then select settigns, click on Image Configuration and + upload Image

  ![Screenshot](images/scenario-3-05.png)

Fill the information of the new Image, 
Name= Witness VM boot
Image Type = DISK
Storage Container = SelfServiceContainer

click on Upload a file and click Browse and save

  ![Screenshot](images/scenario-3-06.png)

Repeat the steps to load the data and home files

  ![Screenshot](images/scenario-3-07.png)
  ![Screenshot](images/scenario-3-08.png)
  ![Screenshot](images/scenario-3-09.png)

Deploy the Witness VM,
Click at the top dropdown menu and select VM, click + create VM

  ![Screenshot](images/scenario-3-10.png)

Add the name  Witness_VM_AHV, add 2 vCPUs 

  ![Screenshot](images/scenario-3-11.png)

On memory add 6 Gb and select legacy BIOS 

  ![Screenshot](images/scenario-3-12.png)

Add all the three disk images as ISCI , clone from image service
First Boot disk
Second Home disk
final Data disk

  ![Screenshot](images/scenario-3-13.png)
  ![Screenshot](images/scenario-3-14.png)

Now click on + Add New Nic, select Add Network 

  ![Screenshot](images/scenario-3-15.png)

Create Subnet, Name VM_network, Virtul Switch vs0, Vlan ID 10, click Save 

  ![Screenshot](images/scenario-3-16.png)

Click the x and the new subnet will be add to on the new NIC, then click add

  ![Screenshot](images/scenario-3-17.png)

Now save the new VM and boot

  ![Screenshot](images/scenario-3-18.png)

Click on table at the top left to view the new VM and power on
 
  ![Screenshot](images/scenario-3-19.png)

