# CallForCode

## Objective

Help United Way to quickly approve applications based on the address (driver license or ID) and burnt house rating.

Reference: https://github.com/IBM/drones-iot-visual-recognition/blob/master/WildFires/WILDFIRES.md

## App Services

- Storage
    - Current Image file
    - Historical image file

- Database
    - Image file URL
    - Address
    - Coordinates
    - Historical image URL

- Google API
    - Coordinates > Address

- Image Recognition
    - Watson Image Recognition for rating

## Inputs/Outputs
Inputs:

- Who is sending the drones?
- Where are the drones going?
- Initial Data Collection
    - Drones are sent to scan the area and send back images and coordinates into some database
- Live Validation
- Drone flies to the address and then the rating process takes place
- In-Person Validation
- Address from the driver's license
- Pre-processed input from image recognitiion
- Historical satellite image (from Google?)
- Current image from drone
- Assumption: drone can send us coordinates (metadata of image file)
- Coordinates are used from drone image to lookup the address with Google API
- Compare the two images (historical and current) and give a rating
- Output: Address and comparison rating


## Existing Process
- CalFire provided information to United Way
- Rank: is the house completely destroyed or damage
- They were doing this on foot, communicate back to their bases, happening over a long period of time

## Existing Constraints
- The whole area is closed
The Fire Department has a rule that you can't fly during the day.
Night vision for Drone
Exterior is taken into account for the CalFire rating
If you're home is completely destroyed, we will give you a grant, if not
Unlivable situations are not taken into account be CalFire
Image Sources:




## Presentation Notes
Clusterduck
Patient Report transfer between iOS and Android
Core temperature monitoring
Carbon dioxide monitoring
Missing person count
United Way

Local responder + volunteer needs (they are concerned for their own homes, offices safety)

Emergency cash assistance to relocate (moving, first month's rent, deposit) while insurance and FEMA money hadn't kicked in

vetting applications, distributing funds directly

2000 individuals are still homeless or living in temporary shelter

United Way was not setup to administer cash grants as efficiently as they wish they would have

We didn't have the ability pushing out to the global audience

They didn't know who they agencies were, what they were doing or how they were helping and could help

How do we better get those messages out to people?

Determining which homes were actually impacted (vetting process)

Tracking individuals to get them the resources

Local hotspots?

Home sensors? What makes a home be "impacted"?

vetting > identification/profiles

Shasta counties is one of the 6 most vulnerable for disaster counties in CA

How do we help the responders be more efficient?

Completeness and transferability

Effectiveness and efficiency

Design and usability

Deploy solution on IBM Cloud

MAx 5 per team

translate high threshold burnt houses to a map.

