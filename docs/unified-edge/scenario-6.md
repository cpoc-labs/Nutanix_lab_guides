# View and Monitor Nutanix Clusters in Cisco Intersight

A new menu item for Nutanix Clusters will appear on the left, which will contain links to the Prism Central
instance that was just claimed and all the clusters managed by that Prism Central instance.

    If you don't see the new Nutanix Cluster, just need to refresh the browser

 ![Screenshot](images/scenario-6-0.png)

Virtual Machine information can be viewed, including which cluster and node they operate on, virtual CPU and RAM information, and OS information if the VM guest tools are installed.

 ![Screenshot](images/scenario-6-1.png)
 ![Screenshot](images/scenario-6-2.png)

Return to Prism central 198.18.137.2, from the top drop down, select settings, then click on Image configuration

 ![Screenshot](images/scenario-6-3.png)

Before to continue with the Image configuration, we need to get the Ubuntu OS, return to the Cisco IMM Transition tool 198.18.129.100 to get the Ubuntu image

 ![Screenshot](images/scenario-6-4.png)

Click on OS and download the image of Ubuntu OS

 ![Screenshot](images/scenario-6-5.png)

Now return to Prism central Image configuration

In this case we are going to use Ubuntu as an example

Name = Ubuntu ISO

Image Type = ISO
Storage Container = DS-1
Image Source

Upload File > Click “Browse…”, from the Downloads folder select Ubuntu ISO
Click Save

 ![Screenshot](images/scenario-6-6.png)


Then click the drop-down menu on the top left and select “VM”

 ![Screenshot](images/scenario-6-7.png)

In the VM dashboard click “+ Create VM” on the top right

 ![Screenshot](images/scenario-6-8.png)

Let’s fill in the new VM information

Name = Ubuntu VM

vCPU(s)= 2
Memory = 4
Disk 1. + Add a New Disk 2. Logical size = 20 3. Click Add 4. Click the pencil of CD-ROM 5. Operation = Clone from Image Service 6. Image = select Ubuntu from the drop down 7. Click Update
Network Adapters (NIC) 1. + Add New NIC 2. Subnet Name = VMNetwork 3. Click Add
Click Save
Then Click Table at the top left, next to overview

 ![Screenshot](images/scenario-6-9.png)

## Cluster Expansion

Expansions of Nutanix clusters running on Cisco Unified Edge hardware are not allowed with the initial software release. Cluster expansions will be supported with a future software release.
