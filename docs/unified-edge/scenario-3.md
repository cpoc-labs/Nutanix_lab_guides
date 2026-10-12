# Scenario 3 · Initial Cluster Configuration

This scenario will take you to the initial configuration required for the cluster


On the newly created cluster, click Deployment Configuration; you will see the Cluster VIP 198.18.137.2.

  ![Screenshot](images/scenario-3-02.png)

Open a new tab and log in to the new Prism at 198.18.137.2 (admin / nutanix/4u).
You must create a new password; use C1sco12345!

  ![Screenshot](images/scenario-3-03.png)

For the Nutanix EULA, fill in the information, check the box, and click Accept and Continue:

- Name= cpoc
- Company= Cisco
- Job title= UE

 ![Screenshot](images/scenario-3-04.png)

Click Home at the top, select Storage, then click + Storage Container.

  ![Screenshot](images/scenario-4-01.png)


Add the name DS-1, click Advanced Settings, and under Reserved Capacity enter 1000 GB (the same as the Advertised Capacity), then click Save.

  ![Screenshot](images/scenario-4-02.png)

Click Table to view the new DS-1 storage.

  ![Screenshot](images/scenario-4-03.png)

From the top drop-down menu, select Settings and click Rebuild Capacity Reservation.

!!! note
    Without this setting enabled, the cluster will accept incoming writes even if all blocks cannot completely heal during failures.

    After enabling it, the cluster will refuse new writes if they cannot be fully protected during failures.

  ![Screenshot](images/scenario-4-04.png)

In the same Settings menu, scroll up, click Cluster Details, add the Data Service IP 198.18.137.3, and save.

 ![Screenshot](images/scenario-4-05.png)

Then scroll down to Manage VM High Availability, check the box, save, and click OK.

  ![Screenshot](images/scenario-4-06.png)

Remediate all NCC failures and warnings.

  ![Screenshot](images/scenario-4-07.png)

Go to Health, click Actions, and select Run NCC Checks.

  ![Screenshot](images/scenario-4-08.png)
  ![Screenshot](images/scenario-4-09.png)

## Deploy and Register Cluster with Prism Central

These instructions assume the Prism Central
instance or cluster used to deploy the Nutanix
cluster will also be the one used long-term for
management. If not, deploy a new Prism Central
instance or cluster on the new Nutanix cluster, then
register that cluster with the Prism Central instance
running on itself.

