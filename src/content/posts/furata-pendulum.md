---
title: "Furata Pendulum"
description: "I've set out to design and build a custom desktop Furata Pendulum"
date: "2026-01-30"
featureImage: "/images/FurataPendulumAssy.png"
tags: ["Engineering"]
---

A Furata Pendulum, otherwise known as a rotary inverted pendulum, is a device which consists of a driven base which rotates about the vertical axis, and a freely swinging pendulum attached such that the base rotation can balance the pendulum in an upright position.

## Project Goals

My goal for this project is to design and build a compact, desktop Furata Pendulum based on an ESP32. I've laid out the following requirements:

- Stay within a budget of $150
- Must balance effectively, balancing motion should be minimal and smooth
- Final design should be compact and aesthetic
- Must be quiet enough to not be annoying
- Utilize an ESP-WROOM-32 Dev board (I had an extra one lying around)
- Not a requirement: Would be nice to develop a user interface to adjust system parameters once it is functioning

I think this project will present a rich learning opportunity in the field of control systems which I am beginning to learn, and what better way to learn than with a hands-on project!

## Stage 1: Design and Parts

To begin the design, I tabulated all the components I will need to build the system. Below is a list of all the parts I sourced:

| Part Name | Description | Cost $(CAD) | Qty |
| :-- | :-- | :-- | :-- |
| Microcontroller | ESP-WROOM-32 | n/a | 1 |
| Power Supply | 12V USBC Module | 1.63 | 1 |
| Power Switch | JR223B Induction Capacitive Switch | 5.41 | 1 |
| Voltage Regulator | Step down buck converter | 2.50 | 1 |
| Motor Driver | DRV8313 SimpleFOC Mini | 6.61 | 1 |
| Motor | GM2804 motor + AS5048A Encoder | 52.38 | 1 |
| Encoder | AS5048A | 11.59 | 1 |
| Slip Ring | 6 channel | 12.09 | 1 |
| Frame/Base | 3D Printed frame | n/a | 1 |
| Wire Terminals | JINH CMK633 | 5.33 | 1 |
| Fasteners | SHCS M2, M3 620pcs kit | 13.79 | 1 |
| M5 Steel Rods | 30x 22mm, 5x 100mm | 14.02 | 1 |
| Shrink tube | Shrink tube 127pcs bag | 3.30 | 1 |
| Bearings | Ball bearings, 5pcs | 3.33 | 1 |
| Wire | 20awg wire rolls, 6 colour, 10ft ea | 20.04 | 1 |
| **Total Cost: $152.02** | | | |

I chose to hit SolidWorks and try making a rough design to get an idea of how it will look and function.

![](/images/FurataPendulumAssy.png)

This rough form factor meets my requirement for compactness at a total height of only 220mm to the top of the pendulum.

While hashing out the initial design, I had to consider a few functional requirements. I quickly realized that the wires from the top encoder would twist relative to the fixed base — the two solutions for this would be to either restrict the rotation of the base, or to implement a slip ring, allowing the wires to rotate freely. I chose to use a slip ring.
