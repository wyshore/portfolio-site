---
title: "Instrumented Test Rig and Reporting Application"
description: "Purpose-built test hardware and software to characterize a mechanism properly."
date: "2026-07-15"
tags: ["Test & Validation","Python","Instrumentation"]
draft: true
type: "work"
term: "3dm-2026"
summary: "Built the sensing hardware and the desktop software to characterize the arm, replacing a manual measure-and-spreadsheet workflow."
---
<p>Validating the arm's performance needed data that did not exist yet, so I built the test setup before I built confidence in the mechanism. The rig runs on an Arduino and integrates LiDAR and ultrasonic sensors, a load cell, a pressure transducer and a custom linear position sensor I made by driving a rotary potentiometer through a slider-crank linkage. I made up every cable and connector as sensors were added. On the software side I wrote a Python desktop application that captures each run over serial, plots it live, computes the metrics and generates test reports automatically. It replaced a manual workflow of reading a terminal and pasting numbers into a spreadsheet. The most useful result was a negative one. I had expected closed-loop cushion control to beat a fixed valve opening, and the data showed it did not. We kept the simpler design.</p>