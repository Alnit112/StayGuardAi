# StayGuard AI

An AI-powered guest message classifier for Airbnb hosts.

## What it does

StayGuard AI automatically reads incoming guest messages, classifies them by risk level (low, medium, high), generates AI-drafted responses, and escalates high-risk messages to the property manager via Gmail alert.

## Built with

- Claude's API (message classification + response generation)
- Make (automation workflows)
- Airtable (incident logging)
- Gmail (escalation alerts)

## How it works

1. Guest sends a message to the Airbnb host
2. StayGuard AI classifies the message by risk level
3. Low/medium risk — AI generates a draft response
4. High risk — property manager is alerted via Gmail and incident is logged in Airtable

## Live product

[stayguardai.com](https://stayguardai.com)
