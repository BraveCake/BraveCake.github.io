
+++
date = '2026-07-03T22:01:04+03:00'
draft = false
title = 'WSLC Release'
description = 'Windows Subsystem for Linux Containers has been released. Is Microsoft planning to replace Docker Desktop with WSLC?'
+++

## Introduction

A few days ago, Microsoft announced **Windows Subsystem for Linux Containers (WSLC)**, a new container runtime for WSL. This is a significant step toward providing a more lightweight and better integrated solution for running Linux containers on Windows.

But does this mean Microsoft is trying to replace Docker Desktop?

## The Problem with Docker

Despite Docker being the most popular container platform, it comes with a few drawbacks. Docker Desktop relies on a background daemon and several supporting services, which consume additional system resources. On Windows, Docker Desktop also depends on WSL2 as the backend for Linux containers, adding another layer between the host operating system and the containers.

For many developers, this setup works well, but it can feel heavier than necessary when all they need is a simple way to build and run Linux containers.

## How WSLC Works

According to the official WSLC documentation, it consists of two main components:

1. **`wslc.exe`**, a command-line interface used to build, run, and manage containers.
2. **The WSLC API**, a Windows API that allows Windows applications to integrate Linux containers directly into their workflows.

The command-line interface is intentionally familiar to Docker users. It supports Docker-compatible workflows, including Docker Compose files and pulling images from Docker Hub.

Unlike Docker Desktop, WSLC is daemonless. Instead of relying on a long-running background service, it launches lightweight micro virtual machines using Hyper-V to run Linux containers. These microVMs are optimized for fast startup and low resource usage while providing strong isolation.

WSLC also supports hardware acceleration for graphics, networking, and GPU workloads, making it suitable for applications such as AI and machine learning that require hardware acceleration.

## Conclusion

Docker is far from dead. It remains the industry standard for container development and is widely used in production environments alongside Kubernetes.

WSLC is simply another option—one designed specifically for Windows. It provides a lighter and more integrated experience for running Linux containers without relying on Docker Desktop's architecture.

Whether it will eventually replace Docker Desktop for Windows developers remains to be seen, but it is clear that Microsoft is investing heavily in improving the developer experience on Windows.
