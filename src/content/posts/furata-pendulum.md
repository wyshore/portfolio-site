---
title: "Furata Pendulum"
description: "I've set out to design and build a custom desktop Furata Pendulum"
date: "2026-01-30"
featureImage: "/images/FurataPendulumAssy.png"
tags: ["Engineering"]
---

<p>A Furata Pendulum, otherwise known as a rotary inverted pendulum is a device which consists of a driven base which rotates about the vertical axis, and a freely swinging pendulum attached such that the base rotation can balance the pendulum in an upright position. </p><h2 id="project-goals">Project Goals</h2><p><br>My goal for this project is to design and build a compact, desktop Furata Pendulum based on an ESP32. I've laid out the following requirements:</p><ul><li>Stay within a budget of $150</li><li>Must balance effectively, balancing motion should be minimal and smooth&nbsp;</li><li>Final design should be compact and aesthetic</li><li>Must be quiet enough to not be annoying</li><li>Utilize an ESP-WROOM-32 Dev board (I had an extra one lying around)</li><li>Not a requirement: Would be nice to develop a user interface to adjust system parameters once it is functioning</li></ul><p></p><p>I think this project will present a rich learning opportunity in the field of control systems which I am beginning to learn, and what better way to learn than with a hands on project!</p><h2 id="stage-1-design-and-parts">Stage 1: Design and Parts</h2><p><br>To begin his design, I tabulated all the components I will need to build the system, below is a list of all the parts I sourced:<br></p><table>
<thead>
<tr>
<th style="text-align:left">Part Name</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Cost $(CAD)</th>
<th style="text-align:left">Qty</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Microcontroller</td>
<td style="text-align:left">ESP-WROOM-32</td>
<td style="text-align:left">n/a</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Power Supply</td>
<td style="text-align:left">12V USBC Module</td>
<td style="text-align:left">1.63</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Power Switch</td>
<td style="text-align:left">JR223B Induction Capacitive Switch</td>
<td style="text-align:left">5.41</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Voltage Regulator</td>
<td style="text-align:left">Step down buck converter</td>
<td style="text-align:left">2.50</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Motor Driver</td>
<td style="text-align:left">DRV8313 SimpleFOC Mini</td>
<td style="text-align:left">6.61</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Motor</td>
<td style="text-align:left">GM2804 motor + AS5048A Encoder</td>
<td style="text-align:left">52.38</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Encoder</td>
<td style="text-align:left">AS5048A</td>
<td style="text-align:left">11.59</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Slip Ring</td>
<td style="text-align:left">6 channel</td>
<td style="text-align:left">12.09</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Frame/Base</td>
<td style="text-align:left">3D Printed frame</td>
<td style="text-align:left">n/a</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Wire Terminals</td>
<td style="text-align:left">JINH CMK633</td>
<td style="text-align:left">5.33</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Fasteners</td>
<td style="text-align:left">SHCS M2, M3 620pcs kit</td>
<td style="text-align:left">13.79</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">M5 Steel Rods</td>
<td style="text-align:left">30x 22mm, 5x 100mm</td>
<td style="text-align:left">14.02</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Shrink tube</td>
<td style="text-align:left">Shrink tube 127pcs bag</td>
<td style="text-align:left">3.30</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Bearings</td>
<td style="text-align:left">Ball bearings, 5pcs</td>
<td style="text-align:left">3.33</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">Wire</td>
<td style="text-align:left">20awg wire rolls, 6 colour, 10ft ea</td>
<td style="text-align:left">20.04</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><strong>Total Cost</strong> : <strong>$152.02</strong></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><br>I chose to hit SolidWorks and try making a rough design to get an idea of how it will look and function.</p><figure class="kg-image-card"><img src="/images/FurataPendulumAssy.png" class="kg-image" alt="" loading="lazy" width="1052" height="894"></figure><p><br>This rough form factor meets my requirement for compactness at a total height of only 220mm to the top of the pendulum. <br><br>While hashing out the initial design, I had to consider a few functional requirements. I quickly realized that the wires from the top encoder would twist relative to the fixed base, the two solutions for this would be to either restrict the rotation of the base, or to implement a slip ring, allowing the wires to rotate freely. I chose to use a slip ring. </p>
