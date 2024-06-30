#                                                                              **Documentation for DEVS.**
   
   
   
   
   
## Installing Docker

To get started, you'll need to install Docker on your Windows/Linux system. You can do this by following the instructions in the official Docker documentation. 

### This guide provides instructions on how to install Docker on Linux and Windows systems.

### Installing Docker on Linux

To install Docker on your Linux system, follow the steps provided in the [official Docker documentation for Linux](https://docs.docker.com/desktop/install/linux-install/). This guide covers the installation process for various Linux distributions, including Ubuntu, Debian, Fedora, and CentOS.

### Installing Docker on Windows

To install Docker on your Windows system, follow the steps provided in the [official Docker documentation for Windows](https://docs.docker.com/desktop/install/windows-install/). This guide covers the installation process for Windows 10 and Windows Server 2016/2019.

## Becoming Root and Starting Docker

To use Docker, you'll need to become root on your system. To do this, open a terminal and type the following command:

```
sudo su
```

Enter your password when prompted. Then, navigate to the root of the system by typing the following command:

```
cd /
```

Finally, start Docker by typing the following command:

```
dockerd &
```

## Installing Dependencies and Running the Project

Now that Docker is running, you can start working on the project. Open a terminal and navigate to the monorepo and Hypatia directory. Then, install the dependencies for the monorepo by typing the following:

```
npm install
```

After that, navigate to the Hypatia folder and install the dependencies by typing the following command:

```
npm install
```

To run the project, you'll need to have a .env file in the Hypatia directory. Rename the file to .env when it's in the root of the project. Then, inside Hypatia, run the following command to compile the project:

```
npm run build-dev
```

Next, run the following command to start the database:

```
sh scripts/dbstart.sh
```

Finally, run the following command to start the Hypatia server:

```
npm run dev
```

## Running the SQL Script

