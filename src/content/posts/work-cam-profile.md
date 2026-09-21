---
title: "Optimized Cam Motion Profile"
description: "Rewriting a cam profile to remove vibration and follower separation."
date: "2026-06-01"
tags: ["Mechanical Design","Motion"]
type: "work"
term: "3dm-2026"
summary: "Redesigned a scan head's drive cam as an optimized polynomial profile, removing vibration and letting the arm run at the actuator's limit."
---
<p>A single-degree-of-freedom arm sweeps a scanning head into and out of a tire, and its trajectory is set entirely by a cam the follower rides on. The original profile caused aggressive jerk, unwanted vibration, and at higher speeds the follower would leave the cam altogether — which capped how fast the arm could be driven. I redesigned it as an optimized polynomial motion profile that minimizes both acceleration and jerk, modelled it in SolidWorks, and proved it first by machining the existing cam to the new shape. The improvement was immediate: the vibration and separation disappeared and the arm could be run as fast as the actuator allowed. The profile has since been adopted into the product. The harder half was manufacturability. The cam follows a cylindrical path, so the surface is three-dimensional. I reworked the geometry until it could be machined from a small piece of aluminum flat bar, and printed a 3D version along the way as a functional check.</p>