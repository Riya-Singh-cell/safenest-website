# SafeNest – Discreet Domestic Safety Assistant 🌸

SafeNest is a **women safety web application** designed to provide discreet emergency assistance for individuals facing unsafe or abusive environments at home.

The platform enables users to **silently trigger emergency help**, record evidence, and share their real-time location with trusted contacts.

---

## Problem Statement

Many individuals experiencing domestic violence or unsafe environments **cannot openly access help** through visible applications or calls.

In such situations, they require:

- A **discreet way to trigger help**
- **Automatic evidence collection**
- **Real-time location sharing**
- **Quick emergency communication**

SafeNest aims to solve this problem by creating a **silent digital safety assistant**.

---

## Solution Overview

SafeNest provides a **web-based emergency mode** that activates when the user presses the SOS button.

Once activated, the system automatically:

1. Starts **video and audio recording** to collect evidence  
2. Fetches the user's **current GPS location**  
3. Displays the **exact address and coordinates**  
4. Starts a **countdown timer for emergency response**  
5. Sends an **SOS alert to trusted contacts**  
6. Opens **SMS, WhatsApp, and police call options**  
7. Uploads the recorded video to **cloud storage (Google Drive)**  

This allows the user to **silently alert others while collecting proof of the situation**.

---

## Key Features

### 🚨 SOS Emergency Button
A large red SOS button instantly activates safety mode.

### 📹 Automatic Video Recording
The application records video and audio evidence during emergencies.

### 📍 Live Location Tracking
The system detects the user's current location and shows:

- City  
- Area  
- State  
- Latitude and Longitude  
- Google Maps link  

### ⏱ Emergency Countdown System
A timer gives the user time to cancel the alert if triggered accidentally.

### 📩 SOS Alert System
After the timer ends:

- SMS message is prepared  
- WhatsApp alert is triggered  
- Police call option is activated  

### ☁ Cloud Evidence Storage
Recorded videos are uploaded to **Google Drive** to securely preserve evidence.

### 📱 Mobile Friendly Interface
The interface is responsive and optimized for smartphones.

---

## Technology Stack

**Frontend**
- HTML
- CSS
- JavaScript

**APIs & Services**
- Geolocation API
- MediaRecorder API
- OpenStreetMap Reverse Geocoding API
- Google Apps Script
- Google Drive Cloud Storage

**Development Tools**
- VS Code
- Git
- GitHub
- Ngrok (for mobile testing)

---

## How SafeNest Works

User presses the **SOS button**

↓

Camera and microphone begin recording

↓

User's **location is detected**

↓

A **countdown timer** begins

↓

If not cancelled, the system:

- Sends an SOS message  
- Shares location link  
- Uploads evidence video  
- Opens police call option  

---

## Future Improvements

Possible improvements for the SafeNest system include:

- Integration with **IoT panic buttons**
- Automatic **continuous video uploads**
- **AI-based violence detection**
- Integration with **emergency helpline systems**
- Secure **encrypted evidence storage**
- Dedicated **mobile application**

---

## Impact

SafeNest demonstrates how simple web technologies can be used to build a **life-saving safety tool**.

The goal is to create a **discreet, fast, and reliable emergency support system** that helps vulnerable individuals access help when they need it most.
