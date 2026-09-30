# Scenario 1 · Claim Servers and Profile Creation on Cisco Intersight

Cisco Intersight Claim Servers is a process used to register or "claim" physical infrastructure devices (like Cisco UCS servers or Nexus switches) to the Cisco Intersight platform. Intersight is a cloud-based infrastructure management tool that provides centralized monitoring, configuration, and lifecycle management for Cisco data center hardware.


1. Click on cpoc-win10-1 on the main topology, on the left side select remote access and then click on web RDP to log in

![Screenshot](images/scenario-1-01.png)


2. Once in the workstation open firefox browser

![Screenshot](images/scenario-1-02.jpeg)


3. Log in to one Fabric Interconnect’s web console via HTTPS with a web browser using the IP address 198.18.135.9 admin / C1sco12345! - Retrieve the Device ID and the Claim Code from the console page by clicking on Device Connector at the top.

![Screenshot](images/scenario-1-03.jpeg)


4. In Cisco Intersight, go to the System area, click on Targets, then Claim a New Target

![Screenshot](images/scenario-1-04.jpeg)


5. Select Cisco UCS Domain (Intersight Managed) then enter the Device ID and Claim Code, then click Claim. Repeat for all the servers to be used in your new cluster

![Screenshot](images/scenario-1-05.png)


![Screenshot](images/scenario-1-06.jpeg)

A Domain Profile must be created and deployed to the Fabric Interconnects. The Domain Profile defines the roles of the ports on the Fabric Interconnects, the VLANs used on the network and several other domain-wide policy settings such as QoS. After the Domain Profile is deployed the rackmount servers and/or modular blades will discover and can then be onboarded in Foundation Central and targeted for a Nutanix cluster deployment. Ensure that the profile and all the associated policies are created in the Organization that also contains the Resource Group for the Fabric Interconnects and servers.


![Screenshot](images/scenario-1-07.png)

Select the appropriate Organization in the Intersight account and give the policy a name. Select the Fabric Interconnect pair the policy will be applied to.


![Screenshot](images/scenario-1-08.png)


![Screenshot](images/scenario-1-09.png)

Select the VLAN policy for Fabric Interconnect A, then select to create a new VLAN policy.


![Screenshot](images/scenario-1-10.png)


![Screenshot](images/scenario-1-11.png)

Select the appropriate organization, enter a name for the VLAN policy for Fabric Interconnects, click Next, then select to add a VLAN


![Screenshot](images/scenario-1-12.png)

Enter a prefix and the VLAN ID for the new VLAN, then click to select the Multicast policy. Select to create a new Multicast policy. Select the appropriate organization, enter a name for the new Multicast policy and click Next.


![Screenshot](images/scenario-1-13.png)


![Screenshot](images/scenario-1-14.png)


![Screenshot](images/scenario-1-15.png)

Leave the default settings for the Multicast policy and click Create. Click Add to create the new VLAN in the VLAN policy.


![Screenshot](images/scenario-1-16.png)


![Screenshot](images/scenario-1-17.png)

If any additional VLANs need to communicate via the uplinks from this Fabric Interconnect pair, click Add VLANs and create them as was done for the first VLAN. Click Create to finally finish creating the VLAN policy. Click to select the VLAN policy to apply for Fabric Interconnect B.


![Screenshot](images/scenario-1-18.png)

Select the VLAN policy that was just created so that both Fabric Interconnects have the same VLAN policy configured, then click Next.


![Screenshot](images/scenario-1-19.png)

Click to select the Port policy for Fabric Interconnect A then click Create New.


![Screenshot](images/scenario-1-20.png)

Select the appropriate organization, enter a name for the Port policy and select the model of Fabric Interconnect matching the hardware in use, then click next. If Fibre Channel ports are required for use by other non-Nutanix modular servers then configure the unified ports, otherwise click Next to continue.


![Screenshot](images/scenario-1-21.png)


![Screenshot](images/scenario-1-22.jpeg)

If Breakout ports are required for other non-Nutanix servers then select them and click the Configure button, otherwise click Next to continue.


![Screenshot](images/scenario-1-23.jpeg)

Select the ports which will be server ports, i.e. ports connected to the blade chassis, then click the Configure button.


![Screenshot](images/scenario-1-24.jpeg)

Select Server as the role for the ports connecting to the blade chassis or the rackmount servers then click Save. For rackmount servers it is recommended to enable “Manual Server Numbering” and setting the server number to match their physical order in the rack.


![Screenshot](images/scenario-1-25.png)

After returning to the previous screen select the ports which will be the Ethernet uplinks from the Fabric Interconnects and click the Configure button. Select Ethernet Uplink as the role then click Save.


![Screenshot](images/scenario-1-26.png)

If necessary, click on Port Channels and add the multiple Ethernet uplink ports to a port channel. After all the server and Ethernet uplink ports and their optional port channels are configured, click Save.


![Screenshot](images/scenario-1-27.jpeg)

Click to select a port policy for Fabric Interconnect B, then select the policy just created so both FIs are configured with the same port policies.


![Screenshot](images/scenario-1-28.jpeg)

Select to create an NTP policy. Select the appropriate organization, enter a name for the policy, then click Next.


![Screenshot](images/scenario-1-29.png)


![Screenshot](images/scenario-1-30.png)

Enable NTP, enter at least one NTP server and select the appropriate timezone then click Create


![Screenshot](images/scenario-1-31.png)

After returning to the previous screen click to select a System QoS Policy. Select the appropriate organization, enter a name for the policy, then click Next.


![Screenshot](images/scenario-1-32.png)

Set the Best Effort QoS class to MTU 9216 then click Create


![Screenshot](images/scenario-1-33.png)

After returning to the previous screen click to select a Network Connectivity Policy. Select the appropriate organization, enter a name for the policy then click Next.


![Screenshot](images/scenario-1-34.png)

Set the preferred primary DNS server address then click Create. Once an NTP policy, Network Connectivity policy and System QoS policy are configured, click Next to move to the domain summary


![Screenshot](images/scenario-1-35.png)


![Screenshot](images/scenario-1-36.png)

Click Deploy and watch the domain profile progress through Validation and Configuration until the status is OK.


![Screenshot](images/scenario-1-37.png)


![Screenshot](images/scenario-1-38.png)

After the Domain profile is deployed, all modular chassis, the blades in the chassis and the rackmount servers will be discovered. Once all the chassis, blades and rackmounts have finished discovery the next steps can be completed.


![Screenshot](images/scenario-1-39.png)
